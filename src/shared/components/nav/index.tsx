import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

import "./nav.scss";
import { Toolbar, ToolbarButton,makeStyles,mergeClasses,tokens } from "@fluentui/react-components";
import { BookGlobeRegular, ImageRegular, VideoClipRegular, MapRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  toolbar: {
   background: tokens.colorNeutralBackground1,
  }
})

const NavComponent = () => {
  const navigate = useNavigate();
  const styles = useStyles();
  return <Toolbar className={mergeClasses("nav-component",styles.toolbar)}>
    <ToolbarButton
      key="home"
      id="bluedcraft"
      onClick={() => navigate("/")}
    >Bluedcraft 梦の世界</ToolbarButton>
    <ToolbarButton
      key="wiki"
      onClick={() => navigate(ROUTES.WIKI)}
      icon={<BookGlobeRegular />}
    >百科</ToolbarButton>
    <ToolbarButton
      key="gallery"
      onClick={() => navigate(ROUTES.GALLERY)}
      icon={<ImageRegular />}
    >相册</ToolbarButton>
    <ToolbarButton
      key="videos"
      onClick={() => navigate(ROUTES.VIDEOS)}
      icon={<VideoClipRegular />}
    >视频</ToolbarButton>
    {/* <ToolbarButton
      key="dynmap"
      disabled={true}
      onClick={() => navigate(ROUTES.DYNMAP)}
      icon={<MapRegular />}
    >卫星地图</ToolbarButton> */}
  </Toolbar >;
};

export default NavComponent;
