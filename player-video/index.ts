import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay'; 
import AutoPause from './plugins/AutoPause'; 

const video: HTMLElement = document.querySelector('video');
const btnplay: HTMLElement = document.getElementById('play');
const btnmuted: HTMLElement = document.getElementById('muted');

const player = new MediaPlayer({
  el: video, plugins: [
    new AutoPlay(),
    new AutoPause()
] });
btnplay.onclick = () => player.play();
btnmuted.onclick = () => player.muted();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .catch(error => {
      console.log(error.message);
  })
}