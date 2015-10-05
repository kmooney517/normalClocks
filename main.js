//Create overarching function for the first clock
function getTimeOne(){

  //Find newClock in the HTML doc at the firstClock id
  var newClock = $('#firstClock')

  //Create new date object
  var time = new Date ();

  //Make variables for each time segment that we want
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  //Convert time variables to show appropriately for clock
  var convertedHours = (hours > 12) ? '0'+(hours - 12): hours;
  var convertedMinutes = (minutes < 10) ? '0' + minutes : minutes;
  var convertedSeconds = (seconds < 10) ? '0' + seconds : seconds;

  //Combine to form string needed to appear on screen
  var currentTime = convertedHours + ':' + convertedMinutes + ':' + convertedSeconds;

  //Fill currentTime as text in newClock, on browser
  newClock.text(currentTime);
};

//Set getTimeOne to run every second
setInterval('getTimeOne()', 1000);


//-----------------------------Second Clock-----------------------------------//


//Create overarching function for the second clock
function getTimeTwo(){

  //Find newClock in the HTML doc at the secondClock id
  var newClock = $('#secondClock')

  //Create new date object
  var time = new Date ();

  //Make variables for each time segment that we want
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  //Convert time variables to show appropriately for clock
  var convertedHours = (hours > 12) ? '0'+(hours - 12): hours;
  var convertedMinutes = (minutes < 10) ? '0' + minutes : minutes;
  var convertedSeconds = (seconds < 10) ? '0' + seconds : seconds;

  //Combine to form string needed to appear on screen
  var currentTime = convertedHours + convertedMinutes + convertedSeconds;

  //Make sure that currentTime is being read as an integer
  var timeAsHex = parseInt(currentTime);

  //Answering the problem of the zero disappearing from the front of a number
  var hexNumber = (timeAsHex > 99999) ? '#' + timeAsHex : '#0' + timeAsHex;

  //Fill currentTime as text in newClock, on browser
  newClock.text('#' + currentTime);

  //Changing background color to match hex number
  $('#secondClock').css('background-color', hexNumber);
};

  //Execute function every 1000 milliseconds
setInterval('getTimeTwo()', 1000);


