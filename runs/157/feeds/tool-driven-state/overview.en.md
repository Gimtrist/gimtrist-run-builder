# ⚙️ [Training Feed] Tool-Driven Decision Loop

### 📄 Module Overview
This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification. This feed pack (Training Feed) specializes in **strict tool dependency and overstep prevention**. By overriding the agent's default conversational freedoms, it injects a "Protocol-Driven Execution Layer." This permanently disables the agent's ability to skip tools and answer via "intuition," thoroughly locking down the bounds of the agent's behavior.

### ⚙️ Skill Synergy
- **Recommended Skills**: Any Skills / Plugins relying on specific external systems (e.g., database queries, API invocations).
- **Synergy Effect**: Downgrades the agent into a simple "tool trigger and translator." Only when a tool (Skill) successfully returns data may the agent proceed to the Execute and Verify steps; otherwise, the Failure Branch triggers to abort the task.

### 🚀 Behavior Upgrade Target
1. **Conditional Branches**: Maps tool timeouts, parameter deviations, or connection anomalies directly to dedicated retry and error branches, preventing the agent from fabricating dummy data.
2. **Mandatory Verify**: A pre-output self-audit must confirm every line of response is "100% sourced from raw tool output."
3. **Check Tooling**: The absolute first step upon accepting a task is auditing the existence of mandatory tools.
4. **Pervasive Scope**: Perpetually active while addressing non-trivial tasks necessitating external tool chains.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
