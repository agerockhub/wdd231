//Store the selected elements that we are going to use.
const navbutton = document.querySelector('#ham-btn');
const navlins = document.querySelector('#nave-bar');
//Toggle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlins.classList.toggle('show');
});