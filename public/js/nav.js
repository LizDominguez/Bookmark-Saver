"use strict";

var optionButton = document.getElementById('options');
var nav = document.querySelector('nav');

optionButton.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});
