import { useEffect, useState } from "react";
import FooterComponent from "../../shared/components/footer";
export const Home = () => {
  // use local storage to check if need to display newbie guide
  // user can manually dismiss the guide
  //const bannerImgUrl = "/imageAssets/bg-main-3.jpg";

  interface BannerImage {
    url: string;
    description: string;
  }

  // TODO: add a list of banner images
  const listOfBannerImg: BannerImage[] = [
    { url: "/imageAssets/bg-main-0.png", description: "平川车站-服务器出生点" },
    {
      url: "/imageAssets/bg-main-1.png",
      description: "平川-高雅雕塑-鸽民纪念广场",
    },
    { url: "/imageAssets/bg-main-3.jpg", description: "旧平川-现代城市" },
  ];

  const [bannerImg, setBannerImg] = useState<BannerImage>(listOfBannerImg[2]);
  useEffect(() => {
    setBannerImg(getRandomImage());
  }, []);

  const getRandomImage = () => {
    let index = Math.floor(Math.random() * listOfBannerImg.length);
    return listOfBannerImg[index];
  };

  return (
    <div id="homePage" className="page">
      <div className="banner">
        <img src={bannerImg.url} alt={bannerImg.description} />

        <div id="pageTitle">
          <h1>梦の世界</h1>
          <h2>认真|负责|友爱|公益</h2>
        </div>
        <div id="bannerImgDesc">
          <h3>{bannerImg.description}</h3>
        </div>
      </div>

      <h1 className="paragraph">公益的心 永不改变</h1>

      <div id="featureListTitle">
        <h1>服务器特色</h1>
      </div>

      <div className="list-of-feature">
        <div className="feature">
          <img src="/imageAssets/ironchestplate_icon32.png" alt="vanilla" />
          <h2 className="title">原版生存</h2>
          <h5 className="subtitle"> 一切都还是最原汁原味的样子</h5>
        </div>
        <div className="feature">
          <img
            src="/imageAssets/woodenaxe_icon32.png"
            alt="construction team"
          />
          <h2 className="title">高水平建筑团队</h2>
          <h5 className="subtitle">
            从现代城市，到古典村落，再到日式城堡，服务器的建筑团队期待你的加入
          </h5>
        </div>
        <div className="feature">
          <img src="/imageAssets/fishingrod_icon32.png" alt="mini game" />
          <h2 className="title">小游戏</h2>
          <h5 className="subtitle">紧张刺激的足球游戏</h5>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};
