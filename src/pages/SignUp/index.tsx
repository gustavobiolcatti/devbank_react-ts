import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputStyled from "../../components/Input";
import { AuthContext } from "../../contexts/auth";
import "./style.css";

export default function SignIn() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { createUser }: any = useContext(AuthContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!name || !email || !password || (password !== confirmPassword)) {
            console.log('Dados inválidos');
            return
        }
        else {
            console.log('Dados aprovados');
        }

        const data = {
            name,
            email,
            password
        };

        //await createUser(data);
        await axios.post(`https://integracao-front-back-api.herokuapp.com/user`, data);
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

                <Button>Cadastrar</Button>

                <Link to='/'>fazer login</Link>
            </form>
        </div>
    )
}