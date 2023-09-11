import React from "react";
import "../styles/components/LevelBar.css";
import LevelStatus from "../../core/levels/LevelStatus";

let statusClassNameReferences: any = {
    ACTIVE: "active",
    REACHED: "reached",
    UNREACHED: "unreached"
}
export default function LevelBar({ levels, alreadyPickedCompounds }: any) {
    if (!alreadyPickedCompounds || alreadyPickedCompounds.length === 0)
        return null
  return <div className="level-bar-container">
    {
        levels.map((level: any, index: number) => {
            let stateClass = alreadyPickedCompounds[index] !== undefined ? `${level.status === LevelStatus.ACTIVE ? alreadyPickedCompounds[index].type: alreadyPickedCompounds[index].state}`: ""
            return (
                <div key={index} className={level.status === LevelStatus.ACTIVE ? 'active-sparkle' : ''}>
                    <div
                        className={`${statusClassNameReferences[level.status]} ${stateClass}`}
                    ></div>
                </div>
            )
        })
    }
    </div>;
}
