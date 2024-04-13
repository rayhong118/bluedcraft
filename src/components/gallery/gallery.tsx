import * as React from "react";
import { Image, ImageFit } from "@fluentui/react/lib/Image";
import { useBoolean } from "@fluentui/react-hooks";
import {
  DefaultButton,
  Dialog,
  IIconProps,
  Icon,
  IconBase,
  IconButton,
  Modal,
} from "@fluentui/react";
export const Gallery = () => {
  interface imageData {
    description: string;
    src: string;
  }
  const imageList: imageData[] = [
    { description: "test image", src: "/imageAssets/bg-main-0.png" },
    { description: "test image", src: "/imageAssets/bg-main-1.png" },
    { description: "test image", src: "/imageAssets/bg-main-3.jpg" },
    { description: "test image", src: "/imageAssets/bg-main-0.png" },
    { description: "test image", src: "/imageAssets/bg-main-0.png" },
  ];
  const [showModal, { toggle: toggleShowModal }] = useBoolean(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);

  const buttonLeftProps: IIconProps = {
    iconName: "back",
    styles: { root: { fontWeight: "bold", fontSize: "2rem" } },
  };
  const buttonRightProps: IIconProps = {
    iconName: "forward",
    styles: { root: { fontWeight: "bold", fontSize: "2rem" } },
  };
  return (
    <div className="adaptive-margin">
      <h2>Gallery 相册</h2>
      <div className="image-list">
        {imageList.map((image, index) => (
          <Image
            className="image-preview"
            loading="lazy"
            src={image.src}
            imageFit={ImageFit.contain}
            onClick={() => {
              toggleShowModal();
              setSelectedImageIndex(index);
            }}
          />
        ))}
      </div>

      <Modal isOpen={showModal} onDismiss={toggleShowModal}>
        <div className="image-panel">
          {/* <DefaultButton
            iconProps={buttonLeftProps}
            onClick={() => console.log("shit")}
          /> */}
          <IconButton
            className="gallery-nav-button"
            iconProps={buttonLeftProps}
            disabled={!selectedImageIndex}
            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
          />

          <Image
            loading="lazy"
            shouldFadeIn={true}
            src={imageList[selectedImageIndex]?.src}
            imageFit={ImageFit.contain}
            onClick={toggleShowModal}
          />
          <IconButton
            className="gallery-nav-button"
            iconProps={buttonRightProps}
            disabled={selectedImageIndex === imageList.length - 1}
            onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
          />

          {/* <DefaultButton iconProps={buttonRightProps} /> */}
        </div>
      </Modal>
    </div>
  );
};
