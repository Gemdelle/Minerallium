import React from 'react';
const {Howl, Howler} = require('howler');

class PlaySound {
  correctSound = new Howl({
    src: ['/sounds/correct.mp3'],
  });
  incorrectSound = new Howl({
    src: ['/sounds/incorrect.wav'],
  });
  winSound = new Howl({
    src: ['/sounds/win.mp3'],
  });
  lossSound = new Howl({
    src: ['/sounds/loss.mp3'],
  });
  backgroundSound = new Howl({
    src: ['/sounds/background-music.mp3'],
  });
  timerSound = new Howl({
    src: ['/sounds/timer.mp3'],
  });

  playCorrectSound = () => {
    this.correctSound.play();
  };
  playIncorrectSound = () => {
    this.incorrectSound.play();
  };
  playWinSound = () => {
    this.winSound.play();
  };
  playLossSound = () => {
    this.lossSound.play();
  };
  playBackgroundSound = () => {
    this.backgroundSound.play();
  };
  playTimerSound = () => {
    this.timerSound.play();
  };
}

export default PlaySound;
