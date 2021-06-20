import { useEffect } from "react";
import { Guide } from "./guide";
import "./guide.scss";

const GuideComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Guide />
    </div>
  );
};

export default GuideComponent;
