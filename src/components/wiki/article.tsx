import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { WikiContext } from "./context.js";
import { ArticleArray } from "./articleList.js";
import { CustomRecipes } from "./customRecipes.js";

export const Article: React.FC = () => {
  const { selectedArticleId } = useContext(WikiContext);
  const [article, setArticle] = useState<string>("");
  let selectedArticle = ArticleArray.find(
    (article) => article.id.toString() === selectedArticleId
  );
  useEffect(() => {
    let path = `/wikiArticles/${selectedArticleId}.md`;

    fetch(path)
      .then((response) => response.text())
      .then((text) => {
        setArticle(text);
      });
  }, [selectedArticleId]);
  if (selectedArticle?.customRecipeData)
    return CustomRecipes(selectedArticle.customRecipeData);
  return (
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkGfm]}
        children={article}
        components={{
          // @ts-ignore
          recipe: (props) => {
            let content: string[] = Array.from(props.content.replace(/\|/g, ""));
            let index = new Map<string, string>(props.index.split("|").map((item: string) => {
              let kv = item.split(":");
              return [kv[0], kv[1]];
            }));
            const items = content.map((item: string, i: number) => {
              return item == " " ? <span key={i} className={`item-${i + 1}`} /> : <img key={i} className={`item-${i + 1}`} src={`/imageAssets/wiki/items/${index.get(item)}.png`} />;
            });
            return (
              <span className="wiki-recipe">
                {items}
                <img className="result" src={`/imageAssets/wiki/items/${props.result}.png`} />
              </span>
            );
          },
        }}
      />
  );
};
