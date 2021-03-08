import React from "react";
import "./dynmap.scss";
export const Dynmap = () => {
  return (
    <div className="dynmap-page">
      <div className="dynmap-container">
        <iframe
          src="http://mc.bluedcraft.com:2333/"
          title="Bluedcraft Server Map"
          className="dynmap-iframe"
        />
      </div>
    </div>
  );
};
