import { createContext } from "react";

export const WikiContext = createContext({
  selectedArticleId: "",
  setSelectedArticleId: (articleId: string) => {},
});
