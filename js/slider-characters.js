'use-strict'
var swiper = new Swiper(".story__characters--slider", {
  effect: "coverflow",
  grabCursor: true,
  spaceBetween: 5,
  loop: true,
  slidesPerView: 1.5,
  loopedSlides: 2,
  resizeObserver: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    700: {
      spaceBetween: 0,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 2.75,
      spaceBetween: 5,
    },
    1300: {
      slidesPerView: 2.75,
      spaceBetween: 0,
      centeredSlides: false,
    }
  }
});
/* @media and background image for slider */
const shadow = document.querySelectorAll('.swiper-slide-shadow-coverflow')
const characters = [...document.getElementsByTagName('figcaption')]
let kawaneko = 0
let orenjiiro = 0
let pinku = 0
let tenshi = 0
let jaakuna = 0
characters.forEach(element => {
  if (element.innerText == "Kawaneko") {
    kawaneko = element
  }
  if (element.innerText == "Orenjiiro") {
    orenjiiro = element
  }
  if (element.innerText == "Pinku") {
    pinku = element
  }
  if (element.innerText == "Tenshi") {
    tenshi = element
  }
  if (element.innerText == "Jaakuna") {
    jaakuna = element
  }
})
let parentWidth = 0
let parentHeight = 0
shadow.forEach(element => {
  if (element == kawaneko.parentElement.nextElementSibling) {
    parentWidth = element.parentElement.offsetWidth
    element.style.cssText += 'background-image:url(' + kawaneko.parentElement.firstChild.src + ')!important;';
    element.nextElementSibling.style.cssText += 'background-image:url(' + kawaneko.parentElement.firstChild.src + ')!important;';
    if (parentWidth < 400) {
      element.style.cssText += 'background-size:' + parentWidth + 'px;';
      element.nextElementSibling.style.cssText += 'background-size:' + parentWidth + 'px;';
    }
  } else if (element == orenjiiro.parentElement.nextElementSibling) {
    parentWidth = element.parentElement.offsetWidth
    parentHeight = element.parentElement.firstChild.firstChild.offsetHeight
    element.style.cssText += 'background-image:url(' + orenjiiro.parentElement.firstChild.src + ')!important;';
    element.nextElementSibling.style.cssText += 'background-image:url(' + orenjiiro.parentElement.firstChild.src + ')!important;';
    if (parentWidth < 400 && parentHeight < 400) {
      element.style.cssText += 'background-size:' + parentWidth + 'px ' + parentHeight + 'px;';
      element.nextElementSibling.style.cssText += 'background-size:' + parentWidth + 'px ' + parentHeight + 'px;';
    } else if (parentWidth < 400 && parentHeight >= 400) {
      element.style.cssText += 'background-size:' + parentWidth + 'px 400px;';
      element.nextElementSibling.style.cssText += 'background-size:' + parentWidth + 'px 400px;';
    }
  } else if (element == pinku.parentElement.nextElementSibling) {
    parentWidth = element.parentElement.offsetWidth
    parentHeight = element.parentElement.firstChild.firstChild.offsetHeight
    element.style.cssText += 'background-image:url(' + pinku.parentElement.firstChild.src + ')!important;';
    element.nextElementSibling.style.cssText += 'background-image:url(' + pinku.parentElement.firstChild.src + ')!important;';
    if (parentWidth < 400 && parentHeight < 400) {
      element.style.cssText += 'background-size:' + parentWidth + 'px ' + parentHeight + 'px;';
      element.nextElementSibling.style.cssText += 'background-size:' + parentWidth + 'px ' + parentHeight + 'px;';
    } else if (parentWidth < 400 && parentHeight >= 400) {
      element.style.cssText += 'background-size:' + parentWidth + 'px 400px;';
      element.nextElementSibling.style.cssText += 'background-size:' + parentWidth + 'px 400px;';
    }
  }else if (element == tenshi.parentElement.nextElementSibling) {
    parentWidth = element.parentElement.offsetWidth
    element.style.cssText += 'background-image:url(' + tenshi.parentElement.firstChild.src + ')!important;';
    element.nextElementSibling.style.cssText += 'background-image:url(' + tenshi.parentElement.firstChild.src + ')!important;';
    if (parentWidth < 400) {
      element.style.cssText += 'background-size:' + parentWidth + 'px;';
      element.nextElementSibling.style.cssText += 'background-size:' + parentWidth + 'px;';
    } else {
      element.style.cssText += 'background-size:400px;';
      element.nextElementSibling.style.cssText += 'background-size:400px;';
    }
  } else if (element == jaakuna.parentElement.nextElementSibling) {
    parentWidth = element.parentElement.offsetWidth
    parentHeight = element.parentElement.firstChild.firstChild.offsetHeight
    element.style.cssText += 'background-image:url(' + jaakuna.parentElement.firstChild.src + ')!important;';
    element.nextElementSibling.style.cssText += 'background-image:url(' + jaakuna.parentElement.firstChild.src + ')!important;';
    if (parentWidth < 400 && parentHeight < 400) {
      element.style.cssText += 'background-size:' + parentWidth + 'px ' + parentHeight + 'px;';
      element.nextElementSibling.style.cssText += 'background-size:' + parentWidth + 'px ' + parentHeight + 'px;';
    } else if (parentWidth < 400 && parentHeight >= 400) {
      element.style.cssText += 'background-size:' + parentWidth + 'px 400px;';
      element.nextElementSibling.style.cssText += 'background-size:' + parentWidth + 'px 400px;';
    }
  }
})