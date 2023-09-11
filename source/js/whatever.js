var toggler = document.querySelector('.header__toggler');
var hiddenItems = document.querySelectorAll('.item--hidden');

toggler.addEventListener('click', function() {
  for (var i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].classList.remove('item--hidden');
  }
});
