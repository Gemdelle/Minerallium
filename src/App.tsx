import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./ui/pages/Home";
import NoMatch from "./ui/pages/NoMatch";
import Game from "./ui/pages/Game";

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

