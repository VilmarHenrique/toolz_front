import styled from "styled-components";

export const Image = styled.img`
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const ContainerImage = styled.div`
  height: 100vh;
  width: 100%;
`;

export const ContainerData = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 45%;
  margin-left: 2.5%;
  margin-top: 40px;
`;

export const Arrow = styled.img`
  width: 28px;
  border-radius: 999px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  border: 1px solid white;
`;

export const ToggleTheme = styled.img`
  width: 28px;
  border-radius: 999px;

  border: 1px solid white;
  background-color: ${({ theme }) => theme.colors.background};
`;
