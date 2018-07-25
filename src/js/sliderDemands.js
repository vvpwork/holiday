'use strict'

let slidesDem = document.querySelectorAll('#sliders .slider__items--demands');
let currentSlideDem = 0;

function nextSlideDem(){
    goToSlideDem(currentSlideDem+1);
}

function previousSlideDem(){
    goToSlideDem(currentSlideDem-1);
}

function goToSlideDem(n){
    slidesDem[currentSlideDem].className = 'slider__items--demands';
    currentSlideDem = (n+slidesDem.length)%slidesDem.length;
    slidesDem[currentSlideDem].className = 'slider__items--demands showing';
}

let nextDem = document.getElementById('slider-next--demands');
let previousDem = document.getElementById('slider-preview--demands');

nextDem.onclick = function(){
    
    nextSlideDem();
};
previousDem.onclick = function(){
    
    previousSlideDem();
};