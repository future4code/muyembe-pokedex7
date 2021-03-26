import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
export const DetailsMain = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 20vh 72px;
  text-align: center;
  text-transform: capitalize;
`;
export const PokemonPhotos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    background: #3663bf;
    width: 12rem;
  }
`;
export const PokemonInfoColumn = styled.section`
  align-self: center;
  background: #3663bf;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 240px;
  height: 460px;
`;
export const PokemonType = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  text-align: center;
`;