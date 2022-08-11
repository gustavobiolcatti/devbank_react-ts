import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputStyled from "../../components/Input";
import "./style.css";

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="signin">
            <form className="signin__form">
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