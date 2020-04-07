const timerComponents = document.querySelectorAll(".digit");//get the divs that makeup the timer
const digits = Array.from(timerComponents).filter((digit)=>{return digit.textContent !== ":";});//get just the placeholders for the digits.

function setSeconds(time){
    //todo: any advantage to having separate digit places for the tens and ones, as opposed to just seconds and millis?
    //sample input: 1428 -> 0 for tens, 1 for ones
    //sample input: 19387 -> 1 for tens, 9 for ones
    const timeInSeconds = Math.floor(time / 1000);
    setSecondsTens(Math.floor(timeInSeconds / 10));
    setSecondsOnes(Math.floor(timeInSeconds % 10));

}

function setSecondsTens(digit) {
    const secondsTens = digits[0];
    secondsTens.textContent = digit;
}

function setSecondsOnes(digit) {
    const secondsOnes = digits[1];
    secondsOnes.textContent = digit;
}

function setMillis(time){
    setMillisOnes(time % 10);
    time = Math.floor(time / 10);
    setMillisTens(time % 10);
}

function setMillisTens(digit) {
    const millisTens = digits[2];
    millisTens.textContent = digit;
}

function setMillisOnes(digit) {
    const millisTens = digits[3];
    millisTens.textContent = digit;
}

function setTimeRed(){
    timerComponents.forEach((component) =>{
        component.style.color = "red";
    });
}

let time = 0;//millisecond representation of the timer
const intervalID = window.setInterval(timer, 10);

function timer(){
    time += 10;
    if(time > 10000) {
        window.clearInterval(intervalID);
        setMillisOnes(0);
        setMillisTens(0);
        setTimeRed();
        //todo: set color to red
        return;
    }
    setSeconds(time);
    setMillis(time);
}


//test code
// function newTimer(){
//     let timer = 0;
//     return function newTimer(){
//         console.log(timer);
//         return timer += 10;
//     }
// }
// let myTimer = new newTimer();
// window.setInterval(myTimer, 10);