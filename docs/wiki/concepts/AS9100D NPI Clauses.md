---
title: "AS9100D NPI Clauses"
type: concept
status: synthesized
created: "2026-04-13"
updated: "2026-04-13"
description: "AS9100D clauses most relevant to NPI; how they differ from ISO 9001; required aerospace evidence"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - phase/NPI
  - domain/aerospace-defense
  - standard/AS9100D
  - system/QMS
sources:
  - "[[AS9100D NPI Clauses]]"
---

# AS9100D NPI Clauses

## Overview

**AS9100D** (Revision D, current) is the aerospace and defense quality management standard. It combines ISO 9001:2015 base requirements with additional aerospace-specific controls for configuration management, design, product safety, and supplier management.

During New Product Introduction (NPI), four AS9100D clauses are most critical:
1. **8.1** — Operational Planning (what must be done before design/production starts)
2. **8.3** — Design and Development (design reviews, FMEA, requirements traceability)
3. **8.4.4** — Configuration Management (change control, baselines)
4. **8.5.1** — Production Control (manufacturing controls, process capability, FAI)

---

## Clause 8.1 — Operational Planning and Control

### Requirement (ISO 9001 Section 8.1)
Determine the processes needed for product realization; establish criteria and methods for process control; manage external processes; ensure processes meet customer requirements.

### Aerospace Addition (AS9100D)
Additional planning requirements for **safety** and **configuration management**:
- Document how product safety will be achieved and maintained (safety plan)
- Identify potential product safety hazards and mitigations
- Establish configuration management approach (baselines, change control)
- Plan for counterfeit parts prevention (supplier controls, material authentication)

### NPI Context
**Pre-Design Phase — Program Planning**
- Program manager and chief engineer develop:
  - **Program Plan** — schedule, budget, resources, risk management approach
  - **Configuration Management Plan** — how baselines will be established, change control process, CI list, document structure
  - **Quality Plan** — inspection points, test requirements, acceptance criteria, supplier quality expectations
  - **Design Plan** — design review schedule, DFMEA process, verification/validation testing plan
  - **Supplier Quality Plan** — supplier selection criteria, qualification requirements, PPAP levels, supply chain risk mitigation

**Evidence Required for Audit/Review:**
- Documented program plan and schedule
- Configuration Management Plan (CM plan) defining baselines and change control
- Design plan with DFMEA timeline
- Quality plan with FAI/PPAP requirements
- Supplier risk assessment and qualification plan

---

## Clause 8.3 — Design and Development

### Requirement (ISO 9001 Section 8.3)
Plan, control, and verify design processes; establish design inputs (requirements), outputs (specifications), review at appropriate stages, manage changes, and validate designs are suitable for use.

### Aerospace Addition (AS9100D)
**Design Assurance** — additional mandatory controls:
- **Design reviews** — PDR, CDR, TRR per MIL-STD-1521 or equivalent; formal gate approvals
- **Design FMEA** — mandatory; identify and mitigate design failure modes; RPN scoring
- **Requirements traceability** — every requirement traced to design feature and verified by test/analysis
- **Design margins** — demonstrate safety margins in critical performance parameters; justify margin adequacy
- **Design change control** — changes after design release require approval (ECN process)
- **Aerospace specialty processes** — for processes like heat treat, plating, painting, welding: establish and control via special process procedures with parameter monitoring

### NPI Context

**Preliminary Design Phase (PDR)**
- Requirements baseline established (from Clause 8.1 planning)
- Preliminary Design FMEA initiated; high-risk areas identified
- System architecture defined; interface control documents created
- Preliminary design review conducted; requirements allocation confirmed
- Manufacturing feasibility assessed (preliminary; "can we make this?")

**Detailed Design Phase (CDR)**
- Complete design drawings and specifications created
- Final Design FMEA completed; RPN ≥ 100 items require mitigation
- Traceability matrix completed (requirement → design feature → test/analysis)
- Design margins verified by analysis or simulation
- Manufacturing process plan developed in detail
- Critical Design Review conducted; design frozen for production
- Design assurance record compiled (FMEA, traceability, margin analysis)

**Evidence Required:**
- Requirements specification (baseline)
- Design drawings and specifications (baseline)
- Design FMEA with high-risk item mitigations
- Requirements traceability matrix (RTM)
- Design review minutes and action items (PDR/CDR)
- Margin analysis or design safety case
- Preliminary manufacturing process plan
- Design change control procedure

### How AS9100D Differs from ISO 9001

| Aspect | ISO 9001:2015 | AS9100D |
|--------|---|---|
| **Design Reviews** | Required; not specifically timed | Must follow MIL-STD-1521 (PDR/CDR/TRR formal gates) |
| **FMEA** | Recommended (quality risk analysis) | **Mandatory** — Design FMEA and Process FMEA required |
| **Traceability** | Requirement handling adequate | **Comprehensive RTM required** — every requirement traced to design and test/analysis |
| **Design Margins** | Not explicitly required | **Mandatory** — critical parameters must have documented safety margins |
| **Special Processes** | General process control | **Aerospace specialty processes** (heat treat, plating, welding, NDT) require separate qualification and control procedures |
| **Design Assurance** | Not defined | **Design Assurance File** required — compiled evidence of design control (FMEA, traceability, verification, validation) |

---

## Clause 8.4.4 — Configuration Management

### Requirement (ISO 9001 Section 8.5.6 — Design Changes)
Control design changes; assess impact; gain approval before implementation.

### Aerospace Addition (AS9100D — Fully Elaborated)
**Configuration Management System** — mandatory, detailed:
- **Configuration identification** — baselines, document structure, version control
- **Configuration control** — change review, CCB approval, impact assessment
- **Configuration status accounting** — track what version of a product is in what location/configuration
- **Configuration audits** — FCA (Functional) and PCA (Physical) verify hardware matches approved design
- **Counterfeit parts prevention** — supplier controls, material authentication, traceability

### NPI Context

**Design Freeze (CDR)**
- Product baseline approved; configuration item list finalized
- Configuration Control Board (CCB) established (membership: design, manufacturing, quality, customer)
- Change control procedure documented and enforced
- Design assurance file initiated

**Post-CDR / During Pilot Production**
- Any design changes require ECN submittal
- ECN reviewed by CCB; impact assessment documented (design, manufacturing, suppliers, schedule, cost, field retrofit)
- ECN approved before implementation
- Design drawings updated; revision letter incremented (A → B → C, etc.)
- Supplier notified of design changes; design release updated

**TRR / Production Release**
- Configuration baseline finalized (design and manufacturing process)
- All design changes post-CDR documented and traced
- Functional Configuration Audit (FCA) conducted — design verified to meet requirements
- Physical Configuration Audit (PCA) conducted — first articles inspected and verified to match design
- Configuration item baseline established for production

**Evidence Required:**
- Configuration Management Plan and procedures
- Baseline version identification (functional, allocated, product)
- Configuration Item List (CI definitions and scope)
- Change control forms (ECN/ECO) with approval evidence
- CCB meeting minutes
- Traceability of changes to field retrofit decisions
- FCA/PCA audit reports

---

## Clause 8.5.1 — Production Control

### Requirement (ISO 9001 Section 8.5)
Plan and control production processes; manage customer-supplied property; control product labeling/identification; manage process parameter control.

### Aerospace Addition (AS9100D)
**Production Controls** — more rigorous:
- **Process capability** — Cpk/Ppk ≥ 1.33 required for critical characteristics
- **Special processes** — aerospace specialty processes (heat treat, plating, welding) require separate approval and monitoring
- **First Article Inspection** — per AS9102B; FAIR required before production release
- **Counterfeit parts prevention** — supplier lot traceability, authentication procedures
- **Rework controls** — rework procedures, approval authority, acceptance criteria
- **Inspection and test records** — sample sizes, acceptance levels, evidence preserved
- **Product identification and traceability** — serial numbering, lot codes, traceability to material lots and supplier lots (enables retrofit identification)

### NPI Context

**Pilot/LRIP Production**
- Manufacturing work instructions developed in detail
- Process parameters defined; control limits established
- Statistical Process Control (SPC) charting initiated
- Process FMEA completed; high-risk items identified and controls put in place
- Supplier process capability studies conducted (Cpk/Ppk demonstrations)
- First Article Inspection (FAI) executed; FAIR generated
- PPAP submitted to customer (Level 1, 2, or 3 depending on risk)
- Rework procedures documented (if scrap/rework anticipated)
- Lot/serial number system established for traceability

**Production Release (TRR)**
- Process capability demonstrated (Cpk ≥ 1.33 minimum)
- All special processes qualified and approved
- FAI complete; FAIR approved by customer
- PPAP approval received from customer
- Process control plan baseline established
- SPC monitoring procedures documented
- Supplier lot traceability procedure established
- Production release authorized

**Evidence Required:**
- Manufacturing work instructions and process flow diagrams
- Process FMEA with high-risk item controls
- Process capability study (Cpk/Ppk) data
- Statistical Process Control (SPC) procedure and initial control charts
- First Article Inspection Report (FAIR)
- PPAP submission documentation and customer approval
- Special process approvals (heat treat, plating, welding certificates)
- Inspection and test procedures (sampling plans, acceptance criteria)
- Rework procedures (if applicable)
- Supplier lot traceability evidence

### How AS9100D Differs from ISO 9001

| Aspect | ISO 9001:2015 | AS9100D |
|--------|---|---|
| **Process Capability** | Process control adequate | **Cpk/Ppk ≥ 1.33 required** for critical characteristics; higher for safety-critical parts |
| **Special Processes** | Process parameter control | **Aerospace specialty processes** require separate approval, monitoring, and certification (heat treat, plating, welding, NDT) |
| **First Article Inspection** | Incoming inspection/initial sample | **FAI per AS9102B mandatory** — produces FAIR (detailed first article evidence) |
| **Rework** | Documented; no explicit authority approval | **Rework requires documented procedure and approval authority** — record of what was reworked, how, and by whom |
| **Traceability** | Lot number tracking sufficient | **Full traceability required** — serial numbers/lot codes link to material lot, supplier lot, manufacturing date, SPC batch (enables retrofit) |

---

## Integration Across Clauses

NPI follows a sequential path through AS9100D requirements:

```
Clause 8.1 — Operational Planning
  ↓ (Program plan, CM plan, quality plan)
Clause 8.3 — Design & Development
  ↓ (Design reviews PDR/CDR, DFMEA, traceability, design assurance)
Clause 8.4.4 — Configuration Management
  ↓ (Baselines, change control, ECN process, audits)
Clause 8.5.1 — Production Control
  ↓ (Process FMEA, capability, FAI, PPAP, rework, traceability)
Production Release
```

---

## Related Concepts

- **[[MOC — NPI Process]]** — Hub for all NPI concepts
- **[[Aerospace NPI Process Overview]]** — Phases where these clauses apply
- **[[Design Reviews — PDR CDR TRR]]** — Clause 8.3 formal gate reviews
- **[[PFMEA and DFMEA]]** — Clause 8.3 (DFMEA) and 8.5.1 (PFMEA) requirements
- **[[Configuration Management Basics]]** — Clause 8.4.4 detailed
- **[[First Article Inspection — FAI and FAIR AS9102B]]** — Clause 8.5.1 FAI requirement
- **[[PPAP in Aerospace — AS9145]]** — Clause 8.5.1 supplier approval requirement

## Sources

- AS9100D (Revision D) — Sections 8.1, 8.3, 8.4.4, 8.5.1
- ISO 9001:2015 (base standard; AS9100D adds aerospace requirements)
- MIL-STD-1521B (Technical Reviews; governs design review requirements in Clause 8.3)
- MIL-HDBK-61 (Configuration Management; governs Clause 8.4.4)

---

**Notes:**
- %%VERIFY%% AS9100D Revision D current status — confirm against published standard
- %%VERIFY%% Cpk thresholds (1.33 baseline, 1.67 defense programs) — vary by customer; always confirm with procurement/customer quality
- %%VERIFY%% MIL-STD-1521B applicability — some programs use equivalent standards (e.g., customer internal standards); always reference program documentation

Last updated: 2026-04-13
