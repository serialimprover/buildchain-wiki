---
title: "Design Reviews — PDR CDR TRR"
type: concept
status: synthesized
created: "2026-04-13"
updated: "2026-04-13"
description: "Preliminary Design Review, Critical Design Review, Test Readiness Review: purpose, entry/exit criteria, governance"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - phase/NPI
  - phase/design
  - domain/aerospace-defense
sources:
  - "[[Design Reviews — PDR CDR TRR]]"
---

# Design Reviews — PDR, CDR, TRR

## Overview

Design Reviews are formal, gated assessments that occur at critical milestones in the aerospace NPI lifecycle. They are governed by **MIL-STD-1521B** (or customer-specific variants) and serve as **go/no-go decision points** before proceeding to the next phase.

Each review involves key stakeholders: program manager, design leads, quality engineer, manufacturing representative, supplier leads, and often the customer.

## Preliminary Design Review (PDR)

### Purpose
Verify that the **preliminary design satisfies all requirements** and that the approach is technically sound and feasible before committing to detailed design.

### When It Occurs
After initial concept design is complete; before detailed design and engineering begins.

### Entry Criteria
- Requirements and specification documents finalized and baselined
- System architecture and block diagrams defined
- Preliminary Bill of Materials (BOM) with long-lead items identified
- Initial risk assessment (preliminary DFMEA)
- Manufacturing feasibility assessment (rough)
- Supplier strategy document (make vs. buy decisions)
- Test and validation approach outline
- Schedule and budget estimates

### What's Reviewed
- Traceability matrix: requirements → design features
- Design block diagrams and schematics
- Critical design parameters and their justification
- Risk analysis (early DFMEA findings)
- Supplier selections and capability summaries
- Manufacturing process assumptions
- Test strategy and acceptance criteria

### Exit Criteria (Go/No-Go Decision)
- **GO:** All requirements traced to design; risks identified and mitigation planned; suppliers capable; schedule and budget acceptable
- **NO-GO:** Requirement gaps identified; high-risk areas unresolved; supplier concerns; proceed to rework before advancing

### Key Output
- PDR **action item list** (issues to resolve before CDR)
- Approved preliminary design baseline
- Confirmed budget and schedule

---

## Critical Design Review (CDR)

### Purpose
Verify that the **detailed design is complete, correct, and ready for production** — that manufacturing, test, and supplier processes can execute as specified.

### When It Occurs
After all design details are finalized but before prototype/pilot build begins.

### Entry Criteria
- All design drawings, schematics, and specifications complete and reviewed
- Complete Bill of Materials (BOM) with part numbers, sources, specifications
- Manufacturing process plans defined (tooling, fixtures, flow)
- DFMEA completed and reviewed; mitigation plans in place
- Test plan detailed (what, how, acceptance criteria)
- Supplier design quotations received and reviewed
- All PDR action items resolved
- Design change control procedure documented
- DO-254 (avionics hardware) or equivalent design assurance evidence (if applicable)

### What's Reviewed
- Complete design package (drawings, schematics, specifications)
- Design analysis and trade studies (thermal, structural, EMI, etc.)
- Final DFMEA with RPN (Risk Priority Number) scores
- Manufacturing process capability (Cpk) projections
- Cost and schedule baselines
- Configuration Management plan
- Supplier design qualification status
- Test strategy refined; sample sizes and acceptance criteria defined

### Exit Criteria (Go/No-Go Decision)
- **GO:** Design is complete, correct, and producible; all high-risk items mitigated; suppliers qualified; test approach sound; configuration baseline approved
- **NO-GO:** Design gaps remain; manufacturing feasibility questioned; supplier capability concerns; test approach incomplete; return to design rework

### Key Output
- CDR **configuration baseline** — approved design frozen for production
- Supplier Design Approvals (SDAs)
- Updated schedule reflecting pilot/LRIP build timeline
- Authorization to proceed to prototype or pilot production

---

## Test Readiness Review (TRR)

### Purpose
Verify that **all qualification testing is complete, all results acceptable, and the product is ready for full production release**.

### When It Occurs
After pilot/low-rate initial production (LRIP) build and testing are complete; before design release to full production.

### Entry Criteria
- Prototype/LRIP units built and tested
- **First Article Inspection (FAI) completed** per AS9102B; FAIR (report) approved
- **PPAP (Production Part Approval Process) submission accepted** per AS9145
- All qualification tests executed and passed:
  - Environmental (thermal, vibration, humidity, altitude)
  - Functional and performance tests
  - Reliability and durability tests (HALT, HASS, burn-in as applicable)
  - EMI/RFI compliance testing
  - Safety testing (if applicable)
- PFMEA (Process FMEA) completed and reviewed
- Supplier process validation complete (process capability studies)
- All design changes from prototype testing incorporated and documented
- Design Assurance file complete (traceability, test reports, configuration records)

### What's Reviewed
- Test data and reports (all qualification tests)
- FAIR (First Article Inspection Report) summary
- PPAP submission status and customer approval
- PFMEA findings and risk mitigation
- Supplier process capability data (Cpk, Ppk)
- Failure mode analysis from testing (corrective actions closed)
- Configuration baseline updated with all design changes
- Production readiness checklist complete
- Logistics and support plan (spares, technical publications)

### Exit Criteria (Go/No-Go Decision)
- **GO:** All tests passed; FAI complete; PPAP accepted; suppliers qualified; design is frozen and ready for production; no unresolved high-risk items
- **NO-GO:** Test failures remain; FAI or PPAP deficiencies; supplier process concerns; schedule risk; return to testing/rework

### Key Output
- **Production Release Authorization** — design is now in production
- Final Configuration Baseline
- Production Quality Control Plan
- Engineering Data Package released to manufacturing and sustainment teams

---

## Governance & Standards

### MIL-STD-1521B
Defines the formal structure, entry/exit criteria, and documentation requirements for Technical Reviews in defense programs. Most aerospace contracts mandate compliance or equivalent rigor.

### Customer Tailoring
- **Commercial aerospace** (e.g., Boeing, Airbus suppliers): Often less formal; may combine PDR/CDR into single review
- **Defense programs** (e.g., DoD contractors): Strict compliance with MIL-STD-1521B; customer representatives attend; reviews may span 2–3 days
- **Space programs** (e.g., NASA): Enhanced rigor; additional reviews (System Requirements Review, Preliminary Design Review, Critical Design Review, Test Readiness Review) with independent review boards

### AS9100D Integration
Design reviews are mandated by **AS9100D Clause 8.3** (Design and Development Control). The standard requires:
- Design and development planning
- Design and development inputs (requirements)
- Design and development review at appropriate stages
- Design and development verification
- Design and development validation
- Control of changes

---

## Related Concepts

- **[[MOC — NPI Process]]** — Hub for all NPI concepts
- **[[Aerospace NPI Process Overview]]** — Overall NPI lifecycle and PDR/CDR/TRR placement
- **[[PFMEA and DFMEA]]** — Design and Process FMEAs, which are key review inputs
- **[[Configuration Management Basics]]** — Change control and baseline management post-CDR
- **[[First Article Inspection — FAI and FAIR AS9102B]]** — FAI process, which is a TRR entry criterion
- **[[PPAP in Aerospace — AS9145]]** — PPAP submission, which is a TRR entry criterion
- **[[AS9100D NPI Clauses]]** — AS9100D Clause 8.3 governance of design reviews

## Sources

- MIL-STD-1521B (Technical Reviews)
- AS9100D (Clause 8.3 Design and Development Control)
- AS9102B (First Article Inspection)
- AS9145 (Qualification and Approval of Aerospace Suppliers)

---

**Notes:**
- %%VERIFY%% MIL-STD-1521B revision — confirm against current DoD standard
- %%VERIFY%% Timeline between reviews (PDR → CDR → TRR) varies; typical spacing is 3–6 months per phase
- Commercial aerospace programs may use abbreviated or combined review processes; always reference program-specific procedures

Last updated: 2026-04-13
