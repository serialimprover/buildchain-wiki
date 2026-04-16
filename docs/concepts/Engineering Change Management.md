---
title: "Engineering Change Management"
type: concept
status: synthesized
created: "2026-04-16"
updated: "2026-04-16"
description: "Structured process for controlling modifications to product designs, BOMs, and manufacturing processes through a traceable ECR → ECO → ECN workflow"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - system/PLM
  - phase/sustaining
  - domain/manufacturing
  - domain/quality
sources:
  - "[[What is Engineering Change Management]]"
  - "[[Engineering change management definition, process and best practices]]"
  - "[[Engineering Change Order (ECO) Definition, Types, Process, and Example]]"
  - "[[Best Practices for Engineering Change Management]]"
  - "[[Top Tips for Mastering Successful Engineering Change Management]]"
---

# Engineering Change Management

## What It Is

Engineering Change Management (ECM) is the structured, end-to-end process for identifying, evaluating, approving, implementing, and tracking modifications to product designs, requirements, specifications, and manufacturing processes. Every change — from a minor tolerance update to a full assembly redesign — flows through a controlled, traceable workflow.

ECM is not just about tracking changes. It ensures the right change is made at the right time, by the right stakeholders, with full visibility of downstream impact before anything is executed.

## The ECR → ECO → ECN Sequence

Changes move through three documents in sequence:

### 1. Engineering Change Request (ECR)
The initial proposal. Captures:
- The problem or improvement opportunity
- Proposed solution
- Preliminary risk and impact assessment

The ECR triggers formal review. Anyone on the team can raise an ECR; it doesn't authorize any change.

### 2. Engineering Change Order (ECO)
The approved change authorization. Specifies:
- Exactly what changes (CAD, BOM, drawing, specification, process)
- Effectivity date or serial number
- Who reviews and approves (cross-functional sign-off)
- Impact on cost, schedule, and compliance

The ECO is the legal authorization to implement. Production cannot proceed with the new revision until the ECO is closed.

### 3. Engineering Change Notice (ECN)
Communication to affected stakeholders after the ECO is approved. Notifies:
- Production, quality, procurement, suppliers
- Updated documents and revision levels
- Implementation timeline and effectivity

%%VERIFY%% Some organizations combine ECO and ECN or use different terminology (e.g., DCO — Design Change Order in some aerospace contexts).

## Why ECM Matters in Regulated Industries

In aerospace (AS9100D), automotive (IATF 16949), and medical devices (ISO 13485), every change to a production part or process must be:
- Traceable (who requested, who approved, what changed, when)
- Impact-assessed (what downstream systems, suppliers, and certifications are affected)
- Documented (updated drawings, specs, and BOMs at correct revision)

Without ECM, organizations risk shipping products built to the wrong revision, failing audits, or triggering recalls.

## ECM in PLM Systems

ECM is a core capability of PLM. The PLM system:
- Stores CAD models and BOMs under revision control
- Manages ECR/ECO/ECN workflows with automated routing and approvals
- Maintains full audit trail of every change and approver
- Enforces effectivity — ensuring production only uses approved revisions

When PLM is integrated with ERP and MES (see [[PLM-ERP-MES Integration]]), approved ECOs automatically propagate BOM updates downstream, eliminating manual re-entry and the revision mismatch risk.

## Common Failure Modes

- **Change without authorization** — engineer updates CAD but skips ECO; production unknowingly uses new revision without approval
- **Effectivity miscommunication** — ECO approved but ECN not issued; suppliers continue making old part
- **Scope creep in change** — one change spawns 12 "while we're in there" changes, delaying the original fix
- **No impact analysis** — change approved without checking downstream effects on FMEA, test procedures, or supplier qualifications

## Relationship to Configuration Management

ECM and configuration management are tightly coupled. Configuration management ensures the product at any point in time matches a known, approved baseline. ECM is the process that moves from one approved baseline to the next. Together they answer: what exactly was built, when, and what approved that build state.

See also [[PLM-ERP-MES Integration]] for how changes propagate across the three-system stack, and [[ISA-95]] for how production execution systems are notified of approved changes.

## Related Concepts

- [[PLM-ERP-MES Integration]] — ECM workflow lives in PLM and propagates into ERP and MES
- [[Digital Thread in Manufacturing]] — ECM traceability depends on a connected digital thread
