import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "contexts/auth";

import UserLoginPayload from "models/userLoginPayload";

import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Title from "components/atoms/Title";

import * as S from "./styles";

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn }: any = useContext(AuthContext);

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Dados inválidos");
      return;
    }

    const data: UserLoginPayload = {
      email,
      password,
    };

    signIn(data);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <Title secondary>Login</Title>

        <Input
          type="e-mail"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          required={true}
          inputType="default"
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          autoFocus={true}
          required={true}
          inputType="default"
        />

        <Button buttonType="default">Entrar</Button>

        <Link to="/signup" className="form__link">
          fazer cadastro
        </Link>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
