import { Article } from "./article";

export interface IWikiContext {
  selectedArticleId: number;
}

export const Wiki = () => {
  return (
    <div className="wiki-container wiki-list">
      <Article />
    </div>
  );
};
