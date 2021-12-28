import {HeartIcon} from '@heroicons/react/solid'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {ArrowCircleUpIcon} from '@heroicons/react/outline'
import ReactCountryFlag from "react-country-flag"

function Footer() {
  let router = useRouter()
  return (
    <>
    
    <div className="block inset-x-0 bottom-0 bg-black justify-center bottom-100">
    <button className="flex items-center gap-2 justify-center w-full text-center bg-gray-800 hover:text-white p-2" onClick={()=> {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}}>Back to top <ArrowCircleUpIcon className="h-5"/></button>
      <div className="flex flex-row justify-between">
        
        <div className="m-3">
          <p className="font-bold">Language:</p>
          <ul>
            {router.locales.map((locale)=> (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a className="hover:text-white hover:underline">{locale}
                  <ReactCountryFlag
                      className="mx-2"
                      countryCode={locale == 'en' ? locale = "US" : locale = "BR"}
                      svg
                      style={{
                          width: '2em',
                          height: '2em',
                      }}
                      title={locale}
                  />
                  </a> 
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="m-3">
            <p className="font-bold">Pages:</p>
            <ul>
              <Link href="/about">
                <a>
                  <li className="hover:underline hover:text-white">About</li>
                </a>
              </Link>
            </ul>
        </div>

        <div className="m-3">
            <p className="font-bold">Contact:</p>
            <ul>
              <Link href="/support">
                <a>
                  <li className="hover:underline hover:text-white">Support</li>
                </a>
              </Link>
            </ul>
        </div>

      </div>

      <div className="flex items-center justify-center">
        <p className="font-bold">Made with </p>
        <HeartIcon className="h-6"/>
        <a href="https://www.discord.com">
          <p className="font-bold">by <u>CA Team</u></p>
        </a>
      </div>
    </div>
    </>
  )
}

export default Footer
