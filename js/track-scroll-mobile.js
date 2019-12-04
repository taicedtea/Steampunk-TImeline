// JavaScript Document

//Function opens
function myFunction() {
  "use strict";
	
//Animates first position	
  var element1 = document.getElementById("bar1");
	
  var desiredPosition1 = 0;
  
  var counter1 = document.getElementById("count");
  counter1.innerHTML = 'pageXOffset: ' + window.pageXOffset;
  if (window.pageXOffset > desiredPosition1) {
    element1.style.cssText += "width:200px;";
  } else {
    element1.style.cssText += "width:100px;";
  }
	
//Animates second position	
  var element2 = document.getElementById("bar2");
	
  var desiredPosition2 = 1024;
  
  var counter2 = document.getElementById("count");
  counter2.innerHTML = 'pageXOffset: ' + window.pageXOffset;
  if (window.pageXOffset > desiredPosition2) {
    element2.style.cssText += "width:300px;";
  } else {
    element2.style.cssText += "width:100px;";
  }
	
//Animates third position	
  var element3 = document.getElementById("bar3");
	
  var desiredPosition3 = 2048;
  
  var counter3 = document.getElementById("count");
  counter3.innerHTML = 'pageXOffset: ' + window.pageXOffset;
  if (window.pageXOffset > desiredPosition3) {
    element3.style.cssText += "width:400px;";
  } else {
    element3.style.cssText += "width:100px;";
  }
	
//Animates fourth position	
  var element4 = document.getElementById("bar4");
	
  var desiredPosition4 = 3062;
  
  var counter4 = document.getElementById("count");
  counter4.innerHTML = 'pageXOffset: ' + window.pageXOffset;
  if (window.pageXOffset > desiredPosition4) {
    element4.style.cssText += "width:500px;";
  } else {
    element4.style.cssText += "width:100px;";
  }
	
//Animates fifth position	
  var element5 = document.getElementById("bar5");
	
  var desiredPosition5 = 3562;
  
  var counter5 = document.getElementById("count");
  counter5.innerHTML = 'pageXOffset: ' + window.pageXOffset;
  if (window.pageXOffset > desiredPosition5) {
    element5.style.cssText += "width:600px;";
  } else {
    element5.style.cssText += "width:100px;";
  }
	
	
	
}
window.onscroll = myFunction;



