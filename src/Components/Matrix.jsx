import React from "react";
import { useState, useEffect } from "react";

const Matrix = ({ matrix, player, setPlayer }) => {
  const [active, setActive] = useState(null);

  //  winner tracking
  const [nestedWinner, setNestedWinner] = useState({
    winner00: null,
    winner01: null,
    winner02: null,
    winner10: null,
    winner11: null,
    winner12: null,
    winner20: null,
    winner21: null,
    winner22: null,
  });

  //mark winners
  function markWinner(winner, setNestedWinner) {
    let winnerCell = `winner${k}${l}`;
    switch (winnerCell) {
      case "winner00":
        setNestedWinner({
          ...nestedWinner,
          winner00: winner,
        });
        console.log(`${winnerCell} won by player ${player}`);
        break;

      case "winner01":
        setNestedWinner({
          ...nestedWinner,
          winner01: winner,
        });
        console.log(`${winnerCell} won by player ${player}`);
        break;

      case "winner02":
        setNestedWinner({
          ...nestedWinner,
          winner02: winner,
        });
        console.log(`${winnerCell} won by player ${player}`);
        break;

      case "winner10":
        setNestedWinner({
          ...nestedWinner,
          winner10: winner,
        });
        console.log(`${winnerCell} won by player ${player}`);
        break;

      case "winner11":
        setNestedWinner({
          ...nestedWinner,
          winner11: winner,
        });
        console.log(`${winnerCell} won by player ${player}`);
        break;

      case "winner12":
        setNestedWinner({
          ...nestedWinner,
          winner12: winner,
        });
        console.log(`${winnerCell} won by player ${player}`);
        break;

      case "winner20":
        setNestedWinner({
          ...nestedWinner,
          winner20: winner,
        });
        console.log(`${winnerCell} won by player ${player}`);
        break;

      case "winner21":
        setNestedWinner({
          ...nestedWinner,
          winner21: winner,
        });
        console.log(`${winnerCell} won by player ${player}`);
        break;

      case "winner22":
        setNestedWinner({
          ...nestedWinner,
          winner22: winner,
        });
        console.log(`${winnerCell} won by player ${player}`);
        break;
      default:
        console.log("No winner matches");
    }
  }

  // click Handler
  const handleClick = (e) => {
    const id = e.target.id;
    // extract index into array of numbers.
    const [i, j, k, l] = Array.from(id, (number) => parseInt(number));

    if (
      player != null &&
      matrix[i][j][k][l].value === null &&
      (active === null || active === id[0] + id[1])
    ) {
      // store in data matrix.
      matrix[i][j][k][l].value = player
      console.log(`0th column ${matrix[i][j][k][0].value} ${typeof matrix[i][j][k][0].value}`)

      // Swap players and fill cell
      if (player === 1) {
        e.target.innerHTML = "1";
        setPlayer(2);
      } else {
        e.target.innerHTML = "2";
        setPlayer(1);
      }

      // check nested matrix winner
      let winner = null;
      let diagonal = false;
      let q;
      if (k === l || (k === 2 && l === 0) || (k === 0 && l === 2))
        diagonal = true;

      let checkPlayer = null;
      // check row
      for (q = 0; q < 3; q++) {
        if (matrix[i][j][k][q].value === null){
          console.log(`row check if 1`)
          break;
        } 
        if (checkPlayer === null) {
          console.log(`row check if 2`)
          checkPlayer = matrix[i][j][k][q].value;
        } 
        else if (checkPlayer != matrix[i][j][k][q].value) {
          console.log(`row check else if part`)
          break;
        } 
      }
      if (q >= 3) {
        console.log(`q>=3 check`)
        winner = checkPlayer;
        markWinner(winner, setNestedWinner);
        console.log(`From check row ${winnerCell} won by player ${player}`);
      }

      // check col
      checkPlayer = null;
      for (q = 0; q < 3; q++) {
        if (matrix[i][j][q][l].value === null) break;
        if (checkPlayer === null) checkPlayer = matrix[i][j][q][l].value;
        else if (checkPlayer != matrix[i][j][q][l].value) break;
      }
      if (q >= 3) {
        winner = checkPlayer;
        markWinner(winner, setNestedWinner);
        console.log(`From check col ${winnerCell} won by player ${player}`);
      }

      // check diagonal
      if (diagonal === true) {
        // top left to bottom right diagonal
        checkPlayer = null;
        for (q = 0; q < 3; q++) {
          if (matrix[i][j][q][q].value === null) break;
          if (checkPlayer === null) checkPlayer = matrix[i][j][q][q].value;
          else if (checkPlayer != matrix[i][j][q][q].value) break;
        }
        if (q >= 3) {
          winner = checkPlayer;
          markWinner(winner, setNestedWinner);
          console.log(`From check diag1 ${winnerCell} won by player ${player}`);
        }

        // bottom left to top right diagonal
        checkPlayer = null;
        for (q = 0; q < 3; q++) {
          if (matrix[i][j][2 - q][q].value === null) break;
          if (checkPlayer === null) checkPlayer = matrix[i][j][2 - q][q].value;
          else if (checkPlayer != matrix[i][j][2 - q][q].value) break;
        }
        if (q >= 3) {
          winner = checkPlayer;
          markWinner(winner, setNestedWinner);
          console.log(`From check diag2 ${winnerCell} won by player ${player}`);
        }
      }

      // set the new active cell
      let newActive = id[2] + id[3];
      setActive((prev) => prev = newActive);
    }
  };

  return (
    <>
      {/*matrix */}
      <div className="flex flex-wrap w-[564px] h-[564px]">
        {/*Cell*/}
        <div
          id="00"
          className={`bg-green-300 w-[188px] h-[188px] border-[4px] ${
            active === null || active != "00"
              ? "border-blue-700"
              : "border-red-600"
          }`}
        >
          {/*nested matrix */}
          <div className="flex flex-wrap w-[180px] h-[180px]">
            {/*nested Cell*/}
            <div
              id="0000"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0001"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0002"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0010"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0011"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0012"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0020"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0021"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0022"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
          </div>
        </div>
        <div
          id="01"
          className={`bg-green-300 w-[188px] h-[188px] border-[4px] ${
            active === null || active != "01"
              ? "border-blue-700"
              : "border-red-600"
          }`}
        >
          {/*nested matrix */}
          <div className="flex flex-wrap w-[180px] h-[180px]">
            {/*nested Cell*/}
            <div
              id="0100"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0101"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0102"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0110"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0111"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0112"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0120"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0121"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0122"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
          </div>
        </div>
        <div
          id="02"
          className={`bg-green-300 w-[188px] h-[188px] border-[4px] ${
            active === null || active != "02"
              ? "border-blue-700"
              : "border-red-600"
          }`}
        >
          {/*nested matrix */}
          <div className="flex flex-wrap w-[180px] h-[180px]">
            {/*nested Cell*/}
            <div
              id="0200"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0201"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0202"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0210"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0211"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0212"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0220"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0221"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="0222"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
          </div>
        </div>
        <div
          id="10"
          className={`bg-green-300 w-[188px] h-[188px] border-[4px] ${
            active === null || active != "10"
              ? "border-blue-700"
              : "border-red-600"
          }`}
        >
          {/*nested matrix */}
          <div className="flex flex-wrap w-[180px] h-[180px]">
            {/*nested Cell*/}
            <div
              id="1000"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1001"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1002"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1010"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1011"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1012"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1020"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1021"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1022"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
          </div>
        </div>
        <div
          id="11"
          className={`bg-green-300 w-[188px] h-[188px] border-[4px] ${
            active === null || active != "11"
              ? "border-blue-700"
              : "border-red-600"
          }`}
        >
          {/*nested matrix */}
          <div className="flex flex-wrap w-[180px] h-[180px]">
            {/*nested Cell*/}
            <div
              id="1100"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1101"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1102"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1110"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1111"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1112"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1120"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1121"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1122"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
          </div>
        </div>
        <div
          id="12"
          className={`bg-green-300 w-[188px] h-[188px] border-[4px] ${
            active === null || active != "12"
              ? "border-blue-700"
              : "border-red-600"
          }`}
        >
          {/*nested matrix */}
          <div className="flex flex-wrap w-[180px] h-[180px]">
            {/*nested Cell*/}
            <div
              id="1200"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1201"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1202"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1210"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1211"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1212"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1220"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1221"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="1222"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
          </div>
        </div>
        <div
          id="20"
          className={`bg-green-300 w-[188px] h-[188px] border-[4px] ${
            active === null || active != "20"
              ? "border-blue-700"
              : "border-red-600"
          }`}
        >
          {/*nested matrix */}
          <div className="flex flex-wrap w-[180px] h-[180px]">
            {/*nested Cell*/}
            <div
              id="2000"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2001"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2002"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2010"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2011"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2012"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2020"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2021"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2022"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
          </div>
        </div>
        <div
          id="21"
          className={`bg-green-300 w-[188px] h-[188px] border-[4px] ${
            active === null || active != "21"
              ? "border-blue-700"
              : "border-red-600"
          }`}
        >
          {/*nested matrix */}
          <div className="flex flex-wrap w-[180px] h-[180px]">
            {/*nested Cell*/}
            <div
              id="2100"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2101"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2102"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2110"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2111"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2112"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2120"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2121"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2122"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
          </div>
        </div>
        <div
          id="22"
          className={`bg-green-300 w-[188px] h-[188px] border-[4px] ${
            active === null || active != "22"
              ? "border-blue-700"
              : "border-red-600"
          }`}
        >
          {/*nested matrix */}
          <div className="flex flex-wrap w-[180px] h-[180px]">
            {/*nested Cell*/}
            <div
              id="2200"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2201"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2202"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2210"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2211"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2212"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2220"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2221"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
            <div
              id="2222"
              className="box-border bg-yellow-300 w-[60px] h-[60px] border-[2px] border-blue-700"
              onClick={handleClick}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Matrix;
