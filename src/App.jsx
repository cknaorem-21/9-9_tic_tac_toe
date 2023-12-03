import Matrix from "./Components/Matrix";
import StatusMatrix from "./Components/StatusMatrix";
import { useState, useEffect, useContext } from "react";
import { MatrixContext, MatrixContextProvider } from "./Contexts/MatrixContext";
import { PlayerContext, PlayerContextProvider } from "./Contexts/PlayerContext";
import { WinnerContext } from "./Contexts/WinnerContext";
import PlayerTurn from "./Components/PlayerTurn";
import ShowWinner from "./Components/ShowWinner";
import TossButton from "./Components/TossButton";

function App() {
  const {player, setPlayer} = useContext(PlayerContext);
  return (
    <>
      {/* Toss */}
      <div className="bg-gray-950 text-blue-900 flex justify-between items-center h-screen">
        <div className="w-1/4 flex flex-col justify-center items-center h-screen">
          <TossButton />
          <PlayerTurn />
          <ShowWinner />
        </div>
        <div className="w-2/4 flex justify-center items-center h-screen">
          <Matrix></Matrix>
        </div>
        <div className="w-1/4 flex justify-center items-center h-screen">
          <StatusMatrix />
        </div>
      </div>
    </>
  );
}

export default App;
