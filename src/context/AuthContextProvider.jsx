import { createContext, useState } from "react";

//Für die globalen Variablen. z.B wenn es ein User gibt..

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false); //Für Hamburger Menu

  return (
    <AuthContext.Provider value={{ open, setOpen }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
