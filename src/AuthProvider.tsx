import { ReactNode, useReducer } from "react";
import LoginContext from "./context/loginContext"
import authReducer from "./reducers/authReducer";

interface Props {
    children: ReactNode;
}


const AuthProvider = ({children}: Props) => {

    const  [user, loginDispatch] = useReducer(authReducer, '');

  return (
   <LoginContext.Provider value={{user,loginDispatch}}>
    {children}
   </LoginContext.Provider>
  )
}

export default AuthProvider
