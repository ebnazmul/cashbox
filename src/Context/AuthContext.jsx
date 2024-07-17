import { createContext } from "react";


export const AuthContexts = createContext(null)

const AuthContext = ({children}) => {

    

    const value = {

    }



    return <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
};

export default AuthContext;