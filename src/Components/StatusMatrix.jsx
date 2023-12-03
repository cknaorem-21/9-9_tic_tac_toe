import React, { useContext } from "react";
import { NestedWinnerContext } from "../Contexts/NestedWinnerContext";

const StatusMatrix = () => {
  const { nestedWinner, setNestedWinner } = useContext(NestedWinnerContext);

  return (
    <>
      <div id="00" className="flex flex-wrap w-[9rem] h-[9rem] opacity-80">
        {/*cell*/}
        <div className="bg-yellow-300 w-[3rem] h-[3rem] border-[2px] border-blue-700 flex items-center justify-center">
          {nestedWinner.winner00 === null ? (
            ""
          ) : nestedWinner.winner00 === 1 ? (
            <div className="text-3xl text-red-500 font-bold">X</div>
          ) : (
            <div className="text-3xl text-green-500 font-bold">O</div>
          )}
        </div>
        <div id="01" className="bg-yellow-300 w-[3rem] h-[3rem] border-[2px] border-blue-700 flex items-center justify-center">
        {nestedWinner.winner01 === null ? (
            ""
          ) : nestedWinner.winner01 === 1 ? (
            <div className="text-3xl text-red-500 font-bold">X</div>
          ) : (
            <div className="text-3xl text-green-500 font-bold">O</div>
          )}
        </div>
        <div id="02" className="bg-yellow-300 w-[3rem] h-[3rem] border-[2px] border-blue-700 flex items-center justify-center">
        {nestedWinner.winner02 === null ? (
            ""
          ) : nestedWinner.winner02 === 1 ? (
            <div className="text-3xl text-red-500 font-bold">X</div>
          ) : (
            <div className="text-3xl text-green-500 font-bold">O</div>
          )}
        </div>
        <div id="10" className="bg-yellow-300 w-[3rem] h-[3rem] border-[2px] border-blue-700 flex items-center justify-center">
        {nestedWinner.winner10 === null ? (
            ""
          ) : nestedWinner.winner10 === 1 ? (
            <div className="text-3xl text-red-500 font-bold">X</div>
          ) : (
            <div className="text-3xl text-green-500 font-bold">O</div>
          )}
        </div>
        <div id="11" className="bg-yellow-300 w-[3rem] h-[3rem] border-[2px] border-blue-700 flex items-center justify-center">
        {nestedWinner.winner11 === null ? (
            ""
          ) : nestedWinner.winner11 === 1 ? (
            <div className="text-3xl text-red-500 font-bold">X</div>
          ) : (
            <div className="text-3xl text-green-500 font-bold">O</div>
          )}
        </div>
        <div id="12" className="bg-yellow-300 w-[3rem] h-[3rem] border-[2px] border-blue-700 flex items-center justify-center">
        {nestedWinner.winner12 === null ? (
            ""
          ) : nestedWinner.winner12 === 1 ? (
            <div className="text-3xl text-red-500 font-bold">X</div>
          ) : (
            <div className="text-3xl text-green-500 font-bold">O</div>
          )}
        </div>
        <div id="20" className="bg-yellow-300 w-[3rem] h-[3rem] border-[2px] border-blue-700 flex items-center justify-center">
        {nestedWinner.winner20 === null ? (
            ""
          ) : nestedWinner.winner20 === 1 ? (
            <div className="text-3xl text-red-500 font-bold">X</div>
          ) : (
            <div className="text-3xl text-green-500 font-bold">O</div>
          )}
        </div>
        <div id="21" className="bg-yellow-300 w-[3rem] h-[3rem] border-[2px] border-blue-700 flex items-center justify-center">
        {nestedWinner.winner21 === null ? (
            ""
          ) : nestedWinner.winner21 === 1 ? (
            <div className="text-3xl text-red-500 font-bold">X</div>
          ) : (
            <div className="text-3xl text-green-500 font-bold">O</div>
          )}
        </div>
        <div id="22" className="bg-yellow-300 w-[3rem] h-[3rem] border-[2px] border-blue-700 flex items-center justify-center">
        {nestedWinner.winner22 === null ? (
            ""
          ) : nestedWinner.winner22 === 1 ? (
            <div className="text-3xl text-red-500 font-bold">X</div>
          ) : (
            <div className="text-3xl text-green-500 font-bold">O</div>
          )}
        </div>
      </div>
    </>
  );
};

export default StatusMatrix;
