import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Game.css';

import TimeBar from "../components/TimeBar"
import Marquee from "../components/Marquee"
import AtomsBar from "../components/AtomsBar"
import Formula from '../components/Formula';
import compounds from '../../core/data/compounds';
import Graphic from '../components/Graphic';
import LevelBar from '../components/LevelBar';
import levelsConfig from '../../core/data/levels-config';

const Game: React.FC = () => {
    return (
        <div className="home-container">
            <div> 
                <TimeBar time={10000} /> {/* tiempo en milisegundos */}
                
                <Formula formula={compounds[2].formula} />
                
                <Graphic activeComponent={compounds[2]} /> 

                <div className="atom-container"></div>
                
                

                <Marquee>
                    <AtomsBar />
                </Marquee>
            </div>
            <LoopingVideo />
        </div>
    );
};

export default Game;

const LoopingVideo: React.FC = () => {
    return (
        <div className="looping-video">
            <video autoPlay loop muted>
                <source src={`/videos/background-game.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};


