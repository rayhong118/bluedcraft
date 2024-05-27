import { useNavigate } from "react-router-dom";
import { Article } from "./article";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { IIconProps } from "@fluentui/react/lib/Icon";

export interface IWikiContext {
  selectedArticleId: number;
}

export const Wiki = () => {
  const navigate = useNavigate();
  const faAngleLeft: IIconProps = { iconName: "back" };

  return (
    <div className="wiki-container wiki-list">
      <DefaultButton
        iconProps={faAngleLeft}
        text="返回"
        onClick={() => {
          navigate(-1);
        }}
        allowDisabledFocus
      />
      <Article />
    </div>
  );
};
