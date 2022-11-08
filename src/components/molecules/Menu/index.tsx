import { Link } from 'react-router-dom';

import { RiFileList3Line } from 'react-icons/ri';
import { BsCashCoin, BsCashStack } from 'react-icons/bs';
import { BiTransfer } from 'react-icons/bi';

import './style.css';

const Menu = (): JSX.Element => {
    return (
        <div className="menu">
            <h1 className='menu__title'>Bank</h1>

            <Link to="statement" id="statement" className="menu__link">
                <RiFileList3Line />
                <span className="menu__span">Extrato</span>
            </Link>
            <Link to="withdraw" id="withdraw" className="menu__link">
                <BsCashCoin />
                <span className="menu__span">Saque</span>
            </Link>
            <Link to="deposit" id="deposit" className="menu__link">
                <BsCashStack />
                <span className="menu__span">Depósito</span>
            </Link>
            <Link to="transfer" id="transfer" className="menu__link">
                <BiTransfer />
                <span className="menu__span">Transferência</span>
            </Link>
        </div>
    )
}

export default Menu;