import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonDetails } from "../../routes/Coordinator";
import {
  ListWrapper,
  Card,
  PokeName,
  ButtonWrapper,
  ButtonAdd,
  ButtonDetails,
  PokemonImage,
} from "./Styled";
import Header from "../../Components/Header/Header";

const PokemonList = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);

  return (
    <>
      <Header titlePage={"LISTA DE POKEMON"} />

      <ListWrapper>
        {pokemons.map((pokemon) => {
          return (
            <Card key={pokemon.name}>
              <PokeName>{pokemon.name}</PokeName>
              {/* aqui */}
              <PokemonImage
                alt={pokemon.name}
                src={pokemon.sprites.front_default}
              />
              {/* <PokemonSecondImage alt={pokemon.name} src={pokemon.sprites.other.dream_world.front_default}/> */}
              <ButtonWrapper>
                <ButtonAdd>Adicionar</ButtonAdd>
                <ButtonDetails
                  onClick={() => goToPokemonDetails(history, pokemon.name)}
                >
                  Detalhes
                </ButtonDetails>
              </ButtonWrapper>
            </Card>
          );
        })}
      </ListWrapper>
    </>
  );
};

export default PokemonList;