'use-strict'
/* Clouds */
const placeSection = document.querySelector('.story__place')
const bigCloud = document.querySelector('.story__place--big-cloud')
const littleCloud = document.querySelector('.story__place--little-cloud')
const observerClouds = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('parallax-clouds');
      } else {
        entry.target.classList.remove('parallax-clouds');
      }
    });
})
observerClouds.observe(placeSection);

/* Logo */
const banner = document.querySelector('.banner')
const logo = document.querySelector('.logo')
const observerLogo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('parallax-logo');
      } else {
        entry.target.classList.remove('parallax-logo');
      }
    });
})
observerLogo.observe(banner);

/* On scroll actions */
window.onscroll = function() {
  if (placeSection.classList.contains('parallax-clouds')) {
    let scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition <= 1560) {
      littleCloud.style.left = '350px';
      bigCloud.style.left = '550px';
    } else if (scrollPosition >= 2880) {
      littleCloud.style.left = '790px';
      bigCloud.style.left = '1050px';
    } else {
      littleCloud.style.left = (scrollPosition / 3 - 170) + 'px';
      bigCloud.style.left = (scrollPosition / 2.7 - 20) + 'px';
    }
  }
  if (banner.classList.contains('parallax-logo')) {
    let scrollPosition = document.documentElement.scrollTop;
    let bigScreenMaxPosition = (1445 / screen.width * 250)
    let smallScreenMaxPosition = ((100 / screen.width + 1 ) * 497)
    if (screen.width >= 1440 && scrollPosition >= 250) {
      logo.style.top = '250px';
    } else if (screen.width < 1440 && screen.width >= 625 && scrollPosition >= bigScreenMaxPosition) {
      logo.style.top = bigScreenMaxPosition + 'px';
    } else if (screen.width < 625 && scrollPosition >= smallScreenMaxPosition) {
      logo.style.top = smallScreenMaxPosition + 'px';
    } else {
      logo.style.top = scrollPosition + 'px';
    }
  }
}