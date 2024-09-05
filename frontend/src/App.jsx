import React from "react";
import useLocalStorage from "use-local-storage"; // or your custom implementation
import "./App.css";
import { Toggle } from "./Components/Toggle"; // Your toggle component

const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", defaultDark);

  // Toggle the dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
      <Toggle isChecked={isDarkMode} handleChange={toggleTheme} />
      <h1>Hello World!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
};

export default App;
