import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import PeriodicTable from "./PeriodicTable";
import '../styles/Game.css';

import data from "../../core/data/mock-data"
import arraysHaveSameObjects from "../../core/utils/objectsUtils";
import StorageProvider from "../../core/StorageProvider";

const storage = StorageProvider.storage
const Game: React.FC = () => {
    const navigate = useNavigate();
    const [formula, setFormula] = useState([]);
    const [isFinished, setIsFinished] = useState(false);
    const {id} = useParams<{ id: string }>();

    let element = storage.retrieveCatalogById(Number(id))

    const onGoBack = () => {
        navigate(-1);
    };

    let onEraseLastSelection = () => {
        let updatedAttoms: any = [...formula]
        updatedAttoms.pop()
        const hasFinished = arraysHaveSameObjects(updatedAttoms, element.attoms!)

        if (hasFinished) {
            finish();
        } else {
            unFinished();
        }

        setFormula(updatedAttoms)
    }

    let onElementSelected = (atomicNumber: number) => {
        let attom = data.find((attom) => {
            return attom.atomicNumber === atomicNumber
        })

        let updatedAttoms: any = [
            ...formula,
            {
                atomicNumber: attom!.atomicNumber,
                symbol: attom!.symbol,
            }
        ]

        const hasFinished = arraysHaveSameObjects(updatedAttoms, element.attoms!)

        if (hasFinished) {
            finish();
        }
        setFormula(updatedAttoms)
    }

    function finish() {
        setIsFinished(true)
        storage.revealElementById(element.id)
    }
    function unFinished() {
        setIsFinished(false)
        storage.unRevealElementById(element.id)
    }


    return (
        <div>
            <h1>Game</h1>
            <button onClick={onGoBack}>Go to Catalog</button>
            <button onClick={onEraseLastSelection}>Erase</button>
            <div className="answer-container">
                <img
                    src={`/images/${element.name}.jpg`}
                    alt={`Photo ${element.id}`}
                    className={`${isFinished ? 'revealed' : "unrevealed"}`}
                />
                {isFinished ? <span>{element.name}</span> : null}
                <div className="formula-container">
                    {
                        formula.map((attom: any, index) => {
                            return (<span key={index}>{attom.symbol}</span>)
                        })
                    }
                </div>
            </div>
            <PeriodicTable onElementSelected={onElementSelected}/>
        </div>
    );
};

export default Game;