import React from "react";
import "./styles/scss/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import Routers from "./routes";
import ErrorBoundary from "@components/sharedcomponents/ErrorBoundaries";

const App = () => {
  return (
    <ErrorBoundary>
      <Routers />
    </ErrorBoundary>
  );
};

export default App;
