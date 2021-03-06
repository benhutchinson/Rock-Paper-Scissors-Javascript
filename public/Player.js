function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;  
};

function Computer() {
};

Computer.prototype.picks = function() {
  var choice = Math.random();
  var randomPick = function() {   
    if (choice <= 0.33) {
        return "rock";
    }
    else if (0.34 <= choice <= 0.67 ) {
        return "paper";
    }
    else {
        return "scissors";
    }
  };
  this.pick = randomPick();
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {
  rock:   {beats: 'scissors'},
  paper:  {beats: 'rock'},
  scissors: {beats: 'paper'}
}

Game.prototype._isSamePick = function() {
  return this.player1.pick === this.player2.pick;
};

Game.prototype.winner = function() {
  if(this._isSamePick()) return null;

  if(this.PAIRS[this.player1.pick]['beats'] === this.player2.pick){
    return this.player1;
  }
  else {
    return this.player2;
  }
};



// Game.prototype.winner = function() {

//   if (this.player1.pick === this.player2.pick ) {
//     return null;
//   }

//   else if (this.player1.pick === "rock") {
//     if (this.player2.pick === "scissors") {
//       return this.player1;
//     }
//     else {
//       return this.player2;
//     }
//   }

//   else if (this.player1.pick === "scissors") {
//     if (this.player2.pick === "rock") {
//       return this.player2;
//     }
//     else {
//       return this.player1;
//     }
//   }

//   else {
//     if (this.player2.pick === "scissors") {
//       return this.player2;
//     }
//     else {
//       return this.player1;
//     }
//   }

// };