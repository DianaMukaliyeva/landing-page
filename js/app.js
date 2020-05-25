/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Global Variables
*/
const navigationMenu = document.querySelector('.navbar__menu');
const navigationList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * Helper Functions
*/


/**
 * Main Functions
*/

// build the nav
function buildMenu() {
    for (const section of sections) {
        const liItem = document.createElement('li');
        liItem.className = 'menu__link';
        liItem.innerText = section.querySelector('h2').innerText;
        liItem.setAttribute('href', `#${section.getAttribute('id')}`)
        navigationList.appendChild(liItem);
    }
}

// Add class 'active' to section when near top of viewport
function scrollToSection() {
    const navigationMenu = document.querySelector('.navbar__menu');
    navigationMenu.addEventListener('click', scrollTo(event));
}


// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
    const target = event.target.getAttribute('href');
    const element = document.querySelector(target);
    element.scrollIntoView();
    window.scrollBy(0, -1 * navigationMenu.offsetHeight);
}

// Build menu 
buildMenu();

// Scroll to section on link click
navigationMenu.addEventListener('click', scrollToSection);

// Set sections as active


