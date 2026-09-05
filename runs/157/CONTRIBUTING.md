# Contributing to OpenClaw Agent Feeds ❤️

First off, thank you for considering contributing to OpenClaw Agent Feeds! It's people like you that make this community such a great place to explore and solidify AI agent behaviors.

## Have an idea or found a bug? 🐛💡
Have an idea for a new feed, refinement, or category? **[Open an issue first](https://github.com/mkhsu2002/openclaw-agent-feeds/issues)**. 
We love discussing ideas before anyone writes too much code or documentation.

## What kind of Feeds will be accepted? 📌
We are building a "Methodology" repository, not just a random prompt collection. A feed must adhere to our **Design Principles**:
1. It **improves behavior**, not just tone.
2. It **reduces hallucination** and guesswork natively.
3. It **encourages safe, minimal changes**.
4. It **works with OpenClaw skills/plugins** instead of replacing them.
5. It **stays readable and reusable**.

If your feed is simply "Act like a pirate" or "Write a poem," it belongs elsewhere. If it teaches the agent *how to safely traverse a file system, deconstruct a task, and verify its own output*, it belongs here!

## Feed Directory Structure 📁
When contributing a new feed, please place it under `feeds/your-feed-name/`. A standard feed directory requires core files:
- `overview.md` (What this feed does, its synergy, and the protocol mechanics - written in Chinese)
- `installation_guide.md` (The actual copy-paste script containing the `[SYSTEM_BEHAVIORAL_OVERRIDE]` and Guarded Decision Loop - written in Chinese)
- `overview.en.md` / `installation_guide.en.md` (English parity files - highly recommended)

## Structure & Naming Conventions 🏷️
- **Directory names**: `kebab-case` (e.g., `semantic-memory-boost`)
- **Feed Title**: Needs to specify its type in the Markdown header, e.g., `[Training Feed] Feed Name` or `[Mutation Feed] Feed Name`.
- **The Protocol**: The installation guide must feature the `<state_machine_workflow>` and `<conditional_branches>` tags. Ensure you use precision verbs like `Deconstruct`, `Assess Bounds/Memory`, `Simulate`, `Execute`, and `Verify`.

## PR Pre-Checklist ✅
Before submitting a Pull Request, please self-audit:
- [ ] Does your feed use the structured state machine logic (Deconstruct -> Simulate -> Verify)?
- [ ] Have you included `Conditional Branches` (e.g., Failure Branch, Clarification Branch) to prevent the AI from blindly complying with dangerous tasks?
- [ ] Have you removed fluffy AI-generated intros? (e.g., No "Here is the rewritten text" responses internally)
- [ ] Are the Markdown headers and markdown styles consistent with the rest of the repository?

Thank you for contributing to making OpenClaw smarter and safer for everyone! 🚀
