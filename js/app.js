const projectImage = document.querySelector('.Imagez');
// const intro = document.querySelector('.Intro-text');
const header = document.querySelector('.Header');
const about = document.querySelector('.About');
const portfolio = document.querySelector('.Portfolio');
const intro = document.querySelector('.Intro-container');
const projects = document.querySelector('.Dev-container');

// function bacon() {
//     if (header.classList.contains('b-loaded')) {
//         header.style.height = '140px';
//         console.log('Working');
//     }
//     console.log('Running');
//     // setTimeout(bacon(), 5000);
// }


function aboutScroll() {
    intro.scrollIntoView({ block: 'start', behavior: 'smooth'});
}

function portfolioScroll() {
    projects.scrollIntoView({ block: 'start', behavior: 'smooth'});
}