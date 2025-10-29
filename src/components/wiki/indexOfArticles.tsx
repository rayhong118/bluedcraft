import { IStackTokens, Stack } from "@fluentui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/card/card.js";
import { WikiArticleGroup } from "./articleList.js";
import { WikiContext } from "./context.js";

interface ListOfArticlesProps {
  listOfArticles: WikiArticleGroup[];
}

const wrapStackTokens: IStackTokens = { childrenGap: 30 };

export const IndexOfArticles: React.FC<ListOfArticlesProps> = ({
  listOfArticles,
}) => {
  const { setSelectedArticleId } = useContext(WikiContext);
  return (
    <div className="wiki-article-list">
      {listOfArticles.map((article) => {
        return (
          <Card fluid key={`card${article.id}`} title={article.name}>
            <Stack horizontal wrap tokens={wrapStackTokens} >
              {article.articles.map((item) => {
                return (
                  <Link
                    className="link-to-article"
                    key={"article" + item.id}
                    to={`${item.id}`} 
                    onClick={(_)=>setSelectedArticleId(`${item.id}`)}
                  >
                    {item.name}
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
