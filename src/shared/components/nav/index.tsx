import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants.js";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";

import "./nav.scss";

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
          textTransform: "none",
          fontWeight: 600,
          color: "#333",
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
        sx={{ textTransform: "none", color: "#333", py: 1 }}
      >
        梦の世界
      </Button>
      <Button
        color="inherit"
        startIcon={<MenuBookIcon />}
        onClick={() => {
          navigate(ROUTES.WIKI);
        }}
        sx={{ textTransform: "none", color: "#333", py: 1 }}
      >
        百科
      </Button>
      <Button
        color="inherit"
        startIcon={<PhotoLibraryIcon />}
        onClick={() => {
          navigate(ROUTES.GALLERY);
        }}
        sx={{ textTransform: "none", color: "#333", py: 1 }}
      >
        相册
      </Button>
      <Button
        color="inherit"
        startIcon={<VideocamIcon />}
        onClick={() => {
          navigate(ROUTES.VIDEOS);
        }}
        sx={{ textTransform: "none", color: "#333", py: 1 }}
      >
        视频
      </Button>
    </nav>
  );
};

export default NavComponent;

