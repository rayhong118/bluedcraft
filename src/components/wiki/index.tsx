import { Wiki } from "./wiki";
import { WikiNav } from "./nav";
import { WikiData } from "./articleList";
import "./wiki.scss";
import { useEffect } from "react";

const WikiComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page adaptive-margin">
      <h2>Wiki 百科</h2>
      <div className="wiki-page ">
        <WikiNav listOfArticles={WikiData} />
        <Wiki />
      </div>
    </div>
  );
};
export default WikiComponent;
