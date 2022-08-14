import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import Button from "../../components/Button";
import InputStyled from "../../components/Input";
import "./style.css";
import { toast } from "react-toastify";

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login }: any = useContext(AuthContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!email || !password) {
            toast.error('Dados inválidos');
            return;
        }

        login(email, password);
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