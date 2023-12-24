const mobileMenuButton = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('close');
});
