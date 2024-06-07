import ImageLogin from "../../components/ImageLogin/ImageLogin";
import LoginForm from "../../components/LoginForm/LoginForm";
import useWindowWidth from "../../hooks/useWindowWidth";
import { CardContainer } from "./styles";

export default function Homepage() {
  const windowWidth = useWindowWidth();

  return (
    <CardContainer>
      {windowWidth > 1000 && <ImageLogin />}

      <LoginForm />
    </CardContainer>
  );
}
