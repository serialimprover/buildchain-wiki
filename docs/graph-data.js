const graphData = {
  "nodes": [
    {
      "id": "aerospace-npi-process-overview",
      "label": "Aerospace NPI Process Overview",
      "type": "concept",
      "content": "\n\n# Aerospace NPI Process Overview\n\n## What is Aerospace NPI?\n\nNew Product Introduction (NPI) in aerospace and defense is a highly structured, gate-driven process that takes a concept from design through production release. Unlike commercial consumer electronics (which use EVT/DVT/PVT), aerospace follows a more rigorous framework with mandatory design reviews, First Article Inspection (FAI), and Production Part Approval Process (PPAP) under standards like AS9100D and AS9145.\n\n## Key Phases\n\n### 1. Concept & Requirements (Pre-Design)\n- Define program objectives, requirements, and constraints\n- Establish initial design teams and supplier strategy\n- Compliance mapping (AS9100D clauses applicable to the product)\n\n### 2. Preliminary Design (Design Phase)\n- Complete system and subsystem-level design\n- Conduct **Preliminary Design Review (PDR)**; verify requirements are met\n- Identify critical design parameters, materials, and manufacturing risks\n- Initial DFMEA (Design FMEA)\n\n### 3. Critical Design & Detailed Engineering\n- Finalize all design details, drawings, specifications\n- Conduct **Critical Design Review (CDR)**; confirm design is robust and manufacturable\n- Complete DFMEA; allocate requirements to suppliers\n- Generate Bill of Materials (BOM)\n- Plan test and validation strategy\n\n### 4. Production Design & Prototype Build (Engineering Phase)\n- Build and test prototype/breadboard units (equivalent to EVT in consumer electronics)\n- Refine design based on test results\n- Supplier design qualification begins\n- Prepare manufacturing processes and tooling\n\n### 5. Pilot/Pre-Production (NPI Phase)\n- Build low-rate initial production (LRIP) or pilot units\n- Complete all qualification testing\n- Execute **First Article Inspection (FAI)** \u2014 per AS9102B\n- Supplier process validation and PPAP submission \u2014 per AS9145\n- Conduct **Test Readiness Review (TRR)**; confirm readiness for full production\n\n### 6. Production Release\n- Approve design, suppliers, and manufacturing processes\n- R",
      "tags": "",
      "status": "synthesized"
    },
    {
      "id": "as9100d-npi-clauses",
      "label": "AS9100D NPI Clauses",
      "type": "concept",
      "content": "\n\n# AS9100D NPI Clauses\n\n## Overview\n\n**AS9100D** (Revision D, current) is the aerospace and defense quality management standard. It combines ISO 9001:2015 base requirements with additional aerospace-specific controls for configuration management, design, product safety, and supplier management.\n\nDuring New Product Introduction (NPI), four AS9100D clauses are most critical:\n1. **8.1** \u2014 Operational Planning (what must be done before design/production starts)\n2. **8.3** \u2014 Design and Development (design reviews, FMEA, requirements traceability)\n3. **8.4.4** \u2014 Configuration Management (change control, baselines)\n4. **8.5.1** \u2014 Production Control (manufacturing controls, process capability, FAI)\n\n---\n\n## Clause 8.1 \u2014 Operational Planning and Control\n\n### Requirement (ISO 9001 Section 8.1)\nDetermine the processes needed for product realization; establish criteria and methods for process control; manage external processes; ensure processes meet customer requirements.\n\n### Aerospace Addition (AS9100D)\nAdditional planning requirements for **safety** and **configuration management**:\n- Document how product safety will be achieved and maintained (safety plan)\n- Identify potential product safety hazards and mitigations\n- Establish configuration management approach (baselines, change control)\n- Plan for counterfeit parts prevention (supplier controls, material authentication)\n\n### NPI Context\n**Pre-Design Phase \u2014 Program Planning**\n- Program manager and chief engineer develop:\n  - **Program Plan** \u2014 schedule, budget, resources, risk management approach\n  - **Configuration Management Plan** \u2014 how baselines will be established, change control process, CI list, document structure\n  - **Quality Plan** \u2014 inspection points, test requirements, acceptance criteria, supplier quality expectations\n  - **Design Plan** \u2014 design review schedule, DFMEA process, verification/validation testing plan\n  - **Supplier Quality Plan** \u2014 supplier selection criteria, qualification requirements, PPAP le",
      "tags": "",
      "status": "synthesized"
    },
    {
      "id": "configuration-management-basics",
      "label": "Configuration Management Basics",
      "type": "concept",
      "content": "\n\n# Configuration Management Basics\n\n## What is Configuration Management (CM)?\n\n**Configuration Management** is the discipline of identifying, controlling, and tracking all versions of a product's design, components, materials, and processes throughout its lifecycle. It ensures that:\n1. **What was approved is what was built** \u2014 design documentation matches manufactured hardware\n2. **Changes are controlled and traceable** \u2014 every design or process change is documented, approved, and communicated\n3. **Historical record is maintained** \u2014 can identify when a change occurred, why, and who approved it\n4. **Obsolescence is managed** \u2014 parts and suppliers are tracked; discontinuations are anticipated and mitigated\n\nCM is mandatory in aerospace under **AS9100D Clause 8.4.4** and referenced throughout design, production, and sustainment phases.\n\n---\n\n## Core CM Concepts\n\n### Configuration Item (CI)\n\nA **Configuration Item** is any component, assembly, or document that is significant enough to require identification, control, and tracking. Examples:\n- A complete product/system (e.g., satellite, launch vehicle)\n- A major subsystem (e.g., flight control computer, propulsion module)\n- A critical component (e.g., valve, sensor, avionics processor)\n- Design documentation (specifications, drawings, schematics)\n- Software (firmware, control algorithms)\n- Manufacturing processes (routing, work instructions, tooling design)\n\nNot everything is a CI \u2014 routine fasteners, consumables, or standard catalog items may not be CIs. The program defines CI list based on risk and complexity.\n\n### Baseline\n\nA **Baseline** is a formally approved snapshot of a Configuration Item at a specific point in time. It serves as the reference point for all future changes. Three types of baselines exist:\n\n#### 1. Functional Baseline\n- **What:** System requirements and intended functions\n- **When:** After requirements review (pre-design)\n- **Content:** System specifications, interface specifications, performance",
      "tags": "",
      "status": "synthesized"
    },
    {
      "id": "design-reviews--pdr-cdr-trr",
      "label": "Design Reviews \u2014 PDR, CDR, TRR",
      "type": "concept",
      "content": "\n\n# Design Reviews \u2014 PDR, CDR, TRR\n\n## Overview\n\nDesign Reviews are formal, gated assessments that occur at critical milestones in the aerospace NPI lifecycle. They are governed by **MIL-STD-1521B** (or customer-specific variants) and serve as **go/no-go decision points** before proceeding to the next phase.\n\nEach review involves key stakeholders: program manager, design leads, quality engineer, manufacturing representative, supplier leads, and often the customer.\n\n## Preliminary Design Review (PDR)\n\n### Purpose\nVerify that the **preliminary design satisfies all requirements** and that the approach is technically sound and feasible before committing to detailed design.\n\n### When It Occurs\nAfter initial concept design is complete; before detailed design and engineering begins.\n\n### Entry Criteria\n- Requirements and specification documents finalized and baselined\n- System architecture and block diagrams defined\n- Preliminary Bill of Materials (BOM) with long-lead items identified\n- Initial risk assessment (preliminary DFMEA)\n- Manufacturing feasibility assessment (rough)\n- Supplier strategy document (make vs. buy decisions)\n- Test and validation approach outline\n- Schedule and budget estimates\n\n### What's Reviewed\n- Traceability matrix: requirements \u2192 design features\n- Design block diagrams and schematics\n- Critical design parameters and their justification\n- Risk analysis (early DFMEA findings)\n- Supplier selections and capability summaries\n- Manufacturing process assumptions\n- Test strategy and acceptance criteria\n\n### Exit Criteria (Go/No-Go Decision)\n- **GO:** All requirements traced to design; risks identified and mitigation planned; suppliers capable; schedule and budget acceptable\n- **NO-GO:** Requirement gaps identified; high-risk areas unresolved; supplier concerns; proceed to rework before advancing\n\n### Key Output\n- PDR **action item list** (issues to resolve before CDR)\n- Approved preliminary design baseline\n- Confirmed budget and schedule\n\n---\n\n## Critica",
      "tags": "",
      "status": "synthesized"
    },
    {
      "id": "first-article-inspection--fai-and-fair-as9102b",
      "label": "First Article Inspection \u2014 FAI and FAIR AS9102B",
      "type": "concept",
      "content": "\n\n# First Article Inspection \u2014 FAI and FAIR AS9102B\n\n## What is FAI?\n\n**First Article Inspection (FAI)** is a comprehensive, one-time inspection and testing of the first production (or pilot) article of a new part or component to verify that:\n1. The design specification can actually be manufactured as intended\n2. The manufactured part meets all dimensional, material, and functional requirements\n3. The supplier's manufacturing process is capable and documented\n\nThe output of FAI is the **FAIR (First Article Inspection Report)** \u2014 a detailed technical document that serves as evidence of design conformance and process control.\n\n---\n\n## FAI vs. Regular Quality Inspection\n\n| Aspect | FAI | Routine Inspection |\n|--------|---|---|\n| **Timing** | One-time, first article(s) | Ongoing, every production lot |\n| **Scope** | 100% of design requirements; every characteristic | Sampling-based (AQL, per plan) |\n| **Documentation** | Detailed FAIR with drawings, CMM data, functional test results | Inspection certificates, test reports per lot |\n| **Authority** | Customer-approved supplier or customer-supervised | Supplier quality (in-process or receiving) |\n| **Purpose** | Prove design can be manufactured to spec | Verify ongoing production conforms to spec |\n| **Approval** | Customer sign-off before production release | Automatic (per AQL acceptance criteria) |\n\n---\n\n## FAIR (First Article Inspection Report) \u2014 AS9102B\n\n### Structure of a FAIR\n\nA FAIR is organized into sections addressing all aspects of design and manufacturing:\n\n#### 1. Identification Section\n- Part number, revision, description\n- Design specification reference (drawing, document revision)\n- Supplier name and facility\n- Inspection date and inspector/approval signatures\n- Customer and program identification\n\n#### 2. Requirement Verification Section\n\n**A. Dimensional Data**\n- Critical dimensions measured via CMM (Coordinate Measuring Machine) or precision instruments\n- For each dimension:\n  - Specified tolerance (fro",
      "tags": "",
      "status": "synthesized"
    },
    {
      "id": "moc--digital-systems",
      "label": "Map of Content \u2014 Digital Systems",
      "type": "concept",
      "content": "\n\n# Map of Content \u2014 Digital Systems\n\nCentral hub for Product Lifecycle Management (PLM), Enterprise Resource Planning (ERP), and Manufacturing Execution Systems (MES) concepts and their integration in hardware development and production.\n\n## Digital Systems Overview\n\nThe three pillars of manufacturing software:\n\n- **PLM (Product Lifecycle Management)** \u2014 manages product design, changes, and configuration from concept through sustainment\n- **ERP (Enterprise Resource Planning)** \u2014 manages business operations: inventory, procurement, financials, supply chain\n- **MES (Manufacturing Execution System)** \u2014 manages shop-floor production: scheduling, real-time quality, resource utilization\n\nIntegration of these three systems is critical for efficient, traceable manufacturing.\n\n## PLM (Product Lifecycle Management)\n\n- **[PLM Systems Overview]** *(To be created)*\n  - Design data management, BOM control, document management\n  - Change management and baselines\n  - Integration with CAD systems (SolidWorks, Catia, NX)\n  - Configuration Management in PLM\n\n- **[PLM for Aerospace/Defense]** *(To be created)*\n  - AS9100D compliance in PLM workflows\n  - FMEA and risk tracking in PLM\n  - Traceability and audit trail capabilities\n\n## ERP (Enterprise Resource Planning)\n\n- **[ERP in Manufacturing]** *(To be created)*\n  - Inventory and materials management\n  - Procurement workflow and supplier management\n  - Financials: cost accounting, standard costing, variance analysis\n  - Integration with MES for real-time data\n\n- **[Supply Chain Management via ERP]** *(To be created)*\n  - Supplier qualification and performance tracking\n  - Obsolescence management and lifecycle planning\n  - Demand forecasting and production planning (MRP)\n\n## MES (Manufacturing Execution System)\n\n- **[MES Fundamentals]** *(To be created)*\n  - Shop-floor scheduling and work order management\n  - Real-time quality data collection (SPC, in-process inspection)\n  - Equipment monitoring and downtime tracking\n  - Labor and res",
      "tags": "",
      "status": "synthesized"
    },
    {
      "id": "moc--npi-process",
      "label": "Map of Content \u2014 NPI Process",
      "type": "concept",
      "content": "\n\n# Map of Content \u2014 NPI Process\n\nCentral hub for New Product Introduction concepts in aerospace and defense. Navigate by role, process, or standard.\n\n## Process Overview\n\n- **[[Aerospace NPI Process Overview]]** \u2014 Stage gates, build phases, timelines, key deliverables at each gate\n\n## Design Phase\n\n- **[[Design Reviews \u2014 PDR CDR TRR]]** \u2014 Preliminary, Critical, and Test Readiness Reviews; entry/exit criteria, artifacts, governance\n- **[[PFMEA and DFMEA]]** \u2014 Design and Process Failure Mode & Effects Analysis; RPN scoring, relationship to design reviews\n\n## Production & Quality\n\n- **[[PPAP in Aerospace \u2014 AS9145]]** \u2014 Production Part Approval Process in aerospace/defense context; submission levels, documents\n- **[[First Article Inspection \u2014 FAI and FAIR AS9102B]]** \u2014 First Article Inspection process and FAIR (First Article Inspection Report) deliverable; characteristic accountability, balloon drawings\n- **[[Configuration Management Basics]]** \u2014 Configuration Items, baselines, change authority boards, audits (FCA/PCA), PLM integration\n\n## Compliance & Standards\n\n- **[[AS9100D NPI Clauses]]** \u2014 Aerospace quality standard clauses most relevant to NPI; clause 8.1, 8.3, 8.5.1; differences from ISO 9001\n\n---\n\n## Related Hubs\n\n- **[[MOC \u2014 Digital Systems]]** \u2014 PLM, ERP, MES integration and use cases across the NPI lifecycle\n\n---\n\nLast updated: 2026-04-13\n",
      "tags": "",
      "status": "synthesized"
    },
    {
      "id": "pfmea-and-dfmea",
      "label": "PFMEA and DFMEA",
      "type": "concept",
      "content": "\n\n# PFMEA and DFMEA\n\n## Overview\n\n**FMEA (Failure Mode & Effects Analysis)** is a systematic technique for identifying and analyzing potential failures in a product or process, assessing their severity and occurrence probability, and implementing controls or design changes to reduce risk.\n\nIn aerospace NPI, two types of FMEA are mandatory:\n1. **DFMEA (Design FMEA)** \u2014 analyzes design risks\n2. **PFMEA (Process FMEA)** \u2014 analyzes manufacturing risks\n\nBoth are governed by **AS9100D Clause 8.3** (design) and **8.5.1** (production controls).\n\n---\n\n## DFMEA (Design Failure Mode & Effects Analysis)\n\n### Purpose\nIdentify potential design weaknesses, manufacturing risks inherent in the design, and use cases where the product could fail. DFMEA is a **design tool** \u2014 it guides design decisions and identifies where design robustness or margin is critical.\n\n### When It's Conducted\n- **Timing:** Early in design phase (after preliminary design); updated through CDR; finalized before production\n- **Owner:** Design engineering team (with input from manufacturing and quality)\n\n### DFMEA Scope\nAnalyzes:\n- **Functional failures** \u2014 the product cannot perform its intended function (e.g., does not produce required output, loses control authority)\n- **Design margin failures** \u2014 design is marginal; small manufacturing variations cause failures (e.g., tolerance stack-up leads to assembly problems)\n- **Use case failures** \u2014 product fails under customer misuse or unexpected conditions\n- **Material failures** \u2014 material properties insufficient (corrosion, fatigue, temperature limits)\n- **Interface failures** \u2014 integration with other systems fails\n\n### DFMEA Structure\n\nA DFMEA table typically includes:\n\n| Column | Description | Example |\n|--------|---|---|\n| **Function** | What the design is supposed to do | \"Maintain thrust vector control to \u00b12\u00b0\" |\n| **Failure Mode** | How the function could fail | \"Actuator sticks; cannot move to commanded position\" |\n| **Effects** | What happens if the failu",
      "tags": "",
      "status": "synthesized"
    },
    {
      "id": "ppap-in-aerospace--as9145",
      "label": "PPAP in Aerospace \u2014 AS9145",
      "type": "concept",
      "content": "\n\n# PPAP in Aerospace \u2014 AS9145\n\n## What is PPAP?\n\n**Production Part Approval Process (PPAP)** is a supplier quality process that demonstrates that a new part, component, or assembly meets design specifications and is ready for production. It originated in the automotive industry (AIAG standard) but has been adapted for aerospace and defense via **AS9145**.\n\nIn aerospace, PPAP is part of the supplier qualification and approval workflow \u2014 it occurs during the pilot/LRIP phase and serves as evidence of manufacturing process control and capability.\n\n## PPAP vs. FAI \u2014 Key Difference\n\n- **FAI (First Article Inspection)** per AS9102B \u2014 One-time first article inspection to confirm a design can be manufactured per specifications; focus on product conformance\n- **PPAP (Production Part Approval)** per AS9145 \u2014 Comprehensive supplier process validation, demonstrating sustained manufacturing capability; focus on process control and repeatability\n\n**They work together:** FAI inspects the first article; PPAP demonstrates the process is controlled and capable of making many more articles to the same standard.\n\n---\n\n## PPAP Submission Levels (AS9145)\n\nAS9145 defines **three submission levels**, depending on the part complexity, risk, and customer requirements:\n\n### Level 1 \u2014 Minimal Submission\n**Used for:** Low-risk, standard parts (fasteners, catalog items, no design changes)\n\n**Supplier submits:**\n- Part number, revision, and specifications\n- Statement of conformance (part meets all specifications)\n- Certificate of Conformance (CoC)\n\n**Customer action:** May accept without detailed review\n\n**Typical timeline:** 1\u20132 weeks\n\n---\n\n### Level 2 \u2014 Expanded Submission\n**Used for:** Standard production parts with minor design changes, moderate risk\n\n**Supplier submits:**\n- Part Submission Warrant (PSW) \u2014 summary of part, design changes, process changes\n- Design specification and/or engineering drawing\n- Bill of Materials (if applicable)\n- Material test reports (if material critical)\n- Manu",
      "tags": "",
      "status": "synthesized"
    }
  ],
  "links": [
    {
      "source": "aerospace-npi-process-overview",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "moc--npi-process"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "configuration-management-basics"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "moc--digital-systems"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "moc--npi-process"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "configuration-management-basics"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "configuration-management-basics",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "configuration-management-basics",
      "target": "moc--npi-process"
    },
    {
      "source": "configuration-management-basics",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "configuration-management-basics",
      "target": "configuration-management-basics"
    },
    {
      "source": "configuration-management-basics",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "configuration-management-basics",
      "target": "moc--digital-systems"
    },
    {
      "source": "configuration-management-basics",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "moc--npi-process"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "configuration-management-basics"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "moc--npi-process"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "configuration-management-basics"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "moc--digital-systems",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "moc--digital-systems",
      "target": "configuration-management-basics"
    },
    {
      "source": "moc--digital-systems",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "moc--npi-process",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "moc--npi-process",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "moc--npi-process",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "moc--npi-process",
      "target": "configuration-management-basics"
    },
    {
      "source": "moc--npi-process",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "moc--npi-process",
      "target": "moc--digital-systems"
    },
    {
      "source": "moc--npi-process",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "moc--npi-process",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "moc--npi-process"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "configuration-management-basics"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "moc--npi-process"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "configuration-management-basics"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "pfmea-and-dfmea"
    }
  ]
};
