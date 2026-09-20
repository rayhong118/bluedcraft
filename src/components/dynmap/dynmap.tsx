import "./dynmap.scss";
import Box from "@mui/material/Box";

export const Dynmap = () => {
  return (
    <div className="page dynmap-page">
      <Box
        component="img"
        src="/imageAssets/dynmap/background.png"
        alt="Dynmap Background"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
};

