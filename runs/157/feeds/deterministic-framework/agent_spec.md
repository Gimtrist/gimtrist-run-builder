# 🔬 技術規格 (Agent Spec)

### 系統邏輯定義 (System Logic)
本框架基於 **Chain-of-Thought (CoT)** 與 **Few-shot Prompting** 的進階變體，導入了強制的 XML 標籤識別碼，讓 Agent 能夠在內部區分「運算空間」與「展示空間」。

### 參數調整建議
- **Temperature (隨機性)**: 建議設為 `0.0` 至 `0.2` 之間，以極大化確定性。
- **Top_P**: 建議設為 `1.0`。
- **Stop Sequences**: 可設定為 `</response>`。

### 邏輯偽代碼 (Logic Pseudocode)
```
IF input_complexity > THRESHOLD THEN
   ACTIVATE <thought> process
   IDENTIFY key_entities
   PERFORM cross_referencing
   ELSE
   DIRECT_RESPONSE in <response>
END IF
```

### 適用場景
- 數據提取 (Data Extraction)
- 法律/合約分析 (Legal Analysis)
- 技術文檔摘要 (Technical Summarization)
- 代碼審查 (Code Review)
