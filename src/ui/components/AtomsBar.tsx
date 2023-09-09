import React from 'react'
import Marquee from "react-fast-marquee";
import "../styles/components/AtomsBar.css"

import AtomItem from "./AtomItem"

const testAtomsMock = ["Fe","O","N", "O", "O", "Xe","C","Br","Mc","Ga"]

export default function AtomsBar({ speed, atomsList}: {speed: number, atomsList: []}) {
  return (
    <Marquee className="atoms-bar" direction='right' speed={100 /* pixel/seg*/}>
      {
        testAtomsMock.map((atom, index) => {
          return <AtomItem atom={atom} key={index}/>
        })
      }
    </Marquee>
  )
}
