// RANDOM NUMBER GENERATOR FUNCTION
function randomNumGen() {
  var randomNum = Math.random() * 6 + 1;
  randomNum = Math.trunc(randomNum);
  return randomNum;
}

// VARIABLES TO ACCESS HTML ELEMENTS
var heading = document.querySelector(".heading");
var reloadBtn = document.querySelector("button");

// RELOAD BUTTON FUNCTION
function reload() {
  var diceOne = randomNumGen();
  var imgOneLink = "images/dice" + diceOne + ".png";
  var playerOne = document.querySelector(".playerOne img");
  playerOne.setAttribute("src", imgOneLink);

  var diceTwo = randomNumGen();
  var imgTwoLink = "images/dice" + diceTwo + ".png";
  var playerTwo = document.querySelector(".playerTwo img");
  playerTwo.setAttribute("src", imgTwoLink);

  if(diceOne>diceTwo){
    heading.innerHTML="<i class='fa-solid fa-flag-checkered'></i> Player One Wins";
  }
  else if(diceTwo>diceOne){
    heading.innerHTML="Player Two Wins <i class='fa-solid fa-flag-checkered'></i>";
  }
  else if(diceOne==diceTwo){
    heading.innerText="Draw";
  }
}

// RELOAD BUTTON CALL
reloadBtn.addEventListener("click", reload);
