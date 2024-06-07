import { ThemeContext } from "../../App";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useLogin } from "../../services/useLogin";
import { Row, Text } from "../../styles/layout/styles";
import { ToggleTheme } from "../ImageLogin/styles";
import Input from "../Input/Input";
import MockCaptcha from "../MockCaptcha/MockCaptcha";
import SocialButton from "../SocialButton/SocialButton";
import {
  CardContainer,
  ContaienrInputs,
  Container,
  ForgotPassContainer,
  Icon,
  IconContainer,
  Line,
  LoginButton,
  LoginIcon,
  SocialButtonContainer,
  TextCreate,
  WelcomeContainer,
} from "./styles";
import { useContext, useEffect, useState } from "react";

export default function LoginForm() {
  const { theme, toogleTheme } = useContext(ThemeContext);
  const colorTheme = theme == "dark" ? "white" : "black";
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const windowWidth = useWindowWidth();
  const { login } = useLogin();

  return (
    <>
      <Container>
        <CardContainer>
          <IconContainer>
            <Icon src={theme === "dark" ? "./homeIcondar.svg" : "./icon.svg"} width={"12px"} />
            <Row>
              <TextCreate>Criar conta </TextCreate>
              {windowWidth < 1000 && <ToggleTheme src={theme === "dark" ? "./moon.png" : "./sun.svg"} onClick={() => toogleTheme()} />}
            </Row>
          </IconContainer>
          <WelcomeContainer>
            <Text $fontSize="18px" $fontWeight="bold" $color={colorTheme}>
              Boas-Vindas!
            </Text>
            <Text $color={colorTheme}>Entre utilizando uma das opções abaixo</Text>
            <SocialButtonContainer>
              <SocialButton icon={theme === "dark" ? "./toollzdarkicon.svg" : "./toollzligthicon.svg"} />
              <SocialButton icon={theme === "dark" ? "./facebookdarkicon.svg" : "./facebooklighicon.svg"} />
              <SocialButton icon={theme === "dark" ? "./appledarkicon.svg" : "./appleligthicon.svg"} />
              <SocialButton icon={theme === "dark" ? "./xdarkicon.svg" : "./xligthicon.svg"} />
            </SocialButtonContainer>
            <Row $justify="space-between">
              <Line />
              <Text $color={colorTheme}>ou</Text>
              <Line />
            </Row>
          </WelcomeContainer>
          <ContaienrInputs>
            <Input value={user} setValue={setUser} color={colorTheme} icon={"./userdarkicon.svg"} label="Usuário" placeholder="aluno290_1u" />
            <Input
              value={password}
              setValue={setPassword}
              color={colorTheme}
              icon={"./lockligthicon.svg"}
              label="Senha"
              placeholder="*******"
              type="password"
            />
            <Row>
              <input type="checkBox" style={{ marginRight: "5px" }} />
              <Text $fontSize="12px" $color={colorTheme}>
                Manter-me conectado
              </Text>
            </Row>
            <MockCaptcha />
            <LoginButton
              onClick={() => {
                login({ email: user, password: password });
              }}
            >
              <LoginIcon src="./login.svg" />
              Entrar
            </LoginButton>
            <ForgotPassContainer>
              <Text $color={colorTheme}>Esqueceu sua senha?</Text>
              <Text $color="#0761e2">Recuperar senha</Text>
            </ForgotPassContainer>
          </ContaienrInputs>
        </CardContainer>
      </Container>
    </>
  );
}
