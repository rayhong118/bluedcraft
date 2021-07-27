import {
  faAngleLeft,
  faExclamationTriangle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "../../shared/constants/constants";
import  StoreSetupGuidePage  from "./pages/storeSetupGuide";
import { WikiData } from "./wikiData";

interface WikiImgUrl {
  imgUrl: string;
}

interface WikiParagraph {
  text: string[];
}

export interface WikiArticle {
  title: string;
  description?: string;
  content?: (WikiImgUrl | string)[];
}

interface WikiTable {
  headers: string[];
  body: string[][];
}
const listOfArticles: string[] = WikiData.map((article) => {
  return article.title;
});

export const Wiki = () => {
  const history = useHistory();
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [wikiArticle, setWikiArticle] = useState<WikiArticle>();
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<WikiArticle[]>([]);
  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newSearchText = e.currentTarget.value;
    setSearchText(newSearchText);
    let newSearchResult = WikiData.filter((data) =>
      data.title.includes(newSearchText)
    );
    setSearchResult(newSearchResult || []);
  };

  useEffect(() => {
    let pathName = history.location.pathname;
    let articleTitle = pathName.split("/").pop();

    if (articleTitle === "wiki") setArticleTitle("");
    else {
      setArticleTitle(articleTitle || "");
      setWikiArticle(WikiData.find((data) => data.title == articleTitle));
    }
  }, [history.location.pathname]);
  if (!articleTitle || !wikiArticle)
    return (
      <div className="wiki-container">
        {articleTitle && !wikiArticle && (
          <div id="wikiNoResult">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            你所要访问的百科文档"{articleTitle}"不存在
          </div>
        )}
        <div className="wiki-search">
          <label>搜索标题：</label>
          <input
            placeholder="输入关键字"
            value={searchText}
            onChange={(e) => handleSearchTextChange(e)}
          />
          <button
            onClick={() => {
              setSearchText("");
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {searchText && (
          <div id="wikiSearchResult">
            <h3>百科搜索结果：</h3>
            <b>关键字：{searchText}</b>

            {searchResult.length === 0 ? (
              <div className="wiki-article-list">未找到结果</div>
            ) : (
              <div className="wiki-article-list">
                {searchResult.map((article, index, filteredArray) => {
                  return (
                    <Link
                      className="link-to-article"
                      key={"article" + index}
                      to={`${ROUTES.WIKI}/${article.title}`}
                    >
                      {article.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <div>
          <h3>现有百科文档列表：</h3>
          <div className="wiki-article-list">
            {WikiData.map((article, index) => {
              return (
                <Link
                  className="link-to-article"
                  key={"article" + index}
                  to={`${ROUTES.WIKI}/${article.title}`}
                >
                  {article.title}
                </Link>
              );
            })}
          </div>
        </div>

        <StoreSetupGuidePage />
      </div>
    );
  else
    return (
      <div className="wiki-container">
        <Link to={ROUTES.WIKI}>
          <FontAwesomeIcon icon={faAngleLeft} />
          返回百科列表
        </Link>
        <h3>{wikiArticle.title}</h3>
        <div>{wikiArticle.description}</div>
        <div>
          {wikiArticle.content?.map((item, index) => {
            if (typeof item === "string")
              return <p key={"item" + index}>{item}</p>;
            else
              return (
                <p key={"item" + index}>
                  <img src={item.imgUrl} />
                </p>
              );
          })}
        </div>
      </div>
    );
};
