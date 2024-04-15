import { useEffect } from "react";
import { Gallery } from "./gallery";
import "./gallery.scss";

const GalleryComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page adaptive-margin">
      <Gallery />
    </div>
  );
};

export default GalleryComponent;
