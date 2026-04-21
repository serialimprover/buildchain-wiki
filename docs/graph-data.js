const graphData = {
  "nodes": [
    {
      "id": "as9100d-npi-clauses",
      "title": "AS9100D NPI Clauses",
      "type": "concept",
      "description": "**AS9100D** (Revision D, current) is the aerospace and defense quality management standard. It combines ISO 9001:2015 base requirements with additional aerospace-specific controls for configuration ma",
      "content": "# AS9100D NPI Clauses\n\n## Overview\n\n**AS9100D** (Revision D, current) is the aerospace and defense quality management standard. It combines ISO 9001:2015 base requirements with additional aerospace-specific controls for configuration management, design, product safety, and supplier management.\n\nDuring New Product Introduction (NPI), four AS9100D clauses are most critical:\n1. **8.1** \u2014 Operational Planning (what must be done before design/production starts)\n2. **8.3** \u2014 Design and Development (design reviews, FMEA, requirements traceability)\n3. **8.4.4** \u2014 Configuration Management (change control, baselines)\n4. **8.5.1** \u2014 Production Control (manufacturing controls, process capability, FAI)\n\n---\n\n## Clause 8.1 \u2014 Operational Planning and Control\n\n### Requirement (ISO 9001 Section 8.1)\nDetermine the processes needed for product realization; establish criteria and methods for process control; manage external processes; ensure processes meet customer requirements.\n\n### Aerospace Addition (AS9100D)\nAdditional planning requirements for **safety** and **configuration management**:\n- Document how product safety will be achieved and maintained (safety plan)\n- Identify potential product safety hazards and mitigations\n- Establish configuration management approach (baselines, change control)\n- Plan for counterfeit parts prevention (supplier controls, material authentication)\n\n### NPI Context\n**Pre-Design Phase \u2014 Program Planning**\n- Program manager and chief engineer develop:\n  - **Program Plan** \u2014 schedule, budget, resources, risk management approach\n  - **Configuration Management Plan** \u2014 how baselines will be established, change control process, CI list, document structure\n  - **Quality Plan** \u2014 inspection points, test requirements, acceptance criteria, supplier quality expectations\n  - **Design Plan** \u2014 design review schedule, DFMEA process, verification/validation testing plan\n  - **Supplier Quality Plan** \u2014 supplier selection criteria, qualification requirements, PPAP levels, supply chain risk mitigation\n\n**Evidence Required for Audit/Review:**\n- Documented program plan and schedule\n- Configuration Management Plan (CM plan) defining baselines and change control\n- Design plan with DFMEA timeline\n- Quality plan with FAI/PPAP requirements\n- Supplier risk assessment and qualification plan\n\n---\n\n## Clause 8.3 \u2014 Design and Development\n\n### Requirement (ISO 9001 Section 8.3)\nPlan, control, and verify design processes; establish design inputs (requirements), outputs (specifications), review at appropriate stages, manage changes, and validate designs are suitable for use.\n\n### Aerospace Addition (AS9100D)\n**Design Assurance** \u2014 additional mandatory controls:\n- **Design reviews** \u2014 PDR, CDR, TRR per MIL-STD-1521 or equivalent; formal gate approvals\n- **Design FMEA** \u2014 mandatory; identify and mitigate design failure modes; RPN scoring\n- **Requirements traceability** \u2014 every requirement traced to design feature and verified by test/analysis\n- **Design margins** \u2014 demonstrate safety margins in critical performance parameters; justify margin adequacy\n- **Design change control** \u2014 changes after design release require approval (ECN process)\n- **Aerospace specialty processes** \u2014 for processes like heat treat, plating, painting, welding: establish and control via special process procedures with parameter monitoring\n\n### NPI Context\n\n**Preliminary Design Phase (PDR)**\n- Requirements baseline established (from Clause 8.1 planning)\n- Preliminary Design FMEA initiated; high-risk areas identified\n- System architecture defined; interface control documents created\n- Preliminary design review conducted; requirements allocation confirmed\n- Manufacturing feasibility assessed (preliminary; \"can we make this?\")\n\n**Detailed Design Phase (CDR)**\n- Complete design drawings and specifications created\n- Final Design FMEA completed; RPN \u2265 100 items require mitigation\n- Traceability matrix completed (requirement \u2192 design feature \u2192 test/analysis)\n- Design margins verified by analysis or simulation\n- Manufacturing process plan developed in detail\n- Critical Design Review conducted; design frozen for production\n- Design assurance record compiled (FMEA, traceability, margin analysis)\n\n**Evidence Required:**\n- Requirements specification (baseline)\n- Design drawings and specifications (baseline)\n- Design FMEA with high-risk item mitigations\n- Requirements traceability matrix (RTM)\n- Design review minutes and action items (PDR/CDR)\n- Margin analysis or design safety case\n- Preliminary manufacturing process plan\n- Design change control procedure\n\n### How AS9100D Differs from ISO 9001\n\n| Aspect | ISO 9001:2015 | AS9100D |\n|--------|---|---|\n| **Design Reviews** | Required; not specifically timed | Must follow MIL-STD-1521 (PDR/CDR/TRR formal gates) |\n| **FMEA** | Recommended (quality risk analysis) | **Mandatory** \u2014 Design FMEA and Process FMEA required |\n| **Traceability** | Requirement handling adequate | **Comprehensive RTM required** \u2014 every requirement traced to design and test/analysis |\n| **Design Margins** | Not explicitly required | **Mandatory** \u2014 critical parameters must have documented safety margins |\n| **Special Processes** | General process control | **Aerospace specialty processes** (heat treat, plating, welding, NDT) require separate qualification and control procedures |\n| **Design Assurance** | Not defined | **Design Assurance File** required \u2014 compiled evidence of design control (FMEA, traceability, verification, validation) |\n\n---\n\n## Clause 8.4.4 \u2014 Configuration Management\n\n### Requirement (ISO 9001 Section 8.5.6 \u2014 Design Changes)\nControl design changes; assess impact; gain approval before implementation.\n\n### Aerospace Addition (AS9100D \u2014 Fully Elaborated)\n**Configuration Management System** \u2014 mandatory, detailed:\n- **Configuration identification** \u2014 baselines, document structure, version control\n- **Configuration control** \u2014 change review, CCB approval, impact assessment\n- **Configuration status accounting** \u2014 track what version of a product is in what location/configuration\n- **Configuration audits** \u2014 FCA (Functional) and PCA (Physical) verify hardware matches approved design\n- **Counterfeit parts prevention** \u2014 supplier controls, material authentication, traceability\n\n### NPI Context\n\n**Design Freeze (CDR)**\n- Product baseline approved; configuration item list finalized\n- Configuration Control Board (CCB) established (membership: design, manufacturing, quality, customer)\n- Change control procedure documented and enforced\n- Design assurance file initiated\n\n**Post-CDR / During Pilot Production**\n- Any design changes require ECN submittal\n- ECN reviewed by CCB; impact assessment documented (design, manufacturing, suppliers, schedule, cost, field retrofit)\n- ECN approved before implementation\n- Design drawings updated; revision letter incremented (A \u2192 B \u2192 C, etc.)\n- Supplier notified of design changes; design release updated\n\n**TRR / Production Release**\n- Configuration baseline finalized (design and manufacturing process)\n- All design changes post-CDR documented and traced\n- Functional Configuration Audit (FCA) conducted \u2014 design verified to meet requirements\n- Physical Configuration Audit (PCA) conducted \u2014 first articles inspected and verified to match design\n- Configuration item baseline established for production\n\n**Evidence Required:**\n- Configuration Management Plan and procedures\n- Baseline version identification (functional, allocated, product)\n- Configuration Item List (CI definitions and scope)\n- Change control forms (ECN/ECO) with approval evidence\n- CCB meeting minutes\n- Traceability of changes to field retrofit decisions\n- FCA/PCA audit reports\n\n---\n\n## Clause 8.5.1 \u2014 Production Control\n\n### Requirement (ISO 9001 Section 8.5)\nPlan and control production processes; manage customer-supplied property; control product labeling/identification; manage process parameter control.\n\n### Aerospace Addition (AS9100D)\n**Production Controls** \u2014 more rigorous:\n- **Process capability** \u2014 Cpk/Ppk \u2265 1.33 required for critical characteristics\n- **Special processes** \u2014 aerospace specialty processes (heat treat, plating, welding) require separate approval and monitoring\n- **First Article Inspection** \u2014 per AS9102B; FAIR required before production release\n- **Counterfeit parts prevention** \u2014 supplier lot traceability, authentication procedures\n- **Rework controls** \u2014 rework procedures, approval authority, acceptance criteria\n- **Inspection and test records** \u2014 sample sizes, acceptance levels, evidence preserved\n- **Product identification and traceability** \u2014 serial numbering, lot codes, traceability to material lots and supplier lots (enables retrofit identification)\n\n### NPI Context\n\n**Pilot/LRIP Production**\n- Manufacturing work instructions developed in detail\n- Process parameters defined; control limits established\n- Statistical Process Control (SPC) charting initiated\n- Process FMEA completed; high-risk items identified and controls put in place\n- Supplier process capability studies conducted (Cpk/Ppk demonstrations)\n- First Article Inspection (FAI) executed; FAIR generated\n- PPAP submitted to customer (Level 1, 2, or 3 depending on risk)\n- Rework procedures documented (if scrap/rework anticipated)\n- Lot/serial number system established for traceability\n\n**Production Release (TRR)**\n- Process capability demonstrated (Cpk \u2265 1.33 minimum)\n- All special processes qualified and approved\n- FAI complete; FAIR approved by customer\n- PPAP approval received from customer\n- Process control plan baseline established\n- SPC monitoring procedures documented\n- Supplier lot traceability procedure established\n- Production release authorized\n\n**Evidence Required:**\n- Manufacturing work instructions and process flow diagrams\n- Process FMEA with high-risk item controls\n- Process capability study (Cpk/Ppk) data\n- Statistical Process Control (SPC) procedure and initial control charts\n- First Article Inspection Report (FAIR)\n- PPAP submission documentation and customer approval\n- Special process approvals (heat treat, plating, welding certificates)\n- Inspection and test procedures (sampling plans, acceptance criteria)\n- Rework procedures (if applicable)\n- Supplier lot traceability evidence\n\n### How AS9100D Differs from ISO 9001\n\n| Aspect | ISO 9001:2015 | AS9100D |\n|--------|---|---|\n| **Process Capability** | Process control adequate | **Cpk/Ppk \u2265 1.33 required** for critical characteristics; higher for safety-critical parts |\n| **Special Processes** | Process parameter control | **Aerospace specialty processes** require separate approval, monitoring, and certification (heat treat, plating, welding, NDT) |\n| **First Article Inspection** | Incoming inspection/initial sample | **FAI per AS9102B mandatory** \u2014 produces FAIR (detailed first article evidence) |\n| **Rework** | Documented; no explicit authority approval | **Rework requires documented procedure and approval authority** \u2014 record of what was reworked, how, and by whom |\n| **Traceability** | Lot number tracking sufficient | **Full traceability required** \u2014 serial numbers/lot codes link to material lot, supplier lot, manufacturing date, SPC batch (enables retrofit) |\n\n---\n\n## Integration Across Clauses\n\nNPI follows a sequential path through AS9100D requirements:\n\n```\nClause 8.1 \u2014 Operational Planning\n  \u2193 (Program plan, CM plan, quality plan)\nClause 8.3 \u2014 Design & Development\n  \u2193 (Design reviews PDR/CDR, DFMEA, traceability, design assurance)\nClause 8.4.4 \u2014 Configuration Management\n  \u2193 (Baselines, change control, ECN process, audits)\nClause 8.5.1 \u2014 Production Control\n  \u2193 (Process FMEA, capability, FAI, PPAP, rework, traceability)\nProduction Release\n```\n\n---\n\n## Related Concepts\n\n- **[[MOC \u2014 NPI Process]]** \u2014 Hub for all NPI concepts\n- **[[Aerospace NPI Process Overview]]** \u2014 Phases where these clauses apply\n- **[[Design Reviews \u2014 PDR CDR TRR]]** \u2014 Clause 8.3 formal gate reviews\n- **[[PFMEA and DFMEA]]** \u2014 Clause 8.3 (DFMEA) and 8.5.1 (PFMEA) requirements\n- **[[Configuration Management Basics]]** \u2014 Clause 8.4.4 detailed\n- **[[First Article Inspection \u2014 FAI and FAIR AS9102B]]** \u2014 Clause 8.5.1 FAI requirement\n- **[[PPAP in Aerospace \u2014 AS9145]]** \u2014 Clause 8.5.1 supplier approval requirement\n\n## Sources\n\n- AS9100D (Revision D) \u2014 Sections 8.1, 8.3, 8.4.4, 8.5.1\n- ISO 9001:2015 (base standard; AS9100D adds aerospace requirements)\n- MIL-STD-1521B (Technical Reviews; governs design review requirements in Clause 8.3)\n- MIL-HDBK-61 (Configuration Management; governs Clause 8.4.4)\n\n---\n\n**Notes:**\n- %%VERIFY%% AS9100D Revision D current status \u2014 confirm against published standard\n- %%VERIFY%% Cpk thresholds (1.33 baseline, 1.67 defense programs) \u2014 vary by customer; always confirm with procurement/customer quality\n- %%VERIFY%% MIL-STD-1521B applicability \u2014 some programs use equivalent standards (e.g., customer internal standards); always reference program documentation\n\nLast updated: 2026-04-13",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense",
        "standard/AS9100D",
        "system/QMS"
      ],
      "status": "synthesized",
      "url": "/concepts/as9100d-npi-clauses",
      "relatedConcepts": [
        "moc--npi-process",
        "design-reviews--pdr-cdr-trr",
        "configuration-management-basics",
        "pfmea-and-dfmea",
        "first-article-inspection--fai-and-fair-as9102b",
        "aerospace-npi-process-overview",
        "ppap-in-aerospace--as9145",
        "as9100d-npi-clauses"
      ],
      "supportingArticles": []
    },
    {
      "id": "aerospace-npi-process-overview",
      "title": "Aerospace NPI Process Overview",
      "type": "concept",
      "description": "New Product Introduction (NPI) in aerospace and defense is a highly structured, gate-driven process that takes a concept from design through production release. Unlike commercial consumer electronics",
      "content": "# Aerospace NPI Process Overview\n\n## What is Aerospace NPI?\n\nNew Product Introduction (NPI) in aerospace and defense is a highly structured, gate-driven process that takes a concept from design through production release. Unlike commercial consumer electronics (which use EVT/DVT/PVT), aerospace follows a more rigorous framework with mandatory design reviews, First Article Inspection (FAI), and Production Part Approval Process (PPAP) under standards like AS9100D and AS9145.\n\n## Key Phases\n\n### 1. Concept & Requirements (Pre-Design)\n- Define program objectives, requirements, and constraints\n- Establish initial design teams and supplier strategy\n- Compliance mapping (AS9100D clauses applicable to the product)\n\n### 2. Preliminary Design (Design Phase)\n- Complete system and subsystem-level design\n- Conduct **Preliminary Design Review (PDR)**; verify requirements are met\n- Identify critical design parameters, materials, and manufacturing risks\n- Initial DFMEA (Design FMEA)\n\n### 3. Critical Design & Detailed Engineering\n- Finalize all design details, drawings, specifications\n- Conduct **Critical Design Review (CDR)**; confirm design is robust and manufacturable\n- Complete DFMEA; allocate requirements to suppliers\n- Generate Bill of Materials (BOM)\n- Plan test and validation strategy\n\n### 4. Production Design & Prototype Build (Engineering Phase)\n- Build and test prototype/breadboard units (equivalent to EVT in consumer electronics)\n- Refine design based on test results\n- Supplier design qualification begins\n- Prepare manufacturing processes and tooling\n\n### 5. Pilot/Pre-Production (NPI Phase)\n- Build low-rate initial production (LRIP) or pilot units\n- Complete all qualification testing\n- Execute **First Article Inspection (FAI)** \u2014 per AS9102B\n- Supplier process validation and PPAP submission \u2014 per AS9145\n- Conduct **Test Readiness Review (TRR)**; confirm readiness for full production\n\n### 6. Production Release\n- Approve design, suppliers, and manufacturing processes\n- Release design to production\n- Establish configuration baseline\n- Begin production runs\n\n### 7. Sustaining\n- Manage engineering changes (ECNs) via Configuration Management\n- Monitor reliability, obsolescence, supplier performance\n- Sustain production support\n\n## Timeline\n\nA typical aerospace NPI for a moderate-complexity product spans **18\u201336 months** from concept to production, depending on:\n- Product complexity\n- Supplier maturity\n- Regulatory requirements (DO-254 for avionics, AS9100D for manufacturing, etc.)\n- Test and validation scope\n\nCommercial electronics compress this to 6\u201312 months; aerospace trades speed for reliability and traceability.\n\n## Mandatory Deliverables at Each Gate\n\n| Phase | Design Reviews | Key Documents | Supplier Readiness |\n|-------|---|---|---|\n| Pre-Design | Program Review | System Spec, Risk Register | Supplier RFQ |\n| Preliminary Design | **PDR** | Requirements, DFMEA V1, BOM (preliminary) | Supplier Design Bid |\n| Critical Design | **CDR** | Design Drawings, Specifications, DFMEA Final, Test Plan | Supplier Design Contract |\n| Prototype | (Internal reviews) | Prototype test reports, design changes log | Supplier Samples |\n| Pilot/LRIP | **TRR** | Process specs, **FAIR** (FAI Report), PPAP Level docs | **PPAP Submission** |\n| Production | Configuration Baseline | Design Release, Supplier Approval Status | Full Production Readiness |\n\n## Key Standards & Frameworks\n\n- **AS9100D** \u2014 Quality Management System requirements; clause 8.3 (design & development), 8.5.1 (production controls)\n- **AS9102B** \u2014 First Article Inspection; defines FAIR (First Article Inspection Report) contents\n- **AS9145** \u2014 Qualification and Approval of Aerospace Suppliers; includes PPAP tailored for aerospace\n- **MIL-STD-1521** \u2014 Technical Reviews; governs PDR, CDR, TRR format and entry/exit criteria (referenced in aerospace contracts)\n\n## Differences from Commercial Electronics (EVT/DVT/PVT)\n\n| Aspect | Commercial (EVT/DVT/PVT) | Aerospace (PDR/CDR/LRIP) |\n|--------|---|---|\n| Design Reviews | Often informal, 1\u20132 internal reviews | Formal gates: PDR, CDR, TRR with customer/supplier attendance |\n| Supplier Qualification | Speed-to-market focus | PPAP Level 3-5; FAI per AS9102B mandatory |\n| Traceability | BOM, version control | Configuration baseline, change authority boards, serial number traceability |\n| Documentation | Design files, firmware builds | FAIR, PPAP evidence packs, Design Assurance records |\n| Timeline | 6\u201312 months | 18\u201336 months |\n| Risk Management | FMEA optional | DFMEA & PFMEA mandatory; risk review at each gate |\n\n## Related Concepts\n\n- **[[MOC \u2014 NPI Process]]** \u2014 Hub for all NPI concepts\n- **[[Design Reviews \u2014 PDR CDR TRR]]** \u2014 Detailed explanation of each review's purpose and criteria\n- **[[PPAP in Aerospace \u2014 AS9145]]** \u2014 Supplier approval process and submission levels\n- **[[First Article Inspection \u2014 FAI and FAIR AS9102B]]** \u2014 FAI process and FAIR deliverable\n- **[[Configuration Management Basics]]** \u2014 Change control and baseline management post-production release\n- **[[AS9100D NPI Clauses]]** \u2014 Quality standard requirements across NPI phases\n- **[[MOC \u2014 Digital Systems]]** \u2014 PLM, ERP, MES integration supporting NPI\n\n## Sources\n\n- AS9100D (Requirement 8.1 Operational planning, 8.3 Design and development)\n- AS9102B (First Article Inspection specification)\n- AS9145 (Qualification and Approval of Aerospace and Defense Suppliers)\n- MIL-STD-1521B (Technical Reviews)\n\n---\n\n**Note:** %%VERIFY%% Timeline ranges (18\u201336 months) are representative but vary significantly by program complexity and customer requirements. Always reference program-specific plans.\n\nLast updated: 2026-04-13",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense",
        "standard/AS9100D"
      ],
      "status": "synthesized",
      "url": "/concepts/aerospace-npi-process-overview",
      "relatedConcepts": [
        "moc--npi-process",
        "design-reviews--pdr-cdr-trr",
        "configuration-management-basics",
        "moc--digital-systems",
        "first-article-inspection--fai-and-fair-as9102b",
        "as9100d-npi-clauses",
        "ppap-in-aerospace--as9145",
        "aerospace-npi-process-overview"
      ],
      "supportingArticles": []
    },
    {
      "id": "configuration-management-basics",
      "title": "Configuration Management Basics",
      "type": "concept",
      "description": "**Configuration Management** is the discipline of identifying, controlling, and tracking all versions of a product's design, components, materials, and processes throughout its lifecycle. It ensures t",
      "content": "# Configuration Management Basics\n\n## What is Configuration Management (CM)?\n\n**Configuration Management** is the discipline of identifying, controlling, and tracking all versions of a product's design, components, materials, and processes throughout its lifecycle. It ensures that:\n1. **What was approved is what was built** \u2014 design documentation matches manufactured hardware\n2. **Changes are controlled and traceable** \u2014 every design or process change is documented, approved, and communicated\n3. **Historical record is maintained** \u2014 can identify when a change occurred, why, and who approved it\n4. **Obsolescence is managed** \u2014 parts and suppliers are tracked; discontinuations are anticipated and mitigated\n\nCM is mandatory in aerospace under **AS9100D Clause 8.4.4** and referenced throughout design, production, and sustainment phases.\n\n---\n\n## Core CM Concepts\n\n### Configuration Item (CI)\n\nA **Configuration Item** is any component, assembly, or document that is significant enough to require identification, control, and tracking. Examples:\n- A complete product/system (e.g., satellite, launch vehicle)\n- A major subsystem (e.g., flight control computer, propulsion module)\n- A critical component (e.g., valve, sensor, avionics processor)\n- Design documentation (specifications, drawings, schematics)\n- Software (firmware, control algorithms)\n- Manufacturing processes (routing, work instructions, tooling design)\n\nNot everything is a CI \u2014 routine fasteners, consumables, or standard catalog items may not be CIs. The program defines CI list based on risk and complexity.\n\n### Baseline\n\nA **Baseline** is a formally approved snapshot of a Configuration Item at a specific point in time. It serves as the reference point for all future changes. Three types of baselines exist:\n\n#### 1. Functional Baseline\n- **What:** System requirements and intended functions\n- **When:** After requirements review (pre-design)\n- **Content:** System specifications, interface specifications, performance requirements, acceptance criteria\n- **Approval:** Customer and program leadership\n- **Purpose:** Baseline against which designs are measured; foundation for design reviews\n\n#### 2. Allocated Baseline\n- **What:** Design architecture and subsystem requirements\n- **When:** After preliminary design review (PDR) \u2014 post-CDR for detail design\n- **Content:** Subsystem design documents, interface control documents (ICDs), design specifications\n- **Approval:** Design review (PDR/CDR)\n- **Purpose:** Freeze design so manufacturing and supplier design can proceed; foundation for detailed engineering\n\n#### 3. Product Baseline\n- **What:** Final design, all drawings, specifications, and process documentation\n- **When:** After CDR and before production release\n- **Content:** Engineering drawings, bills of materials (BOMs), manufacturing process plans, quality plans, test procedures\n- **Approval:** Design release authority (design review approval or formal design release document)\n- **Purpose:** Authorize production; freeze design for manufacturing; foundation for sustainment and spares support\n\n### Configuration Control\n\n**Configuration Control** is the process of managing changes to a baseline. Once a baseline is approved, no change occurs without:\n1. **Submission** \u2014 originator proposes the change with rationale\n2. **Review** \u2014 engineering, manufacturing, quality, and customer (if required) review impact\n3. **Approval** \u2014 Configuration Control Board (CCB) authorizes or rejects the change\n4. **Implementation** \u2014 change is implemented and verified (new drawing revision, process update, retesting)\n5. **Documentation** \u2014 change recorded and traced (who, when, why, approval evidence)\n\n---\n\n## Change Control Process\n\n### Engineering Change Notice (ECN) or Engineering Change Order (ECO)\n\nWhen a design change is needed after the product baseline is approved, a **Configuration Change Notice/Order** is submitted. Example:\n\n```\nECN-2026-001234 \u2014 Propeller Blade Material Upgrade\nTitle: Replace 7075-T6 aluminum with 7075-T73 (stress-relieved) for improved corrosion resistance\n\nRationale: \n- Field inspection revealed stress corrosion cracking on Lot A blades (material lot 2024-Q3)\n- Root cause: aggressive coastal environment; existing material insufficient\n\nDesign Changes:\n- Propeller blade material specification updated: 7075-T6 \u2192 7075-T73\n- Drawing revision: B \u2192 C\n- BOM item updated; supplier material specification changed\n\nImpact Analysis:\n- Weight increase: negligible (< 0.5%)\n- Performance: no change (strength/stiffness equivalent)\n- Manufacturing: no change (same machining process)\n- Cost: +$45/unit (material cost)\n- Schedule: no impact (material available from supplier)\n- Field retrofit: all existing blades (Lot A only) to be replaced; estimated 200 units in field\n\nApprovals Required:\n- Design Engineering: [signature] Date\n- Manufacturing: [signature] Date\n- Quality/Configuration Management: [signature] Date\n- Customer: [signature] Date (if required per contract)\n\nEffective Date: [date all new production to use T73]\nRetrofit Requirement: All Lot A units in field to be upgraded under warranty\n```\n\n### Configuration Control Board (CCB)\n\nThe **CCB** is the decision-making body for change control. Membership typically includes:\n- Program manager\n- Chief design engineer\n- Manufacturing engineer\n- Quality manager\n- Supplier representative (if supplier-initiated change)\n- Customer representative (for critical changes)\n\nThe CCB meets regularly (weekly, bi-weekly) to review and approve/reject pending changes.\n\n---\n\n## Configuration Audits\n\nConfiguration audits verify that the actual product matches the approved design and that all controls are in place.\n\n### Functional Configuration Audit (FCA)\n- **When:** Before design release to production\n- **What:** Verifies that the design meets all functional requirements (testing, analysis, simulation)\n- **How:** Compare design vs. specifications; review test data; verify all requirements traced to design features\n- **Goal:** Confirm design will perform as intended\n\n### Physical Configuration Audit (PCA)\n- **When:** After production (before accepting first article or lot)\n- **What:** Verifies that the manufactured hardware matches the design specification\n- **How:** Visual inspection, dimensional inspection (CMM), material certs, process parameter verification\n- **Goal:** Confirm hardware built per approved design; no undocumented changes\n\n---\n\n## Configuration Item Traceability\n\nCM systems (often PLM systems) track traceability chains:\n\n```\nRequirement (Functional Baseline)\n         \u2193\n    Allocated to Design (Allocated Baseline)\n         \u2193\n    Implemented in Drawing/BOM (Product Baseline)\n         \u2193\n    Manufactured per Work Instruction\n         \u2193\n    Tested & Verified (FAI/First Article Inspection)\n         \u2193\n    Released to Production\n         \u2193\n    Field Units Tracked (Serial Numbers, Lot Codes)\n         \u2193\n    Future Changes Traced Back (ECNs reference baseline version)\n```\n\nThis traceability enables:\n- **Retrofit determination:** Identify which field units are affected by a design change\n- **Obsolescence management:** Track when suppliers discontinue materials/parts; identify required upgrades\n- **Root cause analysis:** Link a field failure to the design version, manufacturing date, and supplier lot that caused it\n- **Configuration verification:** Confirm a returned unit matches its serial number configuration\n\n---\n\n## PLM Integration\n\nModern Configuration Management relies on **Product Lifecycle Management (PLM)** systems (Teamcenter, Windchill, etc.) to:\n- Store all design documents (drawings, specs, CAD models)\n- Maintain baseline versions (revision control)\n- Track changes (ECNs, approval workflow)\n- Enforce access control (only authorized personnel can modify baselines)\n- Generate Bills of Materials (BOMs) automatically from CAD\n- Integrate with manufacturing systems (ERP, MES) to control what gets produced\n\n---\n\n## Related Concepts\n\n- **[[MOC \u2014 NPI Process]]** \u2014 Hub for all NPI concepts\n- **[[Aerospace NPI Process Overview]]** \u2014 Product baseline established at design release (TRR)\n- **[[Design Reviews \u2014 PDR CDR TRR]]** \u2014 Design baselines approved at PDR/CDR reviews\n- **[[First Article Inspection \u2014 FAI and FAIR AS9102B]]** \u2014 Confirms built hardware matches product baseline\n- **[[AS9100D NPI Clauses]]** \u2014 AS9100D Clause 8.4.4 Configuration Management requirements\n- **[[MOC \u2014 Digital Systems]]** \u2014 PLM systems manage configuration data\n\n## Sources\n\n- AS9100D (Clause 8.4.4 Configuration Management)\n- MIL-STD-480B (Specification for Configuration Control)\n- MIL-HDBK-61 (Configuration Management)\n- ISO 10007 (Configuration Management in Projects and Services)\n\n---\n\n**Notes:**\n- %%VERIFY%% CM workflow \u2014 confirm specific process with program-level CM plan (varies by customer and program size)\n- %%VERIFY%% Retrofit identification \u2014 complex for large fielded populations; always involve customer and quality before executing\n- %%VERIFY%% Configuration item list \u2014 typically 50\u2013500 items for aerospace systems; scope varies dramatically by complexity\n\nLast updated: 2026-04-13",
      "tags": [
        "phase/NPI",
        "phase/sustaining",
        "system/PLM",
        "domain/aerospace-defense"
      ],
      "status": "synthesized",
      "url": "/concepts/configuration-management-basics",
      "relatedConcepts": [
        "moc--npi-process",
        "design-reviews--pdr-cdr-trr",
        "first-article-inspection--fai-and-fair-as9102b",
        "as9100d-npi-clauses",
        "aerospace-npi-process-overview",
        "moc--digital-systems",
        "configuration-management-basics"
      ],
      "supportingArticles": []
    },
    {
      "id": "design-reviews--pdr-cdr-trr",
      "title": "Design Reviews \u2014 PDR, CDR, TRR",
      "type": "concept",
      "description": "Design Reviews are formal, gated assessments that occur at critical milestones in the aerospace NPI lifecycle. They are governed by **MIL-STD-1521B** (or customer-specific variants) and serve as **go/",
      "content": "# Design Reviews \u2014 PDR, CDR, TRR\n\n## Overview\n\nDesign Reviews are formal, gated assessments that occur at critical milestones in the aerospace NPI lifecycle. They are governed by **MIL-STD-1521B** (or customer-specific variants) and serve as **go/no-go decision points** before proceeding to the next phase.\n\nEach review involves key stakeholders: program manager, design leads, quality engineer, manufacturing representative, supplier leads, and often the customer.\n\n## Preliminary Design Review (PDR)\n\n### Purpose\nVerify that the **preliminary design satisfies all requirements** and that the approach is technically sound and feasible before committing to detailed design.\n\n### When It Occurs\nAfter initial concept design is complete; before detailed design and engineering begins.\n\n### Entry Criteria\n- Requirements and specification documents finalized and baselined\n- System architecture and block diagrams defined\n- Preliminary Bill of Materials (BOM) with long-lead items identified\n- Initial risk assessment (preliminary DFMEA)\n- Manufacturing feasibility assessment (rough)\n- Supplier strategy document (make vs. buy decisions)\n- Test and validation approach outline\n- Schedule and budget estimates\n\n### What's Reviewed\n- Traceability matrix: requirements \u2192 design features\n- Design block diagrams and schematics\n- Critical design parameters and their justification\n- Risk analysis (early DFMEA findings)\n- Supplier selections and capability summaries\n- Manufacturing process assumptions\n- Test strategy and acceptance criteria\n\n### Exit Criteria (Go/No-Go Decision)\n- **GO:** All requirements traced to design; risks identified and mitigation planned; suppliers capable; schedule and budget acceptable\n- **NO-GO:** Requirement gaps identified; high-risk areas unresolved; supplier concerns; proceed to rework before advancing\n\n### Key Output\n- PDR **action item list** (issues to resolve before CDR)\n- Approved preliminary design baseline\n- Confirmed budget and schedule\n\n---\n\n## Critical Design Review (CDR)\n\n### Purpose\nVerify that the **detailed design is complete, correct, and ready for production** \u2014 that manufacturing, test, and supplier processes can execute as specified.\n\n### When It Occurs\nAfter all design details are finalized but before prototype/pilot build begins.\n\n### Entry Criteria\n- All design drawings, schematics, and specifications complete and reviewed\n- Complete Bill of Materials (BOM) with part numbers, sources, specifications\n- Manufacturing process plans defined (tooling, fixtures, flow)\n- DFMEA completed and reviewed; mitigation plans in place\n- Test plan detailed (what, how, acceptance criteria)\n- Supplier design quotations received and reviewed\n- All PDR action items resolved\n- Design change control procedure documented\n- DO-254 (avionics hardware) or equivalent design assurance evidence (if applicable)\n\n### What's Reviewed\n- Complete design package (drawings, schematics, specifications)\n- Design analysis and trade studies (thermal, structural, EMI, etc.)\n- Final DFMEA with RPN (Risk Priority Number) scores\n- Manufacturing process capability (Cpk) projections\n- Cost and schedule baselines\n- Configuration Management plan\n- Supplier design qualification status\n- Test strategy refined; sample sizes and acceptance criteria defined\n\n### Exit Criteria (Go/No-Go Decision)\n- **GO:** Design is complete, correct, and producible; all high-risk items mitigated; suppliers qualified; test approach sound; configuration baseline approved\n- **NO-GO:** Design gaps remain; manufacturing feasibility questioned; supplier capability concerns; test approach incomplete; return to design rework\n\n### Key Output\n- CDR **configuration baseline** \u2014 approved design frozen for production\n- Supplier Design Approvals (SDAs)\n- Updated schedule reflecting pilot/LRIP build timeline\n- Authorization to proceed to prototype or pilot production\n\n---\n\n## Test Readiness Review (TRR)\n\n### Purpose\nVerify that **all qualification testing is complete, all results acceptable, and the product is ready for full production release**.\n\n### When It Occurs\nAfter pilot/low-rate initial production (LRIP) build and testing are complete; before design release to full production.\n\n### Entry Criteria\n- Prototype/LRIP units built and tested\n- **First Article Inspection (FAI) completed** per AS9102B; FAIR (report) approved\n- **PPAP (Production Part Approval Process) submission accepted** per AS9145\n- All qualification tests executed and passed:\n  - Environmental (thermal, vibration, humidity, altitude)\n  - Functional and performance tests\n  - Reliability and durability tests (HALT, HASS, burn-in as applicable)\n  - EMI/RFI compliance testing\n  - Safety testing (if applicable)\n- PFMEA (Process FMEA) completed and reviewed\n- Supplier process validation complete (process capability studies)\n- All design changes from prototype testing incorporated and documented\n- Design Assurance file complete (traceability, test reports, configuration records)\n\n### What's Reviewed\n- Test data and reports (all qualification tests)\n- FAIR (First Article Inspection Report) summary\n- PPAP submission status and customer approval\n- PFMEA findings and risk mitigation\n- Supplier process capability data (Cpk, Ppk)\n- Failure mode analysis from testing (corrective actions closed)\n- Configuration baseline updated with all design changes\n- Production readiness checklist complete\n- Logistics and support plan (spares, technical publications)\n\n### Exit Criteria (Go/No-Go Decision)\n- **GO:** All tests passed; FAI complete; PPAP accepted; suppliers qualified; design is frozen and ready for production; no unresolved high-risk items\n- **NO-GO:** Test failures remain; FAI or PPAP deficiencies; supplier process concerns; schedule risk; return to testing/rework\n\n### Key Output\n- **Production Release Authorization** \u2014 design is now in production\n- Final Configuration Baseline\n- Production Quality Control Plan\n- Engineering Data Package released to manufacturing and sustainment teams\n\n---\n\n## Governance & Standards\n\n### MIL-STD-1521B\nDefines the formal structure, entry/exit criteria, and documentation requirements for Technical Reviews in defense programs. Most aerospace contracts mandate compliance or equivalent rigor.\n\n### Customer Tailoring\n- **Commercial aerospace** (e.g., Boeing, Airbus suppliers): Often less formal; may combine PDR/CDR into single review\n- **Defense programs** (e.g., DoD contractors): Strict compliance with MIL-STD-1521B; customer representatives attend; reviews may span 2\u20133 days\n- **Space programs** (e.g., NASA): Enhanced rigor; additional reviews (System Requirements Review, Preliminary Design Review, Critical Design Review, Test Readiness Review) with independent review boards\n\n### AS9100D Integration\nDesign reviews are mandated by **AS9100D Clause 8.3** (Design and Development Control). The standard requires:\n- Design and development planning\n- Design and development inputs (requirements)\n- Design and development review at appropriate stages\n- Design and development verification\n- Design and development validation\n- Control of changes\n\n---\n\n## Related Concepts\n\n- **[[MOC \u2014 NPI Process]]** \u2014 Hub for all NPI concepts\n- **[[Aerospace NPI Process Overview]]** \u2014 Overall NPI lifecycle and PDR/CDR/TRR placement\n- **[[PFMEA and DFMEA]]** \u2014 Design and Process FMEAs, which are key review inputs\n- **[[Configuration Management Basics]]** \u2014 Change control and baseline management post-CDR\n- **[[First Article Inspection \u2014 FAI and FAIR AS9102B]]** \u2014 FAI process, which is a TRR entry criterion\n- **[[PPAP in Aerospace \u2014 AS9145]]** \u2014 PPAP submission, which is a TRR entry criterion\n- **[[AS9100D NPI Clauses]]** \u2014 AS9100D Clause 8.3 governance of design reviews\n\n## Sources\n\n- MIL-STD-1521B (Technical Reviews)\n- AS9100D (Clause 8.3 Design and Development Control)\n- AS9102B (First Article Inspection)\n- AS9145 (Qualification and Approval of Aerospace Suppliers)\n\n---\n\n**Notes:**\n- %%VERIFY%% MIL-STD-1521B revision \u2014 confirm against current DoD standard\n- %%VERIFY%% Timeline between reviews (PDR \u2192 CDR \u2192 TRR) varies; typical spacing is 3\u20136 months per phase\n- Commercial aerospace programs may use abbreviated or combined review processes; always reference program-specific procedures\n\nLast updated: 2026-04-13",
      "tags": [
        "phase/NPI",
        "phase/design",
        "domain/aerospace-defense"
      ],
      "status": "synthesized",
      "url": "/concepts/design-reviews--pdr-cdr-trr",
      "relatedConcepts": [
        "moc--npi-process",
        "configuration-management-basics",
        "first-article-inspection--fai-and-fair-as9102b",
        "pfmea-and-dfmea",
        "as9100d-npi-clauses",
        "aerospace-npi-process-overview",
        "ppap-in-aerospace--as9145",
        "design-reviews--pdr-cdr-trr"
      ],
      "supportingArticles": []
    },
    {
      "id": "digital-thread-in-manufacturing",
      "title": "Digital Thread in Manufacturing",
      "type": "concept",
      "description": "The digital thread is the **continuous, connected flow of product data** across all systems involved in a product's lifecycle \u2014 from initial design through manufacturing, delivery, and service. It eli",
      "content": "# Digital Thread in Manufacturing\n\n## What It Is\n\nThe digital thread is the **continuous, connected flow of product data** across all systems involved in a product's lifecycle \u2014 from initial design through manufacturing, delivery, and service. It eliminates the gaps between disconnected tools and ensures every system is working from the same version of the truth.\n\nWithout a digital thread:\n- CAD updates don't propagate to PLM revisions\n- PLM BOMs don't sync to ERP procurement records\n- ERP work orders don't carry the correct engineering revision to MES\n- Shop floor actuals never feed back to inform future design decisions\n\nWith a digital thread, a dimension change in CAD flows automatically through PLM \u2192 ERP \u2192 MES, and production feedback flows back.\n\n## The Systems It Connects\n\n```\nCAD (design geometry)\n  \u2193\nPLM (revision control, BOM, change management)\n  \u2193\nERP (procurement, costing, work order release)\n  \u2193\nMES (production execution, quality, as-built)\n  \u2193\nService (field data, maintenance history)\n```\n\nEach handoff point has historically been a gap where data is manually re-entered, exported/imported via files, or simply not transferred. The digital thread replaces those gaps with live, automated data flow.\n\n## File Transfer Is Not Integration\n\nA common misconception: exporting a BOM to Excel and importing it into ERP is \"integration.\" It is not. File transfers are:\n- Asynchronous \u2014 the receiving system is immediately out of date\n- Error-prone \u2014 manual steps introduce transcription errors\n- Untraceable \u2014 no audit trail of when data was last synchronized\n\nTrue digital thread integration means the data moves automatically, in real time, with full traceability.\n\n## Common Break Points\n\n| Break point | Symptom |\n|-------------|---------|\n| CAD \u2192 PLM not linked | Engineers maintain drawings outside PLM; revision control gaps |\n| EBOM \u2260 MBOM | Engineering and manufacturing BOMs diverge; procurement orders wrong parts |\n| PLM \u2192 ERP manual sync | Approved ECOs don't update ERP BOMs until someone manually re-enters them |\n| ERP \u2192 MES via paper | Work orders printed and handed to production; no real-time status |\n| MES actuals not returned | Yield, defects, and cycle times never reach PLM for design improvement |\n\n## MBSE and the Digital Thread in Aerospace\n\nModel-Based Systems Engineering (MBSE) extends the digital thread upstream to requirements and system architecture. In aerospace, the thread runs:\n\n```\nRequirements model (MBSE) \u2192 CAD \u2192 PLM \u2192 ERP \u2192 MES \u2192 as-built record\n```\n\nEvery artifact \u2014 from system requirement to as-built serial number \u2014 is traceable in one connected chain. This is required for AS9100D compliance and FAA/EASA airworthiness traceability. See also [[Aerospace NPI Process Overview]] and [[First Article Inspection \u2014 FAI and FAIR AS9102B]].\n\n## Relationship to [[ISA-95]] and [[Unified Namespace (UNS)]]\n\n[[ISA-95]] defines the formal interface model between ERP (Level 4) and MES (Level 3) \u2014 part of the digital thread standard for MES-ERP data exchange.\n\n[[Unified Namespace (UNS)]] provides the real-time data bus that can carry the digital thread at the OT layer \u2014 connecting machine data directly into the thread without point-to-point integrations.\n\n## Measuring Thread Fidelity\n\nA digital thread is only valuable if the data is accurate and current. Key metrics:\n- **Revision currency** \u2014 what % of production operations are using the latest approved revision?\n- **BOM match rate** \u2014 what % of ERP BOMs match the PLM-approved MBOM?\n- **Feedback latency** \u2014 how long does it take for a shop floor defect to reach an engineering action?\n\n## Related Concepts\n\n- [[PLM-ERP-MES Integration]] \u2014 the integration of the three core systems that the digital thread connects\n- [[Engineering Change Management]] \u2014 changes propagate through the system via the digital thread\n- [[Digital Twins in Manufacturing]] \u2014 digital twins consume the digital thread as their data source\n- [[IT-OT Convergence]] \u2014 prerequisite infrastructure for extending the digital thread to shop-floor OT\n- [[ISA-95]] \u2014 standard defining the ERP-MES segment of the digital thread",
      "tags": [
        "system/PLM",
        "system/ERP",
        "system/MES",
        "system/CAD",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/digital-thread-in-manufacturing",
      "relatedConcepts": [
        "engineering-change-management",
        "unified-namespace-uns",
        "isa-95",
        "first-article-inspection--fai-and-fair-as9102b",
        "aerospace-npi-process-overview",
        "digital-twins-in-manufacturing",
        "it-ot-convergence",
        "plm-erp-mes-integration"
      ],
      "supportingArticles": []
    },
    {
      "id": "digital-twins-in-manufacturing",
      "title": "Digital Twins in Manufacturing",
      "type": "concept",
      "description": "A digital twin is a **dynamic virtual replica** of a physical asset, process, or system that is continuously synchronized with its real-world counterpart through live data. Unlike a static CAD model o",
      "content": "# Digital Twins in Manufacturing\n\n## What It Is\n\nA digital twin is a **dynamic virtual replica** of a physical asset, process, or system that is continuously synchronized with its real-world counterpart through live data. Unlike a static CAD model or simulation, a digital twin updates in near real-time and can be used to predict future states, test scenarios, and optimize operations \u2014 without touching the physical system.\n\nDigital twins in manufacturing span from individual machines to entire factory networks.\n\nMarket context: the digital twin market was $10.1B in 2023 and is projected to reach $101.1B by 2028 (61.3% CAGR). %%VERIFY%% Source: MarketsandMarkets 2023 report.\n\n## Four Types of Manufacturing Digital Twins\n\n| Type | Scope | Primary Use |\n|------|-------|-------------|\n| **Resource twin** | Single machine or equipment | Predictive maintenance, lifecycle modeling |\n| **Process twin** | Single manufacturing process | Process optimization, variance reduction |\n| **System twin** | Full production line or factory | Production scheduling, throughput optimization |\n| **Supply chain twin** | Multi-site network | Risk management, logistics optimization |\n\nThese types compose hierarchically \u2014 a system twin aggregates process twins, which aggregate resource twins.\n\n## Near Real-Time vs. Traditional Simulation\n\nTraditional simulations run on historical data, require manual updates, and produce periodic outputs for human review.\n\nA near real-time digital twin differs in three ways:\n1. **Continuous synchronization** \u2014 live sensor/PLC data keeps the model current\n2. **Automatic adaptation** \u2014 the model adjusts to changing conditions without manual parameter updates\n3. **Decision automation** \u2014 can trigger autonomous actions (e.g., reroute work order when machine fails) within defined rules\n\nThis shifts manufacturing from reactive to **predictive operations**.\n\n## Key Applications\n\n**Production optimization**\n- Simulate layout changes, routing alternatives, and staffing scenarios on the twin before committing on the floor\n- Identify bottlenecks and test solutions with zero production risk\n\n**Predictive maintenance**\n- Analyze vibration, temperature, and cycle data to predict failure before it occurs\n- Reduce unplanned downtime and shift from time-based to condition-based maintenance schedules\n\n**Quality control**\n- Correlate process parameters (temperature, pressure, speed) with defect rates to identify root causes\n- Run what-if scenarios: \"what happens to yield if we change dwell time by 5%?\"\n\n**New product introduction**\n- Validate manufacturing processes digitally before tooling is committed\n- Compress NPI timelines by finding process incompatibilities in simulation\n\n## Data Foundation\n\nA digital twin is only as good as its data. It requires:\n- **Real-time feeds** from sensors, PLCs, and SCADA (via [[Unified Namespace (UNS)]] or OPC UA)\n- **Product data** from [[PLM-ERP-MES Integration]] (drawings, BOMs, process specs)\n- **Historical data** for model calibration and ML training\n\nThe [[Digital Thread in Manufacturing]] provides the connected data backbone that makes digital twin fidelity possible.\n\n## \"Glass Box\" Principle\n\nEffective manufacturing digital twins expose their logic \u2014 stakeholders can trace why the model recommends a specific action. This is critical for operator trust and regulatory contexts where decisions must be auditable. Black-box optimization models, however accurate, face adoption resistance on the shop floor.\n\n## Relationship to Industry 4.0\n\nDigital twins are a foundational capability of Industry 4.0, alongside [[IT-OT Convergence]] and [[Unified Namespace (UNS)]]. They represent the synthesis layer \u2014 consuming connected data from the shop floor and producing actionable intelligence back into operations.\n\n## Related Concepts\n\n- [[Digital Thread in Manufacturing]] \u2014 the data backbone that feeds digital twin synchronization\n- [[Unified Namespace (UNS)]] \u2014 real-time data architecture that delivers live machine data to twins\n- [[IT-OT Convergence]] \u2014 prerequisite for real-time OT data reaching IT-side twin models\n- [[PLM-ERP-MES Integration]] \u2014 provides product and process data context for the twin",
      "tags": [
        "system/digital-twin",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/digital-twins-in-manufacturing",
      "relatedConcepts": [
        "unified-namespace-uns",
        "digital-thread-in-manufacturing",
        "it-ot-convergence",
        "plm-erp-mes-integration"
      ],
      "supportingArticles": []
    },
    {
      "id": "engineering-change-management",
      "title": "Engineering Change Management",
      "type": "concept",
      "description": "Engineering Change Management (ECM) is the structured, end-to-end process for identifying, evaluating, approving, implementing, and tracking modifications to product designs, requirements, specificati",
      "content": "# Engineering Change Management\n\n## What It Is\n\nEngineering Change Management (ECM) is the structured, end-to-end process for identifying, evaluating, approving, implementing, and tracking modifications to product designs, requirements, specifications, and manufacturing processes. Every change \u2014 from a minor tolerance update to a full assembly redesign \u2014 flows through a controlled, traceable workflow.\n\nECM is not just about tracking changes. It ensures the right change is made at the right time, by the right stakeholders, with full visibility of downstream impact before anything is executed.\n\n## The ECR \u2192 ECO \u2192 ECN Sequence\n\nChanges move through three documents in sequence:\n\n### 1. Engineering Change Request (ECR)\nThe initial proposal. Captures:\n- The problem or improvement opportunity\n- Proposed solution\n- Preliminary risk and impact assessment\n\nThe ECR triggers formal review. Anyone on the team can raise an ECR; it doesn't authorize any change.\n\n### 2. Engineering Change Order (ECO)\nThe approved change authorization. Specifies:\n- Exactly what changes (CAD, BOM, drawing, specification, process)\n- Effectivity date or serial number\n- Who reviews and approves (cross-functional sign-off)\n- Impact on cost, schedule, and compliance\n\nThe ECO is the legal authorization to implement. Production cannot proceed with the new revision until the ECO is closed.\n\n### 3. Engineering Change Notice (ECN)\nCommunication to affected stakeholders after the ECO is approved. Notifies:\n- Production, quality, procurement, suppliers\n- Updated documents and revision levels\n- Implementation timeline and effectivity\n\n%%VERIFY%% Some organizations combine ECO and ECN or use different terminology (e.g., DCO \u2014 Design Change Order in some aerospace contexts).\n\n## Why ECM Matters in Regulated Industries\n\nIn aerospace (AS9100D), automotive (IATF 16949), and medical devices (ISO 13485), every change to a production part or process must be:\n- Traceable (who requested, who approved, what changed, when)\n- Impact-assessed (what downstream systems, suppliers, and certifications are affected)\n- Documented (updated drawings, specs, and BOMs at correct revision)\n\nWithout ECM, organizations risk shipping products built to the wrong revision, failing audits, or triggering recalls.\n\n## ECM in PLM Systems\n\nECM is a core capability of PLM. The PLM system:\n- Stores CAD models and BOMs under revision control\n- Manages ECR/ECO/ECN workflows with automated routing and approvals\n- Maintains full audit trail of every change and approver\n- Enforces effectivity \u2014 ensuring production only uses approved revisions\n\nWhen PLM is integrated with ERP and MES (see [[PLM-ERP-MES Integration]]), approved ECOs automatically propagate BOM updates downstream, eliminating manual re-entry and the revision mismatch risk.\n\n## Common Failure Modes\n\n- **Change without authorization** \u2014 engineer updates CAD but skips ECO; production unknowingly uses new revision without approval\n- **Effectivity miscommunication** \u2014 ECO approved but ECN not issued; suppliers continue making old part\n- **Scope creep in change** \u2014 one change spawns 12 \"while we're in there\" changes, delaying the original fix\n- **No impact analysis** \u2014 change approved without checking downstream effects on FMEA, test procedures, or supplier qualifications\n\n## Relationship to Configuration Management\n\nECM and configuration management are tightly coupled. Configuration management ensures the product at any point in time matches a known, approved baseline. ECM is the process that moves from one approved baseline to the next. Together they answer: what exactly was built, when, and what approved that build state.\n\nSee also [[PLM-ERP-MES Integration]] for how changes propagate across the three-system stack, and [[ISA-95]] for how production execution systems are notified of approved changes.\n\n## Related Concepts\n\n- [[PLM-ERP-MES Integration]] \u2014 ECM workflow lives in PLM and propagates into ERP and MES\n- [[Digital Thread in Manufacturing]] \u2014 ECM traceability depends on a connected digital thread",
      "tags": [
        "system/PLM",
        "phase/sustaining",
        "domain/manufacturing",
        "domain/quality"
      ],
      "status": "synthesized",
      "url": "/concepts/engineering-change-management",
      "relatedConcepts": [
        "digital-thread-in-manufacturing",
        "isa-95",
        "plm-erp-mes-integration"
      ],
      "supportingArticles": []
    },
    {
      "id": "first-article-inspection--fai-and-fair-as9102b",
      "title": "First Article Inspection \u2014 FAI and FAIR AS9102B",
      "type": "concept",
      "description": "**First Article Inspection (FAI)** is a comprehensive, one-time inspection and testing of the first production (or pilot) article of a new part or component to verify that:",
      "content": "# First Article Inspection \u2014 FAI and FAIR AS9102B\n\n## What is FAI?\n\n**First Article Inspection (FAI)** is a comprehensive, one-time inspection and testing of the first production (or pilot) article of a new part or component to verify that:\n1. The design specification can actually be manufactured as intended\n2. The manufactured part meets all dimensional, material, and functional requirements\n3. The supplier's manufacturing process is capable and documented\n\nThe output of FAI is the **FAIR (First Article Inspection Report)** \u2014 a detailed technical document that serves as evidence of design conformance and process control.\n\n---\n\n## FAI vs. Regular Quality Inspection\n\n| Aspect | FAI | Routine Inspection |\n|--------|---|---|\n| **Timing** | One-time, first article(s) | Ongoing, every production lot |\n| **Scope** | 100% of design requirements; every characteristic | Sampling-based (AQL, per plan) |\n| **Documentation** | Detailed FAIR with drawings, CMM data, functional test results | Inspection certificates, test reports per lot |\n| **Authority** | Customer-approved supplier or customer-supervised | Supplier quality (in-process or receiving) |\n| **Purpose** | Prove design can be manufactured to spec | Verify ongoing production conforms to spec |\n| **Approval** | Customer sign-off before production release | Automatic (per AQL acceptance criteria) |\n\n---\n\n## FAIR (First Article Inspection Report) \u2014 AS9102B\n\n### Structure of a FAIR\n\nA FAIR is organized into sections addressing all aspects of design and manufacturing:\n\n#### 1. Identification Section\n- Part number, revision, description\n- Design specification reference (drawing, document revision)\n- Supplier name and facility\n- Inspection date and inspector/approval signatures\n- Customer and program identification\n\n#### 2. Requirement Verification Section\n\n**A. Dimensional Data**\n- Critical dimensions measured via CMM (Coordinate Measuring Machine) or precision instruments\n- For each dimension:\n  - Specified tolerance (from drawing)\n  - Measured value\n  - Upper and lower control limits\n  - Conformance (pass/fail)\n- Statistical summary: mean, standard deviation, capability indices (Cpk/Ppk) %%VERIFY%%\n\n**B. Material Certification**\n- Material type and specification (e.g., 7075-T6 aluminum, 4340 steel)\n- Material test reports (mill certificates, material coupons tested for hardness, tensile strength)\n- Heat lot traceability (material serial number linked to first article)\n- Plating/coating compliance (thickness, adhesion, corrosion resistance if specified)\n\n**C. Functional and Performance Testing**\n- Electrical tests (voltage, current, continuity, insulation resistance for electrical components)\n- Mechanical performance (pressure/load testing, cycle testing, vibration testing as applicable)\n- Environmental testing (thermal shock, moisture exposure, salt spray if specified)\n- Safety testing (any flammability, toxicity, or hazard compliance)\n- Test equipment calibration certificates\n\n**D. Design Verification**\n- Balloon drawing \u2014 marked-up version of design drawing showing measurements taken on the first article (indicates where each dimension was measured)\n- Drawing notes and specifications addressed point-by-point\n- Any deviations from design or substitutions documented and approved\n\n#### 3. Process and Control Documentation\n- Manufacturing process flow with key process parameters documented\n- Work instructions or setup sheets (as built)\n- Special processes (heat treat, plating, welding) certs and parameters\n- Inspection points and acceptance criteria used during FAI\n- Statistical Process Control (SPC) data from pilot production (if running pilot build)\n\n#### 4. Supplier's FMEA Summary\n- Design FMEA (DFMEA) \u2014 design risk analysis\n- Process FMEA (PFMEA) \u2014 manufacturing risk analysis\n- Risk Priority Number (RPN) and mitigations for any moderate or high risks\n\n#### 5. Certification and Approval\n- Supplier quality manager sign-off: \"This first article has been inspected and tested per this FAIR and meets all requirements of [design specification]\"\n- Customer (or customer-approved lab) approval signature\n- Any deviations or non-conformances noted and resolution documented\n\n---\n\n## FAI Process Workflow\n\n### 1. Planning\n- Customer specifies FAI requirements in contract or procurement documents\n- Supplier assigned responsibility for conducting FAI\n- FAI scope defined: which characteristics are critical, what testing is required, acceptance criteria\n\n### 2. First Article Production\n- Supplier manufactures one or more first articles using final design, materials, and manufacturing process\n- Build documented (who, when, equipment used, process parameters)\n- All in-process inspections and tests performed and recorded\n\n### 3. Comprehensive Inspection & Testing\n- **Dimensional**: CMM or precision measurement of all critical dimensions\n- **Material**: Certifications collected; samples may be tested (hardness, tensile, composition)\n- **Functional**: All functions tested per design specification (power-up, performance, safety tests)\n- **Process validation**: Manufacturing work instructions and process control documented\n\n### 4. FAIR Generation\n- Supplier compiles all inspection and test data into FAIR\n- FAIR organized per AS9102B structure (sections above)\n- Drawings marked with measurement locations (balloon drawing)\n- Non-conformances (if any) documented with corrective actions\n\n### 5. Submission & Review\n- FAIR submitted to customer (or customer-designated inspection authority)\n- Customer quality and engineering review FAIR\n- Customer may ask for additional data, retesting, or clarification\n- Customer verifies all requirements are addressed and conformance demonstrated\n\n### 6. Approval & Release\n- Once approved, FAIR becomes a quality record and FAI is complete\n- Supplier authorized to begin production\n- FAIR filed with design and quality records (retention per aerospace standard, typically 20\u201350 years)\n\n---\n\n## Key Characteristics & Balloon Drawings\n\n### What is a \"Balloon Drawing\"?\n\nA **balloon drawing** is a marked-up copy of the design drawing where each dimension called out is marked with a **circle (balloon) and number** indicating where that dimension was measured on the first article.\n\n**Example:**\n```\nOriginal drawing dimension: \u00d810.0 \u00b1 0.1 mm\nBalloon 1: Points to hole location \u2192 Measured: 10.05 mm \u2713 PASS\nBalloon 2: Points to surface finish \u2192 Ra 1.6 \u00b5m max \u2192 Measured: 0.8 \u00b5m \u2713 PASS\n```\n\nBalloon drawings are mandatory in aerospace FAI because they provide **traceability** \u2014 proof that the dimension specified in the drawing was actually measured on the first article.\n\n### Characteristic Accountability\n\nEvery design specification (dimension, material property, functional requirement) must be **accounted for** in the FAIR:\n- Either measured/tested and passed\n- Or measured/tested and failed with corrective action\n- Or explicitly waived (e.g., \"not applicable to this first article variant\") with justification\n\nThere cannot be gaps or unexplained omissions in a FAIR.\n\n---\n\n## Delta FAI\n\n### What Triggers a Delta FAI?\n\nA **Delta FAI** (rework FAI) is conducted when:\n- Design changes occur after the initial FAI\n- Manufacturing process changes occur (new supplier, new equipment, new procedure)\n- A failed characteristic is corrected and re-inspected\n\n**Example:**\n- Original FAI completed and approved\n- Engineering change order (ECO) modifies the design (e.g., different material, new dimension tolerance)\n- Supplier manufactures updated first article and conducts **Delta FAI** on the changed characteristics only (not re-inspecting the entire part unless risk warrants it)\n\n### Delta FAI Scope\n- Only the changed characteristics are re-inspected/tested in detail\n- Unaffected characteristics reference the original FAI (no re-work required)\n- Reduces time and cost vs. full re-FAI\n\n---\n\n## FAI Conformance & Non-Conformances\n\n### Conforming First Article\n- All dimensions, material properties, and functional tests pass\n- FAIR approved without deviations\n- Part is released to production\n\n### Non-Conforming First Article\nIf a dimension or test fails:\n1. **Documented:** Failure recorded in FAIR with dimension/test identifier and measured value\n2. **Root cause analysis:** Supplier and customer investigate why the failure occurred\n3. **Corrective action:** Supplier implements fix (design change, process adjustment, tooling fix)\n4. **Re-work or re-test:** Either rework the failed part and re-inspect, or build a new first article and repeat FAI on that characteristic (Delta FAI)\n5. **Approval:** Only after corrective action and successful re-inspection is the FAIR approved\n\n---\n\n## Relationship to PPAP\n\n- **FAI** \u2014 Inspects the first article; produces FAIR (design conformance evidence)\n- **PPAP (Production Part Approval)** \u2014 Validates the manufacturing process; produces process capability data, FMEA, process control plan\n\nIn aerospace NPI:\n1. FAI/FAIR completed during pilot/LRIP build\n2. PPAP submitted (Level 1, 2, or 3) to customer\n3. PPAP includes the FAIR as key evidence of design conformance\n4. Upon PPAP approval, supplier is authorized to begin full production\n\n---\n\n## Related Concepts\n\n- **[[MOC \u2014 NPI Process]]** \u2014 Hub for all NPI concepts\n- **[[PPAP in Aerospace \u2014 AS9145]]** \u2014 PPAP submission process; FAIR is key PPAP document\n- **[[PFMEA and DFMEA]]** \u2014 Design and Process FMEAs, which inform FAI scope\n- **[[Aerospace NPI Process Overview]]** \u2014 Overall NPI lifecycle; FAI occurs in pilot/LRIP phase\n- **[[Configuration Management Basics]]** \u2014 Design baseline established; FAI confirms design can be manufactured as baselined\n- **[[AS9100D NPI Clauses]]** \u2014 AS9100D Clause 8.5.1 requirement for First Article Inspection\n\n## Sources\n\n- AS9102B (Specification for First Article Inspection)\n- AS9145 (Qualification and Approval of Aerospace and Defense Suppliers)\n- MIL-STD-1520 (Product Verification Requirements) \u2014 referenced in aerospace FAI practices\n\n---\n\n**Notes:**\n- %%VERIFY%% AS9102B is the current aerospace standard; confirm against latest revision\n- %%VERIFY%% Cpk/Ppk calculations in FAI \u2014 minimum acceptable values vary by criticality; typical minimum Cpk \u2265 1.33\n- %%VERIFY%% FAIR retention period (20\u201350 years) depends on program and part lifecycle; always follow contract/regulatory requirements\n\nLast updated: 2026-04-13",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense",
        "process/FAI",
        "standard/AS9102B"
      ],
      "status": "synthesized",
      "url": "/concepts/first-article-inspection--fai-and-fair-as9102b",
      "relatedConcepts": [
        "moc--npi-process",
        "configuration-management-basics",
        "pfmea-and-dfmea",
        "as9100d-npi-clauses",
        "aerospace-npi-process-overview",
        "ppap-in-aerospace--as9145",
        "first-article-inspection--fai-and-fair-as9102b"
      ],
      "supportingArticles": []
    },
    {
      "id": "hardware-in-the-loop-hil-testing",
      "title": "Hardware-in-the-Loop (HIL) Testing",
      "type": "concept",
      "description": "Hardware-in-the-loop (HIL) testing is a validation technique where a **real embedded control unit** (ECU) runs its actual production software, but instead of being connected to a real physical plant (",
      "content": "# Hardware-in-the-Loop (HIL) Testing\n\n## What It Is\n\nHardware-in-the-loop (HIL) testing is a validation technique where a **real embedded control unit** (ECU) runs its actual production software, but instead of being connected to a real physical plant (vehicle, aircraft, machine), it is connected to a **real-time simulation** of that plant.\n\nThe ECU receives simulated sensor inputs that look electrically identical to real-world signals. It executes its control logic and sends outputs back to the simulation, which updates its plant model accordingly \u2014 creating a closed loop that mimics real-world behavior.\n\nHIL allows engineers to test and validate embedded control software in realistic conditions without requiring a physical plant, prototype, or vehicle to exist yet.\n\n## Components of an HIL Test Setup\n\n| Component | Role |\n|-----------|------|\n| **Control software** | The actual firmware/software under test |\n| **ECU (Electronic Control Unit)** | Real production hardware running the software |\n| **HIL simulation system** | Real-time computer simulating the plant (NI VeriStand, dSPACE) |\n| **Virtual components** | Mathematical models of subsystems unavailable as hardware |\n| **Physical components** | Real hardware elements wired into the simulation loop |\n| **I/O interfaces** | Signal conditioning between ECU outputs and simulation inputs |\n\nThe critical distinction: the **ECU is real**. The plant it thinks it's controlling is simulated. This allows testing of real firmware on real silicon \u2014 not an emulation of either.\n\n## HIL vs. SIL (Software-in-the-Loop)\n\n| | SIL (Software-in-the-Loop) | HIL (Hardware-in-the-Loop) |\n|---|---|---|\n| ECU hardware | Emulated in software | Real production hardware |\n| When used | Early development, before hardware exists | After ECU hardware is available |\n| What it validates | Algorithms and logic | Software + hardware interaction |\n| Cost | Low | Higher (requires real ECU) |\n| Timing fidelity | Approximate | Real-time, high fidelity |\n\nSIL comes first in the development sequence; HIL follows once physical hardware is available.\n\n## Six Types of HIL Testing\n\n%%VERIFY%% Classification varies by source; the following reflects common industry grouping.\n\n1. **Control unit HIL** \u2014 tests the ECU in isolation with a simulated environment\n2. **Network HIL** \u2014 multiple ECUs communicating over a simulated vehicle/system network (CAN, FlexRay, Ethernet)\n3. **Power HIL** \u2014 includes power electronics in the loop; tests inverters, motor drives\n4. **Mechanical HIL** \u2014 physical mechanical components (steering, brakes) connected to simulation\n5. **Driver-in-the-loop (DiL)** \u2014 human driver in a simulator providing inputs; ECU responds to real driver behavior\n6. **Model-in-the-loop (MiL)** \u2014 variant where both controller and plant are modeled; precursor to SIL/HIL\n\n## Why HIL Matters in Aerospace and Defense\n\nIn safety-critical systems (flight control computers, engine control units, automotive ADAS), HIL is not optional \u2014 it is a required step in the verification and validation process before any physical integration or flight test.\n\nHIL is used to:\n- Inject fault conditions (sensor failure, signal degradation) that are dangerous or impossible to test physically\n- Validate edge cases in control laws that rarely occur in normal operation\n- Run thousands of test cycles overnight in parallel \u2014 infeasible with physical hardware\n- Support DO-178C (airborne software) and ISO 26262 (automotive) certification evidence\n\nHIL closes a specific V&V loop in the NPI process, sitting between software verification and system integration testing. See [[Aerospace NPI Process Overview]] for where HIL fits in the broader NPI V-model.\n\n## Relationship to Digital Twins\n\nA HIL simulation plant model is effectively a **real-time digital twin** of the physical system. The distinction from a general [[Digital Twins in Manufacturing]] is focus: HIL twins are optimized for nanosecond-to-millisecond real-time fidelity to interface with ECU hardware; manufacturing digital twins often prioritize longer-horizon predictive analytics.\n\n## Related Concepts\n\n- [[Digital Twins in Manufacturing]] \u2014 HIL plant simulation is a specialized form of digital twin\n- [[Aerospace NPI Process Overview]] \u2014 HIL fits within the NPI V-model verification phase",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense",
        "domain/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/hardware-in-the-loop-hil-testing",
      "relatedConcepts": [
        "aerospace-npi-process-overview",
        "digital-twins-in-manufacturing"
      ],
      "supportingArticles": []
    },
    {
      "id": "isa-95",
      "title": "ISA-95",
      "type": "concept",
      "description": "ISA-95 (also published as IEC 62264) is the international standard developed by the **International Society of Automation (ISA)** that defines: - The functional architecture of manufacturing operation",
      "content": "# ISA-95\n\n## What It Is\n\nISA-95 (also published as IEC 62264) is the international standard developed by the **International Society of Automation (ISA)** that defines:\n- The functional architecture of manufacturing operations systems\n- What data objects are exchanged between MES and ERP\n- How those objects are structured and named\n\nIt provides the **common language** between business planning systems (ERP) and shop-floor execution systems (MES), eliminating the need for custom, one-off integrations between every ERP and MES pairing.\n\n## The Five-Level Automation Pyramid\n\nISA-95 organizes manufacturing systems into a hierarchical model:\n\n| Level | Domain | Examples |\n|-------|--------|---------|\n| 0 | Physical process | Sensors, actuators |\n| 1 | Sensing & manipulation | PLCs, drives |\n| 2 | Control | SCADA, DCS |\n| **3** | **Manufacturing operations (MES)** | Scheduling, quality, maintenance, inventory |\n| **4** | **Enterprise** | ERP, logistics, finance |\n\n**Level 3 is the bridge** between OT (Levels 0\u20132) and IT (Level 4). MES sits at Level 3, receiving production orders from ERP above and sending control signals toward equipment below, while collecting performance data in both directions.\n\n## Four Functional Domains of MES (Level 3)\n\nISA-95 defines what MES actually does across four domains:\n\n1. **Production Operations Management** \u2014 order dispatching, scheduling, tracking work-in-progress\n2. **Quality Operations Management** \u2014 inspection planning, SPC, traceability, non-conformance handling\n3. **Maintenance Operations Management** \u2014 equipment status, downtime, preventive maintenance\n4. **Inventory Operations Management** \u2014 material flow, WIP tracking, stock levels\n\nThese four domains define the **complete functional scope of any ISA-95-compliant MES**. Vendors that claim ISA-95 compliance must address operations in these areas.\n\n## Data Exchange Standards Built on ISA-95\n\n### B2MML (Business-to-Manufacturing Markup Language)\nXML implementation of ISA-95 data models. Defines standard schemas for:\n- Production schedules (ERP \u2192 MES)\n- Work orders and dispatch lists\n- Performance results (MES \u2192 ERP)\n- Material and equipment definitions\n\nB2MML messages allow ERP and MES systems from different vendors to exchange data without custom mapping \u2014 in theory. In practice, most implementations still require mapping work.\n\n### OPC UA\nThe de-facto standard for secure OT/IT communication. Transmits real-time machine data with semantic context. Combined with ISA-95 object models, OPC UA enables true semantic interoperability from sensor to ERP dashboard. See also [[IT-OT Convergence]].\n\n## ISA-95 vs. Unified Namespace\n\nISA-95 prescribes a hierarchical, layer-by-layer integration model with point-to-point connections between levels. [[Unified Namespace (UNS)]] proposes replacing this with a flat, event-driven publish/subscribe bus \u2014 eliminating the bottlenecks of the pyramid model.\n\nUNS and ISA-95 are **not mutually exclusive**:\n- ISA-95 defines *what* data should exist and what it means\n- UNS defines *how* that data flows\n- A well-designed UNS implementation uses ISA-95 naming conventions and data models as the semantic layer\n\n%%VERIFY%% This characterization of UNS/ISA-95 complementarity is common in industry writing but represents an emerging consensus, not an official ISA position.\n\n## Practical Significance\n\nWithout a standard like ISA-95, every ERP-MES integration is a bespoke project:\n- Custom data mappings between ERP objects and MES objects\n- No shared vocabulary for production orders, work definitions, or performance metrics\n- Vendor lock-in: replacing either system requires rebuilding the integration\n\nISA-95 compliance doesn't guarantee plug-and-play integration, but it significantly reduces integration scope and creates a common audit trail for regulatory compliance.\n\n## Related Concepts\n\n- [[PLM-ERP-MES Integration]] \u2014 ISA-95 defines the MES-ERP segment of this integration\n- [[Unified Namespace (UNS)]] \u2014 modern alternative data flow architecture; complements ISA-95 semantics\n- [[IT-OT Convergence]] \u2014 ISA-95 Level 3 (MES) is the formal IT/OT boundary\n- [[Digital Thread in Manufacturing]] \u2014 ISA-95 standardizes a key segment of the digital thread",
      "tags": [
        "system/MES",
        "system/ERP",
        "domain/manufacturing",
        "domain/industrial"
      ],
      "status": "synthesized",
      "url": "/concepts/isa-95",
      "relatedConcepts": [
        "unified-namespace-uns",
        "digital-thread-in-manufacturing",
        "it-ot-convergence",
        "plm-erp-mes-integration"
      ],
      "supportingArticles": []
    },
    {
      "id": "it-ot-convergence",
      "title": "IT-OT Convergence",
      "type": "concept",
      "description": "**Operational Technology (OT)** \u2014 hardware and software that monitors and controls physical processes. Deals with the tangible, real-time world of manufacturing:",
      "content": "# IT-OT Convergence\n\n## The Two Worlds\n\n**Operational Technology (OT)** \u2014 hardware and software that monitors and controls physical processes. Deals with the tangible, real-time world of manufacturing:\n- PLCs (Programmable Logic Controllers)\n- SCADA (Supervisory Control and Data Acquisition)\n- DCS (Distributed Control Systems)\n- MES (Manufacturing Execution Systems)\n- Process historians\n\nOT priorities: **uptime, reliability, safety**. Systems often run for years with minimal changes; updates are risky and expensive.\n\n**Information Technology (IT)** \u2014 computer-based systems for managing, processing, storing, and securing data:\n- ERP, CRM, supply chain platforms\n- Data warehouses, cloud infrastructure\n- Analytics, AI/ML pipelines\n- Business networks and cybersecurity\n\nIT priorities: **data confidentiality, frequent patching, access control**.\n\nHistorically, these two worlds operated in separate silos by design. OT systems ran air-gapped from corporate networks for safety and security. The cost: no visibility into real-time production data from the business side, and no business context reaching the shop floor.\n\n## What Convergence Means\n\nIT/OT convergence does **not** mean merging the two into a single system. It means enabling them to **communicate, share data, and support common operational goals** while maintaining their distinct functions and security postures.\n\nThree types of convergence:\n\n1. **Physical convergence** \u2014 OT and IT devices share infrastructure (networks, switches) with security controls (DMZs, firewalls) separating the zones\n2. **Software convergence** \u2014 middleware, data historians, and architectures like [[Unified Namespace (UNS)]] collect OT data and make it available to IT systems\n3. **Organizational convergence** \u2014 IT and OT teams share goals, governance, and sometimes joint responsibilities (e.g., unified cybersecurity posture)\n\n## Why It Matters Now\n\nIT/OT convergence is the foundation that makes **industrial AI possible, scalable, and valuable**. Without OT data reaching IT systems, there's nothing for analytics and ML models to run on.\n\nBenefits:\n- **Real-time operational visibility** \u2014 business systems see live production data, not end-of-shift summaries\n- **Predictive maintenance** \u2014 ML models consume machine sensor data to predict failures before they occur\n- **Closed-loop quality** \u2014 defect data from OT flows to PLM (via IT) to improve future designs\n- **Energy optimization** \u2014 energy meter data analyzed in IT systems identifies waste patterns\n\n## The Convergence Stack\n\n```\nEnterprise IT layer    \u2190 ERP, analytics, cloud, AI\n        \u2195  [Convergence zone \u2014 UNS, OPC UA, historian]\nShop floor OT layer    \u2190 PLCs, SCADA, sensors, MES\n```\n\n[[ISA-95]] formalizes this boundary at Level 3 (MES) bridging Level 2 (SCADA/control) and Level 4 (ERP). [[Unified Namespace (UNS)]] replaces the rigid ISA-95 point-to-point integrations with a flexible publish/subscribe bus.\n\n## Security Considerations\n\nConvergence expands the attack surface. OT systems were never designed with network security in mind \u2014 many run legacy OSes with no patching cycles. Key practices:\n- Network segmentation with DMZ between OT and IT zones\n- Unidirectional security gateways (data diodes) where real-time writeback to OT isn't needed\n- Zero-trust principles applied at the convergence boundary\n- Joint IT/OT security governance \u2014 NIST SP 800-82 provides the framework for industrial control system security\n\n%%VERIFY%% NIST SP 800-82 Rev 3 is the current edition as of 2023.\n\n## Staffing Implications\n\nIT/OT convergence is creating a new class of engineer: the **industrial digitalization engineer** or **OT systems integrator** \u2014 someone who understands both PLC ladder logic and cloud data pipelines. Organizations that operated IT and OT as separate departments are restructuring toward combined roles.\n\n## Related Concepts\n\n- [[Unified Namespace (UNS)]] \u2014 primary technical architecture enabling IT/OT convergence\n- [[ISA-95]] \u2014 standard defining the formal boundary and interface between IT and OT layers\n- [[Digital Twins in Manufacturing]] \u2014 downstream consumer of converged IT/OT data\n- [[PLM-ERP-MES Integration]] \u2014 PLM and ERP are the IT systems; MES straddles IT/OT",
      "tags": [
        "system/MES",
        "domain/industrial",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/it-ot-convergence",
      "relatedConcepts": [
        "unified-namespace-uns",
        "digital-twins-in-manufacturing",
        "isa-95",
        "plm-erp-mes-integration"
      ],
      "supportingArticles": []
    },
    {
      "id": "inventory-management-and-obsolescence",
      "title": "Inventory Management and Obsolescence",
      "type": "concept",
      "description": "Obsolete inventory is any inventory a company can no longer sell or use due to lack of demand. In manufacturing specifically: - **Finished goods** \u2014 products that have reached end-of-life or been supe",
      "content": "# Inventory Management and Obsolescence\n\n## What Is Obsolete Inventory\n\nObsolete inventory is any inventory a company can no longer sell or use due to lack of demand. In manufacturing specifically:\n- **Finished goods** \u2014 products that have reached end-of-life or been superseded\n- **Raw materials and components** \u2014 parts ordered for a product line that was cancelled or redesigned\n- **Work-in-process (WIP)** \u2014 partially assembled products with no demand to complete them\n\nObsolete inventory differs from **slow-moving inventory** (still sellable but demand has declined) and **excess inventory** (overstocked but still in demand).\n\n## Causes of Obsolescence\n\n**Demand-side causes:**\n- Product reaches end-of-life or is superseded by a new model\n- Customer cancellation or program termination\n- Demand forecast error \u2014 overestimated market demand\n\n**Supply-side causes:**\n- Engineering change orders (ECOs) that make existing stock non-conforming \u2014 a design change can instantly obsolete thousands of parts. See [[Engineering Change Management]].\n- Supplier part discontinuation (DMSMS \u2014 Diminishing Manufacturing Sources and Material Shortages) \u2014 critical in aerospace and defense\n- Procurement bulk discounts that created excess stock\n\n**Operational causes:**\n- Poor inventory tracking \u2014 stock forgotten in warehouse until expired or damaged\n- WIP abandoned due to schedule cancellation\n- Overproduction building buffer stock that never gets consumed\n\n## Accounting Treatment\n\nObsolete inventory must be accounted for under GAAP and IFRS when identified:\n\n- **Write-down** \u2014 revalue inventory to Net Realizable Value (NRV) when it still has some recoverable value\n- **Write-off** \u2014 eliminate inventory from books entirely when it has zero recoverable value\n\nBoth are non-cash expenses: debit to COGS or an obsolescence reserve, reducing net income and balance sheet asset value. Delayed recognition of obsolescence overstates profits and assets.\n\n%%VERIFY%% GAAP allows tax deductions on obsolete inventory if sold, donated, or destroyed \u2014 confirm with tax counsel for specific jurisdiction.\n\n## Prevention Strategies\n\n**Inventory visibility:**\n- Real-time stock tracking via ERP \u2014 know what you have, where, and how long it's been there\n- Aging reports \u2014 flag inventory approaching shelf-life limits or sitting beyond a threshold (e.g., 12 months without movement)\n- Integration with PLM so pending ECOs trigger automatic obsolescence risk flags on affected stock\n\n**Demand management:**\n- Tighter demand forecasting \u2014 ABC analysis to categorize parts by consumption velocity\n- Safety stock optimization \u2014 reduce buffer stock for slow-moving items\n- FIFO enforcement \u2014 first-in, first-out consumption reduces aging risk\n\n**Procurement discipline:**\n- Resist bulk discount temptation for slow-moving or single-program parts\n- Supplier managed inventory (SMI) shifts obsolescence risk to supplier for commodity parts\n- Last-time-buy planning for EOL components (especially critical in aerospace electronics)\n\n**Scrap and waste management:**\n- Distinguish **scrap** (in-process material waste from production) from **obsolescence** (unused finished/raw inventory)\n- Track scrap rates by operation, material, and operator to identify systemic issues\n- Rework vs. scrap decision gates: quantify rework cost vs. material recovery value before scrapping\n\n## ERP's Role\n\nERP systems are the primary tool for inventory visibility and obsolescence prevention:\n- Real-time inventory position across locations and warehouses\n- MRP (Material Requirements Planning) matches procurement to actual production schedules, reducing overbuy\n- Lot and serial number tracking for traceability and shelf-life management\n- Reporting tools for aging analysis and slow-mover identification\n\nWhen ERP is integrated with PLM, approved ECOs can automatically query affected stock and trigger disposition decisions before production runs non-conforming material. See [[PLM-ERP-MES Integration]].\n\n## Related Concepts\n\n- [[Engineering Change Management]] \u2014 ECOs are a primary cause of component obsolescence; ECM controls this impact\n- [[PLM-ERP-MES Integration]] \u2014 PLM-ERP integration enables ECO-triggered stock disposition",
      "tags": [
        "system/ERP",
        "phase/sustaining",
        "domain/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/inventory-management-and-obsolescence",
      "relatedConcepts": [
        "engineering-change-management",
        "plm-erp-mes-integration"
      ],
      "supportingArticles": []
    },
    {
      "id": "moc--digital-systems",
      "title": "Map of Content \u2014 Digital Systems",
      "type": "concept",
      "description": "Central hub for Product Lifecycle Management (PLM), Enterprise Resource Planning (ERP), and Manufacturing Execution Systems (MES) concepts and their integration in hardware development and production.",
      "content": "# Map of Content \u2014 Digital Systems\n\nCentral hub for Product Lifecycle Management (PLM), Enterprise Resource Planning (ERP), and Manufacturing Execution Systems (MES) concepts and their integration in hardware development and production.\n\n## Digital Systems Overview\n\nThe three pillars of manufacturing software:\n\n- **PLM (Product Lifecycle Management)** \u2014 manages product design, changes, and configuration from concept through sustainment\n- **ERP (Enterprise Resource Planning)** \u2014 manages business operations: inventory, procurement, financials, supply chain\n- **MES (Manufacturing Execution System)** \u2014 manages shop-floor production: scheduling, real-time quality, resource utilization\n\nIntegration of these three systems is critical for efficient, traceable manufacturing.\n\n## PLM (Product Lifecycle Management)\n\n- **[PLM Systems Overview]** *(To be created)*\n  - Design data management, BOM control, document management\n  - Change management and baselines\n  - Integration with CAD systems (SolidWorks, Catia, NX)\n  - Configuration Management in PLM\n\n- **[PLM for Aerospace/Defense]** *(To be created)*\n  - AS9100D compliance in PLM workflows\n  - FMEA and risk tracking in PLM\n  - Traceability and audit trail capabilities\n\n## ERP (Enterprise Resource Planning)\n\n- **[ERP in Manufacturing]** *(To be created)*\n  - Inventory and materials management\n  - Procurement workflow and supplier management\n  - Financials: cost accounting, standard costing, variance analysis\n  - Integration with MES for real-time data\n\n- **[Supply Chain Management via ERP]** *(To be created)*\n  - Supplier qualification and performance tracking\n  - Obsolescence management and lifecycle planning\n  - Demand forecasting and production planning (MRP)\n\n## MES (Manufacturing Execution System)\n\n- **[MES Fundamentals]** *(To be created)*\n  - Shop-floor scheduling and work order management\n  - Real-time quality data collection (SPC, in-process inspection)\n  - Equipment monitoring and downtime tracking\n  - Labor and resource utilization\n\n- **[MES in Aerospace/Defense]** *(To be created)*\n  - Lot/serial number traceability\n  - Rework tracking and authorization\n  - Special process monitoring (heat treat, plating, welding)\n  - Integration with Quality Management System (QMS)\n\n## Integration & Workflows\n\n- **[PLM-ERP-MES Integration]** *(To be created)*\n  - Data flow: Design \u2192 Procurement \u2192 Production\n  - BOM synchronization from PLM to ERP to MES\n  - Production order creation and tracking\n  - Quality data feedback from MES to PLM (design improvement insights)\n\n- **[Digital Twin in Manufacturing]** *(To be created)*\n  - Simulation of manufacturing processes using real-time MES data\n  - Predictive analytics: equipment failure prediction, quality improvement\n  - Industry 4.0 concepts: IoT sensors, real-time dashboards\n\n## Related Concepts\n\n- **[[Aerospace NPI Process Overview]]** \u2014 NPI phases where PLM/ERP/MES are configured and used\n- **[[Configuration Management Basics]]** \u2014 PLM's role in managing design and process baselines\n- **[[PFMEA and DFMEA]]** \u2014 Risk data tracked in PLM and MES systems\n\n---\n\n**Note:** This hub is a placeholder for future expansion. First-wave synthesis focuses on NPI processes; digital systems detail will be added as the vault grows.\n\nLast updated: 2026-04-13",
      "tags": [
        "system/PLM",
        "system/ERP",
        "system/MES",
        "domain/industrial"
      ],
      "status": "synthesized",
      "url": "/concepts/moc--digital-systems",
      "relatedConcepts": [
        "aerospace-npi-process-overview",
        "configuration-management-basics",
        "pfmea-and-dfmea"
      ],
      "supportingArticles": []
    },
    {
      "id": "moc--npi-process",
      "title": "Map of Content \u2014 NPI Process",
      "type": "concept",
      "description": "Central hub for New Product Introduction concepts in aerospace and defense. Navigate by role, process, or standard.",
      "content": "# Map of Content \u2014 NPI Process\n\nCentral hub for New Product Introduction concepts in aerospace and defense. Navigate by role, process, or standard.\n\n## Process Overview\n\n- **[[Aerospace NPI Process Overview]]** \u2014 Stage gates, build phases, timelines, key deliverables at each gate\n\n## Design Phase\n\n- **[[Design Reviews \u2014 PDR CDR TRR]]** \u2014 Preliminary, Critical, and Test Readiness Reviews; entry/exit criteria, artifacts, governance\n- **[[PFMEA and DFMEA]]** \u2014 Design and Process Failure Mode & Effects Analysis; RPN scoring, relationship to design reviews\n\n## Production & Quality\n\n- **[[PPAP in Aerospace \u2014 AS9145]]** \u2014 Production Part Approval Process in aerospace/defense context; submission levels, documents\n- **[[First Article Inspection \u2014 FAI and FAIR AS9102B]]** \u2014 First Article Inspection process and FAIR (First Article Inspection Report) deliverable; characteristic accountability, balloon drawings\n- **[[Configuration Management Basics]]** \u2014 Configuration Items, baselines, change authority boards, audits (FCA/PCA), PLM integration\n\n## Compliance & Standards\n\n- **[[AS9100D NPI Clauses]]** \u2014 Aerospace quality standard clauses most relevant to NPI; clause 8.1, 8.3, 8.5.1; differences from ISO 9001\n\n---\n\n## Related Hubs\n\n- **[[MOC \u2014 Digital Systems]]** \u2014 PLM, ERP, MES integration and use cases across the NPI lifecycle\n\n---\n\nLast updated: 2026-04-13",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense"
      ],
      "status": "synthesized",
      "url": "/concepts/moc--npi-process",
      "relatedConcepts": [
        "design-reviews--pdr-cdr-trr",
        "configuration-management-basics",
        "moc--digital-systems",
        "first-article-inspection--fai-and-fair-as9102b",
        "pfmea-and-dfmea",
        "as9100d-npi-clauses",
        "aerospace-npi-process-overview",
        "ppap-in-aerospace--as9145"
      ],
      "supportingArticles": []
    },
    {
      "id": "pfmea-and-dfmea",
      "title": "PFMEA and DFMEA",
      "type": "concept",
      "description": "**FMEA (Failure Mode & Effects Analysis)** is a systematic technique for identifying and analyzing potential failures in a product or process, assessing their severity and occurrence probability, and",
      "content": "# PFMEA and DFMEA\n\n## Overview\n\n**FMEA (Failure Mode & Effects Analysis)** is a systematic technique for identifying and analyzing potential failures in a product or process, assessing their severity and occurrence probability, and implementing controls or design changes to reduce risk.\n\nIn aerospace NPI, two types of FMEA are mandatory:\n1. **DFMEA (Design FMEA)** \u2014 analyzes design risks\n2. **PFMEA (Process FMEA)** \u2014 analyzes manufacturing risks\n\nBoth are governed by **AS9100D Clause 8.3** (design) and **8.5.1** (production controls).\n\n---\n\n## DFMEA (Design Failure Mode & Effects Analysis)\n\n### Purpose\nIdentify potential design weaknesses, manufacturing risks inherent in the design, and use cases where the product could fail. DFMEA is a **design tool** \u2014 it guides design decisions and identifies where design robustness or margin is critical.\n\n### When It's Conducted\n- **Timing:** Early in design phase (after preliminary design); updated through CDR; finalized before production\n- **Owner:** Design engineering team (with input from manufacturing and quality)\n\n### DFMEA Scope\nAnalyzes:\n- **Functional failures** \u2014 the product cannot perform its intended function (e.g., does not produce required output, loses control authority)\n- **Design margin failures** \u2014 design is marginal; small manufacturing variations cause failures (e.g., tolerance stack-up leads to assembly problems)\n- **Use case failures** \u2014 product fails under customer misuse or unexpected conditions\n- **Material failures** \u2014 material properties insufficient (corrosion, fatigue, temperature limits)\n- **Interface failures** \u2014 integration with other systems fails\n\n### DFMEA Structure\n\nA DFMEA table typically includes:\n\n| Column | Description | Example |\n|--------|---|---|\n| **Function** | What the design is supposed to do | \"Maintain thrust vector control to \u00b12\u00b0\" |\n| **Failure Mode** | How the function could fail | \"Actuator sticks; cannot move to commanded position\" |\n| **Effects** | What happens if the failure occurs | \"Loss of thrust vector control; vehicle tumbles; mission failure\" |\n| **Causes** | Why the failure might occur | \"Contaminant jamming actuator; corrosion in pivot bearing; seal leakage\" |\n| **Current Controls** | Design features or tests that prevent or detect the failure | \"Design redundancy (dual actuators); ground testing; in-flight monitoring (telemetry)\" |\n| **Severity (S)** | Impact on function/safety (1\u201310 scale, 10 = catastrophic) | 9 (loss of vehicle control) |\n| **Occurrence (O)** | Likelihood of cause occurring (1\u201310 scale, 10 = almost certain) | 3 (good design margin, low probability) |\n| **Detection (D)** | Likelihood of detecting failure before customer sees it (1\u201310 scale, 10 = impossible to detect) | 4 (testing catches most issues; some field risk) |\n| **Risk Priority Number (RPN)** | RPN = S \u00d7 O \u00d7 D (identifies high-risk items) | 9 \u00d7 3 \u00d7 4 = 108 (medium risk) |\n| **Recommended Actions** | Design changes, tests, or controls to reduce risk | \"Add redundant sensor to detect actuator jams; increase vibration test envelope; design creep to accommodate corrosion\" |\n| **Responsible Party** | Who will implement the action | Design Engineering, Reliability |\n| **Target Completion** | Deadline for action implementation | Pre-CDR review |\n| **New RPN** | RPN after mitigation action implemented | (reduced to 36 after action) |\n\n### RPN Interpretation\n\n- **RPN > 200:** Unacceptable risk; design change mandatory\n- **RPN 100\u2013200:** High risk; mitigation actions required before production\n- **RPN < 100:** Medium/low risk; monitoring and controls sufficient\n\n%%VERIFY%% RPN thresholds vary by program and customer; always confirm with program-specific requirements.\n\n### DFMEA Output\n- Identified design risks ranked by severity and occurrence\n- Recommended design changes (stress relief, material upgrade, manufacturing tolerance tightening, redundancy, etc.)\n- Design verification testing plan (tests to confirm mitigation works)\n- Certification that high-risk failure modes are controlled\n\n---\n\n## PFMEA (Process Failure Mode & Effects Analysis)\n\n### Purpose\nIdentify potential manufacturing process failures, quality risks, and deviations that could result in non-conforming parts or unsafe products. PFMEA is a **process optimization tool** \u2014 it refines manufacturing processes, defines control points, and establishes acceptance criteria.\n\n### When It's Conducted\n- **Timing:** During detailed design (informed by manufacturing process plan); updated after pilot/LRIP build; finalized before full production release\n- **Owner:** Manufacturing engineering team (with input from quality, design, and suppliers)\n\n### PFMEA Scope\nAnalyzes:\n- **Process step failures** \u2014 a manufacturing step is executed incorrectly (wrong temperature, missing step, operator error)\n- **Equipment failures** \u2014 machine drift, tooling wear, temperature excursion\n- **Setup/adjustment failures** \u2014 equipment not set up correctly; tolerance stack-up in tooling\n- **Material/supply failures** \u2014 incoming material out of spec; supplier changes without approval\n- **Inspection/test failures** \u2014 non-conforming parts are not caught; false positives pass bad parts; false negatives reject good parts\n- **Traceability failures** \u2014 parts are commingled or traced incorrectly; cannot identify non-conforming batches\n\n### PFMEA Structure\n\nA PFMEA table includes:\n\n| Column | Description | Example |\n|--------|---|---|\n| **Process Step** | Manufacturing operation | \"Heat treatment: quench at 700\u00b0C to room temperature water\" |\n| **Process Parameter** | What must be controlled | \"Quench temperature\" |\n| **Failure Mode** | How the process could fail | \"Temperature drops below 650\u00b0C (insufficient heating); parts are soft\" |\n| **Effects** | Impact on product | \"Parts fail hardness test; shipped non-conforming parts; field failure / warranty claim\" |\n| **Causes** | Why failure occurs | \"Oven thermostat malfunction; oven door left open; oven power loss; operator sets wrong temp\" |\n| **Current Controls** | In-process inspection/test steps | \"Temperature recorded on log; hardness sample tested every 4 hours; oven calibrated monthly\" |\n| **Severity (S)** | Impact if non-conforming part reaches customer (1\u201310, 10 = safety risk) | 8 (field failure, warranty) |\n| **Occurrence (O)** | Likelihood cause occurs (1\u201310, 10 = frequent) | 2 (thermostat checked monthly; operator trained) |\n| **Detection (D)** | Likelihood control catches defect before shipment (1\u201310, 10 = impossible) | 3 (hardness test catches most, but sample size small) |\n| **RPN** | S \u00d7 O \u00d7 D | 8 \u00d7 2 \u00d7 3 = 48 (low risk) |\n| **Recommended Actions** | Tighter controls, SPC, equipment upgrades | \"Add oven temperature alarm; switch to automated temp control; increase hardness sample size to 10/lot\" |\n| **Responsible Party** | Manufacturing Engineering |\n| **Target Completion** | Pre-production |\n| **New RPN** | After action | (reduced to 8 after action) |\n\n### Process Control Plan (Output of PFMEA)\n\nPFMEA directly informs the **Process Control Plan**, which specifies:\n- **Critical process parameters** (CPPs) \u2014 what must be monitored\n- **Statistical Process Control (SPC)** \u2014 control limits, sampling frequency, charting method\n- **In-process inspection points** \u2014 where inspection happens\n- **Acceptance criteria** \u2014 pass/fail thresholds\n- **Reaction plan** \u2014 what to do if control limits are exceeded\n\n---\n\n## DFMEA vs. PFMEA \u2014 Key Differences\n\n| Aspect | DFMEA | PFMEA |\n|--------|---|---|\n| **Focus** | Product design | Manufacturing process |\n| **Question** | \"Can the design fail?\" | \"Can we manufacture the design consistently?\" |\n| **Owner** | Design engineering | Manufacturing engineering |\n| **Timing** | Early-to-mid design phase | Detailed design / pilot production |\n| **Failure Modes** | Design weaknesses, margin, functional failures | Process deviations, operator error, equipment issues |\n| **Controls** | Design features, test specs, redundancy | SPC, in-process inspection, equipment calibration |\n| **Output** | Design changes, verification testing plan | Process control plan, SPC limits, inspection procedures |\n| **Governance** | AS9100D Clause 8.3 (Design) | AS9100D Clause 8.5.1 (Production) |\n\n---\n\n## Integration with NPI Lifecycle\n\n### DFMEA in NPI\n1. **PDR (Preliminary Design Review):** Preliminary DFMEA; high-level failure modes, early risk assessment\n2. **CDR (Critical Design Review):** Final DFMEA completed; all design risks identified and mitigated; design verified to be robust\n3. **TRR (Test Readiness Review):** DFMEA reviewed; all recommended design verifications completed; no outstanding high-risk items\n\n### PFMEA in NPI\n1. **Pilot Production Planning:** PFMEA initiated; manufacturing process planned; critical process parameters defined\n2. **Pilot/LRIP Build:** PFMEA finalized based on actual process experience; control limits established; SPC monitoring begins\n3. **TRR:** PFMEA reviewed; process control plan approved; supplier capability demonstrated (Cpk/Ppk \u2265 1.33)\n4. **Production Release:** PFMEA filed; process control plan baseline established; production proceeds under SPC control\n\n---\n\n## Related Concepts\n\n- **[[MOC \u2014 NPI Process]]** \u2014 Hub for all NPI concepts\n- **[[Design Reviews \u2014 PDR CDR TRR]]** \u2014 Design reviews where DFMEA is reviewed and approved\n- **[[PPAP in Aerospace \u2014 AS9145]]** \u2014 PPAP submission includes DFMEA and PFMEA summaries\n- **[[Aerospace NPI Process Overview]]** \u2014 Overall NPI lifecycle; DFMEA and PFMEA placement\n- **[[Configuration Management Basics]]** \u2014 FMEA updates when design changes occur\n- **[[AS9100D NPI Clauses]]** \u2014 AS9100D Clause 8.3 (DFMEA) and 8.5.1 (PFMEA) requirements\n\n## Sources\n\n- AS9100D (Clause 8.3 Design & Development Control, 8.5.1 Production Control)\n- SAE J1739 (Recommended Failure Mode and Effects Analysis FMEA Handbook) \u2014 industry standard for FMEA methodology\n- AIAG FMEA (Automotive Industry Action Group FMEA handbook) \u2014 foundational FMEA reference\n\n---\n\n**Notes:**\n- %%VERIFY%% RPN thresholds (> 200 unacceptable, 100\u2013200 high risk) \u2014 confirm against program-specific criteria\n- %%VERIFY%% Severity/Occurrence/Detection scoring (1\u201310 scale) \u2014 confirm rating criteria align with program/customer definitions\n- %%VERIFY%% Cpk minimum (1.33) \u2014 varies by product criticality and customer; defense programs often require Cpk \u2265 1.67\n\nLast updated: 2026-04-13",
      "tags": [
        "phase/NPI",
        "phase/design",
        "phase/manufacturing",
        "process/PFMEA",
        "process/DFMEA"
      ],
      "status": "synthesized",
      "url": "/concepts/pfmea-and-dfmea",
      "relatedConcepts": [
        "moc--npi-process",
        "design-reviews--pdr-cdr-trr",
        "configuration-management-basics",
        "as9100d-npi-clauses",
        "aerospace-npi-process-overview",
        "ppap-in-aerospace--as9145",
        "pfmea-and-dfmea"
      ],
      "supportingArticles": []
    },
    {
      "id": "plc-hmi-and-scada",
      "title": "PLC, HMI, and SCADA",
      "type": "concept",
      "description": "These three technologies form the foundational control stack of industrial automation. They are distinct but designed to work together in a layered hierarchy.",
      "content": "# PLC, HMI, and SCADA\n\n## The Three Layers\n\nThese three technologies form the foundational control stack of industrial automation. They are distinct but designed to work together in a layered hierarchy.\n\n### PLC (Programmable Logic Controller)\nThe execution layer. A specialized industrial computer that:\n- Reads inputs from sensors (temperature, pressure, position, proximity)\n- Executes control logic (ladder logic, function blocks, structured text)\n- Drives outputs to actuators (motors, valves, relays, pumps) in real time\n\nPLCs are built for harsh environments \u2014 extreme temperatures, vibration, electrical noise \u2014 and designed for **deterministic, millisecond-level control**. They are the lowest active layer of automation, directly interacting with physical processes.\n\nA PLC does not show anything to an operator. It executes logic. Period.\n\n### HMI (Human-Machine Interface)\nThe operator layer. Provides a graphical interface between humans and the machines/processes controlled by PLCs:\n- Real-time process visualization (dashboards, P&ID diagrams, trend charts)\n- Alarm management and acknowledgment\n- Setpoint adjustment and manual command issuance\n- Translates raw PLC data into intuitive visual representations\n\nHMIs communicate with PLCs directly (via industrial protocols like Modbus, Profinet, EtherNet/IP) and display their live state. An HMI makes a complex process understandable and controllable by a human operator.\n\n### SCADA (Supervisory Control and Data Acquisition)\nThe supervisory layer. Aggregates data from multiple PLCs and HMIs across a facility or across multiple sites:\n- Centralized monitoring of entire plants or distributed assets\n- Historical data collection and trending\n- Alarm aggregation and escalation\n- Reporting and KPI tracking\n- Remote supervision and control\n\nSCADA operates at a higher level than HMI \u2014 while an HMI is tied to a specific machine or production cell, SCADA gives a plant-wide or enterprise-wide view.\n\n## How They Work Together\n\n```\nPhysical world         Sensors, motors, valves, actuators\n      \u2195\nPLC layer              Real-time control logic (milliseconds)\n      \u2195\nHMI layer              Operator visualization and interaction (per machine/cell)\n      \u2195\nSCADA layer            Supervisory oversight (plant-wide, historical, remote)\n      \u2195\nMES / ERP layer        Production management and business systems\n```\n\nThis stack maps directly to [[ISA-95]] Levels 0\u20133. PLCs occupy Levels 0\u20132; SCADA occupies the upper boundary of Level 2; MES sits at Level 3.\n\n## Key Differences Summary\n\n| | PLC | HMI | SCADA |\n|---|---|---|---|\n| Primary role | Execute control logic | Operator interface | Supervisory oversight |\n| Scope | One machine/process | One machine/cell | Entire plant / multi-site |\n| Real-time level | Milliseconds | Seconds | Seconds to minutes |\n| Data storage | Minimal | Minimal | Yes (historian) |\n| Network | Industrial bus | Connected to PLCs | Connected to PLCs + HMIs |\n\n## Relevance to IT/OT Convergence\n\nPLCs, HMIs, and SCADA are **OT systems** \u2014 they live on the operational technology side of the IT/OT divide. [[IT-OT Convergence]] brings their data up to enterprise IT systems (ERP, analytics, AI). [[Unified Namespace (UNS)]] provides the architecture for doing this without point-to-point integrations.\n\nA common IT/OT convergence pattern: SCADA historian data is published into the UNS broker \u2192 MES and ERP analytics subscribe and consume it \u2192 no custom SCADA-to-ERP integration required.\n\n## Related Concepts\n\n- [[ISA-95]] \u2014 formalizes the hierarchy from PLC/SCADA (Levels 0-2) through MES (Level 3) to ERP (Level 4)\n- [[IT-OT Convergence]] \u2014 how PLC/SCADA data reaches enterprise IT systems\n- [[Unified Namespace (UNS)]] \u2014 modern data bus for collecting and routing OT data from SCADA/PLCs",
      "tags": [
        "domain/industrial",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/plc-hmi-and-scada",
      "relatedConcepts": [
        "it-ot-convergence",
        "unified-namespace-uns",
        "isa-95"
      ],
      "supportingArticles": []
    },
    {
      "id": "plm-erp-mes-integration",
      "title": "PLM-ERP-MES Integration",
      "type": "concept",
      "description": "Manufacturing operations run on three distinct but interconnected systems, each owning a different slice of the product lifecycle:",
      "content": "# PLM-ERP-MES Integration\n\n## The Three-System Model\n\nManufacturing operations run on three distinct but interconnected systems, each owning a different slice of the product lifecycle:\n\n- **PLM** (Product Lifecycle Management) \u2014 drives product and process **innovation**. Manages design data, BOMs, revisions, and configuration through the full lifecycle from concept to EOL.\n- **ERP** (Enterprise Resource Planning) \u2014 manages the commercial **business** of manufacturing. Handles planning, procurement, costing, logistics, and financial execution.\n- **MES** (Manufacturing Execution System) \u2014 manages and tracks **production execution** on the shop floor. Dispatches work orders, monitors OEE, tracks material, and records quality results in real time.\n\nA common shorthand: PLM = what to build, ERP = how to plan/buy, MES = how to actually make it.\n\n## Why Integration Matters\n\nWithout integration, the systems become data silos:\n- Design changes in PLM don't propagate to ERP BOMs \u2192 procurement orders wrong components\n- ERP releases work orders without the latest engineering revision \u2192 production runs old drawings\n- MES captures actuals (yield, cycle time, defects) that never feed back into PLM for design improvement\n\nThe integration closes three loops:\n1. **Product loop** \u2014 PLM design data flows into ERP BOMs and MES work instructions\n2. **Production loop** \u2014 MES execution results feed back into ERP for cost tracking\n3. **Quality loop** \u2014 MES defect data and non-conformances feed back into PLM for design improvement\n\nManufacturers with integrated digital systems report up to 30% reduction in engineering change cycle times and fewer production errors.\n\n## Integration Architecture\n\n### PLM \u2192 ERP\n- Engineering BOM (EBOM) converted to Manufacturing BOM (MBOM) in ERP\n- Item masters, part numbers, and approved supplier lists flow from PLM into ERP\n- Change orders (ECOs) trigger automatic BOM updates in ERP\n\n### PLM \u2192 MES\n- Work instructions and process plans flow from PLM to MES shop floor\n- Revision-controlled drawings delivered to production without manual transfer\n- Routing and operation sequences maintained in PLM, executed in MES\n\n### MES \u2192 ERP\n- Actual production quantities, labor, and material consumption reported to ERP\n- Shop floor transactions close work orders and trigger inventory updates\n\n### MES \u2192 PLM (feedback)\n- Quality inspection results and non-conformance data inform design decisions\n- As-built configurations captured in MES feed product service records in PLM\n\n## ISA-95 as the Integration Standard\n\n[[ISA-95]] defines the standard interface model between Level 4 (ERP) and Level 3 (MES). It specifies what data objects are exchanged (production orders, schedules, performance results) and how they're structured \u2014 preventing vendor lock-in and enabling interoperability across systems from different vendors. See also [[Digital Thread in Manufacturing]].\n\n## Key Risks Without Integration\n\n- **BOM fragmentation** \u2014 EBOM and MBOM diverge, causing procurement and production errors\n- **Revision mismatch** \u2014 production runs stale drawings; engineering doesn't know\n- **Manual rekeying** \u2014 data duplicated across systems, error-prone and labor-intensive\n- **No closed-loop quality** \u2014 defects recur because actual results never inform design\n\n## Related Concepts\n\n- [[Digital Thread in Manufacturing]] \u2014 the connected data flow that PLM-ERP-MES integration enables\n- [[ISA-95]] \u2014 standard defining MES-ERP interface\n- [[Engineering Change Management]] \u2014 how changes flow through the integrated system\n- [[IT-OT Convergence]] \u2014 broader context of connecting enterprise IT with shop-floor OT",
      "tags": [
        "system/PLM",
        "system/ERP",
        "system/MES",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/plm-erp-mes-integration",
      "relatedConcepts": [
        "engineering-change-management",
        "it-ot-convergence",
        "digital-thread-in-manufacturing",
        "isa-95"
      ],
      "supportingArticles": []
    },
    {
      "id": "ppap-in-aerospace--as9145",
      "title": "PPAP in Aerospace \u2014 AS9145",
      "type": "concept",
      "description": "**Production Part Approval Process (PPAP)** is a supplier quality process that demonstrates that a new part, component, or assembly meets design specifications and is ready for production. It originat",
      "content": "# PPAP in Aerospace \u2014 AS9145\n\n## What is PPAP?\n\n**Production Part Approval Process (PPAP)** is a supplier quality process that demonstrates that a new part, component, or assembly meets design specifications and is ready for production. It originated in the automotive industry (AIAG standard) but has been adapted for aerospace and defense via **AS9145**.\n\nIn aerospace, PPAP is part of the supplier qualification and approval workflow \u2014 it occurs during the pilot/LRIP phase and serves as evidence of manufacturing process control and capability.\n\n## PPAP vs. FAI \u2014 Key Difference\n\n- **FAI (First Article Inspection)** per AS9102B \u2014 One-time first article inspection to confirm a design can be manufactured per specifications; focus on product conformance\n- **PPAP (Production Part Approval)** per AS9145 \u2014 Comprehensive supplier process validation, demonstrating sustained manufacturing capability; focus on process control and repeatability\n\n**They work together:** FAI inspects the first article; PPAP demonstrates the process is controlled and capable of making many more articles to the same standard.\n\n---\n\n## PPAP Submission Levels (AS9145)\n\nAS9145 defines **three submission levels**, depending on the part complexity, risk, and customer requirements:\n\n### Level 1 \u2014 Minimal Submission\n**Used for:** Low-risk, standard parts (fasteners, catalog items, no design changes)\n\n**Supplier submits:**\n- Part number, revision, and specifications\n- Statement of conformance (part meets all specifications)\n- Certificate of Conformance (CoC)\n\n**Customer action:** May accept without detailed review\n\n**Typical timeline:** 1\u20132 weeks\n\n---\n\n### Level 2 \u2014 Expanded Submission\n**Used for:** Standard production parts with minor design changes, moderate risk\n\n**Supplier submits:**\n- Part Submission Warrant (PSW) \u2014 summary of part, design changes, process changes\n- Design specification and/or engineering drawing\n- Bill of Materials (if applicable)\n- Material test reports (if material critical)\n- Manufacturing process flow and FMEA summary\n- Dimensional data (CMM report or inspection data)\n- Performance test data\n- First Article Inspection Report (FAIR) summary\n- Certificate of Conformance\n\n**Customer action:** Reviews submission; may request additional data or witness testing\n\n**Typical timeline:** 4\u20138 weeks\n\n---\n\n### Level 3 \u2014 Comprehensive Submission\n**Used for:** Complex parts, critical design changes, high-risk items (safety-critical, single-source), new suppliers\n\n**Supplier submits:**\n- Complete Part Submission Warrant (detailed PSW)\n- Full Design Specification and Engineering Drawing(s)\n- Complete Bill of Materials with part numbers, sources, revisions\n- Complete Design FMEA (DFMEA) and Process FMEA (PFMEA)\n- **Full First Article Inspection Report (FAIR)** per AS9102B\n  - Detailed dimensional data (CMM/inspection on all critical dimensions)\n  - Material certificates and material test reports\n  - Functional and performance test data\n  - Design verification testing results\n- Process capability studies (Cpk, Ppk data)\n- Supplier Quality System summary (AS9100D compliance, certifications)\n- Process audit results (internal supplier audit of manufacturing process)\n- Tooling and equipment control plan\n- Traceability and serialization plan (if applicable)\n- Corrective action procedures and closure evidence\n- Certificate of Conformance and Design Release approval\n\n**Customer action:** Detailed review by engineering and quality teams; may conduct supplier quality audit; may witness first article production\n\n**Typical timeline:** 8\u201316 weeks\n\n---\n\n## PPAP Submission Process\n\n### 1. Planning Phase (Pre-Production)\n- Supplier notified of part and design specifications\n- Supplier assigns PPAP level based on risk and program requirements\n- Supplier initiates design and process planning\n- Supplier schedules PPAP submission date with customer\n\n### 2. Design Phase\n- Supplier reviews design specifications and customer requirements\n- Supplier conducts DFMEA (Design FMEA) to identify design risks\n- Supplier develops preliminary manufacturing process plan\n\n### 3. Pilot/LRIP Production\n- Supplier builds pilot/LRIP units to final design specification\n- Supplier documents manufacturing process (work instructions, setup sheets, control plans)\n- Supplier conducts First Article Inspection (FAI) per AS9102B\n  - Record dimensional data (CMM, go/no-go gauges, functional testing)\n  - Generate First Article Inspection Report (FAIR)\n\n### 4. Process Validation\n- Supplier validates manufacturing process capability (Cpk/Ppk studies on critical characteristics)\n- Supplier conducts Process FMEA (PFMEA) to identify and mitigate production risks\n- Supplier prepares process control plan (SPC, in-process inspection points, sampling plans)\n\n### 5. Submission & Review\n- Supplier submits PPAP package (Level 1, 2, or 3) to customer\n- Customer quality/engineering team reviews submission\n- Customer may request additional data, clarification, or witness testing\n- Customer approves or requests rework/resubmission\n\n### 6. Approval & Production Release\n- Once approved, supplier is authorized to begin full production\n- Supplier maintains PPAP evidence file for the part (traceability, design changes, process changes)\n\n---\n\n## Key Documents in a PPAP Submission\n\n| Document | Purpose | Prepared By |\n|---|---|---|\n| **Part Submission Warrant (PSW)** | Summary of part, design, process changes, and submission level justification | Supplier Quality/Engineering |\n| **Design Drawing** | Complete technical specification (dimensions, materials, tolerances, surface treatments) | Supplier Design |\n| **Bill of Materials (BOM)** | List of all components, raw materials, purchased parts, their specifications | Supplier Engineering |\n| **DFMEA (Design FMEA)** | Analysis of design risks; design controls and mitigations | Supplier Design Engineering |\n| **PFMEA (Process FMEA)** | Analysis of manufacturing process risks; process controls and mitigations | Supplier Manufacturing Engineering |\n| **FAIR (First Article Inspection Report)** | Detailed inspection and test data from first article per AS9102B | Supplier Quality/Inspection |\n| **Process Capability Study** | Cpk/Ppk data demonstrating sustained process capability (minimum Cpk \u2265 1.33 typical) | Supplier Process Engineering |\n| **Process Control Plan** | Work instructions, setup sheets, SPC charts, in-process inspection points, sampling plans | Supplier Manufacturing |\n| **Material Certificates** | Material test data confirming raw material meets specification | Material supplier |\n| **Certificate of Conformance** | Supplier's statement that part and process conform to all specifications | Supplier Quality Manager |\n\n---\n\n## PPAP vs. Automotive AIAG PPAP\n\nWhile the aerospace AS9145 PPAP is based on automotive AIAG PPAP, there are key differences:\n\n| Aspect | Automotive AIAG PPAP | Aerospace AS9145 PPAP |\n|--------|---|---|\n| **Driving standard** | AIAG guidelines (General Motors, Ford, Chrysler) | AS9145 and customer-specific procedures (Boeing, Lockheed, etc.) |\n| **First Article Inspection** | FAIR not always required; focus on production process | **FAIR per AS9102B mandatory** (especially Level 3) |\n| **Design FMEA / Process FMEA** | FMEA encouraged; not always required | **DFMEA and PFMEA mandatory** (Level 3); RPN scores and mitigation documented |\n| **Design Release** | Design change managed by OEM | **Part of supplier PPAP approval** \u2014 supplier must have design release authority |\n| **Process Capability** | Cpk \u2265 1.33 typical | Cpk \u2265 1.67 often required (higher reliability margin) |\n| **Configuration Traceability** | Serial number tracking for critical parts | **Configuration baseline** \u2014 design revision, supplier process revision, tooling revision all tracked |\n| **Documentation Retention** | 3\u20135 years typical | **Lifetime of part in production** (may be 20\u201350+ years for aerospace platforms) |\n| **Customer Witness** | Limited to high-risk parts | **Common for critical parts or new suppliers**; customer may conduct supplier quality audit |\n\n---\n\n## Related Concepts\n\n- **[[MOC \u2014 NPI Process]]** \u2014 Hub for all NPI concepts\n- **[[First Article Inspection \u2014 FAI and FAIR AS9102B]]** \u2014 FAI process and FAIR deliverable (PPAP input)\n- **[[PFMEA and DFMEA]]** \u2014 Process and Design FMEAs, key PPAP submission documents\n- **[[Aerospace NPI Process Overview]]** \u2014 Overall NPI lifecycle; PPAP occurs in pilot/LRIP phase\n- **[[Configuration Management Basics]]** \u2014 Design and process baseline management post-PPAP approval\n- **[[AS9100D NPI Clauses]]** \u2014 AS9100D requirements for production control and supplier approval\n\n## Sources\n\n- AS9145 (Qualification and Approval of Aerospace and Defense Suppliers)\n- AS9102B (First Article Inspection)\n- AIAG PPAP (Automotive Industry Action Group Production Part Approval Process) \u2014 referenced in aerospace adaptations\n\n---\n\n**Notes:**\n- %%VERIFY%% Cpk thresholds (1.33 vs. 1.67) vary by customer and part criticality; always confirm with procurement or customer quality\n- %%VERIFY%% PPAP timelines (4\u201316 weeks) assume supplier has design data and process plan ready; new suppliers may take longer\n- %%VERIFY%% AS9145 revision \u2014 confirm against current published standard\n\nLast updated: 2026-04-13",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense",
        "process/PPAP",
        "standard/AS9145",
        "system/PLM"
      ],
      "status": "synthesized",
      "url": "/concepts/ppap-in-aerospace--as9145",
      "relatedConcepts": [
        "moc--npi-process",
        "configuration-management-basics",
        "pfmea-and-dfmea",
        "first-article-inspection--fai-and-fair-as9102b",
        "as9100d-npi-clauses",
        "aerospace-npi-process-overview",
        "ppap-in-aerospace--as9145"
      ],
      "supportingArticles": []
    },
    {
      "id": "unified-namespace-uns",
      "title": "Unified Namespace (UNS)",
      "type": "concept",
      "description": "A Unified Namespace is a **semantic, event-driven architecture** that acts as a centralized hub for real-time operational data. Instead of point-to-point connections between systems (PLC \u2192 SCADA \u2192 MES",
      "content": "# Unified Namespace (UNS)\n\n## What It Is\n\nA Unified Namespace is a **semantic, event-driven architecture** that acts as a centralized hub for real-time operational data. Instead of point-to-point connections between systems (PLC \u2192 SCADA \u2192 MES \u2192 ERP each with custom integrations), every data source publishes into the UNS and every consumer subscribes to what it needs.\n\nThe UNS acts as the **single source of truth** for all operational data across the enterprise \u2014 from sensors and PLCs on the shop floor to cloud analytics and ERP systems.\n\n## Core Characteristics\n\n- **Single source of truth** \u2014 all operational data flows through one namespace; no conflicting versions across systems\n- **Event-driven (publish/subscribe)** \u2014 data consumers are notified the instant data changes; no polling\n- **Semantic hierarchy** \u2014 data is organized to mirror the enterprise structure (Enterprise \u2192 Site \u2192 Area \u2192 Line \u2192 Machine \u2192 Tag), making it self-describing\n- **Real-time** \u2014 designed for millisecond-to-second latency, not batch synchronization\n\n## Key Components\n\n| Component | Role |\n|-----------|------|\n| **MQTT broker** | Middleware \u2014 routes messages between publishers and subscribers |\n| **Sparkplug B** | Specification on top of MQTT adding semantic metadata, birth/death certificates, and standardized payload format |\n| **Data sources** | PLCs, SCADA, sensors, historians \u2014 anything that publishes |\n| **Data consumers** | MES, ERP, cloud analytics, dashboards, AI/ML pipelines |\n\nMQTT's lightweight publish/subscribe model handles thousands of concurrent connections efficiently, making it well-suited for plant floor environments.\n\n## UNS vs. ISA-95 (Automation Pyramid)\n\n[[ISA-95]] defines a hierarchical, layered model where data passes up through discrete levels. Each layer-to-layer handoff requires point-to-point integration.\n\nUNS replaces this with a flat, event-driven bus:\n\n| | ISA-95 Pyramid | UNS |\n|---|---|---|\n| Integration model | Point-to-point, layer-to-layer | Many-to-many publish/subscribe |\n| Scalability | New systems require new integrations | Subscribe to existing topics |\n| Data latency | Batch or near-real-time | Real-time |\n| Coupling | Tightly coupled | Loosely coupled |\n\nUNS doesn't eliminate ISA-95 \u2014 it implements a data flow model that removes ISA-95's integration complexity. See [[ISA-95]].\n\n## Naming Convention\n\nUNS topics follow a semantic hierarchy that mirrors physical reality:\n\n```\n{Enterprise}/{Site}/{Area}/{Line}/{Cell}/{Tag}\n```\n\nExample:\n```\nACME/PlantA/Assembly/Line3/Robot1/PickCycleTime\n```\n\nEvery data point is self-describing based on its location in the hierarchy. Standardizing this naming convention is the most critical \u2014 and most debated \u2014 step in UNS implementation.\n\n## Real-World Applications\n\n- **OEE monitoring** \u2014 aggregate real-time machine data from all lines without custom integrations\n- **Predictive maintenance** \u2014 route sensor streams directly to ML models without ETL pipelines\n- **MES integration** \u2014 MES subscribes to production completion events; no polling required\n- **Digital twin feeds** \u2014 [[Digital Twins in Manufacturing]] consumes live UNS data for real-time simulation\n\n## Implementation Challenges\n\n- **Naming convention governance** \u2014 once live, renaming topics breaks all subscribers\n- **Legacy system retrofit** \u2014 older PLCs and SCADA systems may need OPC UA or protocol converters to publish\n- **Data quality** \u2014 bad data in the UNS propagates everywhere; validation at the source is critical\n- **Security** \u2014 MQTT broker access control, TLS encryption, and topic-level permissions required\n\n## Relationship to IT/OT Convergence\n\nUNS is the primary technical pattern enabling [[IT-OT Convergence]]. It eliminates the data silos between OT systems (PLCs, SCADA) and IT systems (ERP, analytics) by giving both sides a common, real-time data bus.\n\n## Related Concepts\n\n- [[ISA-95]] \u2014 the hierarchical standard UNS architecturally supersedes for integration\n- [[IT-OT Convergence]] \u2014 UNS is the primary technical pattern that makes IT/OT convergence real\n- [[Digital Twins in Manufacturing]] \u2014 digital twins consume UNS data for real-time fidelity\n- [[PLM-ERP-MES Integration]] \u2014 UNS can serve as the data layer connecting these three systems",
      "tags": [
        "system/MES",
        "domain/industrial",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/unified-namespace-uns",
      "relatedConcepts": [
        "it-ot-convergence",
        "digital-twins-in-manufacturing",
        "isa-95",
        "plm-erp-mes-integration"
      ],
      "supportingArticles": []
    },
    {
      "id": "6-types-of-hil-testing",
      "title": "What Is HIL testing?",
      "type": "source",
      "description": "The concept centers on integrating physical components with virtual representations of other parts of a system. Controllers and software run as they would in a production setting, interacting with rea",
      "tags": [],
      "status": "raw",
      "url": "/sources/6-types-of-hil-testing",
      "source": "https://www.opal-rt.com/blog/6-types-of-hil-testing/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "as9100-clause-guide-for-aerospace-organizations",
      "title": "Request a Quote",
      "type": "source",
      "description": "- Accredited certifications - Helpful resources - No hidden fees - Trusted certification experts [Request a Quote](https://amtivo.com/us/certification-quote/ \"",
      "tags": [],
      "status": "raw",
      "url": "/sources/as9100-clause-guide-for-aerospace-organizations",
      "source": "https://amtivo.com/us/resources/guides-downloads/key-aerospace-9100-clause-guide/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "applications-of-digital-twins-in-manufacturing",
      "title": "What is Digital Twin Technology?",
      "type": "source",
      "description": "A digital twin uses computer models, data, and analytics to create a virtual copy or mirror of a real-life object or system. By replicating it digitally, organizations are able to better understand, m",
      "tags": [],
      "status": "raw",
      "url": "/sources/applications-of-digital-twins-in-manufacturing",
      "source": "https://www.cyngn.com/blog/applications-of-digital-twins-in-manufacturing",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "best-practices-for-engineering-change-management",
      "title": "Overview \u2013 Best Practices for Engineering Change Management",
      "type": "source",
      "description": "Best practices in ECM encompass various strategies and methodologies that help streamline the change process while maintaining quality and compliance. Here\u2019s a detailed overview:",
      "tags": [
        "domain/quality"
      ],
      "status": "raw",
      "url": "/sources/best-practices-for-engineering-change-management",
      "source": "https://technosofteng.com/blogs/guide-to-engineering-change-management/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "best-practices-for-integrating-mes-with-plm-and-erp-prescient",
      "title": "Why MES, PLM, and ERP Integration Matters",
      "type": "source",
      "description": "Each system serves a distinct purpose:",
      "tags": [],
      "status": "raw",
      "url": "/sources/best-practices-for-integrating-mes-with-plm-and-erp-prescient",
      "source": "https://www.pre-scient.com/integrating-mes-with-plm-and-erp-best-practices/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "bill-of-materials-with-integrated-manufacturing",
      "title": "How does integration work in various industries?",
      "type": "source",
      "description": "Industrial manufacturing of automotive, aerospace, shipbuilding, and consumer goods is constantly evolving. Advancements in technologies and processes contribute to the growing complexity of product d",
      "tags": [],
      "status": "raw",
      "url": "/sources/bill-of-materials-with-integrated-manufacturing",
      "source": "https://prostep.us/blog/bill-of-material-as-a-foundation-for-plm-erp-mes-integration/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "digital-thread-in-manufacturing-connecting-cad-plm-erp-and-mes-for-integrated-product-development",
      "title": "Digital Thread in Manufacturing: Connecting CAD, PLM, ERP and MES for Integrated Product Development",
      "type": "source",
      "description": "*In modern manufacturing, disconnected systems between CAD, PLM, ERP and MES often cause costly engineering errors. This is where a **Digital Thread architecture** becomes critical.*",
      "tags": [
        "domain/manufacturing",
        "phase/Manufacturing"
      ],
      "status": "raw",
      "url": "/sources/digital-thread-in-manufacturing-connecting-cad-plm-erp-and-mes-for-integrated-product-development",
      "source": "https://sumedhastech.com/product-lifecycle-management-plm/digital-thread-in-manufacturing-cad-plm-erp-mes-integration/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "digital-twin-manufacturing-applications-benefits-and-insights",
      "title": "Digital Twin Manufacturing: Applications, Benefits, and Industry Insights",
      "type": "source",
      "description": "Manufacturing operations have undergone substantial evolution through the adoption of intelligent digital technologies. [Digital twin manufacturing](https://cdn.simio.com/assets/website/publications/2",
      "tags": [
        "domain/manufacturing",
        "phase/Manufacturing"
      ],
      "status": "raw",
      "url": "/sources/digital-twin-manufacturing-applications-benefits-and-insights",
      "source": "https://www.simio.com/blog/digital-twin-manufacturing-applications-benefits-and-industry-insights",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "elon-musk-and-first-principles-thinking--",
      "title": "Elon Musk and First Principles Thinking.",
      "type": "source",
      "description": "![](https://i0.wp.com/www.supplychaintoday.com/wp-content/uploads/2024/11/First-Principles-Thinking.jpg?w=2000&ssl=1)",
      "tags": [],
      "status": "raw",
      "url": "/sources/elon-musk-and-first-principles-thinking--",
      "source": "https://www.supplychaintoday.com/elon-musk-and-first-principles-thinking/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "engineering-change-order-eco-definition-types-process-and-example",
      "title": "What Is an Engineering Change Order (ECO)?",
      "type": "source",
      "description": "An Engineering Change Order (ECO) is a formal document in engineering and manufacturing that authorizes and governs the implementation of modifications to a product design, component, or process.",
      "tags": [],
      "status": "raw",
      "url": "/sources/engineering-change-order-eco-definition-types-process-and-example",
      "source": "https://simplerqms.com/engineering-change-order/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "engineering-change-management-definition-process-and-best-practices",
      "title": "See the solution in action",
      "type": "source",
      "description": "[Request a demo](https://www.aletiq.com/en/contact/book-a-meeting)",
      "tags": [],
      "status": "raw",
      "url": "/sources/engineering-change-management-definition-process-and-best-practices",
      "source": "https://www.aletiq.com/en/post/engineering-change-management",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "explaining-plc-hmi--scada",
      "title": "Explaining PLC, HMI, and SCADA",
      "type": "source",
      "description": "- [PLC, HMI, and SCADA in Industrial Automation](#industrial-automation) - [What is a PLC (Programmable Logic Controller)?](#about-plc) - [What is an HMI (Human-Machine Interface)?](#about-hmi)",
      "tags": [],
      "status": "raw",
      "url": "/sources/explaining-plc-hmi--scada",
      "source": "https://www.gevernova.com/software/blog/plc-hmi-scada",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "factory-acceptance-test-fat-explained",
      "title": "FAT example",
      "type": "source",
      "description": "Now that you have a good idea about the concept and feel comfortable with it, let\u2019s explore FAT a bit further through a practical example.",
      "tags": [],
      "status": "raw",
      "url": "/sources/factory-acceptance-test-fat-explained",
      "source": "https://www.realpars.com/blog/factory-acceptance-test",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "from-iso-9001-to-as9100-what-you-need-to-know",
      "title": "Get Started Today",
      "type": "source",
      "description": "- Located nationwide - Save time & money - No extra or hidden fees",
      "tags": [],
      "status": "raw",
      "url": "/sources/from-iso-9001-to-as9100-what-you-need-to-know",
      "source": "https://amtivo.com/us/resources/insights/from-iso-9001-to-as9100-what-you-need-to-know/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "generative-design-moves-engineering-from-iteration-to-innovation",
      "title": "At a Glance",
      "type": "source",
      "description": "- AI simultaneously explores thousands of designs against multiple engineering constraints. - AI can achieve up to 50% faster product development speeds.",
      "tags": [],
      "status": "raw",
      "url": "/sources/generative-design-moves-engineering-from-iteration-to-innovation",
      "source": "https://www.designnews.com/design-engineering/ai-powered-generative-design-moves-engineering-from-iteration-to-innovation",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "how-itot-convergence-is-driving-a-staffing-transformation",
      "title": "Converging Organizations",
      "type": "source",
      "description": "Traditionally, IT and OT staffs have been separate departments, with IT running systems of record such as ERP and the OT team in charge of machines and systems in the factories. That approach worked b",
      "tags": [],
      "status": "raw",
      "url": "/sources/how-itot-convergence-is-driving-a-staffing-transformation",
      "source": "https://www.ibaset.com/how-it-ot-convergence-is-driving-a-staffing-transformation/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "how-the-three-main-key-pillars-plm-erp-mes-help-manufacturers",
      "title": "Introduction:",
      "type": "source",
      "description": "Manufacturing is a complex sector as well in Industry 4.0 manufacturers (Small to medium to large enterprises, OEMs) needs enterprise applications to sustain complex procedures. Three core enterprise",
      "tags": [
        "phase/NPI"
      ],
      "status": "raw",
      "url": "/sources/how-the-three-main-key-pillars-plm-erp-mes-help-manufacturers",
      "source": "https://neelsmartec.com/2021/08/03/plm-erp-mes/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "how-to-automate-hmi-systems-testing",
      "title": "Employing automated software testing tools to HMI systems",
      "type": "source",
      "description": "Automating human machine interface (HMI) and connected car experience testing requires computer vision, non-intrusive black box and AI-driven testing. Testing HMI and connected systems requires design",
      "tags": [],
      "status": "raw",
      "url": "/sources/how-to-automate-hmi-systems-testing",
      "source": "https://www.keysight.com/hk/en/use-cases/automate-ivi-systems-testing.html",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "itot-convergence-a-complete-guide",
      "title": "Bridging the Gap Between IT & OT on the Factory Floor",
      "type": "source",
      "description": "In the production plant, it can often feel like a tug of war between two sides of the process: the machines and equipment performing the physical labor, and the data, servers, and digital devices that",
      "tags": [],
      "status": "raw",
      "url": "/sources/itot-convergence-a-complete-guide",
      "source": "https://orise.com/it-ot-convergence-explained/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "implementing-unified-namespace-uns-with-mqtt-sparkplug",
      "title": "Implementing Unified Namespace (UNS) With MQTT Sparkplug",
      "type": "source",
      "description": "",
      "tags": [],
      "status": "raw",
      "url": "/sources/implementing-unified-namespace-uns-with-mqtt-sparkplug",
      "source": "https://www.hivemq.com/blog/implementing-unified-namespace-uns-mqtt-sparkplug/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "integrating-scada-systems-into-unified-namespace",
      "title": "Integrating SCADA Systems into Unified Namespace",
      "type": "source",
      "description": "",
      "tags": [],
      "status": "raw",
      "url": "/sources/integrating-scada-systems-into-unified-namespace",
      "source": "https://www.hivemq.com/blog/integrating-scada-system-into-unified-namespace-iiot/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "otit-convergence-and-physical-ai-innovation",
      "title": "OTIT Convergence and Physical AI Innovation",
      "type": "source",
      "description": "",
      "tags": [],
      "status": "raw",
      "url": "/sources/otit-convergence-and-physical-ai-innovation",
      "source": "https://www.hcltech.com/trends-and-insights/otit-convergence-enabling-next-wave-innovation-physical-ai",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "optimize-your-parts-inventory-to-reduce-obsolescence-risk",
      "title": "The high cost of unplanned downtime",
      "type": "source",
      "description": "The immediate cost of unplanned downtime is the failure to meet production targets, resulting in lost revenue. Longer-term consequences include customer dissatisfaction, which can result in the search",
      "tags": [],
      "status": "raw",
      "url": "/sources/optimize-your-parts-inventory-to-reduce-obsolescence-risk",
      "source": "https://ats-service.com/blog/reduce-parts-obsolescence-risk",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "plc-and-scada-understanding-the-differences-in-industrial-automation-systems",
      "title": "What is a Programmable Logic Controller?",
      "type": "source",
      "description": "A Programmable Logic Controller (PLC) is a specialized industrial computer that controls machinery and processes in manufacturing, assembly lines, and other automation applications.",
      "tags": [],
      "status": "raw",
      "url": "/sources/plc-and-scada-understanding-the-differences-in-industrial-automation-systems",
      "source": "https://www.lselectricamerica.com/blog/plc-and-scada/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "role-of-digital-twin-technology-in-industry-40",
      "title": "Understanding Digital Twin Technology",
      "type": "source",
      "description": "A digital twin is far more than just a static model\u2014it is a constantly evolving, active digital counterpart of a physical asset, system, or process. According to [IBM\u2019s](https://www.ibm.com/think/topi",
      "tags": [],
      "status": "raw",
      "url": "/sources/role-of-digital-twin-technology-in-industry-40",
      "source": "https://www.simio.com/blog/role-of-digital-twin-technology-in-industry-4-0",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "scraps-and-waste-inventory-management-in-manufacturing-operations",
      "title": "Precision Scrap Tracking.Maximum Material Recovery.Leaner Production Lines.",
      "type": "source",
      "description": "Most plants treat scrap as an afterthought. OxMaint treats it as a performance metric. By integrating scrap inventory with asset reliability data, we help you identify exactly which machines are erodi",
      "tags": [
        "domain/manufacturing",
        "phase/Manufacturing"
      ],
      "status": "raw",
      "url": "/sources/scraps-and-waste-inventory-management-in-manufacturing-operations",
      "source": "https://www.oxmaint.com/blog/post/scraps-waste-inventory-management-manufacturing",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "the-architects-guide-to-unified-namespace-uns-implementation-roadmap",
      "title": "The Architect's Guide to Unified Namespace: From Automation Pyramid to Real-Time Event Architecture",
      "type": "source",
      "description": "info",
      "tags": [],
      "status": "raw",
      "url": "/sources/the-architects-guide-to-unified-namespace-uns-implementation-roadmap",
      "source": "https://proxus.io/blog/unified-namespace-architecture-guide/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "the-roles-of-erp-and-plm-in-manufacturing---now-with-mes",
      "title": "The Roles of ERP and PLM in Manufacturing - now with MES!",
      "type": "source",
      "description": "",
      "tags": [
        "domain/manufacturing",
        "phase/Manufacturing"
      ],
      "status": "raw",
      "url": "/sources/the-roles-of-erp-and-plm-in-manufacturing---now-with-mes",
      "source": "https://tech-clarity.com/erp-plm-mes/1095",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "the-impact-of-digital-twins-on-the-evolution-of-intelligent-manufacturing-and-industry-40",
      "title": "Abstract",
      "type": "source",
      "description": "As the adoption of Industry 4.0 advances and the manufacturing process becomes increasingly digital, the Digital Twin (DT) will prove invaluable for testing and simulating new parameters and design va",
      "tags": [],
      "status": "raw",
      "url": "/sources/the-impact-of-digital-twins-on-the-evolution-of-intelligent-manufacturing-and-industry-40",
      "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10246533/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "thread-by-ansubkhan",
      "title": "Thread by @ansubkhan",
      "type": "source",
      "description": "",
      "tags": [],
      "status": "raw",
      "url": "/sources/thread-by-ansubkhan",
      "source": "https://x.com/ansubkhan/status/2043723975025664474",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "top-tips-for-mastering-successful-engineering-change-management",
      "title": "Mastering Engineering Change Management: Tips for Success",
      "type": "source",
      "description": "![Mastering Engineering Change Management: Tips for Success - Artsyl](https://www.artsyltech.com/img/webp/mastering-engineering-change-management.webp)",
      "tags": [
        "domain/quality"
      ],
      "status": "raw",
      "url": "/sources/top-tips-for-mastering-successful-engineering-change-management",
      "source": "https://www.artsyltech.com/blog/mastering-engineering-change-management",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "toyota-vs-tesla-what-manufacturing-mindsets-reveal-about-quality-and-culture",
      "title": "The Same Building, Three Very Different Cultures",
      "type": "source",
      "description": "The Tesla factory in Fremont, California has had three lives. From 1961 to 1982, it was a GM plant \u2014 one of the worst in the company. Quality was terrible. Labor relations were toxic. GM shut it down.",
      "tags": [],
      "status": "raw",
      "url": "/sources/toyota-vs-tesla-what-manufacturing-mindsets-reveal-about-quality-and-culture",
      "source": "https://www.leanblog.org/2026/03/toyota-vs-tesla-manufacturing/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "unified-namespace-mqtt-at-a-glance",
      "title": "MQTT in Unified Namespace at a glance",
      "type": "source",
      "description": "MQTT is a natural foundation for a Unified Namespace, enabling scalable, real-time, event-driven data sharing without point-to-point integrations. In a UNS, MQTT acts as a central pub/sub backbone whe",
      "tags": [],
      "status": "raw",
      "url": "/sources/unified-namespace-mqtt-at-a-glance",
      "source": "https://ttpsc.com/en/blog/unified-namespace-mqtt-best-practices/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "untitled",
      "title": "Untitled",
      "type": "source",
      "description": "",
      "tags": [],
      "status": "raw",
      "url": "/sources/untitled",
      "source": "https://ptc-p-001.sitecorecontenthub.cloud/api/public/content/PTC_Guide-to-Connected-Systems-PLM-ERP-MES?v=41f59fc5",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "what-is-obsolete-inventory-and-how-to-prevent-it",
      "title": "What is obsolete inventory?",
      "type": "source",
      "description": "Obsolete inventory is any inventory that a company can no longer sell or use due to lack of demand. This mostly occurs when goods reach the end of their product life cycle or in cases of sudden sales",
      "tags": [],
      "status": "raw",
      "url": "/sources/what-is-obsolete-inventory-and-how-to-prevent-it",
      "source": "https://www.mrpeasy.com/blog/obsolete-inventory/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "what-is-engineering-change-management",
      "title": "Introduction",
      "type": "source",
      "description": "Engineering Change Management (ECM) is a structured, end-to-end process that helps organizations identify, evaluate, approve, implement, and track changes across product designs, requirements, specifi",
      "tags": [
        "phase/NPI"
      ],
      "status": "raw",
      "url": "/sources/what-is-engineering-change-management",
      "source": "https://visuresolutions.com/plm-guide/engineering-change-management/",
      "relatedConcepts": [],
      "supportingArticles": []
    },
    {
      "id": "what-is-hardware-in-the-loop-testing",
      "title": "Components in a Hardware-in-the-Loop Simulation",
      "type": "source",
      "description": "The key components of a hardware-in-the-loop simulation system are either part of the control device, the simulation plant, or the simulated hardware (sometimes called a digital twin). When combined,",
      "tags": [],
      "status": "raw",
      "url": "/sources/what-is-hardware-in-the-loop-testing",
      "source": "https://www.ansys.com/simulation-topics/what-is-hardware-in-the-loop-testing",
      "relatedConcepts": [],
      "supportingArticles": []
    }
  ],
  "links": [
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
      "target": "pfmea-and-dfmea"
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
      "source": "as9100d-npi-clauses",
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
      "target": "configuration-management-basics"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "moc--digital-systems"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
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
      "target": "aerospace-npi-process-overview"
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
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "configuration-management-basics",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "configuration-management-basics",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "configuration-management-basics",
      "target": "moc--digital-systems"
    },
    {
      "source": "configuration-management-basics",
      "target": "configuration-management-basics"
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
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "as9100d-npi-clauses"
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
      "source": "design-reviews--pdr-cdr-trr",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "engineering-change-management"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "unified-namespace-uns"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "isa-95"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "digital-twins-in-manufacturing"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "it-ot-convergence"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "digital-thread-in-manufacturing-connecting-cad-plm-erp-and-mes-for-integrated-product-development"
    },
    {
      "source": "digital-twins-in-manufacturing",
      "target": "unified-namespace-uns"
    },
    {
      "source": "digital-twins-in-manufacturing",
      "target": "digital-thread-in-manufacturing"
    },
    {
      "source": "digital-twins-in-manufacturing",
      "target": "it-ot-convergence"
    },
    {
      "source": "digital-twins-in-manufacturing",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "digital-twins-in-manufacturing",
      "target": "digital-twin-manufacturing-applications-benefits-and-insights"
    },
    {
      "source": "digital-twins-in-manufacturing",
      "target": "applications-of-digital-twins-in-manufacturing"
    },
    {
      "source": "digital-twins-in-manufacturing",
      "target": "role-of-digital-twin-technology-in-industry-40"
    },
    {
      "source": "digital-twins-in-manufacturing",
      "target": "the-impact-of-digital-twins-on-the-evolution-of-intelligent-manufacturing-and-industry-40"
    },
    {
      "source": "engineering-change-management",
      "target": "digital-thread-in-manufacturing"
    },
    {
      "source": "engineering-change-management",
      "target": "isa-95"
    },
    {
      "source": "engineering-change-management",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "engineering-change-management",
      "target": "what-is-engineering-change-management"
    },
    {
      "source": "engineering-change-management",
      "target": "engineering-change-management-definition-process-and-best-practices"
    },
    {
      "source": "engineering-change-management",
      "target": "engineering-change-order-eco-definition-types-process-and-example"
    },
    {
      "source": "engineering-change-management",
      "target": "best-practices-for-engineering-change-management"
    },
    {
      "source": "engineering-change-management",
      "target": "top-tips-for-mastering-successful-engineering-change-management"
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
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "as9100d-npi-clauses"
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
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "hardware-in-the-loop-hil-testing",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "hardware-in-the-loop-hil-testing",
      "target": "digital-twins-in-manufacturing"
    },
    {
      "source": "hardware-in-the-loop-hil-testing",
      "target": "what-is-hardware-in-the-loop-testing"
    },
    {
      "source": "hardware-in-the-loop-hil-testing",
      "target": "6-types-of-hil-testing"
    },
    {
      "source": "hardware-in-the-loop-hil-testing",
      "target": "how-to-automate-hmi-systems-testing"
    },
    {
      "source": "isa-95",
      "target": "unified-namespace-uns"
    },
    {
      "source": "isa-95",
      "target": "digital-thread-in-manufacturing"
    },
    {
      "source": "isa-95",
      "target": "it-ot-convergence"
    },
    {
      "source": "isa-95",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "it-ot-convergence",
      "target": "unified-namespace-uns"
    },
    {
      "source": "it-ot-convergence",
      "target": "digital-twins-in-manufacturing"
    },
    {
      "source": "it-ot-convergence",
      "target": "isa-95"
    },
    {
      "source": "it-ot-convergence",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "it-ot-convergence",
      "target": "itot-convergence-a-complete-guide"
    },
    {
      "source": "it-ot-convergence",
      "target": "how-itot-convergence-is-driving-a-staffing-transformation"
    },
    {
      "source": "it-ot-convergence",
      "target": "otit-convergence-and-physical-ai-innovation"
    },
    {
      "source": "inventory-management-and-obsolescence",
      "target": "engineering-change-management"
    },
    {
      "source": "inventory-management-and-obsolescence",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "inventory-management-and-obsolescence",
      "target": "what-is-obsolete-inventory-and-how-to-prevent-it"
    },
    {
      "source": "inventory-management-and-obsolescence",
      "target": "optimize-your-parts-inventory-to-reduce-obsolescence-risk"
    },
    {
      "source": "inventory-management-and-obsolescence",
      "target": "scraps-and-waste-inventory-management-in-manufacturing-operations"
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
      "target": "design-reviews--pdr-cdr-trr"
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
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "moc--npi-process",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "moc--npi-process",
      "target": "as9100d-npi-clauses"
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
      "target": "as9100d-npi-clauses"
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
      "source": "pfmea-and-dfmea",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "plc-hmi-and-scada",
      "target": "it-ot-convergence"
    },
    {
      "source": "plc-hmi-and-scada",
      "target": "unified-namespace-uns"
    },
    {
      "source": "plc-hmi-and-scada",
      "target": "isa-95"
    },
    {
      "source": "plc-hmi-and-scada",
      "target": "explaining-plc-hmi--scada"
    },
    {
      "source": "plc-hmi-and-scada",
      "target": "plc-and-scada-understanding-the-differences-in-industrial-automation-systems"
    },
    {
      "source": "plc-hmi-and-scada",
      "target": "how-to-automate-hmi-systems-testing"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "engineering-change-management"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "it-ot-convergence"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "digital-thread-in-manufacturing"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "isa-95"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "the-roles-of-erp-and-plm-in-manufacturing---now-with-mes"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "best-practices-for-integrating-mes-with-plm-and-erp-prescient"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "how-the-three-main-key-pillars-plm-erp-mes-help-manufacturers"
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
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "unified-namespace-uns",
      "target": "it-ot-convergence"
    },
    {
      "source": "unified-namespace-uns",
      "target": "digital-twins-in-manufacturing"
    },
    {
      "source": "unified-namespace-uns",
      "target": "isa-95"
    },
    {
      "source": "unified-namespace-uns",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "unified-namespace-uns",
      "target": "implementing-unified-namespace-uns-with-mqtt-sparkplug"
    },
    {
      "source": "unified-namespace-uns",
      "target": "integrating-scada-systems-into-unified-namespace"
    },
    {
      "source": "unified-namespace-uns",
      "target": "the-architects-guide-to-unified-namespace-uns-implementation-roadmap"
    },
    {
      "source": "unified-namespace-uns",
      "target": "unified-namespace-mqtt-at-a-glance"
    }
  ]
};
