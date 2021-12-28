import Results from "../components/Results";
import { useRouter } from "next/router";
import en from '../locales/en'
import ptBR from '../locales/pt-BR'


function Explore() {
  const router = useRouter()
  const t = router.locale === 'en' ? en : ptBR;
  return (
    <>
    <p className="font-bold text-white m-5 text-2xl">Explore:</p>
    <div className="flex flex-col">
    <Results title="Back To Back" location="/games/BackToBack" imgSrc="/images/games/BackToBack/logo.jpg" description={t.BackToBackRules} />
    </div>
    </>
  )
}

export default Explore
