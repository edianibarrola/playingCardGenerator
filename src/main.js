/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";
var lastCard = null;
var outputCard = "";
window.onload = function() {
  let suits = ["&#9829;", "&#9827;", "&#9830;", "&#9824;"];
  console.log("Edian's Crazy Card Creator");
  let playingCard = document.querySelector(".playingCard");
  let topIcon = document.querySelector(".topIcon");
  let bottomIcon = document.querySelector(".bottomIcon");
  let middleNumber = document.querySelector(".middleNumber");
  let randomSuit = suits[Math.floor(Math.random() * 4)];
  let randomCard = cardType[Math.floor(Math.random() * 12)];
  topIcon.innerHTML = randomSuit;
  bottomIcon.innerHTML = randomSuit;
  middleNumber.innerHTML = randomCard;

  if (randomSuit === "&#9829;" || randomSuit === "&#9830;") {
    playingCard.style.color = "red";
  }
  outputCard = randomSuit + randomCard;
  console.log(outputCard);
};

if (outputCard == lastCard) {
  lastCard = outputCard;
  window.location.reload();
}

let cardType = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
