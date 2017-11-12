'use strict';

let canvas = document.querySelector('canvas').getContext('2d');
const colors = ['rgb(224, 64, 251)', 'rgb(244, 67, 54)',
  'rgb(233, 30, 99)', 'rgb(156, 39, 176)', 'rgb(103, 58, 183)',
  'rgb(63, 81, 181)', 'rgb(33, 150, 243)',
  'rgb(3, 169, 244)', 'rgb(0, 188, 212)', 'rgb(0, 150, 136)',
  'rgb(76, 175, 80)', 'rgb(139, 195, 74)', 'rgb(205, 220, 57)',
  'rgb(255, 235, 59)', 'rgb(255, 193, 7)', 'rgb(255, 152, 0)',
  'rgb(255, 87, 34)', 'rgb(121, 85, 72)', 'rgb(250, 250, 250)',
  'rgb(224, 224, 224)', 'rgb(158, 158, 158)', 'rgb(0, 0, 0)'];

let colorIndex = colors.length - 1;

draw();
pickColor();

function draw() {
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 4; x++) {
      canvas.fillStyle = colors[colorIndex];
      canvas.fillRect(x * 60, y * 60, 60, 60);
      colorIndex--;
    }
  }
}

function pickColor() {
  let colorSelector = document.querySelector('.color-selector');
  document.querySelector('canvas').addEventListener('click', function(event) {
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    var imgData = canvas.getImageData(x, y, 1, 1).data;
    var R = imgData[0];
    var G = imgData[1];
    var B = imgData[2];
    var rgb = R + ', ' + G + ', ' + B;
    colorSelector.innerHTML += '<img src="/img/iconmonstr-check-mark-1.svg" />';
    console.log(rgb);
  });
}
