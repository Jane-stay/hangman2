import { ANSWERS, TIME_LIMIT } from "./constants";
import * as utils from "./util.js";

class Game {

lasttime;
timerId;

hangmans = document.querySelectorAll(".hangman-area > img");
buttons = document.querySelectorAll(".alphabet > button");
answerInput = document.getElementById("input");

answer = ANSWERS[Math.floor(Math.random()) * (ANSWERS.length)];

constructor() {
    
}


}