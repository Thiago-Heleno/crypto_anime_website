import { TrashIcon } from "@heroicons/react/outline"

const AddPlayerList = props => {
  const playerObject = props.players.map((e, index) => {
    let classname
    if(index % 2 == 0){
      classname = "p-3 flex flex-row gap-2 bg-yellow-400 justify-between"
    }else{
      classname = "p-3 flex flex-row gap-2 bg-yellow-500 justify-between"
    }
    return(
      <div key={index} className={classname}>
        <p className="font-bold text-xl text-white">{e.name}</p>
        <button onClick={(event)=> {props.onClick(e.name)}} className="p-3 bg-red-500 text-white hover:bg-red-400 h-full cursor-pointer focus:outline-none flex items-center gap-2">
          <TrashIcon className="h-5"/>
          <p className="m-auto text-xl text-center text-white font-bold">Remove</p>
        </button>
      </div>
    );
  })
  return (
    <div>
      {playerObject}
    </div>
  )
}

export default AddPlayerList
