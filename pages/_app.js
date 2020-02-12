import { Provider } from 'react-redux'
import configureStore from '@/state/store'
import GlobalStyle from '@/components/GlobalStyle'
import reduxWrapper from 'next-redux-wrapper'

function App({ Component, pageProps, store }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default reduxWrapper(configureStore)(App)
