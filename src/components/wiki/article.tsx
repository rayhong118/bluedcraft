import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface ArticleProps {
  article: number;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  const [shit, setShit] = useState<string>("");
  useEffect(() => {
    let path = `/wikiArticles/${article}.md`;
    fetch(path)
      .then((response) => response.text())
      .then((text) => {
        setShit(text);
      });
  }, [article]);
  return (
    <>
      <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm]} children={shit} />
    </>
  );
};
