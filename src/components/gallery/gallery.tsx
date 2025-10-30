import * as React from "react";
import { Image, ImageFit } from "@fluentui/react/lib/Image";
import { useBoolean } from "@fluentui/react-hooks";
import { IIconProps, IconButton, Modal } from "@fluentui/react";
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
  const [showModal, { toggle: toggleShowModal }] = useBoolean(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);

  const toWebp = (url: string) => {
    return url.replace(/\.(png|jpe?g)$/i, '.webp');
  };

  const buttonLeftProps: IIconProps = {
    iconName: "back",
    styles: { root: { fontWeight: "bold", fontSize: "2rem" } },
  };
  const buttonRightProps: IIconProps = {
    iconName: "forward",
    styles: { root: { fontWeight: "bold", fontSize: "2rem" } },
  };
  return (
    <>
      <h2>Gallery 相册</h2>
      <div className="image-list">
        {imageList.map((image, index) => (
          <Image
            className="image-preview"
            loading="lazy"
            src={toWebp(image.src)}
            imageFit={ImageFit.cover}
            onClick={() => {
              toggleShowModal();
              setSelectedImageIndex(index);
            }}
          />
        ))}
      </div>

      <Modal isOpen={showModal} onDismiss={toggleShowModal}>
        <div className="image-panel">
          <IconButton
            className="gallery-nav-button"
            iconProps={buttonLeftProps}
            disabled={!selectedImageIndex}
            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
          />
          <Image
            loading="lazy"
            shouldFadeIn={false}
            src={toWebp(imageList[selectedImageIndex]?.src)}
            imageFit={ImageFit.contain}
            onClick={toggleShowModal}
          />
          <IconButton
            className="gallery-nav-button"
            iconProps={buttonRightProps}
            disabled={selectedImageIndex === imageList.length - 1}
            onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
          />
        </div>
      </Modal>
    </>
  );
};
