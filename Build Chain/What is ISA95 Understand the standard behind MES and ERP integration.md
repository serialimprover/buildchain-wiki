---
title: "What is ISA95? Understand the standard behind MES and ERP integration"
source: "https://integra2r.com/en/what-is-isa95-the-most-important-standard-for-integration-between-erp-and-manufacturing/"
author:
  - "[[David Ringaby]]"
published: 2025-10-09
created: 2026-04-15
description: "Learn how ISA95 creates structure between ERP and MES. See the model, the 5 parts and how to use the standard in modern manufacturing."
tags:
  - "clippings"
---
## What is ISA95? The most important standard for integration between ERP and manufacturing

ISA95 is the standard in scalable and structured [integration between ERP systems](https://integra2r.com/en/services/erp-integration/) and production management systems like [MES](https://integra2r.com/en/mes-system/).

In this article, we explain what ISA95 is, how the standard is structured and why it is so central – especially in relation to the MES system and its role in modern manufacturing.

## What is ISA95?

ISA95 is an international standard that defines how data and processes should be handled between the business system and production management systems such as ERP and MES. The standard is published by [ISA](https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard) (International Society of Automation), which has also published ISA88, for example.

The purpose of ISA95, also known as IEC 62264, is to establish a common language between IT and [OT](https://integra2r.com/en/what-is-ot-operational-technology-and-ot-security/) – ensuring that integration between systems is efficient, consistent and without expensive customization. This is especially important when ERP and MES need to be connected in a common architecture.

## ISA95 and the automation pyramid

ISA95 is based on the classic automation hierarchy, which divides a manufacturing company’s systems into five levels:

**Level 4: Business systems (ERP)** Order processing, inventory management, finance, logistics and HR.

**Level 3: Manufacturing Execution System (MES)** Planning, production logistics, quality, maintenance and tracking.

**Level 2: Process control** Monitoring and sequential control of processes.

**Level 1: Automation** Production control, e.g. PLCs and SCADA systems.

**Level 0: Physical processes** Production itself: machines, raw materials, sensors and equipment.

ISA95 defines the functions of the MES layer, level 3, and specifies how information should be exchanged with level 4, the ERP layer. This is where the MES system acts as a link and translates business goals into operational actions.

![ISA 95](https://integra2r.com/wp-content/uploads/2023/06/ISA95-980x512.png)

## The five elements of ISA95

ISA95 is divided into five main parts, which together form the methodological and technical foundation of the standard. Each part focuses on a specific aspect of the integration between business and production:

**1\. Models and Terminology**  
Introduces the basic concepts and models used to describe production management and information exchange in an industrial context.

**2\. Object Model Attributes**  
Specifies which properties and attributes belong to the objects (such as materials, equipment, personnel) used in ISA95 models.

**3\. Models of Manufacturing Operations Management**  
Provides a structured model of four key operational areas in manufacturing: production, quality, maintenance and inventory.

**4\. Object Models and Attributes for Manufacturing Operations Management**  
Operationalize Part 3 by defining the specific objects and data types that MES systems typically use to model operations.

**5\. Business to Manufacturing Transactions**  
Describes how information such as production orders, status messages and events should flow in real time between ERP and MES systems in practice.

The five parts together provide a holistic approach to structuring and implementing integration between ERP and manufacturing systems through MES.

## How is ISA95 used in practice?

ISA95 offers a number of models and definitions that make it possible to:

- Structure information about materials, equipment, personnel and processes.
- Share orders, production data and inventory between ERP and MES.
- Create interoperability between different systems and vendors.

**Example of ISA95  
**A concrete example could be a production order sent from ERP to MES. MES takes care of delegating tasks to the production equipment and reports back with status, waste and production data in real time. All within a data model that follows ISA95 definitions.

ISA95 also supports integration via modern technologies such as OPC UA, [MQTT](https://integra2r.com/en/mqtt-broker-foundation-for-unified-namespace-uns/) and [Unified Namespace (UNS)](https://integra2r.com/en/unified-namespace-the-system-architecture-of-the-future-for-manufacturing-companies/), making it easier to build future-proof MES solutions.

## ISA95 and MES: A tight coupling

MES systems are largely built around ISA95. The standard defines four key operation types:

- **Production operations**
- **Quality operations**
- **Maintenance operations**
- **Inventory operations**

The four types of operations are actively used in MES to model and structure production processes and workflows. ISA95 helps ensure that each of these areas can exchange data with the ERP system without having to invent unique interfaces each time.

When MES and ERP speak the same language via ISA95, it becomes much easier to plan, execute and optimize production in real time. And it is precisely in MES that ISA95’s models have a concrete effect.

## Conclusion

ISA95 is a proven standard that keeps your house in order, so to speak. For manufacturing companies that want to digitize successfully, ISA95 is the most robust standard to structure the integration of systems.

It gives you a common language, a flexible architecture and a clear picture of how information should flow in your business. This is especially true when the MES system plays the main role as the link between IT and production.

If you have any questions about ISA95 and [MES](https://integra2r.com/ydelser/mes/), you are very welcome to contact CEO Niels Nyhus at [nn@integra2r.com](mailto:nn@integra2r.com) or 29638313.