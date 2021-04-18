import React from "react";
export const Home = () => {
  // use local storage to check if need to display newbie guide
  // user can manually dismiss the guide
  return (
    <div id="homePage">
      <div className="parallax-container">
        <img
          className="background"
          src="/imageAssets/bg-main-1.jpg"
          alt="main background 1"
        />
        <div className="foreground" id="pageTitle">
          <h1>梦の世界</h1>
          <h2>认真|负责|友爱|公益</h2>
        </div>
        <div className="foreground">
          <div className="foreground-content">
            梦の世界成立于2012年7月28日，我们以认真|负责|友爱|公益为目标来维护服务器，服务器成立以来虽然有不少的坎坷但是没有什么困难能阻挡我们前进脚步！我们拥有严格的管理制度，为有素质的玩家们提供良好的游戏环境，从未出现，也永远不会出现滥用权限的管理！我们能向你保证服务器素质以及零熊孩子！
          </div>
        </div>
        <img
          className="background"
          src="/imageAssets/bg-main-2.jpg"
          alt="main background 2"
        />

        <div className="foreground">
          <div className="foreground-content">
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
    </div>
  );
};
