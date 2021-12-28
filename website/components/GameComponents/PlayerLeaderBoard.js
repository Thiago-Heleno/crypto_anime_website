import {useState} from 'react'
import Image from 'next/image'

const PlayerLeaderBoard = props => {
  const playerLeaderBoard = props.players.map((e, index) => {
    let className = ""
    if(index % 2 == 0){
      className = "flex items-center gap-2 bg-yellow-400 justify-between group"
    }else{
      className = "flex items-center gap-2 bg-yellow-200 justify-between group"
    }
    return(
        <div key={index} className={className}>
          <p className="m-3 font-bold text-xl text-white group-hover:text-gray-500 truncate ...">{e.name}</p>
          
          <div className="flex items-center gap-3">
            <p className="m-3 md:text-xl text-white font-bold">Shots: {e.shots}</p>
            <button onClick={(event)=> {props.onClick(e.name)}} className="hover:opacity-80 flex items-center gap-2 bg-yellow-600 rounded m-2 p-2">
              <p className="font-bold text-white md:text-xl">Take a Shot</p>
              <div className="w-12">
                <Image src="/images/icons/drinking-water.png" width={512} height={512} layout="responsive"/>
              </div>
            </button>
          </div>
        </div>
    );
  })

  return (
    <>
      {playerLeaderBoard}
    </>
  )
}



export default PlayerLeaderBoard