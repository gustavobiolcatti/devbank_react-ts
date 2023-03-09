import { toast } from 'react-toastify';

import { useAuth } from 'contexts/auth';

import api from 'services/api';

type listBalanceProps = {
  email?: string;
};

export const listBalance = async ({ email }: listBalanceProps) => {
  const { setBalance } = useAuth();

  try {
    const { response } = await api({
      method: 'get',
      path: '/account/balance',
      data: email,
    });

    setBalance(response.data || 0);
  } catch (error) {
    toast.error(`Erro ao listar o saldo`);
  }
};
