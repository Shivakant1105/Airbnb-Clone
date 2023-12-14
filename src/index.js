import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./Contexts/Context";
import { BrowserRouter } from "react-router-dom";
import SearchProvider from "./Contexts/SearchContext";
import { UserAuthContextProvider } from "./Contexts/AuthContext";
import { DetailsContextProvider } from "./Contexts/DescriptionContext";
// import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DetailsContextProvider>
      <UserAuthContextProvider>
        <UserProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </UserProvider>
      </UserAuthContextProvider>
    </DetailsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
