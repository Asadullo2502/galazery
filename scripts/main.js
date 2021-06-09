AOS.init();
AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 600,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  slidesToScroll: 2,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      loop: false
    }
  }
})

let body = document.querySelector('body')
let toUp = document.querySelector('#to-up')
let header = document.querySelector('.header')
let overlay = document.querySelector('.overlay')
let bookingBtns = document.querySelectorAll('.booking-btns')
let apply = document.querySelector('.apply');
let applyBtn = document.querySelector('.apply-close__img')
let applyInput = document.querySelector('.apply-form__phone-input');
let form = document.querySelector('.apply-form')
let successCard = document.querySelector('.success-card');
let successBtn = document.querySelector('.success-card__btn');
let failCard = document.querySelector('.fail-card')
let failBtn = document.querySelector('.fail-card__btn');
let textArea = document.querySelector('#abt-order');
let burger = document.querySelector('.burger')
let minMenu = document.querySelector('.header-inner-right')
let links = document.querySelectorAll('.header-inner-right-list__link')

links.forEach(elem => {
  elem.addEventListener('click', (e) => {
    burger.classList.remove('active')
    minMenu.classList.remove('show')
  })
})

burger.addEventListener('click', (e) => {
  e.preventDefault()
  burger.classList.toggle('active')
  minMenu.classList.toggle('show')
})

window.addEventListener('scroll', function () {
  if (pageYOffset > 1000) {
    toUp.classList.add('show')
  } else {
    toUp.classList.remove('show')
  };

  if (pageYOffset > 300) {
    header.style.backgroundColor = 'rgba(0,0,0, 0.3)'
    header.style.backdropFilter = 'blur(30px)'
  } else {
    header.style.backgroundColor = '#2F333D'
  }

});

applyBtn.addEventListener('click', e => {
  e.preventDefault()
  apply.classList.remove('open')
  overlay.classList.remove('visible')
  body.classList.remove('no-scroll')
})

function success() {

  successCard.classList.add('opened');
  overlay.style.zIndex = '9'
  body.classList.add('no-scroll')
  successBtn.addEventListener('click', function () {
    overlay.classList.remove('visible');
    apply.classList.remove('open')
    successCard.classList.remove('opened')
    overlay.style.zIndex = '6'
    body.classList.remove('no-scroll')
    applyInput.value = '+998';
    textArea.value = ''
  })

}

function fail() {
  failCard.classList.add('fail')
  overlay.style.zIndex = '9'
  body.classList.add('no-scroll')
  failCard.addEventListener('click', function () {
    overlay.style.zIndex = '6'
    failCard.classList.remove('fail')
  })
}

bookingBtns.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    overlay.classList.add('visible');
    apply.classList.add('open')
    body.classList.add('no-scroll')
  })
})

// bookBtn.addEventListener('click', function (e) {
//   e.preventDefault();
//   overlay.classList.add('visible');
//   apply.classList.add('open')
//   body.classList.add('no-scroll')
// })

overlay.addEventListener('click', function () {
  this.classList.remove('visible')
  apply.classList.remove('open')
  body.classList.remove('no-scroll')
})

function allnumeric(inputtxt) {
  var numbers = /^[+]?[0-9]+$/;
  if (inputtxt.value.match(numbers) && inputtxt.value.length == 13) {
    // alert('Your Registration number has accepted....');
    success()
    applyInput.classList.remove('false')
    return true;
  } else {
    // alert('Bu yerga faqat son kiritiladi');
    fail();
    applyInput.classList.add('false')
    return false;
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  allnumeric(applyInput)
})