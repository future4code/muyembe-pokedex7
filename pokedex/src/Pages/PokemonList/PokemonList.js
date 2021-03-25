import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokedex, goToPokemonDetails } from '../../routes/Coordinator';
import { ListWrapper, Card, PokeName, ButtonWrapper,BotaoAdcionar,BotaoDetalhes } from './Styled';
import Header from '../../Components/Header/Header'


const PokemonList = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);

  return (
    <>
      <Header botaoCaminho = {() => goToPokedex(history)} botaoTexto = {'Ir para Pokedex'}/>
      
      <ListWrapper>
        {pokemons.map((pokemon) => {
            return (
              <Card key={pokemon.name}>
                <PokeName>{pokemon.name}</PokeName>
                <img alt={pokemon.name} src={pokemon.sprites.front_default} />
                <ButtonWrapper>
                  <BotaoAdcionar>Adicionar</BotaoAdcionar>
                  <BotaoDetalhes onClick={() => goToPokemonDetails(history, pokemon.name)}>Detalhes</BotaoDetalhes>
                </ButtonWrapper>
              </Card>
            );
          })}
      </ListWrapper>
    </>
  );
};

export default PokemonList;