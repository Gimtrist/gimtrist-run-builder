# 🛡️ [Training Feed] 跨國合規執行包裹器 (Global Compliance Wrapper)

### 📄 模組簡介
這將使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Training Feed）專為**具備跨國業務與法規敏感度**的場景設計。它將您的工作區升級為一個「合規看門狗」。透過注入「防護決策迴圈 (Guarded Decision Loop)」，它強迫代理在呼叫任何外部 API、傳送電子郵件或採集用戶資料前，必須先進行地理位置與當地法規 (如 GDPR, CCPA) 的強制比對驗證 (Mandatory Verify)，確保代理的行為絕不越過合法界線。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：所有涉及與外部世界互動的 Skills / Plugins (如發送 Email、寫入客戶 DB、呼叫第三方 API)。
- **協同效應**：將合規檢核化為執行所有工具前的「前置閘門 (Pre-execution Hook)」。若 `Check Capability` 發現行為抵觸該國法規，代理將立刻切斷工具呼叫，杜絕天價罰單風險。

### 🚀 行為升級與協議 (Behavior Upgrade Target)
1. **條件分流 (Conditional Branches)**：當遇到模稜兩可的隱私條款或跨境資料傳輸要求時，強制進入 Clarification 分支要求人類主管覆核。
2. **強制驗證 (Mandatory Verify)**：產出任何對外發佈的行銷信件或合約前，嚴格檢視是否包含必須揭露的免責聲明 (Disclaimer) 或退訂機制 (Opt-out)。
3. **精準評估 (Check Capability)**：解析用戶指令中的目標受眾所在地，並掛載對應法規字典 (如歐盟、加州)。
4. **全域常駐 (Pervasive Scope)**：處理任何非平凡任務、涉及外部通訊與數據庫轉移時強制生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
