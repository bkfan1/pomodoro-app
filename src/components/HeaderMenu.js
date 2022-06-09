import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SettingsForm from "./SettingsForm";

export default function HeaderMenu() {
  const { theme } = useContext(ThemeContext);
  const [showTimeSettings, setShowTimeSettings] = useState(false);
  return (
    <>
      <menu className="flex w-full p-3 items-center justify-end">
        <button
          onClick={() => setShowTimeSettings(!showTimeSettings)}
          className="text-2xl"
        >
          <i className="bi bi-gear" />
        </button>
      </menu>
      {showTimeSettings ? (
        <>
          <div
            className={`fixed z-50 flex flex-col items-center justify-center w-full h-full ${theme}`}
          >
            <SettingsForm />
          </div>
        </>
      ) : null}
    </>
  );
}
