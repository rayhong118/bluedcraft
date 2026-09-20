import { Wiki } from "./wiki.js";
import { WikiNav } from "./nav.js";
import "./wiki.scss";
import { useEffect, useState } from "react";
import { WikiContext } from "./context.js";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const WikiComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedArticleId, setSelectedArticleId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [selectedArticleId]);

  return (
    <WikiContext.Provider value={{ selectedArticleId, setSelectedArticleId }}>
      <div className="page adaptive-margin">
        <h2>Wiki 百科</h2>
        <Button
          variant="outlined"
          className="nav-panel-button"
          onClick={() => setIsOpen(true)}
          sx={{ mb: 2, textTransform: "none" }}
        >
          目录
        </Button>
        <div className="wiki-page">
          <Drawer
            anchor="left"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            slotProps={{
              paper: {
                sx: { width: 280, p: 2 },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
                百科目录
              </Typography>
              <IconButton size="small" onClick={() => setIsOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <WikiNav />
          </Drawer>
          <WikiNav />
          <Wiki />
        </div>
      </div>
    </WikiContext.Provider>
  );
};
export default WikiComponent;

