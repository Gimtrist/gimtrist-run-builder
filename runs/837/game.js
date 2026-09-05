(() => {
  "use strict";

  const SAVE_KEY = "taoli-lab-save-v2";
  const LEGACY_SAVE_KEY = "taoli-lab-save-v1";
  const PROFILE_KEY = "taoli-lab-profile-v1";
  const TOTAL_YEARS = 8;
  const MAX_ACTIONS = 4;
  const $ = (id) => document.getElementById(id);
  const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, Math.round(value)));
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = (items) => items[random(0, items.length - 1)];

  const studentNames = "许知遥,陈星河,周小满,林青柚,沈一川,孟夏,顾南乔,唐可可,叶闻笙,苏眠,陆明澈,梁雨棠,姜未央,秦北辰,宋枝枝,温见山,白栀,贺听澜,夏予安,乔木森".split(",");
  const hairColors = ["#3f3340", "#684f45", "#2f4b63", "#7c4f32", "#5f4b78"];
  const shirtColors = ["#8ed0e8", "#f59ea2", "#8fd7a9", "#f8c66a", "#b9a3e6", "#f2a46f"];
  const spriteSlots = [
    [14, 58], [34, 58], [57, 58], [42, 73], [58, 73], [70, 66], [24, 73], [82, 60]
  ];

  const traitBook = {
    slacker: { name: "摸鱼雷达", clue: "总能精准找到没有导师经过的角落", good: "被抽查时更容易翻车", risk: 8 },
    burst: { name: "ddl 爆发型", clue: "平时像休眠火山，截止日前突然喷发", good: "组会可能爆发推进", risk: 4 },
    fragile: { name: "玻璃心天才", clue: "能力很高，但一句重话能让进度冻结", good: "温和指导收益更高", risk: 10 },
    connector: { name: "社交悍匪", clue: "认识隔壁实验室、隔壁学院和隔壁奶茶店", good: "会议与项目事件更好", risk: 3 },
    careful: { name: "复现洁癖", clue: "宁可慢一点，也要把每个图的来源写清楚", good: "降低伦理风险", risk: -4 },
    machine: { name: "论文缝合怪", clue: "能把三份实验记录揉成一张看似合理的图", good: "短期论文快，风险高", risk: 12 },
    justice: { name: "正义雷达", clue: "对署名和补助极其敏感，也极其记仇", good: "公平路线收益高", risk: 14 },
    nightOwl: { name: "夜行动物", clue: "白天困得像缺电，深夜消息秒回", good: "冲刺收益高，压力积累快", risk: 7 }
  };

  const candidateArchetypes = [
    { title: "勤恳新生", program: "硕士", stats: { research: 48, writing: 42, initiative: 55, resilience: 58 }, traits: ["careful", "burst"], tags: ["方向匹配", "稳定"] },
    { title: "天赋型选手", program: "博士", stats: { research: 72, writing: 50, initiative: 46, resilience: 38 }, traits: ["fragile", "burst"], tags: ["灵气很足", "需要保护"] },
    { title: "沟通达人", program: "硕士", stats: { research: 44, writing: 58, initiative: 62, resilience: 52 }, traits: ["connector", "justice"], tags: ["会汇报", "会问问题"] },
    { title: "看起来很忙的人", program: "硕士", stats: { research: 40, writing: 45, initiative: 35, resilience: 63 }, traits: ["slacker", "nightOwl"], tags: ["简历很满", "时间神秘"] },
    { title: "论文工业小能手", program: "博士", stats: { research: 64, writing: 72, initiative: 54, resilience: 48 }, traits: ["machine", "careful"], tags: ["写作快", "边界要讲清"] },
    { title: "跨方向冒险家", program: "硕士", stats: { research: 56, writing: 48, initiative: 68, resilience: 45 }, traits: ["connector", "burst"], tags: ["脑洞大", "不好管"] },
    { title: "沉默卷王", program: "博士", stats: { research: 68, writing: 62, initiative: 74, resilience: 55 }, traits: ["nightOwl", "fragile"], tags: ["自驱强", "不爱求助"] },
    { title: "规则敏感型学生", program: "硕士", stats: { research: 52, writing: 54, initiative: 61, resilience: 50 }, traits: ["justice", "careful"], tags: ["重视公平", "适合清晰制度"] },
    { title: "设备玄学研究员", program: "硕士", minLevel: 2, stats: { research: 58, writing: 44, initiative: 57, resilience: 60 }, traits: ["careful", "slacker"], tags: ["爱拆仪器", "排错快"] },
    { title: "跨校交换生", program: "博士", minLevel: 2, stats: { research: 66, writing: 57, initiative: 69, resilience: 46 }, traits: ["connector", "justice"], tags: ["人脉广", "规则敏感"] },
    { title: "AI 工具狂热者", program: "硕士", minLevel: 3, stats: { research: 62, writing: 70, initiative: 64, resilience: 42 }, traits: ["machine", "nightOwl"], tags: ["产出快", "需要边界"] },
    { title: "反内卷观察员", program: "硕士", minLevel: 3, stats: { research: 50, writing: 62, initiative: 52, resilience: 70 }, traits: ["justice", "connector"], tags: ["会反馈", "抗压稳"] },
    { title: "未来 PI 苗子", program: "博士", minLevel: 4, stats: { research: 78, writing: 70, initiative: 82, resilience: 58 }, traits: ["burst", "justice"], tags: ["潜力高", "不吃画饼"] }
  ];

  const actionDefinitions = [
    { id: "recruit", icon: "门", title: "招生面试", note: "看可见维度，隐藏特质入组后暴露", run: showRecruitment },
    { id: "mentor", icon: "导", title: "单独指导", note: "选一名学生，提升能力与信任", run: showMentorModal },
    { id: "meeting", icon: "会", title: "开组会", note: "推进论文，也可能暴露压力", run: runMeeting },
    { id: "collab", icon: "协", title: "组内协作", note: "让两名学生结对子推进课题", run: showCollabModal },
    { id: "inspect", icon: "查", title: "抽查状态", note: "可能抓到摸鱼，也可能发现真问题", run: runInspection },
    { id: "topic", icon: "题", title: "立项课题", note: "选择研究方向，分配学生推进", run: showTopicModal },
    { id: "research", icon: "文", title: "推进论文", note: "全组论文进度 +，精力 -", run: runResearch },
    { id: "submit", icon: "投", title: "论文投稿", note: "选择期刊档位，录用/返修/拒稿", run: showSubmitModal },
    { id: "project", icon: "项", title: "申请项目", note: "项目进度 +，行政压力 +", run: runProject },
    { id: "title", icon: "升", title: "冲职称", note: "提高职称进度，扩大学生上限", run: runTitle },
    { id: "equipment", icon: "器", title: "添置设备", note: "购买设施，改变长期效率", run: showEquipmentModal },
    { id: "rules", icon: "规", title: "制定规则", note: "补助、署名、毕业要求会影响路线", run: showRulesModal },
    { id: "authorship", icon: "署", title: "署名安排", note: "公平分配，或走地狱梗路线", run: showAuthorshipModal },
    { id: "alumni", icon: "友", title: "校友联络", note: "毕业生会带来回声、资源或新学生", run: showAlumniModal },
    { id: "rest", icon: "休", title: "全组喘口气", note: "精力与压力恢复，进度变慢", run: runRest }
  ];

  const alumniDestinations = [
    { id: "industry", name: "去了工业界", benefit: "横向合作", funds: 10, reputation: 3 },
    { id: "postdoc", name: "继续做博士后", benefit: "学术合作", paper: 12, reputation: 6 },
    { id: "teacher", name: "去了高校任教", benefit: "推荐学生", trust: 5, reputation: 5 },
    { id: "startup", name: "加入创业团队", benefit: "设备赞助", funds: 6, project: 10 },
    { id: "quiet", name: "暂时远离科研", benefit: "真诚问候", trust: 8, risk: -4 }
  ];

  const equipmentCatalog = [
    { id: "whiteboard", name: "会发光的大白板", cost: 12, minLevel: 1, desc: "组会论文收益 +6，学生更容易把问题讲清楚。" },
    { id: "coffeeCorner", name: "咖啡角与零食箱", cost: 14, minLevel: 1, desc: "休息收益提高，学期末学生压力少涨一点。" },
    { id: "workstation", name: "像样的学生工位", cost: 18, minLevel: 2, desc: "论文行动收益 +8，摸鱼倾向小幅下降。" },
    { id: "dataServer", name: "数据服务器", cost: 22, minLevel: 2, desc: "降低伦理风险，设备报错事件更容易转危为安。" },
    { id: "napSofa", name: "午睡沙发", cost: 16, minLevel: 3, desc: "高压学生在学期末更不容易崩溃。" },
    { id: "meetingCam", name: "会议摄像头", cost: 20, minLevel: 3, desc: "会议与合作事件提高声望，但行政压力略升。" }
  ];

  const ruleOptions = {
    subsidy: {
      label: "补助制度",
      normal: { name: "标准补助", desc: "没有惊喜，也没有太多怨气。" },
      generous: { name: "丰厚补助", desc: "每学期经费 -4，信任和抗压更稳。" },
      low: { name: "自力更生", desc: "每学期经费 +4，但压力、摸鱼和匿名墙风险上升。" }
    },
    authorship: {
      label: "署名规则",
      transparent: { name: "贡献透明", desc: "公平署名收益更高，抢一作风险更容易提前暴露。" },
      ambiguous: { name: "默认商量", desc: "保持普通路线，遇事再说。" },
      bossFirst: { name: "导师优先", desc: "论文推进更快，但信任和伦理风险会持续恶化。" }
    },
    graduation: {
      label: "毕业要求",
      balanced: { name: "均衡毕业", desc: "按当前标准培养。" },
      lenient: { name: "支持毕业", desc: "学生更容易毕业，但单篇论文收益略少。" },
      strict: { name: "地狱难度", desc: "论文收益更高，学生压力和离组风险上升。" }
    }
  };

  const topicCatalog = [
    { id: "ai-review", title: "AI 辅助审稿意见拆解", field: "AI+科研", difficulty: 58, risk: 8, paper: 30, reputation: 6, tags: ["快", "热", "边界要清"] },
    { id: "sleep-lab", title: "研究生睡眠与组会表现", field: "科研生态", difficulty: 44, risk: 3, paper: 22, reputation: 5, tags: ["温和", "容易共鸣"] },
    { id: "data-clean", title: "原始数据追踪与复现实验", field: "实验方法", difficulty: 64, risk: -8, paper: 26, reputation: 8, tags: ["慢", "稳", "降风险"] },
    { id: "deadline-model", title: "截止日前爆发行为模型", field: "行为建模", difficulty: 52, risk: 6, paper: 24, reputation: 5, tags: ["ddl", "适合爆发型"] },
    { id: "campus-wall", title: "匿名墙反馈的群体情绪分析", field: "校园观察", difficulty: 48, risk: 12, paper: 20, reputation: 7, tags: ["敏感", "舆情"] },
    { id: "device-failure", title: "实验设备报错语料库", field: "实验室工程", difficulty: 50, risk: 2, paper: 22, reputation: 4, tags: ["设备", "排错"] },
    { id: "authorship-map", title: "署名贡献透明化工具", field: "科研治理", difficulty: 66, risk: -10, paper: 28, reputation: 9, tags: ["公平", "制度"] },
    { id: "industry-small", title: "横向项目小功能复用研究", field: "横向项目", difficulty: 56, risk: 10, paper: 18, reputation: 5, funds: 10, tags: ["来钱", "压榨风险"] },
    { id: "conference-food", title: "学术会议茶歇网络研究", field: "学术社交", difficulty: 42, risk: 1, paper: 18, reputation: 8, tags: ["会议", "社交"] },
    { id: "graduate-path", title: "毕业进度预警仪表盘", field: "培养系统", difficulty: 60, risk: -6, paper: 24, reputation: 6, tags: ["毕业", "管理"] }
  ];

  const journalTiers = [
    { id: "workshop", name: "友好型工作坊", accept: 78, revise: 14, rep: 4, funds: 2, risk: -1, pressure: -4, desc: "录用率高，声望一般，适合稳稳毕业。" },
    { id: "solid", name: "稳妥核心期刊", accept: 56, revise: 28, rep: 8, funds: 4, risk: 0, pressure: 3, desc: "收益和风险都比较均衡。" },
    { id: "top", name: "顶刊冲刺", accept: 28, revise: 42, rep: 17, funds: 8, risk: 4, pressure: 10, desc: "赢了很香，输了全组返修。" },
    { id: "gray", name: "神秘快速通道", accept: 64, revise: 10, rep: 10, funds: 8, risk: 24, pressure: 6, desc: "看起来快得离谱，也危险得很诚实。" }
  ];

  const achievements = [
    { id: "firstPaper", title: "终于不是在投了", desc: "发表第一篇论文", test: (s) => s.papers >= 1 },
    { id: "firstManuscript", title: "真的写完了", desc: "形成第一份可投稿稿件", test: (s) => (s.manuscripts || 0) >= 1 || s.papers >= 1 },
    { id: "firstRecruit", title: "开门招生", desc: "招到第一名学生", test: (s) => s.students.length >= 1 },
    { id: "fullLab", title: "工位告急", desc: "学生达到当前上限", test: (s) => s.students.length >= studentCap(s) },
    { id: "trusted", title: "真导师", desc: "学生信任达到 85", test: (s) => s.trust >= 85 },
    { id: "whistle", title: "红线警报", desc: "伦理风险达到 60", test: (s) => s.risk >= 60 },
    { id: "meeting", title: "组会召唤师", desc: "开 8 次组会", test: (s) => s.actionHistory.meeting >= 8 },
    { id: "slacking", title: "摸鱼捕手", desc: "成功抽查摸鱼 3 次", test: (s) => s.caughtSlacking >= 3 },
    { id: "collab", title: "同门互助", desc: "完成 3 次组内协作", test: (s) => s.collaborations >= 3 },
    { id: "mentor", title: "桃李满门", desc: "至少 4 名学生毕业", test: (s) => s.graduates >= 4 },
    { id: "alumni", title: "校友回声", desc: "联络校友 3 次", test: (s) => s.alumniContacts >= 3 },
    { id: "excellentReview", title: "年度优秀", desc: "年度考核达到优秀", test: (s) => (s.lastReviewScore || 0) >= 75 },
    { id: "equipped", title: "实验室装修队", desc: "添置 3 件设备", test: (s) => (s.equipment || []).length >= 3 },
    { id: "rules", title: "制度上墙", desc: "调整 3 次实验室规则", test: (s) => s.ruleChanges >= 3 },
    { id: "dark", title: "地狱笑话成真", desc: "压榨路线累计 3 次", test: (s) => s.darkChoices >= 3 },
    { id: "clean", title: "清白做人", desc: "第 7 年后伦理风险低于 10", test: (s) => s.year >= 7 && s.risk < 10 }
  ];

  const objectiveDefinitions = [
    { id: "recruit-one", title: "把工位坐热", desc: "招到 1 名学生", progress: (s) => s.students.length, target: () => 1, rewardText: "经费 +8，声望 +2", reward: () => { change("funds", 8); change("reputation", 2); } },
    { id: "first-meeting", title: "开第一次真组会", desc: "完成 1 次组会", progress: (s) => s.actionHistory.meeting || 0, target: () => 1, rewardText: "论文进度 +10，信任 +3", reward: () => { change("paperProgress", 10); change("trust", 3); } },
    { id: "inspect-once", title: "别只看周报", desc: "抽查 1 次学生状态", progress: (s) => s.actionHistory.inspect || 0, target: () => 1, rewardText: "信任 +4，经费 +4", reward: () => { change("trust", 4); change("funds", 4); } },
    { id: "collab-once", title: "别让同门只在群里见", desc: "完成 1 次组内协作", progress: (s) => s.collaborations || 0, target: () => 1, rewardText: "信任 +5，课题线 +6", reward: () => { change("trust", 5); advanceTopics(6, "协作奖励"); } },
    { id: "buy-equipment", title: "办公室不是仓库", desc: "添置 1 件设备", progress: (s) => (s.equipment || []).length, target: () => 1, rewardText: "声望 +4，经费 +4", reward: () => { change("reputation", 4); change("funds", 4); } },
    { id: "rules-on-wall", title: "制度写在墙上", desc: "调整 1 次实验室规则", progress: (s) => s.ruleChanges || 0, target: () => 1, rewardText: "行政 -5，信任 +3", reward: () => { change("admin", -5); change("trust", 3); } },
    { id: "reveal-trait", title: "看见学生真正的样子", desc: "揭示 1 个隐藏特质", progress: (s) => s.students.filter((student) => student.traitRevealed).length, target: () => 1, rewardText: "声望 +5，论文进度 +8", reward: () => { change("reputation", 5); change("paperProgress", 8); } },
    { id: "publish-paper", title: "终于不是在投了", desc: "发表 1 篇论文", progress: (s) => s.papers, target: () => 1, rewardText: "经费 +12，声望 +5", reward: () => { change("funds", 12); change("reputation", 5); } },
    { id: "submit-paper", title: "这真是最后一版了", desc: "投稿 1 次", progress: (s) => s.submissions || 0, target: () => 1, rewardText: "声望 +4，论文进度 +6", reward: () => { change("reputation", 4); change("paperProgress", 6); } },
    { id: "fund-project", title: "让经费到账", desc: "拿下 1 个项目", progress: (s) => s.projects, target: () => 1, rewardText: "经费 +8，行政 -4", reward: () => { change("funds", 8); change("admin", -4); } },
    { id: "graduate-one", title: "送一个人上岸", desc: "毕业 1 名学生", progress: (s) => s.graduates, target: () => 1, rewardText: "信任 +8，声望 +8", reward: () => { change("trust", 8); change("reputation", 8); } },
    { id: "contact-alumni", title: "毕业不是失联", desc: "联络 1 次校友", progress: (s) => s.alumniContacts || 0, target: () => 1, available: (s) => (s.alumniArchive || []).length > 0, rewardText: "声望 +5，经费 +5", reward: () => { change("reputation", 5); change("funds", 5); } },
    { id: "annual-excellent", title: "让学院闭嘴", desc: "年度考核达到优秀", progress: (s) => s.lastReviewScore || 0, target: () => 75, available: (s) => (s.annualReviews || []).length > 0, rewardText: "经费 +10，行政 -6", reward: () => { change("funds", 10); change("admin", -6); } },
    { id: "fill-lab", title: "工位告急", desc: "学生达到当前上限", progress: (s) => s.students.length, target: (s) => studentCap(s), rewardText: "经费 +10，声望 +4", reward: () => { change("funds", 10); change("reputation", 4); } },
    { id: "safe-lab", title: "别把红线当皮筋", desc: "伦理风险降到 15 以下", progress: (s) => Math.max(0, 45 - s.risk), target: () => 30, available: (s) => s.risk > 15 && s.risk <= 45, done: (s) => s.risk < 15, rewardText: "信任 +6，声望 +3", reward: () => { change("trust", 6); change("reputation", 3); } },
    { id: "modernize", title: "研究室像个研究室", desc: "拥有 3 件设备", progress: (s) => (s.equipment || []).length, target: () => 3, available: (s) => s.labLevel >= 2, rewardText: "声望 +8，行政 -6", reward: () => { change("reputation", 8); change("admin", -6); } },
    { id: "start-topic", title: "别只做泛泛而谈", desc: "立项 1 条课题线", progress: (s) => (s.topics || []).length + (s.completedTopics || 0), target: () => 1, rewardText: "论文进度 +8，声望 +3", reward: () => { change("paperProgress", 8); change("reputation", 3); } },
    { id: "finish-topic", title: "把一个问题做完", desc: "完成 1 条课题线", progress: (s) => s.completedTopics || 0, target: () => 1, rewardText: "经费 +8，信任 +4", reward: () => { change("funds", 8); change("trust", 4); } }
  ];

  const termEvents = [
    {
      id: "review-spotcheck",
      kicker: "年度考核",
      title: "学院督导想旁听一次组会",
      body: () => `上一年考核分 ${state.lastReviewScore || 0}。邮件写得很客气，但“随机旁听”四个字看起来一点也不随机。`,
      when: (st) => (st.annualReviews || []).length > 0 && (st.lastReviewScore || 0) < 55 && st.students.length > 0,
      target: (st) => pick(st.students),
      choices: [
        { label: "把真实问题摊开，顺便改一版流程", effect: (student) => { change("admin", -6); change("risk", -8); change("trust", 8); stressAll(-6); changeStudent(student, "trust", 8); return "组会没有那么漂亮，但督导看见了你们真的在修。行政 -6，风险 -8，信任 +8。"; } },
        { label: "提前排练一场完美组会", sub: "好看，但很紧", effect: () => { change("paperProgress", 16); change("admin", -10); change("risk", 10); change("trust", -8); stressAll(10); state.darkChoices += 1; return "汇报顺滑得像产品发布会，学生也紧绷得像产品发布会。论文 +16，风险 +10。"; } }
      ]
    },
    {
      id: "review-showcase",
      kicker: "年度考核",
      title: "学院邀请你分享优秀课题组经验",
      body: () => `上一年考核分 ${state.lastReviewScore || 0}。学院希望你讲讲“可复制经验”，你知道可复制的往往不只有经验。`,
      when: (st) => (st.lastReviewScore || 0) >= 75,
      choices: [
        { label: "分享制度和边界，而不是只晒成果", effect: () => { change("reputation", 8); change("trust", 5); change("admin", 5); return "掌声没有最炸，但会后有人认真问了贡献表怎么做。声望 +8，信任 +5。"; } },
        { label: "把方法包装成高产模板", sub: "学院最爱听的版本", effect: () => { change("reputation", 12); change("projectProgress", 18); change("admin", 10); stressAll(6); return "经验分享很成功，下一年的表格也更厚了。声望 +12，项目 +18，行政 +10。"; } }
      ]
    },
    {
      id: "hidden-burst",
      kicker: "隐藏特质",
      title: "组会前夜，学生突然交出一版完整结果",
      body: (s) => `${s.name} 像突然通电一样，把三周没动的图补齐了。你意识到 TA 可能是那种 deadline 前觉醒的人。`,
      when: (st) => st.students.some((s) => s.hiddenTrait === "burst"),
      target: (st) => pick(st.students.filter((s) => s.hiddenTrait === "burst")),
      choices: [
        { label: "立刻肯定，并帮 TA 稳住节奏", effect: (student) => { revealTrait(student); changeStudent(student, "trust", 9); changeStudent(student, "pressure", -6); change("paperProgress", 20); return `${student.name} 被肯定后没有继续燃烧自己。论文进度 +20。`; } },
        { label: "趁热打铁，再加两组实验", sub: "短期很香", effect: (student) => { revealTrait(student); changeStudent(student, "pressure", 16); changeStudent(student, "trust", -7); change("paperProgress", 30); change("risk", 5); return `结果更多了，${student.name} 的眼神也更空了。论文进度 +30，风险 +5。`; } }
      ]
    },
    {
      id: "authorship-storm",
      kicker: "署名风波",
      title: "学生在群里发了一个很克制的问号",
      body: (s) => `${s.name} 发现自己做了主要实验，却被放在作者列表中间。那个问号不长，但全组都看见了。`,
      when: (st) => st.risk > 25 || st.darkChoices > 0,
      target: (st) => pick(st.students),
      choices: [
        { label: "公开贡献表，重新讨论顺序", effect: (student) => { revealTrait(student); change("risk", -10); change("trust", 9); changeStudent(student, "trust", 16); return `贡献被写清楚了，空气重新流动。全组信任 +9。`; } },
        { label: "说“年轻人别太计较排名”", sub: "地狱梗路线", effect: (student) => { change("risk", 18); change("trust", -14); changeStudent(student, "trust", -20); changeStudent(student, "pressure", 15); state.darkChoices += 1; return `群里安静了，截图开始流动。风险 +18，信任 -14。`; } }
      ]
    },
    {
      id: "anonymous-wall",
      kicker: "匿名墙",
      title: "有人发帖：这个课题组是不是有点太会画饼",
      body: () => "帖子没有写名字，但咖啡机、白板和“下周一定投”的口头禅都对上了。",
      when: (st) => st.trust < 52 || st.risk > 38,
      target: (st) => pick(st.students),
      choices: [
        { label: "开匿名反馈会，逐条修制度", effect: () => { change("trust", 14); change("risk", -14); change("admin", 5); return "修制度很麻烦，但比修截图容易。信任 +14，风险 -14。"; } },
        { label: "要求大家统一口径", sub: "截图会长腿", effect: () => { change("risk", 20); change("trust", -15); return "帖子少了一条，备份多了十份。风险 +20，信任 -15。"; } }
      ]
    },
    {
      id: "conference",
      kicker: "学术会议",
      title: "会议名额只够带一个学生",
      body: (s) => `${s.name} 很想去。TA 说自己可以负责海报、订票和把您从会场茶歇区捞回来。`,
      when: (st) => st.students.length > 0,
      target: (st) => pick(st.students),
      choices: [
        { label: "带 TA 见见世面", effect: (student) => { changeStudent(student, "research", 8); changeStudent(student, "trust", 8); change("reputation", 6); change("funds", -4); return `${student.name} 在会议上学会了提问，也学会了抢最后一块点心。声望 +6。`; } },
        { label: "名额留给最能出成果的人", effect: (student) => { change("paperProgress", 16); changeStudent(student, "trust", -8); return `论文推进了，${student.name} 的期待被压进了下一个日程。论文进度 +16。`; } }
      ]
    },
    {
      id: "equipment",
      kicker: "设备人格化",
      title: "仪器在关键时刻报错",
      body: (s) => `${s.name} 对着报错代码沉默了十分钟，最后问：老师，它是不是讨厌我？`,
      when: (st) => st.students.length > 0,
      target: (st) => pick(st.students),
      choices: [
        { label: "一起排查，顺手买个小升级", effect: (student) => { change("funds", -6); change("paperProgress", 18); changeStudent(student, "trust", 9); changeStudent(student, "pressure", -5); return "设备重新亮起，学生也重新亮起。论文进度 +18。"; } },
        { label: "让 TA 自己想办法，科研训练嘛", effect: (student) => { change("energy", 5); changeStudent(student, "pressure", 12); changeStudent(student, "trust", -9); return `${student.name} 学会了报修，也学会了沉默。精力 +5，信任下降。`; } }
      ]
    },
    {
      id: "server-rescue",
      kicker: "设备事件",
      title: "原始数据差点被覆盖",
      body: (s) => `${s.name} 手一抖，把“最终数据_不要删”拖进了一个很危险的位置。幸好实验室不是完全靠祈祷运转。`,
      when: (st) => (st.equipment || []).includes("dataServer"),
      target: (st) => pick(st.students),
      choices: [
        { label: "从服务器恢复，并补一堂数据课", effect: (student) => { change("risk", -10); changeStudent(student, "research", 5); changeStudent(student, "trust", 6); return `数据回来了，${student.name} 也学会了备份不是玄学。风险 -10。`; } },
        { label: "恢复就好，下次别犯", effect: (student) => { change("energy", 4); changeStudent(student, "pressure", 5); return "问题解决得很快，但经验没有完全留下。精力 +4。"; } }
      ]
    },
    {
      id: "subsidy-talk",
      kicker: "制度回声",
      title: "学生开始讨论补助够不够生活",
      body: () => "这不是宏大叙事，是楼下盒饭涨了一块钱之后的真实沉默。",
      when: (st) => st.labRules?.subsidy !== "normal",
      target: (st) => pick(st.students),
      choices: [
        { label: "把补助和工作量讲清楚", effect: () => { change("trust", state.labRules.subsidy === "generous" ? 8 : 4); change("admin", 3); return "钱不一定立刻变多，但规则至少不再靠猜。信任上升。"; } },
        { label: "说科研不能只看钱", sub: "这话很悬", effect: () => { change("trust", -10); change("risk", 6); stressAll(7); return "学生点头，群里沉默。信任 -10，风险 +6。"; } }
      ]
    },
    {
      id: "graduation-line",
      kicker: "毕业要求",
      title: "毕业线到底该画在哪里",
      body: (s) => `${s.name} 的毕业进度快满了，但论文和项目都还想再榨出一点成果。`,
      when: (st) => st.students.some((student) => student.thesis > 72),
      target: (st) => pick(st.students.filter((student) => student.thesis > 72)),
      choices: [
        { label: "按制度走，能毕业就认真送走", effect: (student) => { changeStudent(student, "thesis", 18); changeStudent(student, "trust", 12); change("reputation", 4); return `${student.name} 看见了终点。毕业进度 +18，声望 +4。`; } },
        { label: "再压一篇，毕业更有底气", sub: "也可能只是你更有底气", effect: (student) => { state.darkChoices += 1; change("paperProgress", 24); changeStudent(student, "pressure", 18); changeStudent(student, "trust", -12); change("risk", 8); return `论文进度 +24，${student.name} 的毕业倒计时被重新拨慢。`; } }
      ]
    },
    {
      id: "slacker-proof",
      kicker: "学生专属",
      title: "摸鱼雷达突然交出一份很像样的东西",
      body: (s) => `${s.name} 平时最会消失，今天却拿出一份结构完整的实验记录。你开始怀疑 TA 不是不会做，只是不喜欢被无意义追着跑。`,
      when: (st) => st.students.some((student) => student.hiddenTrait === "slacker"),
      target: (st) => pick(st.students.filter((student) => student.hiddenTrait === "slacker")),
      choices: [
        { label: "把任务拆清楚，给 TA 自主节奏", effect: (student) => { revealTrait(student); changeStudent(student, "initiative", 8); changeStudent(student, "slacking", -18); changeStudent(student, "trust", 8); change("paperProgress", 12); return `${student.name} 的摸鱼少了，任务也终于像任务。论文 +12。`; } },
        { label: "原来能做啊，那以后翻倍", sub: "危险的激励", effect: (student) => { revealTrait(student); changeStudent(student, "pressure", 18); changeStudent(student, "trust", -10); change("paperProgress", 20); change("risk", 5); return `短期结果更多了，${student.name} 也学会了更高级的消失术。`; } }
      ]
    },
    {
      id: "fragile-meltdown",
      kicker: "学生专属",
      title: "天才学生在组会后把头像换成了黑图",
      body: (s) => `${s.name} 的能力很强，但最近每次打开文档都像在拆炸弹。那张黑图不是装酷，是求救信号。`,
      when: (st) => st.students.some((student) => student.hiddenTrait === "fragile" && student.pressure > 58),
      target: (st) => pick(st.students.filter((student) => student.hiddenTrait === "fragile" && student.pressure > 58)),
      choices: [
        { label: "暂停公开汇报，改成一对一反馈", effect: (student) => { revealTrait(student); changeStudent(student, "pressure", -20); changeStudent(student, "trust", 14); changeStudent(student, "writing", 5); change("trust", 5); return `${student.name} 没有立刻变强，但终于能继续打开文档。`; } },
        { label: "科研就是要抗压", sub: "这句最省事", effect: (student) => { revealTrait(student); changeStudent(student, "pressure", 24); changeStudent(student, "trust", -18); change("risk", 12); return `${student.name} 点了点头，然后三天没说话。风险 +12。`; } }
      ]
    },
    {
      id: "connector-collab",
      kicker: "学生专属",
      title: "社交悍匪带回一个离谱合作机会",
      body: (s) => `${s.name} 去茶歇十分钟，回来时已经和隔壁实验室谈出了一个联合项目雏形。`,
      when: (st) => st.students.some((student) => student.hiddenTrait === "connector"),
      target: (st) => pick(st.students.filter((student) => student.hiddenTrait === "connector")),
      choices: [
        { label: "立刻写成合作小项目", effect: (student) => { revealTrait(student); change("projectProgress", 24); change("reputation", 6); changeStudent(student, "trust", 7); return `合作写进了项目书，${student.name} 的社交天赋有了正经用途。`; } },
        { label: "让 TA 先把本组活干完", effect: (student) => { change("paperProgress", 14); changeStudent(student, "trust", -7); changeStudent(student, "initiative", -4); return `眼前论文推进了，那个合作机会悄悄凉了。论文 +14。`; } }
      ]
    },
    {
      id: "machine-figure",
      kicker: "学生专属",
      title: "论文缝合怪交来一张过于丝滑的图",
      body: (s) => `${s.name} 的图漂亮得像不属于这个世界。它也许是天才，也许是三个文件夹之间发生了某种化学反应。`,
      when: (st) => st.students.some((student) => student.hiddenTrait === "machine"),
      target: (st) => pick(st.students.filter((student) => student.hiddenTrait === "machine")),
      choices: [
        { label: "追溯原始数据，先慢下来", effect: (student) => { revealTrait(student); change("risk", -12); changeStudent(student, "research", 5); changeStudent(student, "pressure", 4); return `图没那么丝滑了，但你们睡得更稳。风险 -12。`; } },
        { label: "图好就先投，细节后补", sub: "快，很快，非常快", effect: (student) => { revealTrait(student); change("paperProgress", 34); change("risk", 24); changeStudent(student, "trust", -6); state.darkChoices += 1; return `投稿进度飞快，原始数据在角落里沉默。论文 +34，风险 +24。`; } }
      ]
    },
    {
      id: "nightowl-burnout",
      kicker: "学生专属",
      title: "夜行动物凌晨四点还在回消息",
      body: (s) => `${s.name} 的时间表像另一个时区。成果在增长，眼神也在失焦。`,
      when: (st) => st.students.some((student) => student.hiddenTrait === "nightOwl" && student.pressure > 55),
      target: (st) => pick(st.students.filter((student) => student.hiddenTrait === "nightOwl" && student.pressure > 55)),
      choices: [
        { label: "禁止凌晨汇报，改成白天同步", effect: (student) => { revealTrait(student); changeStudent(student, "pressure", -16); changeStudent(student, "trust", 10); change("energy", 6); return `${student.name} 第一次在白天发来“收到”。压力下降。`; } },
        { label: "趁状态好继续冲", sub: "熟悉的深夜燃烧", effect: (student) => { revealTrait(student); change("paperProgress", 26); changeStudent(student, "pressure", 20); changeStudent(student, "trust", -8); change("risk", 6); return `夜色里论文进度很亮，人的电量很暗。`; } }
      ]
    },
    {
      id: "topic-stuck",
      kicker: "课题线",
      title: "课题推进到一半，核心假设开始不听话",
      body: () => {
        const topic = pick(state.topics);
        return `「${topic.title}」的进度卡住了。白板上每个箭头都指向另一个问号。`;
      },
      when: (st) => (st.topics || []).some((topic) => topic.progress > 28 && topic.progress < 78),
      choices: [
        { label: "收缩问题，先做一个能闭环的小版本", effect: () => { const topic = pick(state.topics.filter((item) => item.progress > 28 && item.progress < 78)); topic.progress = clamp(topic.progress + 18, 0, 100); change("paperProgress", 8); completeTopics(); return `你们把「${topic.title}」切小了，问题终于能被做完一块。`; } },
        { label: "硬说这是更宏大的科学问题", sub: "听起来很会申项目", effect: () => { const topic = pick(state.topics.filter((item) => item.progress > 28 && item.progress < 78)); change("projectProgress", 16); change("admin", 5); change("risk", 4); return `「${topic.title}」变得更宏大，也更难解释。项目 +16，风险 +4。`; } }
      ]
    },
    {
      id: "topic-breakthrough",
      kicker: "课题线",
      title: "学生在旧数据里挖出一个漂亮结果",
      body: () => {
        const topic = pick(state.topics);
        const student = assignedStudent(topic);
        return `${student ? student.name : "学生"} 在「${topic.title}」里找到一个之前没人注意的小结论。办公室突然安静，然后开始狂喜。`;
      },
      when: (st) => (st.topics || []).some((topic) => topic.progress >= 45),
      choices: [
        { label: "立刻补实验验证", effect: () => { const topic = pick(state.topics.filter((item) => item.progress >= 45)); const student = assignedStudent(topic); topic.progress = clamp(topic.progress + 24, 0, 100); if (student) changeStudent(student, "trust", 8); change("funds", -3); completeTopics(); return `验证花了点经费，但「${topic.title}」更扎实了。`; } },
        { label: "先写进论文，后面再补", sub: "熟悉的捷径", effect: () => { const topic = pick(state.topics.filter((item) => item.progress >= 45)); topic.progress = clamp(topic.progress + 30, 0, 100); change("risk", 10); completeTopics(); return `「${topic.title}」推进飞快，但原始证据还在追赶叙事。风险 +10。`; } }
      ]
    },
    {
      id: "collab-spark",
      kicker: "同门协作",
      title: "两个学生突然互相讲懂了一个问题",
      body: () => "你只是去接了杯水，回来时白板上已经多了三种颜色的箭头。同门之间偶尔真的会发生科学。",
      when: (st) => (st.collaborationWins || 0) > 0,
      choices: [
        { label: "把这套协作方式固定下来", effect: () => { change("trust", 8); change("paperProgress", 14); advanceTopics(10, "协作火花"); return "同门协作被写进组会流程。信任 +8，课题线继续推进。"; } },
        { label: "趁热让他们再带两个新人", effect: () => { change("paperProgress", 20); stressAll(6); change("trust", -2); advanceTopics(8, "协作扩散"); return "扩散很快，压力也扩散得很快。论文 +20。"; } }
      ]
    },
    {
      id: "collab-conflict",
      kicker: "同门协作",
      title: "同门开始争论谁在拖后腿",
      body: () => "表面上是在讨论变量命名，实际上是在讨论谁把谁的夜晚变长了。",
      when: (st) => (st.collaborationConflicts || 0) > 0,
      choices: [
        { label: "重新拆分任务和贡献边界", effect: () => { change("trust", 7); change("risk", -5); state.collaborationConflicts = Math.max(0, state.collaborationConflicts - 1); return "任务边界清楚后，吵架终于回到科学问题上。信任 +7。"; } },
        { label: "说年轻人要学会合作", sub: "等于什么也没说", effect: () => { change("trust", -8); change("risk", 6); stressAll(7); return "道理很大，解决很小。信任 -8，风险 +6。"; } }
      ]
    },
    {
      id: "alumni-referral",
      kicker: "校友回声",
      title: "毕业生推荐了一个新学生",
      body: () => {
        const alumni = pick(state.alumniArchive);
        return `${alumni.name} 发来消息，说有个学弟/学妹想了解你的课题组。那句“我觉得这里还可以”比招生宣传管用。`;
      },
      when: (st) => (st.alumniArchive || []).some((alumni) => alumni.trust >= 60) && st.students.length < studentCap(st),
      choices: [
        { label: "认真面试，不消耗这份信任", effect: () => { const candidate = makeCandidate(state); candidate.tags.push("校友推荐"); state.candidatePool.unshift(candidate); change("reputation", 4); return "候选人进入面试池。声望 +4。"; } },
        { label: "既然是熟人推荐，直接先收进来", sub: "省事但不稳", effect: () => { const candidate = makeCandidate(state); const student = createStudent(candidate); state.students.push(student); change("admin", 4); change("trust", -2); return `${student.name} 直接入组。工位热闹了，流程也粗糙了。`; } }
      ]
    },
    {
      id: "alumni-honest-mail",
      kicker: "校友回声",
      title: "一封毕业后的真心邮件",
      body: () => {
        const alumni = pick(state.alumniArchive);
        return `${alumni.name} 写了一封很长的邮件，提到那些当年没敢说出口的压力，也提到后来真正受用的训练。`;
      },
      when: (st) => (st.alumniArchive || []).length > 0,
      choices: [
        { label: "把反馈写进实验室规则", effect: () => { change("trust", 8); change("risk", -7); state.ruleChanges += 1; return "旧问题没有消失，但下一届学生会少踩一点坑。信任 +8，风险 -7。"; } },
        { label: "回一句：以后常联系", effect: () => { change("energy", 5); change("reputation", 2); return "你没有立刻改变制度，但至少认真读完了。精力 +5。"; } }
      ]
    },
    {
      id: "reviewer",
      kicker: "审稿宇宙",
      title: "审稿人二号建议重新思考研究问题",
      body: () => "那句话很短，但足以让一整张白板失去颜色。",
      when: (st) => st.paperProgress > 42,
      choices: [
        { label: "拆成清单，全组逐条回应", effect: () => { change("paperProgress", 24); change("trust", 7); change("energy", -8); return "意见变成待办，恐惧变成进度。论文 +24，信任 +7。"; } },
        { label: "这很简单，你们自己改改", sub: "经典但危险", effect: () => { change("energy", 8); change("trust", -12); change("risk", 8); stressAll(8); return "您轻松了，学生的夜晚变长了。风险 +8。"; } }
      ]
    },
    {
      id: "major-revision",
      kicker: "投稿系统",
      title: "返修意见像雪片一样落下来",
      body: () => `你们已经累计 ${state.revisions || 0} 次返修。学生开始研究“minor revision”和“major revision”到底差几杯咖啡。`,
      when: (st) => (st.revisions || 0) > 0,
      choices: [
        { label: "开返修作战会，逐条拆解", effect: () => { change("paperProgress", 24); change("trust", 6); change("energy", -7); return "返修意见被拆成待办，恐惧变成了表格。论文进度 +24。"; } },
        { label: "让一作先顶住", sub: "又熟悉起来了", effect: () => { change("paperProgress", 18); change("trust", -10); change("risk", 8); stressAll(10); return "返修推进了，一作也快被推进墙里。风险 +8。"; } }
      ]
    },
    {
      id: "desk-reject",
      kicker: "投稿系统",
      title: "拒稿邮件来得比外卖还快",
      body: () => "编辑很礼貌，速度很快，杀伤力也很稳定。",
      when: (st) => (st.rejections || 0) > 0,
      choices: [
        { label: "换个更匹配的期刊重投", effect: () => { state.manuscripts = (state.manuscripts || 0) + 1; change("paperProgress", 8); change("energy", -4); return "稿件重新排队，标题也变得更诚实。稿件 +1。"; } },
        { label: "把标题写得更宏大一点", sub: "不一定更匹配", effect: () => { change("reputation", 3); change("risk", 6); change("paperProgress", 16); return "标题更亮了，问题未必更清楚。论文进度 +16，风险 +6。"; } }
      ]
    },
    {
      id: "gray-channel",
      kicker: "投稿系统",
      title: "有人推荐一个“很快很稳”的期刊",
      body: () => "对方说审稿周期短、沟通顺畅、版面安排灵活。每个词都很诱人，也都有一点刺眼。",
      when: (st) => (st.manuscripts || 0) > 0 && st.risk > 20,
      choices: [
        { label: "拒绝捷径，继续正常投稿", effect: () => { change("risk", -8); change("trust", 5); return "慢一点，但睡得着。风险 -8。"; } },
        { label: "先试一篇看看", sub: "危险快速通道", effect: () => { state.manuscripts = Math.max(0, (state.manuscripts || 0) - 1); state.papers += 1; change("reputation", 6); change("risk", 28); state.darkChoices += 1; return "论文数变好看了，档案袋也变厚了。论文 +1，风险 +28。"; } }
      ]
    }
  ];

  let state = null;
  const emptyProfile = () => ({ version: 1, completedRuns: 0, endingIds: [], achievementIds: [] });
  const loadProfile = () => {
    try { return { ...emptyProfile(), ...JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}") }; }
    catch { return emptyProfile(); }
  };
  let profile = loadProfile();
  const saveProfile = () => localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));

  function legacyBoosts() {
    const runs = Math.min(profile.completedRuns, 3);
    return { funds: runs >= 1 ? 5 : 0, paperProgress: runs >= 2 ? 10 : 0, reputation: runs >= 3 ? 5 : 0 };
  }

  function renderLegacySummary() {
    const bonus = legacyBoosts();
    const bonuses = [bonus.funds && "经费 +5", bonus.paperProgress && "论文进度 +10", bonus.reputation && "声望 +5"].filter(Boolean);
    $("legacy-summary").textContent = `校史档案：${profile.completedRuns} 周目 · ${profile.achievementIds.length}/${achievements.length} 成就 · ${profile.endingIds.length} 种结局${bonuses.length ? ` · 本局传承：${bonuses.join("、")}` : ""}`;
  }

  function defaultLabRules() {
    return { subsidy: "normal", authorship: "ambiguous", graduation: "balanced" };
  }

  function objectiveById(id) {
    return objectiveDefinitions.find((objective) => objective.id === id);
  }

  function seedObjectives(targetState = state) {
    targetState.objectives ||= [];
    targetState.completedObjectives ||= [];
    const unavailable = new Set([...targetState.objectives, ...targetState.completedObjectives]);
    while (targetState.objectives.length < 3) {
      const pool = objectiveDefinitions.filter((objective) => !unavailable.has(objective.id) && (!objective.available || objective.available(targetState)));
      if (!pool.length) break;
      const next = pick(pool).id;
      targetState.objectives.push(next);
      unavailable.add(next);
    }
  }

  function objectiveProgress(objective, targetState = state) {
    return clamp(objective.progress(targetState), 0, objective.target(targetState));
  }

  function objectiveDone(objective) {
    if (objective.done) return objective.done(state);
    return objectiveProgress(objective) >= objective.target(state);
  }

  function checkObjectives() {
    state.objectives ||= [];
    state.completedObjectives ||= [];
    const completedNow = [];
    state.objectives.forEach((id) => {
      const objective = objectiveById(id);
      if (objective && objectiveDone(objective)) completedNow.push(objective);
    });
    if (!completedNow.length) {
      seedObjectives(state);
      return;
    }
    completedNow.forEach((objective) => {
      state.objectives = state.objectives.filter((id) => id !== objective.id);
      if (!state.completedObjectives.includes(objective.id)) state.completedObjectives.push(objective.id);
      objective.reward();
      story(`📌 完成学院任务：「${objective.title}」——${objective.rewardText}`);
    });
    seedObjectives(state);
  }

  function newState({ teacher, school, lab, trait }) {
    const starter = {
      warm: { trust: 68, reputation: 8, energy: 76, admin: 16 },
      ambitious: { trust: 54, reputation: 18, energy: 66, admin: 22 },
      lucky: { trust: 58, reputation: 10, energy: 72, admin: 18 }
    }[trait];
    const boosts = legacyBoosts();
    const fresh = {
      version: 2, teacher, school, lab, trait, year: 1, season: 0, actionsTaken: 0,
      reputation: starter.reputation + boosts.reputation, funds: 24 + boosts.funds, trust: starter.trust,
      energy: starter.energy, admin: starter.admin, risk: 0, paperProgress: 18 + boosts.paperProgress,
      projectProgress: 8, titleProgress: 0, papers: 0, manuscripts: 0, revisions: 0, rejections: 0, submissions: 0, projects: 0, titles: 0, labLevel: 1,
      students: [], candidatePool: [], graduates: 0, alumniArchive: [], alumniContacts: 0, caughtSlacking: 0, darkChoices: 0,
      equipment: [], labRules: defaultLabRules(), ruleChanges: 0,
      topics: [], completedTopics: 0, topicHistory: [],
      collaborations: 0, collaborationWins: 0, collaborationConflicts: 0, lastCollabPair: [],
      annualReviews: [], lastReviewScore: 0, reviewStreak: 0,
      objectives: [], completedObjectives: [],
      achievementIds: [...profile.achievementIds], actionHistory: {}, log: [], ended: false, pendingEvent: false
    };
    fresh.candidatePool = makeCandidatePool(fresh, 3);
    seedObjectives(fresh);
    return fresh;
  }

  function migrateSave(saved) {
    if (!saved) return null;
    if (saved.version === 2 && Array.isArray(saved.students)) {
      const upgraded = { ...newState(saved), ...saved, pendingEvent: false, ended: false, log: saved.log || [], actionHistory: saved.actionHistory || {}, candidatePool: saved.candidatePool || [] };
      upgraded.equipment ||= [];
      upgraded.labRules = { ...defaultLabRules(), ...(saved.labRules || {}) };
      upgraded.ruleChanges ||= 0;
      upgraded.manuscripts ||= 0;
      upgraded.revisions ||= 0;
      upgraded.rejections ||= 0;
      upgraded.submissions ||= 0;
      upgraded.alumniArchive ||= [];
      upgraded.alumniContacts ||= 0;
      upgraded.topics ||= [];
      upgraded.completedTopics ||= 0;
      upgraded.topicHistory ||= [];
      upgraded.collaborations ||= 0;
      upgraded.collaborationWins ||= 0;
      upgraded.collaborationConflicts ||= 0;
      upgraded.lastCollabPair ||= [];
      upgraded.annualReviews ||= [];
      upgraded.lastReviewScore ||= 0;
      upgraded.reviewStreak ||= 0;
      upgraded.objectives ||= [];
      upgraded.completedObjectives ||= [];
      seedObjectives(upgraded);
      return upgraded;
    }
    const migrated = newState({
      teacher: saved.teacher || "林老师",
      school: saved.school || "云朵大学",
      lab: saved.lab || "摸鱼也要发论文研究室",
      trait: saved.trait || "warm"
    });
    ["year", "season", "reputation", "funds", "trust", "energy", "admin", "risk", "paperProgress", "projectProgress", "titleProgress", "papers", "projects", "titles"].forEach((key) => {
      if (typeof saved[key] === "number") migrated[key] = saved[key];
    });
    migrated.manuscripts = 0;
    migrated.revisions = 0;
    migrated.rejections = 0;
    migrated.submissions = 0;
    migrated.alumniArchive = [];
    migrated.alumniContacts = 0;
    const count = clamp(saved.students || 2, 1, studentCap(migrated));
    migrated.students = Array.from({ length: count }, () => createStudent(makeCandidate(migrated)));
    migrated.log = saved.log || [];
    migrated.actionHistory = saved.actionHistory || {};
    migrated.equipment = [];
    migrated.labRules = defaultLabRules();
    migrated.ruleChanges = 0;
    migrated.topics = [];
    migrated.completedTopics = 0;
    migrated.topicHistory = [];
    migrated.collaborations = 0;
    migrated.collaborationWins = 0;
    migrated.collaborationConflicts = 0;
    migrated.lastCollabPair = [];
    migrated.annualReviews = [];
    migrated.lastReviewScore = 0;
    migrated.reviewStreak = 0;
    migrated.objectives = [];
    migrated.completedObjectives = [];
    seedObjectives(migrated);
    updateLabLevel(migrated);
    return migrated;
  }

  function makeCandidatePool(current, count = 3) {
    return Array.from({ length: count }, () => makeCandidate(current));
  }

  function makeCandidate(current) {
    const archetype = pick(candidateArchetypes.filter((a) => current.labLevel >= (a.minLevel || 1) && (current.labLevel >= 2 || a.program === "硕士")));
    const name = unusedName(current);
    const trait = pick(archetype.traits);
    const stats = Object.fromEntries(Object.entries(archetype.stats).map(([key, value]) => [key, clamp(value + random(-8, 10), 20, 92)]));
    return {
      id: `cand-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name, program: archetype.program, title: archetype.title, stats, hiddenTrait: trait,
      tags: [...archetype.tags, stats.research > 65 ? "科研强" : "需培养", stats.resilience < 45 ? "抗压存疑" : "节奏稳定"],
      skin: pick(["#f1b785", "#e6a875", "#f4c7a2", "#d99674"]),
      hair: pick(hairColors), shirt: pick(shirtColors)
    };
  }

  function unusedName(current) {
    const used = new Set((current.students || []).map((s) => s.name));
    const available = studentNames.filter((name) => !used.has(name));
    return pick(available.length ? available : studentNames) + (available.length ? "" : random(2, 99));
  }

  function createStudent(candidate) {
    return {
      id: `stu-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: candidate.name, program: candidate.program, stage: 1, status: "适应课题组",
      research: candidate.stats.research, writing: candidate.stats.writing,
      initiative: candidate.stats.initiative, resilience: candidate.stats.resilience,
      trust: 58, pressure: 24, thesis: 0, contribution: 0, slacking: random(8, 28),
      hiddenTrait: candidate.hiddenTrait, traitRevealed: false, tags: candidate.tags,
      skin: candidate.skin, hair: candidate.hair, shirt: candidate.shirt
    };
  }

  function studentCap(s = state) {
    const equipmentBonus = (s.equipment || []).includes("workstation") ? 1 : 0;
    return clamp(1 + s.labLevel + equipmentBonus, 2, 8);
  }

  function updateLabLevel(s = state) {
    const score = s.papers * 2 + s.projects * 2 + s.titles * 3 + Math.floor(s.reputation / 25);
    s.labLevel = clamp(1 + Math.floor(score / 3), 1, 5);
  }

  function annualReviewScore(s = state) {
    const maxPressure = s.students.length ? Math.max(...s.students.map((student) => student.pressure || 0)) : 0;
    const output = s.papers * 8 + (s.manuscripts || 0) * 3 + s.projects * 7 + s.titles * 12 + (s.completedTopics || 0) * 4;
    const people = s.graduates * 6 + Math.floor(s.trust * .35) + Math.floor((s.alumniContacts || 0) * 2) + Math.floor((s.collaborationWins || 0) * 2);
    const pressure = Math.floor(s.risk * .8) + Math.floor(s.admin * .35) + Math.floor(maxPressure * .18);
    return clamp(28 + output + people + Math.floor(s.reputation * .4) - pressure, 0, 100);
  }

  function annualReviewRating(score) {
    if (score >= 75) return { key: "excellent", name: "优秀", note: "学院决定先夸你，再给你加一点活。" };
    if (score >= 55) return { key: "pass", name: "合格", note: "材料能交，故事能讲，但会议室里的眼神还在扫描。" };
    if (score >= 35) return { key: "warning", name: "预警", note: "学院没有拍桌子，只是把你的名字放进了下一页表格。" };
    return { key: "danger", name: "危机", note: "这不是年度总结，这是事故复盘的前奏。" };
  }

  function showAnnualReview() {
    if (!state || state.year > TOTAL_YEARS) return false;
    if ((state.annualReviews || []).some((review) => review.year === state.year)) return false;
    const score = annualReviewScore();
    const rating = annualReviewRating(score);
    state.pendingEvent = true;
    state.lastReviewScore = score;
    state.reviewStreak = score >= 75 ? (state.reviewStreak || 0) + 1 : 0;
    const review = { year: state.year, score, rating: rating.key, choice: "" };
    state.annualReviews.push(review);
    const modal = document.createElement("div");
    modal.className = "modal event-modal annual-review-modal";
    modal.innerHTML = `<div class="modal-art">考</div><p class="eyebrow">年度考核</p><h2>第 ${state.year} 年学院评价：${rating.name}</h2><p class="event-body">${rating.note}</p><div class="student-detail-grid">${detail("考核分", score)}${detail("论文", state.papers)}${detail("项目", state.projects)}${detail("毕业", state.graduates)}${detail("风险", state.risk)}${detail("信任", state.trust)}</div><div class="event-choices"></div>`;
    const choices = [
      {
        id: "resource",
        label: "申请学院资源",
        sub: score >= 70 ? "趁夸奖还热，把经费拿下来" : "分数不高也可以硬着头皮要",
        effect: () => {
          if (score >= 70) {
            change("funds", 18);
            change("reputation", 5);
            change("admin", 4);
            return "学院批了一笔资源，也顺手把你拉进两个新委员会。经费 +18，声望 +5，行政 +4。";
          }
          change("funds", 6);
          change("admin", 12);
          change("risk", 4);
          change("energy", -4);
          return "资源勉强批了，但附带一页整改说明。经费 +6，行政 +12，风险 +4。";
        }
      },
      {
        id: "repair",
        label: "给学生补偿和减压",
        sub: "把考核压力从学生身上卸一点",
        effect: () => {
          change("funds", -8);
          change("trust", 12);
          change("admin", 2);
          if (score < 55) change("risk", -6);
          stressAll(-12);
          return "你把一部分资源换成缓冲垫。学生压力下降，信任 +12，经费 -8。";
        }
      },
      {
        id: "kpi",
        label: "下年度硬冲 KPI",
        sub: "熟悉的高产高压路线",
        effect: () => {
          change("paperProgress", 22);
          change("projectProgress", 14);
          change("reputation", 4);
          change("admin", 8);
          change("risk", 7);
          stressAll(8);
          state.darkChoices += 1;
          return "新的表格被贴上白板，进度条很好看，大家的眼神不太好看。论文 +22，项目 +14，风险 +7。";
        }
      }
    ];
    const root = modal.querySelector(".event-choices");
    choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.innerHTML = `${escapeHtml(choice.label)}<small>${escapeHtml(choice.sub)}</small>`;
      button.addEventListener("click", () => resolveAnnualReview(review, choice));
      root.appendChild(button);
    });
    openModal(modal);
    return true;
  }

  function resolveAnnualReview(review, choice) {
    review.choice = choice.id;
    closeModal();
    story(`📋 年度考核选择：「${choice.label}」——${choice.effect()}`);
    resolveMilestones();
    checkObjectives();
    resolveMilestones();
    checkAchievements();
    if (state.risk >= 92) {
      showEnding("举报信已送达", "年度考核材料刚归档，另一份材料就被送到了更不想打开的邮箱里。那些被压下去的选择，终于换了一种方式回来。", "!", "whistleblower-report");
      return;
    }
    render();
  }

  function change(key, delta) {
    const ceilings = { reputation: 100, funds: 120, trust: 100, energy: 100, admin: 100, risk: 100, paperProgress: 100, projectProgress: 100, titleProgress: 100 };
    state[key] = clamp((state[key] || 0) + delta, 0, ceilings[key] || 999);
  }

  function changeStudent(student, key, delta) {
    const ceilings = { research: 100, writing: 100, initiative: 100, resilience: 100, trust: 100, pressure: 100, thesis: 100, contribution: 100, slacking: 100, stage: 5 };
    student[key] = clamp((student[key] || 0) + delta, 0, ceilings[key] || 999);
  }

  function hasEquipment(id) {
    return (state.equipment || []).includes(id);
  }

  function ruleName(category) {
    const value = state.labRules?.[category] || defaultLabRules()[category];
    return ruleOptions[category][value].name;
  }

  function topicLimit(s = state) {
    return clamp(1 + Math.floor(s.labLevel / 2) + (hasEquipment("whiteboard") ? 1 : 0), 1, 4);
  }

  function availableTopics() {
    const used = new Set([...(state.topics || []).map((topic) => topic.templateId), ...(state.topicHistory || [])]);
    return topicCatalog.filter((topic) => !used.has(topic.id));
  }

  function assignedStudent(topic) {
    return state.students.find((student) => student.id === topic.studentId) || null;
  }

  function createTopic(template, student) {
    return {
      id: `topic-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      templateId: template.id,
      title: template.title,
      field: template.field,
      difficulty: template.difficulty,
      risk: template.risk,
      paper: template.paper,
      reputation: template.reputation,
      funds: template.funds || 0,
      tags: template.tags,
      progress: 0,
      studentId: student?.id || null
    };
  }

  function advanceTopics(amount, reason = "推进") {
    if (!state.topics?.length) return 0;
    let total = 0;
    state.topics.forEach((topic) => {
      const student = assignedStudent(topic);
      const studentBonus = student ? Math.floor((student.research + student.writing + student.initiative - student.pressure / 2) / 35) : 0;
      const equipmentBonus = hasEquipment("dataServer") && topic.risk < 0 ? 3 : hasEquipment("workstation") ? 2 : 0;
      const gain = clamp(amount + studentBonus + equipmentBonus - Math.floor(topic.difficulty / 35), 2, 28);
      topic.progress = clamp(topic.progress + gain, 0, 100);
      total += gain;
      if (student) {
        changeStudent(student, "contribution", Math.ceil(gain / 2));
        changeStudent(student, "thesis", Math.ceil(gain / 3));
        student.status = `${reason}：${topic.title.slice(0, 6)}`;
      }
    });
    completeTopics();
    return total;
  }

  function completeTopics() {
    const done = (state.topics || []).filter((topic) => topic.progress >= 100);
    if (!done.length) return;
    done.forEach((topic) => {
      const student = assignedStudent(topic);
      state.completedTopics += 1;
      state.topicHistory.push(topic.templateId);
      change("paperProgress", topic.paper);
      change("reputation", topic.reputation);
      change("funds", topic.funds || 0);
      change("risk", topic.risk);
      if (student) {
        changeStudent(student, "trust", 7);
        changeStudent(student, "research", 4);
        changeStudent(student, "writing", 3);
      }
      story(`🧩 课题线完成：「${topic.title}」。论文进度 +${topic.paper}，声望 +${topic.reputation}${topic.funds ? `，经费 +${topic.funds}` : ""}${topic.risk ? `，风险 ${topic.risk > 0 ? "+" : ""}${topic.risk}` : ""}。`);
    });
    state.topics = state.topics.filter((topic) => topic.progress < 100);
  }

  function stressAll(delta) {
    state.students.forEach((student) => changeStudent(student, "pressure", delta));
  }

  function revealTrait(student) {
    if (!student || student.traitRevealed) return;
    student.traitRevealed = true;
    const trait = traitBook[student.hiddenTrait];
    story(`🔎 ${student.name} 的隐藏特质显现：「${trait.name}」——${trait.clue}`);
  }

  function traitLabel() {
    return { warm: "亲和派", ambitious: "卷王派", lucky: "玄学派" }[state.trait] || "普通导师";
  }

  function seasonLabel() {
    return state.season === 0 ? "秋季学期" : "春季学期";
  }

  function story(text) {
    state.log.unshift({ text, term: `第 ${state.year} 年 · ${seasonLabel()}` });
    state.log = state.log.slice(0, 32);
  }

  function finishAction(actionId, text, options = {}) {
    state.actionHistory[actionId] = (state.actionHistory[actionId] || 0) + 1;
    state.actionsTaken += 1;
    story(text);
    resolveMilestones();
    checkObjectives();
    resolveMilestones();
    checkAchievements();
    if (state.risk >= 92) {
      showEnding("举报信已送达", "一封包含原始数据、署名记录和深夜群聊的材料递到了调查组。捷径终于变成了最长的路。", "!", "whistleblower-report");
      return;
    }
    if (!options.skipRandom && state.actionsTaken < MAX_ACTIONS && Math.random() < (state.trait === "lucky" ? .58 : .42)) showEvent();
    render();
  }

  function runResearch() {
    if (state.energy < 8) return lowEnergy();
    const base = random(12, 20);
    const studentBonus = Math.floor(state.students.reduce((sum, s) => sum + s.research + s.writing - s.pressure / 2, 0) / 90);
    const equipmentBonus = (hasEquipment("workstation") ? 8 : 0) + (hasEquipment("dataServer") ? 4 : 0);
    const ruleBonus = state.labRules.graduation === "strict" ? 5 : state.labRules.graduation === "lenient" ? -3 : 0;
    const gain = clamp(base + studentBonus + equipmentBonus + ruleBonus, 8, 44);
    change("paperProgress", gain);
    change("energy", -11);
    state.students.forEach((student) => {
      changeStudent(student, "thesis", random(3, 8));
      changeStudent(student, "pressure", random(2, 6) + (state.labRules.graduation === "strict" ? 4 : 0));
      changeStudent(student, "contribution", random(3, 7));
      if (hasEquipment("workstation")) changeStudent(student, "slacking", -2);
      student.status = pick(["改图中", "整理实验", "盯着投稿系统", "写到怀疑人生"]);
    });
    const topicGain = advanceTopics(10, "论文推进");
    finishAction("research", `📄 全组把白板写满了。论文进度 +${gain}${topicGain ? `，课题线合计 +${topicGain}` : ""}，学生们离“这真是最后一版了”又近了一点。`);
  }

  function runProject() {
    if (state.energy < 8) return lowEnergy();
    const gain = random(15, 26) + (state.students.length >= 3 ? 5 : 0) + (hasEquipment("meetingCam") ? 5 : 0);
    change("projectProgress", gain);
    change("admin", hasEquipment("meetingCam") ? 9 : 7);
    change("energy", -10);
    state.students.forEach((student) => changeStudent(student, "pressure", 3));
    const topicGain = advanceTopics(5, "项目牵引");
    finishAction("project", `📦 项目书又多了几页“预期成果显著”。项目筹备 +${gain}${topicGain ? `，课题线合计 +${topicGain}` : ""}，行政压力上升。`);
  }

  function runTitle() {
    if (state.energy < 8) return lowEnergy();
    const gain = random(14, 23) + Math.min(10, state.papers + state.projects + state.graduates);
    change("titleProgress", gain);
    change("admin", 9);
    change("energy", -9);
    change("reputation", 3);
    state.students.forEach((student) => {
      changeStudent(student, "pressure", 2);
      student.status = pick(["被迫整理材料", "证明材料编号中", "帮导师找截图", student.status]);
    });
    finishAction("title", `🎖️ 您整理了厚到可以垫显示器的材料。职称进度 +${gain}，未来招生空间更大。`);
  }

  function runMeeting() {
    if (!state.students.length) return storyAndRender("📽️ 会议室很安静，因为还没有学生。先安排招生面试吧。");
    if (state.energy < 8) return lowEnergy();
    let gain = 10 + state.students.length * 3 + (hasEquipment("whiteboard") ? 6 : 0) + (hasEquipment("meetingCam") ? 3 : 0);
    let line = "📽️ 组会开始。";
    state.students.forEach((student) => {
      const pressureGain = random(4, 11) + (state.labRules.graduation === "strict" ? 3 : 0) - (hasEquipment("whiteboard") ? 2 : 0);
      changeStudent(student, "pressure", pressureGain);
      changeStudent(student, "research", random(1, 4));
      changeStudent(student, "thesis", random(4, 10));
      if (student.hiddenTrait === "burst" && Math.random() < .28) {
        revealTrait(student);
        gain += 14;
        student.status = "突然爆发";
      } else if (student.pressure > 78) {
        student.status = "组会后失语";
        gain -= 3;
      } else {
        student.status = pick(["准备汇报", "补实验图", "被问住了", "获得新任务"]);
      }
    });
    change("paperProgress", clamp(gain, 4, 50));
    const topicGain = advanceTopics(8, "组会推进");
    change("energy", -9);
    finishAction("meeting", `${line} 白板上多了 ${clamp(gain, 4, 50)} 点论文进度${topicGain ? `，课题线合计 +${topicGain}` : ""}，也多了几行“下周继续”。`);
  }

  function runInspection() {
    if (!state.students.length) return storyAndRender("🔍 您巡视了一圈，发现目前最需要管理的是空工位。");
    const student = pick([...state.students].sort((a, b) => (b.slacking + b.pressure - b.initiative) - (a.slacking + a.pressure - a.initiative)).slice(0, Math.min(3, state.students.length)));
    const isSlacking = student.slacking + random(-10, 35) > student.initiative;
    const modal = document.createElement("div");
    modal.className = "modal event-modal";
    modal.innerHTML = `<div class="modal-art">查</div><p class="eyebrow">抽查学生状态</p><h2>${escapeHtml(student.name)} 的屏幕亮着</h2><p class="event-body">${escapeHtml(isSlacking ? "屏幕上开着论文、代码、聊天窗口和一个完全不该出现在工作时间的页面。现在要怎么处理？" : "TA 没有摸鱼，只是卡在一个报错上很久了。误判也是一种导师常见病。")}</p><div class="event-choices"></div>`;
    const choices = modal.querySelector(".event-choices");
    const addChoice = (label, sub, effect) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.innerHTML = `${escapeHtml(label)}${sub ? `<small>${escapeHtml(sub)}</small>` : ""}`;
      button.addEventListener("click", () => {
        closeModal();
        const result = effect();
        finishAction("inspect", `🔍 ${result}`, { skipRandom: true });
      });
      choices.appendChild(button);
    };
    if (isSlacking) {
      addChoice("先问卡在哪里，再定一个小目标", "抓摸鱼但不公开处刑", () => {
        state.caughtSlacking += 1;
        revealTrait(student.hiddenTrait === "slacker" ? student : null);
        changeStudent(student, "trust", 5);
        changeStudent(student, "slacking", -13);
        changeStudent(student, "pressure", 4);
        change("paperProgress", 8);
        student.status = "被温和抓包";
        return `${student.name} 承认最近有点躲任务。摸鱼倾向下降，论文进度 +8。`;
      });
      addChoice("公开点名：今天抓到一个典型", "地狱梗路线", () => {
        state.caughtSlacking += 1;
        state.darkChoices += 1;
        revealTrait(student.hiddenTrait === "slacker" ? student : null);
        changeStudent(student, "trust", -16);
        changeStudent(student, "pressure", 18);
        changeStudent(student, "slacking", -8);
        change("trust", -8);
        change("risk", 9);
        student.status = "公开处刑后沉默";
        return `${student.name} 短期不摸鱼了，长期也不太想说话了。风险 +9。`;
      });
    } else {
      addChoice("坐下来一起排查", "可能发现隐藏特质", () => {
        if (student.hiddenTrait === "careful" || student.hiddenTrait === "fragile") revealTrait(student);
        changeStudent(student, "trust", 10);
        changeStudent(student, "pressure", -8);
        changeStudent(student, "research", 5);
        change("paperProgress", 10);
        student.status = "问题被拆开";
        return `您没有把卡住误判成懒。${student.name} 信任上升，论文进度 +10。`;
      });
      addChoice("留下期限：明天前我要结果", "简单粗暴", () => {
        changeStudent(student, "pressure", 13);
        changeStudent(student, "trust", -7);
        change("paperProgress", 12);
        student.status = "ddl 推进中";
        return `结果会来得更快，${student.name} 的压力也一样。论文进度 +12。`;
      });
    }
    openModal(modal);
  }

  function runRest() {
    const energyGain = hasEquipment("coffeeCorner") ? 30 : 24;
    change("energy", energyGain);
    change("risk", -5);
    change("admin", 2);
    state.students.forEach((student) => {
      changeStudent(student, "pressure", hasEquipment("napSofa") ? -21 : hasEquipment("coffeeCorner") ? -17 : -13);
      changeStudent(student, "trust", 4);
      changeStudent(student, "slacking", -3);
      student.status = "恢复中";
    });
    finishAction("rest", `🌿 今天不开会。全组短暂想起自己除了论文还有生活。精力 +${energyGain}，学生压力下降。`, { skipRandom: true });
  }

  function showEquipmentModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-art">器</div><p class="eyebrow">实验室设备</p><h2>买点像样的东西</h2><p class="event-body">设备会长期改变论文效率、压力、风险和招生上限。经费不是只用来在项目书里显得体面的。</p><div class="candidate-grid"></div><button class="close-btn">先不买</button>`;
    const grid = modal.querySelector(".candidate-grid");
    equipmentCatalog.forEach((item) => {
      const owned = hasEquipment(item.id);
      const locked = state.labLevel < item.minLevel;
      const poor = state.funds < item.cost;
      const card = document.createElement("article");
      card.className = "candidate-card";
      card.innerHTML = `<h3>${escapeHtml(item.name)} · ${item.cost} 经费</h3><p>${escapeHtml(item.desc)}</p><div class="tag-row"><span>需要 Lv.${item.minLevel}</span>${owned ? "<span>已拥有</span>" : ""}${locked ? "<span>等级不足</span>" : ""}${poor && !owned ? "<span>经费不足</span>" : ""}</div><button class="choice-btn" ${owned || locked || poor ? "disabled" : ""}>买下这个</button>`;
      card.querySelector("button").addEventListener("click", () => {
        state.equipment.push(item.id);
        change("funds", -item.cost);
        if (item.id === "dataServer") change("risk", -8);
        if (item.id === "coffeeCorner") change("trust", 4);
        if (item.id === "workstation") state.students.forEach((student) => changeStudent(student, "slacking", -5));
        closeModal();
        finishAction("equipment", `🧰 课题组添置「${item.name}」。${item.desc}`, { skipRandom: true });
      });
      grid.appendChild(card);
    });
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    openModal(modal);
  }

  function showRulesModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-art">规</div><p class="eyebrow">实验室规则</p><h2>制度上墙之前，先想想后果</h2><p class="event-body">规则会在每学期结算、署名事件、毕业和压力变化中持续生效。改规则会消耗本学期一次行动。</p><div class="candidate-grid"></div><button class="close-btn">维持现状</button>`;
    const grid = modal.querySelector(".candidate-grid");
    Object.entries(ruleOptions).forEach(([category, group]) => {
      const card = document.createElement("article");
      card.className = "candidate-card";
      const choices = Object.entries(group).filter(([key]) => key !== "label").map(([key, option]) => {
        const active = state.labRules[category] === key;
        return `<button class="choice-btn" data-rule-category="${escapeAttr(category)}" data-rule-value="${escapeAttr(key)}" ${active ? "disabled" : ""}>${escapeHtml(option.name)}${active ? "（当前）" : ""}<small>${escapeHtml(option.desc)}</small></button>`;
      }).join("");
      card.innerHTML = `<h3>${escapeHtml(group.label)}</h3>${choices}`;
      grid.appendChild(card);
    });
    modal.querySelectorAll("[data-rule-category]").forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.ruleCategory;
        const value = button.dataset.ruleValue;
        state.labRules[category] = value;
        state.ruleChanges += 1;
        if (category === "subsidy" && value === "generous") change("trust", 5);
        if (category === "authorship" && value === "transparent") change("risk", -5);
        if (category === "graduation" && value === "strict") change("reputation", 3);
        closeModal();
        finishAction("rules", `📜 新规则上墙：「${ruleOptions[category][value].name}」。${ruleOptions[category][value].desc}`, { skipRandom: true });
      });
    });
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    openModal(modal);
  }

  function showRecruitment() {
    if (state.students.length >= studentCap()) {
      storyAndRender(`🚪 当前实验室最多容纳 ${studentCap()} 名学生。先升级课题组或送学生毕业吧。`);
      return;
    }
    if (!state.candidatePool.length) state.candidatePool = makeCandidatePool(state, 3);
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-art">门</div><p class="eyebrow">招生面试</p><h2>门口来了几份简历</h2><p class="event-body">面试只能看到部分维度。隐藏特质会在组会、抽查和署名事件里露出来。</p><div class="candidate-grid"></div><button class="close-btn">本轮先不招</button>`;
    const grid = modal.querySelector(".candidate-grid");
    state.candidatePool.forEach((candidate) => {
      const card = document.createElement("article");
      card.className = "candidate-card";
      card.innerHTML = `<h3>${escapeHtml(candidate.name)} · ${escapeHtml(candidate.program)}</h3><p>${escapeHtml(candidate.title)}</p><div class="tag-row">${candidate.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div><p class="event-body">研究 ${candidate.stats.research} · 写作 ${candidate.stats.writing} · 主动 ${candidate.stats.initiative} · 抗压 ${candidate.stats.resilience}</p><button class="choice-btn">录取 TA</button>`;
      card.querySelector("button").addEventListener("click", () => {
        const student = createStudent(candidate);
        state.students.push(student);
        state.candidatePool = makeCandidatePool(state, 3);
        closeModal();
        finishAction("recruit", `🎒 ${student.name} 加入课题组。你只知道 TA 的面试表现，还不知道真正的隐藏特质。`, { skipRandom: true });
      });
      grid.appendChild(card);
    });
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    openModal(modal);
  }

  function showTopicModal() {
    if (!state.students.length) return storyAndRender("🧩 课题想法很多，但还没有学生能一起做。先招生吧。");
    if ((state.topics || []).length >= topicLimit()) {
      storyAndRender(`🧩 当前最多同时推进 ${topicLimit()} 条课题线。先把手头问题做完。`);
      return;
    }
    const options = availableTopics().slice(0, 4);
    if (!options.length) return storyAndRender("🧩 课题库暂时被你薅空了。先把已有方向做完吧。");
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-art">题</div><p class="eyebrow">课题线</p><h2>选择一个可以真的做完的问题</h2><p class="event-body">课题线会被论文行动和组会推进。完成后会转化为论文进度、声望、经费或风险变化。</p><div class="candidate-grid"></div><button class="close-btn">先不立项</button>`;
    const grid = modal.querySelector(".candidate-grid");
    options.forEach((topic) => {
      const card = document.createElement("article");
      card.className = "candidate-card";
      const studentOptions = state.students.map((student) => `<option value="${escapeAttr(student.id)}">${escapeHtml(student.name)} · ${escapeHtml(student.program)}</option>`).join("");
      card.innerHTML = `<h3>${escapeHtml(topic.title)}</h3><p>${escapeHtml(topic.field)} · 难度 ${topic.difficulty} · 风险 ${topic.risk > 0 ? "+" : ""}${topic.risk}</p><div class="tag-row">${topic.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div><label class="select-label">负责人<select>${studentOptions}</select></label><button class="choice-btn">立项</button>`;
      card.querySelector("button").addEventListener("click", () => {
        const studentId = card.querySelector("select").value;
        const student = state.students.find((item) => item.id === studentId);
        const created = createTopic(topic, student);
        state.topics.push(created);
        if (student) {
          changeStudent(student, "trust", 3);
          changeStudent(student, "pressure", 4);
          student.status = `负责课题：${topic.title.slice(0, 6)}`;
        }
        closeModal();
        finishAction("topic", `🧩 立项「${topic.title}」，${student ? `${student.name} 暂任负责人` : "暂未分配负责人"}。`, { skipRandom: true });
      });
      grid.appendChild(card);
    });
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    openModal(modal);
  }

  function showCollabModal() {
    if (state.students.length < 2) return storyAndRender("🤝 拉同门互助至少需要两名学生。现在还没有同门可以互相折磨，也可以互相拯救。");
    if (!state.topics.length) return storyAndRender("🤝 先立项一条课题线，学生才知道要围绕什么协作。");
    const modal = document.createElement("div");
    modal.className = "modal";
    const studentOptions = state.students.map((student) => `<option value="${escapeAttr(student.id)}">${escapeHtml(student.name)} · ${escapeHtml(student.program)} · 压力 ${escapeHtml(student.pressure)}</option>`).join("");
    const topicOptions = state.topics.map((topic) => `<option value="${escapeAttr(topic.id)}">${escapeHtml(topic.title)} · ${escapeHtml(topic.progress)}/100</option>`).join("");
    modal.innerHTML = `<div class="modal-art">协</div><p class="eyebrow">同门互助</p><h2>让同门真的一起做点什么</h2><p class="event-body">搭伙会推进课题线，也会让学生互相学习。主动性、压力和隐藏特质会影响成败。</p><div class="candidate-grid"><article class="candidate-card"><label class="select-label">学生 A<select id="collab-a">${studentOptions}</select></label><label class="select-label">学生 B<select id="collab-b">${studentOptions}</select></label><label class="select-label">搭伙课题<select id="collab-topic">${topicOptions}</select></label><button class="choice-btn" id="start-collab">开始搭伙</button></article></div><button class="close-btn">取消</button>`;
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    modal.querySelector("#start-collab").addEventListener("click", () => {
      const a = state.students.find((student) => student.id === modal.querySelector("#collab-a").value);
      const b = state.students.find((student) => student.id === modal.querySelector("#collab-b").value);
      const topic = state.topics.find((item) => item.id === modal.querySelector("#collab-topic").value);
      if (!a || !b || !topic || a.id === b.id) {
        alert("请选择两名不同学生和一条课题线。");
        return;
      }
      closeModal();
      runCollaboration(a, b, topic);
    });
    openModal(modal);
  }

  function runCollaboration(a, b, topic) {
    const chemistry = Math.floor((a.initiative + b.initiative + a.resilience + b.resilience - a.pressure - b.pressure) / 4);
    const traitBonus = [a.hiddenTrait, b.hiddenTrait].includes("connector") ? 12 : 0;
    const justiceFriction = [a.hiddenTrait, b.hiddenTrait].includes("justice") && state.labRules.authorship === "bossFirst" ? -14 : 0;
    const roll = chemistry + traitBonus + justiceFriction + random(-18, 26);
    state.collaborations += 1;
    state.lastCollabPair = [a.id, b.id];
    if (roll >= 45) {
      const gain = clamp(16 + Math.floor((a.research + b.writing) / 30) + (hasEquipment("whiteboard") ? 4 : 0), 12, 36);
      topic.progress = clamp(topic.progress + gain, 0, 100);
      changeStudent(a, "research", 4);
      changeStudent(b, "writing", 4);
      changeStudent(a, "trust", 4);
      changeStudent(b, "trust", 4);
      changeStudent(a, "pressure", -3);
      changeStudent(b, "pressure", -3);
      a.status = `协作推进：${topic.title.slice(0, 6)}`;
      b.status = `协作推进：${topic.title.slice(0, 6)}`;
      state.collaborationWins += 1;
      completeTopics();
      finishAction("collab", `🤝 ${a.name} 和 ${b.name} 配合顺利，「${topic.title}」推进 +${gain}。`);
      return;
    }
    const salvage = clamp(8 + Math.floor((a.writing + b.research) / 45), 5, 18);
    topic.progress = clamp(topic.progress + salvage, 0, 100);
    changeStudent(a, "pressure", 10);
    changeStudent(b, "pressure", 10);
    changeStudent(a, "trust", -5);
    changeStudent(b, "trust", -5);
    change("trust", -3);
    state.collaborationConflicts += 1;
    a.status = "协作后有点别扭";
    b.status = "协作后有点别扭";
    finishAction("collab", `🤝 ${a.name} 和 ${b.name} 分工没说清，「${topic.title}」勉强推进 +${salvage}，但气氛变硬了。`);
  }

  function showSubmitModal() {
    if ((state.manuscripts || 0) <= 0) return storyAndRender("📨 还没有可投稿稿件。先把论文进度推满，别拿摘要去硬投。");
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-art">投</div><p class="eyebrow">论文投稿</p><h2>选一个投稿去处</h2><p class="event-body">不同档位会影响录用率、返修率、声望、经费、风险和学生压力。稿件数：${state.manuscripts}</p><div class="candidate-grid"></div><button class="close-btn">先不投稿</button>`;
    const grid = modal.querySelector(".candidate-grid");
    journalTiers.forEach((tier) => {
      const card = document.createElement("article");
      card.className = "candidate-card";
      card.innerHTML = `<h3>${escapeHtml(tier.name)}</h3><p>${escapeHtml(tier.desc)}</p><div class="tag-row"><span>录用 ${tier.accept}%</span><span>返修 ${tier.revise}%</span><span>声望 +${tier.rep}</span><span>风险 ${tier.risk > 0 ? "+" : ""}${tier.risk}</span></div><button class="choice-btn">投稿</button>`;
      card.querySelector("button").addEventListener("click", () => {
        closeModal();
        submitManuscript(tier);
      });
      grid.appendChild(card);
    });
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    openModal(modal);
  }

  function submitManuscript(tier) {
    state.manuscripts = Math.max(0, (state.manuscripts || 0) - 1);
    state.submissions = (state.submissions || 0) + 1;
    change("energy", -7);
    change("risk", tier.risk);
    state.students.forEach((student) => changeStudent(student, "pressure", tier.pressure));
    const roll = random(1, 100);
    if (roll <= tier.accept) {
      state.papers += 1;
      change("reputation", tier.rep);
      change("funds", tier.funds);
      state.students.forEach((student) => {
        if (student.contribution > 18 || student.thesis > 45) changeStudent(student, "thesis", 10);
        changeStudent(student, "trust", tier.id === "gray" ? -3 : 4);
      });
      finishAction("submit", `📨 投稿「${tier.name}」录用！论文 +1，声望 +${tier.rep}。`);
      return;
    }
    if (roll <= tier.accept + tier.revise) {
      state.revisions = (state.revisions || 0) + 1;
      state.manuscripts += 1;
      const reviseGain = tier.id === "top" ? 26 : 18;
      change("paperProgress", reviseGain);
      change("trust", 2);
      state.students.forEach((student) => {
        changeStudent(student, "writing", 3);
        changeStudent(student, "pressure", 6);
      });
      finishAction("submit", `📝 投稿「${tier.name}」进入大修。稿件退回但更清楚了，论文进度 +${reviseGain}。`);
      return;
    }
    state.rejections = (state.rejections || 0) + 1;
    const fallback = tier.id === "top" ? 22 : 14;
    change("paperProgress", fallback);
    change("reputation", tier.id === "gray" ? -4 : -1);
    change("trust", -3);
    state.students.forEach((student) => changeStudent(student, "pressure", 8));
    finishAction("submit", `📭 投稿「${tier.name}」被拒。至少评审意见还能回收一点，论文进度 +${fallback}。`);
  }

  function showMentorModal() {
    if (!state.students.length) return storyAndRender("🧑‍🏫 您准备认真指导，发现还没有学生。");
    showStudentPicker("单独指导", "选一名学生进行一对一指导。", (student) => {
      change("energy", -8);
      changeStudent(student, "research", 6);
      changeStudent(student, "writing", 5);
      changeStudent(student, "trust", state.trait === "warm" ? 12 : 8);
      changeStudent(student, "pressure", student.hiddenTrait === "fragile" ? -14 : -8);
      if (student.hiddenTrait === "fragile" || student.hiddenTrait === "careful") revealTrait(student);
      student.status = "刚被认真指导";
      finishAction("mentor", `🧑‍🏫 您和 ${student.name} 把问题拆成了能做的小块。能力与信任上升。`);
    });
  }

  function showAuthorshipModal() {
    if (!state.students.length) return storyAndRender("✍️ 现在还没有学生可以卷入署名宇宙。");
    showStudentPicker("署名安排", "选择一名和论文最相关的学生。", (student) => {
      const modal = document.createElement("div");
      modal.className = "modal event-modal";
      modal.innerHTML = `<div class="modal-art">署</div><p class="eyebrow">署名宇宙</p><h2>${escapeHtml(student.name)} 的贡献怎么算？</h2><p class="event-body">TA 当前论文贡献 ${student.contribution}。你可以把规则讲清楚，也可以走一点熟悉但危险的地狱梗。</p><div class="event-choices"></div>`;
      const choices = modal.querySelector(".event-choices");
      const add = (label, sub, effect) => {
        const button = document.createElement("button");
        button.className = "choice-btn";
        button.innerHTML = `${escapeHtml(label)}${sub ? `<small>${escapeHtml(sub)}</small>` : ""}`;
        button.addEventListener("click", () => { closeModal(); finishAction("authorship", `✍️ ${effect()}`); });
        choices.appendChild(button);
      };
      add("公开贡献表，学生够贡献就给一作", "公平路线，慢但稳", () => {
        if (student.hiddenTrait === "justice" || student.hiddenTrait === "careful") revealTrait(student);
        const transparent = state.labRules.authorship === "transparent";
        changeStudent(student, "trust", transparent ? 20 : 14);
        changeStudent(student, "pressure", -6);
        change("trust", transparent ? 12 : 8);
        change("risk", transparent ? -13 : -8);
        change("paperProgress", 8);
        return `贡献表贴上白板，${student.name} 终于不用猜导师心情。${transparent ? "透明署名规则让讨论更顺。" : "信任 +8，风险 -8。"}`;
      });
      add("强行安排 TA 做一作冲一篇", "短期推进，压力暴涨", () => {
        state.darkChoices += 1;
        const strict = state.labRules.graduation === "strict";
        changeStudent(student, "pressure", strict ? 28 : 22);
        changeStudent(student, "trust", -10);
        change("paperProgress", strict ? 34 : 28);
        change("risk", strict ? 14 : 10);
        return `${student.name} 被推上了一作位置，也被推上了深夜。论文推进很快，风险也跟着抬头。`;
      });
      add("导师抢一作：这是战略布局", "荒诞地狱梗，高风险", () => {
        state.darkChoices += 1;
        if (student.hiddenTrait === "justice") revealTrait(student);
        const bossFirst = state.labRules.authorship === "bossFirst";
        changeStudent(student, "trust", -26);
        changeStudent(student, "pressure", 18);
        change("reputation", bossFirst ? 10 : 7);
        change("trust", -18);
        change("risk", bossFirst ? 32 : 25);
        return `作者列表很快稳定了，课题组信任也很快不稳定了。${bossFirst ? "导师优先规则让反噬更像制度问题。" : "声望 +7，风险 +25。"}`;
      });
      openModal(modal);
    }, true);
  }

  function showAlumniModal() {
    if (!state.alumniArchive?.length) return storyAndRender("🎓 还没有毕业生。校友网络这种东西，得先有人从这里走出去。");
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-art">友</div><p class="eyebrow">校友档案</p><h2>毕业后的回声</h2><p class="event-body">联系校友可能带来合作、推荐学生、经费、声望或一条让人缓过来的消息。每次联络消耗一次行动。</p><div class="candidate-grid"></div><button class="close-btn">先不打扰</button>`;
    const grid = modal.querySelector(".candidate-grid");
    state.alumniArchive.forEach((alumni) => {
      const card = document.createElement("article");
      card.className = "candidate-card";
      card.innerHTML = `<h3>${escapeHtml(alumni.name)} · ${escapeHtml(alumni.destinationName)}</h3><p>${escapeHtml(alumni.program)} · ${escapeHtml(alumni.traitName)} · 信任 ${alumni.trust}</p><div class="tag-row"><span>${escapeHtml(alumni.benefit)}</span><span>已联络 ${alumni.contacted || 0}</span></div><button class="choice-btn">联系 TA</button>`;
      card.querySelector("button").addEventListener("click", () => {
        closeModal();
        contactAlumni(alumni.id);
      });
      grid.appendChild(card);
    });
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    openModal(modal);
  }

  function contactAlumni(alumniId) {
    const alumni = state.alumniArchive.find((item) => item.id === alumniId);
    if (!alumni) return;
    alumni.contacted = (alumni.contacted || 0) + 1;
    state.alumniContacts += 1;
    const destination = alumniDestinations.find((item) => item.id === alumni.destination) || alumniDestinations[0];
    if (destination.funds) change("funds", destination.funds);
    if (destination.reputation) change("reputation", destination.reputation);
    if (destination.paper) change("paperProgress", destination.paper);
    if (destination.project) change("projectProgress", destination.project);
    if (destination.trust) change("trust", destination.trust);
    if (destination.risk) change("risk", destination.risk);
    if (destination.id === "teacher" && state.students.length < studentCap() && Math.random() < .55) {
      const candidate = makeCandidate(state);
      candidate.tags.push("校友推荐");
      state.candidatePool.unshift(candidate);
    }
    finishAction("alumni", `🎓 ${alumni.name} 回信了：${destination.benefit}。${alumni.trust >= 65 ? "TA 还认真问了研究室近况。" : "语气礼貌，但距离感还在。"}`, { skipRandom: true });
  }

  function showStudentPicker(title, body, onPick, keepOpen = false) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-art">人</div><p class="eyebrow">学生系统</p><h2>${escapeHtml(title)}</h2><p class="event-body">${escapeHtml(body)}</p><div class="candidate-grid"></div><button class="close-btn">取消</button>`;
    const grid = modal.querySelector(".candidate-grid");
    state.students.forEach((student) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.innerHTML = `${escapeHtml(student.name)} · ${escapeHtml(student.status)}<small>信任 ${student.trust} · 压力 ${student.pressure} · 论文 ${student.thesis}/100 · ${student.traitRevealed ? traitBook[student.hiddenTrait].name : "隐藏特质未知"}</small>`;
      button.addEventListener("click", () => {
        if (!keepOpen) closeModal();
        onPick(student);
      });
      grid.appendChild(button);
    });
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    openModal(modal);
  }

  function showStudentDetail(studentId) {
    const student = state.students.find((item) => item.id === studentId);
    if (!student) return;
    const trait = student.traitRevealed ? traitBook[student.hiddenTrait].name : "？？？";
    const clue = student.traitRevealed ? traitBook[student.hiddenTrait].clue : "通过组会、抽查、署名事件逐步暴露";
    const collabState = (state.lastCollabPair || []).includes(student.id) ? "最近参与" : "暂无";
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-art"><span class="mini-face" style="--sprite-x:${studentSpriteOffset(student, 42)}px"></span></div><p class="eyebrow">${escapeHtml(student.program)} · 第 ${student.stage} 阶段</p><h2>${escapeHtml(student.name)}</h2><p class="event-body">${escapeHtml(student.status)} · 隐藏特质：${escapeHtml(trait)}。${escapeHtml(clue)}</p><div class="student-detail-grid">${detail("研究力", student.research)}${detail("写作", student.writing)}${detail("主动性", student.initiative)}${detail("抗压", student.resilience)}${detail("信任", student.trust)}${detail("压力", student.pressure)}${detail("论文贡献", student.contribution)}${detail("毕业进度", student.thesis)}${detail("协作状态", collabState)}</div><button class="close-btn">返回研究室</button>`;
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    openModal(modal);
  }

  function detail(label, value) {
    return `<div class="detail-metric"><span>${escapeHtml(label)}</span><b>${escapeHtml(value)}</b></div>`;
  }

  function lowEnergy() {
    storyAndRender("😵 您的精力见底了。先让全组喘口气，或者进入下一学期吧。");
  }

  function storyAndRender(text) {
    story(text);
    render();
  }

  function showEvent() {
    if (!state.students.length) return;
    state.pendingEvent = true;
    const available = termEvents.filter((event) => !event.when || event.when(state));
    const event = pick(available);
    const target = event.target ? event.target(state) : null;
    const template = $("event-template").content.cloneNode(true);
    template.querySelector(".modal-art").textContent = "事";
    template.querySelector(".event-kicker").textContent = event.kicker;
    template.querySelector(".event-title").textContent = event.title;
    template.querySelector(".event-body").textContent = typeof event.body === "function" ? event.body(target) : event.body;
    const choices = template.querySelector(".event-choices");
    event.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.innerHTML = `${escapeHtml(choice.label)}${choice.sub ? `<small>${escapeHtml(choice.sub)}</small>` : ""}`;
      button.addEventListener("click", () => resolveEvent(choice, target));
      choices.appendChild(button);
    });
    openModal(template);
  }

  function resolveEvent(choice, target) {
    const result = choice.effect(target);
    story(`🎲 ${result}`);
    state.pendingEvent = false;
    closeModal();
    resolveMilestones();
    checkObjectives();
    resolveMilestones();
    checkAchievements();
    if (state.risk >= 92) {
      showEnding("举报信已送达", "调查开始后，所有被临时涂改的结果都成了无法解释的空白。", "!", "whistleblower-report");
      return;
    }
    render();
  }

  function resolveMilestones() {
    while (state.paperProgress >= 100) {
      state.paperProgress -= 100;
      state.manuscripts += 1;
      change("reputation", 3);
      state.students.forEach((student) => {
        if (student.contribution > 35) {
          changeStudent(student, "trust", 4);
          changeStudent(student, "thesis", 8);
          student.contribution = 0;
        }
      });
      story("📄 论文初稿完成！它还不是“这真是最后一版了”，只是一份等待投稿的稿件。稿件 +1。");
    }
    while (state.projectProgress >= 100) {
      state.projectProgress -= 100;
      state.projects += 1;
      change("funds", 24);
      change("reputation", 7);
      story("📦 项目获批！经费到账提示音比任何音乐都动听。项目 +1。");
    }
    while (state.titleProgress >= 100) {
      state.titleProgress -= 100;
      state.titles += 1;
      change("reputation", 13);
      change("admin", 11);
      story("🎖️ 职称评审通过。实验室规模上限提高，但会议邀请也在变多。");
    }
    updateLabLevel();
  }

  function endTermStudentUpdate() {
    const graduates = [];
    if (state.labRules.subsidy === "generous") change("funds", -4);
    if (state.labRules.subsidy === "low") change("funds", 4);
    if (state.labRules.authorship === "bossFirst") {
      change("risk", 3);
      change("trust", -2);
    }
    state.students.forEach((student) => {
      const ruleGrowth = state.labRules.graduation === "strict" ? 3 : state.labRules.graduation === "lenient" ? -1 : 0;
      const equipmentGrowth = hasEquipment("workstation") ? 2 : 0;
      const growth = Math.floor((student.research + student.writing + student.initiative - student.pressure / 2) / 24) + ruleGrowth + equipmentGrowth;
      changeStudent(student, "thesis", clamp(growth, 1, 12));
      if (state.labRules.subsidy === "generous") {
        changeStudent(student, "trust", 4);
        changeStudent(student, "pressure", -5);
        changeStudent(student, "slacking", -4);
      } else if (state.labRules.subsidy === "low") {
        changeStudent(student, "trust", -4);
        changeStudent(student, "pressure", 6);
        changeStudent(student, "slacking", 5);
      }
      if (hasEquipment("napSofa") && student.pressure > 60) changeStudent(student, "pressure", -8);
      if (hasEquipment("coffeeCorner")) changeStudent(student, "pressure", -3);
      if (student.pressure > 82) {
        changeStudent(student, "trust", -8);
        change("trust", -3);
        student.status = "濒临崩溃";
      } else if (student.slacking > 72) {
        student.status = "稳定摸鱼";
      } else {
        student.status = pick(["稳步推进", "准备下次汇报", "补充实验", "整理数据"]);
      }
      const graduationTrustLine = state.labRules.graduation === "lenient" ? 20 : state.labRules.graduation === "strict" ? 42 : 28;
      if (student.thesis >= 100 && student.trust > graduationTrustLine) graduates.push(student);
    });
    graduates.forEach((student) => {
      state.students = state.students.filter((item) => item.id !== student.id);
      state.graduates += 1;
      const destination = pick(alumniDestinations);
      state.alumniArchive.push({
        id: `alumni-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name: student.name,
        program: student.program,
        trait: student.hiddenTrait,
        traitName: traitBook[student.hiddenTrait]?.name || "未知特质",
        trust: student.trust,
        destination: destination.id,
        destinationName: destination.name,
        benefit: destination.benefit,
        contacted: 0
      });
      change("reputation", 6);
      change("trust", 5);
      story(`🎓 ${student.name} 顺利毕业，${destination.name}。毕业照里 TA 笑得很真。声望 +6。`);
    });
  }

  function nextTerm() {
    if (!state || state.actionsTaken < MAX_ACTIONS || state.pendingEvent) return;
    let advancedYear = false;
    state.actionsTaken = 0;
    change("energy", 9);
    change("admin", -4);
    change("risk", -2);
    endTermStudentUpdate();
    if (state.trust < 16 || state.students.some((student) => student.trust < 8 && student.pressure > 75)) {
      showEnding("课题组的灯一盏盏熄了", "学生们没有吵架，只是陆续换方向、退群、搬走工位。你第一次理解，信任不是 KPI。", "灯", "lab-collapse");
      return;
    }
    if (state.season === 0) {
      state.season = 1;
      story("🌸 春季学期开始。窗外的树发芽，待办事项也发芽。");
    } else {
      state.season = 0;
      state.year += 1;
      advancedYear = true;
      state.candidatePool = makeCandidatePool(state, 3);
      change("titleProgress", 12 + state.papers + state.projects);
      story(`🍂 第 ${state.year} 年开始。招生门口又出现了几双清澈但危险的眼睛。`);
    }
    checkObjectives();
    resolveMilestones();
    checkAchievements();
    if (state.year > TOTAL_YEARS) concludeCareer();
    else if (advancedYear && showAnnualReview()) return;
    else render();
  }

  function concludeCareer() {
    let title = "平稳退休";
    let icon = "终";
    let body = "研究室没有成为传说，但白板一直亮着。有人记得论文，也有人记得你认真听完过他们的困惑。";
    let endingId = "steady-retirement";
    if (state.risk >= 70) {
      title = "学术档案室的长夜"; icon = "档"; endingId = "scandal-retirement";
      body = "退休前的审查比预想中更早来到。那些被掩盖的署名、截图和原始数据最终变成一份需要逐页解释的材料。";
    } else if (state.ruleChanges >= 5 && state.darkChoices >= 3) {
      title = "制度怪物"; icon = "规"; endingId = "policy-monster";
      body = "墙上的制度越来越厚，学生的声音越来越薄。你建立了一套看似精密的规则，也让研究室变成了规则本身。";
    } else if (state.darkChoices >= 4 && state.papers >= 5) {
      title = "学术包工头"; icon = "包"; endingId = "academic-contractor";
      body = "论文很多，学生也很多，只是大家毕业后很少再提起那间办公室。你赢了数字，输掉了回声。";
    } else if ((state.equipment || []).length >= 5 && state.graduates >= 3 && state.risk < 35) {
      title = "现代化桃李工坊"; icon = "器"; endingId = "modern-lab";
      body = "设备终于不再全靠玄学，制度也没有吞掉人。学生们在这间研究室里学会了研究，也学会了保护自己。";
    } else if (state.collaborationWins >= 5 && state.trust >= 62 && state.risk < 45) {
      title = "同门互助网络"; icon = "协"; endingId = "peer-network";
      body = "你没有把所有答案都攥在自己手里。学生们学会了互相解释、互相补台，也互相见证了成长。";
    } else if ((state.alumniArchive || []).length >= 4 && state.alumniContacts >= 3 && state.trust >= 60) {
      title = "校友会还亮着"; icon = "友"; endingId = "alumni-network";
      body = "毕业并没有把关系切断。有人带来合作，有人推荐新人，也有人只是回来告诉你：当年那些认真对待，后来真的有用。";
    } else if ((state.reviewStreak || 0) >= 3 && state.risk < 45 && state.admin < 70) {
      title = "年度优秀标本"; icon = "考"; endingId = "review-star";
      body = "你连续几年把考核表填得很好看，也没有把学生压成表格的耗材。学院喜欢这个故事，学生也还愿意出现在故事里。";
    } else if (state.graduates >= 5 && state.trust >= 70) {
      title = "桃李满门"; icon = "桃"; endingId = "peach-garden";
      body = "学生们去了不同地方，却在节日里把你的聊天框点亮。你留下的不只是成果，还有一种做研究的方式。";
    } else if (state.reputation >= 78 && state.papers >= 5 && state.projects >= 3 && state.titles >= 2) {
      title = "一路卷到院士候选"; icon = "院"; endingId = "academy-candidate";
      body = "你把研究室推到聚光灯下。恭喜，接下来还有更多会议和更厚的材料等着你。";
    } else if (state.trust >= 75 && state.risk < 25) {
      title = "学生口中的好导师"; icon = "好"; endingId = "warm-retirement";
      body = "头衔未必最耀眼，但毕业多年的学生依旧会在节日发来消息。";
    } else if (state.admin >= 65 && state.reputation >= 45) {
      title = "从实验室走向会议室"; icon = "会"; endingId = "administration-route";
      body = "你成了擅长协调资源的人。研究室的白板还在，只是日程表占据了更多位置。";
    }
    showEnding(title, body, icon, endingId);
  }

  function showEnding(title, body, icon, endingId) {
    if (!state) return;
    state.ended = true;
    checkAchievements();
    profile.completedRuns += 1;
    if (!profile.endingIds.includes(endingId)) profile.endingIds.push(endingId);
    saveProfile();
    localStorage.removeItem(SAVE_KEY);
    localStorage.removeItem(LEGACY_SAVE_KEY);
    const modal = document.createElement("div");
    modal.className = "modal ending-modal event-modal";
    modal.innerHTML = `<div class="modal-art">${escapeHtml(icon)}</div><p class="eyebrow">生涯结局</p><h2>${escapeHtml(title)}</h2><p class="event-body">${escapeHtml(body)}</p><div class="end-score"><div><small>论文</small><b>${state.papers}</b></div><div><small>毕业学生</small><b>${state.graduates}</b></div><div><small>伦理风险</small><b>${state.risk}</b></div></div><button class="primary-btn" id="restart-game">开启下一周目</button>`;
    openModal(modal);
    $("restart-game").addEventListener("click", () => {
      closeModal();
      state = null;
      renderLegacySummary();
      $("game-screen").classList.add("hidden");
      $("welcome-screen").classList.remove("hidden");
    });
  }

  function unlocked() {
    return achievements.filter((achievement) => achievement.test(state));
  }

  function checkAchievements() {
    unlocked().forEach((achievement) => {
      if (!state.achievementIds.includes(achievement.id)) {
        state.achievementIds.push(achievement.id);
        if (!profile.achievementIds.includes(achievement.id)) {
          profile.achievementIds.push(achievement.id);
          saveProfile();
        }
        story(`🏆 解锁成就：「${achievement.title}」——${achievement.desc}`);
      }
    });
  }

  function render() {
    if (!state) return;
    $("lab-title").textContent = state.lab;
    $("school-title").textContent = state.school;
    $("teacher-title").textContent = `${state.teacher}的像素研究室`;
    $("trait-title").textContent = traitLabel();
    $("term-label").textContent = `第 ${state.year} 年 · ${seasonLabel()}`;
    $("action-label").textContent = `本学期行动：${MAX_ACTIONS - state.actionsTaken} / ${MAX_ACTIONS}`;
    $("lab-level").textContent = `Lv.${state.labLevel}`;
    $("career-count").textContent = `${state.year} / ${TOTAL_YEARS} 年`;
    ["reputation", "funds", "trust", "energy", "admin", "risk"].forEach((key) => {
      $(`stat-${key}`).textContent = state[key];
    });
    [["paper", "paperProgress"], ["project", "projectProgress"], ["title", "titleProgress"]].forEach(([kind, key]) => {
      $(`${kind}-progress`).style.width = `${state[key]}%`;
      $(`${kind}-detail`).textContent = `${state[key]}/100`;
    });
    $("paper-count").textContent = state.papers;
    $("manuscript-count").textContent = state.manuscripts || 0;
    $("project-count").textContent = state.projects;
    $("title-count").textContent = state.titles;
    $("student-count").textContent = state.students.length;
    $("student-cap").textContent = studentCap();
    $("alumni-count").textContent = (state.alumniArchive || []).length;
    $("equipment-count").textContent = (state.equipment || []).length;
    $("collab-count").textContent = state.collaborations || 0;
    $("rules-summary").textContent = rulesSummary();
    $("review-count").textContent = (state.annualReviews || []).length;
    $("achievement-count").textContent = profile.achievementIds.length;
    renderObjectives();
    renderTopics();
    renderStudents();
    renderEquipmentDecor();
    renderActions();
    renderLog();
    $("next-term").disabled = state.actionsTaken < MAX_ACTIONS || state.pendingEvent;
    autoSave();
  }

  function rulesSummary() {
    const labels = {
      subsidy: { normal: "标补", generous: "厚补", low: "低补" },
      authorship: { transparent: "透明", ambiguous: "商量", bossFirst: "导师先" },
      graduation: { balanced: "均衡", lenient: "宽松", strict: "严格" }
    };
    const rules = { ...defaultLabRules(), ...(state.labRules || {}) };
    return `${labels.subsidy[rules.subsidy]}·${labels.authorship[rules.authorship]}·${labels.graduation[rules.graduation]}`;
  }

  function renderEquipmentDecor() {
    const decor = $("equipment-decor");
    const names = Object.fromEntries(equipmentCatalog.map((item) => [item.id, item.name]));
    decor.innerHTML = (state.equipment || []).map((id) => `<span class="equip equip-${escapeAttr(id)}" data-label="${escapeAttr(names[id] || "设备")}"></span>`).join("");
  }

  function renderObjectives() {
    seedObjectives(state);
    $("objective-list").innerHTML = state.objectives.map((id) => {
      const objective = objectiveById(id);
      if (!objective) return "";
      const target = objective.target(state);
      const progress = objectiveProgress(objective);
      const percent = target ? clamp((progress / target) * 100) : 0;
      return `<article class="objective-item"><b>${escapeHtml(objective.title)}</b><small>${escapeHtml(objective.desc)} · ${progress}/${target}</small><small>奖励：${escapeHtml(objective.rewardText)}</small><span class="objective-bar"><em style="width:${percent}%"></em></span></article>`;
    }).join("") || `<p class="event-body">学院暂时没有新任务，趁机喝口水。</p>`;
  }

  function renderTopics() {
    $("topic-list").innerHTML = (state.topics || []).map((topic) => {
      const student = assignedStudent(topic);
      const riskClass = topic.risk > 8 ? "risky" : "";
      return `<article class="topic-item ${riskClass}"><b>${escapeHtml(topic.title)}</b><small>${escapeHtml(topic.field)} · 负责人：${escapeHtml(student ? student.name : "未分配")}</small><small>完成奖励：论文 +${topic.paper} · 声望 +${topic.reputation}${topic.funds ? ` · 经费 +${topic.funds}` : ""}${topic.risk ? ` · 风险 ${topic.risk > 0 ? "+" : ""}${topic.risk}` : ""}</small><span class="topic-bar"><em style="width:${topic.progress}%"></em></span><span class="topic-tags">${topic.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</span></article>`;
    }).join("") || `<p class="event-body">还没有课题线。立项一个具体问题，论文就不再只是“继续推进”。</p>`;
  }

  function renderStudents() {
    const sprites = $("student-sprites");
    sprites.innerHTML = state.students.map((student, index) => {
      const slot = spriteSlots[index % spriteSlots.length];
      const statusClass = student.pressure > 78 ? "stressed" : student.status.includes("爆发") ? "breakthrough" : student.slacking > 65 ? "slacking" : "";
      return `<button class="student-sprite ${statusClass}" data-student="${escapeAttr(student.id)}" style="left:${slot[0]}%;top:${slot[1]}%;--sprite-x:${studentSpriteOffset(student, 32)}px"><span class="status-bubble">${escapeHtml(shortStatus(student))}</span><span class="sprite-frame"></span></button>`;
    }).join("");
    sprites.querySelectorAll("[data-student]").forEach((button) => button.addEventListener("click", () => showStudentDetail(button.dataset.student)));

    $("student-list").innerHTML = state.students.map((student) => `
      <button class="student-card" data-student-card="${escapeAttr(student.id)}">
        <span class="mini-face" style="--sprite-x:${studentSpriteOffset(student, 42)}px"></span>
        <span>
          <b>${escapeHtml(student.name)} · ${escapeHtml(student.program)}</b>
          <small>${escapeHtml(student.status)} · ${student.traitRevealed ? escapeHtml(traitBook[student.hiddenTrait].name) : "隐藏特质未知"}</small>
          <span class="student-meters"><i title="信任"><em style="width:${student.trust}%"></em></i><i title="压力"><em style="width:${student.pressure}%"></em></i></span>
        </span>
      </button>`).join("") || `<p class="event-body">还没有学生。先安排招生面试，别让办公室只剩咖啡机陪你。</p>`;
    document.querySelectorAll("[data-student-card]").forEach((button) => button.addEventListener("click", () => showStudentDetail(button.dataset.studentCard)));
  }

  function shortStatus(student) {
    if (student.pressure > 84) return "要炸";
    if (student.slacking > 72) return "摸鱼";
    if (student.status.includes("爆发")) return "爆发";
    if (student.traitRevealed) return traitBook[student.hiddenTrait].name;
    return student.status.slice(0, 4);
  }

  function studentSpriteOffset(student, frameWidth) {
    const key = `${student.id}${student.name}`;
    let hash = 0;
    for (let index = 0; index < key.length; index += 1) hash = (hash + key.charCodeAt(index) * (index + 3)) % 8;
    return -frameWidth * hash;
  }

  function actionRequirement(actionId) {
    const needsStudent = ["mentor", "meeting", "collab", "inspect", "topic", "research", "authorship"];
    if (!state.students.length && needsStudent.includes(actionId)) return "先招学生，不然没人干活";
    if (actionId === "collab" && state.students.length < 2) return "至少要有两个同门";
    if (actionId === "submit" && !(state.manuscripts || 0)) return "先攒出一篇稿件";
    if (actionId === "alumni" && !(state.alumniArchive || []).length) return "有人毕业后再说";
    return "";
  }

  function actionHint() {
    if (!state.students.length) return "第一步：先点「招生面试」，课题组没人真的开不了工。";
    if (state.actionsTaken >= MAX_ACTIONS) return "本学期行动已用完，可以进入下一学期。";
    if (state.pendingEvent) return "先处理当前事件，再继续安排实验室。";
    return `在实验室行动台安排今天干什么：还剩 ${MAX_ACTIONS - state.actionsTaken} 次行动。`;
  }

  function renderActions() {
    const disabled = state.actionsTaken >= MAX_ACTIONS || state.pendingEvent || state.ended;
    $("lab-action-hint").textContent = actionHint();
    $("lab-action-hotspots").innerHTML = actionDefinitions.map((action) => {
      const requirement = actionRequirement(action.id);
      const locked = Boolean(requirement);
      const suggested = !state.students.length && action.id === "recruit";
      return `<button class="lab-action-btn action-${escapeAttr(action.id)} ${suggested ? "suggested" : ""}" data-action="${escapeAttr(action.id)}" ${disabled || locked ? "disabled" : ""} title="${escapeAttr(requirement || action.note)}"><span class="action-icon">${escapeHtml(action.icon)}</span><b>${escapeHtml(action.title)}</b><small>${escapeHtml(requirement || action.note)}</small></button>`;
    }).join("");
    $("lab-action-hotspots").querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => {
      const action = actionDefinitions.find((item) => item.id === button.dataset.action);
      if (action) action.run();
    }));
  }

  function renderLog() {
    $("story-log").innerHTML = state.log.map((item) => `<li>${escapeHtml(item.text)}<small>${escapeHtml(item.term)}</small></li>`).join("") || "<li>研究室刚刚挂牌。门口的简历和办公室的咖啡机都在等待命运。</li>";
  }

  function showAchievements() {
    const modal = document.createElement("div");
    modal.className = "modal";
    const cards = achievements.map((achievement) => {
      const got = profile.achievementIds.includes(achievement.id);
      return `<article class="achievement-item ${got ? "" : "locked"}"><b>${got ? "已解锁" : "未解锁"} · ${escapeHtml(achievement.title)}</b><small>${escapeHtml(achievement.desc)}</small></article>`;
    }).join("");
    modal.innerHTML = `<div class="modal-art">奖</div><p class="eyebrow">${profile.achievementIds.length} / ${achievements.length} 已解锁</p><h2>研究室成就图鉴</h2><div class="achievement-grid">${cards}</div><button class="close-btn">收好奖杯</button>`;
    openModal(modal);
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
  }

  function showSaveMenu() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-art">存</div><p class="eyebrow">数据只留在你的浏览器</p><h2>存档与设置</h2><p class="event-body">游戏会自动存档。导出的 JSON 不上传任何服务器；删除当前存档不会删除校史档案。</p><div class="event-choices"><button class="choice-btn" id="export-save">导出本地存档</button><label class="choice-btn" for="import-save">导入存档<input id="import-save" type="file" accept="application/json" hidden /></label><button class="choice-btn" id="wipe-save">删除当前存档</button></div><button class="close-btn">返回研究室</button>`;
    openModal(modal);
    modal.querySelector(".close-btn").addEventListener("click", closeModal);
    $("export-save").addEventListener("click", exportSave);
    $("import-save").addEventListener("change", importSave);
    $("wipe-save").addEventListener("click", () => {
      if (confirm("确定删除当前本地存档吗？此操作无法撤销。")) {
        localStorage.removeItem(SAVE_KEY);
        localStorage.removeItem(LEGACY_SAVE_KEY);
        closeModal();
        state = null;
        renderLegacySummary();
        $("game-screen").classList.add("hidden");
        $("welcome-screen").classList.remove("hidden");
      }
    });
  }

  function exportSave() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `taoli-lab-v2-${state.teacher}-year-${state.year}.json`;
    a.click();
    URL.revokeObjectURL(url);
    story("💾 已导出 V2 存档。");
    closeModal();
    render();
  }

  function importSave(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = migrateSave(JSON.parse(reader.result));
        if (!parsed || !parsed.teacher || !parsed.lab) throw new Error("invalid");
        state = parsed;
        closeModal();
        $("welcome-screen").classList.add("hidden");
        $("game-screen").classList.remove("hidden");
        render();
      } catch {
        alert("这不是可用的《桃李研究室》存档。");
      }
    };
    reader.readAsText(file);
  }

  function autoSave() {
    if (state && !state.ended) localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  }

  function loadSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY) || localStorage.getItem(LEGACY_SAVE_KEY);
      return raw ? migrateSave(JSON.parse(raw)) : null;
    } catch {
      return null;
    }
  }

  function startGame() {
    const teacher = $("professor-name").value.trim() || "林老师";
    const school = $("school-name").value.trim() || "云朵大学";
    const lab = $("lab-name").value.trim() || "摸鱼也要发论文研究室";
    const trait = document.querySelector("input[name=trait]:checked").value;
    state = newState({ teacher, school, lab, trait });
    story("🌱 研究室挂牌成立。门口有学生犹豫要不要敲门，屋里有咖啡机犹豫要不要报废。");
    checkAchievements();
    $("welcome-screen").classList.add("hidden");
    $("game-screen").classList.remove("hidden");
    render();
  }

  function continueGame() {
    const saved = loadSave();
    if (!saved) return;
    state = saved;
    $("welcome-screen").classList.add("hidden");
    $("game-screen").classList.remove("hidden");
    render();
  }

  function openModal(content) {
    const root = $("modal-root");
    root.innerHTML = "";
    root.appendChild(content);
    root.classList.remove("hidden");
  }

  function closeModal() {
    $("modal-root").classList.add("hidden");
    $("modal-root").innerHTML = "";
    if (state) {
      state.pendingEvent = false;
      render();
    }
  }

  function escapeHtml(text) {
    const d = document.createElement("div");
    d.textContent = String(text);
    return d.innerHTML;
  }

  function escapeAttr(text) {
    return escapeHtml(text).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function init() {
    renderLegacySummary();
    if (loadSave()) $("continue-game").classList.remove("hidden");
    $("start-game").addEventListener("click", startGame);
    $("continue-game").addEventListener("click", continueGame);
    $("next-term").addEventListener("click", nextTerm);
    $("achievements-btn").addEventListener("click", showAchievements);
    $("save-menu").addEventListener("click", showSaveMenu);
    $("clear-log").addEventListener("click", () => { if (state) { state.log = []; render(); } });
  }

  init();
})();
