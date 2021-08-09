import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface ArticleProps {
  article: number;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  const [shit, setShit] = useState<string>("");
  useEffect(() => {
    let path = `/wikiArticles/${article}.md`;
    console.log("path", path);
    fetch(path)
      .then((response) => response.text())
      .then((text) => {
        setShit(text);
      });
  }, [article]);
  return (
    <>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={shit} />
    </>
  );
};