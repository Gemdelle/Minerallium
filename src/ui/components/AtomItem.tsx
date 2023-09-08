import React from 'react'
import "../styles/components/AtomItem.css"

export default function AtomItem({ atom }:any) {
  return (
    <div className="atom">{atom}</div>
  )
}
