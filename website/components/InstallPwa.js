import { useState, useEffect } from "react"
import {
  DownloadIcon,
  XIcon,
} from "@heroicons/react/outline"
import {
  isIOS,
} from "react-device-detect";
import { useCookies } from "react-cookie";

const InstallPwa = () => {
  const [device, setDevice] = useState(null)
  const [show, setShow] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['promptPwa']);


  useEffect(()=>{
    const cdata = cookies.promptPwa
    if(cdata) return;
    if(isIOS){
      setDevice("ios")
    }
    setShow(true)
  }, [])
  

  
  return (
    <>
    {show ?
    <div className="relative p-3 bg-white text-black rounded">
      <div className="flex flex-row gap-2">
        <DownloadIcon className="h-5"/>
        {device == "ios" ?
        <p>How To download our app?<br/> Click on the Share Button and Add to Screen</p>
        :
        <p>How To download our app?<br/> Click on the Three Dots and Click on Add to Screen</p>
        }
      </div>
      <button className="absolute top-0 right-0 m-2" onClick={()=>{setCookie("promptPwa", {prompt: "true"}); setShow(false)}}><XIcon className="h-5"/></button>
      </div>
      :
      null
    }
    </>
  )
}

export default InstallPwa
