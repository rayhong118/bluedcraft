import { Link } from "react-router-dom";
import { WikiArticle } from "./wiki";

interface ListOfArticlesProps {
  listOfArticles: WikiArticle[];
}

export const ListOfArticles: React.FC<ListOfArticlesProps> = ({
  listOfArticles,
}) => {
  return (
    <div className="wiki-article-list">
      {listOfArticles.map((article) => {
        return (
          <Link
            className="link-to-article"
            key={"article" + article.id}
            to={`${article.id}`}
          >
            {article.title}
          </Link>
        );
      })}
    </div>
  );
};
