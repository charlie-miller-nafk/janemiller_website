const nav = document.querySelector('.nav');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        nav.classList.remove("nav--hidden")
    }
    if(lastScrollY < window.scrollY && lastScrollY > 30) {
        nav.classList.add("nav--hidden");
    } else {
        nav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
});

