// const navbar = document.querySelector('.nav-links');
// document.querySelector('#burger-menu').onclick = () => {
//     navbar.classList.toggle('active');
// }

const navSlide = () => {
    const burger = document.querySelector('#burger-menu');
    const navbar = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>{
        navbar.classList.toggle('active');
        navlinks.forEach((link, index) => {
           if (link.style.animation) {
               link.style.animation= '';
           } else {
               link.style.animation =  `navFadeLinks 0.5s ease forwards ${index/5+0.5}s`;
           }
        });
    });
}
navSlide();