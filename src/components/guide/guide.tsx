import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/constants/constants";

export const Guide = () => {
  return (
    <div id="guide">
      <h1>如果你还没加入本服务器：</h1>
      <ul>
        <li>加入审核群(336752653)，阅读群公告</li>
        <li>
          按照<a href="https://cloud.bluedcraft.com/offer/apply/">入服申请单</a>
          完成基础信息填写
        </li>
        <li>将申请表私发给审核</li>
        <li>剩余步骤审核将视情况而定</li>
        <li>审核完毕，加入主群后可以退出审核群</li>
        <li>*请勿将自己账号信息公开在群内</li>
      </ul>
      <h1>如果你已经加入本服务器：</h1>
      <ul>
        <li>填入主群公告中的域名地址</li>
        <li>通过大厅进入主服</li>
        <li>首次进入所在权限组不拥有任何权限，请通过/spawn前往平川获取</li>
        <li>到达平川后请沿着地面指示线找到 路人甲 NPC，通过对话获取权限</li>
        <li>届时你已获取能够在服务器正常游玩的基础权限</li>
        <li>
          后续内容详细请阅 <Link to={ROUTES.WIKI}>服务器百科</Link>
        </li>
      </ul>
    </div>
  );
};
