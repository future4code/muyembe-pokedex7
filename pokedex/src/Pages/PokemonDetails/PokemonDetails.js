import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToPokedex, goToPokemonList } from '../../routes/Coordinator';

const PokemonDetails = () => {
  const history = useHistory();
  return (
    <>
      <p> AQUI É A TELA DE DETALHES DO POKEMON </p>
      <button onClick={() => goToPokemonList(history)}> Voltar para lista de Pokemons </button>
      <button onClick={() => goToPokedex(history)}> Ir para a Pokedex </button>
    </>
  );
};

export default PokemonDetails;