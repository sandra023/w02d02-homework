

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
}

const drWho = {
    cardDeck: [],
    roundsWon: 0,
    gamesWon: 0,
    usedCards: []
}

const theMaster = {
    cardDeck: [],
    usedCards: [],
    roundsWon: 0,
    gamesWon: 0
}

function dealPlayerCards () {
    for (let i = 0; i<6; i++){ 
        let randomPick = (Math.floor(Math.random()*(game.pokemonDeck.length)));
    if(i % 2 === 0){
        drWho.cardDeck.push(game.pokemonDeck[randomPick]);
        game.pokemonDeck.splice(randomPick,1);
    } else {
        theMaster.cardDeck.push(game.pokemonDeck[randomPick]);
        game.pokemonDeck.splice(randomPick,1);
    }
  } console.log("Doctor who has be dealt:" )
    console.log(`${drWho.cardDeck[0].name}, ${drWho.cardDeck[1].name}, ${drWho.cardDeck[2].name}`) 
    console.log("The Master has been dealt:")
    console.log(`${theMaster.cardDeck[0].name}, ${theMaster.cardDeck[1].name}, ${theMaster.cardDeck[2].name}`)
}

function battle (){
    for(let i = 0; i < 3; i++){
        let drWhosCardName = drWho.cardDeck[drWho.cardDeck.length-1].name;
        let theMastersCardName = theMaster.cardDeck[theMaster.cardDeck.length-1].name;
        let drWhosCardDamage = drWho.cardDeck[drWho.cardDeck.length-1].damage;
        let theMastersCardDamage = theMaster.cardDeck[theMaster.cardDeck.length-1].damage    
    console.log(`Doctor Who draws a ${drWhosCardName} that deals ${drWhosCardDamage} points damage`);
    console.log(`The Master draws a ${theMastersCardName} that deals ${theMastersCardDamage} points damage`)
    updateScore(drWhosCardDamage,theMastersCardDamage); 
    drWho.usedCards.push(drWho.cardDeck[drWho.cardDeck.length-1]);
    drWho.cardDeck.pop();
    theMaster.usedCards.push(theMaster.cardDeck[theMaster.cardDeck.length-1]);
    theMaster.cardDeck.pop();
} findWinner();
drWho.roundsWon = 0;
theMaster.roundsWon = 0;

}
function findWinner () {
    if(drWho.roundsWon > theMaster.roundsWon){
        drWho.gamesWon++
        console.log("GOOD PREVAILS......DOCTOR WHO WINS THE GAME!!!!")
    }else if (theMaster.roundsWon > drWho.roundsWon){
        theMaster.gamesWon++
        console.log("EVIL REIGNS.....THE MASTER WINS THE GAME!!!!!")
    } else {
        console.log('NOBODY WINS!')
    }
}

function updateScore (drWhosCardDamage,theMastersCardDamage){
    if (drWhosCardDamage>theMastersCardDamage){
        drWho.roundsWon++
        console.log("Doctor Who defeats The Master!");
        console.log(`Score: Doctor Who: ${drWho.roundsWon}, The Master: ${theMaster.roundsWon}`)  
    }
    else if (theMastersCardDamage>drWhosCardDamage){
        theMaster.roundsWon++
        console.log("The Master defeats Doctor Who!");
        console.log(`Score: The Master: ${theMaster.roundsWon}, Doctor Who: ${drWho.roundsWon}`)
    } else {
        console.log("It's a tie!")
    }
}

function playGame () {
    dealPlayerCards();
    battle ();
}

while(game.pokemonDeck.length > 5){
    playGame();   
}
if(drWho.gamesWon > theMaster.gamesWon){
 console.log("THE DOCTOR PREVAILS")
} else if (theMaster.gamesWon > drWho.gamesWon) {
console.log("THE MASTER WINS!")
} else {
    console.log("THERE IS NO WINNER")
}
