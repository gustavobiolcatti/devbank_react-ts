import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "contexts/auth";

import UserSignupPayload from "models/userSignupPayload";

import Button from "components/atoms/Button";
import Input from "components/atoms/Input";

import * as S from "./styles";
import Title from "../../components/atoms/Title";

const SignIn = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp }: any = useContext(AuthContext);

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();

    if (!name || !email || !password || password !== confirmPassword) {
      toast.error("Dados inválidos");
      return;
    }

    const data: UserSignupPayload = {
      name,
      email,
      password,
    };

    await signUp(data);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <Title secondary>Cadastro</Title>

        <Input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName((e.target as HTMLInputElement).value)}
          autoFocus={true}
          required={true}
          inputType="default"
        />
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
        <Input
          type="password"
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword((e.target as HTMLInputElement).value)
          }
          autoFocus={true}
          required={true}
          inputType="default"
        />

        <Button buttonType="default">Cadastrar</Button>

        <Link to="/" className="form__link">
          fazer login
        </Link>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
