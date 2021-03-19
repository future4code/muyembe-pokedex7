import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeBase, setPokeBase] = useState([]);

  const pokeBaseList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((replication) => setPokeBase(replication.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    pokeBaseList();
  }, []);

  useEffect(() => {
    let pokemonList = [];
    pokeBase.forEach((creature) => {
      axios.get(creature.url).then((replication) => {
        pokemonList.push(replication.data);
        if (pokemonList.length === 20) {
          setPokemons(pokemonList);
        }
      });
    });
  }, [pokeBase]);

  const dataPokemon = { pokemons, setPokemons, pokeBase, setPokeBase };

  return (
    <GlobalStateContext.Provider value={dataPokemon}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
