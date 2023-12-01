import { createContext, useState } from "react";

const ActiveContext = createContext();

const ActiveContextProvider = ({children}) => {
    const[active, setActive] = useState(null);

    return (
        <ActiveContext.Provider value={{active, setActive}}>
            {children}
        </ActiveContext.Provider>
    );
}

export {ActiveContext, ActiveContextProvider}