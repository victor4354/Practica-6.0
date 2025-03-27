import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
    const data = {
        count: 1302,
        items: [
            { id: 1, name: 'bulbasaur', weight: 69, types: [ { type: { name: 'grass' } }, { type: { name: 'poison' } } ], abilities: [ { ability: { name: 'overgrow' } }, { ability: { name: 'chlorophyll' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' } },
            { id: 2, name: 'ivysaur', weight: 130, types: [ { type: { name: 'grass' } }, { type: { name: 'poison' } } ], abilities: [ { ability: { name: 'overgrow' } }, { ability: { name: 'chlorophyll' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' } },
            { id: 3, name: 'venusaur', weight: 1000, types: [ { type: { name: 'grass' } }, { type: { name: 'poison' } } ], abilities: [ { ability: { name: 'overgrow' } }, { ability: { name: 'chlorophyll' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' } },
            { id: 4, name: 'charmander', weight: 85, types: [ { type: { name: 'fire' } } ], abilities: [ { ability: { name: 'blaze' } }, { ability: { name: 'solar-power' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' } },
            { id: 5, name: 'charmeleon', weight: 190, types: [ { type: { name: 'fire' } } ], abilities: [ { ability: { name: 'blaze' } }, { ability: { name: 'solar-power' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' } },
            { id: 6, name: 'charizard', weight: 905, types: [ { type: { name: 'fire' } }, { type: { name: 'flying' } } ], abilities: [ { ability: { name: 'blaze' } }, { ability: { name: 'solar-power' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' } },
            { id: 7, name: 'squirtle', weight: 90, types: [ { type: { name: 'water' } } ], abilities: [ { ability: { name: 'torrent' } }, { ability: { name: 'rain-dish' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' } },
            { id: 8, name: 'wartortle', weight: 225, types: [ { type: { name: 'water' } } ], abilities: [ { ability: { name: 'torrent' } }, { ability: { name: 'rain-dish' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' } },
            { id: 9, name: 'blastoise', weight: 855, types: [ { type: { name: 'water' } } ], abilities: [ { ability: { name: 'torrent' } }, { ability: { name: 'rain-dish' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' } },
            { id: 10, name: 'caterpie', weight: 29, types: [ { type: { name: 'bug' } } ], abilities: [ { ability: { name: 'shield-dust' } }, { ability: { name: 'run-away' } } ], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' } }
        ]
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(data.items.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.items.slice(indexOfFirstItem, indexOfLastItem);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <h1>Pokedex</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {currentItems.map((pokemon, index) => (
                    <PokemonCard key={index} item={pokemon} />
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <button onClick={handlePrev} disabled={currentPage === 1}>
                    Anterior
                </button>
                <span style={{ margin: '0 10px' }}>
          Página {currentPage} de {totalPages}
        </span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Pokedex;
