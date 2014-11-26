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

function Rules(player3, player4) {
  this.player3 = player3;
  this.player4 = player4;
};

Rules.prototype.PAIRS = {
  rock:   {crushes: 'scissors', squashes: 'lizard'},
  paper:  {covers: 'rock', disproves: 'spock'},
  scissors: {cut: 'paper', decapitate: 'lizard'},
  spock: {smashes: 'scissors', vaporizes: 'rock'},
  lizard: {poisons: 'spock', eats: 'paper'}, 
}

Rules.prototype._isSamePick = function() {
  return this.player3.pick === this.player4.pick;
};

Rules.prototype.winner = function() {
  if(this._isSamePick()) return null;

  if(this.PAIRS[this.player3.pick]['beats'] === this.player4.pick){
    return this.player3;
  }
  else {
    return this.player4;
  }
};