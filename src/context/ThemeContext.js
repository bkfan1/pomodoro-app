import { createContext, useContext, useEffect, useState } from "react";
import { TimerContext } from "./TimerContext";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { playTimer, completedPomodoro } = useContext(TimerContext);

  const [theme, setTheme] = useState(null);
  const [currentModeText, setCurrentModeText] = useState("");

  useEffect(() => {
    if (!playTimer) {
      setTheme("bg-white text-black");
      setCurrentModeText("Get ready");
    }

    if (playTimer && !completedPomodoro) {
      setTheme("bg-red-500 text-white");
      setCurrentModeText("Work");
    }

    if (playTimer && completedPomodoro) {
      setTheme("bg-gray-700 text-white");
      setCurrentModeText("Break");
    }
  }, [playTimer, completedPomodoro]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, currentModeText }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
