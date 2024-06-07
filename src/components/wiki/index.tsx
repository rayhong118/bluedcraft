import { Wiki } from "./wiki";
import { WikiNav } from "./nav";
import "./wiki.scss";
import { useEffect, useState } from "react";
import { WikiContext } from "./context";
import { useBoolean } from "@fluentui/react-hooks";
import { DefaultButton, Panel } from "@fluentui/react";

const WikiComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedArticleId, setSelectedArticleId] = useState("");
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);
  useEffect(() => {
    dismissPanel();
    console.log(selectedArticleId);
  }, [selectedArticleId]);

  return (
    <WikiContext.Provider value={{ selectedArticleId, setSelectedArticleId }}>
      <div className="page adaptive-margin">
        <h2>Wiki 百科</h2>
        <DefaultButton
          className="nav-panel-button"
          text="目录"
          onClick={openPanel}
        />
        <div className="wiki-page">
          <Panel
            className="nav-panel"
            isLightDismiss
            isOpen={isOpen}
            onDismiss={dismissPanel}
            closeButtonAriaLabel="Close"
            headerText="百科目录"
          >
            <WikiNav />
          </Panel>
          <WikiNav />
          <Wiki />
        </div>
      </div>
    </WikiContext.Provider>
  );
};
export default WikiComponent;
