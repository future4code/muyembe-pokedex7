import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToPokemonDetails, goToPokemonList } from '../../routes/Coordinator';

const PokedexMain = () => {
  const history = useHistory();

  return (
    <>
      <p> AQUI É A POKEDEX </p>
      <button onClick={() => goToPokemonList(history)}> Voltar para lista dos Pokemons </button>
      <button onClick={() => goToPokemonDetails(history)}> Ver detalhes do Pokemon </button>
    </>
  );
};

export default PokedexMain;