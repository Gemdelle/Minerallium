import React from "react";
import '../styles/components/Atom.css';

export default function Atom() {
    return <div>

        <div className="container">
            <div className="wrap">
                <div className="circle horizontal c1">
                    <div className="wrap-electron">
                        <div className="circle electron"></div>
                    </div>
                </div>
                <div className="circle vertical c1">
                    <div className="wrap-electron">
                        <div className="circle electron"></div>
                    </div>
                </div>
            </div>
            <div className="wrap r">
                <div className="circle horizontal c2">
                    <div className="wrap-electron">
                        <div className="circle electron"></div>
                    </div>
                </div>
                <div className="circle vertical c2">
                    <div className="wrap-electron">
                        <div className="circle electron"></div>
                    </div>
                </div>
                <div className="circle center"></div>
            </div>
        </div>

    </div>;
}