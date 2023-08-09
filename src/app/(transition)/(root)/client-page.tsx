"use client"

import {
  Instagram,
  Linkedin,
  Moon,
  Sun,
  Twitter,
} from "react-feather";
import { useMemo, useState } from "react";

import Map from "@/components/Map";
import { seo, footer } from "@/utils/data";
import { afterCurrentWeek, beforeCurrentWeek, currentWeek, sortByDateAsc, sortByDateDesc } from "@/utils/date";
import EventCard from "@/components/EventCard";

// import type { CommunityEvent } from "../..types"

type CommunityEvent = any
const THEMES = {
  dark: "dark",
  light: "light"
}

type Theme = "light" | "dark"

const jsclYellow = "#aaa";
const jsclBlack = "#333";

export default function Home({ communityEvents }: { communityEvents: CommunityEvent[]}) {
  const [theme, setTheme] = useState(THEMES.dark)

  const handleTheme = (theme: Theme) => {
    setTheme(theme);
    localStorage.theme = theme;
  }

  const thisWeekEvents = useMemo(() => {
    return communityEvents
      .filter(communityEvent => currentWeek(communityEvent.startDate))
      .sort((a, b) => sortByDateAsc(a.startDate, b.startDate))
  }, [communityEvents]);
  const comingEvents = useMemo(() => {
    return communityEvents
      .filter(communityEvent => afterCurrentWeek(communityEvent.startDate))
      .sort((a, b) => sortByDateDesc(a.startDate, b.startDate))
  }, [communityEvents]);
  const pastEvents = useMemo(() => {
    return communityEvents
      .filter(communityEvent => beforeCurrentWeek(communityEvent.startDate))
      .sort((a, b) => sortByDateDesc(a.startDate, b.startDate))
  }, [communityEvents]);

  return (
    <div className={theme}>
      <div>
        <div className="absolute bg-jscl-yellow dark:bg-jscl-black h-full w-full" />
        <div className="absolute w-full h-[calc(100vh-10vh)]" style={{top: "10vh"}}>
          <Map color={theme === THEMES.light ? jsclBlack : jsclYellow}/>
        </div>
        <div className="absolute bg-jscl-yellow dark:bg-jscl-black bg-opacity-50 dark:bg-opacity-10 h-full w-full" />
      </div>
      <header className="relative container mx-auto px-4 py-4 flex justify-between z-10  text-black  dark:text-jscl-yellow w-full">
        <div className="font-noto">JavaScript<span className="font-thin">Chile</span></div>
        <div className="font-noto">
          {THEMES.light === theme ? (<button onClick={() => handleTheme(THEMES.dark as Theme)}><Moon /></button>) : null}
          {THEMES.dark === theme ? (<button onClick={() => handleTheme(THEMES.light as Theme)}><Sun /></button>) : null}
        </div>
      </header>
      <main>
        <div className="relative text-black flex flex-col justify-center items-center font-montserrat dark:text-jscl-yellow bg-opacity-10 w-full h-[calc(100vh-61px)]">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-noto font-bold lg:text-9xl text-center">
              JavaScript
              <div className="font-thin lg:inline">Chile</div>
            </h1>
          </div>
          <div />
        </div>
        <div className="w-full bg-jscl-yellow dark:bg-jscl-black">
          <div className="container mx-auto px-4 pt-6 pb-8">
            <h2 className="font-noto text-4xl  text-slate-900 dark:text-jscl-yellow font-medium tracking-tight m-0 mb-4">Eventos</h2>
            <h3 className="font-noto text-2xl  text-slate-900 dark:text-jscl-yellow font-medium tracking-tight my-3">Esta semana</h3>
            <div className="grid grid-cols-1 gap-4">
              {!thisWeekEvents.length ? <p className="text-slate-900 dark:text-jscl-yellow">No hay eventos para esta semana</p> : null}
              {thisWeekEvents.map((event, index) =>
                <EventCard key={index} event={event} />
              )}
            </div>

            <h3 className="font-noto text-2xl  text-slate-900 dark:text-jscl-yellow font-medium tracking-tight my-3">Próximos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4">
              {!comingEvents.length ? <p className="text-slate-900 dark:text-jscl-yellow">No hay eventos próximos</p> : null}
              {comingEvents.map((event, index) =>
                <EventCard key={index} event={event} />
              )}
            </div>
            <h3 className="font-noto text-2xl  text-slate-900 dark:text-jscl-yellow font-medium tracking-tight my-3">Previos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4">
              {pastEvents.map((event, index) =>
                <EventCard key={index} event={event} />
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="font-montserrat dark:bg-jscl-black text-jscl-black  dark:text-jscl-yellow bg-jscl-yellow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center font-koulen flex-col lg:flex-row gap-4 pt-4  border-t-2 border-jscl-black  dark:border-jscl-yellow">
            <div className="flex gap-4">
              <a target="_blank" href="https://www.linkedin.com/company/javascript-chile/"><Linkedin /></a>
              <a target="_blank" href="https://twitter.com/javascriptChile"><Twitter /></a>
              <a target="_blank" href="https://www.instagram.com/javascriptchile/"><Instagram /></a>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row text-center lg:gap-8">
              {footer.map(link => (<a key={link.id} href={link.url}>{link.name}</a>))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
