function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isFinish = function() {
    return this.questions.length === this.questionIndex;
}

var question1 = new Question('What does HTML stand for?', ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Blank Answer'], 'Hyper Text Markup Language');

var question2 = new Question('Who is making the Web standards?', ['The World Wide Web Consortium', 'Google', 'Microsoft', 'Blank Answer'], 'The World Wide Web Consortium');

var question3 = new Question('Choose the correct HTML element for the largest heading:', ['h6', 'h1', 'heading', 'Blank Answer'], 'h1');

var question4 = new Question('How can you open a link in a new tab/browser window?', ['a href="url" target="_blank"', 'a href="url" target="new"', 'a href="url" new', 'Blank Answer'], 'a href="url" target="_blank"');

var question5 = new Question('Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?', ['src', 'alt', 'title', 'Blank Answer'], 'alt');

var question6 = new Question('What does CSS stand for?', ['Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Blank Answer'], 'Cascading Style Sheets');

var question7 = new Question('Where in an HTML document is the correct place to refer to an external style sheet?', ['In the body section', 'In the head section', 'At the end of the document', 'Blank Answer'], 'In the head section');

var question8 = new Question('Which HTML tag is used to define an internal style sheet?', ['css', 'style', 'script', 'Blank Answer'], 'style');

var question9 = new Question('Which is the correct CSS syntax?', ['body:color=black', 'body {color:black;}', '{body:color=black;}', 'Blank Answer'], 'body {color:black;}');

var question10 = new Question('How do you insert a comment in a CSS file?', [' "this is comment" ', '//this is *-comment//', '/* this is a comment */', 'Blank Answer'], '/* this is a comment */');

var question11 = new Question('Inside which HTML element do we put the JavaScript?', ['js', 'script', 'css', 'Blank Answer'], 'script');

var question12 = new Question('Where is the correct place to insert a JavaScript?', ['The body section', 'Both the head and the body section are correct', 'The head section', 'Blank Answer'], 'Both the head and the body section are correct');

var question13 = new Question('What is the correct syntax for referring to an external script called "xxx.js"?', ['script src="xxx.js"', 'script href="xxx.js"', 'script name="xxx.js"', 'Blank Answer'], 'script src="xxx.js"');

var question14 = new Question('How do you call a function named "myFunction"?', ['come myFunction()', 'call function myFunction()', 'myFunction()', 'Blank Answer'], 'myFunction()');

var question15 = new Question('How do you write "Hello World" in an alert box?', ['msg("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");', 'Blank Answer'], 'alert("Hello World");');

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15];

// test 
// var quiz = new Quiz(questions);
// console.log(quiz.getQuestion());
// quiz.guess('Hyper Text Markup Language');
// console.log(quiz.getQuestion());
// quiz.guess('The World Wide Web Consortium');
// console.log(quiz.getQuestion());
// quiz.guess('<heading>');
// console.log(quiz.score);

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
    if (quiz.isFinish()) {
        showScore();
    } else {

        var question = quiz.getQuestion();
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;

        for (var i = 0; i < choices.length; i++) {
            var item = document.querySelector('#choice' + i);
            item.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess) {
    var btn = document.getElementById(id);
    btn.onclick = function() {
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore() {
    var score = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = score;
}

function showProgress() {
    var totalQuestions = quiz.questions.length;
    var questionNumber = quiz.questionIndex;
    var html = `Question ${questionNumber+1} of ${totalQuestions}`;
    if (questionNumber == totalQuestions) {
        document.querySelector('#progress').innerHTML = html;
    }
}