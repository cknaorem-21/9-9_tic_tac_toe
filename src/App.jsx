import Matrix from "./Components/Matrix";
import { useState, useEffect, useContext } from "react";
import { MatrixContext, MatrixContextProvider } from "./Contexts/MatrixContext";
import { PlayerContext, PlayerContextProvider } from "./Contexts/PlayerContext";
import { handleTossHelper } from "./Utils/helpers";

function App() {
  const {player, setPlayer} = useContext(PlayerContext);
  
  const handleToss = (e) => {
    handleTossHelper(e, setPlayer)
  }

  return (
    
      <>
        {/* Toss */}
        <div className="bg-black text-blue-900 flex justify-center items-center h-screen">
          <div className="">
            <button className="border-2 border-green-600" onClick={handleToss}>
              Toss
            </button>
          </div>
          <Matrix></Matrix>
        </div>
      </>
    
  );
}

export default App;
