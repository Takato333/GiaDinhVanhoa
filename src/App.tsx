import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Origin from './pages/Origin';
import Concept from './pages/Concept';
import Basis from './pages/Basis';
import Situation from './pages/Situation';
import Solution from './pages/Solution';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nguon-goc" element={<Origin />} />
                <Route path="/khai-niem" element={<Concept />} />
                <Route path="/co-so" element={<Basis />} />
                <Route path="/thuc-trang" element={<Situation />} />
                <Route path="/giai-phap" element={<Solution />} />
            </Routes>
        </Router>
    );
};

export default App;
