import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/auth";

import "./style.css";
import { InputStyled } from "../../components/Input";
import UserSignupPayload from "../../interfaces/userSignupPayload";
import { Button } from "../../components/atoms";

export default function SignIn(): JSX.Element {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { signUp }: any = useContext(AuthContext);

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();

        if (!name || !email || !password || (password !== confirmPassword)) {
            toast.error('Dados inválidos');
            return;
        }

        const data: UserSignupPayload = {
            name,
            email,
            password
        };

        await signUp(data);
    }

    return (
        <div className="signup">
            <form className="signup__form" onSubmit={handleSubmit}>
                <h1 className="title title--white">Cadastro</h1>
                
                <InputStyled
                    type="text"
                    placeholder="Nome completo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoFocus={true}
                    required={true}
                />
                <InputStyled
                    type="e-mail"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required={true}
                />
                <InputStyled
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoFocus={true}
                    required={true}
                />
                <InputStyled
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    autoFocus={true}
                    required={true}
                />

                <Button
                    buttonType="default"
                >
                    Cadastrar
                </Button>

                <Link to='/' className="form__link">fazer login</Link>
            </form>
        </div>
    )
}