import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";

export const Gallery = () => {
  interface imageData {
    description: string;
    src: string;
  }
  const imageList: imageData[] = [
    { description: "test image", src: "/imageAssets/dynmap/background.png" },
    { description: "test image", src: "/imageAssets/bg-main-0.png" },
    { description: "test image", src: "/imageAssets/bg-main-1.png" },
    { description: "test image", src: "/imageAssets/bg-main-3.jpg" },
    { description: "test image", src: "/imageAssets/gallery/tsf1.png" },
    { description: "test image", src: "/imageAssets/gallery/tsf2.png" },
    { description: "test image", src: "/imageAssets/gallery/tsf3.png" },
    { description: "test image", src: "/imageAssets/gallery/xuecheng1.png" },
    { description: "test image", src: "/imageAssets/gallery/xuecheng2.png" },
    { description: "test image", src: "/imageAssets/gallery/yangfang1.png" },
    { description: "test image", src: "/imageAssets/gallery/yangfang2.png" },
    { description: "test image", src: "/imageAssets/gallery/yangfang3.png" },
    { description: "test image", src: "/imageAssets/gallery/yangfang4.png" },
    { description: "test image", src: "/imageAssets/gallery/yangfang5.png" },
    { description: "test image", src: "/imageAssets/gallery/yangfang6.png" },
    { description: "test image", src: "/imageAssets/gallery/yangfang7.png" },
    { description: "test image", src: "/imageAssets/gallery/yangfang8.png" },
  ];
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);

  const toWebp = (url: string) => {
    // In dev mode, .webp files don't exist in public/ — return original to avoid 404
    if (import.meta.env.DEV) return url;
    return url.replace(/\.(png|jpe?g)$/i, '.webp');
  };

  return (
    <>
      <h2>Gallery 相册</h2>
      <div className="image-list">
        {imageList.map((image, index) => (
          <img
            key={`img-${index}`}
            className="image-preview"
            loading="lazy"
            src={toWebp(image.src)}
            alt={image.description}
            style={{ objectFit: "cover", cursor: "pointer" }}
            onClick={() => {
              setShowModal(true);
              setSelectedImageIndex(index);
            }}
          />
        ))}
      </div>

      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              overflow: "visible",
              m: { xs: 1, sm: 2 },
            },
          },
        }}
      >
        <Box
          className="image-panel"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            maxHeight: "90vh",
          }}
        >
          <IconButton
            className="gallery-nav-button"
            disabled={selectedImageIndex === 0}
            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
            sx={{
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
              "&.Mui-disabled": { opacity: 0.3, color: "white" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
          <Box
            component="img"
            loading="lazy"
            src={toWebp(imageList[selectedImageIndex]?.src)}
            alt={imageList[selectedImageIndex]?.description}
            onClick={() => setShowModal(false)}
            sx={{
              maxWidth: "calc(100vw - 120px)",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: 1,
              cursor: "pointer",
            }}
          />
          <IconButton
            className="gallery-nav-button"
            disabled={selectedImageIndex === imageList.length - 1}
            onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
            sx={{
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
              "&.Mui-disabled": { opacity: 0.3, color: "white" },
            }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
};

