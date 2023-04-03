import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>JSCL App</title>
        <meta name="description" content="JSCL App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black height h-screen">
        <h1 className="text-3xl font-bold underline font-koulen text-jsconf-yellow">
          Hello JSCL!
        </h1>
      </main>
    </>
  )
}
