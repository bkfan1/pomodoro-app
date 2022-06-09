import PomodoroApp from "./components/PomodoroApp";
import { SoundEffectsProvider } from "./context/SoundEffectsContext";
import { ThemeProvider } from "./context/ThemeContext";
import { TimerProvider } from "./context/TimerContext";

function App() {
  return (
    <>
      <TimerProvider>
        <ThemeProvider>
          <SoundEffectsProvider>
            <div className="App">
              <PomodoroApp />
            </div>
          </SoundEffectsProvider>
        </ThemeProvider>
      </TimerProvider>
    </>
  );
}

export default App;
