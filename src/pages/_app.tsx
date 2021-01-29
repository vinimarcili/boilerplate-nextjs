import { Component, ReactComponentElement } from 'react'
import '../../styles/globals.css'

type Props = {
  Component: typeof Component,
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}

export default MyApp
