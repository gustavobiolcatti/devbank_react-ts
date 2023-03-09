import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiLogOut } from 'react-icons/fi';

import { useAuth } from 'contexts/auth';

import colors from 'assets/colors';

import * as S from './styles';
import { listBalance } from 'requests/queries/balance';

const Header = (): JSX.Element => {
  const { user, balance, logout } = useAuth();

  useEffect(() => {
    const loadBalance = async () => {
      if (!user) return;

      await listBalance({ email: user.email });
    };

    loadBalance();
  }, [listBalance]);

  return (
    <S.Container>
      <S.UserInfo>
        <S.UserName>{user?.name}</S.UserName>

        <S.Balance>
          Saldo <strong>R$ {balance}</strong>
        </S.Balance>
      </S.UserInfo>

      <S.Options>
        <Link to="#">
          <FiSettings size={32} color={colors.purple} />
        </Link>

        <S.SeparationOptions></S.SeparationOptions>

        <Link to="/" onClick={async () => await logout()}>
          <FiLogOut size={32} color={colors.purple} />
        </Link>
      </S.Options>
    </S.Container>
  );
};

export default Header;
