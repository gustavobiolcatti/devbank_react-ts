import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from 'contexts/auth';

import { SignInProps } from 'models/signin';

import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';

import * as S from './styles';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Dados inválidos');
      return;
    }

    const data: SignInProps = {
      email,
      password,
    };

    signIn(data);
    navigate('/statement');
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
