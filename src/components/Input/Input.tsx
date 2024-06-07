import { ChangeEvent, useContext } from "react";
import { Text } from "../../styles/layout/styles";
import { Container, ContainerInput, Icon, InputField } from "./styles";
import { ThemeContext } from "../../App";

type Props = {
  label: string;
  placeholder: string;
  icon: string;
  color: string;
  type?: string;
  setValue: any;
  value: string;
};

export default function Input({ label, placeholder, icon, color, type, setValue, value }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      <Text $color={color}>{label}</Text>
      <ContainerInput>
        <Icon src={icon} />
        <InputField
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </ContainerInput>
    </Container>
  );
}
