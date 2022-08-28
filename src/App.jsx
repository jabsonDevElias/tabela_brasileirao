
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Artilharia from "./Artilharia";
import Campeonatos from "./Campeonatos";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artilharia" element={<Artilharia />} />
                <Route path="/campeonatos" element={<Campeonatos />} />
            </Routes>
        </BrowserRouter>
    );
}


