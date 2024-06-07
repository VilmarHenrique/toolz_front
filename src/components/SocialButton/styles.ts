import styled from "styled-components";

export const Button = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  width: 8vw;
  max-height: 36px;
  border-radius: 11px;
  cursor: pointer;
`;

export const Icon = styled.img`
  max-width: 18px;
`;
