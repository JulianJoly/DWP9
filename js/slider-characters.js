'use-strict'
var swiper = new Swiper(".story__characters--slider", {
  effect: "coverflow",
  grabCursor: true,
  spaceBetween: 5,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  slidesPerView: 3,
  loopedSlides: 2,
});

const shadow = document.querySelectorAll('.swiper-slide-shadow-coverflow')
const characters = [...document.getElementsByTagName('figcaption')]
let kawaneko
let orenjiiro
let pinku
let tenshi
let jaakuna
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
shadow.forEach(element => {
  if (element == kawaneko.parentElement.nextElementSibling) {
    element.style.cssText += 'background-image:url(' + kawaneko.parentElement.firstChild.src + ')!important';
    element.nextElementSibling.style.cssText += 'background-image:url(' + kawaneko.parentElement.firstChild.src + ')!important';
  }
  if (element == orenjiiro.parentElement.nextElementSibling) {
    element.style.cssText += 'background-image:url(' + orenjiiro.parentElement.firstChild.src + ')!important';
    element.nextElementSibling.style.cssText += 'background-image:url(' + orenjiiro.parentElement.firstChild.src + ')!important';
  }
  if (element == pinku.parentElement.nextElementSibling) {
    element.style.cssText += 'background-image:url(' + pinku.parentElement.firstChild.src + ')!important';
    element.nextElementSibling.style.cssText += 'background-image:url(' + pinku.parentElement.firstChild.src + ')!important';
  }
  if (element == tenshi.parentElement.nextElementSibling) {
    element.style.cssText += 'background-image:url(' + tenshi.parentElement.firstChild.src + ')!important';
    element.nextElementSibling.style.cssText += 'background-image:url(' + tenshi.parentElement.firstChild.src + ')!important';
    element.style.cssText += 'background-size:440px 400px';
    element.nextElementSibling.style.cssText += 'background-size:440px 400px';
  }
  if (element == jaakuna.parentElement.nextElementSibling) {
    element.style.cssText += 'background-image:url(' + jaakuna.parentElement.firstChild.src + ')!important';
    element.nextElementSibling.style.cssText += 'background-image:url(' + jaakuna.parentElement.firstChild.src + ')!important';
  }
})