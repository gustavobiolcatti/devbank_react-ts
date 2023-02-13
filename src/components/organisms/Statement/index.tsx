import { useContext, useEffect, useState } from "react";

import { AuthContext } from "contexts/auth";

import { Operation } from "models/operationPayload";

import * as S from "./styles";

const Statement = (): JSX.Element => {
  const [operations, setOperations] = useState<Operation[]>();

  const {
    getOperations,
    user: {
      account: { accountNumber },
    },
  }: any = useContext(AuthContext);

  useEffect(() => {
    const loadOperations = async () => {
      const data = await getOperations();

      setOperations(data);
    };

    loadOperations();
  }, [getOperations]);

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
              const date = new Date(op.createdAt);
              return (
                <tr key={op.id}>
                  <S.TableColumn>{op.value}</S.TableColumn>
                  <S.TableColumn
                    type={op.receiver === accountNumber ? "income" : "expense"}
                  >
                    {op.receiver === accountNumber ? "Entrada" : "Saída"}
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
