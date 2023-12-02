import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MatrixContextProvider } from "./Contexts/MatrixContext";
import { PlayerContextProvider } from "./Contexts/PlayerContext";
import { ActiveContextProvider } from "./Contexts/ActiveContext.jsx";
import { NestedWinnerContextProvider } from "./Contexts/NestedWinnerContext.jsx";
import { CompleteFillContextProvider } from "./Contexts/CompleteFillContext.jsx";
import { WinnerContextProvider } from "./Contexts/WinnerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MatrixContextProvider>
      <PlayerContextProvider>
        <ActiveContextProvider>
          <NestedWinnerContextProvider>
            <CompleteFillContextProvider>
              <WinnerContextProvider>
                <App />
              </WinnerContextProvider>
            </CompleteFillContextProvider>
          </NestedWinnerContextProvider>
        </ActiveContextProvider>
      </PlayerContextProvider>
    </MatrixContextProvider>
  </React.StrictMode>
);
