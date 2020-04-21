const buttonToggle = document.getElementById('toggle');
const overlay = document.getElementById('overlay');
const bodyElement = document.getElementsByTagName('body')[0];
const hamburgerMenuClose = document.querySelector('.button_container');
const sectionLinks = document.querySelectorAll('.overlay-menu ul li a');
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

buttonToggle.addEventListener('click', function () {
  this.classList.toggle('active');
  overlay.classList.toggle('open');

  if (this.classList.contains('active') && viewportWidth < 1024) {
    bodyElement.style.overflow = 'hidden';
  } else {
    bodyElement.style.overflow = 'visible';
  }
});

sectionLinks.forEach(button => {
  button.addEventListener('click', () => {
    hamburgerMenuClose.click();
  })
});