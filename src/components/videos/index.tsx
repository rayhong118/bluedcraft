import { useEffect } from "react";
import { Videos } from "./videos";
import "./videos.scss";

export const VideosComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page adaptive-margin">
      <Videos />
    </div>
  );
};
