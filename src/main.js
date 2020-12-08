/* eslint-disable */

// git push origin psychictest

import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";
var lastCard = null;
var outputCard = "&#9829;8";
window.onload = function validate() {
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

  sessionStorage.setItem("oldCard", outputCard);
};

if (outputCard == lastCard) {
  lastCard = outputCard;
  window.location.reload();
}

let cardType = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

// Store

// Retrieve
let miniCard = document.getElementById("miniCard");
miniCard.innerHTML = sessionStorage.getItem("oldCard");
console.log(miniCard);
let x = miniCard.innerHTML.toString();
console.log(x);
// let checkClub = miniCard.innerHTML.includes("&#9827;");
// let checkSpade = miniCard.innerHTML.includes("&#9824;");
if (x.includes("&#9829;")) {
  miniCard.classList.add("red");
}
console.log(x);
console.log(miniCard.childNodes[0].textContent);
