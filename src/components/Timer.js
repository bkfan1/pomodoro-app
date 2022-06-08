import { useContext} from "react";
import { TimerContext } from "../context/TimerContext";

export default function Timer() {
  const {handleSkip, remainingMinutes, remainingSeconds, playTimer, handlePlayTimer} = useContext(TimerContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <figure
          className="flex flex-col items-center justify-center w-72 h-72"
          style={{ backgroundImage: "url(assets/img/tomato.svg)" }}
        >
          <section className="flex items-center justify-center gap-2">
            <h1 className="p-2 text-5xl text-white bg-red-800 rounded ">
              {remainingMinutes < 10
                ? `0${remainingMinutes}`
                : remainingMinutes}
            </h1>
            <p className="text-white text-4xl">:</p>
            <h1 className="p-2 text-5xl text-white bg-red-800 rounded ">
              {remainingSeconds < 10
                ? `0${remainingSeconds}`
                : remainingSeconds}
            </h1>
          </section>
        </figure>
        <menu className="flex gap-3">
          <button
            onClick={handlePlayTimer}
            className="flex items-center justify-center w-12 h-12 p-3 text-3xl bg-yellow-400 text-red-700 rounded-full"
          >
            <i
              className={`${
                playTimer ? "bi bi-pause-fill" : "bi bi-play-fill"
              }`}
            />
          </button>

          <button onClick={handleSkip} className="flex items-center justify-center w-12 h-12 p-3 text-2xl bg-yellow-400 text-red-700 rounded-full">
            <i className={"bi bi-skip-forward-fill"} />
          </button>
        </menu>
      </div>
    </>
  );
}
