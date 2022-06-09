import { useState, useEffect, createContext } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [restingMinutes, setRestingMinutes] = useState(5);

  const [remainingMinutes, setRemainingMinutes] = useState(25);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [completedPomodoro, setCompletedPomodoro] = useState(false);

  const [playTimer, setPlayTimer] = useState(false);

  const handleSkip = () => {
    if (playTimer) {
      setPlayTimer(false);
    }

    setCompletedPomodoro(!completedPomodoro);

    if (!completedPomodoro) {
      setRemainingMinutes(restingMinutes);
      setRemainingSeconds(0);
    }

    if (completedPomodoro) {
      setRemainingMinutes(workMinutes);
      setRemainingSeconds(0);
    }
  };

  const handlePlayTimer = () => {
    setPlayTimer(!playTimer);
  };

  const substractTime = (min, sec, setMin, setSec) => {
    if (sec > 0) {
      setSec(sec - 1);
    }

    if (sec === 0) {
      if (min > 0) {
        setSec(59);
        setMin(min - 1);
      }
    }
  };

  useEffect(() => {
    let interval;

    if (playTimer) {
      interval = setInterval(() => {
        if (remainingMinutes === 0 && remainingSeconds === 0) {
          clearInterval(interval);
          setPlayTimer(false);
          setCompletedPomodoro(true);
        } else {
          substractTime(
            remainingMinutes,
            remainingSeconds,
            setRemainingMinutes,
            setRemainingSeconds
          );
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <TimerContext.Provider
        value={{
          workMinutes,
          setWorkMinutes,
          restingMinutes,
          setRestingMinutes,

          remainingMinutes,
          remainingSeconds,

          playTimer,
          completedPomodoro,

          handlePlayTimer,
          handleSkip,
        }}
      >
        {children}
      </TimerContext.Provider>
    </>
  );
};
