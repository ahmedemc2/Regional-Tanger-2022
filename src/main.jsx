import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";

// 5 -
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
