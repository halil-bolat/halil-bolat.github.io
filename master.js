player1 = [
  [null, null],
  [null, null]
];
player2 = [
  [null, null],
  [null, null]
];

 var cardcheck = [];

function checkcard(){
  console.log("first one " + cardcheck.length);
  console.log("Second one " + cardcheck);
  for (var i=0; i<cardcheck.length-1; i++){
    for (var a=i+1; a<cardcheck.length; a++){
      console.log(cardcheck[i][0], cardcheck[a][0], cardcheck[i][1], cardcheck[a][1]);
      console.log("[i]",i,"[a]",a );
      if ((cardcheck[i][0] == cardcheck[a][0]) && (cardcheck[i][1] == cardcheck[a][1]))
      {
        document.getElementById('errormessage').innerHTML = "ERROR!";
      }
    }
  }
}
// var hearts = document.getElementsByClassName('suits').innerHTML = "<img class='suits' src='hearts.png'></img>";
// var diamonds = document.getElementsByClassName('suits').innerHTML = "<img class='suits' src='diamonds.png'></img>";
// var clubs = document.getElementsByClassName('suits').innerHTML = "<img class='suits' src='clubs.png'></img>";


deck = ["Diamonds", "Spades", "Clubs", "Hearts"];
function randomcard(){
  return Math.floor(Math.random() * 10) + 2;
}

function randomsuit(){
  return Math.floor(Math.random() * 4);
}

function add(player){
  player.push([randomcard(), deck[randomsuit()]]);
  cardcheck.push(player[player.length-1]);
  checkcard();
  console.log(player);
}

function player2_ai(player){
  if (totals(player2) <= totals(player1)){
    while (totals(player2) <= 17){
      add(player);
    }
  }
  else {
    console.log("finish");
  }
}


function winner(){
  if ((totals(player1) <= 21) && (totals(player2) <= 21)){
    if (totals(player1) > totals(player2)){
      alert("player1 wins");
    }
    else {
      alert("player 2 wins");
    }
  }
  else {
    alert("YOU LOSE!");
  }
}

function deal(){
  player1[0][0] = randomcard();
  player1[0][1] = deck[randomsuit()];
  player1[1][0] = randomcard();
  player1[1][1] = deck[randomsuit()];
  player2[0][0] = randomcard();
  player2[0][1] = deck[randomsuit()];
  player2[1][0] = randomcard();
  player2[1][1] = deck[randomsuit()];
  cardcheck.push(player1[0]);
  cardcheck.push(player1[1]);
  cardcheck.push(player2[0]);
  cardcheck.push(player2[1]);
};


function totals(player){
  var scores = 0;
  for (var i=0; i<player.length; i++){
      scores += player[i][0];
      if (scores > 21){
        console.log("BUST!");
      }
  }
  return scores;
};
deal();
console.log(player1);
console.log(player2);
console.log(player1[0][0] + player1[0][1]);
console.log(player1[1][0] + player1[1][1]);
console.log(player2[0][0] + player2[0][1]);
console.log(player2[1][0] + player2[1][1]);
console.log("player 1 has a total of " + totals(player1));
console.log("player 2 has a total of " + totals(player2));
console.log(cardcheck);


document.getElementById("buttonhit").addEventListener("click", function(){
  add(player1);
  console.log(totals(player1));
  document.getElementById('totalplayer1').innerHTML = totals(player1);
});

document.getElementById("buttonstand").addEventListener("click", function(){
  player2_ai(player2);
  totals(player2);
  winner();
  document.getElementById('totalplayer2').innerHTML = totals(player2);
});

var cardvar = document.getElementById('player1first');
var cardvar1 = document.getElementById('player1second');
var cardvar2 = document.getElementById('player2first');
var cardvar3 = document.getElementById('player2second');
document.getElementById('player1first').innerHTML = (player1[0][0] + player1[0][1]);
document.getElementById('player1second').innerHTML = (player1[1][0] + player1[1][1]);
document.getElementById('player2first').innerHTML = (player2[0][0] + player2[0][1]);
document.getElementById('player2second').innerHTML = (player2[1][0] + player2[1][1]);
document.getElementById('totalplayer1').innerHTML = totals(player1);
document.getElementById('totalplayer2').innerHTML = totals(player2);
cardvar.innerHTML = "<img class='cards' src='PNG/" + cardvar.innerHTML + ".png'></img>";
cardvar1.innerHTML = "<img class='cards' src='PNG/" + cardvar1.innerHTML + ".png'></img>";
cardvar2.innerHTML = "<img class='cards' src='PNG/" + cardvar2.innerHTML + ".png'></img>";
cardvar3.innerHTML = "<img class='cards' src='PNG/" + cardvar3.innerHTML + ".png'></img>";
checkcard();
