import ImageLogin from "../../components/ImageLogin/ImageLogin";
import LoginForm from "../../components/LoginForm/LoginForm";
import { CardContainer } from "./styles";

export default function Homepage() {
  //const { theme } = useContext(ThemeContext);

   return (        
      <CardContainer> 
        <ImageLogin/>
        <LoginForm/>
      </CardContainer>   
  );
}
