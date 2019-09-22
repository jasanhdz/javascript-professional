import MediaPlayer from '@jasanhdz/mediaplayer/src/MediaPlayer';
import AutoPlay from '@jasanhdz/mediaplayer/src/plugins/AutoPlay'; 
import AutoPause from '@jasanhdz/mediaplayer/src/plugins/AutoPause'; 
import Ads from '@jasanhdz/mediaplayer/src/plugins/Ads/';

const video: HTMLElement = document.querySelector('video');
const btnplay: HTMLElement = document.getElementById('play');
const btnmuted: HTMLElement = document.getElementById('muted');

const player = new MediaPlayer({
  el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
] });
btnplay.onclick = () => player.play();
btnmuted.onclick = () => player.muted();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .catch(error => {
      console.log(error.message);
  })
}