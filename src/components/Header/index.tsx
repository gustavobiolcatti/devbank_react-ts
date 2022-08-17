import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/auth"

import { FiSettings, FiLogOut } from 'react-icons/fi';

import './style.css';
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
    const { user: {name}, balance, logout, getBalance }: any = useContext(AuthContext);

    useEffect(() => {
        const loadBalance = async () => {
            await getBalance();
        }

        loadBalance()
    },[])

    return (
        <div className="header">
            <section className="header__user-info">
                <h1 className="header__name">{name}</h1>

                <span className="header__balance">Saldo <strong>R$ {balance}</strong></span>
            </section>

            <section className="header__options">
                <Link to="#">
                    <FiSettings 
                        size={32} 
                        color={'blueviolet'}
                    />
                </Link>
                <div className="header__options-sep"></div>
                <Link to="/" onClick={async () => await logout()}>
                    <FiLogOut 
                        size={32} 
                        color={'blueviolet'}
                    />
                </Link>
            </section>
        </div>
    )
}