import React from 'react';
const {Howl, Howler} = require('howler');

class PlaySound {
  allSounds: any = {
    correctSound: new Howl({
      src: ['/sounds/correct.mp3'],
      volume: 0.4,
    }),
    incorrectSound: new Howl({
      src: ['/sounds/incorrect.wav'],
      volume: 1,
    }),
    winSound: new Howl({
      src: ['/sounds/win.mp3'],
      volume: 0.5,
    }),
    lossSound: new Howl({
      src: ['/sounds/loss.mp3'],
      volume: 0.5,
    }),
    backgroundSound: new Howl({
      src: ['/sounds/background-music.mp3'],
      volume: 0.1,
    }),
    timerSound: new Howl({
      src: ['/sounds/timer.mp3'],
      volume: 0.6,
    }),
  }

  playCorrectSound = () => {
    this.allSounds.correctSound.play();
  };
  playIncorrectSound = () => {
    this.allSounds.incorrectSound.play();
  };
  playWinSound = () => {
    this.allSounds.winSound.play();
  };
  playLossSound = () => {
    this.allSounds.lossSound.play();
  };
  playBackgroundSound = () => {
    this.allSounds.backgroundSound.play();
  };
  playTimerSound = () => {
    this.allSounds.timerSound.play();
  };
  pauseTimerSound = () => {
    this.allSounds.timerSound.stop();
  };
  pauseAllSounds =() => {
    Object.keys(this.allSounds).forEach((soundKey: any) => {
      this.allSounds[soundKey].stop()
    })
  }
}

export default PlaySound;
