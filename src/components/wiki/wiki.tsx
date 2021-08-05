import {
  faAngleLeft,
  faExclamationTriangle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "../../shared/constants/constants";
import { WikiData } from "./articleList";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
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
  const [wikiArticle, setWikiArticle] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<WikiArticle[]>([]);

  // const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let newSearchText = e.currentTarget.value;
  //   setSearchText(newSearchText);
  //   let newSearchResult = WikiData.filter((data) =>
  //     data.title.includes(newSearchText)
  //   );
  //   setSearchResult(newSearchResult || []);
  // };

  useEffect(() => {
    let pathName = history.location.pathname;
    let articleId = pathName.split("/").pop();

    let articleData = WikiData.find((data) => data.id.toString() === articleId);
    console.log(articleData);
    setWikiArticleId(articleData ? articleData.id : undefined);
    setWikiArticle(articleData?.content || "");

    console.log("path change", articleId, "data", articleData?.content);
  }, [history.location.pathname]);

  if (wikiArticleId == undefined)
    return (
      <>
        <ListOfArticles listOfArticles={WikiData} />
      </>
    );
  else return <Article article={""} />;
};
