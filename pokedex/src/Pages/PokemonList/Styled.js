import styled from 'styled-components';

export const ListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
`

export const Card = styled.article`
  align-items: center;
  background: #3663bf;
  display: flex;
  flex-direction: column;
  height: 180px;
  margin: 8px;
  width: 160px;
  border-radius:10%;
  box-shadow: -8px 8px 13px -6px rgba(0,0,0,0.75);

`
export const PokeName = styled.p`
  text-transform: capitalize;
  color:white;
  font-weight:bolder;
  letter-spacing:2px;
`
export const ButtonWrapper = styled.div`
  height:55px;
  display:flex;
  align-items:flex-end;

  button{
    width: 80px;
    font-size: 14px;
    background:white;
   }
   button:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
       }
      
   
`
export const BotaoDetalhes = styled.button`
   border-radius: 7px 7px 29px 0px;

`
export const BotaoAdcionar = styled.button`
   border-radius: 7px 7px 0px 29px;


`
