---
title: "Inventory Management and Obsolescence"
type: concept
status: synthesized
created: "2026-04-16"
updated: "2026-04-16"
description: "Managing manufacturing inventory to prevent obsolescence, write-offs, and excess stock — including causes, accounting treatment, and prevention strategies"
ai-generated: true
ai-reviewed: false
verified: false
tags:
  - system/ERP
  - phase/sustaining
  - domain/manufacturing
sources:
  - "[[What Is Obsolete Inventory and How to Prevent It]]"
  - "[[Optimize Your Parts Inventory to Reduce Obsolescence Risk]]"
  - "[[Scraps and Waste Inventory Management in Manufacturing Operations]]"
---

# Inventory Management and Obsolescence

## What Is Obsolete Inventory

Obsolete inventory is any inventory a company can no longer sell or use due to lack of demand. In manufacturing specifically:
- **Finished goods** — products that have reached end-of-life or been superseded
- **Raw materials and components** — parts ordered for a product line that was cancelled or redesigned
- **Work-in-process (WIP)** — partially assembled products with no demand to complete them

Obsolete inventory differs from **slow-moving inventory** (still sellable but demand has declined) and **excess inventory** (overstocked but still in demand).

## Causes of Obsolescence

**Demand-side causes:**
- Product reaches end-of-life or is superseded by a new model
- Customer cancellation or program termination
- Demand forecast error — overestimated market demand

**Supply-side causes:**
- Engineering change orders (ECOs) that make existing stock non-conforming — a design change can instantly obsolete thousands of parts. See [[Engineering Change Management]].
- Supplier part discontinuation (DMSMS — Diminishing Manufacturing Sources and Material Shortages) — critical in aerospace and defense
- Procurement bulk discounts that created excess stock

**Operational causes:**
- Poor inventory tracking — stock forgotten in warehouse until expired or damaged
- WIP abandoned due to schedule cancellation
- Overproduction building buffer stock that never gets consumed

## Accounting Treatment

Obsolete inventory must be accounted for under GAAP and IFRS when identified:

- **Write-down** — revalue inventory to Net Realizable Value (NRV) when it still has some recoverable value
- **Write-off** — eliminate inventory from books entirely when it has zero recoverable value

Both are non-cash expenses: debit to COGS or an obsolescence reserve, reducing net income and balance sheet asset value. Delayed recognition of obsolescence overstates profits and assets.

%%VERIFY%% GAAP allows tax deductions on obsolete inventory if sold, donated, or destroyed — confirm with tax counsel for specific jurisdiction.

## Prevention Strategies

**Inventory visibility:**
- Real-time stock tracking via ERP — know what you have, where, and how long it's been there
- Aging reports — flag inventory approaching shelf-life limits or sitting beyond a threshold (e.g., 12 months without movement)
- Integration with PLM so pending ECOs trigger automatic obsolescence risk flags on affected stock

**Demand management:**
- Tighter demand forecasting — ABC analysis to categorize parts by consumption velocity
- Safety stock optimization — reduce buffer stock for slow-moving items
- FIFO enforcement — first-in, first-out consumption reduces aging risk

**Procurement discipline:**
- Resist bulk discount temptation for slow-moving or single-program parts
- Supplier managed inventory (SMI) shifts obsolescence risk to supplier for commodity parts
- Last-time-buy planning for EOL components (especially critical in aerospace electronics)

**Scrap and waste management:**
- Distinguish **scrap** (in-process material waste from production) from **obsolescence** (unused finished/raw inventory)
- Track scrap rates by operation, material, and operator to identify systemic issues
- Rework vs. scrap decision gates: quantify rework cost vs. material recovery value before scrapping

## ERP's Role

ERP systems are the primary tool for inventory visibility and obsolescence prevention:
- Real-time inventory position across locations and warehouses
- MRP (Material Requirements Planning) matches procurement to actual production schedules, reducing overbuy
- Lot and serial number tracking for traceability and shelf-life management
- Reporting tools for aging analysis and slow-mover identification

When ERP is integrated with PLM, approved ECOs can automatically query affected stock and trigger disposition decisions before production runs non-conforming material. See [[PLM-ERP-MES Integration]].

## Related Concepts

- [[Engineering Change Management]] — ECOs are a primary cause of component obsolescence; ECM controls this impact
- [[PLM-ERP-MES Integration]] — PLM-ERP integration enables ECO-triggered stock disposition
