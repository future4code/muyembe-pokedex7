import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokedex, goToPokemonDetails } from '../../routes/Coordinator';
import { ListWrapper, Card, PokeName, ButtonWrapper } from './Styled';

const PokemonList = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);

  return (
    <>
      <p>AQUI É A LISTA DE POKÉMONS!</p>
      <button onClick={() => goToPokedex(history)}> Ir para a Pokedex </button>
      <ListWrapper>
        {pokemons.map((pokemon) => {
            return (
              <Card key={pokemon.name}>
                <PokeName>{pokemon.name}</PokeName>
                <img alt={pokemon.name} src={pokemon.sprites.front_default} />
                <ButtonWrapper>
                  <button>Adicionar</button>
                  <button onClick={() => goToPokemonDetails(history, pokemon.name)}>Detalhes</button>
                </ButtonWrapper>
              </Card>
            );
          })}
      </ListWrapper>
    </>
  );
};

export default PokemonList;