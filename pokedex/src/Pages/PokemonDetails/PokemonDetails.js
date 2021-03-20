import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToPokedex, goToPokemonList } from '../../routes/Coordinator';

const PokemonDetails = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);
  const { name } = useParams();
  const [chosenPokemon, setChosenPokemon] = useState({});

  useEffect (() => {
    const renderChosenPokemonDetails = pokemons.find((pokemon) => {
      return pokemon.name === name
    })
    setChosenPokemon(renderChosenPokemonDetails)
  }, [])

  return (
    <>
      <p> AQUI É A TELA DE DETALHES DO POKEMON </p>
      <button onClick={() => goToPokemonList(history)}> Voltar para lista de Pokemons </button>
      <button onClick={() => goToPokedex(history)}> Ir para a Pokedex </button>
      <div>
        <img src={chosenPokemon && chosenPokemon.sprites && chosenPokemon.sprites.front_default} />
        <img src={chosenPokemon && chosenPokemon.sprites && chosenPokemon.sprites.back_default} />
        <p>Status</p>
        {
          chosenPokemon && chosenPokemon.stats && chosenPokemon.stats.map((stat) => {
            return (
              <p key={stat.stat.name}>
                {stat.stat.name} {stat.base_stat}
              </p>
            )
          })
        }
      </div>
    </>
  );
};

export default PokemonDetails;