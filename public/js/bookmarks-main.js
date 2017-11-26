'use strict';

var optionButton = document.getElementById('options-button');
var colorDownArrow = document.getElementById('color-down-arrow');
var tagDownArrow = document.getElementById('tag-down-arrow');

var nav = document.querySelector('nav');
var colorsDiv = document.querySelector('.colors');

const colors = [
  {
    name: 'Hot Pink',
    code: 'rgb(224, 64, 251)'
  },
  {
    name: 'Orange',
    code: 'rgb(244, 67, 54)'
  },
  {
    name: 'Fuschia',
    code: 'rgb(233, 30, 99)'
  },
  {
    name: 'Purple',
    code: 'rgb(156, 39, 176)'
  },
  {
    name: 'Eggplant',
    code: 'rgb(103, 58, 183)'
  },
  {
    name: 'Navy',
    code: 'rgb(63, 81, 181)'
  },
  {
    name: 'Blue',
    code: 'rgb(33, 150, 243)'
  }
];

// const colors = ['rgb(224, 64, 251)', 'rgb(244, 67, 54)',
//   'rgb(233, 30, 99)', 'rgb(156, 39, 176)', 'rgb(103, 58, 183)',
//   'rgb(63, 81, 181)', 'rgb(33, 150, 243)',
//   'rgb(3, 169, 244)', 'rgb(0, 188, 212)', 'rgb(0, 150, 136)',
//   'rgb(76, 175, 80)', 'rgb(139, 195, 74)', 'rgb(205, 220, 57)',
//   'rgb(255, 235, 59)', 'rgb(255, 193, 7)', 'rgb(255, 152, 0)',
//   'rgb(255, 87, 34)', 'rgb(121, 85, 72)', 'rgb(250, 250, 250)',
//   'rgb(224, 224, 224)', 'rgb(158, 158, 158)', 'rgb(0, 0, 0)'];

(function generateColors() {
  for (let i = 0; i < colors.length; i++) {
    colorsDiv.innerHTML += '<div><a contenteditable="true">' + colors[i].name + '</a>' + '<div class="color" style=" background-color:' + colors[i].code + ';">' + '</div>';
  }
}
)();

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

(function noteHandler() {
  var noteBtns = document.getElementsByClassName('note-button');
  var noteContainer = document.querySelector('.note-container');
  var saveBtn = document.getElementById('save');
  for (let i = 0; i < noteBtns.length; i++) {
    noteBtns[i].addEventListener('click', () => {
      noteContainer.classList.toggle('hidden');
    });
  }
  saveBtn.addEventListener('click', () => {
    noteContainer.classList.toggle('hidden');
  });
})();
