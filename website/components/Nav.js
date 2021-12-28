import Link from "next/link"
import { useRouter } from "next/router"

import en from '../locales/en'
import ptBR from '../locales/pt-BR'


function Nav() {
  let router = useRouter()
  const {locale} = router;
  const t = locale === 'en' ? en : ptBR;

  return (
    <nav className="relative mb-5">
      <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10
    sm:space-x-20 overflow-x-scroll scrollbar-hide overflow-y-hidden">
        <Link href="/explore?q=trending"><a>
            <h2 className="last:pr-24 cursor-pointer transition duration-200 transform hover:text-white">{t.trending}</h2>
        </a></Link>
        <Link href="/explore?q=free"><a>
        <h2 className="last:pr-24 cursor-pointer transition duration-200 transform hover:text-white">{t.newGames}</h2>
        </a></Link>
        <Link href="/explore?q=paid"><a>
        <h2 className="last:pr-24 cursor-pointer transition duration-200 transform hover:text-white">{t.freeGames}</h2>
        </a></Link>
        <Link href="/explore?q=paid"><a>
        <h2 className="last:pr-24 cursor-pointer transition duration-200 transform hover:text-white">{t.paidGames}</h2>
        </a></Link>
      </div>
    </nav>
  )
}

export default Nav
