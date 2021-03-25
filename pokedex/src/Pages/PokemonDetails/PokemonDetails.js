import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext';
import {Container,DetailsMain, PokemonPhotos, PokemonInfoColumn, PokemonType } from './Styled';
import { goToPokedex, goToPokemonList } from '../../routes/Coordinator';
import Header from '../../Components/Header/Header'

const PokemonDetails = () => {
  const { pokemons } = useContext(GlobalStateContext);
  const [chosenPokemon, setChosenPokemon] = useState({});
  const history = useHistory();
  const { name } = useParams();
  useEffect (() => {
    const renderChosenPokemonDetails = pokemons.find((pokemon) => {
      return pokemon.name === name
    })
    setChosenPokemon(renderChosenPokemonDetails)
  }, [name,pokemons])
  return (
    /*<Header botaoCaminho = {() => goToPokemonList(history)} botaoTexto = {'Voltar para lista dos Pokemons'}/>
    <Header botaoCaminho = {() => goToPokemonList(history)} botaoTexto = {'Ir para a Pokedex'}/>*/

    <Container>
      <p> AQUI É A TELA DE DETALHES DO POKEMON </p>
      <button onClick={() => goToPokemonList(history)}> Voltar para lista de Pokemons </button>
      <button onClick={() => goToPokedex(history)}> Ir para a Pokedex </button>
      <DetailsMain>
        <PokemonPhotos>
          <img alt={name} src={chosenPokemon && chosenPokemon.sprites && chosenPokemon.sprites.front_default} />
          <img alt={name}  src={chosenPokemon && chosenPokemon.sprites && chosenPokemon.sprites.back_default} />
        </PokemonPhotos>
        <PokemonInfoColumn>
          <h3>Atributos</h3>
            {
              chosenPokemon && chosenPokemon.stats && chosenPokemon.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    <strong>{stat.stat.name}</strong>: {stat.base_stat}
                  </p>
                )
              })
            }
        </PokemonInfoColumn>
        <PokemonInfoColumn>
            <h3>Tipo(s)</h3>
            <PokemonType>
              {
                chosenPokemon && chosenPokemon.types && chosenPokemon.types.map((type) => {
                  return (
                    <p key={type.type.name}>
                      {type.type.name}
                    </p>
                  )
                })
              }
          </PokemonType>
            <h3>Principais ataques</h3>
              {
                chosenPokemon && chosenPokemon.moves && chosenPokemon.moves.map((move, moveList) => {
                  return (
                    moveList < 5 &&
                    <p key={move.move.name}>
                      {move.move.name}
                    </p>
                  )
                })
              }
        </PokemonInfoColumn>
      </DetailsMain>
    </Container>
  );
};
export default PokemonDetails;