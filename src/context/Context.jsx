import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
  const [mode, setMode] = useState(false)

  return (
    <GlobalContext.Provider value={{mode, setMode}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
