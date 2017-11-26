'use strict';

const colors = ['rgb(224, 64, 251)', 'rgb(128,0,0)', 'rgb(255,0,0)',
  'rgb(233, 30, 99)', 'rgb(156, 39, 176)', 'rgb(103, 58, 183)',
  'rgb(63, 81, 181)', 'rgb(33, 150, 243)', 'rgb(243, 77, 154)',
  'rgb(3, 169, 244)', 'rgb(0, 188, 212)', 'rgb(0, 150, 136)',
  'rgb(76, 175, 80)', 'rgb(139, 195, 74)', 'rgb(205, 220, 57)',
  'rgb(255, 235, 59)', 'rgb(255, 193, 7)', 'rgb(255, 152, 0)',
  'rgb(255, 87, 34)', 'rgb(121, 85, 72)', 'rgb(250, 250, 250)',
  'rgb(224, 224, 224)', 'rgb(158, 158, 158)', 'rgb(0, 0, 0)'];

let colorIndex = colors.length,
  colorSquareContainer = document.querySelector('.color-container');

function drawColorSquares() {
  for (let i = 0; i < colorIndex; i++) {
    colorSquareContainer.innerHTML += '<div class="color-square" style="background-color:' + colors[i] + ';"></div>';
  }
}

function addCheckMarks() {
  let colorSquares = document.querySelectorAll('.color-square'),
    colorChoice = document.querySelector('#color-choice');
  for (let i = 0; i < colorSquares.length; i++) {
    colorSquares[i].addEventListener('click', () => {
      clearCheckMarks();
      colorSquares[i].innerHTML += '<img src="/img/iconmonstr-check-mark-1.svg">';
      colorChoice.value = colors[i];
    });
  }
}

function clearCheckMarks() {
  let colorSquares = document.querySelectorAll('.color-square');
  for (let i = 0; i < colorSquares.length; i++) {
    colorSquares[i].innerHTML = '';
  }
}

drawColorSquares();
addCheckMarks();
