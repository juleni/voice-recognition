import { useEffect, useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Commands from "./components/Commands";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Pictures from "./components/Pictures";

import useAlan from "./hooks/useAlan";
import { COMMANDS } from "./utils/constants";

function App() {
  const [userCommand, setUserCommand] = useState("");
  useAlan(setUserCommand);

  useEffect(() => {
    console.log(" App USE Effect userCommand =" + userCommand);
    console.log(userCommand);
  }, [userCommand]);

  return (
    <div className="app">
      <Header />
      <Nav />
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

          default: {
            return <Home />;
          }
        }
      })()}
    </div>
  );
}

export default App;
