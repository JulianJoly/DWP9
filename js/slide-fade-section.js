'use strict'
const observerSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-fade-in');
      }
    });
});
observerSection.observe(document.querySelector('.banner'));
observerSection.observe(document.querySelector('.logo'));
observerSection.observe(document.querySelector('.story__article'));
observerSection.observe(document.querySelector('.story__characters'));
observerSection.observe(document.querySelector('.story__place'));
observerSection.observe(document.querySelector('.studio'));
observerSection.observe(document.querySelector('.oscars'));
observerSection.observe(document.querySelector('.site-footer'));