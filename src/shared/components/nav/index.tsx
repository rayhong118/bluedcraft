import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants.js";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";

import "./nav.scss";

// Shared sx for all nav buttons — hover uses $theme-color (#3390ff) text + $light-gray (#e4f0ff) bg
const navBtnSx = {
  textTransform: "none",
  color: "#333",
  py: 1,
  borderRadius: 1.5,
  transition: "color 0.2s, background-color 0.2s",
  "&:hover": {
    color: "#3390ff",
    backgroundColor: "#e4f0ff",
  },
} as const;

const NavComponent = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-component">
      <Button
        id="bluedcraft"
        color="inherit"
        onClick={() => {
          navigate("/");
        }}
        sx={{
          ...navBtnSx,
          fontWeight: 600,
          py: 1.5,
          px: 2,
          fontSize: "1rem",
        }}
      >
        Bluedcraft 梦の世界
      </Button>
      <Button
        id="bluedcraftMobile"
        color="inherit"
        startIcon={<HomeIcon />}
        onClick={() => {
          navigate("/");
        }}
        sx={navBtnSx}
      >
        梦の世界
      </Button>
      <Button
        color="inherit"
        startIcon={<MenuBookIcon />}
        onClick={() => {
          navigate(ROUTES.WIKI);
        }}
        sx={navBtnSx}
      >
        百科
      </Button>
      <Button
        color="inherit"
        startIcon={<PhotoLibraryIcon />}
        onClick={() => {
          navigate(ROUTES.GALLERY);
        }}
        sx={navBtnSx}
      >
        相册
      </Button>
      <Button
        color="inherit"
        startIcon={<VideocamIcon />}
        onClick={() => {
          navigate(ROUTES.VIDEOS);
        }}
        sx={navBtnSx}
      >
        视频
      </Button>
    </nav>
  );
};

export default NavComponent;

