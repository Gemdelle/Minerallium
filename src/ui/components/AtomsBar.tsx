import React, { useState, useEffect } from 'react'
import Marquee from "react-fast-marquee";
import "../styles/components/AtomsBar.css"

import AtomItem from "./AtomItem"

export default function AtomsBar({speed, atomsList, onAtomSelected}: {
    speed: number,
    atomsList: [],
    onAtomSelected: any
}) {
    if (!atomsList || atomsList.length === 0) return null;

    return (
        <Marquee className="atoms-bar" direction='right' speed={speed}>
            {
                atomsList.map((atom, index) => {
                    return <AtomItem atom={atom} key={index} onAtomSelected={onAtomSelected}/>
                })
            }
        </Marquee>
    )
}
