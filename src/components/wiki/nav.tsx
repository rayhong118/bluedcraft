import { useEffect, useState } from "react";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import {
  Nav,
  INavStyles,
  INavLinkGroup,
  INavLink,
} from "@fluentui/react/lib/Nav";
import { IIconProps } from "@fluentui/react/lib/Icon";
import { WikiArticle } from "./wiki";
import { useNavigate, useLocation } from "react-router-dom";

const navStyles: Partial<INavStyles> = {
  root: { width: "100%", position: "relative", marginLeft: "auto" },
};
const searchIcon: IIconProps = {
  iconName: "FaSearch",
  styles: { root: { color: "#333" } },
};

const navLinkGroups: INavLinkGroup[] = [];

interface ListOfArticlesProps {
  listOfArticles: WikiArticle[];
}

export const WikiNav: React.FC<ListOfArticlesProps> = ({ listOfArticles }) => {
  const [linkGroups = [], setLinkGroups] = useState<INavLinkGroup[]>();
  const navigate = useNavigate();
  const location = useLocation();

  useState(() => {
    if (navLinkGroups.length === 0) {
      listOfArticles.forEach((data) => {
        let links: INavLink[] = [];
        data.list.forEach((element) => {
          links.push({
            key: "nav" + element.id,
            name: element.title,
            url: `${data.catalog}/${element.id}`,
          });
        });
        let group = {
          name: data.title,
          expandAriaLabel: `Expand ${data.catalog} section`,
          collapseAriaLabel: `Collapse ${data.catalog} section`,
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
        onLinkClick={(e, event) => {
          e?.preventDefault();
          if (event) navigate(event.url);
        }}
      />
    </div>
  );
};
