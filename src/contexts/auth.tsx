import axios from "axios";
import { createContext } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export default function AuthProvider({ children }: any): JSX.Element {
    const url = 'https://integracao-front-back-api.herokuapp.com';

    const createUser = async (data: JSON) => {
        try {
            await axios.post(`${url}/user`, data);

            toast.success(`Usuário cadastrado`);
        }
        catch (error: any) {
            toast.error(`Error :>> ${error.message}`);
        }
    }

    return (
        <AuthContext.Provider value={{ createUser }}>
            { children }
        </AuthContext.Provider>
    )
};
