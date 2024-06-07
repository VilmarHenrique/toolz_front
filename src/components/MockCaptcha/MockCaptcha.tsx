import { Text } from "../../styles/layout/styles";
import { CaptchaIcon, Container, ContainerCheckbox } from "./styles";

export default function MockCaptcha() {
  return (
    <Container>
      <ContainerCheckbox>
        <input type="checkbox" />
        <Text $fontSize="12px">I am human</Text>
      </ContainerCheckbox>
      <CaptchaIcon src="./captcha.svg" />
    </Container>
  );
}
