import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
import AuthProvider from "./Authentication";
import { ContextProvider } from './context/ContextProvider';

import "./styles/styles.scss";

require('@solana/wallet-adapter-react-ui/styles.css');

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);