const buttonToggle = document.getElementById('toggle');
const overlay = document.getElementById('overlay');
const bodyElement = document.getElementsByTagName('body')[0];

buttonToggle.addEventListener('click', function () {
  this.classList.toggle('active');
  overlay.classList.toggle('open');

  if (this.classList.contains('active')) {
    bodyElement.style.overflow = 'hidden';
  } else {
    bodyElement.style.overflow = 'visible';
  }
});