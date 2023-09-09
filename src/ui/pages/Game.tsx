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
import Atom from '../components/Atom';


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

function getRandomCompoundFrom(compounds: any): any {
       const randomIndex = Math.floor(Math.random() * (compounds.length - 1 + 1));
    return compounds[randomIndex];
}

const Game: React.FC = () => {
    const [levels, setLevels] = useState(levelsConfig);
    const [currentCompound, setCurrentCompound]: any = useState({});
    const [intervalId, setIntervalId]: any = useState(null);
    let currentLevel = levels.find((level: any) => level.status === LevelStatus.ACTIVE)

    useEffect(() => {
        const interval = setInterval(() => {
            setLevels((prevLevels) => changeCurrentLevel(prevLevels));
        }, 3000);
        setIntervalId(interval);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let currentLevel = levels.find((level: any) => level.status === LevelStatus.ACTIVE)
        let currentLevelCompounds = compounds.filter((compound: any) => compound.level === currentLevel!.compoundLevel)

        let randomCompound;
        do {
            randomCompound = getRandomCompoundFrom(currentLevelCompounds);
        } while (randomCompound === undefined);
        setCurrentCompound(randomCompound)
        return () => {};
    }, [levels]);

    let onFinish = () => {
        clearInterval(intervalId);
    }

    return (
        <div className="home-container">
            <div>
                <TimeBar time={10000} speed={currentLevel!.speed} onFinish={onFinish} /> {/* tiempo en milisegundos */}

                <Formula formula={currentCompound.formula} />

                <Graphic activeComponent={currentCompound} />

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


