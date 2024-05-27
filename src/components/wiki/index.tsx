import { Wiki } from "./wiki";
import { WikiNav } from "./nav";
import "./wiki.scss";
import { useEffect, useState } from "react";
import { WikiContext } from "./context";

const WikiComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedArticleId, setSelectedArticleId] = useState("");

  return (
    <WikiContext.Provider value={{ selectedArticleId, setSelectedArticleId }}>
      <div className="page adaptive-margin">
        <h2>Wiki 百科</h2>
        <div className="wiki-page ">
          <WikiNav />
          <Wiki />
        </div>
      </div>
    </WikiContext.Provider>
  );
};
export default WikiComponent;
