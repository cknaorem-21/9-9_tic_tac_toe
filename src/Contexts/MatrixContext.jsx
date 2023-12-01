import React from "react";
import { useState } from "react";

const MatrixContext = React.createContext();

const MatrixContextProvider = ({ children }) => {
    // 3*3*3*3 matrix creation
    let mat = Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () =>
            Array.from({ length: 3 }, () =>
                Array.from({ length: 3 })
            )
        )
    );

    // filling the array
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    mat[i][j][k][l] = null;
                }
            }
        }
    }

    const [matrix, setMatrix] = useState(mat)

    return (
        <MatrixContext.Provider value={{ matrix , setMatrix }}>
            {children}
        </MatrixContext.Provider>
    );
}

export {MatrixContext, MatrixContextProvider};