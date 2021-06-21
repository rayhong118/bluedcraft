import React, { useEffect, useState } from "react";
import {
  faImages,
  faMap,
  faFutbol,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import { Grid, Segment } from "semantic-ui-react";
import FooterComponent from "../../shared/components/footer";
import { faBook, faServer } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Home = () => {
  // use local storage to check if need to display newbie guide
  // user can manually dismiss the guide
  //const bannerImgUrl = "/imageAssets/bg-main-3.jpg";

  const listOfNavBox = [
    {
      url: ROUTES.GUIDE,
      icon: faCompass,
      title: "新人须知",
      description: "新玩家与有加入意向的玩家请看这里",
      bgImgUrl: "",
    },
    {
      url: ROUTES.WIKI,
      icon: faBook,
      title: "服务器百科",
      description: "条目完善中",
      bgImgUrl: "",
    },
    {
      url: ROUTES.DYNMAP,
      icon: faMap,
      title: "卫星地图",
      description: "",
      bgImgUrl: "",
    },
    {
      url: ROUTES.SERVICE,
      icon: faServer,
      title: "服务状态",
      description: "",
      bgImgUrl: "",
    },
  ];
  const listOfBannerImg = [{ url: "", description: "" }];

  const [bannerImgUrl, setBannerImgUrl] = useState<string>(
    "/imageAssets/bg-main-2.jpg"
  );
  useEffect(() => {
    const dateNow = new Date();
    const hourNow = dateNow.getHours();
  }, []);

  return (
    <div id="homePage" className="page">
      <div className="banner">
        <img src={bannerImgUrl} alt="" />

        <div id="pageTitle">
          <h1>梦の世界</h1>
          <h2>认真|负责|友爱|公益</h2>
        </div>
        <div id="bannerImgDesc">
          <h3>平川——现代城市</h3>
        </div>
      </div>

      <div className="list-of-nav">
        {listOfNavBox.map((navBox, index) => {
          return (
            <Link className="nav-box" to={navBox.url} key={`navBox${index}`}>
              <h1>
                <FontAwesomeIcon className="nav-icon" icon={navBox.icon} />{" "}
                {navBox.title}
              </h1>
              <h3>{navBox.description}</h3>
            </Link>
          );
        })}
      </div>

      <h1 className="paragraph">公益的心 永不改变</h1>

      <div id="featureListTitle">
        <h1>服务器特色</h1>
      </div>

      <div className="list-of-feature">
        <div className="feature">原版生存</div>
        <div className="feature">高水平建筑团队</div>
        <div className="feature">小游戏</div>
      </div>

      <FooterComponent />
    </div>
  );
};
