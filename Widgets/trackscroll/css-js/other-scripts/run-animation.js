// JavaScript Document
// <script src="css-js/run-animation.js" type="text/javascript"></script>


// The function name is the link between the event in the web page and the function parameters
function runAnimation() {
"use strict";
/* Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions. */
var count=1;
// We do not need a counter, I enclude as a means for a delay before animation exicutes, if needed
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second, so 100 is 1/10

function timer()
{
  count=count-1;
  if (count <= 0)
  {
    clearInterval(counter);
    document.getElementById("i-logo-load").style.top = "10%";
    return;
  }
}
}

