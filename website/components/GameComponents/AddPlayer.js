import { useState } from "react"

const AddPlayer = props => {
  const [playerName, setPlayerName] = useState("")  

  return (
    <>
        <label className="text-center w-full text-white text-xl font-bold">Players:</label>
        <div className="m-auto my-5 bg-yellow-400">
          <div className="flex flex-row rounded-lg relative bg-transparent gap-1 m-2">
            
            <div>
              <p className="font-bold text-xl text-white">Player Name:</p>
              <input type="text" onChange={(e) => setPlayerName(e.target.value)} onKeyDown={(e)=>{if(e.key === 'Enter'){props.onKeyDown(playerName); setPlayerName("")}}} value={playerName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-xl text-white">Add Player</p>
              <button onClick={(event) => {props.onClick(playerName); setPlayerName("")}} className="m-auto bg-green-500 text-white hover:bg-green-400 h-full w-20 cursor-pointer focus:outline-none">
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
        
          </div>
        </div>
    </>
  )
}


export default AddPlayer