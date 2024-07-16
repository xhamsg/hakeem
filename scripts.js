const MenuBar = document.querySelector('.bars-container');
const bars = document.querySelector('span');
const NavMenu = document.querySelector('nav');


MenuBar.addEventListener('click', () => {
    MenuBar.classList.toggle('active');
    console.log(MenuBar);
    NavMenu.classList.toggle('active');
});