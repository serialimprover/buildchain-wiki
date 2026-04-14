---
title: "PPAP in Aerospace — AS9145"
type: concept
status: synthesized
created: "2026-04-13"
updated: "2026-04-13"
description: "Production Part Approval Process in aerospace/defense via AS9145; differs from automotive AIAG PPAP"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - phase/NPI
  - domain/aerospace-defense
  - process/PPAP
  - standard/AS9145
  - system/PLM
sources:
  - "[[PPAP in Aerospace — AS9145]]"
---

# PPAP in Aerospace — AS9145

## What is PPAP?

**Production Part Approval Process (PPAP)** is a supplier quality process that demonstrates that a new part, component, or assembly meets design specifications and is ready for production. It originated in the automotive industry (AIAG standard) but has been adapted for aerospace and defense via **AS9145**.

In aerospace, PPAP is part of the supplier qualification and approval workflow — it occurs during the pilot/LRIP phase and serves as evidence of manufacturing process control and capability.

## PPAP vs. FAI — Key Difference

- **FAI (First Article Inspection)** per AS9102B — One-time first article inspection to confirm a design can be manufactured per specifications; focus on product conformance
- **PPAP (Production Part Approval)** per AS9145 — Comprehensive supplier process validation, demonstrating sustained manufacturing capability; focus on process control and repeatability

**They work together:** FAI inspects the first article; PPAP demonstrates the process is controlled and capable of making many more articles to the same standard.

---

## PPAP Submission Levels (AS9145)

AS9145 defines **three submission levels**, depending on the part complexity, risk, and customer requirements:

### Level 1 — Minimal Submission
**Used for:** Low-risk, standard parts (fasteners, catalog items, no design changes)

**Supplier submits:**
- Part number, revision, and specifications
- Statement of conformance (part meets all specifications)
- Certificate of Conformance (CoC)

**Customer action:** May accept without detailed review

**Typical timeline:** 1–2 weeks

---

### Level 2 — Expanded Submission
**Used for:** Standard production parts with minor design changes, moderate risk

**Supplier submits:**
- Part Submission Warrant (PSW) — summary of part, design changes, process changes
- Design specification and/or engineering drawing
- Bill of Materials (if applicable)
- Material test reports (if material critical)
- Manufacturing process flow and FMEA summary
- Dimensional data (CMM report or inspection data)
- Performance test data
- First Article Inspection Report (FAIR) summary
- Certificate of Conformance

**Customer action:** Reviews submission; may request additional data or witness testing

**Typical timeline:** 4–8 weeks

---

### Level 3 — Comprehensive Submission
**Used for:** Complex parts, critical design changes, high-risk items (safety-critical, single-source), new suppliers

**Supplier submits:**
- Complete Part Submission Warrant (detailed PSW)
- Full Design Specification and Engineering Drawing(s)
- Complete Bill of Materials with part numbers, sources, revisions
- Complete Design FMEA (DFMEA) and Process FMEA (PFMEA)
- **Full First Article Inspection Report (FAIR)** per AS9102B
  - Detailed dimensional data (CMM/inspection on all critical dimensions)
  - Material certificates and material test reports
  - Functional and performance test data
  - Design verification testing results
- Process capability studies (Cpk, Ppk data)
- Supplier Quality System summary (AS9100D compliance, certifications)
- Process audit results (internal supplier audit of manufacturing process)
- Tooling and equipment control plan
- Traceability and serialization plan (if applicable)
- Corrective action procedures and closure evidence
- Certificate of Conformance and Design Release approval

**Customer action:** Detailed review by engineering and quality teams; may conduct supplier quality audit; may witness first article production

**Typical timeline:** 8–16 weeks

---

## PPAP Submission Process

### 1. Planning Phase (Pre-Production)
- Supplier notified of part and design specifications
- Supplier assigns PPAP level based on risk and program requirements
- Supplier initiates design and process planning
- Supplier schedules PPAP submission date with customer

### 2. Design Phase
- Supplier reviews design specifications and customer requirements
- Supplier conducts DFMEA (Design FMEA) to identify design risks
- Supplier develops preliminary manufacturing process plan

### 3. Pilot/LRIP Production
- Supplier builds pilot/LRIP units to final design specification
- Supplier documents manufacturing process (work instructions, setup sheets, control plans)
- Supplier conducts First Article Inspection (FAI) per AS9102B
  - Record dimensional data (CMM, go/no-go gauges, functional testing)
  - Generate First Article Inspection Report (FAIR)

### 4. Process Validation
- Supplier validates manufacturing process capability (Cpk/Ppk studies on critical characteristics)
- Supplier conducts Process FMEA (PFMEA) to identify and mitigate production risks
- Supplier prepares process control plan (SPC, in-process inspection points, sampling plans)

### 5. Submission & Review
- Supplier submits PPAP package (Level 1, 2, or 3) to customer
- Customer quality/engineering team reviews submission
- Customer may request additional data, clarification, or witness testing
- Customer approves or requests rework/resubmission

### 6. Approval & Production Release
- Once approved, supplier is authorized to begin full production
- Supplier maintains PPAP evidence file for the part (traceability, design changes, process changes)

---

## Key Documents in a PPAP Submission

| Document | Purpose | Prepared By |
|---|---|---|
| **Part Submission Warrant (PSW)** | Summary of part, design, process changes, and submission level justification | Supplier Quality/Engineering |
| **Design Drawing** | Complete technical specification (dimensions, materials, tolerances, surface treatments) | Supplier Design |
| **Bill of Materials (BOM)** | List of all components, raw materials, purchased parts, their specifications | Supplier Engineering |
| **DFMEA (Design FMEA)** | Analysis of design risks; design controls and mitigations | Supplier Design Engineering |
| **PFMEA (Process FMEA)** | Analysis of manufacturing process risks; process controls and mitigations | Supplier Manufacturing Engineering |
| **FAIR (First Article Inspection Report)** | Detailed inspection and test data from first article per AS9102B | Supplier Quality/Inspection |
| **Process Capability Study** | Cpk/Ppk data demonstrating sustained process capability (minimum Cpk ≥ 1.33 typical) | Supplier Process Engineering |
| **Process Control Plan** | Work instructions, setup sheets, SPC charts, in-process inspection points, sampling plans | Supplier Manufacturing |
| **Material Certificates** | Material test data confirming raw material meets specification | Material supplier |
| **Certificate of Conformance** | Supplier's statement that part and process conform to all specifications | Supplier Quality Manager |

---

## PPAP vs. Automotive AIAG PPAP

While the aerospace AS9145 PPAP is based on automotive AIAG PPAP, there are key differences:

| Aspect | Automotive AIAG PPAP | Aerospace AS9145 PPAP |
|--------|---|---|
| **Driving standard** | AIAG guidelines (General Motors, Ford, Chrysler) | AS9145 and customer-specific procedures (Boeing, Lockheed, etc.) |
| **First Article Inspection** | FAIR not always required; focus on production process | **FAIR per AS9102B mandatory** (especially Level 3) |
| **Design FMEA / Process FMEA** | FMEA encouraged; not always required | **DFMEA and PFMEA mandatory** (Level 3); RPN scores and mitigation documented |
| **Design Release** | Design change managed by OEM | **Part of supplier PPAP approval** — supplier must have design release authority |
| **Process Capability** | Cpk ≥ 1.33 typical | Cpk ≥ 1.67 often required (higher reliability margin) |
| **Configuration Traceability** | Serial number tracking for critical parts | **Configuration baseline** — design revision, supplier process revision, tooling revision all tracked |
| **Documentation Retention** | 3–5 years typical | **Lifetime of part in production** (may be 20–50+ years for aerospace platforms) |
| **Customer Witness** | Limited to high-risk parts | **Common for critical parts or new suppliers**; customer may conduct supplier quality audit |

---

## Related Concepts

- **[[MOC — NPI Process]]** — Hub for all NPI concepts
- **[[First Article Inspection — FAI and FAIR AS9102B]]** — FAI process and FAIR deliverable (PPAP input)
- **[[PFMEA and DFMEA]]** — Process and Design FMEAs, key PPAP submission documents
- **[[Aerospace NPI Process Overview]]** — Overall NPI lifecycle; PPAP occurs in pilot/LRIP phase
- **[[Configuration Management Basics]]** — Design and process baseline management post-PPAP approval
- **[[AS9100D NPI Clauses]]** — AS9100D requirements for production control and supplier approval

## Sources

- AS9145 (Qualification and Approval of Aerospace and Defense Suppliers)
- AS9102B (First Article Inspection)
- AIAG PPAP (Automotive Industry Action Group Production Part Approval Process) — referenced in aerospace adaptations

---

**Notes:**
- %%VERIFY%% Cpk thresholds (1.33 vs. 1.67) vary by customer and part criticality; always confirm with procurement or customer quality
- %%VERIFY%% PPAP timelines (4–16 weeks) assume supplier has design data and process plan ready; new suppliers may take longer
- %%VERIFY%% AS9145 revision — confirm against current published standard

Last updated: 2026-04-13
