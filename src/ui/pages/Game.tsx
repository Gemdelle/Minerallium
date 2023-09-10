import React, {useEffect, useState} from 'react';
import '../styles/pages/Game.css';

import TimeBar from "../components/TimeBar"
import AtomsBar from "../components/AtomsBar"
import Formula from '../components/Formula';
import Graphic from '../components/Graphic';
import LevelBar from '../components/LevelBar';
import LevelStatus from "../../core/levels/LevelStatus";
import StorageProvider from "../../core/StorageProvider";
import LostScreen from "./LostScreen";
import WonScreen from "./WonScreen";


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
       const randomIndex = Math.floor(Math.random() * (compounds.length - 0 + 1));
    return compounds[randomIndex];
}

const Game: React.FC = () => {
    let compounds = StorageProvider.storage.compoundsState

    const [levels, setLevels] = useState(StorageProvider.storage.levelsState);
    const [currentCompound, setCurrentCompound]: any = useState({});
    const [intervalId, setIntervalId]: any = useState(null);
    const [currentAtomSelection, setCurrentAtomSelection]: any = useState(null);
    const [hasFinished, setHasFinished]: any = useState(false);
    const [hasLost, setHasLost]: any = useState(false);
    let currentLevel = levels.find((level: any) => level.status === LevelStatus.ACTIVE)

   /*useEffect(() => {
        const interval = setInterval(() => {
            let currentLevel = levels.find((level: any) => level.status === LevelStatus.ACTIVE)
            if (currentLevel == null){
                setHasFinished(true)
                clearInterval(intervalId);
            } else {
                setLevels((prevLevels: any) => changeCurrentLevel(prevLevels));
            }
        }, 3000);
        setIntervalId(interval);

        return () => clearInterval(interval);
    }, []);*/


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
        setHasFinished(true)
        setHasLost(true)
        //StorageProvider.storage.reset()
        clearInterval(intervalId);
    }

    let onFormulaCompleted = () => {
        let findUnreachedRemainingLevel = levels.findIndex((level: any) => {
            return level.status === LevelStatus.UNREACHED
        })

        if(findUnreachedRemainingLevel === -1){
            setHasFinished(true)
            clearInterval(intervalId);
        } else {
            setLevels((prevLevels: any) => changeCurrentLevel(prevLevels));
        }
    }

    let onSomeAtomSelected = (atomName: string) => {
        setCurrentAtomSelection(atomName)
        setTimeout(() => { setCurrentAtomSelection(null)}, 0)
    }

    let onInValidAtom = () => {
        console.log("INVALID")
    }

    return (
        <div className="home-container">
            <div>

                {
                    hasFinished ? (hasLost ? <LostScreen/> : <WonScreen/>):
                        [
                            <TimeBar time={80000} speed={currentLevel!.speed} onFinish={onFinish} />,
                            <Formula formula={currentCompound.formula} />,
                            <Graphic activeComponent={currentCompound} onFormulaCompleted={onFormulaCompleted} currentAtomSelection={currentAtomSelection} onInValidAtom={onInValidAtom} />,
                            <LevelBar levels={levels} />,
                            <AtomsBar atomsList={currentCompound.selectionOptions} speed={0} onAtomSelected={onSomeAtomSelected}/>
                        ]
                }
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


