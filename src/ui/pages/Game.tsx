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
import PlaySound from "../components/PlaySound"


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
       const randomIndex = Math.floor(Math.random() * (compounds.length - 0));
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
    const [alreadyPickedCompounds, setAlreadyPickedCompounds]: any = useState([]);
/*
   useEffect(() => {
        const interval = setInterval(() => {
            onFormulaCompleted()
        }, 3000);
        setIntervalId(interval);

        return () => clearInterval(interval);
    }, []);
*/

    useEffect(() => {
        // Play sound
        const backgroundSound = new PlaySound();
        backgroundSound.playBackgroundSound();
    },[])

    useEffect(() => {
        let currentLevel = levels.find((level: any) => level.status === LevelStatus.ACTIVE)
        let currentLevelCompounds = compounds.filter((compound: any) => compound.level === currentLevel!.compoundLevel)
        let randomCompound: any
        do {
            randomCompound = getRandomCompoundFrom(currentLevelCompounds);
            let foundComponent = alreadyPickedCompounds.findIndex((componentFormula:any) => componentFormula.formula === randomCompound.formula)
            if (foundComponent !== -1) {
                randomCompound = undefined
            }
        } while (randomCompound === undefined);
        setCurrentCompound(randomCompound)
        setAlreadyPickedCompounds([...alreadyPickedCompounds, randomCompound])
        return () => {};
    }, [levels]);

    let onFinish = () => {
        clearInterval(intervalId);
        setHasFinished(true)
        setHasLost(true)
        setAlreadyPickedCompounds([])
        StorageProvider.storage.reset()
    }

    let onFormulaCompleted = () => {
        setTimeout(() => {
            setLevels((prevLevels: any) => {
                let currentLevels = changeCurrentLevel(prevLevels)
                let findUnreachedRemainingLevel = prevLevels.findIndex((level: any) => {
                    return level.status === LevelStatus.UNREACHED
                })

                if(findUnreachedRemainingLevel === -1){
                    clearInterval(intervalId);
                    setHasFinished(true)
                    setAlreadyPickedCompounds([])
                }
                return currentLevels
            });
        }, 500)
    }

    let onSomeAtomSelected = (atomName: string) => {
        setCurrentAtomSelection(atomName)
        setTimeout(() => { setCurrentAtomSelection(null)}, 0)
    }

    let onInValidAtom = () => {
        // Play sound
        const badSound = new PlaySound();
        badSound.playIncorrectSound();
        
        console.log("INVALID")
    }

    return (
        <div className="home-container">
            <div>
                {
                    hasFinished ? (hasLost ? <LostScreen/> : <WonScreen/>):
                        [
                            <TimeBar key={1} time={80000} speed={currentLevel!.speed} onFinish={onFinish} />,
                            <Formula key={2} formula={currentCompound.formula} />,
                            <Graphic key={3} activeComponent={currentCompound} onFormulaCompleted={onFormulaCompleted} currentAtomSelection={currentAtomSelection} onInValidAtom={onInValidAtom} />,
                            <LevelBar key={4} levels={levels} alreadyPickedCompounds={alreadyPickedCompounds} />,
                            <AtomsBar key={5} atomsList={currentCompound.selectionOptions} speed={currentLevel!.speed * 1.5} onAtomSelected={onSomeAtomSelected}/>
                        ]
                }
            </div>
            <LoopingVideo hasLost={hasFinished && hasLost} />
        </div>
    );
};

export default Game;

const LoopingVideo = ({hasLost}:any) => {
    return (
        <div className={`looping-video ${hasLost ? "lost": ""}`}>
            <video autoPlay loop muted>
                <source src={`/videos/background-game.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};


