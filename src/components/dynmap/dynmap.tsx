import "./dynmap.scss";
import { Image, IImageProps, ImageFit } from "@fluentui/react";
export const Dynmap = () => {
  const backgroundImageProps: IImageProps = {
    imageFit: ImageFit.cover,
    src: "/imageAssets/dynmap/background.png",
  };

  return (
    <div className="page dynmap-page">
      <Image {...backgroundImageProps} />
      {/* <iframe
        src="http://mc.bluedcraft.com:2333/login.html"
        title="Bluedcraft Server Map"
        className="dynmap-iframe"
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="dynmap-loading">
          <FontAwesomeIcon icon={faCircleNotch} spin size="4x" />
        </div>
      )} */}
    </div>
  );
};
