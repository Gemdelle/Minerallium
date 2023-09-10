import React from 'react'
import "../styles/components/AtomItem.css"


export default function AtomItem({ atom, onAtomSelected }:any) {

  return (
    <div className="atom" onClick={()=> onAtomSelected(atom)}>{atom}</div>
  )
}
