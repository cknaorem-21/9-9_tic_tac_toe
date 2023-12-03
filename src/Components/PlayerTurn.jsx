import React, { useContext } from "react";
import { PlayerContext } from "../Contexts/PlayerContext";

const PlayerTurn = () => {
  const { player } = useContext(PlayerContext);
  return (
    <>
      <div className={`${player===null? "invisible" : ""}border-2 border-green-600 rounded text-yellow-600 p-2 m-2`}>
        {player === null
          ? ""
          : `Player : ${player} ${player === 1 ? "(X)" : "(O)"}`}
      </div>
    </>
  );
};

export default PlayerTurn;
