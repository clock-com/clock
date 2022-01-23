var hour = 0;
var minute = 0;
var second =0 ;
var ms = 0;
var list = ["assets/twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3", "assets/iphone-6s-remix-v3-20325.mp3"];


onEvent("button5", "click", function( ) {
  showElement("photo_select1");
  showElement("button6");
  playSpeech("First Click photo select and select the music After that click on uplod", "male", "हिन्दी");
});

onEvent("button3", "click", function( ) {
  playSound(list[1], false);
  stopSound(list[0]);
});

onEvent("button2", "click", function( ) {
  playSound(list[0], false);
});
timedLoop(1000, function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var full = hours+":"+minutes+":"+seconds;
 setText("time", full);
  hours = hours < 10 ? "0" + Math.round(hours) : "" + Math.round(hours);
  minutes = minutes < 10 ? "0" + Math.round(minutes) : "" + Math.round(minutes);
  seconds = seconds < 10 ? "0" + Math.round(seconds) : "" + Math.round(seconds);
  if(hours > 12)
{
     hours = hours  - 12;
}
  if (hours<10) {
    hours = (hours+"0")+hours;
  }
  if (minutes<10) {
    minutes = hours+"0"+hours;
  }
  if (seconds<10) {
    seconds = (seconds+"0")+seconds;
  }
});
onEvent("stopwatchResetButton", "click", function( ) {
  stopTimedLoop();
  hour = 0;
  second = 0;
  minute = 0;
  ms = 0;
  setText("stopwatchTimeLabel",hour+ ":" + minute + ":" + second+ ":" + ms);
});


onEvent("stopwatchStartButton", "click", function( ) {
  stopwatch();
});

function stopwatch() {
  timedLoop(3600000,function(){
    hour = hour + 1;
    if(hour < 10){
      hour = "0" + hour;
    }
    setText("stopwatchTimeLabel",hour+ ":" + minute + ":" + second+ ":" + ms);
  });
  timedLoop(60000,function(){
    minute = minute + 1;
      if(minute < 10){
      hour = "0" + hour;
    }
    setText("stopwatchTimeLabel",hour + ":" + minute + ":" + second+ ":" + ms);
  });
  timedLoop(1000,function(){
    
    second = second + 1;
    if(second === 60){
      second = 0;
    }
    setText("stopwatchTimeLabel",hour + ":" + minute + ":" + second+ ":" + ms);
  });
  timedLoop(1,function(){
    ms = ms + 1;
    if(ms === 100){
      ms = 0;
    }
    setText("stopwatchTimeLabel",((((hour + ":") + minute) + ":") + second)+ ":" + ms);
  });
}
onEvent("button1", "click", function( ) {
  showElement("startTimerButton");
  hideElement("button1");
  stopSound("assets/category_animals/cartoon_creature_accent_2.mp3");
});
onEvent("startTimerButton", "click", function( ) {
  timer();
});
function tim() {
  setScreen("timerScreen");
}
function clo() {
  setScreen("clockScreen");
}
function wa() {
  setScreen("stopwatchScreen");
}
onEvent("stopwatchButton1", "click", function( ) {
  wa();
});
onEvent("clockButton1", "click", function( ) {
  clo();
});
onEvent("clockButton2", "click", function( ) {
  clo();
});
onEvent("timerButton2", "click", function( ) {
  tim();
});
onEvent("stopwatchButton0", "click", function( ) {
  wa();
});
onEvent("timerButton0", "click", function( ) {
  tim();
});


function timer() {
  var time = getText("timerInput");
  onEvent("pointlessPicture1", "click", function( ) {
    
  });
  timedLoop(1000, function() {
      showElement("button1");
      time = time - 1;
      setNumber("timer", time);
      if (time==0) {
          stopTimedLoop();
          playSound("assets/iphone-6s-remix-v3-20325.mp3", true);
          playSound("assets/twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3", false);
        }
    });
  onEvent("resetTimerButton", "click", function( ) {
    time = 0;
    stopTimedLoop();
    stopTimedLoop();
    clearTimeout(time);
    setText("timer", time);
    stopSound("assets/category_animals/cartoon_creature_accent_2.mp3");
  });
}
