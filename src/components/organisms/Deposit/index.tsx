import { useContext, useState } from 'react';

import { AuthContext } from '../../../contexts/auth';

import OperationPayload from '../../../interfaces/operationPayload';

import { Button, CardSpan, Input } from '../../atoms';
import { Card } from '../../molecules';

import './style.css';

export const Deposit = (): JSX.Element => {
    
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
                <CardSpan>Qual o valor do depósito?</CardSpan>

                <Input 
                    type='number'
                    placeholder='0,00'
                    value={value}
                    onChange={e => setValue(
                        parseFloat((e.target as HTMLInputElement).value))
                    }
                    required={true}
                    inputType='default'
                />

                <Button 
                    disabled={!(!!value)}
                    onClick={handleCreateOperation}
                    buttonType="operation"
                >
                    Depositar
                </Button>
            </Card>
        </div>
    )
}