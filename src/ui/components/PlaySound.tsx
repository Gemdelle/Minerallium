import React from 'react';
const {Howl, Howler} = require('howler');

class PlaySound {
  correctSound = new Howl({
    src: ['/sounds/correct.mp3'],
    volume: 0.4,
  });
  incorrectSound = new Howl({
    src: ['/sounds/incorrect.wav'],
    volume: 1,
  });
  winSound = new Howl({
    src: ['/sounds/win.mp3'],
    volume: 0.5,
  });
  lossSound = new Howl({
    src: ['/sounds/loss.mp3'],
    volume: 0.5,
  });
  backgroundSound = new Howl({
    src: ['/sounds/background-music.mp3'],
    volume: 0.1,
  });
  timerSound = new Howl({
    src: ['/sounds/timer.mp3'],
    volume: 0.6,
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
  pauseTimerSound = () => {
    this.timerSound.stop();
  };
}

export default PlaySound;
