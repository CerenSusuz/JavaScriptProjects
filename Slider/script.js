var models = [{
        name: 'Lorem, ipsum dolor.',
        image: 'img/imgOne.jpg',
        link: 'https://pixabay.com/tr/'
    },
    {
        name: 'Lorem, ipsum dolor.',
        image: 'img/imgTwo.jpg',
        link: 'https://pixabay.com/tr/'
    },
    {
        name: 'Lorem, ipsum dolor.',
        image: 'img/imgThree.jpg',
        link: 'https://pixabay.com/tr/'
    },
    {
        name: 'Lorem, ipsum dolor.',
        image: 'img/imgFour.jpg',
        link: 'https://pixabay.com/tr/'
    },
    {
        name: 'Lorem, ipsum dolor.',
        image: 'img/imgFive.jpg',
        link: 'https://pixabay.com/tr/'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration: '1500',
    random: false
};

init(settings);
document.querySelector('.fa-arrow-left').addEventListener('click', function() {
    index--;
    showSlide(index);
    console.log(index);
});
document.querySelector('.fa-arrow-right').addEventListener('click', function() {
    index++;
    showSlide(index);
    console.log(index);
});
document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        init(settings);
    })
})
function init(settings) {
    var prev;
    interval = setInterval(function() {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;
        } else {
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}
function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}