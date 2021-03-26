import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: red;
  padding: 50px;
  display: flex;
  height: 40px;
  width: 89em;
`;

export const HeaderText = styled.h1`
  margin-left: 100px;
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