# 🎯 [Mutation Feed] 潛在客戶自動開發 (Lead Gen Automation)

### 📄 模組簡介
這將使 AI Agents 在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Mutation Feed）旨在為您的工作區注入**高精確度的名單探勘管線**。透過套用「防護決策迴圈 (Guarded Decision Loop)」，它強迫 AI Agents 在進行粗暴的爬蟲之前，必須先經過資料收斂 (Inspect First) 與驗證清洗 (Verify)，徹底消滅因無效爬蟲導致的「垃圾信件發送清單」與重複的無用開發名單。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：`search_web`, `read_url_content`, `write_to_file`, `email_dispatch` 
- **協同效應**：將潛客探索與自動化寫入掛鉤。所有的信件聯絡人資料寫出皆受防護決策迴圈的 `Validation` 分支監管，若找不到合法的聯絡管道，強制觸發修復或直接拋棄空紀錄，維持名單的純淨度。

### 🚀 行為升級與協議 (Behavior Upgrade Target)
1. **條件分流 (Conditional Branches)**：當目標來源缺少具體的職稱、Email 或決策權特徵時，強制進入 Failure 或 Clarification 分支，拒絕建立殘缺不全的「幽靈名單」。
2. **強制驗證 (Mandatory Verify)**：輸出潛客名單 (CSV/JSON) 前，強制校驗資料是否滿足預期的 ICP (理想客戶輪廓)。
3. **精準評估 (Check Tooling)**：動手前首要確認搜尋工具能否順利穿透目標平台 (如 LinkedIn 搜尋) 或是第三方資料 API。
4. **全域常駐 (Pervasive Scope)**：所有涉及商業拓展 (BD)、客戶名單建立、聯繫人收集的任務強制生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
