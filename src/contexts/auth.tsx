import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';

import api from 'services/api';

import { User } from 'models/user';
import { SignInProps } from 'models/signin';
import { SignUpProps } from 'models/signup';

type AuthContextType = {
  signed: boolean;
  user?: User;
  signUp: (user: SignUpProps) => Promise<void>;
  signIn: (user: SignInProps) => Promise<void>;
  logout: () => void;
  balance: number;
  setBalance: (value: number) => void;
  defaultAccount: number;
};
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const defaultAccount = 0;

  // const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | undefined>();
  const [balance, setBalance] = useState(0);

  const memorizedUser = useMemo(() => {
    if (!user) {
      const userStorage = localStorage.getItem('user');
      const userParsed = userStorage && JSON.parse(userStorage);

      setUser(userParsed);

      return userParsed;
    }

    return user;
  }, [user]);

  const storageUser = (data: JSON) => {
    try {
      const userStringfy = JSON.stringify(data);
      localStorage.setItem('user', userStringfy);
    } catch (error: any) {
      console.log(`message :>> ${error.message}`);
    }
  };

  const signUp = async (user: SignUpProps): Promise<void> => {
    try {
      await api({
        method: 'post',
        path: '/user',
        data: { ...user, account: {} },
      });
      const { response: newUser } = await api({
        method: 'get',
        path: '/user',
        data: user?.email,
      });
      console.log(newUser.data);

      storageUser(newUser.data);
      setUser(newUser.data);

      toast.success(`Usuário cadastrado`);
    } catch (error) {
      toast.error(`Erro ao cadastrar usuário`);
    }
  };

  const signIn = async (user: SignInProps): Promise<void> => {
    try {
      const { response } = await api({
        method: 'post',
        path: '/user/login',
        data: user,
      });

      if (!response.user) {
        toast.error(response.message);
        return;
      }

      storageUser(response.user);
      setUser(response.user);

      toast.success(response.message);
    } catch (error) {
      toast.error('Erro ao fazer login');
    }
  };

  const logout = (): void => {
    try {
      localStorage.removeItem('user');
      setUser(undefined);
      toast.success('Usuário deslogado');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!memorizedUser,
        user,
        signUp,
        signIn,
        logout,
        balance,
        setBalance,
        defaultAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
