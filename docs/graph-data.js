// Graph data with full content extracted from markdown files
const graphData = {
  nodes: [
    {
      id: "MOC — NPI Process",
      type: "MOC",
      category: "NPI",
      content: `# Map of Content — NPI Process

Central hub for New Product Introduction concepts in aerospace and defense. Navigate by role, process, or standard.

## Process Overview
- **Aerospace NPI Process Overview** — Stage gates, build phases, timelines, key deliverables at each gate

## Design Phase
- **Design Reviews — PDR CDR TRR** — Preliminary, Critical, and Test Readiness Reviews; entry/exit criteria, artifacts, governance
- **PFMEA and DFMEA** — Design and Process Failure Mode & Effects Analysis; RPN scoring, relationship to design reviews

## Production & Quality
- **PPAP in Aerospace — AS9145** — Production Part Approval Process in aerospace/defense context; submission levels, documents
- **First Article Inspection — FAI and FAIR AS9102B** — First Article Inspection process and FAIR (First Article Inspection Report) deliverable; characteristic accountability, balloon drawings
- **Configuration Management Basics** — Configuration Items, baselines, change authority boards, audits (FCA/PCA), PLM integration

## Compliance & Standards
- **AS9100D NPI Clauses** — Aerospace quality standard clauses most relevant to NPI; clause 8.1, 8.3, 8.5.1; differences from ISO 9001

## Related Hubs
- **MOC — Digital Systems** — PLM, ERP, MES integration and use cases across the NPI lifecycle`
    },
    {
      id: "MOC — Digital Systems",
      type: "MOC",
      category: "Digital Systems",
      content: `# Map of Content — Digital Systems

Central hub for Product Lifecycle Management (PLM), Enterprise Resource Planning (ERP), and Manufacturing Execution Systems (MES) concepts and their integration in hardware development and production.

## Digital Systems Overview

The three pillars of manufacturing software:

- **PLM (Product Lifecycle Management)** — manages product design, changes, and configuration from concept through sustainment
- **ERP (Enterprise Resource Planning)** — manages business operations: inventory, procurement, financials, supply chain
- **MES (Manufacturing Execution System)** — manages shop-floor production: scheduling, real-time quality, resource utilization

Integration of these three systems is critical for efficient, traceable manufacturing.

## PLM (Product Lifecycle Management)

- **PLM Systems Overview** — Design data management, BOM control, document management
- **PLM for Aerospace/Defense** — AS9100D compliance in PLM workflows

## ERP (Enterprise Resource Planning)

- **ERP in Manufacturing** — Inventory and materials management, Procurement workflow and supplier management`
    },
    {
      id: "Aerospace NPI Process Overview",
      type: "concept",
      category: "NPI",
      content: `# Aerospace NPI Process Overview

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
- Prepare manufacturing processes and tooling`
    },
    {
      id: "Design Reviews — PDR CDR TRR",
      type: "concept",
      category: "NPI",
      content: `# Design Reviews — PDR, CDR, TRR

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
- Supplier selections and capability summaries`
    },
    {
      id: "PPAP in Aerospace — AS9145",
      type: "concept",
      category: "NPI",
      content: `# PPAP in Aerospace — AS9145

## What is PPAP?

**Production Part Approval Process (PPAP)** is a supplier quality process that demonstrates that a new part, component, or assembly meets design specifications and is ready for production. It originated in the automotive industry (AIAG standard) but has been adapted for aerospace and defense via **AS9145**.

In aerospace, PPAP is part of the supplier qualification and approval workflow — it occurs during the pilot/LRIP phase and serves as evidence of manufacturing process control and capability.

## PPAP vs. FAI — Key Difference

- **FAI (First Article Inspection)** per AS9102B — One-time first article inspection to confirm a design can be manufactured per specifications; focus on product conformance
- **PPAP (Production Part Approval)** per AS9145 — Comprehensive supplier process validation, demonstrating sustained manufacturing capability; focus on process control and repeatability

**They work together:** FAI inspects the first article; PPAP demonstrates the process is controlled and capable of making many more articles to the same standard.

## PPAP Submission Levels (AS9145)

AS9145 defines **three submission levels**, depending on the part complexity, risk, and customer requirements:

### Level 1 — Minimal Submission
**Used for:** Low-risk, standard parts (fasteners, catalog items, no design changes)

**Supplier submits:**
- Part number, revision, and specifications
- Statement of conformance (part meets all specifications)
- Certificate of Conformance (CoC)`
    },
    {
      id: "First Article Inspection — FAI and FAIR AS9102B",
      type: "concept",
      category: "NPI",
      content: `# First Article Inspection — FAI and FAIR AS9102B

## What is FAI?

**First Article Inspection (FAI)** is a comprehensive, one-time inspection and testing of the first production (or pilot) article of a new part or component to verify that:
1. The design specification can actually be manufactured as intended
2. The manufactured part meets all dimensional, material, and functional requirements
3. The supplier's manufacturing process is capable and documented

The output of FAI is the **FAIR (First Article Inspection Report)** — a detailed technical document that serves as evidence of design conformance and process control.

## FAI vs. Regular Quality Inspection

| Aspect | FAI | Routine Inspection |
|--------|---|---|
| **Timing** | One-time, first article(s) | Ongoing, every production lot |
| **Scope** | 100% of design requirements; every characteristic | Sampling-based (AQL, per plan) |
| **Documentation** | Detailed FAIR with drawings, CMM data, functional test results | Inspection certificates, test reports per lot |
| **Authority** | Customer-approved supplier or customer-supervised | Supplier quality (in-process or receiving) |
| **Purpose** | Prove design can be manufactured to spec | Verify ongoing production conforms to spec |
| **Approval** | Customer sign-off before production release | Automatic (per AQL acceptance criteria) |

## FAIR (First Article Inspection Report) — AS9102B

### Structure of a FAIR

A FAIR is organized into sections addressing all aspects of design and manufacturing`
    },
    {
      id: "Configuration Management Basics",
      type: "concept",
      category: "NPI",
      content: `# Configuration Management Basics

## What is Configuration Management (CM)?

**Configuration Management** is the discipline of identifying, controlling, and tracking all versions of a product's design, components, materials, and processes throughout its lifecycle. It ensures that:
1. **What was approved is what was built** — design documentation matches manufactured hardware
2. **Changes are controlled and traceable** — every design or process change is documented, approved, and communicated
3. **Historical record is maintained** — can identify when a change occurred, why, and who approved it
4. **Obsolescence is managed** — parts and suppliers are tracked; discontinuations are anticipated and mitigated

CM is mandatory in aerospace under **AS9100D Clause 8.4.4** and referenced throughout design, production, and sustainment phases.

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

A **Baseline** is a formally approved snapshot of a Configuration Item at a specific point in time. It serves as the reference point for all future changes. Three types of baselines exist`
    },
    {
      id: "AS9100D NPI Clauses",
      type: "concept",
      category: "Quality",
      content: `# AS9100D NPI Clauses

## Overview

**AS9100D** (Revision D, current) is the aerospace and defense quality management standard. It combines ISO 9001:2015 base requirements with additional aerospace-specific controls for configuration management, design, product safety, and supplier management.

During New Product Introduction (NPI), four AS9100D clauses are most critical:
1. **8.1** — Operational Planning (what must be done before design/production starts)
2. **8.3** — Design and Development (design reviews, FMEA, requirements traceability)
3. **8.4.4** — Configuration Management (change control, baselines)
4. **8.5.1** — Production Control (manufacturing controls, process capability, FAI)

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
**Pre-Design Phase — Program Planning**`
    },
    {
      id: "PFMEA and DFMEA",
      type: "concept",
      category: "Quality",
      content: `# PFMEA and DFMEA

## Overview

**FMEA (Failure Mode & Effects Analysis)** is a systematic technique for identifying and analyzing potential failures in a product or process, assessing their severity and occurrence probability, and implementing controls or design changes to reduce risk.

In aerospace NPI, two types of FMEA are mandatory:
1. **DFMEA (Design FMEA)** — analyzes design risks
2. **PFMEA (Process FMEA)** — analyzes manufacturing risks

Both are governed by **AS9100D Clause 8.3** (design) and **8.5.1** (production controls).

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
- **Interface failures** — integration with other systems fails`
    }
  ],
  links: [
    // Aerospace NPI Process Overview connections
    { source: "Aerospace NPI Process Overview", target: "MOC — NPI Process" },
    { source: "Aerospace NPI Process Overview", target: "Design Reviews — PDR CDR TRR" },
    { source: "Aerospace NPI Process Overview", target: "PPAP in Aerospace — AS9145" },
    { source: "Aerospace NPI Process Overview", target: "First Article Inspection — FAI and FAIR AS9102B" },
    { source: "Aerospace NPI Process Overview", target: "Configuration Management Basics" },
    { source: "Aerospace NPI Process Overview", target: "AS9100D NPI Clauses" },
    { source: "Aerospace NPI Process Overview", target: "MOC — Digital Systems" },

    // AS9100D connections
    { source: "AS9100D NPI Clauses", target: "MOC — NPI Process" },
    { source: "AS9100D NPI Clauses", target: "Design Reviews — PDR CDR TRR" },
    { source: "AS9100D NPI Clauses", target: "PFMEA and DFMEA" },
    { source: "AS9100D NPI Clauses", target: "Configuration Management Basics" },
    { source: "AS9100D NPI Clauses", target: "First Article Inspection — FAI and FAIR AS9102B" },
    { source: "AS9100D NPI Clauses", target: "PPAP in Aerospace — AS9145" },

    // Configuration Management connections
    { source: "Configuration Management Basics", target: "MOC — NPI Process" },
    { source: "Configuration Management Basics", target: "Aerospace NPI Process Overview" },
    { source: "Configuration Management Basics", target: "Design Reviews — PDR CDR TRR" },
    { source: "Configuration Management Basics", target: "First Article Inspection — FAI and FAIR AS9102B" },
    { source: "Configuration Management Basics", target: "AS9100D NPI Clauses" },
    { source: "Configuration Management Basics", target: "MOC — Digital Systems" },

    // Design Reviews connections
    { source: "Design Reviews — PDR CDR TRR", target: "MOC — NPI Process" },
    { source: "Design Reviews — PDR CDR TRR", target: "Aerospace NPI Process Overview" },
    { source: "Design Reviews — PDR CDR TRR", target: "PFMEA and DFMEA" },
    { source: "Design Reviews — PDR CDR TRR", target: "Configuration Management Basics" },
    { source: "Design Reviews — PDR CDR TRR", target: "AS9100D NPI Clauses" },

    // PFMEA/DFMEA connections
    { source: "PFMEA and DFMEA", target: "Design Reviews — PDR CDR TRR" },
    { source: "PFMEA and DFMEA", target: "AS9100D NPI Clauses" },

    // FAI connections
    { source: "First Article Inspection — FAI and FAIR AS9102B", target: "MOC — NPI Process" },
    { source: "First Article Inspection — FAI and FAIR AS9102B", target: "Configuration Management Basics" },
    { source: "First Article Inspection — FAI and FAIR AS9102B", target: "AS9100D NPI Clauses" },

    // PPAP connections
    { source: "PPAP in Aerospace — AS9145", target: "MOC — NPI Process" },
    { source: "PPAP in Aerospace — AS9145", target: "AS9100D NPI Clauses" }
  ]
};
