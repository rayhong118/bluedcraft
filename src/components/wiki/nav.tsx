import { useContext, useState, useId } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ListOfArticles } from "./articleList.js";
import { WikiContext } from "./context.js";

export const WikiNav = () => {
  const navId = useId();
  const [search, setSearch] = useState("");
  const [closed, setClosed] = useState<number[]>([]);
  const { selectedArticleId, setSelectedArticleId } = useContext(WikiContext);
  const query = search.trim().toLowerCase();
  const groups = ListOfArticles.map((group) => ({ ...group, articles: group.articles.filter((item) => item.name.toLowerCase().includes(query) || group.name.toLowerCase().includes(query)) })).filter((group) => group.articles.length);
  return (
    <Box className="wiki-nav">
      <TextField fullWidth size="small" placeholder="搜索百科" value={search} onChange={(event) => setSearch(event.target.value)}
        slotProps={{ htmlInput: { "aria-label": "搜索百科文章" }, input: { startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment> } }} sx={{ mb: 2.5 }} />
      <List component="nav" aria-label="百科文章" dense disablePadding>
        <ListItemButton selected={!selectedArticleId} onClick={() => setSelectedArticleId("")} sx={{ mb: 2, gap: 1 }}>
          <DescriptionOutlinedIcon sx={{ fontSize: 18, color: "text.secondary" }} />
          <ListItemText primary="概览" slotProps={{ primary: { sx: { fontSize: 14 } } }} />
        </ListItemButton>
        {groups.map((group) => {
          const open = !!query || !closed.includes(group.id);
          return (
            <Box key={group.id} sx={{ mb: 1 }}>
              <ListItemButton aria-expanded={open} aria-controls={`${navId}-group-${group.id}`} onClick={() => setClosed((previous) => previous.includes(group.id) ? previous.filter((id) => id !== group.id) : [...previous, group.id])} sx={{ px: 1, gap: 0.5 }}>
                {open ? <ExpandMoreIcon sx={{ fontSize: 18 }} /> : <ChevronRightIcon sx={{ fontSize: 18 }} />}
                <ListItemText primary={group.name} slotProps={{ primary: { sx: { fontSize: 13, fontWeight: 500 } } }} />
              </ListItemButton>
              <Collapse in={open} id={`${navId}-group-${group.id}`}>
                <Box sx={{ ml: 2, pl: 1, borderLeft: 1, borderColor: "divider" }}>
                  {group.articles.map((item) => (
                    <ListItemButton key={item.id} selected={selectedArticleId === String(item.id)} aria-current={selectedArticleId === String(item.id) ? "page" : undefined} onClick={() => setSelectedArticleId(String(item.id))} sx={{ px: 1.5 }}>
                      <ListItemText primary={item.name} slotProps={{ primary: { sx: { fontSize: 13, color: selectedArticleId === String(item.id) ? "primary.main" : "text.secondary" } } }} />
                    </ListItemButton>
                  ))}
                </Box>
              </Collapse>
            </Box>
          );
        })}
        {!groups.length && <Typography variant="body2" role="status" sx={{ px: 1, py: 2, color: "text.secondary" }}>未找到相关文章，请尝试其他关键词。</Typography>}
      </List>
    </Box>
  );
};
