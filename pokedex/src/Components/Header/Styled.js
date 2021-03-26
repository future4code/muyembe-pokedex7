import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: red;
  padding: 20px;
  display: flex;
  justify-content:space-between;
 
  @media(max-width:812px){
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
`;

export const HeaderText = styled.h1`
`;

export const BottonPages = styled.span`
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  &:hover {
    background-color: lightcoral;
  }
`;

export const BottonContainer = styled.div`
display:flex;
flex-direction:row;
@media(max-width:812px){
    flex-direction:column;
    align-items:center;
  }

`