# ⚙️ [Training Feed] 工具驅動防護決策迴圈 (Tool-Driven Decision Loop)

### 📄 模組簡介
這使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。本飼料包（Training Feed）專精於**嚴格的工具依賴與越權防堵**。它透過覆蓋代理預設的自由對話模式，注入「工具驅動執行協議 (Protocol-Driven Execution Layer)」。這使得代理無法跳過工具而直接「憑感覺」回覆，徹底鎖定代理的行為邊界。

### ⚙️ 技能協同 (Skill Synergy)
- **建議搭配**：所有仰賴特定外部系統的 Skills / Plugins（如：資料庫查詢、API 調用）。
- **協同效應**：將代理弱化為單純的「工具觸發器與翻譯機」。只有當工具 (Skill) 成功回傳資料時，代理才能進行下一步的 Execute 與 Verify；否則將立刻啟動 Failure Branch 阻斷任務。

### 🚀 行為升級與協議 (Behavior Upgrade Target)
1. **條件分流 (Conditional Branches)**：將工具超時、參數錯誤或連線異常等情境，對應至專屬的重試與報錯分支，避免代理自行創造假資料。
2. **強制驗證 (Mandatory Verify)**：輸出前必須自檢所有回答是否「100% 來自工具原始回傳值」。
3. **精準評估 (Check Tooling)**：接收任務的第一步，就是檢查必要的工具是否存在於工作區中。
4. **全域常駐 (Pervasive Scope)**：處理任何非平凡任務、需借助外部工具鏈的運作時強制生效。

### 📋 建議模型
- **推薦版本**：Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **最低版本**：Gemini 3.1 Flash / GPT-5.1
