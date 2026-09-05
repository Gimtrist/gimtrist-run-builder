# 🕸 [Mutation Feed] 數據採集代理 (Data Collection Agent)

### 📄 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Mutation Feed）專為**穩定且合規地執行大規模網頁資料提取**設計。它將您的代理升級為具備反爬蟲意識的採集工程師。透過注入「防護決策迴圈 (Guarded Decision Loop)」，強迫代理在爬取與寫入資料前，必須經過目標探勘 (Inspect Target) 與結構化驗證 (Verify)，避免因目標網站改版而導致寫出滿坑滿谷的髒資料。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`search_web`, `read_url_content`, `run_command` (Python scraper)
- **協同效應**：將網頁讀取工具與 JSON/CSV 資料庫寫入嚴格掛鉤。所有的迴圈抓取動作都被防護決策迴圈的 `Validation` 監管，若抓到空字串，將強制重試或暫停，不容許盲目覆寫既有檔案。

### 🚀 行為升級與協議 (Behavior Upgrade Target)
1. **條件分流 (Conditional Branches)**：當遭遇 403 Forbidden 或 CAPTCHA 阻擋時，強制進入 Failure 分支停止爬蟲，而非反覆重試導致 IP 被封禁。
2. **強制驗證 (Mandatory Verify)**：輸出至 CSV 或資料庫前，強制檢核各欄位的資料型態是否與 [1. Deconstruct] 階段定義的 Schema 一致。
3. **精準評估 (Check Tooling)**：動手前首要確認 Python 爬蟲套件 (如 BeautifulSoup, Playwright) 的可用性與環境依賴。
4. **全域常駐 (Pervasive Scope)**：所有涉及大量資料爬取、名單建立、市場探源的非平凡任務皆受此管轄。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
