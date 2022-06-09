import { useContext, useEffect } from "react";
import { SoundEffectsContext } from "../context/SoundEffectsContext";
import { ThemeContext } from "../context/ThemeContext";
import { TimerContext } from "../context/TimerContext";
import HeaderMenu from "./HeaderMenu";
import Timer from "./Timer";

export default function PomodoroApp() {
  const { remainingMinutes, remainingSeconds, playTimer, completedPomodoro } =
    useContext(TimerContext);
  const { audioTag } = useContext(SoundEffectsContext);
  const { theme, currentModeText } = useContext(ThemeContext);

  const timeString = `${
    remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes
  }:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;

  useEffect(() => {
    if (playTimer) {
      if (!completedPomodoro) document.title = `Work - ${timeString} left`;

      if (completedPomodoro) document.title = `Break - ${timeString} left`;
    } else {
      document.title = `🍅 Pomodoro App - Created by @bkfan1`;
    }
  }, [playTimer, timeString, completedPomodoro]);

  return (
    <>
      <main
        className={`flex flex-col items-center justify-between w-full h-screen ${theme} ease-in-out duration-200`}
      >
        <header className="w-full">
          <HeaderMenu />
        </header>

        <section className="">
          <h1 className="text-3xl text-center">{currentModeText}</h1>
          <Timer />
          <audio ref={audioTag} src="assets/audio/bell.wav"></audio>
        </section>

        <footer className="flex flex-col items-center py-4">
          <p>Created by Jackson Paredes Ferranti</p>
          <ul className="flex gap-3 mt-1">
            <a title="Github profile" href="https://www.github.com/bkfan1">
              <i className="bi bi-github" />
            </a>
            <a title="Send email" href="jacksonpf177@gmail.com">
              <i className="bi bi-envelope-fill" />
            </a>
          </ul>
        </footer>
      </main>
    </>
  );
}
