import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Sidebar open={open} onClose={() => setOpen(false)} />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
