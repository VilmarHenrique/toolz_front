import styled from "styled-components";

export const Container = styled.div`

  padding: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;

`;

export const CardContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  width:  100%;
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

  color: #0761E2;
  font-size: 14px;
`;

export const WelcomeContainer = styled.div`

 display: flex;
 padding: 5px;
 flex-direction: column;
 gap: 15px;  
`;

export const SocialButtonContainer = styled.div`

 display: flex; 
 gap: 15px;  
`;

export const Line = styled.div`

 width: 18vw;
 height: 1px;
 background-color: #eaeaea;
   
`;




