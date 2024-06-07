import { useState } from "react";
import { api } from "../config/axios";
import { ToasAlert } from "../utils/toast";
import { useNavigate } from "react-router-dom";

type Props = {
  email?: string;
  password?: string;
};
export const useLogin = () => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  const login = async ({ email, password }: Props) => {
    api
      .post("/login", { email: email, password: password })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/me");
      })
      .catch((error) => {
        console.log(error);
        ToasAlert({ type: "error", message: error.response.data.message });
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return { login, isFetching };
};
