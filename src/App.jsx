import Matrix from "./Components/Matrix"
import { useState, useEffect } from "react";

function App() {
  // 3*3*3*3 matrix creation
  let matrix = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () =>
      Array.from({ length: 3 })
      )
    )
  );

  // filling the array
  for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
      for(let k=0; k<3; k++) {
        for(let l=0; l<3; l++) {
          matrix[i][j][k][l] = {
            coordinates : [i,j,k,l],
            value : null
          }   
        }
      }
    }
  }

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    console.log('Component is re-rendered!');
  });

  const handleToss = (e) => {
    let rand = Math.floor(Math.random() * 2) + 1;
    e.target.disabled = true;
    e.target.innerHTML = `Toss won by player ${rand}`
    setPlayer(rand);
  }

  return (
    <>
      {/* Toss */}
      <div className='bg-black text-blue-900 flex justify-center items-center h-screen'>
        <div className="">
          <button className="border-2 border-green-600" onClick={handleToss}>Toss</button>
        </div>
        <Matrix matrix={matrix} player={player} setPlayer={setPlayer}></Matrix>
      </div>
    </>
  )
}

export default App
