import { Outlet } from 'react-router-dom';

import Header from 'components/molecules/Header';
import Menu from 'components/molecules/Menu';

import * as S from './styles';

const Dashboard = (): JSX.Element => {
  return (
    <S.Container>
      <Menu />

      <S.Content>
        <Header />

        <Outlet />
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
