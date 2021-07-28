import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import testMD from "../data/test.md";

export const StoreSetupGuidePage = ({}) => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    fetch(testMD)
      .then((response) => response.text())
      .then((text) => {
        setText(text);
      });
  }, []);

  return <ReactMarkdown rehypePlugins={[rehypeRaw]} children={text} />;
};
