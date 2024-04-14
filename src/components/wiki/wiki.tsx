import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WikiData } from "./articleList";
import { ListOfArticles } from "./listOfArticles";
import { Article } from "./article";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { IIconProps } from "@fluentui/react/lib/Icon";

export interface WikiArticle {
  catalog: string;
  title: string;
  list: {
    id: number;
    title: string;
    description?: string;
    content?: string;
  }[];
}

export const Wiki = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [wikiArticleId, setWikiArticleId] = useState<number>();
  const faAngleLeft: IIconProps = { iconName: "back" };

  useEffect(() => {
    let pathName = location.pathname;
    let pathNameGroup = pathName.split("/");
    let articleId = pathNameGroup.pop();
    let catlogId = pathNameGroup.pop();
    let catlogData = WikiData.find((catalog) => catalog.catalog === catlogId);
    let articleData;
    if (catlogData !== undefined) {
      articleData = catlogData.list.find(
        (data) => data.id.toString() === articleId
      );
    }
    setWikiArticleId(articleData ? articleData.id : undefined);
  }, [location.pathname]);
  if (wikiArticleId === undefined)
    return (
      <div className="wiki-container">
        <ListOfArticles listOfArticles={WikiData} />
      </div>
    );
  else
    return (
      <div className="wiki-container">
        {
          <DefaultButton
            iconProps={faAngleLeft}
            text="返回"
            onClick={() => {
              navigate(-1);
            }}
            allowDisabledFocus
          />
        }
        <Article article={wikiArticleId} />
      </div>
    );
};
