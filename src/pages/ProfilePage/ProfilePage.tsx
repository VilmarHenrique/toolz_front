import { useEffect } from "react";
import { Text } from "../../styles/layout/styles";
import { useNavigate } from "react-router-dom";
import { useFetchProfile } from "../../services/useFetchProfile";
import { Container } from "../../components/Input/styles";
import { Button } from "../../components/SocialButton/styles";

export default function ProfilePage() {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const { profile } = useFetchProfile();
  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  useEffect(() => {
    if (access_token == null) navigate("/");
  }, []);

  return (
    <Container>
      <Text> Email: {profile?.email}</Text>
      <Text>Nome: {profile?.name}</Text>
      <Text>ID: {profile?.id}</Text>
      <Text>Email verificado: {profile?.email_verified_at}</Text>
      <Button onClick={logout}>sair</Button>
    </Container>
  );
}
