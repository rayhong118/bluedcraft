import { Article } from "./article.js";
import { useContext } from "react";
import { IndexOfArticles } from "./indexOfArticles.js";
import { ListOfArticles } from "./articleList.js";
import { WikiContext } from "./context.js";

export interface IWikiContext {
  selectedArticleId: number;
}

export const Wiki = () => {
  const { selectedArticleId } = useContext(WikiContext);
  
  if (selectedArticleId === "")
    return (
      <div className="wiki-container">
        <IndexOfArticles listOfArticles={ListOfArticles} />
      </div>
    );
  else {
    return (
      <div className="wiki-container wiki-list">
        <Article />
      </div>
    );
  }
};
