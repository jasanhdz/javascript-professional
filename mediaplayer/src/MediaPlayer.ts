class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config: any) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');

    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
    this.container.style.position = 'relative';
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  pause() {
    this.media.pause();
  }

  play() {
    if (this.media.paused)
      this.media.play();
    else
      this.media.pause();
  }

  muted() {
    this.media.muted ?
      this.unmuted() :
      this.media.muted = true;
  }

  unmuted() {
    this.media.muted = false;
  }
}

 





export default MediaPlayer;