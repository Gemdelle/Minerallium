import React from "react";
import '../styles/pages/LostScreen.css';
import {Link} from "react-router-dom";
import Provider from "../../core/Provider";

export default function LostScreen() {
    // Play Sound
    Provider.sounds.playLossSound();
    const pictureRandomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    return <div className="finish-screen-container">
        <img src={`/images/lose-sign-${pictureRandomNumber}.webp`}/>
        <Link to={"/"} className={"main-menu"} />
    </div>;
}