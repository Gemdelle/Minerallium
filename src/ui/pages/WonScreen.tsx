import React from "react";
import '../styles/pages/WonScreen.css';
import {Link} from "react-router-dom";
import Provider from "../../core/Provider";

export default function WonScreen() {
    // Play Sound
    Provider.sounds.playWinSound();
    const pictureRandomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    return <div className="finish-screen-container">
        <img src={`/images/win-sign-${pictureRandomNumber}.webp`}/>
        <Link to={"/"} className={"main-menu"} />
    </div>;
}