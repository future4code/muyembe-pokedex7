import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonDetails } from "../../routes/Coordinator";
import {
  ListWrapper,

} from "./Styled";
import PokeCard from "../../Components/CardPokemon/Card"
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

            <PokeCard
             key={pokemon.name}
             name={pokemon.name}
             alt={pokemon.name}
             Image={pokemon.sprites.front_default}
             TextButtonOne={"Adcionar"}
             GoToPage={() => goToPokemonDetails(history, pokemon.name)}
             TextButtonTwo={"Detalhes"}
              />             
          );
        })}
      </ListWrapper>
    </>
  );
};

export default PokemonList;