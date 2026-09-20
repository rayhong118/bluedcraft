import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/constants/constants.js";

export const Guide = () => {
  return (
    <div id="guide">
      <h2 className="page-title">Guide 指南</h2>
      <div id="guide1">
        <h3>如果你还没加入本服务器：</h3>
        <div>
          <input type="checkbox" defaultChecked={false} />
          加入审核群(336752653)，阅读群公告
        </div>
        <div>
          <input type="checkbox" defaultChecked={false} />
          按照
          <a href="https://cloud.bluedcraft.com/offer/apply/">入服申请单</a>
          完成基础信息填写
        </div>
        <div>
          <input type="checkbox" defaultChecked={false} />
          将申请表私发给审核,剩余步骤审核将视情况而定
        </div>

        <div>
          <input type="checkbox" defaultChecked={false} />
          审核完毕，加入主群后可以退出审核群
        </div>

        <b>*请勿将自己账号信息公开在群内</b>
      </div>
      <div id="guide2">
        <h3>如果你已经通过审核：</h3>

        <div>
          <input type="checkbox" defaultChecked={false} />
          在主群公告中找到服务器域名地址
        </div>
        <div>
          <input type="checkbox" defaultChecked={false} />
          首次进入所在权限组不拥有任何权限，请通过/spawn前往平川获取
        </div>
        <div>
          <input type="checkbox" defaultChecked={false} />
          到达平川后请找到 路人甲 NPC，通过对话获取权限
        </div>
        <div>
          <input type="checkbox" defaultChecked={false} />
          届时你已获取能够在服务器正常游玩的基础权限
        </div>
        <div>
          后续内容详细请阅 <Link to={ROUTES.WIKI}>服务器百科</Link>
        </div>
      </div>
    </div>
  );
};
