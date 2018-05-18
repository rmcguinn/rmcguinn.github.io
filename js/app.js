const projectImage = document.querySelector('.Imagez');
const header = document.querySelector('.Header');
const aboutNav = document.querySelector('.About-nav');
const projectsNav = document.querySelector('.Projects-nav');
const contactNav = document.querySelector('.Contact-nav');
const contactBtn = document.querySelector('.Contact-btn');
const downArrow = document.querySelector('.Down-arrow');
const intro = document.querySelector('.Intro-container');
const projects = document.querySelector('.Dev-container');
const github = document.querySelector('.Github-img');
const nav = document.querySelector('.Navbar');
const navCont = document.querySelector('.Navbar-container');
const hero = document.querySelector('.Hero');
const logo = document.querySelector('.Logo');
let topOfNav = nav.offsetTop;
const bottomOfHero = hero.getBoundingClientRect().bottom;
const wrapper = document.querySelector('.Wrapper');
const contact = document.querySelector('.Contact');


const navHeight = 100;

function aboutScroll() {
    intro.scrollIntoView({block: 'start', behavior: 'smooth'});
    let shadow = window.scrollY;

    console.log(shadow);

    if (shadow) {
        window.scroll(0, shadow - navHeight);
    }
}

function projectScroll() {
    console.log('Portfolio');
    projects.scrollIntoView({ block: 'start', behavior: 'smooth'});
}

function contactScroll() {
    console.log('Contact');
    contact.scrollIntoView({ block: 'start', behavior: 'smooth'});
}

function logoScroll() {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.body.scrollIntoView({ block: 'start', behavior: 'smooth'});
}

function stickyNav() {
    if (window.scrollY >= bottomOfHero) {
        navCont.classList.add('Sticky');
    } else {
        navCont.classList.remove('Sticky');
    }
}

window.addEventListener('scroll', stickyNav);
logo.addEventListener('click', logoScroll);
aboutNav.addEventListener('click', aboutScroll);
projectsNav.addEventListener('click', projectScroll);
contactNav.addEventListener('click', contactScroll);
downArrow.addEventListener('click', aboutScroll);
contactBtn.addEventListener('click', contactScroll);
