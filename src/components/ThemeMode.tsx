"use client";
import React, { useCallback, useMemo } from "react";
import cookies from "js-cookie";
import { ThemeCookieKey } from "../utils/constants";

type Props = {
  children: React.ReactNode;
  initialTheme?: (typeof Theme)[keyof typeof Theme];
};

export const Theme = {
  dark: "dark",
  light: "light",
} as const;

const ThemeContext = React.createContext<{
  theme: (typeof Theme)[keyof typeof Theme];
  toggleTheme: () => void;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}>({
  theme: Theme.light,
  toggleTheme: () => {},
  setDarkTheme: () => {},
  setLightTheme: () => {},
});

export const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = React.useState<"dark" | "light">(
    props.initialTheme ?? Theme.light
  );

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
    setTheme(newTheme);
    cookies.set(ThemeCookieKey, newTheme);
  }, [theme]);

  const setDarkTheme = useCallback(() => {
    setTheme(Theme.dark);
    cookies.set(ThemeCookieKey, Theme.dark);
  }, []);

  const setLightTheme = useCallback(() => {
    setTheme(Theme.light);
    cookies.set(ThemeCookieKey, Theme.light);
  }, []);

  React.useEffect(() => {
    const localTheme = cookies.get(ThemeCookieKey) as
      | (typeof Theme)[keyof typeof Theme]
      | undefined;
    localTheme && setTheme(localTheme);
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, setDarkTheme, setLightTheme }),
    [setDarkTheme, setLightTheme, theme, toggleTheme]
  );
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeDiv = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return <div className={theme}>{children}</div>;
};
