import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import OperationPayload from '../../interfaces/operationPayload';
import { ButtonOperation } from '../Button';
import Card from '../Card';
import { InputOperation } from '../Input';
import './style.css';

export default function Transfer(): JSX.Element {
    
    const [receiver, setReceiver] = useState<number | any>();
    const [value, setValue] = useState<number | any>();

    const { 
        createOperation, 
        user: {
            account: { accountNumber }
        } 
    }: any = useContext(AuthContext);

    const handleCreateOperation = async () => {
        const data: OperationPayload = {
            sender: accountNumber,
            receiver: receiver,
            value: parseFloat(value.toFixed(2))
        }
        
        await createOperation(data);
    }

    return (
        <div className="container">
            <Card>
                <span className='card__span'>Qual o valor da transferência?</span>

                <InputOperation 
                    type='number'
                    placeholder='0,00'
                    value={value}
                    onChange={e => setValue(parseFloat(e.target.value))}
                    required={true}
                />

                <span className='card__span'>Qual a conta de destino?</span>

                <InputOperation 
                    type='number'
                    placeholder='0'
                    value={receiver}
                    onChange={e => setReceiver(parseInt(e.target.value))}
                    required={true}
                />

                <ButtonOperation 
                    disabled={!(!!value && !!receiver)} 
                    onClick={handleCreateOperation}
                >
                    Transferir
                </ButtonOperation>
            </Card>
        </div>
    )
}