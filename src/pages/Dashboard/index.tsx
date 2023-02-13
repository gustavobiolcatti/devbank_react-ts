import { Route, Routes } from "react-router-dom";

import Header from "components/molecules/Header";
import Menu from "components/molecules/Menu";
import Deposit from "components/organisms/Deposit";
import Statement from "components/organisms/Statement";
import Transfer from "components/organisms/Transfer";
import Withdraw from "components/organisms/Withdraw";

import * as S from "./styles";

const Dashboard = (): JSX.Element => {
  return (
    <S.Container>
      <Menu />

      <S.Content>
        <Header />

        <Routes>
          <Route path="/statement" element={<Statement />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
