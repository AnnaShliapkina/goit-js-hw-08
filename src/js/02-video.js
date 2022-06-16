import Vimeo from '@vimeo/player';
const throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(clickOnStop, 1000));
player.on('ended', ended);

function clickOnStop({ seconds }) {
  const currentTimeValue = JSON.stringify(seconds);
  localStorage.setItem(LOCALSTORAGE_KEY, currentTimeValue);
}

function ended() {
  player.setCurrentTime(0).then(function () {});
}

const playFromStop = function () {
  const getSavedTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  player.setCurrentTime(getSavedTime).then(function () {});
};

playFromStop();
