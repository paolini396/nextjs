import React from 'react'
import GlobalStyle from '@/styles/Global.Style'
import Header from '@/components/Header'

import AppProvider from '@/hooks'

const MyApp: React.FC = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <AppProvider />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
