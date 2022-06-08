import { useContext } from "react";
import { SoundEffectsContext } from "../context/SoundEffectsContext";
import { TimerContext } from "../context/TimerContext";

export default function SettingsForm() {
  const { workMinutes, setWorkMinutes, restingMinutes, setRestingMinutes } =
    useContext(TimerContext);
    const {muteSoundEffects, setMuteSoundEffects} = useContext(SoundEffectsContext);

  return (
    <>
      <form className="w-72 h-72 flex flex-col gap-4">
        <div className="flex flex-col">
          <label>Work time: {workMinutes} min</label>
          <input
            type="range"
            defaultValue={workMinutes}
            min="5"
            max="55"
            step="5"
            onChange={(e) => setWorkMinutes(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col">
          <label>Resting time: {restingMinutes} min</label>
          <input
            type="range"
            defaultValue={restingMinutes}
            min="5"
            max="55"
            step="5"
            onChange={(e) => setRestingMinutes(Number(e.target.value))}
          />
        </div>

        <div className="">
          <input type="checkbox" className="mr-2" checked={muteSoundEffects} onChange={(e)=>setMuteSoundEffects(!muteSoundEffects)} />
          <label>Mute sound effects</label>
        </div>

        <p className="p-2 text-center bg-gray-800 text-white rounded">
          Slide inputs to change values
        </p>
      </form>
    </>
  );
}
