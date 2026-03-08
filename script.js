//Burger-menu

const menuBtn = document.querySelector('.header__menu');
const header = document.querySelector('.header')
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__menu--active');
    header.classList.toggle('header--mobile')
})

//Slider arrows

const sliderArrows = document.querySelector('.slider-arrows');
const sliderArrowsImgs = sliderArrows.querySelectorAll('.slider-arrows__img');
const arrowLeft = sliderArrows.querySelector('.slider-arrows__arrow--left')
const arrowRight = sliderArrows.querySelector('.slider-arrows__arrow--right');

let currentArrowsIndex = 0;
showSlidesArrows(currentArrowsIndex);

function showSlidesArrows(index) {
    sliderArrowsImgs.forEach(img => img.classList.add('hide'));
    sliderArrowsImgs[index].classList.remove('hide');
}

arrowLeft.addEventListener('click', () => {
    currentArrowsIndex--;
    if(currentArrowsIndex<0) currentArrowsIndex = sliderArrowsImgs.length - 1;

    showSlidesArrows(currentArrowsIndex);
})

arrowRight.addEventListener('click', () => {
    currentArrowsIndex++;
    if(currentArrowsIndex >= sliderArrowsImgs.length) currentArrowsIndex = 0;
    showSlidesArrows(currentArrowsIndex);
})

//Slider Arrows

const sliderDots = document.querySelector('.slider-dots');
const sliderDotsImgs = sliderDots.querySelectorAll('.slider-dots__img');
const dotsWrapper = sliderDots.querySelector('.slider-dots__nav');

let dots = [];

sliderDotsImgs.forEach((_,i) => {
    let dot = document.createElement('div');
    dot.classList.add('slider-dots__nav-dot');
    dotsWrapper.append(dot);
    dots.push(dot);
})

showSlidesDots(0);

function showSlidesDots(index) {
    sliderDotsImgs.forEach(img => img.classList.add('hide'));
    sliderDotsImgs[index].classList.remove('hide');
    dots.forEach(dot=>dot.classList.remove('slider-dots__nav-dot--active'));
    dots[index].classList.add('slider-dots__nav-dot--active');
}

dots.forEach((dot, currentIndex) => dot.addEventListener('click', ()=> {
    showSlidesDots(currentIndex);
}))