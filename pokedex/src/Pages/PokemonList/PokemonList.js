import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonDetails } from "../../routes/Coordinator";
import {
  ListWrapper,

} from "./Styled";
import PokeCard from "../../Components/CardPokemon/Card"
import Header from "../../Components/Header/Header";
import imageText from '../../images/LISTAPOKEMON.png'

const PokemonList = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);


 

  let pokeCard= pokemons.map((pokemon) => {
    return (
      <PokeCard
       key={pokemon.name}
       name={pokemon.name}
       alt={pokemon.name}
       Image={pokemon.sprites.front_default}
       TextButtonOne={"Adicionar"}
       GoToPageTwo={() => goToPokemonDetails(history, pokemon.name)}
       TextButtonTwo={"Detalhes"}
        />             
    );
  })


  return (
    <>
      <Header pokeTitle={imageText}/>

      <ListWrapper>
         {pokeCard}
      </ListWrapper>
    </>
  );
};

export default PokemonList;