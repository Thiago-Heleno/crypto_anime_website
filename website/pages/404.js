import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <p className="text-white font-bold text-center text-3xl">Page Not Found!</p>
      <p className="text-red-300 font-bold text-center text-3xl">404</p>
      <Link href="/">
        <a><p>Back Home</p></a>
      </Link>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  )
}