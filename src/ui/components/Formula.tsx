import React from 'react'
import "../styles/components/Formula.css"

export default function Formula({ formula }:any) {
  return (
    <div className="formula"><div className='formula-text'>{formula}</div></div>
  )
}
