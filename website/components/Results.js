import Image from 'next/image'
import Link from "next/link"
import {
  StarIcon,
  UserGroupIcon,
  PlayIcon
} from '@heroicons/react/outline'

function Results({title, location, imgSrc, description}) {
  return (
    <div className="hover:opacity-80 max-w-sm group my-5 md:mr-3 m-auto md:m-0 md:my-5">
      <Link href={location}>
        <a className="grid grid-cols-1">
          <Image className="rounded"  alt="Game Thumbnail" src={imgSrc} width={1920} height={1080}/>
          <div className="absolute m-3 flex items-center bg-green-400 rounded p-2 opacity-90">
            <PlayIcon className="h-5"/>
            <p>Play</p>
          </div>
          <div className="p-2">
            <p className="truncate max-w-md">{description}</p>
            <h2 className="text-white font-bold text-lg">{title}</h2>
            <p className="flex items-center">
              <p>5</p>
              <StarIcon className="h-5 mr-2"/>
              <p>12+</p>
              <UserGroupIcon className="h-5"/>
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Results
