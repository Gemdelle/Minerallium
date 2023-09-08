import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./ui/components/Home";
import NoMatch from "./ui/components/NoMatch";
import Catalog from "./ui/components/Catalog";
import Game from "./ui/components/Game";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="game" element={<Game/>}/>
            <Route path="*" element={<NoMatch/>}/>
        </Routes>
    );
}

export default App;

