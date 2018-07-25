'use strict'

let slides = document.querySelectorAll('#slides .slider__items');
let currentSlide = 0;


function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slider__items';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__items show';
}

let next = document.getElementById('slider-next');
let previous = document.getElementById('slider-preview');

next.onclick = function(){
    
    nextSlide();
};
previous.onclick = function(){
    
    previousSlide();
};

