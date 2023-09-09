import React from "react";
import "../styles/components/LevelBar.css";

export default function LevelBar({ levels }: any) {
    let statusClassNameReferences: any = {
        ACTIVE: "active",
        REACHED: "reached",
        UNREACHED: "unreached"
    }

  return <div className="level-bar-container">
    {
        levels.map((level: any, index: number) => {
            return (<div key={index} className={`${statusClassNameReferences[level.status]}`}></div>)
        })
    }
    </div>;
}
