import { useContext } from "react";
import { Arrow, ContainerData, ContainerImage, Image, ToggleTheme } from "./styles";
import { ThemeContext } from "../../App";

export default function ImageLogin() {
  const { theme, toogleTheme } = useContext(ThemeContext);
  return (
    <ContainerImage>
      <ContainerData>
        <Arrow src="./arrow.svg" />
        <ToggleTheme src={theme === "dark" ? "./moon.png" : "./sun.svg"} onClick={() => toogleTheme()} />
      </ContainerData>

      <Image src="./homePhoto.jpeg" />
    </ContainerImage>
  );
}
