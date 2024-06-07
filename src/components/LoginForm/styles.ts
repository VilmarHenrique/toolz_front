import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Icon = styled.img`
  width: 80px;
`;

export const TextCreate = styled.span`
  color: #0761e2;
  font-size: 14px;
  margin-right: 10px;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  gap: 15px;
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.div`
  width: 18vw;
  height: 1px;
  background-color: #eaeaea;
`;
export const ContaienrInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  gap: 10px;
  margin-top: 6vh;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
`;

export const LoginButton = styled.span`
  padding: 5px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #0761e2;
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
export const LoginIcon = styled.img`
  width: 20px;
`;

export const ForgotPassContainer = styled.div`
  display: flex;
  gap: 3px;
  margin-top: 10px;
  justify-content: center;
`;
