import React from "react";
import ReactDOM from "react-dom/client";
import { Env, printSharedCount } from "./sharedFile";
import { Counter } from "./components/Counter";

printSharedCount("popup");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Counter env={Env.Popup} />
  </React.StrictMode>
);
