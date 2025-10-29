import React from "react";
import { Home } from "./home.js";
import "./home.scss";

const HomeComponent = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Home />;
};

export default HomeComponent;
