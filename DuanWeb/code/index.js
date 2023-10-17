const listImage = document.querySelector('.list-images');
const imgs = document.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const visibleImgs = Array.from(imgs).slice(0, 3);
const width = visibleImgs[0].offsetWidth;
const length = visibleImgs.length;
let current = 1;

const handleChangeSlide = () => {
    if (current === length - 1) {
        current = 0;
    } else {
        current++;
    }
    listImage.style.transform = `translateX(${width * -1 * visibleImgs.indexOf(imgs[current])}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
};

let handleEventChangeSlide = setInterval(handleChangeSlide, 5000);

btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
});

btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    if (current === 0) {
        current = length - 1;
    } else {
        current--;
    }
    listImage.style.transform = `translateX(${width * -1 * visibleImgs.indexOf(imgs[current])}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
    handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
});


var fuT = new Date("jan 1, 2024 00:00:00").getTime()

setInterval(function() {
    var noW = new Date().getTime()
    var D = fuT - noW
    var days = Math.floor(D / (1000 * 60 * 60 * 24))
    var hours = Math.floor(D / (1000 * 60 * 60))
    var minutes = Math.floor(D / (1000 * 60))
    var seconds = Math.floor(D / (1000))

    hours %= 24
    minutes %= 60
    seconds %= 60

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000)