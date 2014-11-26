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
    if (choice <= 0.2) {
        return "rock";
    }
    else if (0.2 < choice <= 0.4 ) {
        return "lizard";
    }
    else if (0.4 < choice <= 0.6 ) {
        return "spock";
    } 
    else if (0.6 < choice <= 0.8 ) {
        return "paper";
    }
    else {
        return "scissors";
    }
  };
  this.pick = randomPick();
};

function Rules(player3, player4) {
  this.player3 = player3;
  this.player4 = player4;
};

Rules.prototype.PAIRS = {
  rock:     { scissors: 'crushes', lizard: 'squashes' },
  paper:    { rock: 'covers', spock: 'disproves' },
  scissors: { paper: 'cuts', lizard: 'decapitates' },
  lizard:   { spock: 'poisons', paper: 'eats' },
  spock:    { rock: 'vaporises', scissors: 'smashes' }
}

Rules.prototype._isSamePick = function() {
  return this.player3.pick === this.player4.pick;
};

Rules.prototype.winner = function() {
  if(this._isSamePick()) return null;

  if(this._victoryVerbFor(this.player3.pick, this.player4.pick)) {
    return this.player3;
  }
  else {
    return this.player4;
  }
}

Rules.prototype.loser = function() {
  return (this.winner() === this.player3 ? this.player4 : this.player3);
}

Rules.prototype.winningMessage = function() {
  var message;

  if(this.winner()) {
    message = [this.winner().name,
    this._victoryVerbFor(this.winner().pick, this.loser().pick),
    this.loser().name].join(' ');
  } else {
    message = 'Draw';
  }

  return message;
}

Rules.prototype._victoryVerbFor = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
}
