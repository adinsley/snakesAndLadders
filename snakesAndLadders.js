var _ = require('lodash')


//Player Constructor and Methods//

var Player = function(name) {
  this.name = name;
  this.currentGame = {};
  this.currentBoardIndex = 0;
}

Player.prototype = {
  joinGame: function(game){
    game.addPlayer(this);
    this.currentGame = game;
  },

  move: function(moveBy){
    this.currentBoardIndex += moveBy;
    if(this.currentGame.board[this.currentBoardIndex]){
    var boardValue = this.currentGame.board[this.currentBoardIndex];
    if(boardValue < 0){
      console.log("Oh no you fell off the ladder move down " + boardValue + " places");
    }else if(boardValue > 0){
      console.log("You ate a tasty snake move up " + boardValue + " places");
    }//end of loop//
  }else{
    boardValue = 0;
  }

    this.currentBoardIndex += boardValue;
    console.log("You're now on position " + this.currentBoardIndex);
    this.currentGame.turns += 1;
  },

  rollDice:function(){
    var diceResult = _.random(1, 6);
    this.move(diceResult);
    return diceResult;
  },
  hasWon:function(){
    if(this.currentBoardIndex >= 9){
      this.currentGame.winner = this;
      return true;
    }else{
      return false;
    }
  },
  snakeAndLadder:function(){
    var boardValue = this.currentGame.board[currentBoardIndex]
    return boardValue
  }

}

// Game constructor and Methods//
var Game = function() {
  this.name = "Snakes and Ladders";
  this.players = [];
  this.board = {1:0, 2:0, 3:-1, 4:2, 5:3, 6:0, 7:-5, 8:0, 9:0};
  this.winner = {};
  this.turns = 0;
}
Game.prototype = {
  addPlayer:function(player){
    this.players.push(player);
  },

  currentPlayer:function(){
    return this.players[this.turns % this.players.length];
  },


}







module.exports = {
  playerConstructor: Player,
  gameConstructor: Game,
}