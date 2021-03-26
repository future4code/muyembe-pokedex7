import styled from "styled-components";

export const ListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
`;

export const Card = styled.article`
  background: #3663bf;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 180px;
  width: 160px;
  margin: 8px;
  margin-top: 26px; //aqui
  border-radius: 10%;
  box-shadow: -8px 8px 13px -6px rgba(0, 0, 0, 0.75);
  &:hover {
    transform: scale(1.1);
  }
`;
export const PokeName = styled.span`
  //aqui
  text-transform: capitalize;
  color: white;
  font-weight: bolder;
  letter-spacing: 2px;
  margin-top: 35px; // aqui
`;
export const ButtonWrapper = styled.div`
  height: 55px;
  display: flex;
  align-items: flex-end;

  button {
    width: 80px;
    font-size: 14px;
    background: white;
  }
  button:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
export const ButtonDetails = styled.button`
  border-radius: 7px 7px 29px 0px;
`;
export const ButtonAdd = styled.button`
  border-radius: 7px 7px 0px 29px;
`;
export const PokemonImage = styled.img`
  // mudei aqui
  position: relative;
  bottom: 100px;
  left: auto;
`;
// export const PokemonSecondImage =styled.img`
// width:45px;
// `