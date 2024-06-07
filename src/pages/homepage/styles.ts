import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  
`;

export const SpanTitulo = styled.span`
  font-size: ${({ theme }) => theme.textSizes.xm};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  margin-left: 20%;

  font-weight: ${({ theme }) => theme.fonts.bold};
`;