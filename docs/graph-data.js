const graphData = {
  "nodes": [
    {
      "id": "aerospace-npi-process-overview",
      "title": "Aerospace NPI Process Overview",
      "type": "concept",
      "description": "New Product Introduction (NPI) in aerospace and defense is a highly structured, gate-driven process that takes a concept from design through production release. Unlike commercial consumer electronics",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense",
        "standard/AS9100D"
      ],
      "status": "synthesized",
      "url": "/concepts/aerospace-npi-process-overview",
      "relatedConcepts": [
        "as9100d-npi-clauses",
        "first-article-inspection--fai-and-fair-as9102b",
        "moc--digital-systems",
        "moc--npi-process",
        "configuration-management-basics",
        "ppap-in-aerospace--as9145",
        "design-reviews--pdr-cdr-trr",
        "aerospace-npi-process-overview"
      ],
      "supportingArticles": []
    },
    {
      "id": "as9100d-npi-clauses",
      "title": "AS9100D NPI Clauses",
      "type": "concept",
      "description": "**AS9100D** (Revision D, current) is the aerospace and defense quality management standard. It combines ISO 9001:2015 base requirements with additional aerospace-specific controls for configuration ma",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense",
        "standard/AS9100D",
        "system/QMS"
      ],
      "status": "synthesized",
      "url": "/concepts/as9100d-npi-clauses",
      "relatedConcepts": [
        "first-article-inspection--fai-and-fair-as9102b",
        "aerospace-npi-process-overview",
        "moc--npi-process",
        "configuration-management-basics",
        "ppap-in-aerospace--as9145",
        "pfmea-and-dfmea",
        "design-reviews--pdr-cdr-trr",
        "as9100d-npi-clauses"
      ],
      "supportingArticles": []
    },
    {
      "id": "configuration-management-basics",
      "title": "Configuration Management Basics",
      "type": "concept",
      "description": "**Configuration Management** is the discipline of identifying, controlling, and tracking all versions of a product's design, components, materials, and processes throughout its lifecycle. It ensures t",
      "tags": [
        "phase/NPI",
        "phase/sustaining",
        "system/PLM",
        "domain/aerospace-defense"
      ],
      "status": "synthesized",
      "url": "/concepts/configuration-management-basics",
      "relatedConcepts": [
        "as9100d-npi-clauses",
        "first-article-inspection--fai-and-fair-as9102b",
        "aerospace-npi-process-overview",
        "moc--digital-systems",
        "moc--npi-process",
        "design-reviews--pdr-cdr-trr",
        "configuration-management-basics"
      ],
      "supportingArticles": []
    },
    {
      "id": "design-reviews--pdr-cdr-trr",
      "title": "Design Reviews \u2014 PDR, CDR, TRR",
      "type": "concept",
      "description": "Design Reviews are formal, gated assessments that occur at critical milestones in the aerospace NPI lifecycle. They are governed by **MIL-STD-1521B** (or customer-specific variants) and serve as **go/",
      "tags": [
        "phase/NPI",
        "phase/design",
        "domain/aerospace-defense"
      ],
      "status": "synthesized",
      "url": "/concepts/design-reviews--pdr-cdr-trr",
      "relatedConcepts": [
        "as9100d-npi-clauses",
        "first-article-inspection--fai-and-fair-as9102b",
        "aerospace-npi-process-overview",
        "moc--npi-process",
        "configuration-management-basics",
        "ppap-in-aerospace--as9145",
        "pfmea-and-dfmea",
        "design-reviews--pdr-cdr-trr"
      ],
      "supportingArticles": []
    },
    {
      "id": "digital-thread-in-manufacturing",
      "title": "Digital Thread in Manufacturing",
      "type": "concept",
      "description": "The digital thread is the **continuous, connected flow of product data** across all systems involved in a product's lifecycle \u2014 from initial design through manufacturing, delivery, and service. It eli",
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
        "plm-erp-mes-integration",
        "first-article-inspection--fai-and-fair-as9102b",
        "aerospace-npi-process-overview",
        "isa-95",
        "engineering-change-management",
        "unified-namespace-uns",
        "it-ot-convergence",
        "digital-twins-in-manufacturing"
      ],
      "supportingArticles": []
    },
    {
      "id": "digital-twins-in-manufacturing",
      "title": "Digital Twins in Manufacturing",
      "type": "concept",
      "description": "A digital twin is a **dynamic virtual replica** of a physical asset, process, or system that is continuously synchronized with its real-world counterpart through live data. Unlike a static CAD model o",
      "tags": [
        "system/digital-twin",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/digital-twins-in-manufacturing",
      "relatedConcepts": [
        "plm-erp-mes-integration",
        "unified-namespace-uns",
        "digital-thread-in-manufacturing",
        "it-ot-convergence"
      ],
      "supportingArticles": []
    },
    {
      "id": "engineering-change-management",
      "title": "Engineering Change Management",
      "type": "concept",
      "description": "Engineering Change Management (ECM) is the structured, end-to-end process for identifying, evaluating, approving, implementing, and tracking modifications to product designs, requirements, specificati",
      "tags": [
        "system/PLM",
        "phase/sustaining",
        "domain/manufacturing",
        "domain/quality"
      ],
      "status": "synthesized",
      "url": "/concepts/engineering-change-management",
      "relatedConcepts": [
        "plm-erp-mes-integration",
        "isa-95",
        "digital-thread-in-manufacturing"
      ],
      "supportingArticles": []
    },
    {
      "id": "first-article-inspection--fai-and-fair-as9102b",
      "title": "First Article Inspection \u2014 FAI and FAIR AS9102B",
      "type": "concept",
      "description": "**First Article Inspection (FAI)** is a comprehensive, one-time inspection and testing of the first production (or pilot) article of a new part or component to verify that:",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense",
        "process/FAI",
        "standard/AS9102B"
      ],
      "status": "synthesized",
      "url": "/concepts/first-article-inspection--fai-and-fair-as9102b",
      "relatedConcepts": [
        "as9100d-npi-clauses",
        "aerospace-npi-process-overview",
        "moc--npi-process",
        "configuration-management-basics",
        "ppap-in-aerospace--as9145",
        "pfmea-and-dfmea",
        "first-article-inspection--fai-and-fair-as9102b"
      ],
      "supportingArticles": []
    },
    {
      "id": "hardware-in-the-loop-hil-testing",
      "title": "Hardware-in-the-Loop (HIL) Testing",
      "type": "concept",
      "description": "Hardware-in-the-loop (HIL) testing is a validation technique where a **real embedded control unit** (ECU) runs its actual production software, but instead of being connected to a real physical plant (",
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
      "id": "inventory-management-and-obsolescence",
      "title": "Inventory Management and Obsolescence",
      "type": "concept",
      "description": "Obsolete inventory is any inventory a company can no longer sell or use due to lack of demand. In manufacturing specifically: - **Finished goods** \u2014 products that have reached end-of-life or been supe",
      "tags": [
        "system/ERP",
        "phase/sustaining",
        "domain/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/inventory-management-and-obsolescence",
      "relatedConcepts": [
        "plm-erp-mes-integration",
        "engineering-change-management"
      ],
      "supportingArticles": []
    },
    {
      "id": "isa-95",
      "title": "ISA-95",
      "type": "concept",
      "description": "ISA-95 (also published as IEC 62264) is the international standard developed by the **International Society of Automation (ISA)** that defines: - The functional architecture of manufacturing operation",
      "tags": [
        "system/MES",
        "system/ERP",
        "domain/manufacturing",
        "domain/industrial"
      ],
      "status": "synthesized",
      "url": "/concepts/isa-95",
      "relatedConcepts": [
        "plm-erp-mes-integration",
        "unified-namespace-uns",
        "digital-thread-in-manufacturing",
        "it-ot-convergence"
      ],
      "supportingArticles": []
    },
    {
      "id": "it-ot-convergence",
      "title": "IT-OT Convergence",
      "type": "concept",
      "description": "**Operational Technology (OT)** \u2014 hardware and software that monitors and controls physical processes. Deals with the tangible, real-time world of manufacturing:",
      "tags": [
        "system/MES",
        "domain/industrial",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/it-ot-convergence",
      "relatedConcepts": [
        "plm-erp-mes-integration",
        "isa-95",
        "unified-namespace-uns",
        "digital-twins-in-manufacturing"
      ],
      "supportingArticles": []
    },
    {
      "id": "moc--digital-systems",
      "title": "Map of Content \u2014 Digital Systems",
      "type": "concept",
      "description": "Central hub for Product Lifecycle Management (PLM), Enterprise Resource Planning (ERP), and Manufacturing Execution Systems (MES) concepts and their integration in hardware development and production.",
      "tags": [
        "system/PLM",
        "system/ERP",
        "system/MES",
        "domain/industrial"
      ],
      "status": "synthesized",
      "url": "/concepts/moc--digital-systems",
      "relatedConcepts": [
        "configuration-management-basics",
        "aerospace-npi-process-overview",
        "pfmea-and-dfmea"
      ],
      "supportingArticles": []
    },
    {
      "id": "moc--npi-process",
      "title": "Map of Content \u2014 NPI Process",
      "type": "concept",
      "description": "Central hub for New Product Introduction concepts in aerospace and defense. Navigate by role, process, or standard.",
      "tags": [
        "phase/NPI",
        "domain/aerospace-defense"
      ],
      "status": "synthesized",
      "url": "/concepts/moc--npi-process",
      "relatedConcepts": [
        "as9100d-npi-clauses",
        "first-article-inspection--fai-and-fair-as9102b",
        "aerospace-npi-process-overview",
        "moc--digital-systems",
        "configuration-management-basics",
        "ppap-in-aerospace--as9145",
        "pfmea-and-dfmea",
        "design-reviews--pdr-cdr-trr"
      ],
      "supportingArticles": []
    },
    {
      "id": "pfmea-and-dfmea",
      "title": "PFMEA and DFMEA",
      "type": "concept",
      "description": "**FMEA (Failure Mode & Effects Analysis)** is a systematic technique for identifying and analyzing potential failures in a product or process, assessing their severity and occurrence probability, and",
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
        "as9100d-npi-clauses",
        "aerospace-npi-process-overview",
        "moc--npi-process",
        "configuration-management-basics",
        "ppap-in-aerospace--as9145",
        "design-reviews--pdr-cdr-trr",
        "pfmea-and-dfmea"
      ],
      "supportingArticles": []
    },
    {
      "id": "plc-hmi-and-scada",
      "title": "PLC, HMI, and SCADA",
      "type": "concept",
      "description": "These three technologies form the foundational control stack of industrial automation. They are distinct but designed to work together in a layered hierarchy.",
      "tags": [
        "domain/industrial",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/plc-hmi-and-scada",
      "relatedConcepts": [
        "isa-95",
        "unified-namespace-uns",
        "it-ot-convergence"
      ],
      "supportingArticles": []
    },
    {
      "id": "plm-erp-mes-integration",
      "title": "PLM-ERP-MES Integration",
      "type": "concept",
      "description": "Manufacturing operations run on three distinct but interconnected systems, each owning a different slice of the product lifecycle:",
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
        "isa-95",
        "engineering-change-management",
        "digital-thread-in-manufacturing",
        "it-ot-convergence"
      ],
      "supportingArticles": []
    },
    {
      "id": "ppap-in-aerospace--as9145",
      "title": "PPAP in Aerospace \u2014 AS9145",
      "type": "concept",
      "description": "**Production Part Approval Process (PPAP)** is a supplier quality process that demonstrates that a new part, component, or assembly meets design specifications and is ready for production. It originat",
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
        "as9100d-npi-clauses",
        "first-article-inspection--fai-and-fair-as9102b",
        "aerospace-npi-process-overview",
        "moc--npi-process",
        "configuration-management-basics",
        "pfmea-and-dfmea",
        "ppap-in-aerospace--as9145"
      ],
      "supportingArticles": []
    },
    {
      "id": "unified-namespace-uns",
      "title": "Unified Namespace (UNS)",
      "type": "concept",
      "description": "A Unified Namespace is a **semantic, event-driven architecture** that acts as a centralized hub for real-time operational data. Instead of point-to-point connections between systems (PLC \u2192 SCADA \u2192 MES",
      "tags": [
        "system/MES",
        "domain/industrial",
        "domain/manufacturing",
        "phase/manufacturing"
      ],
      "status": "synthesized",
      "url": "/concepts/unified-namespace-uns",
      "relatedConcepts": [
        "plm-erp-mes-integration",
        "isa-95",
        "digital-twins-in-manufacturing",
        "it-ot-convergence"
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
    }
  ],
  "links": [
    {
      "source": "aerospace-npi-process-overview",
      "target": "as9100d-npi-clauses"
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
      "target": "moc--npi-process"
    },
    {
      "source": "aerospace-npi-process-overview",
      "target": "configuration-management-basics"
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
      "target": "aerospace-npi-process-overview"
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
      "target": "moc--npi-process"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "configuration-management-basics"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "as9100d-npi-clauses",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "configuration-management-basics",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "configuration-management-basics",
      "target": "first-article-inspection--fai-and-fair-as9102b"
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
      "source": "design-reviews--pdr-cdr-trr",
      "target": "as9100d-npi-clauses"
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
      "target": "moc--npi-process"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "configuration-management-basics"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "design-reviews--pdr-cdr-trr",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "plm-erp-mes-integration"
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
      "target": "isa-95"
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
      "target": "it-ot-convergence"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "digital-twins-in-manufacturing"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "digital-thread-in-manufacturing-connecting-cad-plm-erp-and-mes-for-integrated-product-development"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "weaving-the-digital-thread---the-interoperability-standards-powering-smart-manufacturing--metrology-and-quality-news"
    },
    {
      "source": "digital-thread-in-manufacturing",
      "target": "advancing-aerospace-engineering-with-mbseplm-integration"
    },
    {
      "source": "digital-twins-in-manufacturing",
      "target": "plm-erp-mes-integration"
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
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "engineering-change-management",
      "target": "isa-95"
    },
    {
      "source": "engineering-change-management",
      "target": "digital-thread-in-manufacturing"
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
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "aerospace-npi-process-overview"
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
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "first-article-inspection--fai-and-fair-as9102b",
      "target": "pfmea-and-dfmea"
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
      "source": "inventory-management-and-obsolescence",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "inventory-management-and-obsolescence",
      "target": "engineering-change-management"
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
      "source": "isa-95",
      "target": "plm-erp-mes-integration"
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
      "target": "isa-95-the-standard-for-mes-architectures-and-erp-integration"
    },
    {
      "source": "isa-95",
      "target": "what-is-isa95-understand-the-standard-behind-mes-and-erp-integration"
    },
    {
      "source": "it-ot-convergence",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "it-ot-convergence",
      "target": "isa-95"
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
      "source": "moc--digital-systems",
      "target": "configuration-management-basics"
    },
    {
      "source": "moc--digital-systems",
      "target": "aerospace-npi-process-overview"
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
      "target": "first-article-inspection--fai-and-fair-as9102b"
    },
    {
      "source": "moc--npi-process",
      "target": "aerospace-npi-process-overview"
    },
    {
      "source": "moc--npi-process",
      "target": "moc--digital-systems"
    },
    {
      "source": "moc--npi-process",
      "target": "configuration-management-basics"
    },
    {
      "source": "moc--npi-process",
      "target": "ppap-in-aerospace--as9145"
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
      "source": "pfmea-and-dfmea",
      "target": "as9100d-npi-clauses"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "aerospace-npi-process-overview"
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
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "design-reviews--pdr-cdr-trr"
    },
    {
      "source": "pfmea-and-dfmea",
      "target": "pfmea-and-dfmea"
    },
    {
      "source": "plc-hmi-and-scada",
      "target": "isa-95"
    },
    {
      "source": "plc-hmi-and-scada",
      "target": "unified-namespace-uns"
    },
    {
      "source": "plc-hmi-and-scada",
      "target": "it-ot-convergence"
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
      "target": "isa-95"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "engineering-change-management"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "digital-thread-in-manufacturing"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "it-ot-convergence"
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
      "source": "plm-erp-mes-integration",
      "target": "integrating-pdm--plm-and-erp"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "plm-101-a-deep-dive-into-product-lifecycle-management"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "practical-erp-mes-integration-guide"
    },
    {
      "source": "plm-erp-mes-integration",
      "target": "erp-vs-plm-vs-mes-whats-the-difference-and-which-one-does-your-industry-need"
    },
    {
      "source": "ppap-in-aerospace--as9145",
      "target": "as9100d-npi-clauses"
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
      "target": "ppap-in-aerospace--as9145"
    },
    {
      "source": "unified-namespace-uns",
      "target": "plm-erp-mes-integration"
    },
    {
      "source": "unified-namespace-uns",
      "target": "isa-95"
    },
    {
      "source": "unified-namespace-uns",
      "target": "digital-twins-in-manufacturing"
    },
    {
      "source": "unified-namespace-uns",
      "target": "it-ot-convergence"
    },
    {
      "source": "unified-namespace-uns",
      "target": "understanding-the-unified-namespace-uns-in-industrial-iot"
    },
    {
      "source": "unified-namespace-uns",
      "target": "unified-namespace-uns-in-manufacturing---a-practical-example"
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
