import * as React from "react";
import { Wiki } from "./wiki";
import { WikiNav } from "./nav";
import "./wiki.scss";
import { useEffect, useState } from "react";
import { WikiContext } from "./context";
import { Button, Drawer, DrawerHeader, DrawerHeaderTitle, DrawerBody } from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons"

const WikiComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedArticleId, setSelectedArticleId] = useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [selectedArticleId]);

  return (
    <WikiContext.Provider value={{ selectedArticleId, setSelectedArticleId }}>
      <div className="page adaptive-margin">
        <Button
          className="nav-panel-button"
          onClick={() => setIsOpen(true)}
        >目录</Button>
        <div className="wiki-page">
          <Drawer className="nav-panel" open={isOpen} onOpenChange={(_, { open }) => setIsOpen(open)}>
            <DrawerHeader>
              <DrawerHeaderTitle
                action={
                  <Button
                    appearance="subtle"
                    aria-label="Close"
                    icon={<Dismiss24Regular />}
                    onClick={() => setIsOpen(false)}
                  />
                }
              >
                百科目录
              </DrawerHeaderTitle>
            </DrawerHeader>

            <DrawerBody>
              <WikiNav />
            </DrawerBody>
          </Drawer>
          <WikiNav />
          <Wiki />
        </div>
      </div>
    </WikiContext.Provider>
  );
};
export default WikiComponent;
