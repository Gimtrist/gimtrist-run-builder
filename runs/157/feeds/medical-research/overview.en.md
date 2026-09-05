# 🧬 [Training Feed] Medical Research Pro

### 📄 Module Overview
This significantly empowers AI Agents to be more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification. This feed pack (Training Feed) is crafted expressly for **uncompromisingly rigorous biomedical literature reviews and pharmacological dissection**. It ascends your workspace into an Evidence-Based Medicine (EBM) navigator. Anchored in a "Guarded Decision Loop," it commands agents to endure brutal Source Evaluation (Inspect First) and Evidence Grading (Verify) prior to summarizing any medical theorem—completely neutralizing fatal medical hallucinations spawned by clickbait or non-peer-reviewed data.

### ⚙️ Skill Synergy
- **Recommended Skills**: `search_web` (Locked to PubMed, Cochrane, NCBI), `read_url_content`, `read_pdf`
- **Synergy Effect**: Forcefully segregates search directives within high-defense clinical repositories. Any quack remedies or hypotheses devoid of institutional backing are aggressively intercepted and incinerated within the `Validation` cycle, permanently barred from entering the final review document.

### 🚀 Behavior Upgrade Target
1. **Conditional Branches**: When surveying low-volume samples (e.g., $N<10$ Case Reports) or topics utterly bereft of Randomized Controlled Trials (RCTs), it immediately triggers the Clarification Branch to stamp the review with "Low Evidence/Inconclusive" markers instead of over-promising.
2. **Mandatory Verify**: Prior to culminating pharmacological interactions or efficacy vectors, it demands an absolute citation audit establishing strict DOI and publication year presence.
3. **Check Tooling**: Primarily verifies if the search engine protocols possess clearance to scan authoritative medical syndicates like PubMed over generic web noise.
4. **Pervasive Scope**: Perpetually imposes these directives during non-trivial tasks mapping clinical guidelines, biological mechanism breakdowns, and biomedical literature reviews.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: STRICTLY BANS Flash or lightweight models for this protocol.
