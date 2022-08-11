import { createContext } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }: any): JSX.Element {
    return (
        <AuthContext.Provider value={{}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider