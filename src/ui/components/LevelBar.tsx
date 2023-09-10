import React from "react";
import "../styles/components/LevelBar.css";

let statusClassNameReferences: any = {
    ACTIVE: "active",
    REACHED: "reached",
    UNREACHED: "unreached"
}
export default function LevelBar({ levels }: any) {
  return <div className="level-bar-container">
    {
        levels.map((level: any, index: number) => {
            return (
                <div key={index} className={level.status == 'ACTIVE' ? 'active-sparkle' : ''}>
                    <div className={`${statusClassNameReferences[level.status]}`}></div>
                </div>
            )
        })
    }
    </div>;
}
