const menuButton = document.querySelector('#menu-button');

const menuItems = document.querySelector('#menu');

const menuButtonSpans = document.querySelectorAll('#menu-button span');

const links = document.querySelectorAll('#menu a');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');
    menuButtonSpans.forEach((span) => {
        span.classList.toggle('animado');
    });
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuItems.classList.add('hidden');
        menuButtonSpans.forEach((span) => {
            span.classList.remove('animado');
        });
    });
});

window.onresize = function () {
    let w = window.outerWidth;
    if (w > 768) {
        menuItems.classList.add('hidden');
        menuButtonSpans.forEach((span) => {
            span.classList.remove('animado');
        });
    }
}

let darkButton = document.querySelector('#darkButton');
darkButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});