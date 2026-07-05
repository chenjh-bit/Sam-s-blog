import type { Dictionary } from "./en";

export const zh: Dictionary = {
  nav: {
    links: [
      { id: "about", label: "关于" },
      { id: "skills", label: "技能" },
      { id: "experience", label: "经历" },
      { id: "projects", label: "项目" },
      { id: "awards", label: "荣誉" },
      { id: "contact", label: "联系" },
    ],
    langButton: "EN",
  },
  hero: {
    greeting: "你好，我是",
    name: "陈金豪",
    tagline: "我教机器人认路——从仿真世界，到真实世界。",
    cta: "看看我的作品",
    contactCta: "联系我",
    keywords: [
      "机器人",
      "强化学习",
      "多智能体系统",
      "SLAM 与导航",
      "仿真到现实",
      "机器学习",
    ],
  },
  about: {
    heading: "关于我",
    title: "从仿真出发，以现实为目标。",
    paragraphs: [
      "我是北京理工大学软件工程专业的本科生。多智能体博弈、强化学习、复杂环境中的智能决策——这些问题最让我着迷。",
      "过去两年，我一直在把算法从课本搬进仿真器，并尽可能搬上真实的机器人：在中科院自动化所为多机器人团队训练 PPO 导航策略，为国家级竞赛打造自动驾驶竞速小车，还教会了一只机械臂从人类演示中学习动作。",
      "仿真与现实之间的那道鸿沟，正是我想持续钻研下去的问题。",
    ],
    stats: [
      { value: "3.77", label: "GPA / 4.0" },
      { value: "6+", label: "完成项目" },
      { value: "4", label: "获奖经历" },
    ],
  },
  skills: {
    heading: "技能",
    title: "我常用的工具",
    groups: [
      {
        name: "机器人与仿真",
        items: ["ROS", "Gazebo", "SLAM", "路径规划", "自主导航"],
      },
      {
        name: "机器学习",
        items: ["PyTorch", "强化学习（PPO）", "模仿学习", "YOLO / 计算机视觉"],
      },
      {
        name: "编程语言",
        items: ["Python", "C++", "C", "Java", "SQL"],
      },
      {
        name: "Web 与工具",
        items: ["TypeScript", "React / Next.js", "Node.js", "HTML / CSS", "Git"],
      },
    ],
  },
  experience: {
    heading: "实习经历",
    title: "我工作过的地方",
    jobs: [
      {
        org: "中国科学院自动化研究所",
        lab: "多模态人工智能系统全国重点实验室",
        role: "科研实习生",
        period: "2025.7 — 2025.9",
        bullets: [
          "独立编写并调试了强化学习算法与 Gazebo 物理仿真环境之间的接口，让策略能够在更接近真实的环境中完成验证。",
          "负责分布式多机器人导航项目的 PPO 核心：算法实现、两阶段训练与持续调优。基于倒易速度障碍（RVO）思想塑造奖励函数，最终策略在经典的圆周穿越基准场景中实现了接近零碰撞。",
        ],
      },
    ],
  },
  projects: {
    heading: "项目",
    title: "我做过的东西",
    items: [
      {
        title: "PPO 多机器人导航",
        badge: "科研 · 中科院自动化所",
        description:
          "用 PPO 训练机器人团队的分布式导航策略，以 RVO 思想塑造奖励函数。在所有机器人穿过共享圆心交换位置的经典圆周穿越场景中，实现接近零碰撞。",
        tech: ["Python", "PyTorch", "PPO", "Gazebo"],
      },
      {
        title: "会“看”人学动作的机械臂",
        badge: "三等奖 · GOSIM LeRobot 黑客松",
        description:
          "端到端机械臂控制：遥操作采集演示数据 → 构建模仿学习数据集 → 策略训练 → 部署到昇腾平台驱动的真实机械臂实时推理，跑通从仿真到物理世界的完整闭环。",
        tech: ["LeRobot", "Dora", "模仿学习", "昇腾"],
      },
      {
        title: "自动驾驶竞速：仿真与实车",
        badge: "国家级三等奖 · 睿抗 RAICOM",
        description:
          "面向虚拟与线下赛道的自动驾驶竞速小车：用 gmapping / cartographer / hector 完成 SLAM 建图，自制局部规划器，控制调优让反应速度提升了 20%。",
        tech: ["ROS", "Gazebo", "SLAM", "激光雷达"],
      },
      {
        title: "LoRa 智慧农业平台",
        badge: "银奖 · 世纪杯",
        description:
          "面向农业的物联网监测系统：LoRa 传感网络接入 Node.js 后端，配上我自己设计的实时可视化面板——图表展示、实时读数、异常弹窗告警。",
        tech: ["LoRa", "Node.js", "JavaScript", "物联网"],
      },
      {
        title: "Python 数据管道",
        badge: "课程项目 → 研究文章",
        description:
          "Scrapy 爬虫接入 Pandas 数据管道，用决策树、SVM 等经典机器学习模型做分析，输出五类 Matplotlib 可视化图表，并撰写了机器学习在药物制造领域应用的研究文章。",
        tech: ["Scrapy", "Pandas", "scikit-learn", "Matplotlib"],
      },
      {
        title: "这个网站",
        badge: "你正在看的就是",
        description:
          "从零设计并开发的双语作品集：自实现国际化、滚动驱动动画，没有套任何模板。这个仓库本身，就是我的 Web 开发作品。",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
      },
    ],
  },
  awards: {
    heading: "荣誉",
    title: "一些证明",
    items: [
      {
        name: "睿抗机器人开发者大赛（RAICOM）",
        detail: "国家级三等奖 · 省部级一等奖",
        year: "2024",
      },
      {
        name: "GOSIM ADORA LeRobot 黑客松",
        detail: "三等奖",
        year: "2025",
      },
      {
        name: "国家励志奖学金",
        detail: "学业表现优异",
        year: "2024",
      },
      {
        name: "优秀朋辈导师",
        detail: "北京理工大学",
        year: "2024",
      },
    ],
  },
  contact: {
    heading: "联系",
    title: "聊聊？",
    text: "机器人、强化学习，或者任何你想做的东西——欢迎来信。",
    emailLabel: "打个招呼",
    email: "2280621282@qq.com",
  },
  footer: {
    credit: "由陈金豪设计与开发",
    tech: "Next.js · TypeScript · Tailwind CSS",
  },
};
