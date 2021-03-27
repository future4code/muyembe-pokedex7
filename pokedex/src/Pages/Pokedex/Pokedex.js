import React, { useContext, useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonList } from "../../routes/Coordinator";

import Card from "../../Components/CardPokemon/Card"

const Pokedex = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);
  const [chosenPokemon, setChosenPokemon] = useState({});

  const { name } = useParams();
  useEffect(() => {
    const renderChosenPokemonDetails = pokemons.find((pokemon) => {
      return pokemon.name === name;
    });
    setChosenPokemon(renderChosenPokemonDetails);
  }, [name, pokemons]);


  return (
    <>
      <Header titlePage={"Pokedex"} />
      <Card
      key={name}
      name={name}
      alt={name}
      Image={ 
        chosenPokemon &&
        chosenPokemon.sprites &&
        chosenPokemon.sprites.front_default}
        GoToPageOne={() => goToPokemonList(history)}
        // GotToPageTwo={}
        TextButtonOne={'Lista'}
        TextButtonTwo={"Remover"}

      />
    </>
  );
};

export default Pokedex;
