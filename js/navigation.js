const navbarToggle = document.querySelector('.navbar-toggle');
const navbarList = document.querySelector('.navbar-list');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarList.classList.toggle('active');
});
