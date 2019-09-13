import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'; 
import AutoPause from './plugins/AutoPause.js'; 

const video = document.querySelector('video');
const btnplay = document.getElementById('play');
const btnmuted = document.getElementById('muted');

const player = new MediaPlayer({
  el: video, plugins: [
    new AutoPlay(),
    new AutoPause()
] });
btnplay.onclick = () => player.play();
btnmuted.onclick = () => player.muted();

