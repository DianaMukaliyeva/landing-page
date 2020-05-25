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

const navigationMenu = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * Helper Functions
*/

/**
* Scroll to section selected in navigational menu.
* @param {event} event
*/
function scrollToSection(event) {
    event.preventDefault();
    const id = event.target.getAttribute('href');
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView({behavior: 'smooth'});
}

/**
 * Get 'id' of the section that is in the viewport.
 * @returns {string} 'id' of active section.
*/
function getActiveSectionID() {
    const views = [];
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        views.push({id: section.getAttribute('id'), top: Math.abs(top)});
    });
    views.sort(function(a, b) {
        return a.top - b.top;
    });
    return views[0].id;
}

/**
 * Add or remove class 'active-class' according to giveb attribute and value.
 * @param {NodeList} objects
 * @param {string} attr
 * @param {string} value
*/
function addActiveClass(objects, attr, value) {
    objects.forEach(obj => {
        if (obj.getAttribute(attr) == value) {
            obj.classList.add('active-class');
        } else {
            obj.classList.remove('active-class');
        }
    });
}

/**
 * Main Functions
*/

/** Build a dynamically updating navigational menu. */
function buildMenu() {
    sections.forEach(section => {
        const liItem = document.createElement('li');
        const linkItem = document.createElement('a');
        linkItem.className = 'menu__link';
        linkItem.innerText = section.getAttribute('data-nav');
        linkItem.setAttribute('href', section.getAttribute('id'));
        liItem.appendChild(linkItem);
        navigationMenu.appendChild(liItem);
    });
}

/**
 * Set class 'active-class' to section and navigation menu.
*/
function setActiveSection() {
    activeSectionID = getActiveSectionID();
    const navigationLinks = navigationMenu.querySelectorAll('li a');
    addActiveClass(sections, 'id', activeSectionID);
    addActiveClass(navigationLinks, 'href', activeSectionID);
}

/** Scroll to section selected in navigation menu. */
function scrollToSelectedSection() {
    const navigationLinks = navigationMenu.querySelectorAll('li a');
    navigationLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
}

// Build menu
buildMenu();

// Scroll to section on link click
scrollToSelectedSection();

// Set sections as active
document.addEventListener('scroll', setActiveSection);
