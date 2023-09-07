import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/Home.css';


const Home: React.FC = () => {
    return (
        <div className="home-container">
            <Link
                to={`/catalog`}
                className="start-game"
            >Start Game</Link>
            <LoopingVideo/>
        </div>
    );
};

export default Home;


const LoopingVideo: React.FC = () => {
    return (
        <div className="looping-video">
            <video autoPlay loop muted>
                <source src={`/images/background_video.mp4`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};


