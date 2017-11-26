'use strict';

var optionButton = document.getElementById('options-button'),
  colorDownArrow = document.getElementById('color-down-arrow'),
  tagDownArrow = document.getElementById('tag-down-arrow'),
  nav = document.querySelector('nav'),
  colorsDiv = document.querySelector('.colors');

optionButton.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

document.getElementById('menu-button').addEventListener('click', () => {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('slide');
});

colorDownArrow.addEventListener('click', () => {
  colorsDiv.classList.toggle('hidden');
});

tagDownArrow.addEventListener('click', () => {
  var tagsDiv = document.querySelector('.tags');
  tagsDiv.classList.toggle('hidden');
});

function noteHandler() {
  var noteBtns = document.getElementsByClassName('note-button'),
    noteContainer = document.querySelector('.note-container'),
    saveBtn = document.getElementById('save');
  for (let i = 0; i < noteBtns.length; i++) {
    noteBtns[i].addEventListener('click', () => {
      noteContainer.classList.toggle('hidden');
    });
  }
  saveBtn.addEventListener('click', () => {
    noteContainer.classList.toggle('hidden');
  });
}

noteHandler();
