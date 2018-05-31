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
const contact = document.querySelector('.Contact');
const wrapper = document.querySelector('.Wrapper');
const navOffset = 120;
let count = intro.offsetTop - wrapper.scrollTop - navOffset;

const responsiveContainer = document.querySelector('.Responsive-container');

function aboutScroll() {
    // intro.scrollIntoView({block: 'start', behavior: 'smooth'});
    intro.scrollIntoView(true);
    
    let scrolledY = window.scrollY;
    
    if(scrolledY) {
        window.scroll(0,scrolledY - navOffset);
    }
}
    
function projectScroll() {
    // projects.scrollIntoView({ block: 'start', behavior: 'smooth'});
    projects.scrollIntoView(true);
    
    let scrolledY = window.scrollY;
    
    if(scrolledY) {
        window.scroll(0,scrolledY - navOffset);
    }
}

function contactScroll() {
    // contact.scrollIntoView({ block: 'start', behavior: 'smooth'});
    contact.scrollIntoView(true);
    
    let scrolledY = window.scrollY;
    
    if(scrolledY) {
        window.scroll(0,scrolledY - navOffset);
    }
}

function logoScroll() {
    // document.body.scrollIntoView({ block: 'start', behavior: 'smooth'});
    document.body.scrollIntoView(true);
    
    let scrolledY = window.scrollY;
    
    if(scrolledY) {
        window.scroll(0,scrolledY - navOffset);
    }
}

function stickyNav() {
    if (window.scrollY >= bottomOfHero) {
        navCont.classList.add('Sticky');
    } 
    else {
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
