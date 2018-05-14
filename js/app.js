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
const introd = document.querySelector('.Intro-container');
const logo = document.querySelector('.Logo');
let topOfNav = nav.offsetTop;
let bottomOfHero = hero.getBoundingClientRect().bottom;
const wrapper = document.querySelector('.Wrapper');
const contact = document.querySelector('.Contact');

function aboutScroll() {
    intro.scrollIntoView({ block: 'start', behavior: 'smooth'});
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
        navCont.style.position = 'fixed';
        navCont.style.height = '8rem';
        nav.style.height = '8rem';
        navCont.style.top = '0';
        nav.style.top = '0';
        navCont.style.background = 'inherit';
        navCont.style.zIndex = '999';
        logo.style.height = '8rem';
        logo.style.cursor = 'pointer';
    } else {
        navCont.style.position = '';
        navCont.style.height = '';
        nav.style.height = '';
        navCont.style.top = '';
        nav.style.top = '';
        navCont.style.background = '';
        logo.style.height = '';
    }
}

window.addEventListener('scroll', stickyNav);
logo.addEventListener('click', logoScroll);
aboutNav.addEventListener('click', aboutScroll);
projectsNav.addEventListener('click', projectScroll);
contactNav.addEventListener('click', contactScroll);
downArrow.addEventListener('click', aboutScroll);
contactBtn.addEventListener('click', contactScroll);
