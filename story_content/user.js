function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63cc1nWvEwQ":
        Script1();
        break;
      case "6mYvdeezarF":
        Script2();
        break;
      case "61LKyPypCxf":
        Script3();
        break;
      case "5syhLL4aL9a":
        Script4();
        break;
      case "6negBtBH8S7":
        Script5();
        break;
      case "6jFsMEqfOUb":
        Script6();
        break;
      case "69nvXsnTbbN":
        Script7();
        break;
      case "5bv19BEo24Z":
        Script8();
        break;
      case "6K2o3wbdpvj":
        Script9();
        break;
      case "5oXO6KU6T04":
        Script10();
        break;
      case "61OmF2tA48K":
        Script11();
        break;
      case "6gsKWsWIi3i":
        Script12();
        break;
      case "6pPWGk0zkDK":
        Script13();
        break;
      case "6FQMMu7oOfx":
        Script14();
        break;
      case "5a8NNB0SNMH":
        Script15();
        break;
      case "69r24qWSlnD":
        Script16();
        break;
      case "6PCclUgL2bG":
        Script17();
        break;
      case "5ajjIYP8eO4":
        Script18();
        break;
      case "5x4SaPoEJtv":
        Script19();
        break;
      case "5foNgjfG750":
        Script20();
        break;
      case "6Y10kC2f956":
        Script21();
        break;
      case "5vh9N8c53BZ":
        Script22();
        break;
      case "6hs9jIAGFom":
        Script23();
        break;
      case "5fGdqc2EjXn":
        Script24();
        break;
      case "6jIIliBpy6q":
        Script25();
        break;
  }
}

function Script1()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script2()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script3()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script4()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script5()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script6()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script7()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script8()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script9()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script10()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script11()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script12()
{
  if (SCORM_CallLMSGetValue("cmi.core.lesson_status")!=='completed')
{
var player = GetPlayer();
var vTotalPoints = 0;
vTotalPoints = player.GetVar("CC_Points");
SCORM_CallLMSSetValue("TN_Points", vTotalPoints);
}
}

function Script13()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script14()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script15()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script16()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script17()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script18()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script19()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script20()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script21()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script22()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script23()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script24()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script25()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

