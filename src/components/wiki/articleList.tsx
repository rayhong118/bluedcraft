import { WikiArticle } from "./wiki";

export const WikiData: WikiArticle[] = [
  {
    catalog: "basic",
    title: "基础",
    list: [{
      id: 0,
      title: "玩家商店使用指南",
      description: "创建玩家店铺",
    },
    {
      id: 1,
      title: "官方收购价格",
      description: "",
    },
    {
      id: 2,
      title: "建筑师考核",
      description: "关于建筑师等级和各级考核要求",
    },
    {
      id: 3,
      title: "基础指令",
      description: "",
      content: `",`,
    },
    ]
  },
  {
    catalog: "town",
    title: "城镇",
    list: [{
      id: 4,
      title: "城镇",
      description: "城镇详细介绍",
    }]
  },
  // {
  //   id: 0,
  //   title: "卡片",
  //   description: "",
  //   content: ["访问 http://help.bluedcraft.com/plugin/"],
  // },
  // {
  //   id: 0,
  //   title: "烹饪",
  //   description: "",
  //   content: ["访问 http://help.bluedcraft.com/plugin/"],
  // },
  // {
  //   id: 0,
  //   title: "载具",
  //   description: "",
  //   content: ["访问 http://help.bluedcraft.com/plugin/"],
  // },
];
