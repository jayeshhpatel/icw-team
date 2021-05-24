// is-sticky-header
window.addEventListener("scroll", () => {
  let scrollPosition = Math.round(window.scrollY);
    if (scrollPosition > 100){
        document.querySelector('header').classList.add('is_sticky');
    }
    // If not, remove "sticky" class from header
    else {
        document.querySelector('header').classList.remove('is_sticky');
    }
});
// Mobile MENU
function toggleMenu() {
  this.classList.toggle('open');
  this.parentElement.classList.toggle("open");
  document.querySelector('body').classList.toggle('overflow-hidden');
  document.querySelector('.main-header').classList.toggle('open');
}
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

// Overly MENU
function toggleOverly() {
  document.querySelector('.menu-icon').classList.remove('open');
  document.querySelector('body').classList.remove('overflow-hidden');
  document.querySelector('.main-header').classList.remove('open');
  document.querySelector('.header-right').classList.remove('open');

}
document.querySelector('.bg-overly').addEventListener('click', toggleOverly);