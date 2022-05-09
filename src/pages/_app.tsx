import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/themes/light'
import GlobalStyle from '../styles/global'
import { Provider } from 'react-redux'
import { store } from '../lib/store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={ lightTheme }>
    <GlobalStyle />
    <Provider store={ store }>
      <Component {...pageProps} />
    </Provider>
    </ThemeProvider>
}

export default MyApp
