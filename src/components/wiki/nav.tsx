import { useEffect, useState } from "react";
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Nav, INavStyles, INavLinkGroup, INavLink } from '@fluentui/react/lib/Nav';
import { IIconProps } from '@fluentui/react/lib/Icon';
import { WikiArticle } from './wiki';
import { useNavigate } from "react-router-dom";

const navStyles: Partial<INavStyles> = { root: { paddingLeft: 28, width: '100%', position: "relative", marginLeft: "auto" } };
const searchIcon: IIconProps = { iconName: 'FaSearch', styles: { root: { color: '#333' } } };

const navLinkGroups: INavLinkGroup[] = []

interface ListOfArticlesProps {
    listOfArticles: WikiArticle[];
}

export const WikiNav: React.FC<ListOfArticlesProps> = ({
    listOfArticles,
}) => {

    const navigate = useNavigate();

    useState(() => {
        if (navLinkGroups.length === 0) {
            listOfArticles.forEach((data) => {
                let links: INavLink[] = [];
                data.list.forEach(element => {
                    links.push({ key: "nav" + element.id, name: element.title, url: `${data.catalog}/${element.id}` });
                });
                navLinkGroups.push({
                    name: data.title,
                    expandAriaLabel: `Expand ${data.catalog} section`,
                    collapseAriaLabel: `Collapse ${data.catalog} section`,
                    links: links
                })
            })
        }
    });

    return (
        <div>
            <SearchBox placeholder="Search" styles={navStyles} iconProps={searchIcon} underlined={true} />
            <Nav styles={navStyles} ariaLabel="Nav" groups={navLinkGroups} onLinkClick={(e, event) => { e?.preventDefault(); if (event) navigate(event.url) }} />
        </div>
    );
};