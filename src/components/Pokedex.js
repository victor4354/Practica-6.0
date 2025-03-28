import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                // Simulated API call - replace with actual API endpoint
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
                const data = await response.json();

                const detailedPokemon = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const detailResponse = await fetch(pokemon.url);
                        return detailResponse.json();
                    })
                );

                setPokemonList(detailedPokemon);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch Pokémon');
                setLoading(false);
            }
        };

        fetchPokemon();
    }, []);

    if (loading) return <Typography variant="h6">Cargando Pokédex...</Typography>;
    if (error) return <Typography variant="h6" color="error">{error}</Typography>;

    return (
        <div>
            <Typography variant="h4" gutterBottom>Pokédex</Typography>
            <Grid
                container
                spacing={3}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '20px'
                }}
            >
                {pokemonList.map((pokemon) => (
                    <Grid item key={pokemon.id}>
                        <PokemonCard
                            item={{
                                id: pokemon.id,
                                name: pokemon.name,
                                weight: pokemon.weight,
                                types: pokemon.types,
                                abilities: pokemon.abilities,
                                sprites: pokemon.sprites
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Pokedex;