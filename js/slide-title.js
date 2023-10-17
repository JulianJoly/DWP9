'use-strict'
const title = [...document.getElementsByTagName('h2'), ...document.getElementsByTagName('h3')]
title.forEach(element => {
    let text = element.innerHTML;
    element.innerHTML = element.innerHTML.replace(text, '<span class="title-wrapper"><span class="slide-title">$&</span></span>');
});