---
title: "First Article Inspection — FAI and FAIR AS9102B"
type: concept
status: synthesized
created: "2026-04-13"
updated: "2026-04-13"
description: "First Article Inspection (FAI) process per AS9102B; FAIR (First Article Inspection Report) as the deliverable"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - phase/NPI
  - domain/aerospace-defense
  - process/FAI
  - standard/AS9102B
sources:
  - "[[First Article Inspection — FAI and FAIR AS9102B]]"
---

# First Article Inspection — FAI and FAIR AS9102B

## What is FAI?

**First Article Inspection (FAI)** is a comprehensive, one-time inspection and testing of the first production (or pilot) article of a new part or component to verify that:
1. The design specification can actually be manufactured as intended
2. The manufactured part meets all dimensional, material, and functional requirements
3. The supplier's manufacturing process is capable and documented

The output of FAI is the **FAIR (First Article Inspection Report)** — a detailed technical document that serves as evidence of design conformance and process control.

---

## FAI vs. Regular Quality Inspection

| Aspect | FAI | Routine Inspection |
|--------|---|---|
| **Timing** | One-time, first article(s) | Ongoing, every production lot |
| **Scope** | 100% of design requirements; every characteristic | Sampling-based (AQL, per plan) |
| **Documentation** | Detailed FAIR with drawings, CMM data, functional test results | Inspection certificates, test reports per lot |
| **Authority** | Customer-approved supplier or customer-supervised | Supplier quality (in-process or receiving) |
| **Purpose** | Prove design can be manufactured to spec | Verify ongoing production conforms to spec |
| **Approval** | Customer sign-off before production release | Automatic (per AQL acceptance criteria) |

---

## FAIR (First Article Inspection Report) — AS9102B

### Structure of a FAIR

A FAIR is organized into sections addressing all aspects of design and manufacturing:

#### 1. Identification Section
- Part number, revision, description
- Design specification reference (drawing, document revision)
- Supplier name and facility
- Inspection date and inspector/approval signatures
- Customer and program identification

#### 2. Requirement Verification Section

**A. Dimensional Data**
- Critical dimensions measured via CMM (Coordinate Measuring Machine) or precision instruments
- For each dimension:
  - Specified tolerance (from drawing)
  - Measured value
  - Upper and lower control limits
  - Conformance (pass/fail)
- Statistical summary: mean, standard deviation, capability indices (Cpk/Ppk) %%VERIFY%%

**B. Material Certification**
- Material type and specification (e.g., 7075-T6 aluminum, 4340 steel)
- Material test reports (mill certificates, material coupons tested for hardness, tensile strength)
- Heat lot traceability (material serial number linked to first article)
- Plating/coating compliance (thickness, adhesion, corrosion resistance if specified)

**C. Functional and Performance Testing**
- Electrical tests (voltage, current, continuity, insulation resistance for electrical components)
- Mechanical performance (pressure/load testing, cycle testing, vibration testing as applicable)
- Environmental testing (thermal shock, moisture exposure, salt spray if specified)
- Safety testing (any flammability, toxicity, or hazard compliance)
- Test equipment calibration certificates

**D. Design Verification**
- Balloon drawing — marked-up version of design drawing showing measurements taken on the first article (indicates where each dimension was measured)
- Drawing notes and specifications addressed point-by-point
- Any deviations from design or substitutions documented and approved

#### 3. Process and Control Documentation
- Manufacturing process flow with key process parameters documented
- Work instructions or setup sheets (as built)
- Special processes (heat treat, plating, welding) certs and parameters
- Inspection points and acceptance criteria used during FAI
- Statistical Process Control (SPC) data from pilot production (if running pilot build)

#### 4. Supplier's FMEA Summary
- Design FMEA (DFMEA) — design risk analysis
- Process FMEA (PFMEA) — manufacturing risk analysis
- Risk Priority Number (RPN) and mitigations for any moderate or high risks

#### 5. Certification and Approval
- Supplier quality manager sign-off: "This first article has been inspected and tested per this FAIR and meets all requirements of [design specification]"
- Customer (or customer-approved lab) approval signature
- Any deviations or non-conformances noted and resolution documented

---

## FAI Process Workflow

### 1. Planning
- Customer specifies FAI requirements in contract or procurement documents
- Supplier assigned responsibility for conducting FAI
- FAI scope defined: which characteristics are critical, what testing is required, acceptance criteria

### 2. First Article Production
- Supplier manufactures one or more first articles using final design, materials, and manufacturing process
- Build documented (who, when, equipment used, process parameters)
- All in-process inspections and tests performed and recorded

### 3. Comprehensive Inspection & Testing
- **Dimensional**: CMM or precision measurement of all critical dimensions
- **Material**: Certifications collected; samples may be tested (hardness, tensile, composition)
- **Functional**: All functions tested per design specification (power-up, performance, safety tests)
- **Process validation**: Manufacturing work instructions and process control documented

### 4. FAIR Generation
- Supplier compiles all inspection and test data into FAIR
- FAIR organized per AS9102B structure (sections above)
- Drawings marked with measurement locations (balloon drawing)
- Non-conformances (if any) documented with corrective actions

### 5. Submission & Review
- FAIR submitted to customer (or customer-designated inspection authority)
- Customer quality and engineering review FAIR
- Customer may ask for additional data, retesting, or clarification
- Customer verifies all requirements are addressed and conformance demonstrated

### 6. Approval & Release
- Once approved, FAIR becomes a quality record and FAI is complete
- Supplier authorized to begin production
- FAIR filed with design and quality records (retention per aerospace standard, typically 20–50 years)

---

## Key Characteristics & Balloon Drawings

### What is a "Balloon Drawing"?

A **balloon drawing** is a marked-up copy of the design drawing where each dimension called out is marked with a **circle (balloon) and number** indicating where that dimension was measured on the first article.

**Example:**
```
Original drawing dimension: Ø10.0 ± 0.1 mm
Balloon 1: Points to hole location → Measured: 10.05 mm ✓ PASS
Balloon 2: Points to surface finish → Ra 1.6 µm max → Measured: 0.8 µm ✓ PASS
```

Balloon drawings are mandatory in aerospace FAI because they provide **traceability** — proof that the dimension specified in the drawing was actually measured on the first article.

### Characteristic Accountability

Every design specification (dimension, material property, functional requirement) must be **accounted for** in the FAIR:
- Either measured/tested and passed
- Or measured/tested and failed with corrective action
- Or explicitly waived (e.g., "not applicable to this first article variant") with justification

There cannot be gaps or unexplained omissions in a FAIR.

---

## Delta FAI

### What Triggers a Delta FAI?

A **Delta FAI** (rework FAI) is conducted when:
- Design changes occur after the initial FAI
- Manufacturing process changes occur (new supplier, new equipment, new procedure)
- A failed characteristic is corrected and re-inspected

**Example:**
- Original FAI completed and approved
- Engineering change order (ECO) modifies the design (e.g., different material, new dimension tolerance)
- Supplier manufactures updated first article and conducts **Delta FAI** on the changed characteristics only (not re-inspecting the entire part unless risk warrants it)

### Delta FAI Scope
- Only the changed characteristics are re-inspected/tested in detail
- Unaffected characteristics reference the original FAI (no re-work required)
- Reduces time and cost vs. full re-FAI

---

## FAI Conformance & Non-Conformances

### Conforming First Article
- All dimensions, material properties, and functional tests pass
- FAIR approved without deviations
- Part is released to production

### Non-Conforming First Article
If a dimension or test fails:
1. **Documented:** Failure recorded in FAIR with dimension/test identifier and measured value
2. **Root cause analysis:** Supplier and customer investigate why the failure occurred
3. **Corrective action:** Supplier implements fix (design change, process adjustment, tooling fix)
4. **Re-work or re-test:** Either rework the failed part and re-inspect, or build a new first article and repeat FAI on that characteristic (Delta FAI)
5. **Approval:** Only after corrective action and successful re-inspection is the FAIR approved

---

## Relationship to PPAP

- **FAI** — Inspects the first article; produces FAIR (design conformance evidence)
- **PPAP (Production Part Approval)** — Validates the manufacturing process; produces process capability data, FMEA, process control plan

In aerospace NPI:
1. FAI/FAIR completed during pilot/LRIP build
2. PPAP submitted (Level 1, 2, or 3) to customer
3. PPAP includes the FAIR as key evidence of design conformance
4. Upon PPAP approval, supplier is authorized to begin full production

---

## Related Concepts

- **[[MOC — NPI Process]]** — Hub for all NPI concepts
- **[[PPAP in Aerospace — AS9145]]** — PPAP submission process; FAIR is key PPAP document
- **[[PFMEA and DFMEA]]** — Design and Process FMEAs, which inform FAI scope
- **[[Aerospace NPI Process Overview]]** — Overall NPI lifecycle; FAI occurs in pilot/LRIP phase
- **[[Configuration Management Basics]]** — Design baseline established; FAI confirms design can be manufactured as baselined
- **[[AS9100D NPI Clauses]]** — AS9100D Clause 8.5.1 requirement for First Article Inspection

## Sources

- AS9102B (Specification for First Article Inspection)
- AS9145 (Qualification and Approval of Aerospace and Defense Suppliers)
- MIL-STD-1520 (Product Verification Requirements) — referenced in aerospace FAI practices

---

**Notes:**
- %%VERIFY%% AS9102B is the current aerospace standard; confirm against latest revision
- %%VERIFY%% Cpk/Ppk calculations in FAI — minimum acceptable values vary by criticality; typical minimum Cpk ≥ 1.33
- %%VERIFY%% FAIR retention period (20–50 years) depends on program and part lifecycle; always follow contract/regulatory requirements

Last updated: 2026-04-13
