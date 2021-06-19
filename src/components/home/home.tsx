import React, { useEffect, useState } from "react";
import { Grid, Segment } from "semantic-ui-react";
import FooterComponent from "../../shared/components/footer";
export const Home = () => {
  // use local storage to check if need to display newbie guide
  // user can manually dismiss the guide
  //const bannerImgUrl = "/imageAssets/bg-main-3.jpg";

  const listOfNavBox = [{ title: "", description: "", bgImgUrl: "" }];
  const listOfBannerImg = [{ url: "", description: "" }];

  const [bannerImgUrl, setBannerImgUrl] = useState<string>(
    "/imageAssets/bg-main-3.jpg"
  );
  useEffect(() => {
    const dateNow = new Date();
    const hourNow = dateNow.getHours();
    console.log(hourNow);
  }, []);

  return (
    <div id="homePage" className="page">
      <div className="banner">
        <img src={bannerImgUrl} alt="" />

        <div id="pageTitle">
          <h1>梦の世界</h1>
          <h2>认真|负责|友爱|公益</h2>
        </div>
      </div>

      <div className="list-of-nav">
        <div className="nav-box">
          新人须知 新加入服务器的玩家与有意向加入的玩家请看这里
        </div>
        <div className="nav-box">服务器百科</div>
        <div className="nav-box">图册</div>
        <div className="nav-box">新闻</div>
      </div>

      <h3 className="paragraph">
        梦の世界成立于2012年7月28日，我们以认真|负责|友爱|公益为目标来维护服务器。
        服务器成立以来虽然有不少的坎坷但是没有什么困难能阻挡我们前进脚步！
        我们拥有严格的管理制度，为有素质的玩家们提供良好的游戏环境，从未出现，也永远不会出现滥用权限的管理！
        我们能向你保证服务器素质以及零熊孩子！
      </h3>

      <div id="featureListTitle">
        <h1>服务器特色</h1>
      </div>

      <div className="list-of-feature">
        <div className="feature">原版生存</div>
        <div className="feature">高水平建筑团队</div>
        <div className="feature">小游戏</div>
      </div>

      <div>ou</div>

      <FooterComponent />
    </div>
  );
};
