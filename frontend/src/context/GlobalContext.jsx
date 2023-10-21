import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(() => JSON.parse(window.sessionStorage.getItem("session")))
  },[])
  
  return (
    <GlobalContext.Provider value={{ user, setUser}}>
      {children}
    </GlobalContext.Provider>
  );
};
