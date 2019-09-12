function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || [];

  this._initPlugins();
}
MediaPlayer.prototype._initPlugins = function () {
   this.plugins.forEach(plugin => {
     plugin.run(this);
   });
 }

 MediaPlayer.prototype.pause = function () {
   this.media.pause();
}
 
MediaPlayer.prototype.play = function () {
  if (this.media.paused) this.media.play();
  else this.media.pause();
}

MediaPlayer.prototype.muted = function () {
  this.media.muted ?
    this.unmuted() :
    this.media.muted = true;
}

MediaPlayer.prototype.unmuted = function () {
  this.media.muted = false;
}



export default MediaPlayer;