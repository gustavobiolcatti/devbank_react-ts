import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { ButtonOperation } from '../Button';
import Card from '../Card';
import { InputOperation } from '../Input';
import './style.css';

export default function Deposit(): JSX.Element {
    
    const [value, setValue] = useState<number>()

    const { createOperation }: any = useContext(AuthContext);

    const handleCreateOperation = async () => {
        const data = {
            value
        }
        
        await createOperation('deposit', data);
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