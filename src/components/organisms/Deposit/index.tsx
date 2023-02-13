import { useContext, useState } from "react";

import { AuthContext } from "contexts/auth";

import OperationPayload from "models/operationPayload";

import CardSpan from "components/atoms/CardSpan";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Card from "components/molecules/Card";

import * as S from "./styles";

const Deposit = (): JSX.Element => {
  const [value, setValue] = useState<number | any>();

  const {
    createOperation,
    defaultAccount,
    user: {
      account: { accountNumber },
    },
  }: any = useContext(AuthContext);

  const handleCreateOperation = async () => {
    const data: OperationPayload = {
      sender: defaultAccount,
      receiver: accountNumber,
      value: parseFloat(value.toFixed(2)),
    };

    await createOperation(data);
  };

  return (
    <S.Container>
      <Card>
        <CardSpan>Qual o valor do depósito?</CardSpan>

        <Input
          type="number"
          placeholder="0,00"
          value={value}
          onChange={(e) =>
            setValue(parseFloat((e.target as HTMLInputElement).value))
          }
          required={true}
          inputType="operation"
        />

        <Button
          disabled={!!!value}
          onClick={handleCreateOperation}
          buttonType="operation"
        >
          Depositar
        </Button>
      </Card>
    </S.Container>
  );
};

export default Deposit;
