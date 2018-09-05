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
  for (var i=0; i<cardcheck.length-3; i++){
    for (var a=1; a<cardcheck.length; a++){
      if ((cardcheck[i][0] == cardcheck[a][0]) && (cardcheck[i][1] == cardcheck[a][1]))
      {
        document.getElementById('errormessage').innerHTML = "ERROR!";
      }
    }
  }
}
  winner();
deck = ['diamonds', 'spades', 'clubs', 'hearts'];
function randomcard(){
  return Math.floor(Math.random() * 10) + 2;
}

function randomsuit(){
  return Math.floor(Math.random() * 3) + 0;
}

function add(player){
  player.push([randomcard(), deck[randomsuit()]]);
  console.log(player);
}

function player2_ai(player){
  if (totals(player2) <= 17){
    add(player);
  }
  else {
    console.log("finish");
  }
  console.log(player2);
};

function winner(){
  if (totals(player1) && totals(player2) <= 21){
    if (totals(player1) > totals(player2)){
      alert("player1 wins");
    }
  }
  else {
    alert("player has passed 21.FAIL")
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
  }
  return scores;
};
player2_ai(player2);
deal();
checkcard();
console.log(player1);
console.log(player2);
console.log(player1[0][0] + player1[0][1]);
console.log(player1[1][0] + player1[1][1]);
console.log(player2[0][0] + player2[0][1]);
console.log(player2[1][0] + player2[1][1]);
console.log("player 1 has a total of " + totals(player1));
console.log("player 2 has a total of " + totals(player2));
console.log(cardcheck);




// var resetbtn = document.getElementById('buttonreset');
document.getElementById("buttonhit").addEventListener("click", function(){
  add(player1);
  console.log(totals(player1));

  document.getElementById('totalplayer1').innerHTML = totals(player1);
  });

  document.getElementById("buttonstand").addEventListener("click", function(){
    });
// var standbtn = document.getElementById('buttonstand');





document.getElementById('player1first').innerHTML = (player1[0][0] + player1[0][1]);
document.getElementById('player1second').innerHTML = (player1[1][0] + player1[1][1]);
document.getElementById('player2first').innerHTML = (player2[0][0] + player2[0][1]);
document.getElementById('player2second').innerHTML = (player2[1][0] + player2[1][1]);
document.getElementById('totalplayer1').innerHTML = totals(player1);
document.getElementById('totalplayer2').innerHTML = totals(player2);
