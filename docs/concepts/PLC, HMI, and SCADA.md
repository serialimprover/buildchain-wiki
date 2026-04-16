---
title: "PLC, HMI, and SCADA"
type: concept
status: synthesized
created: "2026-04-16"
updated: "2026-04-16"
description: "The three foundational OT layers of industrial automation: PLC executes real-time control, HMI provides operator visualization, SCADA delivers supervisory oversight"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - domain/industrial
  - domain/manufacturing
  - phase/manufacturing
sources:
  - "[[Explaining PLC, HMI & SCADA]]"
  - "[[PLC and SCADA Understanding the Differences in Industrial Automation Systems]]"
  - "[[How to Automate HMI Systems Testing]]"
---

# PLC, HMI, and SCADA

## The Three Layers

These three technologies form the foundational control stack of industrial automation. They are distinct but designed to work together in a layered hierarchy.

### PLC (Programmable Logic Controller)
The execution layer. A specialized industrial computer that:
- Reads inputs from sensors (temperature, pressure, position, proximity)
- Executes control logic (ladder logic, function blocks, structured text)
- Drives outputs to actuators (motors, valves, relays, pumps) in real time

PLCs are built for harsh environments — extreme temperatures, vibration, electrical noise — and designed for **deterministic, millisecond-level control**. They are the lowest active layer of automation, directly interacting with physical processes.

A PLC does not show anything to an operator. It executes logic. Period.

### HMI (Human-Machine Interface)
The operator layer. Provides a graphical interface between humans and the machines/processes controlled by PLCs:
- Real-time process visualization (dashboards, P&ID diagrams, trend charts)
- Alarm management and acknowledgment
- Setpoint adjustment and manual command issuance
- Translates raw PLC data into intuitive visual representations

HMIs communicate with PLCs directly (via industrial protocols like Modbus, Profinet, EtherNet/IP) and display their live state. An HMI makes a complex process understandable and controllable by a human operator.

### SCADA (Supervisory Control and Data Acquisition)
The supervisory layer. Aggregates data from multiple PLCs and HMIs across a facility or across multiple sites:
- Centralized monitoring of entire plants or distributed assets
- Historical data collection and trending
- Alarm aggregation and escalation
- Reporting and KPI tracking
- Remote supervision and control

SCADA operates at a higher level than HMI — while an HMI is tied to a specific machine or production cell, SCADA gives a plant-wide or enterprise-wide view.

## How They Work Together

```
Physical world         Sensors, motors, valves, actuators
      ↕
PLC layer              Real-time control logic (milliseconds)
      ↕
HMI layer              Operator visualization and interaction (per machine/cell)
      ↕
SCADA layer            Supervisory oversight (plant-wide, historical, remote)
      ↕
MES / ERP layer        Production management and business systems
```

This stack maps directly to [[ISA-95]] Levels 0–3. PLCs occupy Levels 0–2; SCADA occupies the upper boundary of Level 2; MES sits at Level 3.

## Key Differences Summary

| | PLC | HMI | SCADA |
|---|---|---|---|
| Primary role | Execute control logic | Operator interface | Supervisory oversight |
| Scope | One machine/process | One machine/cell | Entire plant / multi-site |
| Real-time level | Milliseconds | Seconds | Seconds to minutes |
| Data storage | Minimal | Minimal | Yes (historian) |
| Network | Industrial bus | Connected to PLCs | Connected to PLCs + HMIs |

## Relevance to IT/OT Convergence

PLCs, HMIs, and SCADA are **OT systems** — they live on the operational technology side of the IT/OT divide. [[IT-OT Convergence]] brings their data up to enterprise IT systems (ERP, analytics, AI). [[Unified Namespace (UNS)]] provides the architecture for doing this without point-to-point integrations.

A common IT/OT convergence pattern: SCADA historian data is published into the UNS broker → MES and ERP analytics subscribe and consume it → no custom SCADA-to-ERP integration required.

## Related Concepts

- [[ISA-95]] — formalizes the hierarchy from PLC/SCADA (Levels 0-2) through MES (Level 3) to ERP (Level 4)
- [[IT-OT Convergence]] — how PLC/SCADA data reaches enterprise IT systems
- [[Unified Namespace (UNS)]] — modern data bus for collecting and routing OT data from SCADA/PLCs
