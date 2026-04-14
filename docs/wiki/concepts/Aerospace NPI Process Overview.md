---
title: "Aerospace NPI Process Overview"
type: concept
status: synthesized
created: "2026-04-13"
updated: "2026-04-13"
description: "New Product Introduction lifecycle in aerospace/defense: phases, gates, deliverables, timeline"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - phase/NPI
  - domain/aerospace-defense
  - standard/AS9100D
sources:
  - "[[Aerospace NPI Process Overview]]"
---

# Aerospace NPI Process Overview

## What is Aerospace NPI?

New Product Introduction (NPI) in aerospace and defense is a highly structured, gate-driven process that takes a concept from design through production release. Unlike commercial consumer electronics (which use EVT/DVT/PVT), aerospace follows a more rigorous framework with mandatory design reviews, First Article Inspection (FAI), and Production Part Approval Process (PPAP) under standards like AS9100D and AS9145.

## Key Phases

### 1. Concept & Requirements (Pre-Design)
- Define program objectives, requirements, and constraints
- Establish initial design teams and supplier strategy
- Compliance mapping (AS9100D clauses applicable to the product)

### 2. Preliminary Design (Design Phase)
- Complete system and subsystem-level design
- Conduct **Preliminary Design Review (PDR)**; verify requirements are met
- Identify critical design parameters, materials, and manufacturing risks
- Initial DFMEA (Design FMEA)

### 3. Critical Design & Detailed Engineering
- Finalize all design details, drawings, specifications
- Conduct **Critical Design Review (CDR)**; confirm design is robust and manufacturable
- Complete DFMEA; allocate requirements to suppliers
- Generate Bill of Materials (BOM)
- Plan test and validation strategy

### 4. Production Design & Prototype Build (Engineering Phase)
- Build and test prototype/breadboard units (equivalent to EVT in consumer electronics)
- Refine design based on test results
- Supplier design qualification begins
- Prepare manufacturing processes and tooling

### 5. Pilot/Pre-Production (NPI Phase)
- Build low-rate initial production (LRIP) or pilot units
- Complete all qualification testing
- Execute **First Article Inspection (FAI)** — per AS9102B
- Supplier process validation and PPAP submission — per AS9145
- Conduct **Test Readiness Review (TRR)**; confirm readiness for full production

### 6. Production Release
- Approve design, suppliers, and manufacturing processes
- Release design to production
- Establish configuration baseline
- Begin production runs

### 7. Sustaining
- Manage engineering changes (ECNs) via Configuration Management
- Monitor reliability, obsolescence, supplier performance
- Sustain production support

## Timeline

A typical aerospace NPI for a moderate-complexity product spans **18–36 months** from concept to production, depending on:
- Product complexity
- Supplier maturity
- Regulatory requirements (DO-254 for avionics, AS9100D for manufacturing, etc.)
- Test and validation scope

Commercial electronics compress this to 6–12 months; aerospace trades speed for reliability and traceability.

## Mandatory Deliverables at Each Gate

| Phase | Design Reviews | Key Documents | Supplier Readiness |
|-------|---|---|---|
| Pre-Design | Program Review | System Spec, Risk Register | Supplier RFQ |
| Preliminary Design | **PDR** | Requirements, DFMEA V1, BOM (preliminary) | Supplier Design Bid |
| Critical Design | **CDR** | Design Drawings, Specifications, DFMEA Final, Test Plan | Supplier Design Contract |
| Prototype | (Internal reviews) | Prototype test reports, design changes log | Supplier Samples |
| Pilot/LRIP | **TRR** | Process specs, **FAIR** (FAI Report), PPAP Level docs | **PPAP Submission** |
| Production | Configuration Baseline | Design Release, Supplier Approval Status | Full Production Readiness |

## Key Standards & Frameworks

- **AS9100D** — Quality Management System requirements; clause 8.3 (design & development), 8.5.1 (production controls)
- **AS9102B** — First Article Inspection; defines FAIR (First Article Inspection Report) contents
- **AS9145** — Qualification and Approval of Aerospace Suppliers; includes PPAP tailored for aerospace
- **MIL-STD-1521** — Technical Reviews; governs PDR, CDR, TRR format and entry/exit criteria (referenced in aerospace contracts)

## Differences from Commercial Electronics (EVT/DVT/PVT)

| Aspect | Commercial (EVT/DVT/PVT) | Aerospace (PDR/CDR/LRIP) |
|--------|---|---|
| Design Reviews | Often informal, 1–2 internal reviews | Formal gates: PDR, CDR, TRR with customer/supplier attendance |
| Supplier Qualification | Speed-to-market focus | PPAP Level 3-5; FAI per AS9102B mandatory |
| Traceability | BOM, version control | Configuration baseline, change authority boards, serial number traceability |
| Documentation | Design files, firmware builds | FAIR, PPAP evidence packs, Design Assurance records |
| Timeline | 6–12 months | 18–36 months |
| Risk Management | FMEA optional | DFMEA & PFMEA mandatory; risk review at each gate |

## Related Concepts

- **[[MOC — NPI Process]]** — Hub for all NPI concepts
- **[[Design Reviews — PDR CDR TRR]]** — Detailed explanation of each review's purpose and criteria
- **[[PPAP in Aerospace — AS9145]]** — Supplier approval process and submission levels
- **[[First Article Inspection — FAI and FAIR AS9102B]]** — FAI process and FAIR deliverable
- **[[Configuration Management Basics]]** — Change control and baseline management post-production release
- **[[AS9100D NPI Clauses]]** — Quality standard requirements across NPI phases
- **[[MOC — Digital Systems]]** — PLM, ERP, MES integration supporting NPI

## Sources

- AS9100D (Requirement 8.1 Operational planning, 8.3 Design and development)
- AS9102B (First Article Inspection specification)
- AS9145 (Qualification and Approval of Aerospace and Defense Suppliers)
- MIL-STD-1521B (Technical Reviews)

---

**Note:** %%VERIFY%% Timeline ranges (18–36 months) are representative but vary significantly by program complexity and customer requirements. Always reference program-specific plans.

Last updated: 2026-04-13
