import { Link } from "react-router-dom";
import { ROUTES, WIKI_ITEM_TYPES } from "../../shared/constants/constants";

interface WikiArticleSection {
  type?: WIKI_ITEM_TYPES;
  content: String;
}

interface WikiArticle {
  title: string;
  content?: WikiArticleSection[];
}
const wikiArticles: WikiArticle[] = [{ title: "箱子商店" }];

export const Wiki = () => {
  return (
    <div>
      <div>
        List of Items
        <div>
          {wikiArticles.map((article, index) => {
            return (
              <Link
                key={"article" + index}
                to={`${ROUTES.WIKI}/${article.title}`}
              >
                {article.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div>Title of Article</div>
    </div>
  );
};
