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
setInterval(getTimeOne, 1000);


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
setInterval(getTimeTwo, 1000);







//-----------------------------Third Clock-----------------------------------//


//Create overarching function for the second clock
function getTimeThree(){

  //Find newClock in the HTML doc at the secondClock id
  var newClock = $('#thirdClock')

  //Create new date object
  var time = new Date ();

  //Make variables for each time segment that we want
  var hours = time.getHours();
    var hoursHex = hours.toString(16);
    var hour = ((hoursHex < 10)||(hoursHex === 'a')||(hoursHex ==='b')||(hoursHex ==='c')||(hoursHex ==='d')||(hoursHex==='e')||(hoursHex==='f')) ? '0' + hoursHex: hoursHex;


  var minutes = time.getMinutes();
    var minutesHex = minutes.toString(16);
    var min = ((minutesHex < 10)||(minutesHex === 'a')||(minutesHex ==='b')||(minutesHex ==='c')||(minutesHex ==='d')||(minutesHex==='e')||(minutesHex==='f')) ? '0' + minutesHex: minutesHex;

  // Take seconds, convert to base 16, if less than 10 or equal to a letter, add 0 in front
  var seconds = time.getSeconds();
    var secondsHex = seconds.toString(16);
    var sec = ((secondsHex < 10)||(secondsHex === 'a')||(secondsHex ==='b')||(secondsHex ==='c')||(secondsHex ==='d')||(secondsHex==='e')||(secondsHex==='f')) ? '0' + secondsHex: secondsHex;

  //Combine the different time pieces of time
  

  var hexTime = hour + min + sec;
  var hexBg = '#' + hexTime;
  
  //Fill currentTime as text in newClock, on browser
  newClock.text(hexTime);

  //Changing background color to match hex number
  $('#thirdClock').css('background-color', hexBg);

};

  //Execute function every 1000 milliseconds
setInterval(getTimeThree, 1000);








