import { createContext, useState } from "react";

const NestedWinnerContext = createContext();

const NestedWinnerContextProvider = ({children}) => {
    const [nestedWinner, setNestedWinner] = useState({
        winner00: null,
        winner01: null,
        winner02: null,
        winner10: null,
        winner11: null,
        winner12: null,
        winner20: null,
        winner21: null,
        winner22: null,
      });

    return (
      <NestedWinnerContext.Provider value={{nestedWinner, setNestedWinner}}>
        {children}
      </NestedWinnerContext.Provider>
    );
}

export {NestedWinnerContext, NestedWinnerContextProvider}