import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Box,
    Button
} from '@mui/material';

const PokemonCard = ({ item }) => {
    return (
        <Card
            sx={{
                maxWidth: 300,
                margin: 'auto',
                transition: 'transform 0.2s',
                '&:hover': {
                    transform: 'scale(1.05)'
                }
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={item.sprites.front_default}
                alt={item.name}
                sx={{
                    objectFit: 'contain',
                    bgcolor: 'rgba(0,0,0,0.05)'
                }}
            />
            <CardContent>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        textTransform: 'capitalize',
                        textAlign: 'center',
                        mb: 2
                    }}
                >
                    {item.name}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mb: 2
                }}>
                    {item.types.map((typeData) => (
                        <Chip
                            key={typeData.type.name}
                            label={typeData.type.name}
                            size="small"
                            color="primary"
                            variant="outlined"
                        />
                    ))}
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        component={Link}
                        to={`/pokemon/${item.id}`}
                        variant="contained"
                        color="primary"
                    >
                        Ver Detalles
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;