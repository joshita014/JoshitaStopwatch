
// we are creating an array
let [sec, min, hr] = [0,0,0];

// adding variable for displayTime 
let displayTime = document.getElementById("displayTime");
let timer = null;

// function of a stopwatch
function stopwatch(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
        if(min == 60){
            min = 0;
            hr++;
        }
    }

    // displaying hours, minutes and seconds in 00:00:00 formate
    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    displayTime.innerHTML = h +":"+ m +":"+ s;
}

// creating a function to start by every sec.
function watchStart(){
    if(timer != null){
        clearInterval(timer);
    }
   timer = setInterval(stopwatch,1000);
}

// Generated a function to stop the stopwatch
function watchStop(){
    clearInterval(timer);
}


// Function to reset the timer again
function watchReset(){
    clearInterval(timer);
     [sec, min, hr] = [0,0,0];

//  display the fresh new timmer
    displayTime.innerHTML = "00:00:00";

}