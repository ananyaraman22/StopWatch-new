var hours= document.getElementById("hours");
var minutes= document.getElementById("minutes");
var seconds= document.getElementById("seconds");
var lapToReset = document.getElementById("lap");
var startToStop = document.getElementById("start");
var lapList = document.getElementById("lapList");

var totalTime = 0;
var isTimerOn = false;
var miniTimer = false;
// Start button start the timer of watch
startToStop.addEventListener("click", startTimer(isTimerOn));
var lapCounter=1;
function startTimer(isTimerOn) {

    return function(event) {
        //miniSecond();
        if(isTimerOn) {

            clearInterval(isTimerOn);
            clearInterval(miniTimer);
            event.target.innerHTML = "START";
            isTimerOn = false;
            lapToReset.innerHTML = "RESET";

        }
        else{
            event.target.innerHTML ="STOP";
            lapToReset.innerHTML = "LAP";
            // event.target.backgroud ="";
            // event.target.color="";
                miniSecond();
            
            lapToReset.onclick = lapOrResetEvent(lapCounter);
            
            isTimerOn = setInterval(function() {
                totalTime++;
    
                
                if((totalTime)<=9)
                minutes.innerHTML = "0" +totalTime;
                if(totalTime%60>9)
                minutes.innerHTML = totalTime;
                if(totalTime>59)
                {

                if((totalTime % 60)<=9)
                    minutes.innerHTML = "0" + parseInt(totalTime%60);
                else if(totalTime%60>9)
                    minutes.innerHTML = parseInt(totalTime%60);

                if(parseInt(totalTime/60)<=9)
                    hours.innerHTML = "0"+ parseInt(totalTime/60);
                else
                    hours.innerHTML = parseInt(totalTime/60);
                    

                    // minutes.innerHTML = parseInt(totalTime %60);
                    //console.log(totalTime);
                }
    
                
            },1000)

        }
    }
}

// decide which event to fire (lap or reset)
function lapOrResetEvent(lapCounter){
    
    return function(e){
        var container = e.target.parentNode.parentNode;
        //console.log(container.parentNode.children);
    var hour =  container.children[0].innerHTML;
    var min =container.children[2].innerHTML;
    var sec =container.children[4].innerHTML;
    
    if (e.target.innerHTML == "LAP")
    {
        console.log("LAP" + lapCounter);
        
        console.log(hour + ":" + min + ":" + sec );
        time = hour + ":" + min + ":" + sec ;
        lap(time,lapCounter);
        lapCounter++;

    }
    else
    {
        console.log("RESET");
        // hour = "00";
        // min = "00";
        // sec = "00";
        reset();
    }
    }
}

// Lap button shows the current time in ul tag with id lapList

function lap(time , lapCounter){
    var listElement = document.createElement("li");
    var container = document.createElement("div");
    var lapName = document.createElement("p");
    var lapTime = document.createElement("p");
    var line = document.createElement("hr");
    line.style.color ="white";

    lapName.innerHTML = "LAP " + lapCounter;
    lapTime.innerHTML = time;
    container.appendChild(lapName);
    container.appendChild(lapTime);
    container.appendChild(line);
    listElement.appendChild(container);

    lapList.prepend(listElement);
}
// When stopWatch is running  START => STOP button with backgroud red
// When user stops the watch LAP => RESET and reset the watch
function reset(){
    lapList.innerHTML ="";

    totalTime=0;
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    hours.innerHTML="00";

    lapCounter = 1;

    lapToReset.innerHTML = "LAP";
    startToStop.innerHTML = "START";
}


function miniSecond(){

    var timer =0;
    miniTimer=setInterval(function(){

        timer++;
        if(timer<=9)
        seconds.innerHTML = "0"+timer;
        else if(timer>99)
        timer=0;
        else
        seconds.innerHTML = timer;
    },10)
    return miniTimer;
}
