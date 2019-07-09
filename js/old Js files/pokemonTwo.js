

const game = {
  pokemonDeck: [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
],
  dealTheHand () {
  console.log(player.playerDeck);
  console.log(this.computerDeck);
  console.log("The cards have been dealt. Player 1 goes first.") 
},
  computerDeck:[],
  computerRoundsWon: 0,
  computerDamageCounter: 0,
  computerUsedCardsDeck:[],
  drawPlayerCards (){
    let randomPick = 0
    for (i = 0; i<6; i++){  
      randomPick = (Math.floor(Math.random()*(game.pokemonDeck.length-i)));
    if(i % 2 === 0){
      player.playerDeck.push(game.pokemonDeck[randomPick]);
      game.pokemonDeck.splice(randomPick,1);
    } else {
      this.computerDeck.push(game.pokemonDeck[randomPick]);
      game.pokemonDeck.splice(randomPick,1);
    }
  } 
},
battle() {  
  //if(this.pokemonDeck.length){
  this.drawPlayerCards();
  this.dealTheHand();
  this.battleRound();
  this.determinGamewinner();
  this.battle();
//}
},
displayScore() {
      console.log(`Score: Eggbert ${player.playerRoundsWon}, Computer ${this.computerRoundsWon}`)
},
determineWinner (){
    if (player.playerDeck[i].damage > this.computerDeck[i].damage){
      console.log("Eggbert wins the round");
      player.playerRoundsWon += 1;
      this.displayScore();
  } else if (player.playerDeck[i].damage < this.computerDeck[i].damage){
      this.computerRoundsWon += 1;
      console.log("Computer wins the round");
      this.displayScore();
   } else {
      console.log("It's a tie: Nobody wins!");
       }
 },
battleRound() {
 for (let i =0; i < 3; i++) {
      console.log(`Eggbert has drawn a ${player.playerDeck[i].name} and deals ${player.playerDeck[i].damage} points damage.`);
      console.log(`Computer has drawn a ${this.computerDeck[i].name} and deals ${this.computerDeck[i].damage} points damage.`);
   //     this.determineWinner();
}    if (player.playerDeck[i].damage > this.computerDeck[i].damage){
      console.log("Eggbert wins the round");
      player.playerRoundsWon += 1;
      this.displayScore();
  } else if (player.playerDeck[i].damage < this.computerDeck[i].damage){
      this.computerRoundsWon += 1;
      console.log("Computer wins the round");
      this.displayScore();
   } else {
      console.log("It's a tie: Nobody wins!");
       }
        player.playerUsedCardsDeck.push(player.playerDeck[i]);
        player.playerDeck.shift();
        this.computerUsedCardsDeck.push(this.computerDeck[i]);
        this.computerDeck.shift();
 },
determinGamewinner () {
    if (player.playerRoundsWon > this.computerRoundsWon){
    alert("Eggbert wins!");
    displayScore();
   } else if (player.playerRoundsWon < this.computerRoundsWon){
    alert("Computer wins!");
    displayScore();

  }
}
}
 const player = {
    playerRoundsWon: 0,
    playerDeck: [],
    playerUsedCardsDeck: [],
    playerDamageCounter: []
  }

game.battle();










