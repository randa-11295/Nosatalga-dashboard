import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Common/theme";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClint/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
