export interface WikiArticle {
  id: number;
  name: string;
  component?: React.JSX.Element;
}

interface WikiArticleGroup {
  id: number;
  name: string;
  articles: WikiArticle[];
}
export const ListOfArticles: WikiArticleGroup[] = [
  {
    id: 0,
    name: "基础 - 新人指引",
    articles: [
      {
        id: 3,
        name: "基础指令",
      },
      {
        id: 30,
        name: "权限组",
      },
    ],
  },
  {
    id: 1,
    name: "经济",
    articles: [
      {
        id: 40,
        name: "玩家交易货物",
      },
      {
        id: 41,
        name: "官方收购价格",
      },
      {
        id: 42,
        name: "税收",
      },
    ],
  },
  {
    id: 2,
    name: "城镇及地区",
    articles: [
      {
        id: 4,
        name: "洛卡",
      },
      {
        id: 5,
        name: "羊坊",
      },
      {
        id: 6,
        name: "雪城",
      },
      {
        id: 7,
        name: "蓝星",
      },
      {
        id: 8,
        name: "彩云",
      },
      {
        id: 9,
        name: "时雨",
      },
      {
        id: 10,
        name: "矿界-普顿",
      },
      {
        id: 11,
        name: "平川",
      },
      {
        id: 12,
        name: "瓦兰",
      },
    ],
  },
  {
    id: 3,
    name: "功能",
    articles: [
      {
        id: 20,
        name: "卡片",
      },
      {
        id: 21,
        name: "烹饪",
      },
      {
        id: 22,
        name: "载具",
      },
      {
        id: 23,
        name: "装备",
      },
      {
        id: 24,
        name: "唱片",
      },
      {
        id: 25,
        name: "武器",
      },
      {
        id: 26,
        name: "商店",
      },
    ],
  },
  {
    id: 4,
    name: "FAQ",
    articles: [
      {
        id: 50,
        name: "资源包",
      },
      {
        id: 51,
        name: "聊天",
      },
    ],
  },
];
