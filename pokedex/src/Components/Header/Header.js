import React from "react";
import { HeaderContainer, BottonPages, HeaderText,BottonContainer } from "./Styled";
import { goToPokedex, goToPokemonList } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

export const Header = (props) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <HeaderText>{props.titlePage}</HeaderText>
      <BottonContainer>
      <BottonPages onClick={() => goToPokemonList(history)}>
        Lista de Pokemóns
      </BottonPages>
      <BottonPages onClick={() => goToPokedex(history)}>
        Ir para a Pokedex
      </BottonPages>
      </BottonContainer>
    </HeaderContainer>
  );
};

export default Header;
