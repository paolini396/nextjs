import GlobalStyle from "@/styles/Global.Style"

function MyApp({ Component, pageProps }) {
  return (
     <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
