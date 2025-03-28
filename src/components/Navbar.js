import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link correctamente
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleSidebar }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>
                {/* Usar Link en lugar de Enlace */}
                <Button color="inherit" component={Link} to="/">
                    Inicio
                </Button>
                <Button color="inherit" component={Link} to="/pokedex">
                    Pokédex
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    Acerca
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;