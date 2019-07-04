// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = false;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = showAmPm ? hour = hour % 12 || 12 : hour;

  // Output Time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Buenos días, ';
  } else if (hour < 19) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Buenas tardes, ';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    document.body.style.color = 'white';
    greeting.textContent = 'Buenas noches, ';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Ingresá tu nombre]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Ingresá tu enfoque]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
// getName();
// getFocus();
