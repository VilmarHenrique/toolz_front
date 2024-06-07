import { ThemeContext } from "../../App";
import { Row, Text } from "../../styles/layout/styles";
import SocialButton from "../SocialButton/SocialButton";
import { CardContainer, Container, Icon, IconContainer, Line, SocialButtonContainer, TextCreate, WelcomeContainer } from "./styles";
import { useContext } from "react";

export default function LoginForm()
{
    const { theme } = useContext(ThemeContext)

     return <>
        <Container>
            <CardContainer>
                <IconContainer>                    
                        <Icon src="./icon.svg" width={"12px"}/>
                        <TextCreate>Criar conta </TextCreate>                                          
                </IconContainer>
        <WelcomeContainer>
            <Text $fontSize="18px" $fontWeight="bold">Boas-Vindas!</Text>
            <Text >Entre utilizando uma das opções abaixo</Text>
            <SocialButtonContainer>
                <SocialButton icon={theme === "dark" ?  "./toollzdarkicon.svg" : "./toollzligthicon.svg" }/>
                <SocialButton icon={theme === "dark" ?  "./facebookdarkicon.svg" : "./facebooklighicon.svg" }/>
                <SocialButton icon={theme === "dark" ?  "./appledarkicon.svg" : "./appleligthicon.svg" }/>
                <SocialButton icon={theme === "dark" ?  "./xdarkicon.svg" : "./xligthicon.svg" }/>
            </SocialButtonContainer>
            <Row $justify="space-between">
                <Line/>
                <Text>ou</Text>
                <Line/>
            </Row>
        </WelcomeContainer>  
        </CardContainer>
        </Container>
    </>
};