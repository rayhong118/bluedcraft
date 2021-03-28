import React from "react";
export const Home = () => {
  // use local storage to check if need to display newbie guide
  // user can manually dismiss the guide
  return (
    <div id="homePage">
      <div className="parallax-container">
        <img
          className="background"
          src="/imageAssets/2021-03-04_20.32.11.png"
        />
        <div className="foreground" id="pageTitle">
          <h1>梦の世界</h1>
        </div>
        <img
          className="background"
          src="/imageAssets/2021-03-05_20.40.00.png"
        />
        <div className="foreground">
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
        </div>

        <div className="parallax-p">
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里
          新手请看这里新手请看这里新手请看这里新手请看这里 END
        </div>
      </div>
    </div>
  );
};
