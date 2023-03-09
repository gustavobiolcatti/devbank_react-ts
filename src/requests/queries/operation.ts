import { toast } from 'react-toastify';

import { useAuth } from 'contexts/auth';

import api from 'services/api';

import { listBalance } from 'requests/queries/balance';

import { Operation } from 'models/operation';

type listOperationsProps = {
  email: string;
};
type listOperationReturn = {
  operations?: Operation[];
};

export const listOperations = async ({
  email,
}: listOperationsProps): Promise<listOperationReturn> => {
  try {
    const { response } = await api({
      method: 'get',
      path: '/account/operation',
      data: email,
    });

    const operations: Operation[] = response?.data;

    return { operations };
  } catch (error) {
    toast.error(`Erro ao listar as operações`);
  }

  return { operations: undefined };
};

export const createOperation = async (data: Operation) => {
  const { user } = useAuth();

  try {
    await api({
      method: 'post',
      path: '/account/operation',
      data,
    });
    await listBalance({ email: user?.email });

    toast.success('Operação realizada');
  } catch (error) {
    toast.error('Erro na transferência');
  }
};
