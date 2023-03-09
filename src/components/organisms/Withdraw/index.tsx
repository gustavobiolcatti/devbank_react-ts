import { useState } from 'react';

import { useAuth } from 'contexts/auth';

import { createOperation } from 'requests/queries/operation';

import { Operation } from 'models/operation';

import Card from 'components/molecules/Card';
import CardSpan from 'components/atoms/CardSpan';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

import * as S from './styles';

const Withdraw = (): JSX.Element => {
  const [value, setValue] = useState<number | any>();

  const { defaultAccount, user } = useAuth();

  const handleCreateOperation = async () => {
    const data: Operation = {
      sender: user?.account.accountNumber,
      receiver: defaultAccount,
      value: parseFloat(value.toFixed(2)),
    };

    await createOperation(data);
  };

  return (
    <S.Container>
      <Card>
        <CardSpan>Qual o valor do saque?</CardSpan>

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
          Sacar
        </Button>
      </Card>
    </S.Container>
  );
};

export default Withdraw;
