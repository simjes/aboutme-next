import '../styles.css'

import { AppProps } from 'next/dist/next-server/lib/router/router'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="min-h-screen flex flex-col">
    <Component {...pageProps} />
  </div>
)

export default MyApp
