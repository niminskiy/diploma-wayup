'use strict';

//---modal---
var modal = document.querySelector('.modal-call');
var overflow = document.createElement('div');
var btns = document.querySelectorAll('.open-window');

function openWin() {
  overflow.className = "overflow-call";
  document.body.appendChild(overflow);
  var height = modal.offsetHeight;
  modal.style.marginTop = -height / 2 + "px";
  modal.style.top = "50%";
}

if (!Element.prototype.remove) {
  Element.prototype.remove = function remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

overflow.onclick = function () {
  modal.style.top = "-100%";
  overflow.remove();
};

btns.forEach(function(btn) {
  btn.addEventListener('click', openWin);
});

//---burger menu---

let burger = document.getElementById('burger');
let menu = document.getElementById('menu');

burger.addEventListener('click', function() {
  menu.classList.toggle('active');
});

//---slider---
const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
  let slide;
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = n => {
  let dot;
  for (dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

let interval = setInterval(nextSlide, 2000);

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
    clearInterval(interval);
  });
});

next.addEventListener('click', nextSlide);
next.addEventListener('click', () => {
  clearInterval(interval);
});

prev.addEventListener('click', prevSlide);
prev.addEventListener('click', () => {
  clearInterval(interval);
});