'use-strict'
const siteNavigation = document.querySelector('.main-navigation');
const lines = document.querySelectorAll('.line');
const closeMenu = document.querySelector('.menu-close');

const button = document.querySelector('.menu-toggle');
button.addEventListener('click', function() {
	if (!siteNavigation.classList.contains('toggled')) {
		lines.forEach(element => {
			element.style.display = 'none';
		});
		closeMenu.style.display = 'block';
	} else {
		lines.forEach(element => {
			element.style.display = 'block';
		});
		closeMenu.style.display = 'none';
	}
});

const links = [...document.querySelectorAll('.site-link'), document.querySelector('.main-navigation__link--banner')];
links.forEach(element => {
    let text = element.innerHTML;
    element.innerHTML = element.innerHTML.replace(text, '<span class="title-wrapper"><span class="slide-links">$&</span></span>');
	element.addEventListener('click', function() {
		siteNavigation.classList.toggle( 'toggled' );
		button.setAttribute('aria-expanded', 'false');
		lines.forEach(element => {
			element.style.display = 'block';
		});
		closeMenu.style.display = 'none';
	});
})