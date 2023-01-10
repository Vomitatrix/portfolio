'use strict';

document.querySelectorAll('section').forEach(section => {
    section.style.height = `${100 - getComputedStyle(document.querySelector('nav')).height}`;
});

window.addEventListener('scroll', function () {
    document.getElementById('scroll-progress').style.width =
        (100 * window.pageYOffset) / (this.document.body.scrollHeight - this.window.innerHeight) +
        '%';
});
