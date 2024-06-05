import * as React from "react";
import { Image, Button, Dialog, DialogSurface, DialogBody, DialogContent } from "@fluentui/react-components";
import { ArrowLeftRegular, ArrowRightRegular } from "@fluentui/react-icons"
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
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h2>Gallery 相册</h2>
      <div className="image-list">
        {imageList.map((image, index) => (
          <Image
            className="image-preview"
            loading="lazy"
            src={image.src}
            fit="cover"
            onClick={() => {
              setOpen(true);
              setSelectedImageIndex(index);
            }}
          />
        ))}
      </div>

      <Dialog open={open} onOpenChange={(event, data) => setOpen(data.open)}>
        <DialogSurface>
          <DialogBody>
            <div className="image-panel">
              <Button
                className="gallery-nav-button"
                icon={<ArrowLeftRegular />}
                disabled={!selectedImageIndex}
                onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
              />
              <Image
                loading="lazy"
                src={imageList[selectedImageIndex]?.src}
                fit="contain"
                onClick={() => setOpen(false)}
              />
              <Button
                className="gallery-nav-button"
                icon={<ArrowRightRegular />}
                disabled={selectedImageIndex === imageList.length - 1}
                onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
              />
            </div>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
};
