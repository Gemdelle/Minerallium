import React from "react";
import '../styles/components/Atom.css';

export default function Atom({atom, name}: any) {
    return <div className="atom-representation-container">
        <div className="Atom">
            <div className="Atom-nucleus">{name}</div>
            {
                [...Array(atom.electrons)].map((_:any, index: number) => {
                    return (
                        <div key={index} className={`Atom-orbit Atom-orbit--${index} Atom-orbit--foreground`}>
                            <div className="Atom-electron"></div>
                        </div>
                    )
                })
            }
        </div>
    </div>;
}