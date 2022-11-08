import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/auth"

import { FiSettings, FiLogOut } from 'react-icons/fi';

import colors from "../../assets/colors";

import * as S from "./styles";

const Header = (): JSX.Element => {
    const { user: {name}, balance, logout, getBalance }: any = useContext(AuthContext);

    useEffect(() => {
        const loadBalance = async () => {
            await getBalance();
        }

        loadBalance()
    },[getBalance])

    return (
        <S.Container>
            <S.UserInfo>
                <S.UserName>{name}</S.UserName>

                <S.Balance>
                    Saldo <strong>R$ {balance}</strong>
                </S.Balance>
            </S.UserInfo>

            <S.Options>
                <Link to="#">
                    <FiSettings 
                        size={32} 
                        color={colors.purple}
                    />
                </Link>

                <S.SeparationOptions></S.SeparationOptions>

                <Link to="/" onClick={async () => await logout()}>
                    <FiLogOut 
                        size={32} 
                        color={colors.purple}
                    />
                </Link>
            </S.Options>
        </S.Container>
    )
}

export default Header;