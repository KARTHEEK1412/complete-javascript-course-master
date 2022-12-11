'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////
//practise DOM
// console.log(document.documentElement);
const header1 = document.querySelector('.header');
const allsections = document.querySelectorAll('.sections');

//creating and appending an element using dom
const message1 = document.createElement('div');
//adding an css class to the message html element
message1.classList.add('cookie-message');
//element .innerHTML used to edit the data in html element
message1.innerHTML =
  'cookie message <button class="btn btn--close=cookie">got it!</button>';

// adding an message element to the html in header

header1.prepend(message1);
//document.querySelector('.head').append(message1);
//header1.after(message1);
//header1.before(message1);
/*document.querySelector('.btn--close-cookie').addEventListener('click',fuction(){
  message1.parentElement.removeChild(message1);
});*/
// used for manipulating the css variable property
const stylesheet = document.styleSheets[1];
const rootRule = [...stylesheet.cssRules].find(r => r.selectorText === ':root');
rootRule.style.setProperty('--color-primary', 'orangered');
//scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behaviour: 'smooth' });
});
// section1.scrollIntoView({ behaviour: 'smooth' });
//event propogations

/*const randomint = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomcol = () =>
  `rgb(${randomint(0, 255)},${randomint(0, 255)},${randomint(0, 255)})`;
console.log(randomcol());
//
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcol();
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcol();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcol();
});*/
//nav links scrooling
// 1.implementing scrolling using foreach method
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behaviour: 'smooth' });
//   });
// });
// 2.using event delegations
/*document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behaviour: 'smooth' });
  }
});*/

//building an tabbed content

const tabs = document.querySelectorAll('.operations__tab'); //used for tab
const tabsContainer = document.querySelector('.operations__tab-container'); //used for 3 tabs
const tabsContent = document.querySelectorAll('.operations__content'); //used for content in tab

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log('clicked: ', clicked);

  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //before adding active component we removed all specialities above

  clicked.classList.add('operations__tab--active');
  //activating contenet area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
///
// passing arguments  to event handlers
//fading using mouseover
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelectorAll('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});
nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.e.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.e.closest('.nav').querySelectorAll('.img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

//adding scroll to the
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

//intersection of API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshhold: 0.1,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const stickynav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const header = document.querySelector('.header');
const headerObserver = new IntersectionObserver(stickynav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

//revealing sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//building slider component
//slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i})`%));
const slides = document.querySelectorAll('.slide');
const btnleft = document.querySelector('.slider__btn--left');
const btnright1 = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
const dotcontainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translatex(${100 * (i - slide)}`)
  );
};

//next slide right
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
//previous slide function
const previousSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

const createdots = function () {
  slides.forEach(function (_, i) {
    dotcontainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createdots();
btnright1.addEventListener('click', nextSlide);
btnleft.addEventListener('click', previousSlide);
document.addEventListener('keydown', function (e) {
  //   if (e.key === 'ArrowRight'&& nextSlide()) || (e.key === 'ArrowLeft' && previousSlide());
  if (e.key === 'ArrowLeft') previousSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dotcontainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots_dot')) {
    const { slide } = e.target.dataset.slide;
    goToSlide(slide);
  }
});
////////////////

//building slider component
/*const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();
};
*/
