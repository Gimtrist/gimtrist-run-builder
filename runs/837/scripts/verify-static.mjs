import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const files = [
  "index.html", "styles.css", "game.js", "README.md", "docs/GAME_DESIGN.md",
  "docs/CONTENT_BIBLE.md", ".github/workflows/deploy-pages.yml"
];

const requiredIds = [
  "welcome-screen", "game-screen", "start-game", "continue-game", "next-term",
  "lab-action-hotspots", "lab-action-hint", "modal-root", "stat-reputation", "stat-risk", "story-log",
  "objective-list", "topic-list",
  "manuscript-count", "collab-count", "alumni-count",
  "student-sprites", "student-list", "student-count", "student-cap",
  "equipment-decor",
  "lab-level", "paper-progress", "project-progress", "title-progress",
  "equipment-count", "rules-summary", "review-count"
];

for (const file of files) {
  if (!existsSync(resolve(root, file))) throw new Error(`缺少必要文件：${file}`);
}

const html = readFileSync(resolve(root, "index.html"), "utf8");
const css = readFileSync(resolve(root, "styles.css"), "utf8");
const game = readFileSync(resolve(root, "game.js"), "utf8");
const readme = readFileSync(resolve(root, "README.md"), "utf8");
const design = readFileSync(resolve(root, "docs/GAME_DESIGN.md"), "utf8");
const bible = readFileSync(resolve(root, "docs/CONTENT_BIBLE.md"), "utf8");
const workflow = readFileSync(resolve(root, ".github/workflows/deploy-pages.yml"), "utf8");

for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`)) throw new Error(`页面缺少关键节点：#${id}`);
}
for (const asset of ["styles.css", "game.js"]) {
  if (!html.includes(asset)) throw new Error(`首页没有加载 ${asset}`);
}

const coreFeatures = [
  "SAVE_KEY = \"taoli-lab-save-v2\"", "LEGACY_SAVE_KEY", "version: 2",
  "migrateSave", "studentNames", "traitBook", "candidateArchetypes",
  "equipmentCatalog", "ruleOptions", "topicCatalog", "journalTiers", "alumniDestinations", "objectiveDefinitions", "defaultLabRules",
  "annualReviewScore", "annualReviewRating", "showAnnualReview", "resolveAnnualReview", "annualReviews",
  "makeCandidatePool", "createStudent", "studentCap", "showRecruitment",
  "runMeeting", "runInspection", "showTopicModal", "showSubmitModal", "submitManuscript", "advanceTopics", "completeTopics", "renderTopics", "showEquipmentModal", "showRulesModal", "showAuthorshipModal", "termEvents",
  "showCollabModal", "runCollaboration",
  "showAlumniModal", "contactAlumni",
  "checkObjectives", "renderObjectives", "resolveMilestones", "concludeCareer", "showAchievements", "exportSave", "importSave"
];
for (const feature of coreFeatures) {
  if (!game.includes(feature)) throw new Error(`游戏脚本未包含 V2 核心功能：${feature}`);
}

const actions = ["recruit", "mentor", "meeting", "collab", "inspect", "topic", "research", "submit", "project", "title", "equipment", "rules", "authorship", "alumni", "rest"];
for (const action of actions) {
  if (!game.includes(`id: "${action}"`)) throw new Error(`缺少行动：${action}`);
}

const traits = ["slacker", "burst", "fragile", "connector", "careful", "machine", "justice", "nightOwl"];
for (const trait of traits) {
  if (!game.includes(`${trait}:`)) throw new Error(`缺少隐藏特质：${trait}`);
}

const events = ["review-spotcheck", "review-showcase", "hidden-burst", "authorship-storm", "anonymous-wall", "conference", "equipment", "server-rescue", "subsidy-talk", "graduation-line", "slacker-proof", "fragile-meltdown", "connector-collab", "machine-figure", "nightowl-burnout", "topic-stuck", "topic-breakthrough", "collab-spark", "collab-conflict", "alumni-referral", "alumni-honest-mail", "reviewer", "major-revision", "desk-reject", "gray-channel"];
for (const eventId of events) {
  if (!game.includes(`id: "${eventId}"`)) throw new Error(`缺少 V2 随机事件：${eventId}`);
}

for (const candidate of ["设备玄学研究员", "跨校交换生", "AI 工具狂热者", "反内卷观察员", "未来 PI 苗子"]) {
  if (!game.includes(candidate)) throw new Error(`缺少高级候选人类型：${candidate}`);
}

const endings = ["桃李满门", "校友会还亮着", "同门互助网络", "年度优秀标本", "现代化桃李工坊", "制度怪物", "学术包工头", "一路卷到院士候选", "学生口中的好导师", "课题组的灯一盏盏熄了"];
for (const ending of endings) {
  if (!game.includes(ending)) throw new Error(`缺少结局：${ending}`);
}

for (const cssToken of ["pixel-lab", "student-sprite", "status-bubble", "equipment-decor", "lab-action-hotspots", "lab-action-btn", "objective-list", "topic-list", "candidate-card", "@media"]) {
  if (!css.includes(cssToken)) throw new Error(`缺少 V2 像素 UI 样式：${cssToken}`);
}

for (const docToken of ["V2", "像素实验室", "学生个体系统", "招生面试", "学院任务", "年度考核", "课题线", "投稿", "同门协作", "校友", "设备", "实验室规则", "随机事件", "地狱梗"]) {
  if (!readme.includes(docToken) && !design.includes(docToken) && !bible.includes(docToken)) {
    throw new Error(`文档未同步 V2 方向：${docToken}`);
  }
}

if (/\b(fetch|XMLHttpRequest|WebSocket)\b/.test(game)) throw new Error("单机版本不应包含联网游戏逻辑");
if (!game.includes("function escapeAttr(text)")) throw new Error("动态 HTML 属性缺少专用转义函数");
for (const unsafeAttribute of ['value="${student.id}"', 'value="${topic.id}"', 'data-student="${student.id}"', 'data-student-card="${student.id}"']) {
  if (game.includes(unsafeAttribute)) throw new Error(`发现未转义的存档属性插值：${unsafeAttribute}`);
}
for (const token of ["actions/deploy-pages@v4", "actions/upload-pages-artifact@v3", "node scripts/verify-static.mjs"]) {
  if (!workflow.includes(token)) throw new Error(`GitHub Pages 工作流不完整：${token}`);
}

execFileSync(process.execPath, ["--check", resolve(root, "game.js")], { stdio: "inherit" });
console.log("静态校验通过：V2 像素实验室、学生系统、学院任务、年度考核、课题线、投稿系统、同门协作、校友系统、招生面试、隐藏特质、组会抽查、设备规则、署名事件、多结局、存档迁移、离线边界、响应式样式与 JavaScript 语法均已验证。");
