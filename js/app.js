const projectImage = document.querySelector('.Imagez');
const button = document.querySelector('.Contact-btn');


function imgHover() {
    projectImage.classList.add('.Fade-in');
    projectImage.classList.remove('.Fade-out');
}
function imgHover2() {
    projectImage.classList.add('.Fade-out');
    projectImage.classList.remove('.Fade-in');
}

// projectImage.addEventListener('mouseover', imgHover); 
// projectImage.addEventListener('mouseleave', imgHover2); 
