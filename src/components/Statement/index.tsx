import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Operation } from '../../interfaces/operationPayload';

import './style.css';

export default function Statement(): JSX.Element {

    const [operations, setOperations] = useState<Operation[]>()

    const { getOperations, user: {account: { accountNumber }} }: any = useContext(AuthContext);

    useEffect(() => {
        const loadOperations = async () => {
            const data = await getOperations();

            setOperations(data);
        }

        loadOperations();
    }, [])

    return (
        <div className="container container--table">
            {
                operations
                ?

                <table className='statement__table'>
                    <thead>
                        <tr>
                            <th>Valor</th>
                            <th>Tipo</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            operations.map(op => {
                                const date = new Date(op.createdAt)
                                return (
                                    <tr key={op.id} className=''>
                                        <td>{op.value}</td>
                                        <td className={op.receiver === accountNumber ? "statement__value--income" : "statement__value--expense"}>
                                            { op.receiver === accountNumber ? 'Entrada' : 'Saída' }
                                        </td>
                                        <td>{date.toLocaleDateString()}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                :

                <p>Não tem op</p>
            }
        </div>
    )
}