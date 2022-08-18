import type { AppProps } from 'next/app'

import { AppThemeProvider, GlobalStyle } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  )
}

export default MyApp
