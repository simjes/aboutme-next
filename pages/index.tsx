import Head from 'next/head'

import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <div className="md:flex bg-white rounded-lg p-24 justify-center">
                    <img
                        className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                        src="<https://pbs.twimg.com/profile_images/1102120097081184257/61tO47TQ_400x400.jpg>"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-lg">Jake Prins</h2>
                        <div className="text-purple-500">
                            JavaScript developer
                        </div>
                        <div className="text-gray-600">Twitter: @simjes</div>
                        <div className="text-gray-600">www.jakeprins.com</div>
                    </div>
                </div>
            </main>

            <footer>ble</footer>
        </div>
    )
}

export default Home
