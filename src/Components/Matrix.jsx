import React from "react";
import { useState, useContext, useEffect} from "react";
import {MatrixContext} from "../Contexts/MatrixContext";
import {PlayerContext, PlayerContextProvider} from "../Contexts/PlayerContext";
import { ActiveContext } from "../Contexts/ActiveContext";

const Matrix = () => {
  const {matrix, setMatrix} = useContext(MatrixContext)
  const {player, setPlayer} = useContext(PlayerContext)
  const {active, setActive} = useContext(ActiveContext)
  // const [active, setActive] = useState(null);

  // useEffect(() => {
  //   console.log('Matrix Component is re-rendered!');
  //   console.log(`useEffect matrix[0][0][0][0] = ${matrix[0][0][0][0]}`)
  // });

  

  // click Handler
  const handleClick = (e) => {
    const id = e.target.id;
    // extract index into array of numbers.
    const [i, j, k, l] = Array.from(id, (number) => parseInt(number));

    if (
      player != null &&
      matrix[i][j][k][l] === null &&
      (active === null || active === id[0] + id[1])
    ) {
      // store in data matrix.
      setMatrix((prev)=> {
          prev[i][j][k][l] = player;
          console.log(matrix[i][j][k][l])
          return prev;
        }
      )
      // console.log(`outside ${matrix[i][j][k][l]}`)
      // console.log(`outside matrix[0][0][0][0] : ${matrix[0][0][0][0]}`)

      

      // Swap players and fill cell
      if (player === 1) {
        e.target.innerHTML = "1";
        setPlayer(2);
      } else {
        e.target.innerHTML = "2";
        setPlayer(1);
      }

      // set the new active cell
      let newActive = id[2] + id[3];
      setActive((prev) => (prev = newActive));
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
