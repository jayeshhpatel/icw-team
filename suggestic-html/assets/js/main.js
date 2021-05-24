
// Mobile MENU
function toggleMenu() {
  this.classList.toggle('open');
  this.parentElement.classList.toggle("open");
  document.querySelector('body').classList.toggle('overflow-hidden');
}
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);


