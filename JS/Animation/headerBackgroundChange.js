function myFunction() {
  const header = document.getElementById('Home');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.onscroll = function () { myFunction() };