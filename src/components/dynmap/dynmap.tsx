import React from "react";
import "./dynmap.scss";
export const Dynmap = () => {
  return (
    <div>
      Dynmap
      <div className="dynmap-container">
        <iframe
          src="http://mc.bluedcraft.com:2333/"
          title="W3Schools Free Online Web Tutorials"
          className="dynmap-iframe"
        />
      </div>
    </div>
  );
};
