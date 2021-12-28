import '../styles/globals.css'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer'
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <div className="scroll-smooth">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default appWithTranslation(MyApp)
