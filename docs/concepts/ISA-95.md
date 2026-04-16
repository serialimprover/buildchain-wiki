---
title: "ISA-95"
type: concept
status: synthesized
created: "2026-04-16"
updated: "2026-04-16"
description: "International standard (IEC 62264) defining the architecture, functional domains, and data models for MES systems and their integration with ERP"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - system/MES
  - system/ERP
  - domain/manufacturing
  - domain/industrial
sources:
  - "[[ISA-95 The Standard for MES Architectures and ERP Integration]]"
  - "[[What is ISA95 Understand the standard behind MES and ERP integration]]"
---

# ISA-95

## What It Is

ISA-95 (also published as IEC 62264) is the international standard developed by the **International Society of Automation (ISA)** that defines:
- The functional architecture of manufacturing operations systems
- What data objects are exchanged between MES and ERP
- How those objects are structured and named

It provides the **common language** between business planning systems (ERP) and shop-floor execution systems (MES), eliminating the need for custom, one-off integrations between every ERP and MES pairing.

## The Five-Level Automation Pyramid

ISA-95 organizes manufacturing systems into a hierarchical model:

| Level | Domain | Examples |
|-------|--------|---------|
| 0 | Physical process | Sensors, actuators |
| 1 | Sensing & manipulation | PLCs, drives |
| 2 | Control | SCADA, DCS |
| **3** | **Manufacturing operations (MES)** | Scheduling, quality, maintenance, inventory |
| **4** | **Enterprise** | ERP, logistics, finance |

**Level 3 is the bridge** between OT (Levels 0–2) and IT (Level 4). MES sits at Level 3, receiving production orders from ERP above and sending control signals toward equipment below, while collecting performance data in both directions.

## Four Functional Domains of MES (Level 3)

ISA-95 defines what MES actually does across four domains:

1. **Production Operations Management** — order dispatching, scheduling, tracking work-in-progress
2. **Quality Operations Management** — inspection planning, SPC, traceability, non-conformance handling
3. **Maintenance Operations Management** — equipment status, downtime, preventive maintenance
4. **Inventory Operations Management** — material flow, WIP tracking, stock levels

These four domains define the **complete functional scope of any ISA-95-compliant MES**. Vendors that claim ISA-95 compliance must address operations in these areas.

## Data Exchange Standards Built on ISA-95

### B2MML (Business-to-Manufacturing Markup Language)
XML implementation of ISA-95 data models. Defines standard schemas for:
- Production schedules (ERP → MES)
- Work orders and dispatch lists
- Performance results (MES → ERP)
- Material and equipment definitions

B2MML messages allow ERP and MES systems from different vendors to exchange data without custom mapping — in theory. In practice, most implementations still require mapping work.

### OPC UA
The de-facto standard for secure OT/IT communication. Transmits real-time machine data with semantic context. Combined with ISA-95 object models, OPC UA enables true semantic interoperability from sensor to ERP dashboard. See also [[IT-OT Convergence]].

## ISA-95 vs. Unified Namespace

ISA-95 prescribes a hierarchical, layer-by-layer integration model with point-to-point connections between levels. [[Unified Namespace (UNS)]] proposes replacing this with a flat, event-driven publish/subscribe bus — eliminating the bottlenecks of the pyramid model.

UNS and ISA-95 are **not mutually exclusive**:
- ISA-95 defines *what* data should exist and what it means
- UNS defines *how* that data flows
- A well-designed UNS implementation uses ISA-95 naming conventions and data models as the semantic layer

%%VERIFY%% This characterization of UNS/ISA-95 complementarity is common in industry writing but represents an emerging consensus, not an official ISA position.

## Practical Significance

Without a standard like ISA-95, every ERP-MES integration is a bespoke project:
- Custom data mappings between ERP objects and MES objects
- No shared vocabulary for production orders, work definitions, or performance metrics
- Vendor lock-in: replacing either system requires rebuilding the integration

ISA-95 compliance doesn't guarantee plug-and-play integration, but it significantly reduces integration scope and creates a common audit trail for regulatory compliance.

## Related Concepts

- [[PLM-ERP-MES Integration]] — ISA-95 defines the MES-ERP segment of this integration
- [[Unified Namespace (UNS)]] — modern alternative data flow architecture; complements ISA-95 semantics
- [[IT-OT Convergence]] — ISA-95 Level 3 (MES) is the formal IT/OT boundary
- [[Digital Thread in Manufacturing]] — ISA-95 standardizes a key segment of the digital thread
