import { Link } from "react-router-dom";
import { RiFileList3Line } from "react-icons/ri";
import { BsCashCoin, BsCashStack } from "react-icons/bs";

import { BiTransfer } from "react-icons/bi";

import * as S from "./styles";

const Menu = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>Bank</S.Title>

      <Link to="statement" id="statement" className="menu__link">
        <RiFileList3Line />
        <S.LinkText>Extrato</S.LinkText>
      </Link>
      <Link to="withdraw" id="withdraw" className="menu__link">
        <BsCashCoin />
        <S.LinkText>Saque</S.LinkText>
      </Link>
      <Link to="deposit" id="deposit" className="menu__link">
        <BsCashStack />
        <S.LinkText>Depósito</S.LinkText>
      </Link>
      <Link to="transfer" id="transfer" className="menu__link">
        <BiTransfer />
        <S.LinkText>Transferência</S.LinkText>
      </Link>
    </S.Container>
  );
};

export default Menu;
