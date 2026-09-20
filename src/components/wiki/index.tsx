import { useMemo, useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Wiki } from "./wiki.js";
import { WikiNav } from "./nav.js";
import { WikiContext } from "./context.js";
import { createWikiTheme } from "./theme.js";
import "./wiki.scss";

const WikiComponent = () => {
  const [selectedArticleId, setSelectedArticleId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { palette: { mode } } = useTheme();
  const theme = useMemo(() => createWikiTheme(mode), [mode]);
  const selectArticle = (articleId: string) => {
    setIsOpen(false);
    setSelectedArticleId(articleId);
  };
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [selectedArticleId]);

  return (
    <ThemeProvider theme={theme}>
      <WikiContext.Provider value={{ selectedArticleId, setSelectedArticleId: selectArticle }}>
        <Box className="page wiki-shell" data-theme={mode} sx={{ bgcolor: "background.default", color: "text.primary" }}>
          <Box className="wiki-toolbar">
            <Button className="nav-panel-button" size="small" startIcon={<MenuIcon />} onClick={() => setIsOpen(true)}>目录</Button>
          </Box>
          <Box className="wiki-page">
            <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)} slotProps={{ paper: { sx: { width: 280, maxWidth: "90vw", p: 2, boxSizing: "border-box" } } }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                <Typography variant="subtitle2">百科目录</Typography>
                <IconButton aria-label="关闭百科目录" size="small" onClick={() => setIsOpen(false)}><CloseIcon /></IconButton>
              </Box>
              <WikiNav />
            </Drawer>
            <WikiNav />
            <Wiki />
          </Box>
        </Box>
      </WikiContext.Provider>
    </ThemeProvider>
  );
};
export default WikiComponent;
