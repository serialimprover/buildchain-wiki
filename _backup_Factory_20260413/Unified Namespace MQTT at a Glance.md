---
title: "Unified Namespace MQTT at a Glance"
source: "https://ttpsc.com/en/blog/unified-namespace-mqtt-best-practices/"
author:
  - "[[Jakub Kaczyński]]"
published: 2026-01-08
created: 2026-04-13
description: "Unified Namespace with MQTT explained. Explore pub/sub patterns, topic design, QoS, security, and state management for UNS."
tags:
  - "clippings"
---
![Unified Namespace MQTT architecture illustrating best practices, data flow patterns, and common pitfalls in industrial OT/IT integration.](https://cdn-ttpsc.ttpsc.com/content/uploads/2026/01/TT-PSC-TT-PSC-WEB-Unified-Namespace-MQTT-Best-practices-patterns-and-common-pitfalls-EN-main-2.webp)

## MQTT in Unified Namespace at a glance

MQTT is a natural foundation for a Unified Namespace, enabling scalable, real-time, event-driven data sharing without point-to-point integrations. In a UNS, MQTT acts as a central pub/sub backbone where OT and IT systems exchange contextualized data via a shared topic hierarchy, often aligned with ISA-95. Its lightweight design and features such as retained messages, LWT, QoS, and topic-based access control make it well suited for handling industrial telemetry, state, and events at scale.

## Key takeaways of article

- A **Unified Namespace (UNS)** is a shared, structured data layer where OT/IT systems **publish and subscribe** instead of building point-to-point integrations.
- **MQTT** is a common foundation for UNS because pub/sub decouples producers from consumers and scales across diverse systems and sites.
- A well-designed **topic hierarchy** (often aligned to **ISA-95: Enterprise/Site/Area/Line/Cell**) is the backbone of a usable UNS.
- The real value comes from **data contracts**: naming rules + payload schemas + consistent timestamp / unit / quality.
- Reliable UNS depends on **state management patterns**: retained “current state”, LWT/health topics, and fit-for-purpose QoS.
- **Security and governance** (ACLs, ownership, versioning) matter as much as broker choice – most UNS failures are organizational, not technical.
- **Vanilla MQTT and Sparkplug B** both work: choose based on interoperability needs, lifecycle/state requirements, and operational complexity.

Industrial organizations still struggle with data spaghetti – a result of fragmented data architectures built on point-to-point integrations between OT and IT systems. Industry studies estimate that **30–40% of operationally critical data remains trapped in silos**, limiting real-time visibility and slowing decision-making. For a broader view on how UNS addresses industrial data management challenges, see [**How Unified Namespace breaks down data silos in industrial data management.**](https://ttpsc.com/en/blog/uns-industrial-data-management/)

![A visual comparison illustrating the shift from a complex network of separate systems (MES, ERP, PLC, Sensors, AI, KPI) to a streamlined, unified architecture with UNS at the center. The "Before" side shows scattered connections, while the "After" side highlights UNS as the central hub connecting various components for more efficient, integrated manufacturing operations.](https://cdn-ttpsc.ttpsc.com/content/uploads/2025/11/TT-PSC-TT-PSC-GRAPHIC-UNS-2.webp)

A visual comparison illustrating the shift from a complex network of separate systems (MES, ERP, PLC, Sensors, AI, KPI) to a streamlined, unified architecture with UNS at the center. The "Before" side shows scattered connections, while the "After" side highlights UNS as the central hub connecting various components for more efficient, integrated manufacturing operations.

The **[Unified Namespace](https://ttpsc.com/en/unified-namespace/)** addresses this challenge by introducing a centralized, event-driven data layer built on MQTT, where systems publish and subscribe to shared, contextualized data instead of maintaining brittle integrations. By decoupling producers from consumers, the unified namespace simplifies industrial data architectures, reduces integration complexity, and enables scalable, real-time data sharing across the enterprise.

This guide focuses on practical implementation guidance: patterns that work, best practices to adopt early, and pitfalls to avoid when building an MQTT-based UNS for manufacturing and other industrial environments.

### What is Unified Namespace (UNS)?

For an introduction to Unified Namespace, see „ *[What Is Unified Namespace?](https://ttpsc.com/en/blog/what-is-unified-namespace/)„*. This article builds on that foundation and focuses on how implementing unified namespace principles in an industrial environment allows you to simplify fragmented data architectures and reduce data spaghetti. In the context of IIoT technology, the unified namespace provides a practical way to structure real-time data exchange between OT and IT systems, enabling consistent publishing and consumption of information at scale without relying on brittle, point-to-point integrations.

## What is MQTT?

**MQTT is a lightweight communication protocol** designed for reliable, real-time data exchange between distributed systems. The MQTT publish/subscribe model enables decoupled communication, where data is organized and routed through an MQTT topic, making it well suited for IIoT and event-driven industrial architectures.

## Why MQTT works so well for UNS?

MQTT is the most commonly used messaging protocol for implementing Unified Namespace (UNS). With MQTT, the architecture of a unified namespace becomes more robust, as MQTT helps to streamline and optimize the manufacturing process, thus accelerating digital transformation.

From an engineering perspective, MQTT features that matter most for UNS include retained messages for late joiners, persistent sessions for unstable OT networks, topic-level ACLs for fine-grained access control, and shared subscriptions to horizontally scale consumers without duplicating data.

MQTT fits UNS implementations because it enables event-driven pub/sub communication with minimal overhead and a simple routing model (topics). Additionally, MQTT supports event-driven architecture by allowing data to be reported only when changes occur, reducing unnecessary network load. MQTT also enhances the scalability of a unified namespace by supporting thousands or millions of concurrent connections.

Other benefits of a unified namespace with MQTT include its lightweight design, which minimizes the size of messages and reduces network traffic, making it ideal for large-scale industrial solutions.

### Benefits of MQTT in Unified Namespace:

- MQTT is the most commonly used messaging protocol for the Internet of Things (IoT).
- MQTT has very low overhead and bandwidth consumption thanks to its binary format.
- MQTT enables a Unified Namespace (UNS) to communicate wirelessly and bidirectionally.
- MQTT supports event-driven architecture, which is essential for reporting changes in data efficiently.
- MQTT enhances security by allowing devices to establish a long-standing connection to a known broker, reducing exposure to unknown sources.
- MQTT’s lightweight design minimizes the size of messages and reduces network traffic, making it ideal for large-scale solutions.
- MQTT’s publish-subscribe model allows for efficient data flow and reduces the complexity of data integration.

### Is MQTT faster than Kafka?

MQTT and Kafka solve different problems. MQTT is optimized for low-latency, event-driven communication at the edge, making it well suited for Unified Namespace implementations. Kafka is a tool that excels at high-throughput data streaming and long-term persistence. In a UNS architecture, MQTT often feeds Kafka – not replaces it.

## Reference Architecture (what you’re actually building)

Modern industrial architectures often rely on MQTT as a digital backbone to reduce fragmented point-to-point connections and connect distributed devices across sites and domains.

A typical UNS setup looks like this:

- **Data producers:** PLCs, sensors, SCADA, historians, MES, ERP, CMMS publish data to the UNS only when changes are detected, ensuring efficient data flow and consistency.
- **Edge/gateway layer:** protocol adapters, standardization and data processing (cleaning, normalization, mapping), buffering
- **MQTT broker (message hub):** routes messages and enforces access control
- **Data consumers:** dashboards, analytics, quality apps, planning, maintenance tools subscribe to relevant topics in the UNS to receive and process structured information.
- **Optionally:** downstream historians/streams/lakes/warehouses fed from MQTT

In practice, data flows from PLCs and control systems through edge gateways into the MQTT broker, where it becomes immediately available to multiple consumers without transformation, duplication, or point-to-point coupling.

In this context, the communication interface plays a central role by enabling efficient integration and data exchange between different systems and devices within the UNS architecture. Devices and edge devices are identified, discovered, and managed to ensure secure and interoperable communication within the MQTT and Sparkplug environment. A database is often used to store structured data from the UNS for long-term analysis and reporting, enabling SQL queries and historical analytics.

The UNS should be treated as a product: documented, governed, monitored, and versioned. Different components of the system communicate with each other through the unified namespace, facilitating seamless integration and collaboration.

The topic hierarchy in the UNS should be carefully designed to reflect the structure of the organization and its processes. It is recommended to use the ISA-95 common data model to map organizational structures onto the MQTT topic structure, ensuring standardization and scalability.

![Diagram titled “Example of UNS data flow.” An MQTT broker sits in the center. Equipment 1 and Equipment 2 publish machine and process data (e.g., downtime events) to MQTT and subscribe to production orders. A Historian publishes aggregates and KPIs and subscribes to shop-floor data changes. MES publishes downtime categorization and subscribes to production orders and downtime events. ERP publishes production orders and subscribes to order execution status.](https://cdn-ttpsc.ttpsc.com/content/uploads/2025/12/TT-PSC-TT-PSC-GRAPHIC-UNS-MQTT-1.webp)

Diagram titled “Example of UNS data flow.” An MQTT broker sits in the center. Equipment 1 and Equipment 2 publish machine and process data (e.g., downtime events) to MQTT and subscribe to production orders. A Historian publishes aggregates and KPIs and subscribes to shop-floor data changes. MES publishes downtime categorization and subscribes to production orders and downtime events. ERP publishes production orders and subscribes to order execution status.

## Design Patterns for Unified Namespace MQTT

### 1) ISA-95-aligned topic hierarchy

![Hierarchical UNS topic tree showing an example structure: Acme Corp → PL01 → Welding → Line03 → Robot01. Under Robot01, an Edge node contains data tags (State, Mode, Cycle Active, Cycle Time) and links to systems (MES, ERP, CMMS).](https://cdn-ttpsc.ttpsc.com/content/uploads/2025/12/TT-PSC-TT-PSC-GRAPHIC-UNS-guide-1.webp)

Hierarchical UNS topic tree showing an example structure: Acme Corp → PL01 → Welding → Line03 → Robot01. Under Robot01, an Edge node contains data tags (State, Mode, Cycle Active, Cycle Time) and links to systems (MES, ERP, CMMS).

Use a consistent structure such as:

enterprise/site/area/line/cell/asset/…

Add a clear “data type” segment (recommended):

- …/telemetry/temperature
- …/state/mode
- …/event/alarm\_raised
- …/kpi/oee (keep derived metrics separate)

A well-defined MQTT topic hierarchy is crucial for effective discovery, filtering, and governance in a Unified Namespace. The Sparkplug B specification defines a strict topic namespace structure (including group\_id, message\_type, node\_id, and optionally device\_id). In manufacturing, many teams align topic design with ISA-95 to reflect the enterprise structure.

**Why it works:** predictable subscriptions, clean access control, and easy multi-team collaboration.

ISA-95 should be treated as a structural reference, not a data model to replicate verbatim. In real implementations, teams usually model physical assets and control boundaries first, then align them to ISA-95 levels to avoid over-modeling and brittle hierarchies.

### 2) “State vs Telemetry vs Events” separation

- **State:** discrete modes (running, idle, fault)
- **Telemetry:** continuous values (speed, temperature)
- **Events:** something happened (changeover\_started, alarm\_triggered)

Each of these categories consists of specific data points that should be clearly defined and structured to enable reliable integration and effective access within the UNS.

**Why it works:** prevents semantic confusion and keeps consumer logic simple.

### 3) Report-by-Exception (RBE) + deadbands

Publish only when:

- the value changes meaningfully (deadband), or
- a heartbeat timer elapses for “I’m alive” confirmation.

**Why it works:** reduces noise and broker load without losing important changes.

### 4) Retained “current value” topics for operational state

Use retained messages for:

- machine mode/state
- active alarms (or an “active alarm list”)
- last-known production counters
- current context when appropriate (e.g., active order on a line)

**Why it works:** new subscribers immediately get the latest state.

### 5) Health and connectivity pattern (LWT + online/offline topics)

Each edge node publishes a retained online indicator, e.g.:

- …/health/online → true/false

Configure Last Will and Testament (LWT) to publish “offline” when disconnects are unexpected.

**Why it works:** downstream systems can detect data loss and react deterministically.

### 6) Data contracts (schemas + required fields)

Define required fields across payloads. A minimal baseline for most signals:

- ts (ISO 8601 timestamp)
- value
- unit (if numeric)
- quality (good/bad/uncertain)
- source (plc/scada/gateway/app)

Versioning should be explicit – either in the topic path or the payload schema. Breaking schema changes without versioning are one of the fastest ways to erode trust in a Unified Namespace and force consumers to implement defensive parsing logic.

**Why it works:** consumers trust and reuse data without per-source reverse engineering.

### 7) Command and write-back isolation (if you allow writes)

If your UNS supports control:

- segregate: …/cmd/… vs …/telemetry/…
- enforce strict ACLs + auditing + idempotency (command IDs, timeouts)

**Why it works:** reduces the risk of accidental or unauthorized control.

## Topic Design Best Practices

### Naming conventions

- Use lowercase, hyphens or underscores (choose one standard)
- Avoid spaces and special characters
- Prefer stable identifiers over “human labels” that change
- Keep it readable but not verbose

A common failure mode is encoding too much meaning into topic names. Topics should provide stable routing context, while semantic meaning belongs in the payload and schema.

**Example:**  
acme/chicago/packaging/line-3/filler-01/temperature

### Subscription-friendly structure

Design so that teams can subscribe with wildcards:

- acme/chicago/packaging/line-3/# (everything for a line)
- acme/+/+/+/+/+/state/# (all states across the enterprise)

**What do ‘+’ and ‘#’ in an MQTT protocol indicate?**  
In MQTT topic subscriptions, + is a single-level wildcard, while # is a multi-level wildcard. They allow consumers to subscribe to entire branches of the Unified Namespace without knowing every topic upfront – an essential capability for scalable UNS implementations.

Overusing multi-level wildcards (#) at the enterprise root can create unnecessary broker load. In large deployments, wildcard usage should be intentional and reviewed as part of governance.

## Payload Standards (3 “copy-paste ready” examples)

### Telemetry

![Example of a telemetry message in a Unified Namespace using MQTT, including temperature value, unit, timestamp, quality, and source system.](https://cdn-ttpsc.ttpsc.com/content/uploads/2026/01/TT-PSC-TT-PSC-BLOG-Telemetry-EN-01-1.png)

Example of a telemetry message in a Unified Namespace using MQTT, including temperature value, unit, timestamp, quality, and source system.

### State

![Example of a state message in a Unified Namespace using MQTT, showing machine operational state, timestamp, quality, and data source.](https://cdn-ttpsc.ttpsc.com/content/uploads/2026/01/TT-PSC-TT-PSC-BLOG-State-EN-01.png)

Example of a state message in a Unified Namespace using MQTT, showing machine operational state, timestamp, quality, and data source.

### Event

![Example of an event message in a Unified Namespace using MQTT, showing a changeover event with timestamp, asset identifier, and source system.](https://cdn-ttpsc.ttpsc.com/content/uploads/2026/01/TT-PSC-TT-PSC-BLOG-Event-EN-01.png)

Example of an event message in a Unified Namespace using MQTT, showing a changeover event with timestamp, asset identifier, and source system.

**Tip:** Pick one schema approach (e.g., JSON Schema / Protobuf) and enforce it at the edge or via validation pipelines – don’t leave it to individual teams.

For a real-world, industry-specific view of how a Unified Namespace is applied in practice, see [**Unified Namespace example in action for smarter recipe management in FMCG.**](https://ttpsc.com/en/blog/unified-namespace-example-in-fmcg/) This example shows how a unified namespace becomes a reliable source of truth for production recipes, parameters, and process states, shared consistently across MES, ERP, and shop-floor systems. It highlights concrete use cases such as recipe synchronization, change traceability, and real-time validation, demonstrating how UNS supports operational consistency and faster decision-making in FMCG environments.

## State management and data quality in UNS MQTT

### Retained messages

Use retained messages for “current state” so reconnecting clients get the latest values instantly.

### QoS selection (keep it pragmatic)

- **QoS 0:** high-frequency signals where occasional loss is acceptable
- **QoS 1:** important state changes, events, alarms
- **QoS 2:** rare; reserve for critical commands where duplicates are unacceptable

### LWT for connectivity

Make disconnections visible through predictable “offline” signals and alarms.

### Quality flags

If your source system provides quality (OPC UA quality, gateway status), don’t drop it – propagate it.

## Sparkplug B for Standardized UNS Implementation

Using Sparkplug B can simplify the implementation of a Unified Namespace by providing a standardized framework for topic structure, message types, and device lifecycle management – reducing the amount of custom conventions teams need to define and govern.

Sparkplug B is an MQTT-based specification designed for industrial environments. Using Sparkplug B can simplify the implementation of a Unified Namespace by providing a standardized framework for topic structure. It defines a strict topic namespace structure for Unified Namespace (UNS) implementations, improving consistency and interoperability across industrial data publishers and consumers. The Sparkplug specification enhances MQTT’s state management capabilities by defining mechanisms for retained last will and birth messages. Sparkplug B standardizes:

- topic namespace format
- message types
- payload encoding (commonly Google Protocol Buffers, which are smaller and faster to parse than JSON, making Sparkplug B more efficient for UNS and IIoT applications)
- lifecycle management (Birth/Death)
- metric and metadata discovery

While Sparkplug defines a fixed topic structure, the Parris method allows for hierarchical topic structure within the Sparkplug topic strings by encoding additional hierarchy levels inside the group\_id. This approach enables UNS implementations to preserve enterprise or site-level context while remaining compliant with the Sparkplug specification.

Sparkplug B introduces strong conventions but also constraints. It can become limiting in environments with legacy devices, mixed payload formats, or when teams need partial adoption without full Sparkplug-capable tooling.

The Parris method allows for hierarchical topic structure within the Sparkplug topic strings for UNS implementation. It involves using delimiters in the group\_id to represent the entire enterprise structure within the Sparkplug topic namespace, enabling alignment with models such as ISA-95 without breaking Sparkplug compatibility.

In contrast, the Schultz method uses multiple MQTT brokers deployed at different enterprise levels to support local communication, with data selectively republished to a central enterprise broker. This approach introduces additional operational overhead, as an IIoT platform is required to manage data republishing from local brokers to the enterprise level—an important architectural consideration when designing and implementing a Unified Namespace.

To ensure secure, scalable, and efficient data flow, the structure of MQTT topics and the overall organization of the Unified Namespace—whether using Vanilla MQTT or Sparkplug B—must be carefully designed and governed. Applying patterns such as the Parris and Schultz methods plays a critical role in effective UNS deployment in industrial environments, particularly when building on top of MQTT and Sparkplug B specification

### Sparkplug topic structure (high level)

spBv1.0/group\_id/message\_type/node\_id/\[device\_id\]

- group\_id often represents organizational grouping
- message\_type defines the semantics (e.g., birth/data/command/state)
- node\_id identifies the edge node
- device\_id identifies a specific device (optional depending on design)

## Vanilla MQTT vs Sparkplug B (when to choose what)

| Criterion | Vanilla MQTT | Sparkplug B |
| --- | --- | --- |
| Topic freedom | Very high (you design everything) | Structured namespace and message types |
| Device lifecycle/state | You implement patterns yourself | Built-in Birth/Death + session semantics |
| Interoperability | Depends on your governance | Stronger “plug-and-play” expectations |
| Payload format | Often JSON | Typically Protobuf (efficient) |
| Best for | Custom domains, mixed legacy tooling, rapid experimentation | Larger ecosystems, standardized onboarding, multi-vendor setups |
| Main risk | Governance drift (inconsistent topics/schemas) | Added complexity; needs Sparkplug-capable tooling |

## Common Pitfalls (symptom → cause → fix)

### 1) “Topic chaos” after a few teams join

- **Symptom:** inconsistent naming, duplicated branches, hard-to-find signals
- **Cause:** no governance or ownership model
- **Fix:** publish a naming standard, assign topic owners, and require reviews for new branches

### 2) UNS becomes a raw tag dump

- **Symptom:** thousands of topics with unclear meaning
- **Cause:** no semantic separation (state/telemetry/event), no data contract
- **Fix:** enforce type segments and mandatory payload fields + documentation per asset class

### 3) Stale dashboards after reconnects

- **Symptom:** consumers show old/blank values
- **Cause:** missing retained topics and/or missing refresh patterns
- **Fix:** retain operational state topics; define reconnect expectations; consider Sparkplug Birth/Death semantics

### 4) Broker overload and noisy data

- **Symptom:** CPU spikes, slow subscriptions, dropped messages
- **Cause:** publishing too frequently, no deadbands, oversized payloads, high QoS everywhere
- **Fix:** apply RBE + deadbands, keep payloads lean, reserve QoS 1/2 for what truly needs it

### 5) Security fear blocks adoption

- **Symptom:** “we can’t expose OT data” or accidental access to sensitive data
- **Cause:** shared credentials, flat permissions, commands mixed with telemetry
- **Fix:** TLS + per-client auth, topic-based ACLs, isolate command topics, least-privilege by default

In practice, most UNS security incidents are caused by shared credentials, flat topic permissions, or mixing telemetry and control paths – not by MQTT itself.

### 6) Scaling to multi-site breaks consistency

- **Symptom:** collisions, inconsistent site models, brittle bridging
- **Cause:** no enterprise-level namespace strategy
- **Fix:** standardize enterprise/site identifiers and cross-site naming rules before rollout

## Implementation Checklist

### Start small (pilot)

- Pick one line/cell and 30–50 signals (state + key telemetry + alarms)
- Define the topic hierarchy and naming standard
- Implement the baseline payload contract (ts/value/unit/quality/source)

### Make it reliable

- Retained state topics
- LWT-based health topics
- Sensible QoS strategy
- Monitoring: connections, message rates, retained count, auth failures

### Govern it early

- Topic ownership (who “owns” each branch)
- Versioning rules (v1/v2, deprecation)
- Change process for schemas and naming
- Access model (read-mostly; separate command space)

### Scale by template

- Reuse a repeatable mapping pattern per asset class
- Add context sources (order/recipe/batch/shift) from business systems
- Expand site-by-site with the same contract and review process

## Summery

A successful Unified Namespace is not simply an MQTT broker with many topics. It needs to be treated as a core element of the enterprise data architecture – designed, governed, and evolved with the same discipline as business-critical systems. Without intentional UNS structuring, clear data contracts, and defined ownership, the data quickly becomes inconsistent and loses its operational value.

When properly structured, the unified namespace provides a consistent way to contextualize the data across teams, production lines, and systems, enabling reliable real-time visibility, analytics, and automation at scale. This approach reduces architectural fragmentation and ensures that industrial data architecture can grow sustainably as new assets, sites, and use cases are added.

For an external, non-competitive industry perspective on why sharing and standardizing manufacturing data matters (and how it unlocks value), see the World Economic Forum white paper [Unlocking Data Value in Manufacturing](https://www3.weforum.org/docs/WEF_Share_to_Gain_Report.pdf?utm_source=chatgpt.com)**.**

## Designing and implementing UNS in real industrial environments

Building a Unified Namespace that actually works in production needs more than a broker and a topic tree. It requires solid data architecture decisions, clear UNS structuring, and hands-on experience with MQTT, Sparkplug, edge integration, and industrial systems. At TT PSC, we combine strong technical expertise – experienced developers, architects, and IIoT engineers – with business context to design and implement UNS solutions that scale across lines, sites, and enterprises without becoming operational debt. Most UNS failures happen at the boundaries – edge mappings, schema drift, and uncontrolled topic growth – areas where hands-on engineering experience matters more than theory.

Ready to implement Unified Namespace?

Move beyond point-to-point integrations. Build a scalable, MQTT-based Unified Namespace designed for real-time operations and future growth.

[View Unified Namespace offering](https://ttpsc.com/en/unified-namespace/)

## Glossary (technical context)

**MQTT Broker**  
A central message hub responsible for routing messages between publishers and subscribers, enforcing access control, and managing retained messages and sessions in a UNS.

**MQTT Topic**  
A hierarchical routing path used to organize and subscribe to data in MQTT, commonly aligned with ISA-95 structures in UNS implementations.

**Topic Wildcards (+, #)**  
Subscription operators in MQTT where + matches a single topic level and # matches multiple levels, enabling scalable consumption of UNS data branches.

**Retained Message**  
An MQTT message stored by the broker and delivered immediately to new subscribers, typically used to expose the current operational state in a UNS.

**Last Will and Testament (LWT)**  
A mechanism that allows the broker to publish a predefined message when a client disconnects unexpectedly, commonly used for health and connectivity signaling.

**Quality of Service (QoS)**  
MQTT delivery guarantees (0, 1, 2) that define how messages are delivered, selected in UNS based on data criticality and tolerance for loss or duplication.

**Report-by-Exception (RBE)**  
A publishing pattern where data is sent only when values change meaningfully or on a defined heartbeat, reducing noise and broker load.

**Data Contract**  
A formal definition of payload structure, required fields, units, timestamps, and quality indicators that ensures consistent interpretation of UNS data across consumers.

**Sparkplug B**  
An MQTT-based specification that standardizes topic structure, payload encoding, and device lifecycle management for industrial UNS implementations.

**ISA-95**  
An international standard often used as a reference model for structuring UNS topic hierarchies according to enterprise, site, area, line, and asset levels.