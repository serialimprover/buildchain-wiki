---
title: "Configuration Management Basics"
type: concept
status: synthesized
created: "2026-04-13"
updated: "2026-04-13"
description: "Configuration Management in aerospace — Configuration Items, baselines, change control, audits, PLM integration"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - phase/NPI
  - phase/sustaining
  - system/PLM
  - domain/aerospace-defense
sources:
  - "[[Configuration Management Basics]]"
---

# Configuration Management Basics

## What is Configuration Management (CM)?

**Configuration Management** is the discipline of identifying, controlling, and tracking all versions of a product's design, components, materials, and processes throughout its lifecycle. It ensures that:
1. **What was approved is what was built** — design documentation matches manufactured hardware
2. **Changes are controlled and traceable** — every design or process change is documented, approved, and communicated
3. **Historical record is maintained** — can identify when a change occurred, why, and who approved it
4. **Obsolescence is managed** — parts and suppliers are tracked; discontinuations are anticipated and mitigated

CM is mandatory in aerospace under **AS9100D Clause 8.4.4** and referenced throughout design, production, and sustainment phases.

---

## Core CM Concepts

### Configuration Item (CI)

A **Configuration Item** is any component, assembly, or document that is significant enough to require identification, control, and tracking. Examples:
- A complete product/system (e.g., satellite, launch vehicle)
- A major subsystem (e.g., flight control computer, propulsion module)
- A critical component (e.g., valve, sensor, avionics processor)
- Design documentation (specifications, drawings, schematics)
- Software (firmware, control algorithms)
- Manufacturing processes (routing, work instructions, tooling design)

Not everything is a CI — routine fasteners, consumables, or standard catalog items may not be CIs. The program defines CI list based on risk and complexity.

### Baseline

A **Baseline** is a formally approved snapshot of a Configuration Item at a specific point in time. It serves as the reference point for all future changes. Three types of baselines exist:

#### 1. Functional Baseline
- **What:** System requirements and intended functions
- **When:** After requirements review (pre-design)
- **Content:** System specifications, interface specifications, performance requirements, acceptance criteria
- **Approval:** Customer and program leadership
- **Purpose:** Baseline against which designs are measured; foundation for design reviews

#### 2. Allocated Baseline
- **What:** Design architecture and subsystem requirements
- **When:** After preliminary design review (PDR) — post-CDR for detail design
- **Content:** Subsystem design documents, interface control documents (ICDs), design specifications
- **Approval:** Design review (PDR/CDR)
- **Purpose:** Freeze design so manufacturing and supplier design can proceed; foundation for detailed engineering

#### 3. Product Baseline
- **What:** Final design, all drawings, specifications, and process documentation
- **When:** After CDR and before production release
- **Content:** Engineering drawings, bills of materials (BOMs), manufacturing process plans, quality plans, test procedures
- **Approval:** Design release authority (design review approval or formal design release document)
- **Purpose:** Authorize production; freeze design for manufacturing; foundation for sustainment and spares support

### Configuration Control

**Configuration Control** is the process of managing changes to a baseline. Once a baseline is approved, no change occurs without:
1. **Submission** — originator proposes the change with rationale
2. **Review** — engineering, manufacturing, quality, and customer (if required) review impact
3. **Approval** — Configuration Control Board (CCB) authorizes or rejects the change
4. **Implementation** — change is implemented and verified (new drawing revision, process update, retesting)
5. **Documentation** — change recorded and traced (who, when, why, approval evidence)

---

## Change Control Process

### Engineering Change Notice (ECN) or Engineering Change Order (ECO)

When a design change is needed after the product baseline is approved, a **Configuration Change Notice/Order** is submitted. Example:

```
ECN-2026-001234 — Propeller Blade Material Upgrade
Title: Replace 7075-T6 aluminum with 7075-T73 (stress-relieved) for improved corrosion resistance

Rationale: 
- Field inspection revealed stress corrosion cracking on Lot A blades (material lot 2024-Q3)
- Root cause: aggressive coastal environment; existing material insufficient

Design Changes:
- Propeller blade material specification updated: 7075-T6 → 7075-T73
- Drawing revision: B → C
- BOM item updated; supplier material specification changed

Impact Analysis:
- Weight increase: negligible (< 0.5%)
- Performance: no change (strength/stiffness equivalent)
- Manufacturing: no change (same machining process)
- Cost: +$45/unit (material cost)
- Schedule: no impact (material available from supplier)
- Field retrofit: all existing blades (Lot A only) to be replaced; estimated 200 units in field

Approvals Required:
- Design Engineering: [signature] Date
- Manufacturing: [signature] Date
- Quality/Configuration Management: [signature] Date
- Customer: [signature] Date (if required per contract)

Effective Date: [date all new production to use T73]
Retrofit Requirement: All Lot A units in field to be upgraded under warranty
```

### Configuration Control Board (CCB)

The **CCB** is the decision-making body for change control. Membership typically includes:
- Program manager
- Chief design engineer
- Manufacturing engineer
- Quality manager
- Supplier representative (if supplier-initiated change)
- Customer representative (for critical changes)

The CCB meets regularly (weekly, bi-weekly) to review and approve/reject pending changes.

---

## Configuration Audits

Configuration audits verify that the actual product matches the approved design and that all controls are in place.

### Functional Configuration Audit (FCA)
- **When:** Before design release to production
- **What:** Verifies that the design meets all functional requirements (testing, analysis, simulation)
- **How:** Compare design vs. specifications; review test data; verify all requirements traced to design features
- **Goal:** Confirm design will perform as intended

### Physical Configuration Audit (PCA)
- **When:** After production (before accepting first article or lot)
- **What:** Verifies that the manufactured hardware matches the design specification
- **How:** Visual inspection, dimensional inspection (CMM), material certs, process parameter verification
- **Goal:** Confirm hardware built per approved design; no undocumented changes

---

## Configuration Item Traceability

CM systems (often PLM systems) track traceability chains:

```
Requirement (Functional Baseline)
         ↓
    Allocated to Design (Allocated Baseline)
         ↓
    Implemented in Drawing/BOM (Product Baseline)
         ↓
    Manufactured per Work Instruction
         ↓
    Tested & Verified (FAI/First Article Inspection)
         ↓
    Released to Production
         ↓
    Field Units Tracked (Serial Numbers, Lot Codes)
         ↓
    Future Changes Traced Back (ECNs reference baseline version)
```

This traceability enables:
- **Retrofit determination:** Identify which field units are affected by a design change
- **Obsolescence management:** Track when suppliers discontinue materials/parts; identify required upgrades
- **Root cause analysis:** Link a field failure to the design version, manufacturing date, and supplier lot that caused it
- **Configuration verification:** Confirm a returned unit matches its serial number configuration

---

## PLM Integration

Modern Configuration Management relies on **Product Lifecycle Management (PLM)** systems (Teamcenter, Windchill, etc.) to:
- Store all design documents (drawings, specs, CAD models)
- Maintain baseline versions (revision control)
- Track changes (ECNs, approval workflow)
- Enforce access control (only authorized personnel can modify baselines)
- Generate Bills of Materials (BOMs) automatically from CAD
- Integrate with manufacturing systems (ERP, MES) to control what gets produced

---

## Related Concepts

- **[[MOC — NPI Process]]** — Hub for all NPI concepts
- **[[Aerospace NPI Process Overview]]** — Product baseline established at design release (TRR)
- **[[Design Reviews — PDR CDR TRR]]** — Design baselines approved at PDR/CDR reviews
- **[[First Article Inspection — FAI and FAIR AS9102B]]** — Confirms built hardware matches product baseline
- **[[AS9100D NPI Clauses]]** — AS9100D Clause 8.4.4 Configuration Management requirements
- **[[MOC — Digital Systems]]** — PLM systems manage configuration data

## Sources

- AS9100D (Clause 8.4.4 Configuration Management)
- MIL-STD-480B (Specification for Configuration Control)
- MIL-HDBK-61 (Configuration Management)
- ISO 10007 (Configuration Management in Projects and Services)

---

**Notes:**
- %%VERIFY%% CM workflow — confirm specific process with program-level CM plan (varies by customer and program size)
- %%VERIFY%% Retrofit identification — complex for large fielded populations; always involve customer and quality before executing
- %%VERIFY%% Configuration item list — typically 50–500 items for aerospace systems; scope varies dramatically by complexity

Last updated: 2026-04-13
