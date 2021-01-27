/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  const hour = parseInt(time, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
  // if (time< 12:00) //parseInt(12, 100) ?
  // return "Good Morning"
  // else (time is between 12:00-27:00)
  // return "Good Afternoon"
  // else (time > 17:00)
  // return "Good Evening"
}

function displayMessage(greet){
  document.getElementById("greeting").innerText = greet;
}