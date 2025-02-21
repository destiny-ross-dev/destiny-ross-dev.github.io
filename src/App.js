import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Placeholder from "./components/Placeholder";
import "./App.css";
import routes from "./routes";

function App(props) {
  console.log(props);
  const [theme, setTheme] = useState("theme-night");
  const [needsPlaceholder] = useState(false);
  const changeTheme = () => {
    let currentTheme = theme;
    let nextTheme = "";
    theme === "theme-night"
      ? (nextTheme = "theme-day")
      : (nextTheme = "theme-night");
    setTheme(nextTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <div className="App__ThemeIcon-Container">
        <div onClick={changeTheme} className={`App__ThemeIcon ${theme}`} />
      </div>

      {needsPlaceholder ? (
        <Placeholder />
      ) : (
        <div>
          <Header />
          {routes}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
