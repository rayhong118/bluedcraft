import { IStackTokens, Stack } from "@fluentui/react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/card/card";
import { WikiArticle } from "./wiki";

interface ListOfArticlesProps {
  listOfArticles: WikiArticle[];
}

const wrapStackTokens: IStackTokens = { childrenGap: 30 };

export const ListOfArticles: React.FC<ListOfArticlesProps> = ({
  listOfArticles,
}) => {
  return (
    <div className="wiki-article-list">
      {listOfArticles.map((article) => {
        return (
          <Card fluid key={`card${article.catalog}`} title={article.title}>
            <Stack horizontal wrap tokens={wrapStackTokens} >
              {article.list.map((item) => {
                return (
                  <Link
                    className="link-to-article"
                    key={"article" + item.id}
                    to={`${article.catalog}/${item.id}`}
                  >
                    {item.title}
                  </Link>
                )
              })}
            </Stack>
          </Card>
        );
      })}
    </div>
  );
};
