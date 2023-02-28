import { createContext } from "react";

//Für die globalen Variablen. z.B wenn es ein User gibt..

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
