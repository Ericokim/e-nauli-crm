import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import ThemedSuspense from "./components/ThemedSuspense";
import { ConfirmationDialogProvider } from "./components/Alert";
import { ContextProvider } from "./context/ContextProvider";
import App from "./App";
import store from "./store";
import "./assets/styles/tailwind.css";
import "./assets/styles/tailwind.output.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfirmationDialogProvider>
      <ContextProvider>
        <Provider store={store}>
          <Suspense fallback={<ThemedSuspense />}>
            <App />
          </Suspense>
        </Provider>
      </ContextProvider>
    </ConfirmationDialogProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
