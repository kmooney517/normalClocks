function getTime(){

  //Create new date object
  var newClock = $('#firstClock')
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

  newClock.text(currentTime);
};

setInterval('getTime()', 1000);