import React, { useContext, useEffect, useState } from "react";
import { SearchBox, SearchBoxChangeEvent, InputOnChangeData, makeStyles, tokens } from "@fluentui/react-components";
import {
  NavCategory,
  NavCategoryItem,
  NavDrawer,
  NavDrawerBody,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";

import { useLocation } from "react-router-dom";
import { ListOfArticles, WikiArticleGroup, WikiArticle } from "./articleList";
import { WikiContext } from "./context";

const useStyles = makeStyles({
  nav: {
    backgroundColor: tokens.colorNeutralBackground3,
    width: "100%",
    height: "100%",
    position: "relative",
    marginLeft: "auto"
  },
})

export const WikiNav = () => {
  const [listOfArticles = ListOfArticles, setListOfArticles] = useState<WikiArticleGroup[]>();
  const location = useLocation();

  useEffect(() => {
    setListOfArticles(ListOfArticles);
  }, [location.pathname]);

  function searchArticle(
    event?: SearchBoxChangeEvent,
    data?: InputOnChangeData
  ) {
    if (data) {
      let linkGroups: WikiArticle[] = [];
      let groups: WikiArticleGroup[] = []
      ListOfArticles.forEach((group) => {
        let flag = false;
        group.articles.forEach((link) => {
          if (link.name.indexOf(data.value) >= 0) {
            flag = true;
            linkGroups.push(link);
          }
        });
        if(flag){
          groups.push({
            id: group.id,
            name: group.name,
            articles: linkGroups
          })
        }
      });
      setListOfArticles(groups);
    } else {
      setListOfArticles(ListOfArticles);
    }
  }

  const { setSelectedArticleId } = useContext(WikiContext);
  const styles = useStyles();
  return (
    <div className="wiki-nav">
      <SearchBox
        placeholder="Search"
        appearance="underline"
        onChange={searchArticle}
      />
      <NavDrawer
        className={styles.nav}
        open={true}
        type="inline"
        onNavItemSelect={(e, item) => {
          e?.preventDefault();
          if (item?.value) setSelectedArticleId(item?.value.toString());
        }}
      >
        <NavDrawerBody>
          {
            listOfArticles.map((data) => {
              return (
                <React.Fragment>
                  <NavCategory key={data.id} value={data.id}>
                    <NavCategoryItem>
                      {data.name}
                    </NavCategoryItem>
                    <NavSubItemGroup>
                      {data.articles.map((article) => {
                        return (
                          <NavSubItem key={"nav" + article.id} value={`${article.id}`}>{article.name}</NavSubItem>
                        )
                      })}
                    </NavSubItemGroup>
                  </NavCategory>
                </React.Fragment>
              )
            })
          }
        </NavDrawerBody>

      </NavDrawer>
    </div>
  );
};
