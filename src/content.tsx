import React from "react";
import ReactDOM from "react-dom/client";
import { Env, printSharedCount } from "./sharedFile";
import { Counter } from "./components/Counter";

printSharedCount("content");

const popup = document.createElement("div");
popup.id = "root";
document.body.appendChild(popup);
popup.style.zIndex = "9999999999";
popup.style.width = "300px";
popup.style.height = "200px";
popup.style.backgroundColor = "white";
popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Counter env={Env.Content} />
  </React.StrictMode>
);
