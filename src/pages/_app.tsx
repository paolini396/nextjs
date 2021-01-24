import GlobalStyle from "@/styles/Global.Style"
import Header from '@/components/Header';

function MyApp({ Component, pageProps }) {
  return (
     <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
