---
title: "Tag Index — Canonical Taxonomy"
type: meta
---

# Tag Index — Canonical Taxonomy

**Authoritative reference for all tags used in this vault.** Use exact casing and format everywhere. Obsidian tags are case-insensitive in search but case-sensitive in tag pane display — keeping consistent casing prevents duplicate entries in the tag pane.

---

## Lifecycle Phase

| Tag | Description |
|-----|-------------|
| `phase/concept` | Concept/feasibility exploration; pre-design |
| `phase/design` | Design phase; requirements capture, design reviews (PDR, CDR) |
| `phase/engineering` | Detailed engineering and analysis (FMEAs, DFM, tolerance stack-up) |
| `phase/NPI` | New Product Introduction; design freeze, prototyping, FAI, PPAP |
| `phase/manufacturing` | Production setup; tooling, process validation, MES configuration |
| `phase/supply-chain` | Supplier management, qualification, sourcing |
| `phase/quality` | Quality systems, audits, compliance, training |
| `phase/sustaining` | Post-production support; ECNs, obsolescence, lifecycle management |

---

## Digital Systems

| Tag | Description |
|-----|-------------|
| `system/PLM` | Product Lifecycle Management; design data, BOM, ECN, change control |
| `system/ERP` | Enterprise Resource Planning; inventory, financials, MRP |
| `system/MES` | Manufacturing Execution System; production scheduling, real-time data |
| `system/CAD` | Computer-Aided Design; 3D models, drawings, design tools |
| `system/BOM` | Bill of Materials; part structures, revisions, alternatives |
| `system/digital-twin` | Digital twin; simulation, predictive analytics, Industry 4.0 |
| `system/PDM` | Product Data Management; document control, version history |
| `system/QMS` | Quality Management System; procedures, audits, training records |
| `system/SCM` | Supply Chain Management; procurement, supplier data |

---

## Domain

| Tag | Description |
|-----|-------------|
| `domain/aerospace-defense` | Aerospace and defense products; AS9100, MIL-SPECs, high-reliability contexts |
| `domain/electronics` | Electronics manufacturing and assembly |
| `domain/industrial` | Industrial equipment and processes (non-aerospace) |

*Add new domains on-demand as the vault grows.*

---

## Aerospace Standards

| Tag | Description |
|-----|-------------|
| `standard/AS9100D` | Quality Management System for Aerospace, Defense, and Aviation — Revision D (current) |
| `standard/AS9102B` | Specification for First Article Inspection — Revision B (current) |
| `standard/AS9145` | Qualification and Approval of Aerospace and Defense Suppliers — includes PPAP in aerospace context |
| `standard/MIL-SPEC` | Military specifications and standards (general category; use specific MIL-STD tags for narrow topics) |

*Always include revision suffix (e.g., AS9100D not AS9100). Content referencing older revisions should be tagged `status/archived`.*

---

## Aerospace Processes

| Tag | Description |
|-----|-------------|
| `process/FAI` | First Article Inspection — the process (per AS9102B); deliverable is FAIR (First Article Inspection Report) |
| `process/PPAP` | Production Part Approval Process — automotive AIAG origin, used in aerospace via AS9145 |
| `process/APQP` | Advanced Product Quality Planning — design-to-production quality methodology |
| `process/PFMEA` | Process Failure Mode & Effects Analysis — manufacturing perspective |
| `process/DFMEA` | Design Failure Mode & Effects Analysis — design perspective |
| `process/DAS` | Design Assurance System — broader quality framework |

*Note: PPAP is listed under `process/` (not `domain/`) because it is a methodology, not a domain. It originates in automotive (AIAG) but is used in aerospace via AS9145.*

---

## Status

| Tag | Description |
|-----|-------------|
| `status/raw` | Freshly clipped; unprocessed |
| `status/processing` | Actively being synthesized (prevents false "synthesized" claims on interruption) |
| `status/synthesized` | Initial Claude synthesis complete |
| `status/reviewed` | Human review complete |
| `status/archived` | Superseded (e.g., AS9100 Rev C after Rev D adoption) |

*Status mirrors the frontmatter `status:` field — use Properties search to filter by status.*

---

## Tag Usage Rules

### Do
- Use exact casing: `phase/NPI` not `phase/npi`
- Use nested format: `phase/NPI` not `phaseNPI`
- Use frontmatter `tags:` array: never inline `#tags` in note body
- Add 2–4 tags per clip (phase, system/domain, standard if applicable)
- Tag at capture time for raw clips

### Don't
- Use `#` prefix in YAML: `#phase/NPI` breaks YAML parsing
- Invent new tags without updating this file
- Mix casing (`phase/NPI` and `phase/npi` are two separate tags)
- Use `type/` tags (frontmatter `type:` field is authoritative and queryable)

---

## Adding New Tags

When a new topic emerges that doesn't fit existing namespaces:

1. Add it to the appropriate section above (or create a new section if needed)
2. Use the same `namespace/tag` format
3. Add a one-line description
4. Update the version date at the bottom
5. Inform other vault users of the new tag

---

**Last updated:** 2026-04-13  
**Version:** 1.0 (deepened from plan)
