import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Simjes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main className="flex flex-col items-center justify-center">
        {/* TODO: Lazy load blur image */}
        <img
          className="h-full w-full fixed top-0 left-0 object-cover -z-10"
          src="/bg.jpg"
          alt="Neon sunset"
        />

        <h1 className="text-6xl lazer-title">Simon Jespersen</h1>

        <p className="lazer-title">I work on web stuff and sometimes mobile</p>

        <img
          src="/profilePicture.jpg"
          alt="Simon"
          className="w-40 rounded-full border-4 border-blue-500 mt-5"
        />
      </Main>

      <footer>ble</footer>
    </>
  )
}

export default Home
