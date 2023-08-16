// Define all sections
const sections = document.querySelectorAll('section');

// Define navbar list
const navbarList = document.getElementById('navbar__list');

// Build the navigation menu
const buildNav = () => {
    let navItems = '';
    sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionName = section.getAttribute('data-nav');
        navItems += `<li><a class="menu__link" href="#${sectionId}">${sectionName}</a></li>`;
    });
    navbarList.innerHTML = navItems;
};

// Scroll to anchor ID when clicked
const scrollToSection = (e) => {
    e.preventDefault();
    if (e.target.nodeName === 'A') {
        const sectionId = e.target.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Add class 'active' to section when near top of viewport
const setActiveSection = () => {
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            section.classList.add('active');
            document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
        } else {
            section.classList.remove('active');
            document.querySelector(`a[href="#${sectionId}"]`).classList.remove('active');
        }
    });
};

// Build the navigation menu
buildNav();

// Scroll to section on link click
navbarList.addEventListener('click', scrollToSection);

// Set sections as active
document.addEventListener('scroll', setActiveSection);

// Set current year in footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Landing Page`;


