import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { Deposit } from "../../components/organisms/Deposit";
import { Statement } from "../../components/organisms/Statement";
import { Transfer } from "../../components/organisms/Transfer";
import { Withdraw } from "../../components/organisms/Withdraw";

import './style.css';

export default function Dashboard(): JSX.Element {
    return (
        <div className="dashboard">
            <Menu />

            <section className="content">
                <Header />

                <Routes>
                    <Route path="/statement" element={<Statement />}/>
                    <Route path="/withdraw" element={<Withdraw />}/>
                    <Route path="/deposit" element={<Deposit />}/>
                    <Route path="/transfer" element={<Transfer />}/>
                </Routes>  
            </section>
        </div>
    )
}