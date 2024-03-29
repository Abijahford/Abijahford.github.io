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
// Hide Start Menu if Open Apps are clicked
document.querySelector('.open-apps').onclick = function () {
  if (!startMenu.classList.contains('hidden')) {
    startButton.classList.toggle('clicked-start-button');
    startMenu.classList.add('hidden');
  }
};
// When shortcuts or links are clicked open window and nav element
const musicTab = document.querySelector('.music');
const resumeTab = document.querySelector('.resume');
const projectTab = document.querySelector('.projects');
const mediaPlayerNavElement = document.querySelector('.media-player');
const resumePlayerNavElement = document.querySelector('.resume-player');
const projectNavElement = document.querySelector('.project-player');
// When the link is clicked, remove the hidden class
function removeHidden(element, element2) {
  element.style.display = 'inline-block';
  element2.style.display = 'flex';
}
// When the button is clicked, add the hidden class
function addHidden(element, element2) {
  element.style.display = 'none';
  element2.style.display = 'none';
}
// Displaying Date and Time
var today = new Date();
var date =
  today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
var time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var dateTime = date + ' ' + time;
document.getElementById('currentDateTime').value = dateTime;
