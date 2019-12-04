// JavaScript Document

function myFunction() {
  "use strict";
  var element1 = document.getElementById("spacer");
	
  var desiredPosition1 = 500;
  
  var counter1 = document.getElementById("count");
  counter1.innerHTML = 'pageyOffset: ' + window.pageYOffset;
  if (window.pageYOffset > desiredPosition1) {
    element1.style.cssText += "height:0px;";
  } else {
    element1.style.cssText += "height:300px;";
  }
	
	
	
  var element2 = document.getElementById("holder-01");
	
  var desiredPosition2 = 600;
  
  var counter2 = document.getElementById("count");
  counter2.innerHTML = 'pageyOffset: ' + window.pageYOffset;
  if (window.pageYOffset > desiredPosition2) {
    element2.style.cssText += "position:fixed;";
	element2.style.cssText += "top:0;";
	element2.style.cssText += "left:-100vw;";
  } else {
    element2.style.cssText += "position:relative;";
	element2.style.cssText += "top:0;";
	element2.style.cssText += "left:0;";
  }


}
window.onscroll = myFunction;