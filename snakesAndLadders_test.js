var imported = require('./snakesAndLadders');
var Player = imported.playerConstructor;
var Game = imported.gameConstructor;


var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Snakes and Ladders', function(){
  //Bank creating correctly//
  it('we can create a player', function(){
    var player1 = new Player("P1");
    assert.equal("P1", player1.name);
  });

  it('we can create a game', function(){
      var game1 = new Game();
      assert.equal("Snakes and Ladders", game1.name); 
  });

  it('player can join game', function(){
      var game1 = new Game();
      var player1 = new Player("P1");
      player1.joinGame(game1);
      assert.deepEqual([player1], game1.players);
      assert.deepEqual(game1, player1.currentGame);
  });

  it('player starts at position 0', function(){
      var game1 = new Game();
      var player1 = new Player("P1");
      player1.joinGame(game1);
      assert.equal(0, player1.currentBoardIndex);
  });

  it('player moves to position 4', function(){
      var game1 = new Game();
      var player1 = new Player("P1");
      player1.joinGame(game1);
      player1.move(4);
      assert.equal(4, player1.currentBoardIndex);
  });

  it('player moves by rolling dice', function(){
      var game1 = new Game();
      var player1 = new Player("P1");
      player1.joinGame(game1);
      var diceRoll = player1.rollDice();
      assert.equal(diceRoll, player1.currentBoardIndex);
      console.log(diceRoll);
      console.log(player1.currentBoardIndex)
  });

  it('player can win', function(){
      var game1 = new Game();
      var player1 = new Player("P1");
      player1.joinGame(game1);
      player1.currentBoardIndex = 8;
      player1.move(6);
      assert.equal(true, player1.hasWon());
      assert.deepEqual(player1, game1.winner);

      // console.log(diceRoll);
      // console.log(player1.currentBoardIndex)
  });

}) //End of test//