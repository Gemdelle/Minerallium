import React from "react";
import '../styles/pages/LostScreen.css';
import PlaySound from "../components/PlaySound";
import {Link} from "react-router-dom";

export default function LostScreen() {
    // Play Sound
    const lostSound = new PlaySound();
    lostSound.playLossSound();
    const pictureRandomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    return <div className="finish-screen-container">
        <img src={`/images/lose-sign-${pictureRandomNumber}.png`}/>
        <Link to={"/"} className={"main-menu"} />
    </div>;
}