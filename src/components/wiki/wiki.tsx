import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { WikiData } from "./articleList";
import { ListOfArticles } from "./listOfArticles";
import { Article } from "./article";

export interface WikiArticle {
  id: number;
  title: string;
  description?: string;
  content?: string;
}

export const Wiki = () => {
  const history = useHistory();
  const [wikiArticleId, setWikiArticleId] = useState<number>();

  useEffect(() => {
    let pathName = history.location.pathname;
    let articleId = pathName.split("/").pop();

    let articleData = WikiData.find((data) => data.id.toString() === articleId);
    console.log(articleData);
    setWikiArticleId(articleData ? articleData.id : undefined);
  }, [history.location.pathname]);

  if (wikiArticleId == undefined)
    return (
      <div className="wiki-container">
        <ListOfArticles listOfArticles={WikiData} />
      </div>
    );
  else
    return (
      <div className="wiki-container">
        {/* <button
          className="button"
          onClick={() => {
            history.goBack();
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} /> 返回
        </button> */}
        <Article article={wikiArticleId} />
      </div>
    );
};
