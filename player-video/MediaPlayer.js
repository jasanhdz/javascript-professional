function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || [];

  this._initPlugins();
}
MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.unmuted;
    },
    set muted(value) {
      this.media.muted = value;
    }
  }
  
   this.plugins.forEach(plugin => {
     plugin.run(player);
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