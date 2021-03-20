import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokedex, goToPokemonDetails } from '../../routes/Coordinator';
import { ListWrapper, Card, PokeName,ButtonWraper} from './Styled';

const PokemonList = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);

  return (
    <>
      <p>AQUI É A LISTA DE POKÉMONS</p>
      <button onClick={() => goToPokedex(history)}> Ir para a Pokedex </button>
      <ListWrapper>
        {pokemons.map((creature) => {
            return (
              <Card key={creature.name}>
                <PokeName>{creature.name}</PokeName>
                <img alt={creature.name} src={creature.sprites.front_default} />
                <ButtonWraper>
                <button>Adcionar</button>
                <button onClick={() => goToPokemonDetails(history)}>Detalhes</button>
                </ButtonWraper>
              </Card>
            );
          })}
      </ListWrapper>
    </>
  );
};

export default PokemonList;