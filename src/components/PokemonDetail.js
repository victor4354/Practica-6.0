import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Box,
    List,
    ListItem,
    CircularProgress,
    Alert
} from '@mui/material';
import PokemonEvolution from './PokemonEvolution';

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

                const pokemonData = await response.json();
                const speciesData = await speciesResponse.json();

                // Find first English description
                const description = speciesData.flavor_text_entries
                    .find(entry => entry.language.name === 'en')?.flavor_text
                    .replace(/\f/g, ' ') || 'No description available.';

                setPokemon({
                    ...pokemonData,
                    description: description
                });
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch Pokémon details');
                setLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [id]);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;
    if (!pokemon) return <Typography>Pokémon not found</Typography>;

    return (
        <Card sx={{
            maxWidth: 500,
            margin: 'auto',
            borderRadius: 3,
            boxShadow: 3
        }}>
            <CardMedia
                component="img"
                height="300"
                image={pokemon.sprites.front_default}
                alt={pokemon.name}
                sx={{
                    objectFit: 'contain',
                    bgcolor: 'rgba(0,0,0,0.05)'
                }}
            />
            <CardContent>
                <Typography
                    variant="h4"
                    sx={{
                        textTransform: 'capitalize',
                        textAlign: 'center',
                        mb: 2
                    }}
                >
                    {pokemon.name}
                </Typography>

                <Typography
                    variant="body1"
                    paragraph
                    sx={{ textAlign: 'center', mb: 2 }}
                >
                    {pokemon.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ mr: 2 }}>
                        <strong>Peso:</strong> {pokemon.weight / 10} kg
                    </Typography>
                    <Typography variant="subtitle1">
                        <strong>Altura:</strong> {pokemon.height / 10} m
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mb: 2
                }}>
                    {pokemon.types.map(type => (
                        <Chip
                            key={type.type.name}
                            label={type.type.name}
                            color="primary"
                            variant="outlined"
                        />
                    ))}
                </Box>

                <Typography variant="h6" sx={{ textAlign: 'center', mb: 1 }}>
                    Habilidades
                </Typography>
                <List sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {pokemon.abilities.map(ability => (
                        <ListItem
                            key={ability.ability.name}
                            sx={{
                                width: 'auto',
                                textAlign: 'center'
                            }}
                        >
                            <Chip
                                label={ability.ability.name}
                                size="small"
                                color="secondary"
                            />
                        </ListItem>
                    ))}
                </List>

                <PokemonEvolution pokemonId={id} />
            </CardContent>
        </Card>
    );
};

export default PokemonDetail;