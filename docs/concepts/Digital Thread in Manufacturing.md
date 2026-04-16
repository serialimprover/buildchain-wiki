---
title: "Digital Thread in Manufacturing"
type: concept
status: synthesized
created: "2026-04-16"
updated: "2026-04-16"
description: "The continuous, connected flow of product data across CAD, PLM, ERP, and MES — enabling one version of the truth from design through production and service"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - system/PLM
  - system/ERP
  - system/MES
  - system/CAD
  - domain/manufacturing
  - phase/manufacturing
sources:
  - "[[Digital Thread in Manufacturing Connecting CAD, PLM, ERP and MES for Integrated Product Development]]"
  - "[[Weaving the Digital Thread - The Interoperability Standards Powering Smart Manufacturing – Metrology and Quality News]]"
  - "[[Advancing aerospace engineering with MBSE–PLM Integration]]"
---

# Digital Thread in Manufacturing

## What It Is

The digital thread is the **continuous, connected flow of product data** across all systems involved in a product's lifecycle — from initial design through manufacturing, delivery, and service. It eliminates the gaps between disconnected tools and ensures every system is working from the same version of the truth.

Without a digital thread:
- CAD updates don't propagate to PLM revisions
- PLM BOMs don't sync to ERP procurement records
- ERP work orders don't carry the correct engineering revision to MES
- Shop floor actuals never feed back to inform future design decisions

With a digital thread, a dimension change in CAD flows automatically through PLM → ERP → MES, and production feedback flows back.

## The Systems It Connects

```
CAD (design geometry)
  ↓
PLM (revision control, BOM, change management)
  ↓
ERP (procurement, costing, work order release)
  ↓
MES (production execution, quality, as-built)
  ↓
Service (field data, maintenance history)
```

Each handoff point has historically been a gap where data is manually re-entered, exported/imported via files, or simply not transferred. The digital thread replaces those gaps with live, automated data flow.

## File Transfer Is Not Integration

A common misconception: exporting a BOM to Excel and importing it into ERP is "integration." It is not. File transfers are:
- Asynchronous — the receiving system is immediately out of date
- Error-prone — manual steps introduce transcription errors
- Untraceable — no audit trail of when data was last synchronized

True digital thread integration means the data moves automatically, in real time, with full traceability.

## Common Break Points

| Break point | Symptom |
|-------------|---------|
| CAD → PLM not linked | Engineers maintain drawings outside PLM; revision control gaps |
| EBOM ≠ MBOM | Engineering and manufacturing BOMs diverge; procurement orders wrong parts |
| PLM → ERP manual sync | Approved ECOs don't update ERP BOMs until someone manually re-enters them |
| ERP → MES via paper | Work orders printed and handed to production; no real-time status |
| MES actuals not returned | Yield, defects, and cycle times never reach PLM for design improvement |

## MBSE and the Digital Thread in Aerospace

Model-Based Systems Engineering (MBSE) extends the digital thread upstream to requirements and system architecture. In aerospace, the thread runs:

```
Requirements model (MBSE) → CAD → PLM → ERP → MES → as-built record
```

Every artifact — from system requirement to as-built serial number — is traceable in one connected chain. This is required for AS9100D compliance and FAA/EASA airworthiness traceability. See also [[Aerospace NPI Process Overview]] and [[First Article Inspection — FAI and FAIR AS9102B]].

## Relationship to [[ISA-95]] and [[Unified Namespace (UNS)]]

[[ISA-95]] defines the formal interface model between ERP (Level 4) and MES (Level 3) — part of the digital thread standard for MES-ERP data exchange.

[[Unified Namespace (UNS)]] provides the real-time data bus that can carry the digital thread at the OT layer — connecting machine data directly into the thread without point-to-point integrations.

## Measuring Thread Fidelity

A digital thread is only valuable if the data is accurate and current. Key metrics:
- **Revision currency** — what % of production operations are using the latest approved revision?
- **BOM match rate** — what % of ERP BOMs match the PLM-approved MBOM?
- **Feedback latency** — how long does it take for a shop floor defect to reach an engineering action?

## Related Concepts

- [[PLM-ERP-MES Integration]] — the integration of the three core systems that the digital thread connects
- [[Engineering Change Management]] — changes propagate through the system via the digital thread
- [[Digital Twins in Manufacturing]] — digital twins consume the digital thread as their data source
- [[IT-OT Convergence]] — prerequisite infrastructure for extending the digital thread to shop-floor OT
- [[ISA-95]] — standard defining the ERP-MES segment of the digital thread
