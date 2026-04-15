---
title: Bill of Materials with Integrated Manufacturing
source: https://prostep.us/blog/bill-of-material-as-a-foundation-for-plm-erp-mes-integration/
author: 
published: 2021-03-21
created: 2026-04-13
description: Integrated manufacturing solutions look to loop back through all processes to coordinate all related business systems. Click here to learn more today
tags: 
type: clip
status: raw
---
![PLM, ERP, and MES Integration](https://aenwoygtto.cloudimg.io/v7/prostep.us/wp-content/uploads/2021/03/image-27.png?w=540)

PLM, ERP, and MES Integration

Contents:  
- [How does integration work in various industries?](#intro)
- [Added Value between PLM, MES, and ERP Integration](#value)
- [Industry 4.0](#industry)
- [Bill of Materials between PLM, ERP, and MES as an Integration Layer](#integration)
- [Defining the Need for PLM, ERP, and MES Integration](#define)
	- [Bill of Material Foundations](#bill)
- [Design a Solution for the Digital Thread](#digital)
- [Tool for Integration Between PLM, MES, and ERP](#tool)
- [OpenPDM – Integration Tool Between PLM, MES, and ERP](#openpdm)
- [Conclusion](#conclusion)
- [Glossary Reference](#glossary)

**Introduction**

## How does integration work in various industries?

Industrial manufacturing of automotive, aerospace, shipbuilding, and consumer goods is constantly evolving. Advancements in technologies and processes contribute to the growing complexity of product development. Managing the product at each lifecycle stage can become more onerous with each added system and each transfer of product ownership.

Different tools were created to help minimize difficulty within product development. Product lifecycle management (PLM) was designed to manage the product, processes, and people during the entire development, controlling product evolution from ideation to system end of life. Enterprise Resource Planning (ERP) introduces supplier, tooling, inventory, production facility, and additional logistic details. Lastly, Manufacturing Execution System (MES) captures serialization and consumption of parts and software as each unique product is instantiated, allowing for sustainability tracking. Each step within the product lifecycle is driven by ownership by a primary group. This ownership transfers as the product matures through the process.

As a product reaches its final phase, it is either improved or discontinued. If the development team chooses improvement, then design and engineering teams will rework the product even when the product is in a production state. A change recommended by planners or builders must loop back through the process to coordinate all related business systems. Based on product feedback, the teams make the required changes through a formal change process. After rework, changes are confirmed and approved. Product details are then sent back to ERP for adjustments and floated forward to MES. This ‘closed loop change process’ is essential for agile manufacturers. Though it can be a challenge to put in place, it is essential to remain competitive in the market.

## Integration in the Manufacturing Industry

As a product moves from ideation through sustainment, businesses see frequent product configuration and design changes. Different business applications are used to perform specific tasks using the same product structure and design details to bring added value to processes within the lifecycle. This results in several product iterations, each requiring version control provided by the digital thread. An integrated set of business applications allow design, engineering, planning, procurement, and manufacturing execution to use the same data structures to represent the product’s real-world data. From there, they use this data to make necessary changes and the product is re-released into manufacturing for use. The processes may repeat as needed until the product reaches maturity. Manufacturing processes also need to consider serialization or unique identifications for each part while providing traceability to originating product structures, which the industry labels as the digital thread. Each end-item may have distinctive designs and the digital thread is used to provide specific details which are then represented as a “digital twin.” The digital thread is the backbone for each digital twin design change. The digital twin is the instantiation of a unique product, and the digital thread provides a link across business systems. Baselining of these changes can be defined and built using PROSTEP’s OpenCLM product.

![PROSTEP Manufacturing/Product](data:image/svg+xml;nitro-empty-id=NDg3OjU5Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTI2IDI5NSIgd2lkdGg9IjUyNiIgaGVpZ2h0PSIyOTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

PROSTEP Manufacturing/Product

PLM, ERP, and MES are all vital to effective manufacturing, and the ability to integrate seamlessly between them can make or break a company.

## Added Value for PLM, MES, ERP Integration

Bill of material should be the connection point for traceability during core integrating between PLM, MES, and ERP. Marrying these systems facilitates data sharing for process management initiatives like lean manufacturing, cost management, resource allocation, and just-in-time inventory management. Each system within the enterprise contributes to the development of a product and requires that accurate relationships exist in support of the digital thread.

Here is an example of a lightweight 3D visualization created from a structured bill of material:

![Lightweight 3D Visualized Bill of Materials](data:image/svg+xml;nitro-empty-id=NTE1OjIzMg==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjAwIDM3NSIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzNzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

Lightweight 3D Visualized Bill of Materials

One additional value-add that a bill of material provides is the availability of data at a granular level, allowing each data element to be blocked. This block, when associated with other data elements, can produce reporting needs based on the user’s point of view. Integration supports highly detailed relationships while providing traceability across all xBOMs within the organization regardless of the original business system.

![](data:image/svg+xml;nitro-empty-id=NTI3OjQ1Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjU5IDM3MiIgd2lkdGg9IjY1OSIgaGVpZ2h0PSIzNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

For example, a cost accountant can see the price to make a part, a purchasing agent can evaluate if the part should be made or sourced, a design engineer can ensure it meets requirements, and a quality engineer can confirm that actual products fall within tolerances. A production manager can then establish that estimated production times are accurate. Data elements are available based on the perspective of the user’s needs.

![PROSTEP Three Coordinate Model](data:image/svg+xml;nitro-empty-id=NTM5OjUwNA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjI0IDMzMCIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIzMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

PROSTEP Three Coordinate Model

Companies need to focus on integrations that can reduce replicated effort and streamline data movement by using federation, collaboration, and in some cases duplication of data based on the business applications involved. An example of duplication is simulation management, or engineering changes to production planning and execution. Each system requires its own repository to function.

## Industry 4.0

With Industry 4.0 and IOT, the amount of data being stored has dramatically increased. Manufacturing must now add real-world smart data to the systems. Implementing automation and advanced analytics gives users real-time feedback of product data, and engineers can use this information to combine physical and virtual systems.

## Bill of Material for integration between PLM, ERP, and MES

Bill of Materials (BOM) is a standard definition and structure of a product or end item. An end item, a manufactured product that can be used without further work being done on it, is the key element in product development, manufacturing, and execution. Bill of Materials helps to define the end item and to identify the components of the end item. It also drives lots of discussions and xBOM may seem simple as it is merely a list of components. This is deceptive. xBOM is a structured representation for a product being designed, engineered, manufactured, supported, and discarded. Keeping these related structured representations across different business applications is the foundation of the digital thread.

## PLM, ERP, and MES Integration

As we move towards digitalization, more integration is necessary between core enterprise systems – PLM, ERP, and MES. Market expansion and added technologies result in companies updating and optimizing their systems. For example, companies can choose to view business process use cases in a holistic way across an enterprise apart from business applications. This reduces costs, decreases rework, and streamlines workflow.

![PROSTEP Digital Thread Roadmap](data:image/svg+xml;nitro-empty-id=NTg3OjUwNA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTM1IDI5MCIgd2lkdGg9IjUzNSIgaGVpZ2h0PSIyOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

PROSTEP Digital Thread Roadmap

**Bill of Material Foundations**

There are different structures of bills of materials, and a structured view of a product can allow for breaking down assemblies, sub-assemblies, and components so the product can be dissected or compartmentalized based on need. An example might be mechanical, electrical, software, etc. in support of MBSE (Model Based System Engineering.)

The eBOM ([engineering bill of materials](https://en.wikipedia.org/wiki/Engineering_bill_of_materials)) can define products as they are engineered and only has the assemblies and related components. The pBOM (planning bill of materials) may have added work-centers, the definition of the primary supplier for purchased components of the structure, and consumables like packaging. The mBOM ([manufacturing bill of materials](https://en.wikipedia.org/wiki/Manufacturing_bill_of_materials)) is used as a product is built or maintained on the shop floor (service bill of materials – sBOM). Each structure may have its own entries as the bills of materials mature through the product lifecycle. For example, the process starts with an engineering BOM (eBOM) which only has the assemblies and related components. The planning bill of materials (pBOM) may have added work-centers, the definition of the primary supplier for purchased components of the structure, and consumables like packaging. The sBOM (service bill of materials) is employed for product maintenance. Each structure has its own entries as the bills of materials mature through the product lifecycle.

The relationship between eBOMs and pBOMs is based on production facility. It is often a one-to-many relationship as many variables play a role in defining the pBOM. These variables include but are not limited to unique work-centers, unique production lines, and unique production facility. Each variation drives different resource needs, logistical needs, and even primary suppliers that impact production times, costs, purchasing requirements, etc.

Once the mBOM is established, product building requires the additional capture of unique instances of the same product. For example, each vehicle has a unique VIN and will therefore have unique characteristics of that instantiated end item. Additional data required for capture is driven by location, production line, and work center but now includes robotics and serialization data like VIN, unique component serial numbers, tail numbers, etc. Each instance of the product may also track tack times, cost of components, labor rates, and overhead like electricity or other consumables.

At the end of the day, a manufacturer will need to instantiate this detailed serialization and have a traceable link of the mBOM through the pBOM and then to the eBOM. The eBOM should have the related requirements for this product and other details that defined this engineered product. This traceability is made possible by creating relationships of each structure of the BOM as it matured through the product lifecycle. This is particularly important as engineering, planning, and even execution changes require a change control mechanism that will advance across all structures.

Change control of new revisions must keep original structures intact while providing a new traceable thread for the change. As these changes move through the product lifecycle structures (eBOM/pBOM/mBOM), they will build and maintain new relationships to supply the correct version of the structures for complete traceability.

![PLM ERP Integration Relationship](data:image/svg+xml;nitro-empty-id=NjIzOjUwNg==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjIyIDM1MSIgd2lkdGg9IjYyMiIgaGVpZ2h0PSIzNTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

PLM ERP Integration Relationship

Your PLM manages product development from initial design through end of life (through an eBOM) while maintaining accurate data through a bill of materials during any change processes. As your product is built, you will use an ERP inventory management system for your finances, planning, operations, and inventory (through a pBOM). An ERP’s ability to seamlessly manage data between design changes and product data management within your PLM and purchase orders, financial planning, shipping logistics and more gives your business systems and engineering teams the most up-to-date information between all systems. The actual execution (through an mBOM) is an extension of your pBOM using a manufacturing execution system (MES) that tracks tack times, manages logics and movements during production, and captures execution related data like serial numbers, etc. related to each instance.

History shows us that bill of material data is often siloed and stored in respective domains. Now that we have reviewed the theory of the bill of material and relationships, we must discuss end-user needs driving the solution.

It is necessary to understand what data is needed and when that data can be accessed by each major department within your organization. To do this, a company can review current reports, highlight the key elements within each, and document when in the process this report is required and by whom. This simple review will bear fruit early in the analysis process. Understand your business model and drive towards tangible results that can be clearly defined and measured for success.

![PROSTEP Strategy](data:image/svg+xml;nitro-empty-id=NjQzOjQ5MA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjI0IDMzNSIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIzMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

PROSTEP Strategy

## Design a Solution for the Digital Thread

It is important to focus first on building your extended digital traceability solution. This will require that business processes be clearly defined with specific stakeholders and comprehensive success criteria. By focusing on the business and not the applications, discussions are open to actual needs and not limited to the business applications being used or proposed. It is equally important to clearly define roles for your personnel. This first round of definitions should be simple and use generic user roles like Design Engineer, Mechanical Engineer, Production Engineer, Quality Engineer, etc. More details will come as you embark on the next iteration of introducing the business applications and technical environments, which will present opportunities and limitations.

![PROSTEP Organization and Processes](data:image/svg+xml;nitro-empty-id=NjU5OjUwOA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjI0IDE5NCIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIxOTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

PROSTEP Organization and Processes

The second point of focus is to consider the applications and drive toward OOTB (out of the box) functionality as a starting point. You will likely find discrepancies between your business success criteria and the business systems you review. This is normal. These discrepancies should be documented and addressed after a second pass. During these meetings, it is recommended not only to business SMEs (subject matter experts), but also SMEs of the applications and technical SMEs so nimble decisions can be done and documented.

![PROSTEP Holistic View](data:image/svg+xml;nitro-empty-id=NjcxOjQ5NQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjI0IDI3OCIgd2lkdGg9IjYyNCIgaGVpZ2h0PSIyNzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

PROSTEP Holistic View

You now have a set of defined use cases, success criteria and value propositions. Here is where the rubber meets the road. Each system can be designed to meet the specific goals of your business. Each business application has its own strengths and weaknesses and must find a way to leverage strengths and negate weaknesses. PROSTEP provides the underlying tools to do just that. It is counterintuitive to introduce a new set of user interfaces for the end users so they must bounce from application to application to complete their respective tasks. Instead, PROSTEP extends your business applications and helps you to complete tasks across business applications.

![PROSTEP Simplified User Experience](data:image/svg+xml;nitro-empty-id=NjgzOjUxOQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDQxIDIxMyIgd2lkdGg9IjQ0MSIgaGVpZ2h0PSIyMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

PROSTEP Simplified User Experience

## Tool for Integration between PLM, MES, and ERP

Although digitalization and digital transformation offer companies tremendous opportunities to increase their value creation, they also present major challenges. PROSTEP provides advice and support when defining your strategy for digital transformation, implementing Industry 4.0 initiatives, and developing new, data-driven business models. These new business models are driven by smart, connected products and production systems whose development requires new tools, methods, and processes for interdisciplinary collaboration. We help you integrate tools and methods used in MBSE in your PLM processes and systems. MBSE forms the nucleus of the digital twin, which establishes a link between the digital and physical world and accompanies the product through to the operating phase. PROSTEP works with you to define appropriate applications for the digital twin, create an end-to-end product structure model that brings together all the necessary information in a digital expert, and implement cross-disciplinary configuration lifecycle management for managing the respective configuration of the digital twin. The creation of a digital twin usually requires the restructuring of existing PLM landscapes. Our experts provide you with vendor-neutral advice when defining a target architecture and the corresponding implementation roadmap and lend their support when selecting an appropriate system. We also take account of the requirements that arise from the trend towards multi-platform architectures and the advantages that cloud-based operating models offer your company. Taking an agile approach to a project guarantees fast implementation of the requirements and ensures the success of the project.

## OpenPDM – Integration Tool Between PLM, MES, and ERP

Now that we understand what we are to integrate, we must define a solution. PROSTEP’s OpenPDM is the most comprehensive solution that incorporates various PLM vendors and solves the challenges of data interoperability, collaboration, and security. PROSTEP’s OpenPDM connects various systems to support your internal and external integration tasks. OpenPDM is the missing link that connects and enables cross-domain and interdisciplinary integration in most domains and disciplines. OpenPDM was created to openly connect to virtually any system. With 25+ years of experience and strong technical partnerships, PROSTEP builds solutions to enable system interoperability and collaboration.

OpenPDM is your solution for always consistent, up-to-date data synchronization between multiple systems. OpenPDM provides the end-to-end PLM processes you need to connect, monitor, and control your PLM data. Its configurable interfaces easily connect the most complex integrations and seamlessly provides the import and export of CAD structures and PLM data with ERP and MES data and structures with limitless scalability. PROSTEP’s technological partnerships with leading PLM vendors such as Dassault, SIEMENS, PTC, IBM, SAP, iBaseT, Oracle and others guarantee reliability when you integrate with today’s leading PLM platforms.

OpenPDM is the ideal solution if you work with multiple PLM systems at separate locations or in different departments, or if your company wants to connect a PLM backbone to discipline-specific team data management (TDM) systems. This solution gives you the ability to link or transfer all PLM-relevant information. Moreover, the solution allows your data (including CAD data), documents, versions, and structures from different data sources to be synchronized in either a synchronous or asynchronous process. Your workflows can be set up to control the processes, which means that cross-system change processes can also be controlled automatically.

OpenPDM gives you configurable interfaces for numerous PLM, ERP, MES and simulation data management systems, allowing the import and export of CAD structures and PLM data in formats like ASCII, STEP and XML. These interfaces can also integrate the established applications that may have evolved over time in your business processes.

With OpenPDM, you can integrate and migrate product data through a variety of systems. PROSTEP’s integration and migration connectors enable you to easily manage your product data with both out-of-the-box and customized solutions for your use case.

OpenPDM features:

- CAx Integration/Migration
- SDM/ERP Integration/Migration
- PLM/MES Integration/Migration
- PDM/PLM Integration/Migration
- OSLC, Web Services, STEP, XML, and other Integration/Migration Solutions
![OpenPDM-Integration-Connectors](data:image/svg+xml;nitro-empty-id=NzM1OjEwODQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCA1NzYiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjU3NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=)

OpenPDM-Integration-Connectors

## Conclusion

As a product moves from ideation through sustainment, business applications grow in number and complexity (add simulation, quality control, tooling needs, prototyping, production planning, production execution, service, etc.) Each business application has different maturity levels and the capability to both “baseline” across these business applications and relate to a given revision will be key to managing changes and providing a rich data set for each consumer of the data.

## Glossary Reference

### Product Lifecycle Management (PLM)

Product lifecycle management (PLM) is the process of managing the entire lifecycle of a product from inception, through engineering design and manufacture, to service and disposal of manufactured products. PLM integrates people, data, processes, and business systems and provides a product information backbone for companies and their extended enterprise.

### Enterprise Resource Planning (ERP)

Enterprise Resource Planning (ERP) is used by companies to manage planning and execute business processes such as accounting, project management, purchasing and procurement, production facility planning, inventory levels and many other supply chain activities. An ERP offers scalability and room for expansion as a business grows and adjusts to market trends. There are industry specific ERP systems as well as open-source ERPs and each has its own niche in the market. Additionally, most ERPs have a robust API for integration benefits, helping to normalize integration. Looking for integration capabilities ensures your systems for future viability.

### Manufacturing Planning Bill of Materials

The mBOM shares many product structures with the engineering bill of material (eBOM), but also includes details based on the production plant, production line, procurement, logistics, etc. One eBOM may be related to many mBOMs. Another important detail is the sourcing of supply inventory, as the primary vendor of plant A may not be the same primary vendor for plant B. ERP deals with not only the product structure, but also the work centers, procurement initiatives, inventory management, etc. which creates several mBOMs for the same end item.

### Manufacturing Execution Systems (MES)

Manufacturing Execution Systems (MES) is your system to connect and manage the planning and execution of your manufacturing functions at the plant level. Additional details for MES (through a pBOM) include work instructions, routings and other process definitions required for the execution phase of the process. Industry Groups such as MESA (Manufacturing Enterprise Solutions Association) International, created in the 1990s, have defined criteria that set the scope for MES. The most recent model developed in 2008 shows the relationship between business strategy, enterprise, and shop floor operations.

End items produced will have unique attributes related to production execution. The same product could be produced on different production lines within a plant, or produced at a different plant, or even produced in a different country. This necessitates a production execution bill of material (pBOM). The pBOM tracks the discrete end item being produced. For every mBOM, one or more pBOMs can be used for execution based on plant, country, production line, work center, or any combination of these. Inventory consumption happens in MES, and each of the consumed items may have uniqueness to them, providing the details to build a digital twin.

---

**Authors:**

![Philip Michaud, Key Account Executive, PROSTEP INC](data:image/svg+xml;nitro-empty-id=ODAzOjI1MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDMwMCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+)

Philip Michaud, PROSTEP INC

**Philip Michaud, Key Account Executive, PROSTEP INC**

Phil Michaud has been in the business of integration for 30+ years and has experience in many different roles and at different organizational levels. Phil is a results-driven professional actively engaging customer prospects in engineering and manufacturing and helping companies to extend their PLM portfolio. Phil applies leadership talent and technical expertise to communicate effectively to both technical and non-technical personnel at all levels. As an effective decision maker and innovative problem solver, Phil carefully analyzes situations and builds consensus on creative strategies in solving complex problems.

With specific experience as a Business Process Architect, Software Project Manager, and Agile Business Analyst, Phil’s expertise in balancing business process engineering needs with integrated application integration projects delivers an immediate impact to an organization’s business issues. As a bottom-line contributor, Phil has a solid track record of increasing operational efficiencies, generating cost savings, and contributing to company profits during his career.

---

![](data:image/svg+xml;nitro-empty-id=ODIzOjIwOA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgODAiIHdpZHRoPSI2MSIgaGVpZ2h0PSI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=)

Joseph Lopez, PROSTEP INC

**Joseph Lopez, Marketing, PROSTEP INC**

Joseph is a 10+ year experienced marketing professional with a demonstrated history of working in the engineering, information technology, and healthcare industries.  
  
He is skilled in marketing strategy, search engine optimization (SEO) and tracking with Google Analytics, PPC campaign strategy and planning with Google Adwords, technical copywriting and web design and landing page creation with a strong emphasis on generating leads and maximizing conversions.  
  
With a Master of Computer Information Systems from the University of Detroit Mercy, Joseph is a lifelong learner and passionate about business, marketing and sales.