import React from "react";
import { ROUTES } from "../../constants/constants";

import "./nav.scss";

interface navBarLink {
  path: string;
  zh: string;
  en?: string;
}
const NavComponent = () => {
  const navBarLinks: navBarLink[] = [
    {
      path: ROUTES.WIKI,
      zh: "百科",
    },
    {
      path: ROUTES.DYNMAP,
      zh: "卫星地图",
    },

    {
      path: ROUTES.GALLERY,
      zh: "相册",
    },
  ];
  return (
    <div className="nav-component">
      梦の世界
      {navBarLinks.map((link, index) => {
        return (
          <a key={`navlink${index}`} className="nav-link" href={link.path}>
            {link.zh}
          </a>
        );
      })}
    </div>
  );
};

export default NavComponent;
