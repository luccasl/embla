import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/themes/light'
import GlobalStyle from '../styles/global'
import { Provider } from 'react-redux'
import { store, persistor } from '../lib/store/store'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={ lightTheme }>
    <GlobalStyle />
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </ThemeProvider>
}

export default MyApp
