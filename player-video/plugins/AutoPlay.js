function AutoPlay() { }

AutoPlay.prototype.run = function (player) {
  player.muted();
  player.play();
}

export default AutoPlay;