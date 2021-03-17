import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToPokedexMain } from '../../routes/Coordinator';

const PokemonList = () => {
  const history = useHistory();

  return (
    <>
      <p>AQUI É A LISTA DE POKÉMONS</p>
      <button onClick={() => goToPokedexMain(history)}> Ir para a Pokedex </button>
    </>
  );
};

export default PokemonList;