import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

import "./nav.scss";
import { CommandBar, ICommandBarItemProps } from "@fluentui/react";

const NavComponent = () => {
  const navigate = useNavigate();

  const items: ICommandBarItemProps[] = [
    {
      key: "home",
      // iconProps: { iconName: "home" },
      id: "bluedcraft",
      text: "Bluedcraft 梦の世界",
      onClick: () => navigate("/"),
    },
    {
      key: "wiki",
      text: "百科",
      onClick: () => navigate(ROUTES.WIKI),
      iconProps: { iconName: "BookAnswers" },
    },
    {
      key: "dynmap",
      text: "卫星地图",
      onClick: () => navigate(ROUTES.DYNMAP),
      iconProps: { iconName: "World" },
      disabled: true,
    },
    {
      key: "gallery",
      text: "相册",
      onClick: () => navigate(ROUTES.GALLERY),
      iconProps: { iconName: "ImagePixel" },
      disabled: true,
    },
  ];

  return <CommandBar items={items} className="nav-component"></CommandBar>;
};

export default NavComponent;
