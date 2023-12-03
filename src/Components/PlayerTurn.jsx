import React, {useContext} from 'react'
import { PlayerContext } from '../Contexts/PlayerContext'

const PlayerTurn = () => {
    const {player} = useContext(PlayerContext);
  return (
    <>
        <div className="bg-blue-300">
            {player===null? "" : `Player : ${player} ${player===1? "(X)": "(O)"}`}
        </div>
    </>
  )
}

export default PlayerTurn