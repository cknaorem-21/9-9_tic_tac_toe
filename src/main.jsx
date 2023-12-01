import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MatrixContext, MatrixContextProvider } from "./Contexts/MatrixContext";
import { PlayerContext, PlayerContextProvider } from "./Contexts/PlayerContext";
import { ActiveContextProvider } from "./Contexts/ActiveContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MatrixContextProvider>
      <PlayerContextProvider>
        <ActiveContextProvider>
          <App />
        </ActiveContextProvider>
      </PlayerContextProvider>
    </MatrixContextProvider>
  </React.StrictMode>
);
