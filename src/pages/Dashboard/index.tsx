import { Route, Routes } from "react-router-dom";
import Deposit from "../../components/Deposit";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Statement from "../../components/Statement";
import Transfer from "../../components/Transfer";
import Withdraw from "../../components/Withdraw";

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