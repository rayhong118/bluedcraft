import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Gallery = () => {
  interface imageData {
    description: string;
    src: string;
  }
  const imageList: imageData[] = [
    {
      description: "服务器卫星地图背景",
      src: "/imageAssets/dynmap/background.png",
    },
    {
      description: "平川车站 — 服务器出生点",
      src: "/imageAssets/bg-main-0.png",
    },
    { description: "平川 — 高雅雕塑广场", src: "/imageAssets/bg-main-1.png" },
    { description: "旧平川 — 现代城市", src: "/imageAssets/bg-main-3.jpg" },
    { description: "平川23 - 1", src: "/imageAssets/gallery/tsf1.png" },
    { description: "平川23 - 2", src: "/imageAssets/gallery/tsf2.png" },
    { description: "平川23 - 3", src: "/imageAssets/gallery/tsf3.png" },
    { description: "雪城 1", src: "/imageAssets/gallery/xuecheng1.png" },
    { description: "雪城 2", src: "/imageAssets/gallery/xuecheng2.png" },
    { description: "羊坊 1", src: "/imageAssets/gallery/yangfang1.png" },
    { description: "羊坊 2", src: "/imageAssets/gallery/yangfang2.png" },
    { description: "羊坊 3", src: "/imageAssets/gallery/yangfang3.png" },
    { description: "羊坊 4", src: "/imageAssets/gallery/yangfang4.png" },
    { description: "羊坊 5", src: "/imageAssets/gallery/yangfang5.png" },
    { description: "羊坊 6", src: "/imageAssets/gallery/yangfang6.png" },
    { description: "羊坊 7", src: "/imageAssets/gallery/yangfang7.png" },
    { description: "羊坊 8", src: "/imageAssets/gallery/yangfang8.png" },
  ];

  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);

  const toWebp = (url: string) => {
    if (import.meta.env.DEV) return url;
    return url.replace(/\.(png|jpe?g)$/i, ".webp");
  };

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const prev = () => setSelectedImageIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setSelectedImageIndex((i) => Math.min(imageList.length - 1, i + 1));

  // Keyboard navigation
  React.useEffect(() => {
    if (!showModal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showModal]);

  // Touch swipe support for mobile
  const touchStartX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 45) {
      prev();
    } else if (deltaX < -45) {
      next();
    }
    touchStartX.current = null;
  };

  const navArrowSx = {
    color: "white",
    bgcolor: "rgba(20,20,20,0.55)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.12)",
    width: { xs: 46, sm: 52 },
    height: { xs: 46, sm: 52 },
    flexShrink: 0,
    transition: "background-color 0.2s, box-shadow 0.2s, transform 0.15s",
    "&:hover": {
      bgcolor: "rgba(51,144,255,0.55)",
      boxShadow: "0 0 18px rgba(51,144,255,0.5)",
      transform: "scale(1.08)",
    },
    "&.Mui-disabled": {
      opacity: 0.2,
      color: "white",
      bgcolor: "rgba(20,20,20,0.3)",
    },
  };

  return (
    <>
      {/* Page header */}
      <div className="gallery-header">
        <h2>Gallery 相册</h2>
        <p className="gallery-subtitle">共 {imageList.length} 张图片</p>
      </div>

      {/* Thumbnail grid */}
      <div className="image-list">
        {imageList.map((image, index) => (
          <div
            key={`img-${index}`}
            className="image-preview-wrap"
            onClick={() => openImage(index)}
          >
            <img
              className="image-preview"
              loading="lazy"
              src={toWebp(image.src)}
              alt={image.description}
            />
            <div className="image-overlay">
              <span className="image-overlay-text">{image.description}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog
        open={showModal}
        // Only close via the X button or Escape key — backdrop click is ignored
        onClose={(_event, reason) => {
          if (reason === "backdropClick") return;
          setShowModal(false);
        }}
        maxWidth={false}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(10, 14, 24, 0.88)",
              backdropFilter: "blur(8px)",
            },
          },
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              overflow: "visible",
              m: 0,
            },
          },
        }}
        sx={{ "& .MuiDialog-container": { alignItems: "center", justifyContent: "center" } }}
      >
        {/* Close button — only way to exit */}
        <IconButton
          onClick={() => setShowModal(false)}
          sx={{
            position: "fixed",
            top: { xs: 12, sm: 16 },
            right: { xs: 12, sm: 16 },
            color: "white",
            bgcolor: "rgba(20,20,20,0.65)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.15)",
            zIndex: 10,
            "&:hover": {
              bgcolor: "rgba(255,80,80,0.75)",
              borderColor: "rgba(255,100,100,0.4)",
            },
            transition: "background-color 0.2s, border-color 0.2s",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          className="image-panel"
          sx={{
            gap: 2,
          }}
        >
          {/* Desktop ← Prev button */}
          <IconButton
            className="desktop-arrow"
            disabled={selectedImageIndex === 0}
            onClick={prev}
            aria-label="Previous image"
            sx={navArrowSx}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Image + caption + mobile controls */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
              width: { xs: "92vw", sm: "min(80vw, 900px)" },
              maxWidth: "900px",
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Box
              component="img"
              src={toWebp(imageList[selectedImageIndex]?.src)}
              alt={imageList[selectedImageIndex]?.description}
              sx={{
                width: "100%",
                maxHeight: { xs: "65vh", sm: "78vh" },
                objectFit: "contain",
                borderRadius: 1.5,
                boxShadow: "0 12px 48px rgba(0,0,0,0.75)",
                display: "block",
                cursor: "default",
              }}
            />
            {/* Caption + counter */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                px: 0.5,
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: { xs: "0.88rem", sm: "0.95rem" },
                  textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                  fontWeight: 500,
                }}
              >
                {imageList[selectedImageIndex]?.description}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.85rem",
                  whiteSpace: "nowrap",
                  ml: 2,
                }}
              >
                {selectedImageIndex + 1} / {imageList.length}
              </Typography>
            </Box>

            {/* Mobile-only bottom navigation buttons */}
            <Box
              className="mobile-arrows"
              sx={{
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                pt: 1,
              }}
            >
              <IconButton
                disabled={selectedImageIndex === 0}
                onClick={prev}
                aria-label="Previous image"
                sx={navArrowSx}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                disabled={selectedImageIndex === imageList.length - 1}
                onClick={next}
                aria-label="Next image"
                sx={navArrowSx}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Desktop → Next button */}
          <IconButton
            className="desktop-arrow"
            disabled={selectedImageIndex === imageList.length - 1}
            onClick={next}
            aria-label="Next image"
            sx={navArrowSx}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
};

