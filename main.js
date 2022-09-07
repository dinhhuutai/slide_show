"use strict";

const slides = document.querySelectorAll('.slideshow');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const dots = document.querySelectorAll('.dot');

var lenght = slides.length;

btnLeft.onclick = () => {
    for(var i = 0; i < lenght; i++) {
        if(slides[i].classList.contains('open')){
            slides[i].classList.remove('open');
            dots[i].classList.remove('dot-open');

            if(i==0){
                slides[lenght-1].classList.add('open');
                dots[lenght-1].classList.add('dot-open');
                break;
            }
            slides[i-1].classList.add('open');
            dots[i-1].classList.add('dot-open');
            break;
        }
    }
}

btnRight.onclick = () => {
    for(var i = 0; i < lenght; i++) {
        if(slides[i].classList.contains('open')){
            slides[i].classList.remove('open');
            dots[i].classList.remove('dot-open');

            if(i==lenght-1){
                slides[0].classList.add('open');
                dots[0].classList.add('dot-open');
                break;
            }
            slides[i+1].classList.add('open');
            dots[i+1].classList.add('dot-open');
            break;
        }
    }
}


