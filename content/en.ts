export const en = {
  nav: {
    links: [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "awards", label: "Awards" },
      { id: "contact", label: "Contact" },
    ],
    langButton: "中",
  },
  hero: {
    greeting: "HEY, I'M",
    name: "Jinhao Chen",
    tagline: "I teach robots to find their way — in simulation, and out of it.",
    cta: "See my work",
    contactCta: "Get in touch",
    keywords: [
      "Robotics",
      "Reinforcement Learning",
      "Multi-Agent Systems",
      "SLAM & Navigation",
      "Sim-to-Real",
      "Machine Learning",
    ],
  },
  about: {
    heading: "About",
    title: "Simulation is where I start. Reality is the goal.",
    paragraphs: [
      "I'm a software engineering undergrad at Beijing Institute of Technology. What pulls me in: multi-agent games, reinforcement learning, and how intelligent systems decide what to do in complex, messy environments.",
      "Over the past two years I've been moving algorithms out of textbooks and into simulators — and whenever possible, onto real robots: a PPO navigation policy for robot teams at the Chinese Academy of Sciences, a self-driving race car for a national competition, a robot arm that learns from human demonstrations.",
      "The gap between simulation and the real world is exactly the kind of problem I want to keep working on.",
    ],
    stats: [
      { value: "3.77", label: "GPA / 4.0" },
      { value: "6+", label: "Projects built" },
      { value: "4", label: "Awards won" },
    ],
  },
  skills: {
    heading: "Skills",
    title: "Tools I think in",
    groups: [
      {
        name: "Robotics & Simulation",
        items: ["ROS", "Gazebo", "SLAM", "Path Planning", "Autonomous Navigation"],
      },
      {
        name: "Machine Learning",
        items: ["PyTorch", "Reinforcement Learning (PPO)", "Imitation Learning", "YOLO / Computer Vision"],
      },
      {
        name: "Programming",
        items: ["Python", "C++", "C", "Java", "SQL"],
      },
      {
        name: "Web & Tools",
        items: ["TypeScript", "React / Next.js", "Node.js", "HTML / CSS", "Git"],
      },
    ],
  },
  experience: {
    heading: "Experience",
    title: "Where I've worked",
    jobs: [
      {
        org: "Institute of Automation, Chinese Academy of Sciences",
        lab: "State Key Lab of Multimodal Artificial Intelligence Systems",
        role: "Research Intern",
        period: "Jul — Sep 2025",
        bullets: [
          "Built and debugged the interface connecting our reinforcement learning stack to the Gazebo physics simulator, so policies could be validated in far more realistic environments.",
          "Owned the PPO core of a distributed multi-robot navigation project: implementation, two-stage training, and relentless tuning. With an RVO-shaped reward, the final policy reached a near-zero collision rate in the classic circle-crossing benchmark.",
        ],
      },
    ],
  },
  projects: {
    heading: "Projects",
    title: "Things I've built",
    items: [
      {
        title: "Multi-Robot Navigation with PPO",
        badge: "Research · CASIA",
        description:
          "Distributed navigation policies for robot teams, trained with PPO and an RVO-inspired reward. Near-zero collisions in the circle-crossing scenario, where every robot cuts through a shared center to swap positions.",
        tech: ["Python", "PyTorch", "PPO", "Gazebo"],
      },
      {
        title: "A Robot Arm That Learns by Watching",
        badge: "3rd Prize · GOSIM LeRobot Hackathon",
        description:
          "End-to-end arm control: teleoperated demonstrations → imitation-learning dataset → policy training → real-time inference on an Ascend-powered physical arm. The full sim-to-real loop, closed.",
        tech: ["LeRobot", "Dora", "Imitation Learning", "Ascend"],
      },
      {
        title: "Autonomous Racing, Sim & Street",
        badge: "National 3rd Prize · RAICOM",
        description:
          "A self-driving race car for both virtual and physical tracks: SLAM mapping with gmapping / cartographer / hector, a custom local planner, and control tuning that cut reaction time by 20%.",
        tech: ["ROS", "Gazebo", "SLAM", "LiDAR"],
      },
      {
        title: "LoRa Smart-Farm Platform",
        badge: "Silver · Century Cup",
        description:
          "IoT monitoring for agriculture: a LoRa sensor network feeding a Node.js backend, plus a live dashboard I designed myself — charts, real-time readings, and alert pop-ups.",
        tech: ["LoRa", "Node.js", "JavaScript", "IoT"],
      },
      {
        title: "Python Data Pipeline",
        badge: "Coursework → Research Article",
        description:
          "Scrapy crawlers feeding Pandas pipelines, classic ML models (decision trees, SVM) for analysis, and five kinds of Matplotlib visualizations. Wrote up the findings on ML in drug manufacturing.",
        tech: ["Scrapy", "Pandas", "scikit-learn", "Matplotlib"],
      },
      {
        title: "This Website",
        badge: "You're looking at it",
        description:
          "A bilingual portfolio designed and built from scratch — custom i18n, scroll-driven animation, no template in sight. The repo doubles as my web-dev writing sample.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
      },
    ],
  },
  awards: {
    heading: "Awards",
    title: "Proof it worked",
    items: [
      {
        name: "RAICOM Robot Developer Competition",
        detail: "National 3rd Prize · Provincial 1st Prize",
        year: "2024",
      },
      {
        name: "GOSIM ADORA LeRobot Hackathon",
        detail: "3rd Prize",
        year: "2025",
      },
      {
        name: "National Encouragement Scholarship",
        detail: "For academic performance",
        year: "2024",
      },
      {
        name: "Outstanding Peer Mentor",
        detail: "Beijing Institute of Technology",
        year: "2024",
      },
    ],
  },
  contact: {
    heading: "Contact",
    title: "Let's talk.",
    text: "Robots, reinforcement learning, or something you want to build — my inbox is open.",
    emailLabel: "Say hello",
    email: "2280621282@qq.com",
  },
  footer: {
    credit: "Designed & built by Jinhao Chen",
    tech: "Next.js · TypeScript · Tailwind CSS",
  },
};

export type Dictionary = typeof en;
