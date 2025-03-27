import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => (
    <Drawer open={open} onClose={onClose}>
        <List sx={{ width: 200 }}>
            <ListItem button component={Link} to="/" onClick={onClose}>
                <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={onClose}>
                <ListItemText primary="Acerca de" />
            </ListItem>
        </List>
    </Drawer>
);

export default Sidebar;
