// JavaScript Document




function runMobiMenu() {
"use strict";

  {
    document.getElementById("mobile-nav-side").style.width = "100%";
	document.getElementById("mobile-nav-side").style.height = "100vh";
	document.getElementById("mobile-nav-side").style.backgroundColor = "rgba(104,18,222,1.00)";
	document.getElementById("open").style.visibility = "hidden";
	document.getElementById("close").style.visibility = "visible";
    return;
  }
}






function closeMobiMenu() {
"use strict";
/* Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions. */
var count=1;

var counter=setInterval(timer, 100); //1000 will  run it every 1 second, so 100 is 1/10

function timer()
{
  count=count-1;
  if (count <= 0)
  {
    clearInterval(counter);
    document.getElementById("mobile-nav-side").style.width = "30px";
	document.getElementById("mobile-nav-side").style.height = "100vh";
	document.getElementById("mobile-nav-side").style.backgroundColor = "rgba(104,18,222,1.00)";
	document.getElementById("open").style.visibility = "visible";
	document.getElementById("close").style.visibility = "hidden";
    return;
  }
}
}






