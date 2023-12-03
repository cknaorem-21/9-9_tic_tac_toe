import React, { useContext } from "react";
import { PlayerContext } from "../Contexts/PlayerContext";

const TossButton = () => {
    const { player, setPlayer } = useContext(PlayerContext);

    const handleToss = (e) => {
        let rand = Math.floor(Math.random() * 2) + 1;
        e.target.disabled = true;
        e.target.innerHTML = `Player ${rand} won the toss`;
        setPlayer(rand);
    };

  return (
    <>
      <button
        className={`border-2 border-green-600 rounded text-yellow-600 ${player===null? "hover:scale-105 hover:border-blue-400 delay-75" : ""} p-2 m-2`}
        onClick={handleToss}
      >
        Toss
      </button>
    </>
  );
};

export default TossButton;
