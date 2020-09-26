import { motion } from 'framer-motion'
import Head from 'next/head'

import { fadeInUp } from '../animations'
import Header from '../components/Header'
import Image from '../components/Image'
import Main from '../components/Main'

const Home = () => {
  // NeoNoire font has two alternatives - which is based on casing
  const title = 'Simon Jespersen'.toLowerCase()
  const subtitle = 'I work on web and mobile stuff'.toLowerCase()

  return (
    <>
      <Head>
        <title>Home | Simjes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className="bg-opacity-0" />

      <Main className="flex flex-col items-center justify-center">
        {/* Special case - don't use Image component */}
        <img
          className="h-full w-full fixed top-0 left-0 object-cover -z-10"
          src={require(`Images/bg.jpeg?lqip`)}
          alt="Neon sunset"
        />
        <img
          className="h-full w-full fixed top-0 left-0 object-cover -z-10"
          src={require(`Images/bg.jpeg?webp`)}
          alt="Neon sunset"
        />
        {/* Special case end */}

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="text-4xl md:text-6xl text-center neo-noire text-passive title-shadow"
        >
          {title}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="text-center neo-noire text-passive"
        >
          {subtitle}
        </motion.p>

        <Image
          path="profilePicture.jpeg"
          alt="Simon"
          classNameShared="w-40 h-40"
          classNameContainer="mt-5"
          classNameImage="rounded-full border-4 border-passive"
          initial="hidden"
          animate="show"
          variants={fadeInUp}
        />
      </Main>

      <footer>ble</footer>
    </>
  )
}

export default Home
