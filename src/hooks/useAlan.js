import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";

const COMMANDS = {
  WRITE: "write",
};

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState();

  function write() {
    alanInstance.playText("Writing text");
  }

  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        top: "15px",
        left: "15px",
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: (commandData) => {
          console.log(commandData);
          if (commandData.command === COMMANDS.WRITE) {
            console.log("WRITING SIMETHING");
          }
        },
      })
    );
  }, []);

  return null;
}
