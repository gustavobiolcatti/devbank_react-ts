import { useContext, useState } from "react";

import { AuthContext } from "contexts/auth";

import OperationPayload from "models/operationPayload";

import Card from "components/molecules/Card";
import CardSpan from "components/atoms/CardSpan";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";

import * as S from "./styles";

const Transfer = (): JSX.Element => {
  const [receiver, setReceiver] = useState<number | any>();
  const [value, setValue] = useState<number | any>();

  const {
    createOperation,
    user: {
      account: { accountNumber },
    },
  }: any = useContext(AuthContext);

  const handleCreateOperation = async () => {
    const data: OperationPayload = {
      sender: accountNumber,
      receiver: receiver,
      value: parseFloat(value.toFixed(2)),
    };

    await createOperation(data);
  };

  return (
    <S.Container>
      <Card>
        <CardSpan>Qual o valor da transferência?</CardSpan>

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

        <CardSpan>Qual a conta de destino?</CardSpan>

        <Input
          type="number"
          placeholder="0"
          value={receiver}
          onChange={(e) =>
            setReceiver(parseInt((e.target as HTMLInputElement).value))
          }
          required={true}
          inputType="operation"
        />

        <Button
          disabled={!(!!value && !!receiver)}
          onClick={handleCreateOperation}
          buttonType="operation"
        >
          Transferir
        </Button>
      </Card>
    </S.Container>
  );
};

export default Transfer;
