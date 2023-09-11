import React from "react";
import '../styles/pages/LostScreen.css';
import PlaySound from "../components/PlaySound";

export default function LostScreen() {
    // Play Sound
    const lostSound = new PlaySound();
    lostSound.playLossSound();
    const pictureRandomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    return <div className="finish-screen-container">
        <img src={`/images/lose-sign-${pictureRandomNumber}.png`}/>
    </div>;
}