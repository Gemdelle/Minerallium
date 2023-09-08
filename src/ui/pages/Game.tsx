import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/Game.css';

import TimeBar from "../components/TimeBar"
import Marquee from "../components/Marquee"
import AtomsBar from "../components/AtomsBar"


const Game: React.FC = () => {
    return (
        <div className="home-container">
            <TimeBar time={10000}/> {/* tiempo en milisegundos */}
            <div className="atom-container">
                <img src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt32fb981bef970760/64ee853a77e0ccf00a9db4f9/briar_splash.jpg"  style={{ width: 80 + '%'}}/>
            </div>

            <Marquee>
                <AtomsBar />
            </Marquee>
        </div>
    );
};

export default Game;


