---
title: "PLM-ERP-MES Integration"
type: concept
status: synthesized
created: "2026-04-16"
updated: "2026-04-16"
description: "How PLM, ERP, and MES form the three-system manufacturing backbone — their distinct roles, integration points, and why connection between them matters"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - system/PLM
  - system/ERP
  - system/MES
  - domain/manufacturing
  - phase/manufacturing
sources:
  - "[[The Roles of ERP and PLM in Manufacturing - now with MES!]]"
  - "[[Best Practices for Integrating MES with PLM and ERP Prescient]]"
  - "[[How the three main key Pillars (PLM ERP MES) help Manufacturers]]"
  - "[[Integrating PDM , PLM and ERP]]"
  - "[[PLM 101 A Deep Dive into Product Lifecycle Management]]"
  - "[[Practical ERP-MES Integration Guide]]"
  - "[[ERP vs PLM vs MES What's the Difference and Which One Does Your Industry Need]]"
---

# PLM-ERP-MES Integration

## The Three-System Model

Manufacturing operations run on three distinct but interconnected systems, each owning a different slice of the product lifecycle:

- **PLM** (Product Lifecycle Management) — drives product and process **innovation**. Manages design data, BOMs, revisions, and configuration through the full lifecycle from concept to EOL.
- **ERP** (Enterprise Resource Planning) — manages the commercial **business** of manufacturing. Handles planning, procurement, costing, logistics, and financial execution.
- **MES** (Manufacturing Execution System) — manages and tracks **production execution** on the shop floor. Dispatches work orders, monitors OEE, tracks material, and records quality results in real time.

A common shorthand: PLM = what to build, ERP = how to plan/buy, MES = how to actually make it.

## Why Integration Matters

Without integration, the systems become data silos:
- Design changes in PLM don't propagate to ERP BOMs → procurement orders wrong components
- ERP releases work orders without the latest engineering revision → production runs old drawings
- MES captures actuals (yield, cycle time, defects) that never feed back into PLM for design improvement

The integration closes three loops:
1. **Product loop** — PLM design data flows into ERP BOMs and MES work instructions
2. **Production loop** — MES execution results feed back into ERP for cost tracking
3. **Quality loop** — MES defect data and non-conformances feed back into PLM for design improvement

Manufacturers with integrated digital systems report up to 30% reduction in engineering change cycle times and fewer production errors.

## Integration Architecture

### PLM → ERP
- Engineering BOM (EBOM) converted to Manufacturing BOM (MBOM) in ERP
- Item masters, part numbers, and approved supplier lists flow from PLM into ERP
- Change orders (ECOs) trigger automatic BOM updates in ERP

### PLM → MES
- Work instructions and process plans flow from PLM to MES shop floor
- Revision-controlled drawings delivered to production without manual transfer
- Routing and operation sequences maintained in PLM, executed in MES

### MES → ERP
- Actual production quantities, labor, and material consumption reported to ERP
- Shop floor transactions close work orders and trigger inventory updates

### MES → PLM (feedback)
- Quality inspection results and non-conformance data inform design decisions
- As-built configurations captured in MES feed product service records in PLM

## ISA-95 as the Integration Standard

[[ISA-95]] defines the standard interface model between Level 4 (ERP) and Level 3 (MES). It specifies what data objects are exchanged (production orders, schedules, performance results) and how they're structured — preventing vendor lock-in and enabling interoperability across systems from different vendors. See also [[Digital Thread in Manufacturing]].

## Key Risks Without Integration

- **BOM fragmentation** — EBOM and MBOM diverge, causing procurement and production errors
- **Revision mismatch** — production runs stale drawings; engineering doesn't know
- **Manual rekeying** — data duplicated across systems, error-prone and labor-intensive
- **No closed-loop quality** — defects recur because actual results never inform design

## Related Concepts

- [[Digital Thread in Manufacturing]] — the connected data flow that PLM-ERP-MES integration enables
- [[ISA-95]] — standard defining MES-ERP interface
- [[Engineering Change Management]] — how changes flow through the integrated system
- [[IT-OT Convergence]] — broader context of connecting enterprise IT with shop-floor OT
