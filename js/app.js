const projectImage = document.querySelector('.Imagez');
// const intro = document.querySelector('.Intro-text');
const header = document.querySelector('.Header');
const about = document.querySelector('.About');
const portfolio = document.querySelector('.Portfolio');
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

function portfolioScroll() {
    projects.scrollIntoView({ block: 'start', behavior: 'smooth'});
}

function contactScroll() {
    contact.scrollIntoView({ block: 'start', behavior: 'smooth'});
}

function stickyNav() {
    if (window.scrollY >= bottomOfHero) {
        navCont.style.position = 'fixed';
        navCont.style.height = '10rem';
        nav.style.height = '10rem';
        navCont.style.top = '0';
        nav.style.top = '0';
        navCont.style.background = 'inherit';
        navCont.style.zIndex = '999';
        navCont.style.borderBottom = '2px solid #f5f5f5';
        logo.style.height = '10rem';
    } else {
        navCont.style.position = '';
        navCont.style.height = '';
        nav.style.height = '';
        navCont.style.top = '';
        nav.style.top = '';
        navCont.style.background = '';
        navCont.style.borderBottom = '';
        logo.style.height = '';
    }
}

window.addEventListener('scroll', stickyNav);