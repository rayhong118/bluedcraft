import { useEffect } from "react";
import { Dynmap } from "./dynmap.js";

const DynmapComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Dynmap />;
};

export default DynmapComponent;
