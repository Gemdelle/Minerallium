import React from 'react'
import "../styles/components/Marquee.css"

export default function Marquee({ children }:any) {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {
          children
        }
      </div>
    </div>
  )
}
