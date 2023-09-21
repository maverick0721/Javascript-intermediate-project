var player1 = Math.floor(Math.random() * 6) + 1;
var imageSource1 = "images/dice" + player1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

var player2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + player2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}