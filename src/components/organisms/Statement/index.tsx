import { useEffect, useState } from 'react';

import { useAuth } from 'contexts/auth';

import { listOperations } from 'requests/queries/operation';

import { Operation } from 'models/operation';

import * as S from './styles';

const Statement = (): JSX.Element => {
  const [operations, setOperations] = useState<Operation[]>();

  const { user } = useAuth();

  useEffect(() => {
    const loadOperations = async () => {
      if (!user) return;
      const { operations } = await listOperations({ email: user?.email });

      setOperations(operations);
    };

    loadOperations();
  }, [listOperations]);

  return (
    <S.Container>
      {operations ? (
        <S.Table>
          <thead>
            <tr>
              <S.TableColumn>Valor</S.TableColumn>
              <S.TableColumn>Tipo</S.TableColumn>
              <S.TableColumn>Data</S.TableColumn>
            </tr>
          </thead>
          <tbody>
            {operations.map((op) => {
              const date = new Date(op.createdAt || 0);
              return (
                <tr key={op.id}>
                  <S.TableColumn>{op.value}</S.TableColumn>
                  <S.TableColumn
                    type={
                      op.receiver === user?.account.accountNumber
                        ? 'income'
                        : 'expense'
                    }
                  >
                    {op.receiver === user?.account.accountNumber
                      ? 'Entrada'
                      : 'Saída'}
                  </S.TableColumn>
                  <S.TableColumn>{date.toLocaleDateString()}</S.TableColumn>
                </tr>
              );
            })}
          </tbody>
        </S.Table>
      ) : (
        <p>Não tem op</p>
      )}
    </S.Container>
  );
};

export default Statement;
