document.querySelector('.menu-button').addEventListener('click', function () {
  document.getElementById('menuDropdown').classList.toggle('show');
});


window.onclick = function (event) {
  if (!event.target.matches('.menu-button')) {
    let dropdowns = document.getElementsByClassName('menu-dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
};