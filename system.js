import { ATTEMPTS } from "./constants.js";
import * as utils from "./util.js";
import Game from "./game.js";

class System {

  #count;
  

  triesElement = document.getElementById("tries");
  startTextElement = document.getElementById("startText");
  startButtonElement = document.getElementById("startButton");
  failTextElement = document.getElementById("failText");
  restartButtonElement = document.getElementById("restartButton");
  successTextElement = document.getElementById("successText");
  overTextElement = document.getElementById("overText");

  constructor() {
    
    this.#count = ATTEMPTS;
    this.triesElement.innerText = this.#count;

    utils.makeElementVisible(this.startTextElement);
    utils.makeElementInvisible(this.failTextElement);
    utils.makeElementInvisible(this.successTextElement);
    utils.makeElementInvisible(this.overTextElement);

    this.startButtonElement.addEventListener("click", this.#start);
    this.restartButtonElement.addEventListener("click", this.#restart);
  }

  
  #decreaseCount() {
    this.#count--;
    this.triesElement.innerText = this.#count;
  }

  
  #gameStart = async () => {
    this.#decreaseCount();
    const result = await new Game();

    
    if (result) {
      
        utils.makeElementVisible(this.successTextElement);
    } else {
     
      if (this.#count > 0) utils.makeElementVisible(this.failTextElement);
      
      else utils.makeElementVisible(this.overTextElement);
    }
  };


  #start = () => {
    utils.makeElementInvisible(this.startTextElement);
    utils.makeElementInvisible(this.startButtonElement);

    this.#gameStart();
  };


  #restart = () => {
    utils.makeElementInvisible(this.failTextElement);
    this.#gameStart();
  };


  cleanup() {
    this.triesElement.innerText = ATTEMPTS;

    this.startButtonElement.removeEventListener("click", this.#start);
    this.restartButtonElement.removeEventListener("click", this.#restart);
    utils.makeElementInvisible(this.successTextElement);
    utils.makeElementInvisible(this.overTextElement);
    // utils.makeElementVisible(this.startTextElement);
    utils.makeElementInvisible(this.failTextElement);

    document.querySelectorAll(".hangman-area > img").forEach((element) => {
      utils.makeBlur(element);
  });
  }
}

export default System;
