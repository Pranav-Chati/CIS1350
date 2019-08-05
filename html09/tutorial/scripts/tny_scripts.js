"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Pranav Chati
   Date:   7/27/2019

*/

runClock();
setInterval("runClock()", 1000);
function runClock()
{
	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();

	//Display current date and time
	document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
	//Calculations for days until New Years Eve
	var newYear = new Date("January 1 2019");
	var nextYear = currentDay.getFullYear() + 1;
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay)/(1000*60*60*24);
	
	//Calculate hours left
	var hoursLeft = (daysLeft - Math.floor(daysLeft))*24;
	//Calculate mins and seconds 
	var minsLeft = (hoursLeft - Math.floor(hoursLeft))*60;
	var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
	
	//Display time that's left until New Years
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hoursLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
	
	
	} 
