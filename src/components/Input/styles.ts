import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerInput = styled.div`
  display: flex;

  width: 100%;
`;
export const InputField = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none; /* Remove o contorno padrão do navegador */

  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  height: 28px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  border-right: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};

  border-left: none;
  width: 85%;
`;

export const Icon = styled.img`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  border-left: 1px solid ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  border-right: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 5px;
  width: 24px;
`;
