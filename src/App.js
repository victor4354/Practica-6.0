import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetail from './components/PokemonDetail';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#1976d2' },
    },
});

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar toggleSidebar={toggleSidebar} />
                <Sidebar open={sidebarOpen} onClose={closeSidebar} />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pokedex" element={<Pokedex />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/pokemon/:id" element={<PokemonDetail />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;