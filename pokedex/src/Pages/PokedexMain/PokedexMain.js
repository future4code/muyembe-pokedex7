import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToPokemonDetails, goToPokemonList } from "../../routes/Coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Container, Card } from "./MainStyle";

const PokedexMain = () => {
  const { pokemons } = useContext(GlobalStateContext);

  const history = useHistory();

  return (
    <>
      <Container>
        {pokemons.map((creature) => {
          return (
            <Card key={creature.name}>
              {creature.name}
              <img alt={creature.name} src={creature.sprites.front_default} />
            </Card>
          );
        })}
      </Container>
      <>
        <p> AQUI É A POKEDEX </p>
        <button onClick={() => goToPokemonList(history)}>
          {" "}
          Voltar para lista dos Pokemons{" "}
        </button>
        <button onClick={() => goToPokemonDetails(history)}>
          {" "}
          Ver detalhes do Pokemon{" "}
        </button>
      </>
    </>
  );
};

export default PokedexMain;
