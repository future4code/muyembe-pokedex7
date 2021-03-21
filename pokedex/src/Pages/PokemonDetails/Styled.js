import styled from 'styled-components';

export const DetailsMain = styled.main`
  display: flex;
  height: 32vh;
  justify-content: space-evenly;
  margin: 20vh 72px;
  text-align: center;
  text-transform: capitalize;
`

export const PokemonPhotos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    background: #3663bf;
    width: 8vw;

  }
`

export const PokemonInfoColumn = styled.section`
  align-self: center;
  background: #3663bf;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
`

export const PokemonType = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  text-align: center;
`