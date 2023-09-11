import React from "react";
import '../styles/pages/WonScreen.css';
import PlaySound from "../components/PlaySound";
import {Link} from "react-router-dom";

export default function WonScreen() {
    // Play Sound
    const winSound = new PlaySound();
    winSound.playWinSound();
    const pictureRandomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    return <div className="finish-screen-container">
        <img src={`/images/win-sign-${pictureRandomNumber}.webp`}/>
        <Link to={"/"} className={"main-menu"} />
    </div>;
}