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
    for (var a=i+1; a<cardcheck.length; a++){
      if ((cardcheck[i][0] == cardcheck[a][0]) && (cardcheck[i][1] == cardcheck[a][1]))
      {
        ////
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

function addingcard(){
  var playeradd = document.createElement('div');
  playeradd.className = "playercard";
  playeradd.id = cardcheck[cardcheck.length-1];
  playeradd.innerHTML = cardcheck[cardcheck.length-1];
  playeradd.innerHTML = "<img class='cards' src='PNG/" + playeradd.innerHTML + ".png'>";
  document.getElementById('player1div').prepend(playeradd);
}

function add(player){
  player.push([randomcard(), deck[randomsuit()]]);
  cardcheck.push(player[player.length-1].join(""));
  checkcard();
  addingcard();
}

function addingcard2(){
  var playeradd = document.createElement('div');
  playeradd.className = "playercard";
  playeradd.id = cardcheck[cardcheck.length-1];
  playeradd.innerHTML = cardcheck[cardcheck.length-1];
  playeradd.innerHTML = "<img class='cards' src='PNG/" + playeradd.innerHTML + ".png'>";
  document.getElementById('player2div').prepend(playeradd);
}

function add2(player){
  player.push([randomcard(), deck[randomsuit()]]);
  cardcheck.push(player[player.length-1].join(""));
  checkcard();
  addingcard2();
}

function player2_ai(player){
  if (totals(player2) <= totals(player1)){
    while ((totals(player2) < 17) && (totals(player2) <= totals(player1))){
      add2(player);
    }
  }
  else {
    console.log("finish");
  }
}

function unhidetotal(){
  document.querySelector('#infototal').style.display = "block";
}

function unhide(){
  document.querySelector('#player2div #player2second img').style.display = "block";
  document.querySelector('#totalfor2 p').style.display = "block";
}

if(!localStorage.getItem('player1')) {
  localStorage.setItem('player1', 10);
}




function winner(){
  unhide();
  if ((totals(player1) <= 21) && (totals(player2) <= 21)){
    if (totals(player1) > totals(player2)){
      localStorage.setItem('player1', parseInt(localStorage.getItem('player1'))+1);
      console.log(localStorage.getItem('player1'));
      document.getElementById('infototal').innerHTML = "Player 1 wins";
      checkfinal();
      unhidetotal();
      hidehit();
      hidestand();
    }
    else if (totals(player1) == totals(player2)){
      document.getElementById('infototal').innerHTML = "It's a DRAW!";
      checkfinal();
      unhidetotal();
      hidehit();
      hidestand();
    }
    else {
      document.getElementById("infototal").innerHTML = "Dealer wins";
      localStorage.setItem('player1', parseInt(localStorage.getItem('player1'))-1);
      checkfinal();
      unhidetotal();
      hidehit();
      hidestand();
    }
  }
  else {
    localStorage.setItem('player1', parseInt(localStorage.getItem('player1'))+1);
    console.log(localStorage.getItem('player1'));
    document.getElementById("infototal").innerHTML = "Player 1 wins";
    checkfinal();
    unhidetotal();
    hidehit();
    hidestand();
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

function checkfinal() {
  if (localStorage.getItem('player1') <= 0){
    document.getElementById("infototal").innerHTML = "Player Lost!";
    localStorage.setItem('player1', 10);
  }
}

function totals(player){
  console.log("im in totals");
  var scores = 0;
  for (var i=0; i<player.length; i++){
      scores += player[i][0];
      if (scores > 21){
        document.getElementById("infototal").innerHTML = "Player bust";
        checkfinal();
        unhidetotal();
        hidehit();
        hidestand();
        if (player != player1){
          console.log("YES");
        }
        else {
          localStorage.setItem('player1', parseInt(localStorage.getItem('player1'))-1);
        }
      }
  }
return scores;
};



deal();


document.getElementById("buttonhit").addEventListener("click", function(){
  add(player1);
  console.log(totals(player1));
  document.getElementById('totalplayer1').innerHTML = totals(player1);
});
function hidestand() {
 document.getElementById('buttonstand').style.display = "none";
}
function hidehit() {
  document.getElementById('buttonhit').style.display = "none";
}

document.getElementById("buttonstand").addEventListener("click", function(){
  player2_ai(player2);
  totals(player2);
  winner();
  hidehit();
  hidestand();
  document.getElementById('totalplayer2').innerHTML = totals(player2);
});


document.getElementById('buttonreset').addEventListener("click", function(){
  location.reload();
})


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

document.getElementById('score').innerHTML = localStorage.getItem('player1');

setTimeout(checkcard, 200);
