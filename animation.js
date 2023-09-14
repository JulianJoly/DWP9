'use strict'
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation');
      }
    });
});
observer.observe(document.querySelector('.banner'));
observer.observe(document.querySelector('.logo'));
observer.observe(document.querySelector('.story__article--paragraph'));