import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n'
import { ThemeProvider } from '@material-ui/core'
import theme from '../src/theme'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default appWithTranslation(MyApp)