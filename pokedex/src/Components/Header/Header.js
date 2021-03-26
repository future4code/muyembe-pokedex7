import React from "react";
import { HeaderContainer, BottonPages, HeaderText } from "./Styled";
import { goToPokedex, goToPokemonList } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

export const Header = (props) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <BottonPages onClick={() => goToPokemonList(history)}>
        Lista de Pokemóns
      </BottonPages>
      <BottonPages onClick={() => goToPokedex(history)}>
        Ir para a Pokedex
      </BottonPages>
      <HeaderText>{props.titlePage}</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
