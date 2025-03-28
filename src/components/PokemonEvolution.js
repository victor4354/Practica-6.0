import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CircularProgress
} from '@mui/material';

const PokemonEvolution = ({ pokemonId }) => {
    const [evolutions, setEvolutions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvolutionChain = async () => {
            try {
                // Fetch species data to get evolution chain
                const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
                const speciesData = await speciesResponse.json();

                // Fetch evolution chain
                const evolutionResponse = await fetch(speciesData.evolution_chain.url);
                const evolutionData = await evolutionResponse.json();

                // Extract evolution chain
                const extractEvolutions = async (chain) => {
                    const evos = [];

                    // Current pokemon
                    if (chain.species) {
                        const currentResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${chain.species.name}`);
                        const currentData = await currentResponse.json();
                        evos.push({
                            name: chain.species.name,
                            id: currentData.id,
                            sprite: currentData.sprites.front_default
                        });
                    }

                    // Evolves to
                    if (chain.evolves_to && chain.evolves_to.length > 0) {
                        for (let evo of chain.evolves_to) {
                            const evoResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${evo.species.name}`);
                            const evoData = await evoResponse.json();
                            evos.push({
                                name: evo.species.name,
                                id: evoData.id,
                                sprite: evoData.sprites.front_default
                            });

                            // Check for next evolution
                            if (evo.evolves_to && evo.evolves_to.length > 0) {
                                const nextEvoResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${evo.evolves_to[0].species.name}`);
                                const nextEvoData = await nextEvoResponse.json();
                                evos.push({
                                    name: evo.evolves_to[0].species.name,
                                    id: nextEvoData.id,
                                    sprite: nextEvoData.sprites.front_default
                                });
                            }
                        }
                    }

                    return evos;
                };

                const evolutionList = await extractEvolutions(evolutionData.chain);

                // Filter out the current pokemon
                const filteredEvolutions = evolutionList.filter(evo =>
                    evo.id !== parseInt(pokemonId)
                );

                setEvolutions(filteredEvolutions);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching evolutions:", error);
                setLoading(false);
            }
        };

        fetchEvolutionChain();
    }, [pokemonId]);

    if (loading) return <CircularProgress />;
    if (evolutions.length === 0) return null;

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
                Evoluciones
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {evolutions.map((evo) => (
                    <Grid item key={evo.id} xs={12} sm={6} md={4}>
                        <Card
                            component={Link}
                            to={`/pokemon/${evo.id}`}
                            sx={{
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                p: 1
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={evo.sprite}
                                alt={evo.name}
                                sx={{
                                    width: 120,
                                    height: 120,
                                    objectFit: 'contain'
                                }}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ textTransform: 'capitalize' }}
                                >
                                    {evo.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PokemonEvolution;