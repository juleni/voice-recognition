import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState();

  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        top: "15px",
        left: "15px",
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: (commandData) => {
          console.log(commandData);
        },
      })
    );
  }, []);

  return null;
}
