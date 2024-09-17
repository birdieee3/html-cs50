// script goes here


document.addEventListener('DOMContentLoaded', function () {
let darkMode = localStorage.getItem('darkMode') === 'true';
const button = document.querySelector('.mode-toggle');
const navbuttons = document.querySelectorAll('.navbutton');
const outlinebuttons = document.querySelectorAll('.outlinedbtn');
console.log(button); // Check if the button is selected

if (darkMode) {
    console.log('Switching to dark mode');
    document.body.classList.add('dark-mode');
    document.querySelector('.body-with-content').classList.add('dark-content');
    document.querySelector('.canon-selector').classList.add('canon-selector-dark');
    navbuttons.forEach (navbutton => {
        navbutton.classList.add('darkbutton');
    });
    outlinebuttons.forEach (outlinebutton => {
        outlinebutton.classList.remove('btn-outline-dark');
        outlinebutton.classList.add('btn-outline-light');
    });
  }

button.addEventListener('click', function () {
  console.log('Button clicked');
  darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark-mode');
    document.querySelector('.body-with-content').classList.toggle('dark-content');
    document.querySelector('.canon-selector').classList.toggle('canon-selector-dark');
    navbuttons.forEach (navbutton => {
        navbutton.classList.toggle('darkbutton');
    });
    outlinebuttons.forEach (outlinebutton => {
        outlinebutton.classList.toggle('btn-outline-dark');
        outlinebutton.classList.toggle('btn-outline-light');
    });


});
});

//nt page

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var gradient = ctx.createLinearGradient(0,0,0,c.height);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("1.0", "pink");

ctx.beginPath();
ctx.strokeStyle = gradient;
ctx.moveTo(10,5);
ctx.lineTo(10,650);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,77);
ctx.lineTo(20,77);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(0,165);
ctx.lineTo(20,165);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(0,245);
ctx.lineTo(20,245);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(0,330);
ctx.lineTo(20,330);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,410);
ctx.lineTo(20,410);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(0,495);
ctx.lineTo(20,495);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,580);
ctx.lineTo(20,580);
ctx.stroke();
