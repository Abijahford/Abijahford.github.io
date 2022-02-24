// Get the viewport height
let vh = window.innerHeight * 0.01;
// Set the value in to the custom property
document.documentElement.style.setProperty('--vh', `${vh}px`);
// Open Start Menu when Start button is clicked
document.querySelector('.start-button').onclick = function () {
  this.classList.toggle('clicked-start-button');
  document.querySelector('.start-menu').classList.toggle('hidden');
};
// Hide Start Menu if it has no class of hidden and main is clicked
const startButton = document.querySelector('.start-button');
const startMenu = document.querySelector('.start-menu');
document.querySelector('.main').onclick = function () {
  if (!startMenu.classList.contains('hidden')) {
    startButton.classList.toggle('clicked-start-button');
    startMenu.classList.add('hidden');
  }
};
