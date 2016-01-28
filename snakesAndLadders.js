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
  }

}

// Game constructor and Methods//
var Game = function() {
  this.name = "Snakes and Ladders";
  this.players = [];
  this.board = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
  this.winner = {};
}
Game.prototype = {
  addPlayer:function(player){
    this.players.push(player);
  }


}






module.exports = {
  playerConstructor: Player,
  gameConstructor: Game,
}