---
title: "Unified Namespace (UNS) in Manufacturing - A Practical Example"
source: "https://i-flow.io/en/ressources/unified-namespace-uns-in-manufacturing-a-practical-example/"
author:
  - "[[christoph]]"
published: 2024-02-14
created: 2026-04-15
description: "Discover how the Unified Namespace (UNS) in manufacturing is driving digitalization and smart factories based on a practical example."
tags:
  - "clippings"
---
The digitalization of industrial production has been driven forward for years with ever-increasing investment. However, comprehensive factory-wide or even company-wide digitalization is still the exception. According to McKinsey, there is a value creation potential of USD 3.7 trillion, but more than 70% of companies are unable to exploit this potential ([source](https://www.mckinsey.com/~/media/mckinsey/industries/advanced%20electronics/our%20insights/capturing%20value%20at%20scale%20in%20discrete%20manufacturing%20with%20industry%204%200/industry-4-0-capturing-value-at-scale-in-discrete-manufacturing-vf.pdf)). Even on factory tours through so-called lighthouse factories, the production lines presented are often lighthouses themselves. So what is stopping the industry from making the breakthrough? And can the implementation of the Unified Namespace (UNS) in manufacturing help?

## The Data Problem in Manufacturing

To understand the core problem in the industry, let’s first take a look at the value creation potential of USD 3.7 trillion. Where does this immense potential come from? The simple answer: data. Industry 4.0 strives to use all available data to gain comprehensive insights into the past, current and future business situation.

### Industry 4.0: Big Promise, Little Progress

![5 steps to the smart factory](https://i-flow.io/wp-content/uploads/2024/02/5-Steps-to-a-Smart-Factory.svg "5 steps to the smart factory")

Smart Factory implementation in the context of Industry 4.0 typically follows five key phases:

1. **Phase 1 – Create a lean foundation:** Every smart factory begins with lean, standardized processes. Only stable, efficient processes provide a solid basis for digitalization. Digitalizing inefficiency simply automates waste – and adds no value.
2. **Phase 2 – Connect systems:** Machines, ERP, and MES systems must be seamlessly interconnected. This end-to-end connectivity is essential for aligning IT and OT – forming the backbone of any digital transformation.
3. **Phase 3 – Create transparency:** Once connected, data can be analyzed to uncover the “why” behind events. Transparency replaces gut feeling with data-driven insights, enabling informed decision-making.
4. ****Phase 4 – Enable predictability:**** With transparency comes predictability. Data models can detect anomalies and foresee issues before they occur, transforming reactive workflows into proactive strategies.
5. ****Phase 5 – Achieve adaptivity:**** Fully adaptive systems make autonomous decisions. Production parameters adjust dynamically to external influences, maximizing efficiency and quality in real time.

Phases 1 and 2 form the foundation for the Smart Factory. Without stable processes and scalable system integration, Industry 4.0 will fail.

Despite the clear potential, studies show that over 80% of industrial companies remain stuck in the connectivity phase (phase 2). The big breakthrough has yet to happen. In addition to general challenges such as data silos, poor data quality and security concerns, there are two industry-specific problems in particular that are slowing down the manufacturing industry:

### 1st Problem: Application-Centric Architecture

Today’s system architectures are very complex. Every system provider, whether in the OT or IT sector, sees its own application as the central pivotal point. The applications are integrated with all other applications on the neighboring levels of the automation pyramid. Thereby, each integration is created individually. This essentially means that protocols, data types and semantics have to be mapped, copied back and forth and integrated each time. Each new integration increases the overall complexity of the system architecture. And with increasing complexity, data acquisition and the system integration is becoming more and more complicated.[![Complex system architectures in production](https://i-flow.io/wp-content/uploads/2023/12/Design-ohne-Titel.svg "Complex system architectures in production")](https://i-flow.io/wp-content/uploads/2023/12/Design-ohne-Titel.svg) This also creates hidden vendor lock-in. Dependencies arise not from the applications themselves, but from the non-transparent integrations surrounding them – making system replacement difficult and costly. To scale Industry 4.0 initiatives, manufacturers must shift from application-centric to data-centric architectures that are modular, interoperable, and easier to evolve.

### 2nd Problem: Extreme System Heterogeneity in OT and IT

The integration of OT/IT (e.g. machines, Historian, MES) usually takes place in the brownfield, with considerable differences between production lines and factories. Numerous generations of systems exist side by side, some of which may have been in operation for decades. This heterogeneity of the systems generally increases with the size of the company. The lack of standards in the systems, their interfaces and their data semantics makes data connection and system integration considerably more difficult.

## The Unified Namespace (UNS) – Overview

In contrast to an application-centric architecture, a data-centric architecture focuses on the data. The idea is that systems and applications should be built around the data and be interchangeable. This is precisely where the concept of the Unified Namespace (UNS) comes in. The UNS is an architectural concept that aims to make all of a company’s data centrally accessible in real time. The data is available via a standardized naming convention and data structure in a central message broker. [![Unified Namespace (UNS) in production](https://i-flow.io/wp-content/uploads/2023/12/Design-ohne-Titel-1.svg "Unified Namespace (UNS) in production")](https://i-flow.io/wp-content/uploads/2023/12/Design-ohne-Titel-1.svg)

Connected systems can act as both data producers and data consumers. They publish and subscribe to data via the broker and adhere to plant or company-wide data standards. This enables simple organization and access to data across different systems and locations. Further details and advantages of the UNS concept are summarized [here](https://i-flow.io/en/ressources/what-is-the-unified-namespace-uns-explained-in-simple-words/).

## Unified Namespace (UNS) in Manufacturing

The Unified Namespace (UNS) architecture thus addresses the central challenges in manufacturing: application-centric architectures and a lack of connectivity due to extreme system heterogeneity in OT and IT. As a data-centric communication model, the UNS replaces individual point-to-point integrations with a standardized, real-time-capable data space. This shared data space is scalable and already integrates millions of machines, control systems and IT applications today. The UNS thus creates the technical basis for phase 2 of the smart factory: cross-system connectivity.### Advantages in Manufacturing

In manufacturing, the Unified Namespace (UNS) has significant advantages over the classic integration via the automation pyramid. It increases the data availability, scalability and dynamic exchangeability of the systems involved. Further advantages are:

- A flexible architecture that can adapt to changing business requirements (e.g. scale-up or scale-down scenarios)
- A centralized location for sharing and managing factory data (single source of truth), regardless of source, protocol or format
- Breaking down silos – interoperability across departments, processes, systems and technologies
- Improved data accessibility and transparency for all users
- Independence from OT/IT system providers on the basis of an open architecture

### Components of a Unified Namespace (UNS) Architecture

In the manufacturing industry, a fully-fledged UNS architecture typically consists of 5 layers that build on each other:

1. **Connector layer:** This layer connects heterogeneous OT and IT systems such as PLCs, sensors, SCADA, Historian or ERP systems. Thereby, it translates different protocols and data formats into standardized message formats.
2. **Harmonization layer.** In the harmonization layer, data is standardized, contextualized and structured according to company-wide naming conventions. This enables interoperability and reusability.
3. **Message broker:** The central element of the architecture is the message broker (e.g. MQTT, Kafka or NATS). This layer serves as a data hub and enables event-based communication via the publish/subscribe mechanism. You can find a comparison of broker technologies [here](https://i-flow.io/en/ressources/nats-vs-kafka-comparison-for-the-uns/) and [here](https://i-flow.io/en/ressources/kafka-as-a-central-message-broker-for-industry-4-0-vs-mqtt/).
4. ****Microservices:**** IT/OT applications and domain-specific microservices subscribe to UNS data, process it, and publish results back into the namespace. Typical use cases include KPI calculations (e.g. OEE), anomaly detection, alarm management, and reporting.
5. **System services & infrastructure:** Logging, monitoring, access control and redundancy mechanisms ensure transparency, security and reliable operation – especially in production-critical environments.

Details on typical requirements for these components can be found [here](https://i-flow.io/en/ressources/components-of-a-unified-namespace-uns-architecture/).

### Challenges and Solutions

The UNS is a concept for the architectural design of a scalable data infrastructure. It is not a “one-size-fits-all” solution that is simply installed and ready for immediate use. Rather, it requires the right tools, organization, processes and approach to successfully implement a UNS. Key challenges and practical solutions in manufacturing include:

**1\. Single Point of Failure:** A UNS can be a single point of failure. If the UNS fails, this can have serious consequences for all connected systems. To avoid this, robust redundancy strategies are implemented in practice. These include, for example, distributed architectures and automatic failovers. Tools such as i-flow support the implementation of redundancies.

**2\. Integration of OT and IT Systems:** Connecting heterogeneous systems like PLCs and ERP (e.g. SAP) requires reliable integration tools. Gateways such as i-flow Edge provide protocol connectors and structure data according to defined naming conventions, ensuring IT/OT interoperability.

[![OT/IT integration in the Unified Namespace (UNS)](https://i-flow.io/wp-content/uploads/2024/02/Infografiken-2.svg "OT/IT integration in the Unified Namespace (UNS)")](https://i-flow.io/wp-content/uploads/2024/02/Infografiken-2.svg)

**3\. Lack of Data Models and Semantics:** For scalable reuse, data must follow consistent models and semantics. Standardization enables systems and users to consume data without additional transformation. Tools like i-flow embed data modeling as a core feature to streamline this process.

**4\. Governance:** As the UNS grows, so does complexity. Clear governance structures are essential to manage namespaces, responsibilities, and access rights. Without them, the UNS can quickly become unmanageable. i-flow Hub supports this with role-based access and multi-instance management.

**5\. Security Requirements:** An open, event-driven architecture must meet high security standards—end-to-end encryption (e.g. TLS), authentication, authorization, and network segmentation are mandatory. i-flow supports these with centralized certificate management and built-in redundancy features.

## UNS Reference Architecture

The following reference architecture for the Unified Namespace (UNS) in manufacturing is based on 3 independent software modules: **i-flow Edge**, **i-flow Broker** and **i-flow Hub**. i-flow Edge integrates OT and IT systems in the factory via industrial protocols (e.g. OPC UA, Modbus, REST), harmonizes the data and converts it into standardized MQTT messages. The i-flow Broker acts as a central message layer, distributes and protects data based on standardized MQTT namespaces. On top – in the IT or cloud infrastructure – the i-flow Hub enables cross-site management, monitoring and deployment of all instances. This architecture is scalable and supports both distributed edge-to-cloud and local UNS scenarios. Thereby, security functions such as TLS encryption, role-based access and redundancy mechanisms are an integral part of the design.

![Unified Namespace (UNS) in production: reference architecture](https://i-flow.io/wp-content/uploads/2024/02/Unified-Namespace-Reference-Architecture.png "Unified Namespace (UNS) in production: reference architecture")

## UNS Practical Example

A tried-and-tested use case of the Unified Namespace (UNS) comes from the Hirschvogel Group, an international automotive supplier with a high level of vertical integration and distributed production sites. The aim was to increase line output through a consistent IT/OT data infrastructure and to create a scalable basis for smart factory use cases.

**In the first step,** the team implemented an edge-based UNS to process control-relevant data streams in real time. OT systems (e.g. PLCs) were connected via industrial protocols such as Siemens S7 RFC or Beckhoff TwinCat, harmonized and forwarded to downstream IT systems. Processing in the i-flow infrastructure reduced data latency by 88% – a critical factor for increasing line output.

**In the second step**, the i-flow UNS was rolled out as a central IT/OT interface across factories. It enables 1:n communication between systems, standardizes data exchange via MQTT namespaces (e.g. in accordance with ISA-95) and serves as a company-wide distribution layer for process and context data. Over 4 million messages are currently processed every day – and the trend is rising.

![Unified Namespace (UNS) in production: practical example](https://i-flow.io/wp-content/uploads/2024/12/MQTT-Broker.svg "Unified Namespace (UNS) in production: practical example")

This success story is an example of how a modular and distributed UNS not only creates interoperability between systems, but also enables concrete efficiency gains in the manufacturing environment.

Details of the practical example including a detailed architectural description can be found [here](https://i-flow.io/en/success-stories/hirschvogel-group-increasing-line-output/).

## Conclusion: Unified Namespace (UNS) as Key to the Smart Factory

The Unified Namespace (UNS) offers manufacturing a decisive step to free digital transformation from the connectivity trap. By centrally organizing OT and IT data in a structured, standardized and real-time-capable data space, the UNS creates the foundation for end-to-end integration and data-based decisions. It breaks away from application-centric architectures and instead focuses on the data – scalable, transparent and manufacturer-independent.

For manufacturers that view Industry 4.0 not as a distant vision but as a strategic advantage, the UNS serves as a core architectural principle. It simplifies system onboarding, reduces integration complexity, and unlocks high-impact use cases such as OEE optimization, predictive maintenance, and adaptive manufacturing.

Companies that take a strategic approach to UNS implementation—using modular tools like i-flow—can build a secure, future-ready data infrastructure step by step. This unlocks the full potential of Industry 4.0 and accelerates the path to a truly connected, intelligent production environment.

**About i-flow:** i-flow is an industrial software company based in southern Germany. The company offers manufacturers the world’s most intuitive software to connect factories at scale. Over 750 million data operations per day in production-critical environments demonstrate the scalability of the software and the deep trust that customers place in i-flow. The company’s success is based on close collaboration with customers and partners worldwide, including renowned Fortune 500 companies and industry leaders like Bosch.