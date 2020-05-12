import { CSSBaseline, ZEITUIProvider } from '@zeit-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ZEITUIProvider>
      <CSSBaseline />
      <Component {...pageProps} />
    </ZEITUIProvider>
  )
}
