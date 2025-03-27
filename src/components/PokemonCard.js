// src/components/PokemonCard.js
import React from 'react';

const PokemonCard = ({ item }) => {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{item.name}</h2>
            <img src={item.sprites.front_default} alt={item.name} />
            <p><strong>Weight:</strong> {item.weight}</p>
            <p>
                <strong>Types:</strong>{' '}
                {item.types.map((t) => t.type.name).join(', ')}
            </p>
            <p>
                <strong>Abilities:</strong>{' '}
                {item.abilities.map((a) => a.ability.name).join(', ')}
            </p>
        </div>
    );
};

export default PokemonCard;
