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
  for (var i=0; i<cardcheck.length-1; i++){
    for (var a=1; a<cardcheck.length; a++){
      if ((cardcheck[i][0] == cardcheck[a][0]) && (cardcheck[i][1] == cardcheck[a][1]))
      {
      deal();
      }
    }
  }
}

deck = ['diamonds', 'spades', 'clubs', 'hearts'];
function randomcard(){
  return Math.floor(Math.random() * 10) + 2;
}

function randomsuit(){
  return Math.floor(Math.random() * 3) + 0;
}

function add(player){
  player.push([randomcard(), deck[randomsuit()]]);
  console.log(player1)
}

function player2_ai(){
  if (player2.totals <= 17){
    add(player2);
  }
  else {
    console.log("finish");
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
}

function totals(player){
  for (var i=0; i<player.length; i++){
    for (var a=i+1; a<player.length; a++){
      console.log(player[i][0] + player[a][0]);
      break;
    }
  }
  return player;
}




deal();
checkcard();
console.log(player1);
console.log(player2);
console.log(player1[0][0] + player1[0][1]);
console.log(player2[0][0] + player2[0][1]);
console.log(player1[1][0] + player1[1][1]);
console.log(player2[1][0] + player2[1][1]);
console.log("player 1 has a total of " + totals(player1[0][0], player1[1][0]));
console.log("player 2 has a total of " + totals(player2[0][0], player2[1][0]));

player2_ai();
console.log(totals(player2) + " hello");

console.log(cardcheck);
