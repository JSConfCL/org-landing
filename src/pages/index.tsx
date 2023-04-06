import Head from 'next/head'
import {
  Instagram,
  Linkedin,
  Moon,
  Sun,
  Twitter,
} from "react-feather";
import { useState } from 'react';

import Map from "../components/Map";
import { seo, footer } from "../utils/data";

const THEMES = {
  dark: 'dark',
  light: 'light'
}

type Theme = 'light' | 'dark'

const jsclYellow = '#aaa';
const jsclBlack = '#333';

export default function Home() {
  const [theme, setTheme] = useState(THEMES.dark)

  const handleTheme = (theme: Theme) => {
    setTheme(theme);
    localStorage.theme = theme;
  }

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {seo.metadata.map(metadata => <meta key={metadata.name} {...{[metadata.category as string]: metadata.name }} content={metadata.content} />)}
      </Head>
      <div className={`${theme}`}>
        <div className='absolute bg-jscl-yellow dark:bg-jscl-black h-full w-full' />
        <div className='absolute w-full h-[calc(100vh-10vh)]' style={{top: '10vh'}}>
          <Map color={theme === THEMES.light ? jsclBlack : jsclYellow}/>
        </div>

        <div className='absolute bg-jscl-yellow dark:bg-jscl-black bg-opacity-50 dark:bg-opacity-10 h-full w-full' />
        <main className="absolute text-black h-screen flex flex-col justify-between items-center font-montserrat  dark:text-jscl-yellow bg-opacity-10 w-full">
          <div className="w-5/6 m-2 py-4 flex justify-between ">
            <div className="font-noto">JavaScript<span className='font-thin'>Chile</span></div>
            <div className="font-noto">
              {THEMES.light === theme ? (<button onClick={() => handleTheme(THEMES.dark as Theme)}><Moon /></button>) : null}
              {THEMES.dark === theme ? (<button onClick={() => handleTheme(THEMES.light as Theme)}><Sun /></button>) : null}
            </div>
          </div>
          <div>
            <h1 className="text-6xl font-noto font-bold lg:text-9xl">
              JavaScript
              <div className="font-thin lg:inline">Chile</div>
            </h1>
          </div>
          <div className="border-t-2 border-jscl-black w-5/6 m-2 py-4 flex justify-between items-center font-koulen flex-col lg:flex-row gap-4 dark:border-jscl-yellow">
            <div className="flex gap-4">
              <a target="_blank" href="https://www.linkedin.com/company/javascript-chile/"><Linkedin /></a>
              <a target="_blank" href="https://twitter.com/javascriptChile"><Twitter /></a>
              <a target="_blank" href="https://www.instagram.com/javascriptchile/"><Instagram /></a>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row text-center lg:gap-8">
              {footer.map(link => (<a key={link.id} href={link.url}>{link.name}</a>))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
