import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../src/theme'
import Head from 'next/head'

class MyApp extends App {
  componentDidMount(){
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps } = this.props
    
    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default appWithTranslation(MyApp)