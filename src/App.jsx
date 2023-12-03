import Matrix from "./Components/Matrix";
import StatusMatrix from "./Components/StatusMatrix";
import { useState, useEffect, useContext } from "react";
import { MatrixContext, MatrixContextProvider } from "./Contexts/MatrixContext";
import { PlayerContext, PlayerContextProvider } from "./Contexts/PlayerContext";
import { WinnerContext } from "./Contexts/WinnerContext";
import PlayerTurn from "./Components/PlayerTurn";
import ShowWinner from "./Components/ShowWinner";


function App() {
  const { player, setPlayer } = useContext(PlayerContext);
  const {winner, setWinner} = useContext(WinnerContext)

  // useEffect(()=>{
  //   if(winner != null) {
  //     alert(`Game won by : ${winner}`);
  //     console.log(`Game won by : ${winner}`)
  //   }
  // }, [winner, setWinner]);

  const handleToss = (e) => {
    let rand = Math.floor(Math.random() * 2) + 1;
    e.target.disabled = true;
    e.target.innerHTML = `Toss won by player ${rand}`;
    setPlayer(rand);
  };

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
        <StatusMatrix></StatusMatrix>
        <PlayerTurn></PlayerTurn>
        <ShowWinner></ShowWinner>
      </div>
    </>
  );
}

export default App;
