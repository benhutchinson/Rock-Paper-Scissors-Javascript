function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;  
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function() {

  if (this.player1.pick === this.player2.pick ) {
    return null;
  }

  else if (this.player1.pick === "rock") {
    if (this.player2.pick === "scissors") {
      return this.player1;
    }
    else {
      return this.player2;
    }
  }

  else if (this.player1.pick === "scissors") {
    if (this.player2.pick === "rock") {
      return this.player2;
    }
    else {
      return this.player1;
    }
  }

  else {
    if (this.player2.pick === "scissors") {
      return this.player2;
    }
    else {
      return this.player1;
    }
  }

};