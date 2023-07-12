"use client";

import {
  Instagram,
  Linkedin,
  Moon,
  Sun,
  Twitter,
} from "react-feather";
import { useMemo, useState } from "react";

import Map from "../../../components/Map";
import { footer } from "../../../utils/data";
import { afterCurrentWeek, beforeCurrentWeek, currentWeek, sortByDateAsc, sortByDateDesc } from "../../../utils/date";
import EventCard from "@/components/EventCard";

import type { AllEventsQuery } from "@/api/types";

const THEMES = {
  dark: "dark",
  light: "light"
}

type Theme = "light" | "dark"

const jsclYellow = "#aaa";
const jsclBlack = "#333";

export default function Home({ communityEvents }: { communityEvents: AllEventsQuery["allEventInstance"] | [] }) {
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
      <div className="-z-10">
        <div className="absolute h-full w-full bg-jscl-yellow dark:bg-jscl-black" />
        <div className="absolute h-[calc(100vh-10vh)] w-full" style={{top: "10vh"}}>
          <Map color={theme === THEMES.light ? jsclBlack : jsclYellow}/>
        </div>
        <div className="absolute h-full w-full bg-jscl-yellow/50 dark:bg-jscl-black/10" />
      </div>
      <header className="container relative z-10 mx-auto flex w-full justify-between p-4  text-black  dark:text-jscl-yellow">
        <div className="font-noto">JavaScript<span className="font-thin">Chile</span></div>
        <div className="font-noto">
          {THEMES.light === theme ? (<button onClick={() => handleTheme(THEMES.dark as Theme)}><Moon /></button>) : null}
          {THEMES.dark === theme ? (<button onClick={() => handleTheme(THEMES.light as Theme)}><Sun /></button>) : null}
        </div>
      </header>
      <main>
        <div className="relative flex h-[calc(100vh-61px)] w-full flex-col items-center justify-center font-montserrat text-black dark:text-jscl-yellow">
          <div className="container mx-auto px-4">
            <h1 className="text-center font-noto text-6xl font-bold lg:text-9xl">
              JavaScript
              <div className="font-thin lg:inline">Chile</div>
            </h1>
          </div>
          <div />
        </div>
        <div className="w-full bg-jscl-yellow dark:bg-jscl-black">
          <div className="container mx-auto px-4 pb-8 pt-6">
            <h2 className="m-0 mb-4  font-noto text-4xl font-medium tracking-tight text-slate-900 dark:text-jscl-yellow">Eventos</h2>
            <h3 className="my-3 font-noto  text-2xl font-medium tracking-tight text-slate-900 dark:text-jscl-yellow">Esta semana</h3>
            <div className="grid grid-cols-1 gap-4">
              {!thisWeekEvents.length ? <p className="text-slate-900 dark:text-jscl-yellow">No hay eventos para esta semana</p> : null}
              {thisWeekEvents.map((event, index) =>
                <EventCard key={index} event={event} />
              )}
            </div>

            <h3 className="my-3 font-noto  text-2xl font-medium tracking-tight text-slate-900 dark:text-jscl-yellow">Próximos</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:md:grid-cols-3">
              {!comingEvents.length ? <p className="text-slate-900 dark:text-jscl-yellow">No hay eventos próximos</p> : null}
              {comingEvents.map((event, index) =>
                <EventCard key={index} event={event} />
              )}
            </div>
            <h3 className="my-3 font-noto  text-2xl font-medium tracking-tight text-slate-900 dark:text-jscl-yellow">Previos</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:md:grid-cols-3">
              {pastEvents.map((event, index) =>
                <EventCard key={index} event={event} />
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="relative bg-jscl-yellow font-noto text-jscl-black  dark:bg-jscl-black dark:text-jscl-yellow">
        <div className="container mx-auto p-4">
          <div className="flex flex-col items-center justify-between gap-4 border-t-2 border-jscl-black  pt-4 dark:border-jscl-yellow  lg:flex-row">
            <div className="flex gap-4">
              <a target="_blank" href="https://www.linkedin.com/company/javascript-chile/"><Linkedin /></a>
              <a target="_blank" href="https://twitter.com/javascriptChile"><Twitter /></a>
              <a target="_blank" href="https://www.instagram.com/javascriptchile/"><Instagram /></a>
            </div>
            <div className="flex flex-col gap-4 text-center lg:flex-row lg:gap-8">
              {footer.map(link => (<a key={link.id} href={link.url}>{link.name}</a>))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
