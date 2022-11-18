import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import { COMMANDS } from "../utils/constants";

export default function useAlan(setUserCommand) {
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
          setUserCommand(commandData);

          switch (commandData.command) {
            case COMMANDS.HOME: {
              console.log("MENU HOME");
              break;
            }
            case COMMANDS.COMMANDS: {
              console.log("MENU COMMANDS");
              break;
            }
            case COMMANDS.PICTURES: {
              console.log("MENU PICTURES");
              break;
            }
            case COMMANDS.CANVAS: {
              console.log("MENU CANVAS");
              break;
            }
            case COMMANDS.SEARCH: {
              console.log("MENU SEARCH");
              break;
            }

            default:
              console.log("DEFAULT");
              return;
          }
          return commandData.command;
        },
      })
    );
  }, []);

  return null;
}
