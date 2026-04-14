---
title: "PFMEA and DFMEA"
type: concept
status: synthesized
created: "2026-04-13"
updated: "2026-04-13"
description: "Design Failure Mode & Effects Analysis (DFMEA) vs. Process FMEA (PFMEA) in aerospace NPI"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - phase/NPI
  - phase/design
  - phase/manufacturing
  - process/PFMEA
  - process/DFMEA
sources:
  - "[[PFMEA and DFMEA]]"
---

# PFMEA and DFMEA

## Overview

**FMEA (Failure Mode & Effects Analysis)** is a systematic technique for identifying and analyzing potential failures in a product or process, assessing their severity and occurrence probability, and implementing controls or design changes to reduce risk.

In aerospace NPI, two types of FMEA are mandatory:
1. **DFMEA (Design FMEA)** — analyzes design risks
2. **PFMEA (Process FMEA)** — analyzes manufacturing risks

Both are governed by **AS9100D Clause 8.3** (design) and **8.5.1** (production controls).

---

## DFMEA (Design Failure Mode & Effects Analysis)

### Purpose
Identify potential design weaknesses, manufacturing risks inherent in the design, and use cases where the product could fail. DFMEA is a **design tool** — it guides design decisions and identifies where design robustness or margin is critical.

### When It's Conducted
- **Timing:** Early in design phase (after preliminary design); updated through CDR; finalized before production
- **Owner:** Design engineering team (with input from manufacturing and quality)

### DFMEA Scope
Analyzes:
- **Functional failures** — the product cannot perform its intended function (e.g., does not produce required output, loses control authority)
- **Design margin failures** — design is marginal; small manufacturing variations cause failures (e.g., tolerance stack-up leads to assembly problems)
- **Use case failures** — product fails under customer misuse or unexpected conditions
- **Material failures** — material properties insufficient (corrosion, fatigue, temperature limits)
- **Interface failures** — integration with other systems fails

### DFMEA Structure

A DFMEA table typically includes:

| Column | Description | Example |
|--------|---|---|
| **Function** | What the design is supposed to do | "Maintain thrust vector control to ±2°" |
| **Failure Mode** | How the function could fail | "Actuator sticks; cannot move to commanded position" |
| **Effects** | What happens if the failure occurs | "Loss of thrust vector control; vehicle tumbles; mission failure" |
| **Causes** | Why the failure might occur | "Contaminant jamming actuator; corrosion in pivot bearing; seal leakage" |
| **Current Controls** | Design features or tests that prevent or detect the failure | "Design redundancy (dual actuators); ground testing; in-flight monitoring (telemetry)" |
| **Severity (S)** | Impact on function/safety (1–10 scale, 10 = catastrophic) | 9 (loss of vehicle control) |
| **Occurrence (O)** | Likelihood of cause occurring (1–10 scale, 10 = almost certain) | 3 (good design margin, low probability) |
| **Detection (D)** | Likelihood of detecting failure before customer sees it (1–10 scale, 10 = impossible to detect) | 4 (testing catches most issues; some field risk) |
| **Risk Priority Number (RPN)** | RPN = S × O × D (identifies high-risk items) | 9 × 3 × 4 = 108 (medium risk) |
| **Recommended Actions** | Design changes, tests, or controls to reduce risk | "Add redundant sensor to detect actuator jams; increase vibration test envelope; design creep to accommodate corrosion" |
| **Responsible Party** | Who will implement the action | Design Engineering, Reliability |
| **Target Completion** | Deadline for action implementation | Pre-CDR review |
| **New RPN** | RPN after mitigation action implemented | (reduced to 36 after action) |

### RPN Interpretation

- **RPN > 200:** Unacceptable risk; design change mandatory
- **RPN 100–200:** High risk; mitigation actions required before production
- **RPN < 100:** Medium/low risk; monitoring and controls sufficient

%%VERIFY%% RPN thresholds vary by program and customer; always confirm with program-specific requirements.

### DFMEA Output
- Identified design risks ranked by severity and occurrence
- Recommended design changes (stress relief, material upgrade, manufacturing tolerance tightening, redundancy, etc.)
- Design verification testing plan (tests to confirm mitigation works)
- Certification that high-risk failure modes are controlled

---

## PFMEA (Process Failure Mode & Effects Analysis)

### Purpose
Identify potential manufacturing process failures, quality risks, and deviations that could result in non-conforming parts or unsafe products. PFMEA is a **process optimization tool** — it refines manufacturing processes, defines control points, and establishes acceptance criteria.

### When It's Conducted
- **Timing:** During detailed design (informed by manufacturing process plan); updated after pilot/LRIP build; finalized before full production release
- **Owner:** Manufacturing engineering team (with input from quality, design, and suppliers)

### PFMEA Scope
Analyzes:
- **Process step failures** — a manufacturing step is executed incorrectly (wrong temperature, missing step, operator error)
- **Equipment failures** — machine drift, tooling wear, temperature excursion
- **Setup/adjustment failures** — equipment not set up correctly; tolerance stack-up in tooling
- **Material/supply failures** — incoming material out of spec; supplier changes without approval
- **Inspection/test failures** — non-conforming parts are not caught; false positives pass bad parts; false negatives reject good parts
- **Traceability failures** — parts are commingled or traced incorrectly; cannot identify non-conforming batches

### PFMEA Structure

A PFMEA table includes:

| Column | Description | Example |
|--------|---|---|
| **Process Step** | Manufacturing operation | "Heat treatment: quench at 700°C to room temperature water" |
| **Process Parameter** | What must be controlled | "Quench temperature" |
| **Failure Mode** | How the process could fail | "Temperature drops below 650°C (insufficient heating); parts are soft" |
| **Effects** | Impact on product | "Parts fail hardness test; shipped non-conforming parts; field failure / warranty claim" |
| **Causes** | Why failure occurs | "Oven thermostat malfunction; oven door left open; oven power loss; operator sets wrong temp" |
| **Current Controls** | In-process inspection/test steps | "Temperature recorded on log; hardness sample tested every 4 hours; oven calibrated monthly" |
| **Severity (S)** | Impact if non-conforming part reaches customer (1–10, 10 = safety risk) | 8 (field failure, warranty) |
| **Occurrence (O)** | Likelihood cause occurs (1–10, 10 = frequent) | 2 (thermostat checked monthly; operator trained) |
| **Detection (D)** | Likelihood control catches defect before shipment (1–10, 10 = impossible) | 3 (hardness test catches most, but sample size small) |
| **RPN** | S × O × D | 8 × 2 × 3 = 48 (low risk) |
| **Recommended Actions** | Tighter controls, SPC, equipment upgrades | "Add oven temperature alarm; switch to automated temp control; increase hardness sample size to 10/lot" |
| **Responsible Party** | Manufacturing Engineering |
| **Target Completion** | Pre-production |
| **New RPN** | After action | (reduced to 8 after action) |

### Process Control Plan (Output of PFMEA)

PFMEA directly informs the **Process Control Plan**, which specifies:
- **Critical process parameters** (CPPs) — what must be monitored
- **Statistical Process Control (SPC)** — control limits, sampling frequency, charting method
- **In-process inspection points** — where inspection happens
- **Acceptance criteria** — pass/fail thresholds
- **Reaction plan** — what to do if control limits are exceeded

---

## DFMEA vs. PFMEA — Key Differences

| Aspect | DFMEA | PFMEA |
|--------|---|---|
| **Focus** | Product design | Manufacturing process |
| **Question** | "Can the design fail?" | "Can we manufacture the design consistently?" |
| **Owner** | Design engineering | Manufacturing engineering |
| **Timing** | Early-to-mid design phase | Detailed design / pilot production |
| **Failure Modes** | Design weaknesses, margin, functional failures | Process deviations, operator error, equipment issues |
| **Controls** | Design features, test specs, redundancy | SPC, in-process inspection, equipment calibration |
| **Output** | Design changes, verification testing plan | Process control plan, SPC limits, inspection procedures |
| **Governance** | AS9100D Clause 8.3 (Design) | AS9100D Clause 8.5.1 (Production) |

---

## Integration with NPI Lifecycle

### DFMEA in NPI
1. **PDR (Preliminary Design Review):** Preliminary DFMEA; high-level failure modes, early risk assessment
2. **CDR (Critical Design Review):** Final DFMEA completed; all design risks identified and mitigated; design verified to be robust
3. **TRR (Test Readiness Review):** DFMEA reviewed; all recommended design verifications completed; no outstanding high-risk items

### PFMEA in NPI
1. **Pilot Production Planning:** PFMEA initiated; manufacturing process planned; critical process parameters defined
2. **Pilot/LRIP Build:** PFMEA finalized based on actual process experience; control limits established; SPC monitoring begins
3. **TRR:** PFMEA reviewed; process control plan approved; supplier capability demonstrated (Cpk/Ppk ≥ 1.33)
4. **Production Release:** PFMEA filed; process control plan baseline established; production proceeds under SPC control

---

## Related Concepts

- **[[MOC — NPI Process]]** — Hub for all NPI concepts
- **[[Design Reviews — PDR CDR TRR]]** — Design reviews where DFMEA is reviewed and approved
- **[[PPAP in Aerospace — AS9145]]** — PPAP submission includes DFMEA and PFMEA summaries
- **[[Aerospace NPI Process Overview]]** — Overall NPI lifecycle; DFMEA and PFMEA placement
- **[[Configuration Management Basics]]** — FMEA updates when design changes occur
- **[[AS9100D NPI Clauses]]** — AS9100D Clause 8.3 (DFMEA) and 8.5.1 (PFMEA) requirements

## Sources

- AS9100D (Clause 8.3 Design & Development Control, 8.5.1 Production Control)
- SAE J1739 (Recommended Failure Mode and Effects Analysis FMEA Handbook) — industry standard for FMEA methodology
- AIAG FMEA (Automotive Industry Action Group FMEA handbook) — foundational FMEA reference

---

**Notes:**
- %%VERIFY%% RPN thresholds (> 200 unacceptable, 100–200 high risk) — confirm against program-specific criteria
- %%VERIFY%% Severity/Occurrence/Detection scoring (1–10 scale) — confirm rating criteria align with program/customer definitions
- %%VERIFY%% Cpk minimum (1.33) — varies by product criticality and customer; defense programs often require Cpk ≥ 1.67

Last updated: 2026-04-13
