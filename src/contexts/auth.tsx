import axios from "axios";
import { createContext } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export default function AuthProvider({ children }: any): JSX.Element {
    const url = 'https://integracao-front-back-api.herokuapp.com';

    const createUser = async (data: JSON): Promise<void> => {
        try {
            await axios.post(`${url}/user`, data);

            toast.success(`Usuário cadastrado`);
        }
        catch (error: any) {
            toast.error(`Error :>> ${error.message}`);
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const { data } = await axios.get(`${url}/user/${email}`);

            if (!data) {
                toast.error('E-mail não encontrado');
                return
            }

            if (data.password !== password) {
                toast.error('Senha inválida');
                return
            }

            toast.success('Dados validados');
        }
        catch (error: any) {
            toast.error(`Error :>> ${error.message}`);
        }
    }

    return (
        <AuthContext.Provider value={{ createUser, login }}>
            { children }
        </AuthContext.Provider>
    )
};
