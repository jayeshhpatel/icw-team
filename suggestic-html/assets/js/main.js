(function () {

  var MenuIcon = document.querySelector('.menu-icon');
  var Menu = document.querySelector('.menu-wrapper');
  MenuIcon.addEventListener('click', function () {
    Menu.classList.toggle('open');
    MenuIcon.classList.toggle('open');
  });

})();