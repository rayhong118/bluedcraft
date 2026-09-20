import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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

  const setRandomImage = () => {
    let index = Math.floor(Math.random() * listOfBannerImg.length);
    setBannerImg(listOfBannerImg[index]);
  };
  useEffect(() => {
    setRandomImage();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("复制成功");
  };

  const goAnchor = (index: string) => {
    if (index)
      document.querySelector(index)?.scrollIntoView({ behavior: "smooth" });
  };

  const toWebp = (url: string) => {
    // In dev mode, .webp files don't exist in public/ — return original to avoid 404
    if (import.meta.env.DEV) return url;
    return url.replace(/\.(png|jpe?g)$/i, '.webp');
  };

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div id="homePage" className="page">
      <div className="banner">
        <picture><source srcSet={toWebp(bannerImg.url)} type="image/webp" /><img src={bannerImg.url} alt={bannerImg.description} /></picture>
        <div id="pageTitle">
          <h1>梦の世界</h1>
          <h2>认真|负责|友爱|公益</h2>
          <Button
            variant="contained"
            onClick={() => setOpenDialog(true)}
            sx={{
              backgroundColor: "#3390ff",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              px: 4,
              py: 1,
              width: "fit-content",
              mb: 8,
              "&:hover": { backgroundColor: "#0072dc" },
            }}
          >
            加入我们
          </Button>
          <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            maxWidth="xs"
            fullWidth
          >
            <DialogTitle sx={{ pb: 1, fontWeight: 600 }}>加入我们</DialogTitle>
            <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: 2, py: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="body1">
                  体验服地址: <strong>mc.bluedcraft.com</strong>
                </Typography>
                <IconButton
                  size="small"
                  aria-label="copy server address"
                  onClick={() => copyToClipboard("mc.bluedcraft.com")}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="body1">
                  审核群(QQ): <strong>336752653</strong>
                </Typography>
                <IconButton
                  size="small"
                  aria-label="copy qq group"
                  onClick={() => copyToClipboard("336752653")}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)}>关闭</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div
          id="more"
          onClick={() => {
            goAnchor("#more-anchor");
          }}
        >
          ↓了解更多
        </div>
        <div id="bannerImgDesc">
          <h3>{bannerImg.description}</h3>
        </div>
      </div>

      <div id="more-anchor" className="paragraph">
        <h1>公益的心 永不改变</h1>
      </div>

      <div className="adaptive-margin bilibili-iframe">
        <iframe
          title="Server intro video"
          src="//player.bilibili.com/player.html?aid=871979890&bvid=BV1CV4y1e7LA&cid=1224386065&p=1&autoPlay=false"
          scrolling="no"
          frameBorder="no"
          allowFullScreen={true}
        ></iframe>
      </div>

      <div className="adaptive-margin">
        <div className="server-intro">
          梦の世界成立于2012年7月28日，我们以认真、负责、友爱和公益为目标来维护服务器。虽然服务器成立以来经历了一些坎坷，但没有什么困难能阻挡我们前进的脚步。我们拥有严格的管理制度，为有素质的玩家们提供良好的游戏环境。从未出现，也永远不会出现滥用权限的管理！我们向你保证，服务器的玩家都具备高素质，而且零熊孩子。
        </div>

        <div className="list-of-points">
          <ul>
            <li>
              <strong>稳定：</strong>
              至今为止，我们已经开服12年。服务器的宗旨是“地球在服务器就在”，我们将会开服到永远！
            </li>
            <li>
              <strong>公益：</strong>
              我们的服务器是100%公益服，没有任何氪金项目。服务器货币（LKD）只能依靠玩家在服务器内的行为赚取。
            </li>
            <li>
              <strong>高版本：</strong>
              谁说老服就不能跟随最新版本？我们的服务器会在新的正式版本发布后第一时间更新服务器端版本，让你无缝体验最新内容！
            </li>
            <li>
              <strong>养老：</strong>
              正在寻找稳定又和谐的集体？快来加入我们吧！我们只欢迎高素质的玩家。
            </li>
            <li>
              <strong>不换周目：</strong>
              在这里，你可以建造你想要的建筑。我们不会更换周目，导致你辛辛苦苦建设的建筑消失。同时，我们对建筑有一系列的鼓励方案。
            </li>
            <li>
              <strong>城镇系统：</strong>
              加入其他玩家的城镇，或者建立自己的城镇！至今为止，服务器内有6大城镇，还有5个以上的玩家组织！
            </li>
            <li>
              <strong>原创核心插件：</strong>
              我们的核心插件均由专业程序员服主亲自编写，不会因为插件原因导致服务器无法跟随最新的Minecraft版本。
            </li>
            <li>
              <strong>多种插件：</strong>
              车辆插件、枪械插件、工业插件……只有你想不到，没有我们做不到！
            </li>
            <li>
              <strong>无需专用客户端：</strong>
              嫌弃下载各种客户端麻烦？在我们的服务器上，你无需担心！可以直接使用官方客户端进入服务器。
            </li>
          </ul>
        </div>
      </div>

      <div id="featureListTitle">
        <h1>服务器特色</h1>
      </div>

      <div className="list-of-feature adaptive-margin">
        <div className="feature">
          <picture><source srcSet={toWebp("/imageAssets/ironchestplate_icon32.png")} type="image/webp" /><img src="/imageAssets/ironchestplate_icon32.png" alt="vanilla" /></picture>
          <h2 className="title">原版生存</h2>
          <h5 className="subtitle"> 一切都还是最原汁原味的样子</h5>
        </div>
        <div className="feature">
          <picture><source srcSet={toWebp("/imageAssets/woodenaxe_icon32.png")} type="image/webp" /><img src="/imageAssets/woodenaxe_icon32.png" alt="construction team" /></picture>
          <h2 className="title">高水平建筑团队</h2>
          <h5 className="subtitle">
            从现代城市，到古典村落，再到日式城堡，服务器的建筑团队期待你的加入
          </h5>
        </div>
        <div className="feature">
          <picture><source srcSet={toWebp("/imageAssets/fishingrod_icon32.png")} type="image/webp" /><img src="/imageAssets/fishingrod_icon32.png" alt="mini game" /></picture>
          <h2 className="title">小游戏</h2>
          <h5 className="subtitle">紧张刺激的足球游戏</h5>
        </div>
      </div>
    </div>
  );
};
