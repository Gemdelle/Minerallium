import React from "react";
import '../styles/pages/LostScreen.css';
import PlaySound from "../components/PlaySound";

export default function WonScreen() {
    // Play Sound
    const winSound = new PlaySound();
    winSound.playWinSound();

    return <div className="finish-screen-container">
        <img src={"http://www.quickmeme.com/img/f3/f36a86a02993461bcc1cf30af2bd63729e95a48cffd7d5593950c189a73f4ce9.jpg"}/>
    </div>;
}