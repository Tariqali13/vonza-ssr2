import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import App from "../components/App";
import configureStore from "../store/configureStore";
import { createMemoryHistory } from "history";
const store = configureStore();
export const history = createMemoryHistory();

ReactDOM.hydrate(
  <ReduxProvider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
    ,
  </ReduxProvider>,
  document.getElementById("root")
);
