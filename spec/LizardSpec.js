describe("Rock-Paper-Scissors-Lizard-Spock", function() {

  var player3, player4, rules, computer;

  beforeEach(function() {
    player3 = new Player('Dave');
    player4 = new Player('Giogio');
    rules = new Rules(player3, player4);
    computer = new Computer;
  });

  describe('winning and losing', function() {
   
    describe('rock', function() {
      
      it('should beat scissors', function() {
        player3.picks('rock');
        player4.picks('scissors');
        expect(rules.winner()).toBe(player3);
      });

      it('should lose to paper', function() {
        player3.picks('rock');
        player4.picks('paper');
        expect(rules.winner()).toBe(player4);
      });

    });

    describe('paper', function() {
      it('should beat rock', function() {
        player3.picks('paper');
        player4.picks('rock');
        expect(rules.winner()).toBe(player3);
      });

      it('should lose to scissors', function() {
        player3.picks('paper');
        player4.picks('scissors');
        expect(rules.winner()).toBe(player4);
      });
    });

    describe('scissors', function() {
      it('should beat paper', function() {
        player3.picks('scissors');
        player4.picks('paper');
        expect(rules.winner()).toBe(player3);
      });

      it('should lose to rock', function() {
        player3.picks('scissors');
        player4.picks('rock');
        expect(rules.winner()).toBe(player4);
      });
    });
  });

  describe('draws', function() {
    describe('any identical picks', function() {
      it('should result in no winner', function() {
        var drawRulesResults = ['rock', 'paper', 'scissors', 'lizard', 'spock'].map(function(x) {
          player3.picks(x);
          player4.picks(x);
          return rules.winner();
        });
        expect(drawRulesResults).toEqual([null, null, null, null, null]);
      });
    });
  });

  describe('computer plays', function() {
    it('should pick rock or paper or scissors or lizard or spock', function() {
      computer.picks();
      expect(rules.PAIRS[computer.pick]).not.toBeUndefined();
    });
  });
});