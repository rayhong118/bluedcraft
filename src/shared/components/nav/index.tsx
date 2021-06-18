import { faImages, faMap, faFutbol } from "@fortawesome/free-regular-svg-icons";
import { faBook, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

import "./nav.scss";

interface navBarLink {
  path: string;
  icon?: IconDefinition;
  zh: string;
  en?: string;
}
const NavComponent = () => {
  const navBarLinks: navBarLink[] = [
    {
      path: ROUTES.WIKI,
      zh: "百科",
      icon: faBook,
    },
    {
      path: ROUTES.DYNMAP,
      zh: "卫星地图",
      icon: faMap,
    },
    {
      path: ROUTES.GALLERY,
      zh: "相册",
      icon: faImages,
    },
    {
      path: ROUTES.GALLERY,
      zh: "活动",
      icon: faFutbol,
    },
  ];
  return (
    <div className="nav-component">
      <NavLink className="nav-link" to="/">
        <img src="/imageAssets/logo.png" alt="logo" />
      </NavLink>
      {navBarLinks.map((link, index) => {
        return (
          <NavLink
            key={`navlink${index}`}
            className="nav-link"
            activeClassName="nav-link-active"
            to={link.path}
          >
            {link.icon && (
              <FontAwesomeIcon className="nav-icon" icon={link.icon} />
            )}
            {link.zh}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavComponent;
