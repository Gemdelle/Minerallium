import React, {useEffect, useState} from 'react'
import "../styles/components/Graphic.css"
import Atom from "./Atom";
import arraysAreEqual from "../../core/utils/arraysUtils";
import AtomStatus from "../../core/atoms/AtomStatus";
import Provider from "../../core/Provider";

function agruparPorPropiedad(arr: any[]): any[][] {
    const resultado: { [key: string]: any[] } = {};

    for (const objeto of arr) {
        const valorPropiedad = objeto["name"];

        if (!resultado[valorPropiedad]) {
            resultado[valorPropiedad] = [];
        }

        resultado[valorPropiedad].push(objeto);
    }

    return Object.values(resultado);
}

export default function Compound({compound, currentAtomSelection, onFormulaCompleted, onInValidAtom}: any) {
    const [currentSequence, setCurrentSequence]: any[] = useState([]);
    const [currentAtoms, setCurrentAtoms]: any[] = useState([]);
    const [currentPointer, setCurrentPointer]: any[] = useState({});

    useEffect(() => {
        let atomsGroupByName: any = agruparPorPropiedad(compound.composition)
        setCurrentAtoms(atomsGroupByName)

        let pointer = compound.composition.find((composition:any)=> {
            return composition.status === AtomStatus.UNPLACED;
        })

        if (pointer){
            setCurrentPointer(pointer)
        } else {
            setCurrentPointer({})
        }

        return () => {};
    }, [compound]);

    useEffect(() => {
        if (arraysAreEqual(currentSequence, compound.sequence )){
            onFormulaCompleted()
            setCurrentSequence([])
        }

        return () => {};
    }, [currentSequence]);

    useEffect(() => {
        if (currentAtomSelection === null)
            return

        if (currentPointer.name === currentAtomSelection) {
            let currentPointer = compound.composition.find((composition:any)=> {
                return composition.status === AtomStatus.UNPLACED;
            })
            currentPointer["status"] = AtomStatus.PLACED
            setCurrentSequence([...currentSequence,currentPointer.name])
            
            // Play sound
            Provider.sounds.playCorrectSound()
           

            let nextPointer = compound.composition.find((composition:any)=> {
                return composition.status === AtomStatus.UNPLACED;
            })

            if (nextPointer){
                setCurrentPointer(nextPointer)
            } else {
                setCurrentPointer({})
            }
        } else {
            onInValidAtom()
        }

        return () => {};
    }, [currentAtomSelection]);


    return (
        <div className={`graphic-container ${compound.formula}`}>
            {
                currentAtoms.map((atomGroup: any[]) => {
                    return atomGroup.map((atom: any, index:number) => {
                        return (
                            <div key={index} className="compound-atom-container">
                                <div
                                    className={`element ${atom.status === AtomStatus.PLACED ? "hide" : ""} ${atom.name}${index + 1} ${currentPointer === atom ? "point" : ""}`
                                }>
                                    <Atom atom={atom} name={atom.name}/>
                                </div>
                            </div>

                        )
                    })
                })
                /*

                                Object.keys(compound.composition).map((key: any, index: number) => {
                                    let components: any = [...Array(compound.composition[key].atoms)].map((_: any, indexIntern: number) => {
                                        return (
                                            <div key={index + indexIntern} className={`element hide ${key}${indexIntern + 1}`}>
                                                <Atom atom={compound.composition[key]} name={key}/>
                                            </div>
                                        )
                                    })
                                    return components
                                })*/
            }
        </div>
    )
}
