import { Wiki } from "./wiki";
import { WikiNav } from "./nav";
import { WikiData } from "./articleList";
import { Stack, IStackItemStyles, IStackStyles } from '@fluentui/react';
import "./wiki.scss";

const stackItemStyles: IStackItemStyles = {
  root: {
    maxWidth: 300,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};

const nonShrinkingStackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};

const stackStyles: IStackStyles = {
  root: {
    overflow: 'hidden',
    width: `100%`,
  },
};

const WikiComponent = () => {
  return (
      // TODO: resize
    <div className="wiki-page page">
      <Stack horizontal styles={stackStyles}>
        <Stack.Item grow styles={stackItemStyles}>
          <WikiNav listOfArticles={WikiData} />
        </Stack.Item>
        <Stack.Item grow disableShrink styles={nonShrinkingStackItemStyles} >
          <Wiki />
        </Stack.Item>
      </Stack>
    </div>
  );
};
export default WikiComponent;
