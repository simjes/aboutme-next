import '../styles/globals.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
)

export default MyApp
