var player1 = [];
var player2 = [];

class Deck {
  constructor() {
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const points = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }


  }

  // total(){
  //   for (var i = 0; i < player1.length; i++){
  //     return player1[i] + player1[i];
  //   }
  // }

  shuffle(){
    const { deck } = this;
    let m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    return this;
  }

  deal(){
    player1 = [];
    player2 = [];
    for (var i=0; i < 2; i++ ){
        var cardd = this.deck.shift();
        player1.push(cardd);
    }
    for (var p=0; p < 2; p++ ){
        var cardd = this.deck.shift();
        player2.push(cardd);
    }
    console.log("Player 2 has " + player2);
    console.log("Player 1 has " + player1);
    console.log(deck1);
    if (this.deck.length <= 16){
      alarm("Game over");
    }
  }

  total() {
    for (var i = 0; i < player1.length; i++){
      var totals =  parseInt(player1[i]) + parseInt(player1[i]);
      console.log(totals);
    }
  }
}

const deck1 = new Deck();
deck1.shuffle();
console.log(deck1.deck);
deck1.deal();
deck1.total();
console.log(deck1.total);
