import { Canvas } from "@react-three/fiber"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>New Sincerity</title>
        <meta content="New Sincerity" property="og:title" />

        <meta name="description" content="Галерея новая искренность" />
        <meta property="og:description" content="Галерея новая искренность" />
        <meta property="og:url" content="http://newsinceritygallery.com/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />

        <meta property="og:image" content="/images/sharing.png" />
        <meta name="twitter:image" content="/images/sharing.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Canvas></Canvas>
    </>
  )
}
