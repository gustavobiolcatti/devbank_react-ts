import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/auth";
import { Button } from "../../components/Button";
import { InputStyled } from "../../components/Input";

import "./style.css";
import UserLoginPayload from "../../interfaces/userLoginPayload";

export default function SignIn(): JSX.Element {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn }: any = useContext(AuthContext);

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Dados inválidos');
            return;
        }

        const data: UserLoginPayload = {
            email, password
        }

        signIn(data);
    }

    return (
        <div className="signin">
            <form className="signin__form" onSubmit={handleSubmit}>
                <h1 className="title title--white">Login</h1>
                
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

                <Button>Entrar</Button>

                <Link to='/signup'>fazer cadastro</Link>
            </form>
        </div>
    )
}