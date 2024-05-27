import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { WikiContext } from "./context";
import { ArticleArray } from "./articleList";
import { CustomRecipes } from "./customRecipes";

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
    <>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkGfm]}
        children={article}
      />
    </>
  );
};
