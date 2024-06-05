import "./dynmap.scss";
import { Image, ImageProps } from "@fluentui/react-components";
export const Dynmap = () => {
  const backgroundImageProps: ImageProps = {
    fit: "cover",
    src: "/imageAssets/dynmap/background.png",
  };

  return (
    <div className="page dynmap-page">
      <Image  {...backgroundImageProps} />
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
