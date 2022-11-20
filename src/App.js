import { useEffect, useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Commands from "./components/Commands";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Pictures from "./components/Pictures";
import PicturesBak from "./components/PicturesBak";
import PicturesEma from "./components/PicturesEma";
import PicturesJane from "./components/PicturesJane";
import PicturesJulian from "./components/PicturesJulian";
import PicturesLea from "./components/PicturesLea";
import PicturesNufko from "./components/PicturesNufko";

import useAlan from "./hooks/useAlan";
import { COMMANDS } from "./utils/constants";

function App() {
  const [userCommand, setUserCommand] = useState("");
  useAlan(setUserCommand);

  useEffect(() => {
    console.log(" App USE Effect userCommand =" + userCommand);
    console.log(userCommand);
  }, [userCommand]);

  function handleNavClick(commandParam) {
    const userCmd = { command: commandParam };
    setUserCommand(userCmd);
  }

  return (
    <div className="app">
      <Header />
      <Navigation handleNavClick={handleNavClick} />
      {console.log(userCommand.command)}
      YOU TOLD{" "}
      {userCommand.command === undefined
        ? "NOTHING"
        : ': "' + userCommand.command + '"'}
      {(() => {
        switch (userCommand.command) {
          case COMMANDS.HOME: {
            return <Home />;
          }
          case COMMANDS.COMMANDS: {
            return <Commands />;
          }
          case COMMANDS.PICTURES: {
            return <Pictures />;
          }
          case COMMANDS.CANVAS: {
            return <Canvas />;
          }
          case COMMANDS.PICTURES_EMA: {
            return <PicturesEma />;
          }
          case COMMANDS.PICTURES_LEA: {
            return <PicturesLea />;
          }
          case COMMANDS.PICTURES_JANE: {
            return <PicturesJane />;
          }
          case COMMANDS.PICTURES_JULIAN: {
            return <PicturesJulian />;
          }
          case COMMANDS.PICTURES_BAK: {
            return <PicturesBak />;
          }
          case COMMANDS.PICTURES_NUFKO: {
            return <PicturesNufko />;
          }

          default: {
            return <Home />;
          }
        }
      })()}
    </div>
  );
}

export default App;
