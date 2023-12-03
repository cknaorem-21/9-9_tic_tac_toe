import React, {useContext} from 'react'
import { WinnerContext } from '../Contexts/WinnerContext'

const ShowWinner = () => {
    const {winner} = useContext(WinnerContext);
  return (
    <>
        <div className="bg-orange-300">
            {winner===null? "": `Game won by ${winner}`}
        </div>
    </>
  )
}

export default ShowWinner