---
title: "ISA-95: The Standard for MES Architectures and ERP Integration"
source: "https://www.symestic.com/en-us/blog/mes/isa95"
author:
published:
created: 2026-04-15
description: "Learn how the ISA-95 (IEC 62264) standard structures MES architectures, streamlines ERP integration, and enables interoperable manufacturing systems."
tags:
  - "clippings"
---
![Modern, digitally connected production facility featuring a long row of injection molding machines, serving as a practical example of shop floor data integration according to the ISA-95 standard.](https://www.symestic.com/hubfs/header-loesungen-spritzguss.webp)

Modern manufacturing faces a fundamental challenge: bridging the gap between business planning systems and shop-floor operations. Without standardized interfaces, data silos and inefficiencies arise.  
The **ISA-95 (IEC 62264)** standard provides the common language that connects these worlds. It defines how manufacturing systems communicate—from sensors to ERP—and remains the cornerstone of digital factory architectures.

---

## What Is ISA-95?

Developed by the *International Society of Automation (ISA)*, ISA-95 defines a universal framework for the exchange of information between [**Enterprise Resource Planning (ERP)**](https://www.symestic.com/en-us/what-is/erp) systems and [**Manufacturing Execution Systems (MES)**](https://www.symestic.com/en-us/blog/mes).

The standard specifies:

- Which **functions** exist within manufacturing IT,
- Which **data objects** are exchanged,
- And how this exchange is structured and named.

In practice, ISA-95 enables interoperability between automation, production, and business systems—creating the foundation for scalable, vendor-independent smart manufacturing.

---

## The ISA-95 Layer Model

At its core, ISA-95 describes a hierarchical **five-level architecture**, often called the *automation pyramid*:

| Level | Domain | Examples |
| --- | --- | --- |
| **0–2** | Process & Control | Sensors, PLCs, SCADA |
| **3** | Manufacturing Operations (MES) | Scheduling, Quality, Maintenance |
| **4** | Enterprise Level | ERP, Logistics, Finance |

**Level 3** acts as the *bridge* between OT (Operational Technology) and IT (Information Technology).  
It manages production orders, collects performance data, and feeds real-time insights upward—while keeping shop-floor systems stable and autonomous.

This layered approach prevents overlap between planning logic (ERP) and operational control (MES), ensuring consistent data flow across the enterprise.

---

## Functional Domains Defined by ISA-95

The standard divides manufacturing operations into four major functional areas, later adopted by **VDI 5600** and the IEC 62264 series:

1. **Production Operations Management** – Order dispatching, scheduling, and performance tracking
2. **Quality Operations Management** – Inspection planning, SPC, traceability, deviation handling
3. **Maintenance Operations Management** – Equipment status, downtime analysis, preventive actions
4. **Inventory Operations Management** – Material flow, work-in-progress, stock levels

Together, these domains describe the **core scope of any MES** —and form the foundation for the functional cluster of manufacturing software.

---

## Data and Interface Standards: B2MML & OPC UA

ISA-95 is not just conceptual; it defines how data should be exchanged in practice. Two key technologies bring it to life:

### B2MML (Business-to-Manufacturing Markup Language)

An XML implementation of ISA-95 created by the World Batch Forum.  
It provides standard schemas for messages such as production orders, schedules, and performance results—making ERP-MES communication transparent and consistent across vendors.

### OPC UA (Open Platform Communications Unified Architecture)

The de-facto standard for **secure OT/IT communication**.  
It transmits real-time machine data, metadata, and events through a unified information model.  
Combined with ISA-95, OPC UA enables true semantic interoperability—from sensors to enterprise dashboards.

---

## ISA-95 in Practice

Manufacturers use ISA-95 as a blueprint for designing scalable, maintainable IT/OT architectures.

**Typical applications include:**

- **MES rollouts across heterogeneous plants** – ensuring uniform functionality and data semantics
- **ERP-MES integration** – using standardized objects for orders, bills of materials, and feedback
- **Global reporting** – harmonized KPIs across business units and suppliers
- **Legacy modernization** – connecting existing SCADA systems via OPC UA gateways

**Example:**  
An automotive supplier integrates its SAP ERP with a modern MES through B2MML messages.  
Production orders are dispatched automatically to lines; completion data flows back into ERP without custom mapping—reducing integration effort by 60 %.

---

## Linking ISA-95, VDI 5600, and Industry 4.0

ISA-95 and **VDI 5600** complement each other:

- **ISA-95** defines *structure and data flow*;
- **VDI 5600** defines *functional scope*.

Together, they form the basis of **Manufacturing Operations Management (MOM)**.  
Industry 4.0 extends this model through **semantic standards** such as the *Asset Administration Shell (AAS)* and **Digital Twin** concepts—essentially the next evolution of ISA-95’s framework.

---

## Best Practices for ISA-95 Implementation

1. **Start with information modeling:** Define the data objects before selecting systems.
2. **Use standardized formats:** Combine B2MML and OPC UA to avoid custom integrations.
3. **Maintain semantic consistency:** Ensure identical naming and IDs across all systems.
4. **Establish governance:** Keep ISA-95 models under revision control and aligned with business goals.
5. **Scale iteratively:** Begin with a pilot line and extend step-by-step across sites.

---

## Subtle Product Context

Many cloud-native MES platforms adopt the ISA-95 model as their architectural backbone.  
Solutions such as **SYMESTIC** implement these principles to connect ERP, MES, and shop-floor data seamlessly—enabling fast deployment, standard interfaces, and scalable performance.

---

## Conclusion

ISA-95 remains the **architectural foundation of digital manufacturing**.  
It provides a shared vocabulary and structure for integrating automation, MES, and enterprise systems—ensuring interoperability, shorter project times, and long-term investment protection.  
For any company aiming to build a future-proof smart factory, ISA-95 is the map that keeps complexity under control.