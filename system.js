import { ATTEMPTS } from './constants.js';
import * as utils from './util.js';

class System {

count;
lasttime;

startButton = document.getElementById("startButton");
tries = document.getElementById("tries");
time = document.getElementById("time");
first = document.getElementById("first");
restartButton = document.getElementById("restartButton");
failure = document.getElementById("failure");
answerText = document.getElementById("answerText");
answerText1 = document.querySelector(".answerText");
resetButton = document.getElementById("reset-button");
end = document.getElementById("end");
success = document.getElementById("success");


start() {
    this.startButton.addEventListener("click", ()=> {
    this.count --;
    this.tries.innerText = this.count;
    this.timeFunction();
    utils.makeInvisible(this.startButton);
    utils.makeInvisible(this.start);
    hiddenAnswer();
    }
    )
}

reStart() {
    this.restartButton.addEventListener("click", ()=>{
        this.count --;
        this.tries.innerText = this.count;
        this.timeFunction();
        utils.makeInvisible(this.restartButton);
        utils.makeInvisible(this.failure);
        utils.makeInvisible(this.answerText);
        utils.makeInvisible(this.answerText1);
        hiddenAnswer();
    }  
    )
}


reset() {
    this.resetButton.addEventListener('click', ()=>{
        this.count = ATTEMPTS;
        this.tries.innerText = this.count;
        this.lasttime = TIME_LIMIT;
        this.time.innerText = this.lasttime;
        utils.makeVisible(this.first);
        utils.makeVisible(this.startButton);
        utils.makeInvisible(this.answerText);
        utils.makeInvisible(this.answerText1);
        utils.makeInvisible(this.end);
        utils.makeInvisible(this.success);





    })





decreaseCount() {
    
}

timeFunction () {

}

}