import styled from "styled-components";


export const Container = styled.main`
  width: 96vw;
  height: 90vh;

`;
export const DetailsMain = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 20vh 72px;
  text-align: center;
  text-transform: capitalize;

  @media(max-width:806px){
    flex-direction:column;
  }

  
`;
export const PokemonPhotos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    background: #3663bf;
    width: 12rem;

  }
  @media(max-width:806px){
align-items:center; 
flex-direction:row;
justify-content:center;
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