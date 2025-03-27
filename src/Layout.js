import { Box, Container } from '@mui/material';

const Layout = ({ children }) => (
    <Box>
        <Container sx={{ py: 4 }}>
            {children}
        </Container>
        <Box component="footer" sx={{ py: 2, bgcolor: '#e0e0e0', mt: 4 }}>
            © 2024 Escuela App
        </Box>
    </Box>
);

export default Layout;