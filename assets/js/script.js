// *for preloader
const preloader = document.querySelector("[data-preloader]");
window.addEventListener('load', () => {
    preloader.classList.add('remove')
})
/**
 * *add event on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback)
    }
}

/**
 * *Nav toggler for mobile
 */

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]')
const overlay = document.querySelector('[dta-overlay]')

const toggeleNav = function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active')
    document.body.classList.toggle('nav-active')
}
addEventOnElements(navTogglers, "click", toggeleNav)

/**
 * *header
 */
const header = document.querySelector('[data-header]');
window.addEventListener('scroll', function () {
    header.classList[window.scrollY > 100 ? 'add' : 'remove']('active')
})
