import React from 'react'
import NextApp from 'next/app'

import "modern-normalize"

import { appWithTranslation } from "../i18n"
import { DataProvider } from "../contexts/Data"

class App extends NextApp {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
//   static async getInitialProps(appContext) {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await NextApp.getInitialProps(appContext);   
  
//     return { pageProps: { namespacesRequired: ["common"]} }
//   }

  render() {
    const { Component, pageProps } = this.props

    return (
        <DataProvider>
            <Component {...pageProps} />
        </DataProvider>
    ) 
  }
}

export default appWithTranslation(App)
