import { Route, Routes } from "react-router-dom";

import { Header, Menu } from "../../components/molecules";

import { 
    Deposit, 
    Statement,
    Transfer,
    Withdraw
} from "../../components/organisms";

import * as S from "./styles";

export default function Dashboard(): JSX.Element {
    return (
        <S.Container>
            <Menu />

            <S.Content>
                <Header />

                <Routes>
                    <Route path="/statement" element={<Statement />}/>
                    <Route path="/withdraw" element={<Withdraw />}/>
                    <Route path="/deposit" element={<Deposit />}/>
                    <Route path="/transfer" element={<Transfer />}/>
                </Routes>  
            </S.Content>
        </S.Container>
    )
}