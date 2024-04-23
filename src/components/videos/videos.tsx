export const Videos = () => {
  interface VideoData {
    title: string;
    src: string;
  }
  const disableAutoPlayQueryParam = "&autoPlay=false";
  const videosList: VideoData[] = [
    {
      title: "高雅雕塑",
      src: "//player.bilibili.com/player.html?aid=871979890&bvid=BV1CV4y1e7LA&cid=1224386065&p=1",
    },
    {
      title: "平川施工进度更新 2023春季",
      src: "//player.bilibili.com/player.html?aid=693632576&bvid=BV1s24y1679y&cid=988296824&p=1",
    },
    {
      title: "洛卡古迹1：资本庵",
      src: "//player.bilibili.com/player.html?aid=761535932&bvid=BV1G64y147UD&cid=367758957&p=1",
    },
    {
      title: "洛卡古迹2：狗资本雕塑",
      src: "//player.bilibili.com/player.html?aid=632764105&bvid=BV15b4y1U7jw&cid=403571343&p=1",
    },
    {
      title: "足球是方的1：观战足球比赛",
      src: "//player.bilibili.com/player.html?aid=499320989&bvid=BV1NK411M7y9&cid=228105548&p=1",
    },
    {
      title: "足球是方的2：参与足球比赛",
      src: "//player.bilibili.com/player.html?aid=456763865&bvid=BV1F5411h7Jq&cid=228106080&p=1",
    },
  ];
  return (
    <div>
      <h2>Videos 视频</h2>

      <div className="videos-list">
        {videosList.map((video, index) => {
          return (
            <div className="video-tile" key={"videos" + index}>
              <h3>{video.title}</h3>
              <iframe
                loading="lazy"
                title={video.title}
                src={video.src + disableAutoPlayQueryParam}
                allowFullScreen={true}
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};
