import React from 'react'
import "../styles/components/AtomsBar.css"

import AtomItem from "./AtomItem"

const testAtomsMock = ["Fe","O","N", "O", "O", "Xe"]

export default function AtomsBar() {
  return (
    <div className="atoms-bar">
      {
        testAtomsMock.map((atom) => {
          return <AtomItem atom={atom}/>
        })
      }
    </div>
  )
}
