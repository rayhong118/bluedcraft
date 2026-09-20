import React, { useContext, useEffect, useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";

import { useLocation } from "react-router-dom";
import { ListOfArticles } from "./articleList.js";
import { WikiContext } from "./context.js";

interface NavLinkItem {
  key: string;
  name: string;
  url: string;
}

interface NavGroupItem {
  name?: string;
  links: NavLinkItem[];
}

export const WikiNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const { selectedArticleId, setSelectedArticleId } = useContext(WikiContext);

  const initialGroups: NavGroupItem[] = useMemo(() => {
    return ListOfArticles.map((data) => ({
      name: data.name,
      links: data.articles.map((article) => ({
        key: "nav" + article.id,
        name: article.name,
        url: `${article.id}`,
      })),
    }));
  }, []);

  const [linkGroups, setLinkGroups] = useState<NavGroupItem[]>(initialGroups);

  useEffect(() => {
    setSearchTerm("");
    setLinkGroups(initialGroups);
  }, [location.pathname, initialGroups]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.value;
    setSearchTerm(key);

    if (key.trim()) {
      const filtered: NavLinkItem[] = [];
      initialGroups.forEach((group) => {
        group.links.forEach((link) => {
          if (link.name.toLowerCase().includes(key.toLowerCase())) {
            filtered.push(link);
          }
        });
      });
      setLinkGroups([{ name: "搜索结果", links: filtered }]);
    } else {
      setLinkGroups(initialGroups);
    }
  };

  return (
    <Box className="wiki-nav" sx={{ width: { xs: "100%", md: 240 }, flexShrink: 0 }}>
      <TextField
        fullWidth
        variant="standard"
        placeholder="搜索文章..."
        value={searchTerm}
        onChange={handleSearch}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#666" }} />
              </InputAdornment>
            ),
          },
        }}
        sx={{ mb: 2 }}
      />
      <List component="nav" dense disablePadding>
        {linkGroups.map((group, groupIdx) => (
          <Box key={`group-${groupIdx}`} sx={{ mb: 1.5 }}>
            {group.name && (
              <ListSubheader
                disableSticky
                sx={{
                  lineHeight: "28px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#0072dc",
                  bgcolor: "transparent",
                  px: 1,
                }}
              >
                {group.name}
              </ListSubheader>
            )}
            {group.links.map((link) => (
              <ListItemButton
                key={link.key}
                selected={selectedArticleId === link.url}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedArticleId(link.url);
                }}
                sx={{
                  borderRadius: 1,
                  py: 0.5,
                  px: 1.5,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(0, 114, 220, 0.12)",
                    fontWeight: 600,
                  },
                }}
              >
                <ListItemText
                  primary={link.name}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: "0.9rem",
                        color: selectedArticleId === link.url ? "#0055bb" : "text.primary",
                      },
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </Box>
        ))}
      </List>
    </Box>
  );
};

