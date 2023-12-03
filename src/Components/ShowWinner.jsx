import React, { useContext } from "react";
import { WinnerContext } from "../Contexts/WinnerContext";

const ShowWinner = () => {
  const { winner } = useContext(WinnerContext);
  return (
    <>
      <div
        className={`${
          winner === null ? "invisible" : ""
        }bg-green-600 rounded text-black font-extrabold animate-bounce p-2 m-2`}
      >
        {winner === null
          ? ""
          : `Game won by player ${winner} ${winner === 1 ? "(X)" : "(O)"}`}
      </div>
    </>
  );
};

export default ShowWinner;
