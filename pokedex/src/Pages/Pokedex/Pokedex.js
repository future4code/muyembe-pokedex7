import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { goToPokemonDetails, goToPokemonList } from "../../routes/Coordinator";

const Pokedex = () => {
  const history = useHistory();

  return (
    <>
      <Header botaoCaminho = {() => goToPokemonList(history)} botaoTexto = {'Voltar para lista dos Pokemons'}/>
      
      <p> AQUI É A POKEDEX </p>
      <button onClick={() => goToPokemonList(history)}>

        Voltar para lista dos Pokemons
      </button>
      <button onClick={() => goToPokemonDetails(history)}>

        Ver detalhes do Pokemon
      </button>
    </>
  );
};

export default Pokedex;
