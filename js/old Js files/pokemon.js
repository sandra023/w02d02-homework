

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
]
}

const player = {
  playerRoundsWon: 0,
  playerDeck: [],
  usedCards: []
  }


const dealTheHand = () => {
  console.log(`${game.playerDeck}`);
  console.log(`${computerDeck}`);
  console.log("The cards have been dealt. Player 1 goes first.") 
}


// RETURN CARDS TO DECk
// const computerDeck = []
// let computerTotalWins = 0
// let randomPick = 0
// const drawPlayerCards = () => {
//   let tempArr = game.pokemonDeck.slice();
//   for (i = 0; i<6; i++){  
//     randomPick = (Math.floor(Math.random()*(game.pokemonDeck.length-i)));
//     if(i % 2 === 0){
//       game.playerDeck.push(tempArr[randomPick]);
//           tempArr.splice(randomPick,1);
//     } else {
//       computerDeck.push(tempArr[randomPick]);
//           tempArr.splice(randomPick,1);
//     }
//   } 
// }

const computerDeck = []
let computerTotalWins = 0
let randomPick = 0
const drawPlayerCards = () => {
  for (i = 0; i<6; i++){  
    randomPick = (Math.floor(Math.random()*(game.pokemonDeck.length-i)));
    if(i % 2 === 0){
     player.playerDeck.push(game.pokemonDeck[randomPick]);
          game.pokemonDeck.splice(randomPick,1);
    } else {
      computerDeck.push(game.pokemonDeck[randomPick]);
          game.pokemonDeck.splice(randomPick,1);
    }
  } 
}

drawPlayerCards();

console.log(player.playerDeck);
console.log(computerDeck);
console.log("The cards have been dealt. Player 1 goes first.")


const battle = () => {
  let computerDamageCounter = 0;
  let playerDamageCounter = 0;
  for (i =0; i < 3 ; i++){
    console.log(`Eggbert has drawn a ${player.playerDeck[i].name} and deals ${player.playerDeck[i].damage} points damage.`)
    computerDamageCounter += palplayerDeck[i].damage
    console.log(`Computer has drawn a ${computerDeck[i].name} and deals ${computerDeck[i].damage} points damage.`)
    playerDamageCounter += computerDeck[i].damage
  } if (playerDamageCounter < computerDamageCounter){
    console.log(`Eggbert wins!`) 
    player.playerRoundsWon += 1
    console.log(`Score: Eggbert ${player.playerRoundsWon}, Computer ${computerTotalWins}`)
  } else if (computerDamageCounter < playerDamageCounter) {
    console.log(`Computer wins!`)
    computerTotalWins += 1
    console.log(`Score: Computer ${computerTotalWins}, Eggbert ${playerTotalWins}`)
  }return "Game over!"
}

console.log(battle());





const battleRound () {
  console.log(`Eggbert has drawn a ${player.playerDeck[i].name} and deals ${player.playerDeck[i].damage} points damage.`);

  console.log(`Computer has drawn a ${computerDeck[i].name} and deals ${computerDeck[i].damage} points damage.`)
   if (player.playerDeck[i].damage > computerDeck[i].damage){
    console.log("Eggbert wins the round");
   } else if (player.playerDeck[i].damage < computerDeck[i].damage){
    console.log("Computer wins the round");
      }else {
        console.log("It's a tie");
   }
}














