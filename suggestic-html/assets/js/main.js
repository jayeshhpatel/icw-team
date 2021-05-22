
// Mobile MENU
function toggleMenu() {
  this.classList.toggle('open');
  this.parentElement.classList.toggle("open");
  document.querySelector('body').classList.toggle('overflow-hidden');
}
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);


// Desktop MENU
function toggleMenuDesktop() {
  var w = document.documentElement.clientWidth;
  // var h = document.documentElement.clientHeight;
  if (w > 1199) {
    document.querySelector("body").classList.remove('overflow-hidden');
    document.querySelector(".header-left").classList.remove('open');
    document.querySelector(".menu-icon").classList.remove('open');
  }

}
window.addEventListener("resize", toggleMenuDesktop);

new WOW().init();