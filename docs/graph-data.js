const graphData = {
  "nodes": [
    {
      "id": "as9100d-npi-clauses",
      "label": "AS9100D NPI Clauses",
      "type": "concept",
      "content": "\n\n# AS9100D NPI Clauses\n\n## Overview\n\n**AS9100D** (Revision D, current) is the aerospace and defense quality management standard. It combines ISO 9001:2015 base requirements with additional aerospace-specific controls for configuration management, design, product safety, and supplier management.\n\nDuring New Product Introduction (NPI), four AS9100D clauses are most critical:\n1. **8.1** \u2014 Operational Planning (what must be done before design/production starts)\n2. **8.3** \u2014 Design and Development (design reviews, FMEA, requirements traceability)\n3. **8.4.4** \u2014 Configuration Management (change control, baselines)\n4. **8.5.1** \u2014 Production Control (manufacturing controls, process capability, FAI)\n\n---\n\n## Clause 8.1 \u2014 Operational Planning and Control\n\n### Requirement (ISO 9001 Section 8.1)\nDetermine the processes needed for product realization; establish criteria and methods for process control; manage external processes; ensure processes meet customer requirements.\n\n### Aerospace Addition (AS9100D)\nAdditional planning requirements for **safety** and **configuration management**:\n- Document how product safety will be achieved and maintained (safety plan)\n- Identify potential product safety hazards and mitigations\n- Establish configuration management approach (baselines, change control)\n- Plan for counterfeit parts prevention (supplier controls, material authentication)\n\n### NPI Context\n**Pre-Design Phase \u2014 Program Planning**\n- Program manager and chief engineer develop:\n  - **Program Plan** \u2014 schedule, budget, resources, risk management approach\n  - **Configuration Management Plan** \u2014 how baselines will be established, change control process, CI list, document structure\n  - **Quality Plan** \u2014 inspection points, test requirements, acceptance criteria, supplier quality expectations\n  - **Design Plan** \u2014 design review schedule, DFMEA process, verification/validation testing plan\n  - **Supplier Quality Plan** \u2014 supplier selection criteria, qualification requirements, PPAP le",
      "tags": [
        "standards",
        "quality",
        "aerospace"
      ],
      "status": "synthesized",
      "category": "concept"
    },
    {
      "id": "aerospace-npi-process-overview",
      "label": "Aerospace NPI Process Overview",
      "type": "concept",
      "content": "\n\n# Aerospace NPI Process Overview\n\n## What is Aerospace NPI?\n\nNew Product Introduction (NPI) in aerospace and defense is a highly structured, gate-driven process that takes a concept from design through production release. Unlike commercial consumer electronics (which use EVT/DVT/PVT), aerospace follows a more rigorous framework with mandatory design reviews, First Article Inspection (FAI), and Production Part Approval Process (PPAP) under standards like AS9100D and AS9145.\n\n## Key Phases\n\n### 1. Concept & Requirements (Pre-Design)\n- Define program objectives, requirements, and constraints\n- Establish initial design teams and supplier strategy\n- Compliance mapping (AS9100D clauses applicable to the product)\n\n### 2. Preliminary Design (Design Phase)\n- Complete system and subsystem-level design\n- Conduct **Preliminary Design Review (PDR)**; verify requirements are met\n- Identify critical design parameters, materials, and manufacturing risks\n- Initial DFMEA (Design FMEA)\n\n### 3. Critical Design & Detailed Engineering\n- Finalize all design details, drawings, specifications\n- Conduct **Critical Design Review (CDR)**; confirm design is robust and manufacturable\n- Complete DFMEA; allocate requirements to suppliers\n- Generate Bill of Materials (BOM)\n- Plan test and validation strategy\n\n### 4. Production Design & Prototype Build (Engineering Phase)\n- Build and test prototype/breadboard units (equivalent to EVT in consumer electronics)\n- Refine design based on test results\n- Supplier design qualification begins\n- Prepare manufacturing processes and tooling\n\n### 5. Pilot/Pre-Production (NPI Phase)\n- Build low-rate initial production (LRIP) or pilot units\n- Complete all qualification testing\n- Execute **First Article Inspection (FAI)** \u2014 per AS9102B\n- Supplier process validation and PPAP submission \u2014 per AS9145\n- Conduct **Test Readiness Review (TRR)**; confirm readiness for full production\n\n### 6. Production Release\n- Approve design, suppliers, and manufacturing processes\n- R",
      "tags": [
        "npi",
        "process",
        "overview"
      ],
      "status": "synthesized",
      "category": "concept"
    },
    {
      "id": "configuration-management-basics",
      "label": "Configuration Management Basics",
      "type": "concept",
      "content": "\n\n# Configuration Management Basics\n\n## What is Configuration Management (CM)?\n\n**Configuration Management** is the discipline of identifying, controlling, and tracking all versions of a product's design, components, materials, and processes throughout its lifecycle. It ensures that:\n1. **What was approved is what was built** \u2014 design documentation matches manufactured hardware\n2. **Changes are controlled and traceable** \u2014 every design or process change is documented, approved, and communicated\n3. **Historical record is maintained** \u2014 can identify when a change occurred, why, and who approved it\n4. **Obsolescence is managed** \u2014 parts and suppliers are tracked; discontinuations are anticipated and mitigated\n\nCM is mandatory in aerospace under **AS9100D Clause 8.4.4** and referenced throughout design, production, and sustainment phases.\n\n---\n\n## Core CM Concepts\n\n### Configuration Item (CI)\n\nA **Configuration Item** is any component, assembly, or document that is significant enough to require identification, control, and tracking. Examples:\n- A complete product/system (e.g., satellite, launch vehicle)\n- A major subsystem (e.g., flight control computer, propulsion module)\n- A critical component (e.g., valve, sensor, avionics processor)\n- Design documentation (specifications, drawings, schematics)\n- Software (firmware, control algorithms)\n- Manufacturing processes (routing, work instructions, tooling design)\n\nNot everything is a CI \u2014 routine fasteners, consumables, or standard catalog items may not be CIs. The program defines CI list based on risk and complexity.\n\n### Baseline\n\nA **Baseline** is a formally approved snapshot of a Configuration Item at a specific point in time. It serves as the reference point for all future changes. Three types of baselines exist:\n\n#### 1. Functional Baseline\n- **What:** System requirements and intended functions\n- **When:** After requirements review (pre-design)\n- **Content:** System specifications, interface specifications, performance",
      "tags": [
        "cm",
        "configuration",
        "process"
      ],
      "status": "synthesized",
      "category": "concept"
    },
    {
      "id": "design-reviews--pdr-cdr-trr",
      "label": "Design Reviews \u2014 PDR, CDR, TRR",
      "type": "concept",
      "content": "\n\n# Design Reviews \u2014 PDR, CDR, TRR\n\n## Overview\n\nDesign Reviews are formal, gated assessments that occur at critical milestones in the aerospace NPI lifecycle. They are governed by **MIL-STD-1521B** (or customer-specific variants) and serve as **go/no-go decision points** before proceeding to the next phase.\n\nEach review involves key stakeholders: program manager, design leads, quality engineer, manufacturing representative, supplier leads, and often the customer.\n\n## Preliminary Design Review (PDR)\n\n### Purpose\nVerify that the **preliminary design satisfies all requirements** and that the approach is technically sound and feasible before committing to detailed design.\n\n### When It Occurs\nAfter initial concept design is complete; before detailed design and engineering begins.\n\n### Entry Criteria\n- Requirements and specification documents finalized and baselined\n- System architecture and block diagrams defined\n- Preliminary Bill of Materials (BOM) with long-lead items identified\n- Initial risk assessment (preliminary DFMEA)\n- Manufacturing feasibility assessment (rough)\n- Supplier strategy document (make vs. buy decisions)\n- Test and validation approach outline\n- Schedule and budget estimates\n\n### What's Reviewed\n- Traceability matrix: requirements \u2192 design features\n- Design block diagrams and schematics\n- Critical design parameters and their justification\n- Risk analysis (early DFMEA findings)\n- Supplier selections and capability summaries\n- Manufacturing process assumptions\n- Test strategy and acceptance criteria\n\n### Exit Criteria (Go/No-Go Decision)\n- **GO:** All requirements traced to design; risks identified and mitigation planned; suppliers capable; schedule and budget acceptable\n- **NO-GO:** Requirement gaps identified; high-risk areas unresolved; supplier concerns; proceed to rework before advancing\n\n### Key Output\n- PDR **action item list** (issues to resolve before CDR)\n- Approved preliminary design baseline\n- Confirmed budget and schedule\n\n---\n\n## Critica",
      "tags": [
        "design",
        "reviews",
        "gates"
      ],
      "status": "synthesized",
      "category": "concept"
    },
    {
      "id": "first-article-inspection--fai-and-fair-as9102b",
      "label": "First Article Inspection \u2014 FAI and FAIR AS9102B",
      "type": "concept",
      "content": "\n\n# First Article Inspection \u2014 FAI and FAIR AS9102B\n\n## What is FAI?\n\n**First Article Inspection (FAI)** is a comprehensive, one-time inspection and testing of the first production (or pilot) article of a new part or component to verify that:\n1. The design specification can actually be manufactured as intended\n2. The manufactured part meets all dimensional, material, and functional requirements\n3. The supplier's manufacturing process is capable and documented\n\nThe output of FAI is the **FAIR (First Article Inspection Report)** \u2014 a detailed technical document that serves as evidence of design conformance and process control.\n\n---\n\n## FAI vs. Regular Quality Inspection\n\n| Aspect | FAI | Routine Inspection |\n|--------|---|---|\n| **Timing** | One-time, first article(s) | Ongoing, every production lot |\n| **Scope** | 100% of design requirements; every characteristic | Sampling-based (AQL, per plan) |\n| **Documentation** | Detailed FAIR with drawings, CMM data, functional test results | Inspection certificates, test reports per lot |\n| **Authority** | Customer-approved supplier or customer-supervised | Supplier quality (in-process or receiving) |\n| **Purpose** | Prove design can be manufactured to spec | Verify ongoing production conforms to spec |\n| **Approval** | Customer sign-off before production release | Automatic (per AQL acceptance criteria) |\n\n---\n\n## FAIR (First Article Inspection Report) \u2014 AS9102B\n\n### Structure of a FAIR\n\nA FAIR is organized into sections addressing all aspects of design and manufacturing:\n\n#### 1. Identification Section\n- Part number, revision, description\n- Design specification reference (drawing, document revision)\n- Supplier name and facility\n- Inspection date and inspector/approval signatures\n- Customer and program identification\n\n#### 2. Requirement Verification Section\n\n**A. Dimensional Data**\n- Critical dimensions measured via CMM (Coordinate Measuring Machine) or precision instruments\n- For each dimension:\n  - Specified tolerance (fro",
      "tags": [
        "quality",
        "inspection",
        "production"
      ],
      "status": "synthesized",
      "category": "concept"
    },
    {
      "id": "moc--digital-systems",
      "label": "Map of Content \u2014 Digital Systems",
      "type": "concept",
      "content": "\n\n# Map of Content \u2014 Digital Systems\n\nCentral hub for Product Lifecycle Management (PLM), Enterprise Resource Planning (ERP), and Manufacturing Execution Systems (MES) concepts and their integration in hardware development and production.\n\n## Digital Systems Overview\n\nThe three pillars of manufacturing software:\n\n- **PLM (Product Lifecycle Management)** \u2014 manages product design, changes, and configuration from concept through sustainment\n- **ERP (Enterprise Resource Planning)** \u2014 manages business operations: inventory, procurement, financials, supply chain\n- **MES (Manufacturing Execution System)** \u2014 manages shop-floor production: scheduling, real-time quality, resource utilization\n\nIntegration of these three systems is critical for efficient, traceable manufacturing.\n\n## PLM (Product Lifecycle Management)\n\n- **[PLM Systems Overview]** *(To be created)*\n  - Design data management, BOM control, document management\n  - Change management and baselines\n  - Integration with CAD systems (SolidWorks, Catia, NX)\n  - Configuration Management in PLM\n\n- **[PLM for Aerospace/Defense]** *(To be created)*\n  - AS9100D compliance in PLM workflows\n  - FMEA and risk tracking in PLM\n  - Traceability and audit trail capabilities\n\n## ERP (Enterprise Resource Planning)\n\n- **[ERP in Manufacturing]** *(To be created)*\n  - Inventory and materials management\n  - Procurement workflow and supplier management\n  - Financials: cost accounting, standard costing, variance analysis\n  - Integration with MES for real-time data\n\n- **[Supply Chain Management via ERP]** *(To be created)*\n  - Supplier qualification and performance tracking\n  - Obsolescence management and lifecycle planning\n  - Demand forecasting and production planning (MRP)\n\n## MES (Manufacturing Execution System)\n\n- **[MES Fundamentals]** *(To be created)*\n  - Shop-floor scheduling and work order management\n  - Real-time quality data collection (SPC, in-process inspection)\n  - Equipment monitoring and downtime tracking\n  - Labor and res",
      "tags": [
        "hub",
        "it-systems",
        "navigation"
      ],
      "status": "synthesized",
      "category": "concept"
    },
    {
      "id": "moc--npi-process",
      "label": "Map of Content \u2014 NPI Process",
      "type": "concept",
      "content": "\n\n# Map of Content \u2014 NPI Process\n\nCentral hub for New Product Introduction concepts in aerospace and defense. Navigate by role, process, or standard.\n\n## Process Overview\n\n- **[[Aerospace NPI Process Overview]]** \u2014 Stage gates, build phases, timelines, key deliverables at each gate\n\n## Design Phase\n\n- **[[Design Reviews \u2014 PDR CDR TRR]]** \u2014 Preliminary, Critical, and Test Readiness Reviews; entry/exit criteria, artifacts, governance\n- **[[PFMEA and DFMEA]]** \u2014 Design and Process Failure Mode & Effects Analysis; RPN scoring, relationship to design reviews\n\n## Production & Quality\n\n- **[[PPAP in Aerospace \u2014 AS9145]]** \u2014 Production Part Approval Process in aerospace/defense context; submission levels, documents\n- **[[First Article Inspection \u2014 FAI and FAIR AS9102B]]** \u2014 First Article Inspection process and FAIR (First Article Inspection Report) deliverable; characteristic accountability, balloon drawings\n- **[[Configuration Management Basics]]** \u2014 Configuration Items, baselines, change authority boards, audits (FCA/PCA), PLM integration\n\n## Compliance & Standards\n\n- **[[AS9100D NPI Clauses]]** \u2014 Aerospace quality standard clauses most relevant to NPI; clause 8.1, 8.3, 8.5.1; differences from ISO 9001\n\n---\n\n## Related Hubs\n\n- **[[MOC \u2014 Digital Systems]]** \u2014 PLM, ERP, MES integration and use cases across the NPI lifecycle\n\n---\n\nLast updated: 2026-04-13\n",
      "tags": [
        "hub",
        "npi",
        "navigation"
      ],
      "status": "synthesized",
      "category": "concept"
    },
    {
      "id": "pfmea-and-dfmea",
      "label": "PFMEA and DFMEA",
      "type": "concept",
      "content": "\n\n# PFMEA and DFMEA\n\n## Overview\n\n**FMEA (Failure Mode & Effects Analysis)** is a systematic technique for identifying and analyzing potential failures in a product or process, assessing their severity and occurrence probability, and implementing controls or design changes to reduce risk.\n\nIn aerospace NPI, two types of FMEA are mandatory:\n1. **DFMEA (Design FMEA)** \u2014 analyzes design risks\n2. **PFMEA (Process FMEA)** \u2014 analyzes manufacturing risks\n\nBoth are governed by **AS9100D Clause 8.3** (design) and **8.5.1** (production controls).\n\n---\n\n## DFMEA (Design Failure Mode & Effects Analysis)\n\n### Purpose\nIdentify potential design weaknesses, manufacturing risks inherent in the design, and use cases where the product could fail. DFMEA is a **design tool** \u2014 it guides design decisions and identifies where design robustness or margin is critical.\n\n### When It's Conducted\n- **Timing:** Early in design phase (after preliminary design); updated through CDR; finalized before production\n- **Owner:** Design engineering team (with input from manufacturing and quality)\n\n### DFMEA Scope\nAnalyzes:\n- **Functional failures** \u2014 the product cannot perform its intended function (e.g., does not produce required output, loses control authority)\n- **Design margin failures** \u2014 design is marginal; small manufacturing variations cause failures (e.g., tolerance stack-up leads to assembly problems)\n- **Use case failures** \u2014 product fails under customer misuse or unexpected conditions\n- **Material failures** \u2014 material properties insufficient (corrosion, fatigue, temperature limits)\n- **Interface failures** \u2014 integration with other systems fails\n\n### DFMEA Structure\n\nA DFMEA table typically includes:\n\n| Column | Description | Example |\n|--------|---|---|\n| **Function** | What the design is supposed to do | \"Maintain thrust vector control to \u00b12\u00b0\" |\n| **Failure Mode** | How the function could fail | \"Actuator sticks; cannot move to commanded position\" |\n| **Effects** | What happens if the failu",
      "tags": [
        "analysis",
        "risk",
        "design"
      ],
      "status": "synthesized",
      "category": "concept"
    },
    {
      "id": "ppap-in-aerospace--as9145",
      "label": "PPAP in Aerospace \u2014 AS9145",
      "type": "concept",
      "content": "\n\n# PPAP in Aerospace \u2014 AS9145\n\n## What is PPAP?\n\n**Production Part Approval Process (PPAP)** is a supplier quality process that demonstrates that a new part, component, or assembly meets design specifications and is ready for production. It originated in the automotive industry (AIAG standard) but has been adapted for aerospace and defense via **AS9145**.\n\nIn aerospace, PPAP is part of the supplier qualification and approval workflow \u2014 it occurs during the pilot/LRIP phase and serves as evidence of manufacturing process control and capability.\n\n## PPAP vs. FAI \u2014 Key Difference\n\n- **FAI (First Article Inspection)** per AS9102B \u2014 One-time first article inspection to confirm a design can be manufactured per specifications; focus on product conformance\n- **PPAP (Production Part Approval)** per AS9145 \u2014 Comprehensive supplier process validation, demonstrating sustained manufacturing capability; focus on process control and repeatability\n\n**They work together:** FAI inspects the first article; PPAP demonstrates the process is controlled and capable of making many more articles to the same standard.\n\n---\n\n## PPAP Submission Levels (AS9145)\n\nAS9145 defines **three submission levels**, depending on the part complexity, risk, and customer requirements:\n\n### Level 1 \u2014 Minimal Submission\n**Used for:** Low-risk, standard parts (fasteners, catalog items, no design changes)\n\n**Supplier submits:**\n- Part number, revision, and specifications\n- Statement of conformance (part meets all specifications)\n- Certificate of Conformance (CoC)\n\n**Customer action:** May accept without detailed review\n\n**Typical timeline:** 1\u20132 weeks\n\n---\n\n### Level 2 \u2014 Expanded Submission\n**Used for:** Standard production parts with minor design changes, moderate risk\n\n**Supplier submits:**\n- Part Submission Warrant (PSW) \u2014 summary of part, design changes, process changes\n- Design specification and/or engineering drawing\n- Bill of Materials (if applicable)\n- Material test reports (if material critical)\n- Manu",
      "tags": [
        "supplier",
        "approval",
        "production"
      ],
      "status": "synthesized",
      "category": "concept"
    },
    {
      "id": "6-types-of-hil-testing",
      "label": "What Is HIL testing?",
      "type": "source",
      "content": "\nUncategorized\n\n04 / 30 / 2025\n\n![6 types of HIL testing](https://www.opal-rt.com//wp-content/uploads/2025/07/hardware_in_the_loop_testing_concept_banner.png)\n\n[Hardware-in-the-loop (HIL)](https://www.opal-rt.com/hardware-in-the-loop/) testing secures a robust path to validating control system performance under realistic conditions. It is widely adopted across industries that rely on advanced controllers for precise and timely actions. Engineers recognize it as an important approach for analyzing how components behave when integrated into critical processes. Many have observed that adopting HIL testing sets projects up for better reliability and reduced development time.\n\nTeams focused on accelerating time to market rely on HIL setups to cut costs and spot potential issues early. This approach allows components, software, or entire systems to receive thorough, real-time testing prior to final deployment. Many organizations prefer HIL testing to establish confidence before large-scale production. It aligns well with budget management and fosters strategic growth by improving outcomes for investors.\n\n## What Is HIL testing?\n\n  \nThe concept centers on integrating physical components with virtual representations of other parts of a system. Controllers and software run as they would in a production setting, interacting with real signals from sensors or motors while connected to simulated signals in place of actual equipment. This approach confirms whether designs respond predictably without risking damage to expensive prototypes. It also helps teams validate safety mechanisms when unexpected scenarios arise.\n\nA typical setup includes a target controller, the physical actuator or sensor, and a [real-time simulator](https://www.opal-rt.com/simulation-acceleration/) replicating other conditions. Engineers benefit from closed-loop interactions that produce immediate data on system behavior. Insights from these tests reduce debugging overhead and lead to better resource alloc",
      "tags": [
        "testing",
        "validation",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "as9100-clause-guide-for-aerospace-organizations",
      "label": "Request a Quote",
      "type": "source",
      "content": "\n[![](https://amtivo.com/us/wp-content/uploads/sites/18/2026/03/American-flag-1.png)](https://amtivo.com/us/resources/news/us-certification-bodies-rebrand/ \"\nWelcome to Amtivo in the US, formerly Orion, ASR, CMA, Audit3, QSR and ISA. \t\t\t\t\t\t\t\n\")\n\n[Welcome to Amtivo in the US, formerly Orion, ASR, CMA, Audit3, QSR and ISA.](https://amtivo.com/us/resources/news/us-certification-bodies-rebrand/ \"\nWelcome to Amtivo in the US, formerly Orion, ASR, CMA, Audit3, QSR and ISA. \t\t\t\t\t\t\t\n\")\n\n[![](https://amtivo.com/us/wp-content/uploads/sites/18/2026/03/American-flag-2.png)](https://amtivo.com/us/resources/news/us-certification-bodies-rebrand/ \"\nWelcome to Amtivo in the US, formerly Orion, ASR, CMA, Audit3, QSR and ISA. \t\t\t\t\t\t\t\n\")\n\n### Request a Quote\n\n- Accredited certifications\n- Helpful resources\n- No hidden fees\n- Trusted certification experts\n[Request a Quote](https://amtivo.com/us/certification-quote/ \"\nRequest a Quote                                            \")\n\n## Introduction\n\n[AS9100](https://amtivo.com/us/aerospace-certification/as9100-certification/ \"AS9100\") is the internationally recognized [Quality Management System (QMS)](https://amtivo.com/us/resources/insights/what-is-a-quality-management-system-qms-a-simple-overview/ \"Quality Management System (QMS)\") standard for the aerospace sector. For organizations working towards this certification, understanding its clauses is an important part of building awareness of the standard\u2019s requirements.\n\nAS9100 is built on the requirements of [ISO 9001](https://amtivo.com/us/resources/insights/what-is-the-as9100-standard/ \"ISO 9001\") \u2014the global standard for Quality Management Systems\u2014with enhanced requirements specific to aerospace, including risk management, product safety, and supplier control.\n\nThis guide provides an overview of the key clauses within AS9100. If your organization is certified to ISO 9001, you may be familiar with some clauses of AS9100.\n\n## Clause 4: Context of the Organization\n\n### Clause 4.4 Quality M",
      "tags": [
        "standards",
        "aerospace",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "applications-of-digital-twins-in-manufacturing",
      "label": "What is Digital Twin Technology?",
      "type": "source",
      "content": "\nExplore the revolutionary potential of digital twins in manufacturing with our comprehensive guide.\n\n![](https://www.cyngn.com/hs-fs/hubfs/digital%20twins%20article%20header%20-%20optimized%20%20(1).jpg?width=2265&height=1275&name=digital%20twins%20article%20header%20-%20optimized%20%20(1).jpg)\n\nAs digital twin technology becomes increasingly prevalent, [around 75% of companies](https://www.mckinsey.com/industries/industrials-and-electronics/our-insights/digital-twins-the-key-to-smart-product-development) in advanced industries are harnessing its capabilities. This spans from simulating production processes to generating replicas of equipment parts for performance analysis, providing organizations with a new approach to understanding their workflows.\n\nDigital twins streamline operations across many sectors, with manufacturing at the forefront. By offering real-time insights, digital twins play a pivotal role in Industry 4.0 and have become integral to smart factories and smart manufacturing. In this article, we will explore how this advanced technology is paving the way for enhanced productivity, predictive maintenance, and agile decision-making.\n\nTable of Contents\n\n1. [What is Digital Twin Technology?](#what-is-digital-twin-technology)\n2. [Digital Twin vs. Simulation](#digital-twin-vs-simulation)\n3. [How Does Digital Twin Technology Work?](#how-does-digital-twin-technology-work)\n4. [Applications of Digital Twins in Manufacturing](#applications-of-digital-twins-in-manufacturing)\n5. [Digital Twins For Automated Guided Vehicle Management](#digital-twins-for-automated-guided-vehicle-management)\n6. [7 Benefits of Digital Twins for Manufacturing](#7-benefits-of-digital-twins-for-manufacturing)\n7. [How Digital Twins Can Be Used for Autonomous Industrial Vehicles in Manufacturing](#how-digital-twins-can-be-used-for-autonomous-industrial-vehicles-in-manufacturing)\n8. [Frequently Asked Questions](#frequently-asked-questions)\n\nTable of Contents\n\n1. [What is Digital Twin Tech",
      "tags": [
        "digital-tools",
        "manufacturing",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "best-practices-for-engineering-change-management",
      "label": "Overview \u2013 Best Practices for Engineering Change Management",
      "type": "source",
      "content": "\n![Best Practices for Engineering Change Management](https://technosofteng.com/wp-content/uploads/2024/01/Creative_Dec_Blog_4_-_Image_1.webp \"Best Practices for Engineering Change Management\")\n\nChange is inevitable, especially in the dynamic landscape of engineering projects. A critical aspect that engineers and project managers navigate daily is the management of changes that occur during the lifecycle of a project. Engineering change management is the structured process that orchestrates these modifications while ensuring the project\u2019s integrity, timelines, and budget are upheld. Embracing best practices in this realm is pivotal for seamless operations and successful outcomes.\n\n## Overview \u2013 Best Practices for Engineering Change Management\n\nBest practices in ECM encompass various strategies and methodologies that help streamline the change process while maintaining quality and compliance. Here\u2019s a detailed overview:\n\n### 1\\. Establish Clear Change Management Procedures:\n\nBegin by defining comprehensive procedures outlining how changes are proposed, evaluated, approved, and implemented. This includes identifying stakeholders, roles, responsibilities, and the workflow for change requests.\n\n### 2\\. Document Everything:\n\nMaintain detailed documentation of the proposed change, its impact analysis, and the rationale behind it. This documentation should include technical specifications, risk assessments, cost implications, and schedules.\n\n### 3\\. Change Impact Assessment:\n\nBefore implementing any change, conduct a thorough impact assessment to understand how it will affect various aspects such as functionality, performance, cost, schedule, and compliance. This helps in making informed decisions.\n\n### 4\\. Risk Analysis and Mitigation:\n\nEvaluate potential risks associated with the proposed change and develop mitigation strategies to address these risks. Assess the impact on existing systems, workflows, and dependencies to minimize any negative consequences.\n\n### 5\\. Cross-",
      "tags": [
        "change-management",
        "process",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "best-practices-for-integrating-mes-with-plm-and-erp-prescient",
      "label": "Why MES, PLM, and ERP Integration Matters",
      "type": "source",
      "content": "\n![](https://www.pre-scient.com/wp-content/uploads/2026/01/Best-Practices-for-Integrating-MES-with-PLM-and-ERP-Seamlessly.jpg)\n\nManufacturing systems rarely fail because of missing software. They fail because systems do not talk to each other. You may already use MES, PLM, and ERP platforms across your organisation, yet data still moves slowly, manually, or inconsistently. This gap limits visibility and increases operational risk.\n\nSeamless integration across these platforms is no longer optional. It is a core requirement for modern manufacturing. This blog explains best practices for integrating MES with PLM and ERP systems, with a clear focus on **PLM Implementation**, **mes software solutions**, and **digital factory integration**.\n\n## Why MES, PLM, and ERP Integration Matters\n\nEach system serves a distinct purpose:\n\n- PLM manages product data, engineering changes, and design history\n- MES manages shop-floor execution, production tracking, and quality\n- ERP manages planning, finance, inventory, and supply chains\n\nWhen these systems operate in silos, problems emerge quickly. Engineering changes fail to reach the shop floor. Production data does not flow back to design teams. ERP plans rely on outdated execution data.\n\nIndustry analysis published on TechNewsWorld highlights that manufacturers with integrated MES, PLM, and ERP environments respond faster to design changes and reduce production errors significantly. Integration directly supports cost control, quality, and speed.\n\nThis is why **digital factory integration** has become a strategic priority.\n\n## Understanding the Integration Challenge\n\nIntegration is not only about connecting software. It involves aligning data models, processes, and ownership.\n\nCommon challenges include:\n\n- Inconsistent part numbers and BOM structures\n- Manual data transfers between systems\n- Delayed updates from PLM to MES\n- Limited feedback from MES to ERP\n- Custom logic built without long-term scalability\n\nWithout a structured appro",
      "tags": [
        "it-systems",
        "integration",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "bill-of-materials-with-integrated-manufacturing",
      "label": "How does integration work in various industries?",
      "type": "source",
      "content": "\n![PLM, ERP, and MES Integration](https://aenwoygtto.cloudimg.io/v7/prostep.us/wp-content/uploads/2021/03/image-27.png?w=540)\n\nPLM, ERP, and MES Integration\n\nContents:  \n- [How does integration work in various industries?](#intro)\n- [Added Value between PLM, MES, and ERP Integration](#value)\n- [Industry 4.0](#industry)\n- [Bill of Materials between PLM, ERP, and MES as an Integration Layer](#integration)\n- [Defining the Need for PLM, ERP, and MES Integration](#define)\n\t- [Bill of Material Foundations](#bill)\n- [Design a Solution for the Digital Thread](#digital)\n- [Tool for Integration Between PLM, MES, and ERP](#tool)\n- [OpenPDM \u2013 Integration Tool Between PLM, MES, and ERP](#openpdm)\n- [Conclusion](#conclusion)\n- [Glossary Reference](#glossary)\n\n**Introduction**\n\n## How does integration work in various industries?\n\nIndustrial manufacturing of automotive, aerospace, shipbuilding, and consumer goods is constantly evolving. Advancements in technologies and processes contribute to the growing complexity of product development. Managing the product at each lifecycle stage can become more onerous with each added system and each transfer of product ownership.\n\nDifferent tools were created to help minimize difficulty within product development. Product lifecycle management (PLM) was designed to manage the product, processes, and people during the entire development, controlling product evolution from ideation to system end of life. Enterprise Resource Planning (ERP) introduces supplier, tooling, inventory, production facility, and additional logistic details. Lastly, Manufacturing Execution System (MES) captures serialization and consumption of parts and software as each unique product is instantiated, allowing for sustainability tracking. Each step within the product lifecycle is driven by ownership by a primary group. This ownership transfers as the product matures through the process.\n\nAs a product reaches its final phase, it is either improved or discontinued. If the de",
      "tags": [
        "bom",
        "integration",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "digital-thread-in-manufacturing-connecting-cad-plm-erp-and-mes-for-integrated-product-development",
      "label": "Digital Thread in Manufacturing: Connecting CAD, PLM, ERP and MES for Integrated Product Development",
      "type": "source",
      "content": "\n![](https://sumedhastech.com/wp-content/uploads/2026/03/digital-thread-for-engineering-900x450-1.png)\n\n##### Digital Thread in Manufacturing: Connecting CAD, PLM, ERP and MES for Integrated Product Development\n\n*In modern manufacturing, disconnected systems between CAD, PLM, ERP and MES often cause costly engineering errors. This is where a **Digital Thread architecture** becomes critical.*\n\nImagine this.\n\nYour design team updates a critical dimension in CAD.  \nProduction continues with the old drawing.  \nProcurement orders the wrong component.  \nQuality flags a deviation.  \nManagement asks: *Where did the disconnect happen?*\n\nIt didn\u2019t happen in one place. It happened in the gaps between systems.\n\nThis is exactly where a **Digital Thread** becomes essential.\n\nFor manufacturing organizations aiming to eliminate silos between CAD, PLM, ERP, and MES, building a connected data environment is no longer optional. It is the difference between reactive firefighting and structured engineering governance.\n\nIn this blog, we break down what a digital thread really means, why companies struggle without it, and how **Sumedhas Tech Solutions** helps enterprises build an integrated ecosystem using authorized PTC PLM solutions.\n\n[Explore PLM solutions with Sumedhas Tech Solutions](https://sumedhastech.com/contact-sumedhas/)\n\n###### What Is a Digital Thread in Manufacturing?\n\nA **Digital Thread in manufacturing** is a continuous, connected flow of product data across engineering, manufacturing, supply chain, and service systems.\n\nInstead of disconnected tools working independently:\n\n- CAD creates design data\n- PLM manages product structure and revisions\n- ERP handles procurement and costing\n- MES executes shop-floor operations\n\nA digital thread ensures these systems talk to each other in real time.\n\nThe result?  \nOne version of the truth. Across departments.\n\nAccording to industry studies, manufacturers with integrated digital systems report up to **30% reduction in engineering cha",
      "tags": [
        "digital-thread",
        "it-systems",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "digital-twin-manufacturing-applications-benefits-and-insights",
      "label": "Digital Twin Manufacturing: Applications, Benefits, and Industry Insights",
      "type": "source",
      "content": "\n![img](https://www.simio.com/hs-fs/hubfs/Imported_Blog_Media/2025-07-17-Blog-Pic.jpg?width=3000&name=2025-07-17-Blog-Pic.jpg)\n\n## Digital Twin Manufacturing: Applications, Benefits, and Industry Insights\n\nManufacturing operations have undergone substantial evolution through the adoption of intelligent digital technologies. [Digital twin manufacturing](https://cdn.simio.com/assets/website/publications/20201022-ManufacturingDigital.pdf) represents a critical advancement for over [60% of manufacturing companies](https://isg-one.com/docs/default-source/default-document-library/2023-isg-smart-manufacutring-study.pdf) that have started smart technology initiatives, according to a 2023 survey from tech advisory firm ISG. Nearly two-thirds of these organizations pursue smart manufacturing primarily to [reduce operational costs](https://www.i-scoop.eu/industry-4-0/manufacturing-2022/). Industry leaders like Simio have demonstrated the substantial impact of digital twins, achieving up to 30% savings in operational costs while reducing time-to-market by an impressive 50%.\n\nDigital twins in manufacturing function as dynamic, virtual replicas of physical assets, processes, and systems, enabling continuous monitoring, data analysis, and enhanced decision-making. These sophisticated digital models provide invaluable insights throughout the entire product lifecycle\u2014from design and prototyping to production, operation, maintenance and ongoing continuous improvement. The technology optimizes factory floor configurations, decreases downtime, and delivers deeper understanding of physical assets and manufacturing processes.\n\nMarket expansion for this technology continues at an accelerated pace. [MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/digital-twin-market-225269522.html) projects the digital twin market will grow from $10.1 billion in 2023 to $101.1 billion by 2028, representing a compound annual growth rate (CAGR) of 61.3%. [Gartner](https://www.sciencedirec",
      "tags": [
        "digital-tools",
        "manufacturing",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "elon-musk-and-first-principles-thinking--",
      "label": "Elon Musk and First Principles Thinking.",
      "type": "source",
      "content": "\n## Elon Musk and First Principles Thinking.\n\n![](https://i0.wp.com/www.supplychaintoday.com/wp-content/uploads/2024/11/First-Principles-Thinking.jpg?w=2000&ssl=1)\n\n## Greater Detail, Expanded from Above:\n\n### 1\\. Breaking Problems Down to Fundamentals\n\n- First Principles Thinking involves stripping away assumptions, preconceptions, and conventional wisdom to uncover the most basic, fundamental truths about a problem. By identifying the core components, one can better understand the problem\u2019s true nature and begin building solutions from the ground up.\n\n### 2\\. Challenging Assumptions\n\n- Musk is known for questioning and challenging existing assumptions, even those that are widely accepted. Instead of accepting things as they are, he seeks to understand *why* things are done a certain way and whether there\u2019s a better alternative or a more efficient method.\n\n### 3\\. Rebuilding from Scratch\n\n- Once you break a problem down to its fundamentals, First Principles Thinking allows you to reassemble solutions in a completely new way. Musk has used this approach to rethink everything from electric car manufacturing to rocket design, often leading to radical innovations or improvements.\n\n### 4\\. Focusing on What is Physically and Economically Possible\n\n- Musk\u2019s approach is grounded in science and physics. He often goes back to the laws of nature and basic physical principles to guide his decision-making. For example, with SpaceX, Musk analyzed the cost structure of rocket parts and found ways to radically reduce the price by questioning every element of traditional space launch methods.\n\n### 5\\. Innovating through First Principles\n\n- Rather than improving existing technologies incrementally, First Principles Thinking encourages breakthrough innovations. Musk uses this thinking to identify opportunities for dramatic leaps in performance or cost-efficiency. For example, when creating Tesla\u2019s electric vehicles, Musk didn\u2019t just tweak internal combustion engines\u2014he looked at the ",
      "tags": [
        "methodology",
        "thinking",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "engineering-change-order-eco-definition-types-process-and-example",
      "label": "What Is an Engineering Change Order (ECO)?",
      "type": "source",
      "content": "\n![Engineering Change Order (ECO)](https://simplerqms.com/wp-content/uploads/2025/12/engineering-change-order-eco-1640x840-1.jpg)\n\nEngineering Change Order (ECO)\n\nAn Engineering Change Order (ECO) is a formal document used in engineering and manufacturing to authorize and control modifications to a product\u2019s design, components, manufacturing process, or documentation.\n\nThe main purpose of an ECO is to provide a structured, traceable, and compliant way to implement changes. ECO ensures product quality, regulatory compliance, and consistency across the product lifecycle. ECOs play a central role in change control by documenting what needs to change, why it is necessary, and how it will be executed.\n\nThere are several types of ECOs, including design changes, material or component substitutions, process updates, corrective and preventive changes, cost-reduction initiatives, compliance-driven updates, customer-requested modifications, and end-of-life adjustments. Common reasons for initiating an ECO include design flaws, regulatory updates, supplier issues, cost optimization goals, safety concerns, and customer feedback.\n\nThe ECO process follows a structured workflow including initiation of a change request, review and evaluation, approval and authorization, implementation and execution, and verification and closure. This organized approach helps ensure that every change is formally assessed, documented, and traceable.\n\nEffective ECO management requires following best practices. Best practices include using standardized submission forms, defining evaluation criteria, involving cross-functional teams early, centralizing documentation, conducting impact assessments, and performing post-implementation reviews. Implementing Quality Management System (QMS) software further enhances efficiency by automating workflows, ensuring version control, maintaining audit trails, and supporting regulatory compliance.\n\nSimplerQMS, a life science QMS software, supports the full ECO lifecyc",
      "tags": [
        "change-management",
        "process",
        "source"
      ],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "engineering-change-management-definition-process-and-best-practices",
      "label": "See the solution in action",
      "type": "source",
      "content": "\n![Logo white](https://cdn.prod.website-files.com/6271589098ab6ca52370dccd/63c0b151df82ba6d003679a3_Aletiq%20logo%20white.svg)\n\n## See the solution in action\n\n[Request a demo](https://www.aletiq.com/en/contact/book-a-meeting)\n\n[![Aletiq logo](https://cdn.prod.website-files.com/6271589098ab6ca52370dccd/627165d3f0561b6173a63aa3_Logo-Aletiq.svg)](#)[contact@aletiq.com](mailto:contact@aletiq.com?subject=Contact%20Aletiq)\n\n[\n\n+1 646 328 7993\n\n](tel:+16463287993)[\n\n333 Schermerhorn Street, Brooklyn 11217 NY, USA\n\n](https://maps.app.goo.gl/P3p2Cp2yVzezk9bs9)\n\nSolutions\n\n[PLM](https://www.aletiq.com/en/plm) [PDM](https://www.aletiq.com/en/pdm) [DMS](https://www.aletiq.com/en/ged)\n\nServices\n\n[Integrations](https://www.aletiq.com/en/integration) [Security](https://www.aletiq.com/en/security)\n\nUse cases\n\n[Industrialization and manufacturing](https://www.aletiq.com/en/use-cases/industrialization-and-manufacturing) [Quality](https://www.aletiq.com/en/use-cases/quality-system) [Design and development](https://www.aletiq.com/en/use-cases/design-and-development)\n\nResources\n\n[Blog](https://www.aletiq.com/en/resources/blog) [White paper](https://www.aletiq.com/en/contact/white-paper)\n\nAbout\n\n[Join us](https://jobs.ashbyhq.com/aletiq) [Who are we](https://www.aletiq.com/en/resources/about) [Contact us](https://www.aletiq.com/en/resources/contact-us)\n\nFollow us\n\n[\n\nLinkedIn\n\n](https://www.linkedin.com/company/aletiq/)\n\nFollow our latest news\n\n**Merci! Votre inscription a bien \u00e9t\u00e9 prise en compte.**\n\nOops! Something went wrong while submitting the form.\n\n[Privacy Policy](https://www.aletiq.com/en/privacy-policy) [Imprint](https://www.aletiq.com/en/legal-notice)\n\n2025 Aletiq. All rights reserved.",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "explaining-plc-hmi--scada",
      "label": "Explaining PLC, HMI, and SCADA",
      "type": "source",
      "content": "\n## Explaining PLC, HMI, and SCADA\n\n#### Author Sticky\n\n## Table of Contents\n\n- [PLC, HMI, and SCADA in Industrial Automation](#industrial-automation)\n- [What is a PLC (Programmable Logic Controller)?](#about-plc)\n- [What is an HMI (Human-Machine Interface)?](#about-hmi)\n- [What is a SCADA (Supervisory Control and Data Acquisition)?](#about-scada)\n- [Key features and functions of PLCs](#key-features-pls)\n- [Key features and functions of HMIs](#key-features-hmi)\n- [Key features and functions of SCADA software](#key-Features-scada)\n- [Key differences between PLC, HMI, and SCADA](#key-differences)\n- [PLC vs HMI vs SCADA: Key Differences Table](#key-differences-table)\n- [How PLC, HMI, and SCADA work together in industrial automation](#together-industrial-automation)\n- [Modernizing and scaling PLC, HMI, and SCADA environments](#modernizing-scaling)\n\n## Key Takeaways\n\n- PLCs, HMIs, and SCADA serve different roles within industrial automation, but are designed to work together as part of a layered system.\n- PLCs focus on real-time control, executing logic that directly controls machines and processes.\n- HMIs provide operator-facing visualization and interaction, allowing users to monitor conditions, adjust setpoints, and respond to alarms.\n- SCADA systems deliver supervisory oversight, aggregating data from multiple PLCs and HMIs for centralized monitoring, analysis, reporting, and remote supervision.\n- Together, these technologies enable reliable control, operational visibility, and scalability, supporting efficient and safe industrial operations across manufacturing, utilities, and infrastructure environments.\n\n## PLC, HMI, and SCADA in Industrial Automation\n\nIndustrial automation systems rely on several foundational technologies that work together to monitor, control, and optimize operations. Three of the most important components are PLC, HMI, and SCADA. While these terms are often mentioned together and sometimes used interchangeably, they serve distinct yet complemen",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "factory-acceptance-test-fat-explained",
      "label": "FAT example",
      "type": "source",
      "content": "\nIn the world of industrial automation, a **Factory Acceptance Test** or **FAT** is simply a test for a newly manufactured control system that takes place at your factory or your workshop before you ship the control panel to the customer.\n\nWith a Factory Acceptance Test, you make sure that everything works properly before you deliver a control cabinet to a customer.\n\n![](https://www.youtube.com/watch?v=UgwHIpQkaK8)\n\nNow, don\u2019t let this long-looking technical phrase scare you. If you look at your everyday life, you actually do a Factory Acceptance Test or FAT several times during the day.\n\nFor example, when you\u2019re done writing something on a simple Google Doc, you actually review the document once or maybe twice, depending on how important it is, before sending it to a friend or colleague.\n\nThis is actually an acceptance test, done by you, on your computer before the document is sent.\n\n![Document Acceptance Test](https://cdn.prod.website-files.com/65f854814fd223fc3678ea53/65f854814fd223fc3678f2d6_Document-Acceptance-Test.png)\n\nDocument Acceptance Test\n\nThis is what I like to call a Document Acceptance Test which is Actually a made-up name as I don\u2019t think there is such thing as Document Acceptance Test but the point that I like to make to you as an automation engineer is that Factory Acceptance Test is not a complicated concept and we do these acceptance tests several times a day working on other tasks.\n\n### FAT example\n\nNow that you have a good idea about the concept and feel comfortable with it, let\u2019s explore FAT a bit further through a practical example.\n\nLet\u2019s say that you are a company that designs and implements industrial control systems.\n\nThese control systems often come in the form of a [**control panel**](https://realpars.com/electrical-control-panel-basics/) built into a control cabinet.\n\n![Control Panel](https://cdn.prod.website-files.com/65f854814fd223fc3678ea53/65f854814fd223fc3678f2be_Control-Panel.png)\n\nControl Panel\n\nYou\u2019ve built a control panel and ",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "from-iso-9001-to-as9100-what-you-need-to-know",
      "label": "Get Started Today",
      "type": "source",
      "content": "\n[![](https://amtivo.com/us/wp-content/uploads/sites/18/2026/03/American-flag-1.png)](https://amtivo.com/us/resources/news/us-certification-bodies-rebrand/ \"\nWelcome to Amtivo in the US, formerly Orion, ASR, CMA, Audit3, QSR and ISA. \t\t\t\t\t\t\t\n\")\n\n[Welcome to Amtivo in the US, formerly Orion, ASR, CMA, Audit3, QSR and ISA.](https://amtivo.com/us/resources/news/us-certification-bodies-rebrand/ \"\nWelcome to Amtivo in the US, formerly Orion, ASR, CMA, Audit3, QSR and ISA. \t\t\t\t\t\t\t\n\")\n\n[![](https://amtivo.com/us/wp-content/uploads/sites/18/2026/03/American-flag-2.png)](https://amtivo.com/us/resources/news/us-certification-bodies-rebrand/ \"\nWelcome to Amtivo in the US, formerly Orion, ASR, CMA, Audit3, QSR and ISA. \t\t\t\t\t\t\t\n\")\n\n### Get Started Today\n\n- Located nationwide\n- Save time & money\n- No extra or hidden fees\n\n[Request a Quote](https://amtivo.com/us/certification-quote/ \"Request a Quote\")\n\n## Does My Business Need Both ISO 9001 and ISO AS9100?\n\n**In the aerospace industry, having a strong Quality Management System (QMS) is crucial. A robust QMS certified to [ISO 9001](https://amtivo.com/us/resources/insights/iso-9001-meaning-requirements-and-beginners-guide/ \"ISO 9001\") can help deliver safe, reliable products and services that meet strict industry standards.**\n\nHowever, QMS certification isn\u2019t just about compliance. Having the right certification can make a big difference to your business. It can open doors to new business opportunities and help demonstrate your commitment to excellence.\n\nFor aerospace manufacturers and suppliers, understanding how the quality management standards ISO 9001 and [AS9100](https://amtivo.com/us/aerospace-certification/ \"AS9100\") work together can provide a strategic advantage that can help their company grow.\n\n[Over 26,800 ISO 9001 certifications](https://www.iso.org/committee/54998.html?t=KomURwikWDLiuB1P1c7SjLMLEAgXOA7emZHKGWyn8f3KQUTU3m287NxnpA3DIuxm&view=documents#section-isodocuments-top \"Over 26,800 ISO 9001 certifications\") have b",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "generative-design-moves-engineering-from-iteration-to-innovation",
      "label": "At a Glance",
      "type": "source",
      "content": "\nAI generative design helps engineers explore thousands of design alternatives, delivering 30-50% faster time-to-market, 10-50% weight reductions, and up to 20% cost savings.\n\n![AI-based generative design](https://eu-images.contentstack.com/v3/assets/blt0bbd1b20253587c0/blt62685ced81a2758a/695eb5f84a0567925de0d33c/PTC_generative_design_2209878364.jpg?width=1280&auto=webp&quality=80&format=jpg&disable=upscale \"AI-based generative design\")\n\nKrot Studio for iStock / Getty Images Plus via Getty Images\n\n## At a Glance\n\n- AI simultaneously explores thousands of designs against multiple engineering constraints.\n- AI can achieve up to 50% faster product development speeds.\n- Gen AI offers up to 50% percent weight reduction while meeting performance targets.\n\nInnovation is transformative. It\u2019s why we ride in a Mustang instead of on a mustang. Centuries of knowledge now fit in the palm of our hand. Products move from reliable to revolutionary. Yet ideas without real-world grounding remain ideas. [True innovation](https://www.ptc.com/en/technologies/plm/digital-innovation) happens when creativity is anchored in physics, materials, and [manufacturability](https://www.ptc.com/en/industries/industrials).\n\nFor decades, engineers have walked that line, brainstorming concepts, building models, running analyses, and [refining geometry](https://support.ptc.com/help/creo/creo_pma/r12/usascii/index.html#page/simulate/simulate/refining_geometry.html) step by step. But what if that process could be not just faster, but fundamentally better? What if thousands of physics-based design alternatives could be explored in the earliest stages of development?\n\nThat\u2019s the impact of AI-powered generative design. By combining AI with engineering constraints, these tools put exploration directly in the designer\u2019s hands. They quickly generate and evaluate thousands of design permutations against goals like weight, stiffness, cost, or manufacturability.\n\nThe result isn\u2019t just faster iteration, it\u2019s acce",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "how-itot-convergence-is-driving-a-staffing-transformation",
      "label": "Converging Organizations",
      "type": "source",
      "content": "\n![](https://www.ibaset.com/wp-content/uploads/ITOT_thumbnail.jpg)\n\n![How IT/OT Convergence is Driving a Staffing Transformation ](https://www.ibaset.com/wp-content/uploads/ITOT_header.jpg)\n\nEdge computing is usually discussed as a technology issue, driven by the need to process data faster and serve more users up and down the organization. But it also has important implications for the Information Technology and Operations Technology (IT/OT) professionals who manage that technology.\n\nThanks to 5G, the Industrial Internet of Things (IIoT), and the Cloud, devices, and systems at the edge that were once isolated can now communicate in real-time, sharing data and converging their networks and infrastructures. The change is happening fast, too. The global edge computing market is expected to exceed [17 billion dollars](https://www.yahoo.com/now/global-edge-computing-market-reach-114900511.html) within five years. Its impact will be felt across industries.\n\nTo deal with these changes, it may be time for manufacturers to rethink how they organize their technology staff.\n\n#### Converging Organizations\n\nTraditionally, IT and OT staffs have been separate departments, with IT running systems of record such as ERP and the OT team in charge of machines and systems in the factories. That approach worked because the technologies and systems themselves were distinct, with only limited and controlled communication between them.\n\nNow, with IT and OT networks converging and users demanding access to [manufacturing intelligence](https://www.ibaset.com/solutions/manufacturing-intelligence/) in real-time, enterprises should consider merging their technology teams to reap the full rewards of digital transformation. Experts warn that dividing IT and OT architecture limits performance and value, especially when your workforce is digitally proficient. And if the technology is becoming unified, it only makes sense for the organization to be unified too, at least to some degree.\n\nMerging depa",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "how-the-three-main-key-pillars-plm-erp-mes-help-manufacturers",
      "label": "Introduction:",
      "type": "source",
      "content": "\n![PLM, ERP,MES forms the three key pillars of manufacturing in the Industry 4.0 era from Neel SMARTEC](https://neelsmartec.com/wp-content/uploads/2021/08/Three-Key-Pillars-of-manufacturing.jpg)\n\nPLM, ERP, MES \u2013 3 Key Pillars of Manufacturing\n\n#### Introduction:\n\nManufacturing is a complex sector as well in Industry 4.0 manufacturers (Small to medium to large enterprises, OEMs) needs enterprise applications to sustain complex procedures. Three core enterprise systems (PLM | ERP | MES) in the world of manufacturing, achieving success and efficiency is crucial to stay competitive.\n\n#### Product Lifecycle Management:\n\nBeginning with product design, Product Lifecycle Management ([PLM](https://neelsmartec.com/2020/07/09/plm-using-iiot/)) systems keep 3D CAD data along with in-depth properties and attributes of parts/components. The product design is alteration managed, permitting continual updates and improvements, while also restricting individual gain access to and also tracing the maturity status. so, PLM consists of product data management (PDM) and CAD/CAM/CAE tools. PLM is a crucial enabler for digital change within the production business with [IIoT](https://neelsmartec.com/2019/08/02/smart-automation-to-smart-manufacturing-industrial-internet-of-things/).\n\n> Imagine building a car from scratch. PLM is like the blueprint that guides the entire process. It\u2019s a comprehensive software system that manages a product\u2019s journey from concept to retirement. Engineers, designers, and stakeholders collaborate within PLM to create, modify, and refine products. This includes managing design data, tracking changes, and ensuring regulatory compliance. PLM streamlines communication and reduces errors, ensuring the product development process is efficient and cost-effective.\n\n#### ERP and MES:\n\nNow, let\u2019s shift our focus to the overall manufacturing business. Enterprise Resource Planning (ERP) is like the central nervous system of a company. It integrates all departments and proce",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "how-to-automate-hmi-systems-testing",
      "label": "Employing automated software testing tools to HMI systems",
      "type": "source",
      "content": "\nStart your quote by choosing a product Select a configuration below\n\n![Eggplant Test Software](https://www.keysight.com/content/dam/keysight/en/img/dtx-illustrations/default/software-test/SoftwareTest-BW.svg)\n\n**+** Eggplant Test Software\n\n## Employing automated software testing tools to HMI systems\n\nAutomating human machine interface (HMI) and connected car experience testing requires computer vision, non-intrusive black box and AI-driven testing. Testing HMI and connected systems requires design, maintenance, and execution of thousands of test cases, while considering the user experience (UX), application interoperability, and embedded systems performance.\n\nMeeting UX conformance and safety compliance targets requires executing test cases at the unit, functional, and UX levels across multiple integrated vehicle systems. Using an automated software testing platform enables engineers to automate tests and run them 24x7, reducing test time and increasing test coverage. Automation enables engineers to spend time on designing new test cases and scripts, while the AI-driven automation performs test execution and results analysis.\n\n## See demo of automated HMI systems testing\n\n<video role=\"application\" src=\"https://www.keysight.com/content/dam/keysight/en/vid/ungate/videos/Eggplant-Automotive-HMI.mp4\" controls=\"\"><p>To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>\n\nCurrent Time 0:00\n\nDuration 1:55\n\nStream Type LIVE\n\nRemaining Time 1:55\n\n## Explore products and features in our HMI systems testing solution\n\n- ![](https://www.keysight.com/content/dam/keysight/en/img/keysight-software-icon.svg)\n\t![](https://keysight-h.assetsadobe.com/is/image/content/dam/keysight/en/img/prd/software/software-testing/eg1000a/eg1000a-eggplant-test-software-1280x720.png) \n\t### Eggplant Test: AI-Powered Test Automation Tool\n\n![](https://keysight-h.assetsadobe.com/is/image/content/dam/keysight/en/img/close.png?wid=20&hei=19&fmt=webp-alpha&resM",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "itot-convergence-a-complete-guide",
      "label": "Bridging the Gap Between IT & OT on the Factory Floor",
      "type": "source",
      "content": "\n![Manufacturing worker performing plant lifecycle check](https://orise.com/wp-content/uploads/sites/71/2025/09/shutterstock_1944508705.jpg?w=1871&h=1&crop=1)\n\nAs you may expect, **IT/OT convergence** is pretty much what it says on the tin: the **[integration of your informational technology and operational technology systems](https://orise.com/system-integration/)**. But what exactly does this involve, and what are the benefits?\n\nIndustrial companies want to migrate to more complex ecosystems to boost and enhance their digital capabilities. Often featuring tighter vertical integration, these new ecosystems can drive efficiencies and real value, but they also require different approaches on how to support and manage IT (information technology) and OT (operational technology).\n\nToday\u2019s industrial companies need to change how they interact with, react to and provide services if they hope to obtain desired levels of value from the next wave of [digitalization](https://orise.com/digitalization/).\n\n## Bridging the Gap Between IT & OT on the Factory Floor\n\nIn the production plant, it can often feel like a tug of war between two sides of the process: the machines and equipment performing the physical labor, and the data, servers, and digital devices that gather information and inform decisions. In the past, these two key production players have occupied their own corners, equally important but distinctly separate.\n\nBut this is no longer the case, or it shouldn\u2019t be, at least. New technology and concepts (such as Industrial Internet of Things (IIoT) devices) helps these two worlds collide.\n\nIT/OT convergence opens up a host of previously-limited possibilities. It offers a game-changing impact on efficiency, productivity, and growth. To start, scaling digitalization initiatives requires greater integration of the data between IT and OT.\n\nIT/OT convergence is the foundation that makes industrial AI **possible, scalable, and valuable**. By unifying operational technology data ",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "implementing-unified-namespace-uns-with-mqtt-sparkplug",
      "label": "Implementing Unified Namespace (UNS) With MQTT Sparkplug",
      "type": "source",
      "content": "\nIn part 1 of this [Unified Namespace (UNS)](https://www.hivemq.com/mqtt/unified-namespace-uns-essentials-iiot-industry-40) series, [What is a Unified Namespace and Why does it Matter?](https://www.hivemq.com/blog/what-is-unified-namespace-uns-iiot-industry-40/), we gave an introduction to what a UNS is. In part 2, [How Does a Unified Namespace Works?](https://www.hivemq.com/blog/how-does-unified-namespace-uns-work-iiot-industry-40/), we dived deeper into concepts of UNS and best practices for structuring it. In part 3, we will cover why [MQTT Sparkplug](https://www.hivemq.com/mqtt/mqtt-sparkplug-essentials) is best suited for implementing UNS, what are the minimum technical requirements for UNS, MQTT Sparkplug topic structure for Unified Namespace, and Parris and Schultz methods for UNS structuring with MQTT Sparkplug.",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "integrating-scada-systems-into-unified-namespace",
      "label": "Integrating SCADA Systems into Unified Namespace",
      "type": "source",
      "content": "\nRecently, the Unified Namespace (UNS) has seen significant growth, a trend that shows no signs of slowing down. This is largely due to its ability to eliminate data silos, which have historically hindered efficient information sharing. As a result, a new standard for data management and accessibility is being established. This shift allows manufacturing companies to overhaul industrial data management, moving from outdated and inflexible systems to a more flexible framework that supports real-time decision-making and enhances operational flexibility.",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "otit-convergence-and-physical-ai-innovation",
      "label": "OTIT Convergence and Physical AI Innovation",
      "type": "source",
      "content": "\n![microphone](https://hcltech.imgix.net/sites/default/files/images/ui-revamp/microphone-blue.svg) Listen to article\n\n0:00 12:06\n\n<audio src=\"https://www.hcltech.com/sites/default/files/trends-text-to-speech/tts-799654-en-25.mp3\"></audio>\n\nThe convergence of operational technology (OT) with information technology (IT) is reshaping industries. At its core, OT/IT convergence is \u201cthe integration of IT and OT technologies, processes and organizational structures to optimize industrial operations,\u201d according to [IoT Analytics](https://www.jeffwinterinsights.com/insights/it-ot-market-size).\n\nIn practice, this means connecting factory-floor systems (OT) *\u2014* machines, sensors and controllers *\u2014* with enterprise data systems and cloud analytics (IT). The goal is a unified ecosystem where real-time operational data fuels better decisions, efficiency gains and new services. This trend is no longer optional; companies are rapidly realizing that to thrive in the era of AI and Industry 4.0, their historically siloed OT and IT domains must work in tandem.\n\nAt the very edge of this evolution sits [Physical AI](https://www.hcltech.com/physical-ai-aiot) (also called \u201c [Generative Physical AI](https://www.nvidia.com/en-gb/glossary/generative-physical-ai/) \u201d). This is the fusion of AI\u2019s generative models with the physical world of robots, drones and autonomous machines. Physical AI systems perceive, simulate and act in real environments by leveraging OT-generated sensor and actuator data to train embodied intelligence in virtual 3D spaces before deployment.\n\n**1\\. AI\u2019s 360-degree role in driving convergence**\n\nA key catalyst in OT/IT convergence is [artificial intelligence (AI)](https://www.hcltech.com/ai). [Sukant Acharya](https://www.linkedin.com/in/sukantacharya/), EVP and Global Head, Physical AI and AIoT business at HCLTech, stresses, \u201cI see AI playing a 360-degree role in enabling and influencing how OT/IT convergence will happen.\u201d\n\nAccording to Acharya, \u201cAI acts as a driver, an ",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "optimize-your-parts-inventory-to-reduce-obsolescence-risk",
      "label": "The high cost of unplanned downtime",
      "type": "source",
      "content": "\n**Why risk downtime when you can be prepared for obsolescence?** In the fast-paced world of manufacturing, unplanned downtime is a significant drain on resources and operational performance, leading to substantial production losses. Obsolescence risk is inevitable and occurs in new and old equipment. Your operation is at high risk for downtime when an original equipment manufacturer (OEM) decides to no longer produce a critical part required to run your production line and there is [no available inventory of that part](https://ats-service.com/blog/what-is-manufacturing-stockout-risk) or plan to replace it.\n\nProactive maintenance practices such as planned preventive maintenance (PPM) can go a long way toward reducing the occurrence of unplanned downtime events. However, when these events involve obsolete parts that are difficult to source or replace, the disruption is often prolonged. This is why a strong inventory management program and budget is imperative to manage obsolescence risk. Otherwise, the financial impact of downtime events can be catastrophic.\n\n## The high cost of unplanned downtime\n\nThe immediate cost of unplanned downtime is the failure to meet production targets, resulting in lost revenue. Longer-term consequences include customer dissatisfaction, which can result in the search for a new supplier.\n\nManufacturers caught off guard by equipment failures or outdated technology also end up paying for expensive emergency repairs. These repairs can divert maintenance and operations teams from their regular duties, which disrupt other critical processes within the plant. Additionally, the urgency of the situation may require bringing in specialized technicians from outside service providers, incurring significant labour and travel expenses.\n\n![\"The Impacts of Unplanned Downtime on Manufacturers\" infographic](https://ats-service.com/wp-content/uploads/sites/59/2025/01/Obsolescence-Blog-Images-8.png)\n\n\"The Impacts of Unplanned Downtime on Manufacturers\" infog",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "plc-and-scada-understanding-the-differences-in-industrial-automation-systems",
      "label": "What is a Programmable Logic Controller?",
      "type": "source",
      "content": "\nWhat\u2019s powering the factories, energy grids, and water systems of the future? It\u2019s not just machines; it\u2019s intelligent automation.\n\nIn modern industrial operations, even a single minute of downtime can lead to significant financial loss, making automation essential for maintaining efficiency and control.\n\nAccording to Deloitte, manufacturers using innovative automation technologies report up to [**20%**](https://www2.deloitte.com/us/en/pages/about-deloitte/articles/press-releases/deloitte-2025-smart-manufacturing-survey.html) improvement in equipment uptime and 30% reduction in operating costs. However, unlocking these benefits starts with understanding the core systems behind automation.\n\nTwo significant technologies are at the core of these systems: [**PLC (Programmable Logic Controller)**](https://www.ls-electric.com/products/category/Smart_Automation_Solution/PLC) and [**SCADA (Supervisory Control and Data Acquisition)**](https://www.ls-electric.com/products/category/Smart_Power_Solution/SCADA)**.** Both are fundamental to modern industrial automation but serve different purposes.\n\nA PLC is designed to control machinery and processes in real time. It responds immediately to input signals, executes programmed logic, and controls output devices such as motors, valves, and alarms.\n\nIn contrast, an SCADA system is used for monitoring and supervision. It collects data from multiple devices, including PLCs, displays that information to operators, and allows centralized oversight and analysis.\n\nThis blog directly compares SCADA vs PLC, explaining their functions, differences, and how they work together in real-world environments. Whether you\u2019re building new infrastructure or upgrading existing systems, knowing when to use PLCs, SCADA, or both can help you design more efficient, scalable, and reliable automation solutions.\n\n## What is a Programmable Logic Controller?\n\nA Programmable Logic Controller (PLC) is a specialized industrial computer that controls machinery and",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "role-of-digital-twin-technology-in-industry-40",
      "label": "Understanding Digital Twin Technology",
      "type": "source",
      "content": "\n![img](https://www.simio.com/hs-fs/hubfs/Imported_Blog_Media/2025-03-28-Role-of-Digital-Twin-Technology-in-Industry-4_0-Picture.jpg?width=3000&name=2025-03-28-Role-of-Digital-Twin-Technology-in-Industry-4_0-Picture.jpg)\n\nThe rapid evolution of digital technologies has dramatically transformed manufacturing and operational landscapes with the advent of Industry 4.0. This new paradigm integrates cyber-physical systems, IoT, and advanced analytics into everyday production, revolutionizing how industries operate. At the heart of this transformation lies digital twin technology\u2014dynamic, virtual replicas of physical assets, systems, or processes that continuously update with real-time data. These advanced models enable organizations to simulate, monitor, and optimize operations with unprecedented precision.\n\nAs the trend of digital transformation continues to accelerate, industries are increasingly turning to digital twin technology to gain predictive insights, reduce downtime, and make more informed, data-driven decisions. This post explores the pivotal role of digital twins within Industry 4.0, from their real-time monitoring and simulation capabilities to their key benefits like agility and predictive maintenance. Additionally, we will highlight how Simio stands at the forefront of these innovations.\n\n## Understanding Digital Twin Technology\n\nA digital twin is far more than just a static model\u2014it is a constantly evolving, active digital counterpart of a physical asset, system, or process. According to [IBM\u2019s](https://www.ibm.com/think/topics/digital-twin-asset-management) insights on digital twin asset management, these intelligent replicas integrate real-time data from sensors, IoT devices, and enterprise systems, creating a continuously updated \u201cdevice shadow.\u201d This approach allows organizations to monitor asset performance, diagnose issues, and forecast potential failures based on both historical and current data trends.\n\nDigital twin technology plays a critical ro",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "scraps-and-waste-inventory-management-in-manufacturing-operations",
      "label": "Precision Scrap Tracking.Maximum Material Recovery.Leaner Production Lines.",
      "type": "source",
      "content": "\nManufacturing excellence isn't just about what you create; it\u2019s about what you leave behind. Scraps and waste inventory management is the critical practice of tracking, quantifying, and reducing non-product output to protect your bottom line. In high-volume production, unmanaged waste represents a double loss: the cost of raw materials and the cost of disposal. By implementing reliability metrics like MTBF (Mean Time Between Failure) for machines causing defects and optimizing ROA (Return on Assets) through better material utilization, manufacturers can turn \"trash\" into a strategic data point. [Sign up for OxMaint free](https://app.oxmaint.ai/?utm_source=blog%2Fpost%2Fscraps-waste-inventory-management-manufacturing) to transform your waste tracking into a lean manufacturing powerhouse.\n\n## Precision Scrap Tracking.Maximum Material Recovery.Leaner Production Lines.\n\nMost plants treat scrap as an afterthought. OxMaint treats it as a performance metric. By integrating scrap inventory with asset reliability data, we help you identify exactly which machines are eroding your margins and how to stop the bleed.\n\nScrap CategorizationWaste Yield AnalysisDefect Root CauseMaterial ReconciliationSustainability ReportingCost Recovery\n\nThe Core Challenge\n\n## The Hidden Impact of Improper Waste Management\n\nScrap and waste inventory management involves the systematic tracking of raw material leftovers and defective units. Without a digital system, this \"leakage\" often goes undocumented, inflating COGS and hiding equipment inefficiencies.\n\n01\n\n#### Financial Erosion\n\nEvery piece of scrap carries the cumulative cost of energy, labor, and material. Poor tracking means you are essentially throwing \"value-added\" time into the bin without understanding the financial recovery potential.\n\n02\n\n#### Operational Blind Spots\n\nHigh scrap rates are symptoms of deeper asset health issues. Without linking waste to specific work orders or machines, you lose the ability to perform predictive mainte",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "the-architects-guide-to-unified-namespace-uns-implementation-roadmap",
      "label": "The Architect's Guide to Unified Namespace: From Automation Pyramid to Real-Time Event Architecture",
      "type": "source",
      "content": "\n![The Architect's Guide to Unified Namespace (UNS): Implementation Roadmap](https://proxus.io/_astro/ot-it-integration.UboO0Y70_sN5vr.webp)\n\nMethodology notes\n\nEvidence: medium Reviewed by: Technical Editorial Review \u00b7 Author role: Industrial Software Engineering\n\nStep-by-step UNS implementation guide for industrial architects: MQTT topology, ISA-95 namespace design, Sparkplug B payloads, Edge Gateway bridging, and a 5-phase rollout roadmap.\n\nUNS IIoT MQTT Architecture Industry 4.0 Digital Transformation\n\npriority\\_high\n\nEvidence, Scope, and Limits\n\n- **Evidence level:** Medium (field observations + public standards; not a universal benchmark).\n- **Measurement scope:** Performance and economic outcomes vary by hardware, topology, workload shape, sampling profile, and process constraints.\n- **Primary references:** [IEC 62443](https://en.wikipedia.org/wiki/IEC_62443), [ISA-95 / IEC 62264](https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard), [NIST SP 800-82r3](https://csrc.nist.gov/pubs/sp/800/82/r3/final).\n- **Implementation docs:** [Edge Architecture](https://proxus.io/docs/core-concepts/edge-architecture/) and [Unified Namespace](https://proxus.io/docs/core-concepts/unified-namespace/).\n\n## The Architect's Guide to Unified Namespace: From Automation Pyramid to Real-Time Event Architecture\n\ninfo\n\nHow This Guide Differs\n\nLooking for a conceptual introduction to UNS? Read [What is a Unified Namespace for IIoT?](https://proxus.io/blog/unified-namespace-for-iiot/) first. Migrating from legacy SCADA? See [SCADA is Dead, Long Live UNS](https://proxus.io/blog/scada-is-dead-long-live-unified-namespace/). This guide is an **implementation blueprint** - it assumes you already understand the \"why\" and focuses on the \"how.\"\n\nThe industrial sector is navigating the most significant architectural shift in its history. In my experience architecting data pipelines for over 50 global manufacturing sites, I've seen the Automation Pyramid's structural limitat",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "the-roles-of-erp-and-plm-in-manufacturing---now-with-mes",
      "label": "The Roles of ERP and PLM in Manufacturing - now with MES!",
      "type": "source",
      "content": "\n***A quick peek into some research on \u2026*** the role Manufacturing Execution Systems (**MES**) play alongside **ERP** and **PLM** to **help manufacturers improve their business and increase product profitability**. I have researched, posted, and discussed the [complementary and integrated roles of ERP and PLM](http://tech-clarity.com/clarityonplm/2010/closing-loop-product-innovation-erp-plm/) numerous times. [![](https://i0.wp.com/tech-clarity.com/clarityonplm/wp-content/uploads/2011/01/ERP-PLM-MES-Graphic-300x179.jpg?resize=300%2C179 \"ERP-PLM-MES Graphic\")](https://i0.wp.com/tech-clarity.com/clarityonplm/wp-content/uploads/2011/01/ERP-PLM-MES-Graphic.jpg) But the question would come up, \u201c ***how does MES fits into the picture***?\u201d In my graphic I had placeholders for more execution-oriented systems such as MES, Maintenance Repair & Overhaul (MRO), and others. But I made a conscious decision not to complicate the already complicated subject of integrating the manufacturing systems ecosystem. Now that **the industry has made progress in understanding how to integrate ERP and PLM, the time has come to address the role of MES**. The details can be found in [Tech-Clarity Insight: Integrating PLM and MES \u2013 Realizing the Digital Factory](http://tech-clarity.com/plm-mes/2154 \"Integrating PLM and MES White Paper\").\n\n**The Research Findings \u2013 Preface** (or possibly rambling, you be the judge)\n\nFor you engineers reading this, do you remember freshman year when they taught you how to calculate stress and strain on rigid bodies? Then as you progressed in your learning, you found out that it was a gross oversimplification and didn\u2019t really apply to real world materials? Or for you brainier people when someone admits that the rules of physics and mathematics are just models that seem to work (for the most part) but aren\u2019t really hard and true rules? Or for business-oriented readers, the first time you heard an accountant ask \u201cwhat would you like the numbers to be?\u201d instead of giv",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "the-impact-of-digital-twins-on-the-evolution-of-intelligent-manufacturing-and-industry-40",
      "label": "Abstract",
      "type": "source",
      "content": "\n. 2023 Jun 7;3(3):11. doi: [10.1007/s43674-023-00058-y](https://doi.org/10.1007/s43674-023-00058-y)\n\n## Abstract\n\nAs the adoption of Industry 4.0 advances and the manufacturing process becomes increasingly digital, the Digital Twin (DT) will prove invaluable for testing and simulating new parameters and design variants. DT solutions build a 3D digital replica of the physical object allowing the managers to develop better products, detect physical issues sooner, and predict outcomes more accurately. In the past few years, Digital Twins (DTs) dramatically reduced the cost of developing new manufacturing approaches, improved efficiency, reduced waste, and minimized batch-to-batch variability. This paper aims to highlight the evolution of DTs, review its enabling technologies, identify challenges and opportunities for implementing DT in Industry 4.0, and examine its range of applications in manufacturing, including smart logistics and supply chain management. The paper also highlights some real examples of the application of DT in manufacturing.\n\n**Keywords:** Digital twins, Digital twin, Digital twin technologies, Digital shadow, Digital model, Industry 4.0, Digital twins challenges, Supply chain management, Smart logistics\n\n## Introduction\n\nConsumer buying habits and supply chain disruptions created by the pandemic forced industries to re-evaluate their operations and incorporate robust digital platforms. For the past 15 years, consumers have increasingly embraced e-commerce and digital channels. This shift to e-commerce significantly accelerated during the pandemic (McKinsey and Company [^43]). In addition, the buyers\u2019 habits changed to home ordering\u2013a shift that industry experts forecast to be permanent. This consumer shift brought changes to supply chain disruptions\u2014a dramatic need for increased agility and resilience in the consumer product manufacturing industries. As a result, manufacturers must incorporate robust digital platforms in a post-pandemic marketplac",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "thread-by-ansubkhan",
      "label": "Thread by @ansubkhan",
      "type": "source",
      "content": "\n**Ansub** @ansubkhan [2026-04-13](https://x.com/ansubkhan/status/2043723975025664474)\n\na lot of you asked for a deeper look at the @karpathy inspired local wiki setup i posted before.\n\nhere\u2019s the full video of installing and walking through Wiki OS and seeing how it works.\n\n---\n\n**Ansub** @ansubkhan [2026-04-13](https://x.com/ansubkhan/status/2043724241150099889)\n\nIf you prefer Youtube:\n\n---\n\n**Nurnabi** @nurnabidesigner [2026-04-13](https://x.com/nurnabidesigner/status/2043725715204694261)\n\nGreat walkthrough really shows how flexible Wiki OS can be for local knowledge bases.\n\n---\n\n**Ansub** @ansubkhan [2026-04-13](https://x.com/ansubkhan/status/2043725846876471558)\n\nglad it helped \ud83d\ude0a\n\n---\n\n**Amjad** @Amjaddsn [2026-04-13](https://x.com/Amjaddsn/status/2043733461270180198)\n\nBeautifully crafted as well \ud83d\udd25",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "top-tips-for-mastering-successful-engineering-change-management",
      "label": "Mastering Engineering Change Management: Tips for Success",
      "type": "source",
      "content": "\n## Mastering Engineering Change Management: Tips for Success\n\n![Mastering Engineering Change Management: Tips for Success - Artsyl](https://www.artsyltech.com/img/webp/mastering-engineering-change-management.webp)\n\nEngineering change management is the process of managing modifications to your products. It helps in maintaining quality, reducing costs, and keeping projects on track. This article will explain what [engineering change management](https://www.openbom.com/engineering-change-management) is, why it\u2019s critical, and how to implement it step-by-step.\n\n## Key Takeaways\n\n- Engineering change management involves a structured process of creating, reviewing, and approving changes, essential for maintaining product quality and project efficiency.\n- Key components include Engineering Change Requests (ECR), Engineering Change Orders (ECO), and Engineering Change Notices (ECN), each playing a vital role in evaluating and implementing changes.\n- Utilizing tools like OpenBOM enhances the change management process by automating tracking, improving collaboration, and ensuring accurate documentation across related systems.\n![Achieve Success with docAlpha! - Artsyl](https://www.artsyltech.com/img/webp/understanding-engineering-change-management.webp)\n\n### Achieve Success with docAlpha!\n\nStreamline document management and [automate document processes](https://www.artsyltech.com/products/docAlpha) to improve efficiency and drive business results.\n\n[Book a demo now](https://www.artsyltech.com/Demo)\n\n## Understanding Engineering Change Management\n\n[Engineering change management](https://www.openbom.com/change-management) involves the process of creating, reviewing, and approving engineering changes. Its primary purpose is to control changes to product information during various stages of product development, manufacturing, and support. Mitigating disruptions, reducing costs due to inefficiencies like delays and errors, and ensuring accurate and up-to-date product information ar",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "toyota-vs-tesla-what-manufacturing-mindsets-reveal-about-quality-and-culture",
      "label": "The Same Building, Three Very Different Cultures",
      "type": "source",
      "content": "\n**tl;dr**: Toyota and Tesla approach manufacturing with fundamentally different mindsets. Toyota emphasizes built-in quality, respect for people, and continuous improvement. Tesla has often prioritized speed, automation, and fixing defects after the fact. Tesla's quality has improved since the \u201cproduction hell\u201d days of 2017-2018, but inconsistencies persist \u2014 especially at Fremont. The NUMMI factory tells both stories, and the lessons apply far beyond auto manufacturing. Updated for 2026.\n\n## The Same Building, Three Very Different Cultures\n\nThe Tesla factory in Fremont, California has had three lives. From 1961 to 1982, it was a GM plant \u2014 one of the worst in the company. Quality was terrible. Labor relations were toxic. GM shut it down.\n\nIn 1984, Toyota and GM reopened it as [NUMMI](https://www.leanblog.org/tag/nummi/), a joint venture run under [Toyota's management system](https://global.toyota/en/company/vision-and-philosophy/production-system/). Using largely the same workforce that GM had given up on, NUMMI became one of the highest-quality plants in North America. The difference wasn't the workers. It was the management system \u2014 standardized work, built-in quality, [respect for people](https://www.leanblog.org/respect-for-people-lean/), and the expectation that every team member would speak up about problems.\n\nRead more: [Lessons from NUMMI's Closing: NPR's \u201cEnd of the Line\u201d and What GM Failed to Learn](https://www.leanblog.org/2010/03/npr-story-on-the-end-of-the-line-at-nummi/)\n\n[Embed from Getty Images](http://www.gettyimages.com/detail/94956276)\n\n<iframe src=\"https://embed.gettyimages.com/embed/94956276?et=oo002xLjS8tVFS1Kj_zN8Q&amp;tld=com&amp;sig=4AKIy6ka2IbRRy4KJWbpGrRgsUm3_j-79eD2Sk8031w=&amp;caption=true&amp;ver=2\" frameborder=\"0\" width=\"594px\" height=\"396px\"></iframe>\n\n---\n\nTesla bought the building in 2010. At the time, they had a partnership with Toyota, and their VP of Manufacturing, Gilbert Passin, had significant Toyota experience, including ru",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "unified-namespace-mqtt-at-a-glance",
      "label": "MQTT in Unified Namespace at a glance",
      "type": "source",
      "content": "\n![Unified Namespace MQTT architecture illustrating best practices, data flow patterns, and common pitfalls in industrial OT/IT integration.](https://cdn-ttpsc.ttpsc.com/content/uploads/2026/01/TT-PSC-TT-PSC-WEB-Unified-Namespace-MQTT-Best-practices-patterns-and-common-pitfalls-EN-main-2.webp)\n\n## MQTT in Unified Namespace at a glance\n\nMQTT is a natural foundation for a Unified Namespace, enabling scalable, real-time, event-driven data sharing without point-to-point integrations. In a UNS, MQTT acts as a central pub/sub backbone where OT and IT systems exchange contextualized data via a shared topic hierarchy, often aligned with ISA-95. Its lightweight design and features such as retained messages, LWT, QoS, and topic-based access control make it well suited for handling industrial telemetry, state, and events at scale.\n\n## Key takeaways of article\n\n- A **Unified Namespace (UNS)** is a shared, structured data layer where OT/IT systems **publish and subscribe** instead of building point-to-point integrations.\n- **MQTT** is a common foundation for UNS because pub/sub decouples producers from consumers and scales across diverse systems and sites.\n- A well-designed **topic hierarchy** (often aligned to **ISA-95: Enterprise/Site/Area/Line/Cell**) is the backbone of a usable UNS.\n- The real value comes from **data contracts**: naming rules + payload schemas + consistent timestamp / unit / quality.\n- Reliable UNS depends on **state management patterns**: retained \u201ccurrent state\u201d, LWT/health topics, and fit-for-purpose QoS.\n- **Security and governance** (ACLs, ownership, versioning) matter as much as broker choice \u2013 most UNS failures are organizational, not technical.\n- **Vanilla MQTT and Sparkplug B** both work: choose based on interoperability needs, lifecycle/state requirements, and operational complexity.\n\nIndustrial organizations still struggle with data spaghetti \u2013 a result of fragmented data architectures built on point-to-point integrations between OT and IT systems",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "untitled",
      "label": "Untitled",
      "type": "source",
      "content": "\n",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "what-is-obsolete-inventory-and-how-to-prevent-it",
      "label": "What is obsolete inventory?",
      "type": "source",
      "content": "\nNext to inadequate stock levels, inventory losing its value is a key concern among companies. Capable inventory management software is your best tool for increasing stock control and thus avoiding both issues. In this post, we look at obsolete inventory \u2013 how to prevent it and what to do when it happens.\n\n![](https://www.mrpeasy.com/blog/wp-content/uploads/2024/08/obsolete-inventory.jpg)\n\n*You can also listen to this article:*\n\n<iframe title=\"What Is Obsolete Inventory and How to Prevent It?\" height=\"150\" width=\"100%\" src=\"https://www.podbean.com/player-v2/?i=y8u5v-186c282-pb&amp;from=pb6admin&amp;share=1&amp;download=1&amp;rtl=0&amp;fonts=Arial&amp;skin=1&amp;font-color=&amp;logo_link=episode_page&amp;btn-skin=3\"></iframe>\n\n## What is obsolete inventory?\n\nObsolete inventory is any inventory that a company can no longer sell or use due to lack of demand. This mostly occurs when goods reach the end of their product life cycle or in cases of sudden sales disruptions or demand forecasting mistakes. Obsolescence can also result from poor inventory management, such as when inventory items are forgotten, damaged, or expire before they\u2019re sold or used. In these latter cases, obsolete items are usually called dead stock.\n\nAll kinds of inventory may become obsolete, not just finished products. For manufacturers, obsolete inventory can also include raw materials and components or even work-in-process (WIP) inventory because when demand dries up, items required for the production effort become obsolete.\n\nObsolete inventory is sometimes also referred to as excess stock or slow-moving inventory. However, these terms are slightly different. Slow-moving or [excess inventory](https://www.mrpeasy.com/blog/excess-inventory/) refers to items that have diminished demand and are thus in danger of becoming obsolete down the line, mostly because they are overstocked, for instance, because of poor demand forecasting.\n\n## Obsolete inventory accounting\n\nIf not properly managed, obsolete inv",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "what-is-engineering-change-management",
      "label": "Introduction",
      "type": "source",
      "content": "\n## Introduction\n\nEngineering Change Management (ECM) is a structured, end-to-end process that helps organizations identify, evaluate, approve, implement, and track changes across product designs, requirements, specifications, and manufacturing workflows. In today\u2019s rapidly evolving engineering and manufacturing environments, spanning aerospace, automotive, medical devices, and industrial systems, managing engineering changes efficiently is essential for ensuring product quality, compliance, safety, and cost control.\n\nAt its core, Engineering Change Management ensures that every Engineering Change Request (ECR), Engineering Change Order (ECO), and Engineering Change Notice (ECN) is handled through a standardized and traceable workflow. This prevents design errors, reduces rework, improves cross-team collaboration, and maintains alignment across engineering, quality, manufacturing, and supply chain teams.\n\nAs products grow more complex and regulatory requirements become stricter, organizations rely on ECM workflows and engineering change management software to automate approvals, enhance traceability, and maintain complete control over the product lifecycle. Understanding what engineering change management is, why it matters, and how it works is crucial for any engineering, quality, or product development team striving for efficiency and compliance.\n\n## What Is Engineering Change Management?\n\nEngineering Change Management (ECM) is a structured and standardized process used to control, evaluate, implement, and track modifications across product designs, engineering documents, requirements, specifications, and manufacturing processes. Its core purpose is to ensure that every engineering change, whether minor or major, is reviewed, approved, and executed in a controlled, traceable, and compliant manner.\n\nIn simple terms, ECM ensures that the right changes are made at the right time, by the right stakeholders, with a full understanding of risks, impacts, and downstream e",
      "tags": [],
      "status": "raw",
      "category": "source"
    },
    {
      "id": "what-is-hardware-in-the-loop-testing",
      "label": "Components in a Hardware-in-the-Loop Simulation",
      "type": "source",
      "content": "\n**Learn More**\n\n[Ansys AVxcelerate Sensors Software Leverages NI-RDMA for Hardware-in-the-loop (HiL) Testing](https://www.ansys.com/blog/avxcelerate-sensors-use-ni-rdma-hil-testing)\n\n[NI and Ansys Help Develop Faster and Safer ADAS Technology](https://www.ansys.com/blog/ni-and-ansys-partner-to-drive-home-seamless-solutions-for-autonomy-customers)\n\n[Charting and Validating the Course Ahead with Keysight and Digital Mission Engineering](https://www.ansys.com/blog/validate-the-course-with-keysight-digital-mission-engineering)\n\n**This article explains how engineers use hardware-in-the-loop (HIL) testing to simulate real-world systems where they can test their designs and ensure functionality. It describes the components used, its advantages, and how numerical simulation is applied.**\n\nHardware-in-the-loop (HIL) testing is a technique used by engineers for testing and validating embedded systems software. HIL works by electronically connecting a control unit running the software to an accurate simulation of the sensors and actuators controlled by an embedded system.\n\nThe simulated system can consist of both virtual and physical models representing real-world systems. Engineers use HIL test systems to test the functionality of their software in real time in a controlled environment before deploying their solution in actual vehicles, machines, devices, or systems. As the products and software they use become more complex and involved in safety-critical applications, HIL testing\u2019s importance has grown.\n\n## Components in a Hardware-in-the-Loop Simulation\n\nThe key components of a hardware-in-the-loop simulation system are either part of the control device, the simulation plant, or the simulated hardware (sometimes called a digital twin). When combined, these components create a closed-loop, real-time simulation of the control system.\n\n### Control Software\n\nThe software under test is the primary component in the control unit part of the test setup. It consists of the actual c",
      "tags": [],
      "status": "raw",
      "category": "source"
    }
  ],
  "links": [
    {
      "source": "as9100d-npi-clauses",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "moc--npi-process"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "design-reviews--pdr-cdr-trr"
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
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "moc--npi-process"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "configuration-management-basics"
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
      "source": "aerospace-npi-process-overview",
      "target": "ppap-in-aerospace--as9145"
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
      "target": "configuration-management-basics"
    },
    {
      "source": "configuration-management-basics",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "configuration-management-basics",
      "target": "design-reviews--pdr-cdr-trr"
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
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "moc--npi-process"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "configuration-management-basics"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "design-reviews--pdr-cdr-trr"
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
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "pfmea-and-dfmea"
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
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "moc--digital-systems",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "moc--digital-systems",
      "target": "configuration-management-basics"
    },
    {
      "source": "moc--digital-systems",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "moc--npi-process",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "moc--npi-process",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "moc--npi-process",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "moc--npi-process",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "moc--npi-process",
      "target": "configuration-management-basics"
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
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "moc--npi-process"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "design-reviews--pdr-cdr-trr"
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
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "pfmea-and-dfmea"
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
      "target": "ppap-in-aerospace--as9145"
    }
  ]
};