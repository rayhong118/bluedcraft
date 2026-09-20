import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { WikiContext } from "./context.js";
import { ArticleArray } from "./articleList.js";
import { CustomRecipes } from "./customRecipes.js";

// In dev mode, .webp files don't exist in public/ — serve originals to avoid 404
const toWebp = (url: string) => {
  if (import.meta.env.DEV) return url;
  return url.replace(/\.(png|jpe?g)$/i, ".webp");
};

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
          // Transform all inline markdown images through toWebp() for production
          img: ({ src, alt, ...rest }) => (
            <img src={toWebp(src ?? "")} alt={alt} {...rest} />
          ),
          // @ts-ignore
          recipe: (props) => {
            let content: string[] = Array.from(props.content.replace(/\|/g, ""));
            let index = new Map<string, string>(props.index.split("|").map((item: string) => {
              let kv = item.split(":");
              return [kv[0], kv[1]];
            }));
            const items = content.map((item: string, i: number) => {
              const pngSrc = `/imageAssets/wiki/items/${index.get(item)}.png`;
              return item == " " ? <span key={i} className={`item-${i + 1}`} /> : <picture key={i}><source srcSet={toWebp(pngSrc)} type="image/webp" /><img className={`item-${i + 1}`} src={pngSrc} /></picture>;
            });
            const resultPng = `/imageAssets/wiki/items/${props.result}.png`;
            return (
              <span className="wiki-recipe">
                {items}
                <picture><source srcSet={toWebp(resultPng)} type="image/webp" /><img className="result" src={resultPng} /></picture>
              </span>
            );
          },
        }}
      />
  );
};
