import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

export const createWikiTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: { main: mode === "dark" ? "#a8c7fa" : "#0b57d0" },
    background: { default: mode === "dark" ? "#131314" : "#f8f9fa", paper: mode === "dark" ? "#1e1f20" : "#ffffff" },
    text: { primary: mode === "dark" ? "#e3e3e3" : "#1f1f1f", secondary: mode === "dark" ? "#a8abb0" : "#5f6368" },
    divider: mode === "dark" ? "#3c4043" : "#e3e5e8",
  },
  typography: {
    fontFamily: 'Roboto, "Noto Sans SC", "Microsoft YaHei", Arial, sans-serif',
    h1: { fontSize: "2rem", fontWeight: 500, lineHeight: 1.4 },
    h2: { fontSize: "1.35rem", fontWeight: 500, lineHeight: 1.5 },
    body1: { fontSize: "0.9375rem", lineHeight: 1.85 },
    button: { textTransform: "none" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 8, minHeight: 38, paddingTop: 4, paddingBottom: 4 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 24, fontSize: "0.875rem" } } },
    MuiLink: { defaultProps: { underline: "hover" } },
  },
});
