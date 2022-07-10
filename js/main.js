const toggleBtn = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});