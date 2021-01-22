var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var isPartyTime = false;

var lolcatJS = document.getElementById('lolcat');
var timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

var updateDisplay = function(){
	if (time == partyTime ){
		messageText = "IZ PARTEE TIME!!";
		timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	} else if (time == napTime) {
		messageText = "IZ NAP TIME...";
		timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	} else if (time == lunchTime) {
		messageText = "IZ NOM NOM NOM TIME!!";
		timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	} else if (time == wakeupTime) {
		messageText = "IZ TIME TO GETTUP.";
		timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	} else if (time < noon) {
		messageText = "Good morning!";
	} else if (time > evening) {
		messageText = "Good Evening!";
	} else {
		messageText = "Good afternoon!";
	}
};
updateDisplay();

var textByTimeJS = document.getElementById("timeEvent");
textByTimeJS.innerText = messageText;

lolcatJS.src = timeImage;

var showTime = function(){
	var compTime = new Date();
	var hrs = compTime.getHours();
	var mins = compTime.getMinutes();
	var secs = compTime.getSeconds();
	var meridian = "AM";

	if(hrs>=12){
		meridian = "PM";
	}
	if(hrs>12){
		hrs = hrs-12;
	}

	if(mins<10){
		mins = "0"+mins;
	}
	if(secs<10){
		secs = "0"+secs;
	}
	var readTime = hrs + ":" +mins+":"+secs+" "+meridian;
	var clockJS = document.getElementById('clock');
	clockJS.innerText = readTime;
};

var updateTime = function(){
	showTime();
};

setInterval(updateTime, 1000);

var partyButton = document.getElementById('partyTimeButton');

var setParty = function(){
	if(isPartyTime == false){
		isPartyTime = true;
		time = partyTime;
		updateDisplay();
		partyButton.innerText = "Party Over";
	}
	else{
		isPartyTime = false;
		time = new Date().getHours();
		partyButton.innerText = "Party Time!";
		updateDisplay();
	}
};

partyButton.addEventListener("click", setParty);

var wakeSelector = document.getElementById("wakeUpTimeSelector");

var setWakeTime = function(){
	wakeupTime = wakeSelector.value;
};

wakeSelector.addEventListener('change', setWakeTime);

var lunchSelector = document.getElementById("lunchTimeSelector");

var setLunchTime = function(){
	lunchTime = lunchSelector.value;
};

lunchSelector.addEventListener('change', setLunchTime);

var napSelector = document.getElementById("napTimeSelector");

var setNapTime = function(){
	napTime = napSelector.value;
};

napSelector.addEventListener('change', setNapTime);