import { Wiki } from "./wiki";
import { WikiNav } from "./nav";
import { WikiData } from "./articleList";
import "./wiki.scss";

const WikiComponent = () => {
  return (
    <div className="wiki-page">
      <div className="wiki-nav">
        <WikiNav listOfArticles={WikiData} />
      </div>
      <div className="wiki-list">
        <Wiki />
      </div>
    </div>
  );
};
export default WikiComponent;
