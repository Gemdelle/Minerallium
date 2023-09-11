import React from "react";
import '../styles/pages/LostScreen.css';
import PlaySound from "../components/PlaySound";

export default function LostScreen() {
    // Play Sound
    const lostSound = new PlaySound();
    lostSound.playLossSound();

    return <div className="finish-screen-container">
        <img src={"https://cdn.memegenerator.es/imagenes/memes/full/17/39/17394925.jpg"}/>
    </div>;
}