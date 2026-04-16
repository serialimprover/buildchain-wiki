---
type: meta
title: "Lint Report 2026-04-16"
created: 2026-04-16
updated: 2026-04-16
tags: [meta, lint]
status: developing
---

# Lint Report: 2026-04-16

## Summary
- Pages scanned: 53 (all in `Build Chain/` — `wiki/` layer does not yet exist)
- Issues found: 7 categories, ~80+ individual instances
- Auto-fixed: 0
- Needs review: 7 items flagged below

---

## 1. Duplicate Files

**Exact duplicates — same source URL, same content, different filename:**

- `[[How Can MES Integration Overcome Manufacturing Challenges]]` and `[[How Can MES Integration Overcome Manufacturing Challenges 1]]`
  - Same source: `https://ezsoft-inc.com/mes-integration-challenges-and-solutions/`
  - Same frontmatter, same body. The `1` variant is a re-clip artifact.
  - Suggest: delete `How Can MES Integration Overcome Manufacturing Challenges 1.md`

---

## 2. Stub / Empty Pages

- `Untitled.md` — 15 lines, partial frontmatter (source: PTC Guide to Connected Systems), no body. Failed clip.
  - Suggest: delete or reclip from `https://ptc-p-001.sitecorecontenthub.cloud/...`

---

## 3. Frontmatter Gaps — Missing `type` and `status`

9 new clips (added ~Apr 15) are missing `type: clip` and `status: raw`. These won't appear correctly in Dataview queries:

| File | Missing Fields |
|------|---------------|
| `Advancing aerospace engineering with MBSE–PLM Integration.md` | type, status |
| `CAS Design and Class A Modeling The Complete Guide from Concept to Perfection.md` | type, status |
| `ERP vs PLM vs MES What's the Difference and Which One Does Your Industry Need.md` | type, status |
| `Hardware Lifecycle Management – How To Maximize HLM Value At Every Stage.md` | type, status |
| `How Can MES Integration Overcome Manufacturing Challenges.md` | type, status |
| `How Can MES Integration Overcome Manufacturing Challenges 1.md` | type, status (also duplicate — delete) |
| `Integrating PDM , PLM and ERP.md` | type, status |
| `ISA-95 The Standard for MES Architectures and ERP Integration.md` | type, status |
| `Model-Based Definition (MBD) and The Role it Plays in Modern Manufacturing Update 2025.md` | type, status |

Suggest: auto-add `type: clip` and `status: raw` to all 9. Safe to auto-fix.

---

## 4. Wrong Tag Format — 16 Files Using `"clippings"` Tag

16 clips use `tags: ["clippings"]` (Obsidian Clipper default) instead of the canonical namespace taxonomy defined in `_meta/_TAG-INDEX.md`. These clips have no useful tags for filtering.

Affected files include: `PCB Assembly Design Guide...`, `How Can MES Integration...`, `Scraps and Waste Inventory...`, and 13 others.

Suggest: manual re-tagging pass. Cannot auto-fix — requires domain judgment to assign correct `phase/`, `system/`, `domain/` tags per `_TAG-INDEX.md`.

---

## 5. Dead Wikilinks — Citation Artifacts

Academic citation markup converted to wikilinks by the web clipper. These resolve to non-existent vault pages:

| Link | Occurrences | Source |
|------|------------|--------|
| `[[Google Scholar]]` | 48 | Academic papers (Kumari thesis, WJAETS) |
| `[[DOI]]` | 37 | Academic papers |
| `[[PubMed]]` | 4 | Academic papers |
| `[[PMC free article]]` | 4 | Academic papers |

These are artifacts in the PDF-to-markdown conversion of academic papers. Not real vault links.

Suggest: no action needed — these clips are raw source material. Wikilinks will stay broken until concept pages are created. Alternatively, strip them if they clutter graph view.

---

## 6. Non-Standard Filename

- `Thread by @ansubkhan.md` — `@` symbol in filename is unconventional; may cause issues in some environments.
  - Suggest: rename to `Thread by ansubkhan on UNS Manufacturing.md` or similar

---

## 7. Orphan Pages (All Clips)

All 53 pages in `Build Chain/` are orphans — nothing links to them because `wiki/` synthesis has not started. This is **expected** at this stage, not a bug.

Once synthesis begins, concept pages in `wiki/concepts/` will link to these source clips.

---

## 8. Missing Concept Pages — Topic Clusters Ripe for Synthesis

Concepts mentioned across 3+ clips with no concept page yet:

| Topic | Clips Covering It | Priority |
|-------|------------------|----------|
| Digital Twins in Manufacturing | 3 clips | High |
| Unified Namespace (UNS) / MQTT | 4 clips | High |
| Engineering Change Management (ECM/ECO) | 4 clips | High |
| PLM–ERP–MES Integration | 6+ clips | High |
| IT/OT Convergence | 2 clips | Medium |
| ISA-95 Standard | 2 clips | Medium |
| Hardware-in-the-Loop (HIL) Testing | 2 clips | Medium |
| Model-Based Definition (MBD) | 1 clip (new) | Low |
| PCB DFM/DFA | 1 clip (new) | Low |

---

## 9. No `wiki/` Layer Exists

- `wiki/concepts/` — 0 pages
- `wiki/sources/` — 0 pages
- No index.md, no MOC pages, no cross-references

This is the largest structural gap. All 8 high-priority concept clusters above are unsynthesized.

---

## Recommended Actions (Priority Order)

1. **Delete duplicate**: `How Can MES Integration Overcome Manufacturing Challenges 1.md`
2. **Delete stub**: `Untitled.md`
3. **Auto-fix frontmatter**: Add `type: clip`, `status: raw` to 9 new clips
4. **Manual re-tagging**: Replace `"clippings"` tag on 16 files with proper namespace tags
5. **Start synthesis**: Create first concept pages for Digital Twins, UNS, ECM, and PLM-ERP-MES

Should I fix items 1–3 automatically? Items 4–5 need your input.
