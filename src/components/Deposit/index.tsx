import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import OperationPayload from '../../interfaces/operationPayload';
import { ButtonOperation } from '../Button';
import Card from '../Card';
import { InputOperation } from '../Input';
import './style.css';

export default function Deposit(): JSX.Element {
    
    const [value, setValue] = useState<number | any>();

    const { 
        createOperation, 
        defaultAccount, 
        user: {
            account: { accountNumber }
        } 
    }: any = useContext(AuthContext);

    const handleCreateOperation = async () => {
        const data: OperationPayload = {
            sender: defaultAccount,
            receiver: accountNumber,
            value: parseFloat(value.toFixed(2))
        }
        
        await createOperation(data);
    }

    return (
        <div className="container">
            <Card>
                <span className='card__span'>Qual o valor do depósito?</span>

                <InputOperation 
                    type='number'
                    placeholder='0,00'
                    value={value}
                    onChange={e => setValue(parseFloat(e.target.value))}
                    required={true}
                />

                <ButtonOperation disabled={!(!!value)} onClick={handleCreateOperation}>
                    Depositar
                </ButtonOperation>
            </Card>
        </div>
    )
}