import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: red;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 812px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ImgText = styled.img`
  height: 50px;
`;

export const BottonPages = styled.span`
  padding: 20px;
  color: #ffcc03;
  display: flex;
  align-items: center;
  &:hover {
    background-color: lightcoral;
  }
`;

export const BottonContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 812px) {
    flex-direction: column;
    align-items: center;
  }
`;
