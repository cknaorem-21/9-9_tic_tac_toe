import { createContext, useState } from "react";

const WinnerContext = createContext();

const WinnerContextProvider = ({ children }) => {
  const [winner, setWinner] = useState(null);

  return (
    <WinnerContext.Provider value={{ winner, setWinner }}>
      {children}
    </WinnerContext.Provider>
  );
};

export { WinnerContext, WinnerContextProvider };
