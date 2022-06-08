import { useState, createContext, useRef, useContext, useEffect } from "react";
import { TimerContext } from "./TimerContext";

export const SoundEffectsContext = createContext();

export const SoundEffectsProvider = ({ children }) => {
  const { remainingMinutes, remainingSeconds } = useContext(TimerContext);
  const [muteSoundEffects, setMuteSoundEffects] = useState(false);
  const audioTag = useRef();

  useEffect(() => {
    if (remainingMinutes === 0 && remainingSeconds === 0) {
     if(!muteSoundEffects){
        audioTag.current.play();
     }
    }
  }, [remainingMinutes, remainingSeconds, muteSoundEffects]);

  return (
    <>
      <SoundEffectsContext.Provider
        value={{ muteSoundEffects, setMuteSoundEffects, audioTag }}
      >
        {children}
      </SoundEffectsContext.Provider>
    </>
  );
};
