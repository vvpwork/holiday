'use strict';

var slides = document.querySelectorAll('#slides .slider__items');
var currentSlide = 0;

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slider__items';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slider__items show';
}

var next = document.getElementById('slider-next');
var previous = document.getElementById('slider-preview');

next.onclick = function () {

    nextSlide();
};
previous.onclick = function () {

    previousSlide();
};
'use strict';

var slidesDem = document.querySelectorAll('#sliders .slider__items--demands');
var currentSlideDem = 0;

function nextSlideDem() {
    goToSlideDem(currentSlideDem + 1);
}

function previousSlideDem() {
    goToSlideDem(currentSlideDem - 1);
}

function goToSlideDem(n) {
    slidesDem[currentSlideDem].className = 'slider__items--demands';
    currentSlideDem = (n + slidesDem.length) % slidesDem.length;
    slidesDem[currentSlideDem].className = 'slider__items--demands showing';
}

var nextDem = document.getElementById('slider-next--demands');
var previousDem = document.getElementById('slider-preview--demands');

nextDem.onclick = function () {

    nextSlideDem();
};
previousDem.onclick = function () {

    previousSlideDem();
};