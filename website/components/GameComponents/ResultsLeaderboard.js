import Image from 'next/image'

function ResultsLeaderboard({players}) {
  console.log(players)
  const Medal = ({index}) => {    
    if(index == 0) return (<Image className="object-contain" alt="LeaderBoard Position" src="/images/icons/goldMedal.png" width={50} height={50}/>)
    if(index == 1) return (<Image className="object-contain" alt="LeaderBoard Position" src="/images/icons/silverMedal.png" width={50} height={50}/>)
    if(index == 2) return (<Image className="object-contain" alt="LeaderBoard Position" src="/images/icons/bronzeMedal.png" width={50} height={50}/>)
    return (<p className="text-white font-bold text-lg text-center w-8">{index + 1}</p>)
  }

  const pmap = players.map((e, index) =>{
    let NickName
    if(e.shots < 2) NickName = "I think you're still thirsty";
    if(e.shots > 10) NickName = "Call an Ambulance for Him/Her!";

    if(index == (players.length - 1)){
      NickName = "Don't be sad, You'll loose next Time too!"
    }

    return(
      <li key={index} className="bg-gray-400 p-3 m-auto flex flex-row justify-between gap-2">
        <Medal index={index}/>
        <div className="flex gap-3 flex-col items-center md:flex-row">
          <p className="text-center text-white font-bold md:text-2xl sm:text-sm">{e.name}</p>
          <p className="">{NickName}</p>
        </div>
        <p>Shots: {e.shots}</p>
      </li>
    )
  })

  return(
    <ul>
      {pmap}
    </ul>
  )
}

export default ResultsLeaderboard