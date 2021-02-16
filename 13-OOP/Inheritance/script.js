  // firstly, let's create our main function constructor
  // Person Constructor

  function Person(name) {
      this.name = name;
  }
  Person.prototype.introduce = function() {
      console.log("Hello My name is " + this.name);
  }
  Person.prototype.giveInfo = function() {
      console.log("I am a human. I eating, sleeping, reading book etc.");
  }

  // secondly, let's prepare the teacher constructor based on the person constructor
  // Teacher Constructor

  // let's take properties and methods from the Person constructor
  function Teacher(name, branch, numOfStudent) {
      Person.call(this, name);
      this.branch = branch;
      this.numOfStudent = numOfStudent;
  }
  Teacher.prototype = Object.create(Person.prototype);
  // then, let's define teacher-special methods

  Teacher.prototype.teach = function() {
      console.log("I am teaching " + this.branch);
  }
  Teacher.prototype.giveNumberOfStudent = function() {
      console.log(`I have ${this.numOfStudent} students`);
  }


  // Testing Person
  let personOne = new Person('Ceren');
  personOne.introduce();
  // Hello My name is Ceren -> Worked

  // Testing Teacher
  let teacherOne = new Teacher('Ceren Susuz', 'Web Developing', 125);
  teacherOne.introduce();
  // Hello My name is Ceren Susuz
  teacherOne.teach();
  // I am teaching Web Developing
  teacherOne.giveNumberOfStudent();
  // I have 125 students