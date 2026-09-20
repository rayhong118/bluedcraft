import { useContext } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "../../shared/components/card/card.js";
import { WikiArticleGroup } from "./articleList.js";
import { WikiContext } from "./context.js";

interface ListOfArticlesProps {
  listOfArticles: WikiArticleGroup[];
}

export const IndexOfArticles: React.FC<ListOfArticlesProps> = ({
  listOfArticles,
}) => {
  const { setSelectedArticleId } = useContext(WikiContext);
  return (
    <div className="wiki-article-list">
      {listOfArticles.map((article) => {
        return (
          <Card fluid key={`card${article.id}`} title={article.name}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {article.articles.map((item) => {
                return (
                  <Link
                    className="link-to-article"
                    key={"article" + item.id}
                    to={`${item.id}`}
                    onClick={(_) => setSelectedArticleId(`${item.id}`)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </Box>
          </Card>
        );
      })}
    </div>
  );
};

