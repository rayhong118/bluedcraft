import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./dynmap.scss";
export const Dynmap = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="page">
      <iframe
        src="http://mc.bluedcraft.com:2333/login.html"
        title="Bluedcraft Server Map"
        className="dynmap-iframe"
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="dynmap-loading">
          <FontAwesomeIcon icon={faCircleNotch} spin size="4x" />
        </div>
      )}
    </div>
  );
};
