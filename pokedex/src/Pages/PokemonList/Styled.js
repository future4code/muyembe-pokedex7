import styled from 'styled-components';

export const ListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
`

export const Card = styled.article`
  align-items: center;
  background: lightSalmon;
  display: flex;
  flex-direction: column;
  height: 200px;
  margin: 8px;
  width: 160px;
`
export const PokeName = styled.p`
  text-transform: capitalize;
`
export const ButtonWrapper = styled.div`
  display:flex;
  // flex-direction:row;

  button {
    width: 80px;
    font-size: 10px;
    display: flex;
    justify-content: center;
  }
`