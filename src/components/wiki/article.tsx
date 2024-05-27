import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { WikiContext } from "./context";

export const Article: React.FC = () => {
  const { selectedArticleId } = useContext(WikiContext);
  const [article, setArticle] = useState<string>("");
  useEffect(() => {
    let path = `/wikiArticles/${selectedArticleId}.md`;
    fetch(path)
      .then((response) => response.text())
      .then((text) => {
        setArticle(text);
      });
  }, [selectedArticleId]);
  return (
    <>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkGfm]}
        children={article}
      />
    </>
  );
};
