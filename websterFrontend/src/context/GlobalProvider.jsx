import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import io from "socket.io-client";

export function GlobalProvider(props) {
  const [socket, setSocket] = socket(null);

  useEffect(() => {
    const newSocket = io("ws://localhost:3000", {
      transports: ["websocket"],
      withCredentials: true,
    });

    setSocket(newSocket);

    socket.on("newNotification", (data) => {
      if (data.type === "connectRequest") {

      } else if (data.type === "messageRequest") {

      }
      else if(data.type === "jobAlert") {
      }
      else{

      }

    });

    return () => {
        newSocket.disconnect();
      };
  }, []);

  const context = {
    socket: socket,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}
