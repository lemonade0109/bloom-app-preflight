# Bloom App Preflight

An independent proof-of-work prototype inspired by Bloom's public product and hiring materials.

## Product thesis

AI coding agents can generate an app quickly, but “the build finished” is not the same as “the app is ready to share.”

**Bloom App Preflight** explores a lightweight quality gate between those two moments.

## Core workflow

1. Preview a fictional AI-generated app, **SplitMate**
2. Run App Preflight
3. Review an initial **78/100** readiness score
4. Open the missing payment-failure recovery issue
5. Inspect:
   - what failed
   - why it matters
   - the evidence behind the finding
6. Generate a narrow repair instruction for the coding agent
7. Simulate the repair handoff
8. Re-run Preflight
9. Verify the repaired behavior and move readiness from **78 → 92**

The two remaining warning states intentionally stay visible. Fixing one issue should not magically make the entire app perfect.

## Screenshots

### 1. Generated app preview

![Generated app preview](public/Screenshot%202026-09-05%20155349.png)

The opening screen presents **SplitMate**, a fictional AI-generated shared-expenses app. It shows the app summary, build number, product thesis, and a phone preview of the generated experience. The **Run App Preflight** button starts the evaluation workflow.

### 2. Initial readiness evaluation

![Initial readiness evaluation](public/Screenshot%202026-09-05%20155412.png)

The evaluation screen organizes the checks into **Core flows** and **Reliability**. It reports an initial demo readiness score of **78/100**, identifies passed checks and review items, and highlights **Payment failure** as an open issue that can be selected for more detail.

### 3. Payment failure issue details

![Payment failure issue details](public/Screenshot%202026-09-05%20155430.png)

Selecting the payment-failure check opens the issue drawer. It explains what failed, why the problem matters, and shows the evidence behind the finding: the successful payment state exists, but the declined state, retry action, and alternative payment guidance are missing. The drawer also provides a narrow repair instruction for the coding agent.

### 4. Verified repair result

![Verified repair result](public/Screenshot%202026-09-05%20155451.png)

After the simulated repair is re-evaluated, the readiness score moves to **92/100**. The payment-failure check becomes **Verified**, the summary reports zero critical issues, and the two remaining experience warnings stay visible. This demonstrates that fixing one issue improves readiness without claiming the entire app is perfect.

## Why I built this

Bloom's public hiring materials mention hard product problems around agent reliability, app quality, automated testing, and building trustworthy full-stack apps.

This prototype explores one narrow question:

> After an AI coding agent says “done,” how might a creator quickly understand whether the generated app is actually ready to use or share?

## Design principles

- **Explain before repairing**
- **Show evidence, not just a score**
- **Keep repairs narrow and inspectable**
- **Re-evaluate after changes**
- **Do not hide remaining problems**
- **Do not pretend simulated checks are production guarantees**

## Important disclaimer

This is an **independent product exploration**.

- Not affiliated with Bloom
- No Bloom APIs used
- No private Bloom data used
- No Bloom codebase accessed
- No real coding agent contacted
- All evaluations, fixes, and readiness scores are illustrative

## Run locally

```bash
npm install
npm run dev
```

## Prototype scope

This prototype intentionally focuses on one vertical slice:

**Generate → Evaluate → Explain → Repair → Re-evaluate → Share**

It is not intended to recreate Bloom or model a full production architecture.
