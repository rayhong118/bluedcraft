import { useContext, useEffect, useState } from "react";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import {
  Nav,
  INavStyles,
  INavLinkGroup,
  INavLink,
} from "@fluentui/react/lib/Nav";
import { IIconProps } from "@fluentui/react/lib/Icon";

import { useLocation } from "react-router-dom";
import { ListOfArticles } from "./articleList";
import { WikiContext } from "./context";

const navStyles: Partial<INavStyles> = {
  root: { width: "100%", position: "relative", marginLeft: "auto" },
};
const searchIcon: IIconProps = {
  iconName: "search",
  styles: { root: { color: "#333" } },
};

const navLinkGroups: INavLinkGroup[] = [];

export const WikiNav = () => {
  const [linkGroups = [], setLinkGroups] = useState<INavLinkGroup[]>();
  const location = useLocation();

  const listOfArticles = ListOfArticles;

  useState(() => {
    if (navLinkGroups.length === 0) {
      listOfArticles.forEach((data) => {
        let links: INavLink[] = [];
        data.articles.forEach((article) => {
          links.push({
            key: "nav" + article.id,
            name: article.name,
            url: `${article.id}`,
          });
        });
        let group = {
          name: data.name,
          expandAriaLabel: `Expand ${data.id} section`,
          collapseAriaLabel: `Collapse ${data.id} section`,
          links: links,
        };
        navLinkGroups.push(group);
      });
    }
  });

  useEffect(() => {
    setLinkGroups(navLinkGroups);
  }, [location.pathname]);

  function searchArticle(
    event?: React.ChangeEvent<HTMLInputElement>,
    key?: string
  ) {
    if (key) {
      let linkGroups: INavLink[] = [];
      navLinkGroups.forEach((group) => {
        group.links.forEach((link) => {
          if (link.name.indexOf(key) >= 0) linkGroups.push(link);
        });
      });
      setLinkGroups([{ links: linkGroups }]);
    } else {
      setLinkGroups(navLinkGroups);
    }
  }

  const { setSelectedArticleId } = useContext(WikiContext);
  return (
    <div className="wiki-nav">
      <SearchBox
        placeholder="Search"
        styles={navStyles}
        onChange={searchArticle}
        iconProps={searchIcon}
        underlined={true}
      />
      <Nav
        styles={navStyles}
        ariaLabel="Nav"
        groups={linkGroups}
        onLinkClick={(e, item) => {
          e?.preventDefault();
          if (item?.url) setSelectedArticleId(item?.url);
        }}
      />
    </div>
  );
};
