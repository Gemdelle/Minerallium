import React, {useEffect, useState} from 'react';
import '../styles/pages/Game.css';

import TimeBar from "../components/TimeBar"
import AtomsBar from "../components/AtomsBar"
import Formula from '../components/Formula';
import compounds from '../../core/data/compounds';
import Graphic from '../components/Graphic';
import LevelBar from '../components/LevelBar';
import levelsConfig from '../../core/data/levels-config';
import LevelStatus from "../../core/levels/LevelStatus";


const changeCurrentLevel : any = (previousLevels: any) => {
    const copyOfLevels: any[] = [...previousLevels]
    let firstUnReachedLevelIndex = copyOfLevels.findIndex((level: any) => {
        return level.status === LevelStatus.UNREACHED
    })
    let previousLevelIndex = firstUnReachedLevelIndex -1

    if ( copyOfLevels[previousLevelIndex] ){
        copyOfLevels[previousLevelIndex] = {
            ...copyOfLevels[previousLevelIndex],
            status: LevelStatus.REACHED
        }
    }

    copyOfLevels[firstUnReachedLevelIndex] = {
        ...copyOfLevels[firstUnReachedLevelIndex],
        status: LevelStatus.ACTIVE
    }

    return copyOfLevels
}

const Game: React.FC = () => {
    const [levels, setlevels] = useState(levelsConfig);
    useEffect(() => {
        const interval = setInterval(() => {
            setlevels((prevLevels) => changeCurrentLevel(prevLevels));
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    let currentLevel = levels.find((level: any) => level.status === LevelStatus.ACTIVE)
    return (
        <div className="home-container">
            <div>
                <TimeBar time={10000} speed={currentLevel!.speed} /> {/* tiempo en milisegundos */}

                <Formula formula={compounds[12].formula} />

                <Graphic activeComponent={compounds[12]} />

                <div className="atom-container"></div>

                <LevelBar levels={levels} />

                <AtomsBar atomsList={[]} speed={0}/> {/* speed = pixel/seg*/}
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


