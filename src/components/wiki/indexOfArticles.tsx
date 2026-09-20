import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { WikiArticleGroup } from "./articleList.js";
import { WikiContext } from "./context.js";
import { DocumentLayout } from "./documentLayout.js";

const descriptions: Record<number, string> = {
  0: "从常用指令和权限开始，了解服务器的基础玩法。",
  1: "了解玩家交易、官方收购与税收规则。",
  2: "认识各个城镇与地区，探索你的下一站。",
  3: "查阅物品、装备和特色玩法的使用说明。",
  4: "查找资源包与聊天相关的常见问题。",
};

export const IndexOfArticles = ({ listOfArticles }: { listOfArticles: WikiArticleGroup[] }) => {
  const { setSelectedArticleId } = useContext(WikiContext);
  return (
    <DocumentLayout contentKey="overview">
      <Typography variant="caption" color="text.secondary">Bluedcraft / 玩家文档</Typography>
      <Typography component="h1" variant="h1" sx={{ mt: 2, mb: 2 }}>概览</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>欢迎查阅 Bluedcraft 百科。这里汇集了入门指南、服务器规则和特色玩法。选择下方主题，或在左侧目录中搜索文章。</Typography>
      <Box className="wiki-overview-sections">
        {listOfArticles.map((group) => (
          <Box component="section" key={group.id} sx={{ pt: 3, pb: 3.5, borderTop: 1, borderColor: "divider" }}>
            <Typography component="h2" variant="h2" sx={{ mb: 1 }}>{group.name}</Typography>
            <Typography color="text.secondary" sx={{ mb: 1.5, fontSize: 14 }}>{descriptions[group.id]}</Typography>
            <Box component="ul" className="wiki-topic-links">
              {group.articles.map((item) => (
                <Box component="li" key={item.id}>
                  <Link component="button" type="button" onClick={() => setSelectedArticleId(String(item.id))} sx={{ display: "inline-flex", alignItems: "center", gap: 1, py: 0.5, textAlign: "left", fontSize: 14, lineHeight: 1.8 }}>
                    {item.name}<ArrowForwardIcon sx={{ fontSize: 14 }} />
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </DocumentLayout>
  );
};
