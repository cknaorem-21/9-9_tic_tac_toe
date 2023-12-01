import {createContext, useState} from "react";

const CompleteFillContext = createContext();

// completely filled cells will be marked here.
const CompleteFillContextProvider = ({children}) => {
    const [cellFilled, setCellFilled] = useState({
        cell00 : false,
        cell01 : false,
        cell02 : false,
        cell10 : false,
        cell11 : false,
        cell12 : false,
        cell20 : false,
        cell21 : false,
        cell22 : false

    });

    return (
        <CompleteFillContext.Provider value={{cellFilled, setCellFilled}}>
            {children}
        </CompleteFillContext.Provider>
    );
}


export {CompleteFillContext, CompleteFillContextProvider};