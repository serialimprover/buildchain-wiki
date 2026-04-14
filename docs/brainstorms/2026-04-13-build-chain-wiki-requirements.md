---
date: 2026-04-13
topic: build-chain-wiki
---

# Build Chain Wiki

## Problem Frame

The user is building a personal research and learning knowledge base covering the hardware development lifecycle **and** the digital systems that manage it (PLM, ERP, MES, CAD, BOM, digital twins, etc.) — collectively called the **Build Chain**. These two domains are tightly coupled: understanding a lifecycle phase requires understanding the systems that run it, and vice versa.

The Obsidian vault `homebase` (at `G:\My Drive\homebase`) is the storage layer. ~15 clipped articles already exist in `Factory/` and `Clippings/` as seed content. The wiki should be AI-augmented: Claude captures, synthesizes, and cross-links knowledge — not just a passive file dump.

**Industry vertical:** Aerospace / Defense (AS9100, MIL-SPEC, rigorous NPI with design reviews, qualification testing, configuration management).

**Priority starting focus:** NPI / Product Transfer — understanding the process of moving from engineering prototype to production in aerospace: design reviews (PDR/CDR/TRR), PPAP, PFMEA, first article inspection (FAI), qualification testing, pilot builds.

---

## Build Chain Concept Map

```
LIFECYCLE PHASES          DIGITAL SYSTEMS            KEY PROCESSES
─────────────────         ───────────────            ─────────────
Concept/Requirements  ←→  PLM (Windchill, Arena)     Engineering Change (ECO/ECR/ECN)
Design                ←→  CAD / PDM                  BOM versioning & types (eBOM→mBOM)
Engineering/Proto     ←→  Digital Twin               DFMEA / PFMEA
NPI / Transfer ★      ←→  ERP (SAP, NetSuite)        PPAP / FAI / design reviews (PDR/CDR/TRR)
Manufacturing         ←→  MES (shop floor)           Configuration management
Supply Chain          ←→  SCM / supplier portals     Traceability (lot/serial)
Quality               ←→  QMS (ISO 9001, AS9100)     Non-conformance / CAPA
Sustaining / EOL      ←→  Obsolescence mgmt          Stage gates / NPI process
```

★ = Priority starting area

---

## Requirements

- **R1. Single flat wiki folder with tag taxonomy**
  All wiki content lives in a `Build Chain/` folder at vault root. Organization is tag-based (no sub-folders). Obsidian search and graph view are the primary navigation surfaces.

- **R2. Seed tag taxonomy**
  Tags use Obsidian nested tag syntax. Starting taxonomy:
  - Lifecycle phase: `#phase/concept` `#phase/design` `#phase/engineering` `#phase/manufacturing` `#phase/supply-chain` `#phase/quality` `#phase/sustaining`
  - Digital system: `#system/PLM` `#system/ERP` `#system/MES` `#system/CAD` `#system/BOM` `#system/digital-twin` `#system/PDM`
  - Content type: `#type/clip` `#type/wiki-page` `#type/synthesis`
  - Domain: `#domain/aerospace-defense` `#domain/electronics` `#domain/industrial`
  - Aerospace-specific: `#aero/AS9100` `#aero/MIL-SPEC` `#aero/FAI` `#aero/PPAP` `#aero/DAS`

- **R3. Web clipping workflow**
  Raw articles and threads clipped from the web are saved as `.md` files into `Build Chain/` with frontmatter including `source:`, `date:`, `tags:`, and `status: raw`. These become source material for synthesis.

- **R4. Claude synthesis workflow**
  Using the `claude-obsidian` plugin (AgriciDaniel), Claude can:
  - Research a Build Chain topic and write a structured wiki page (`/autoresearch`, `/wiki`)
  - Save the result directly to `Build Chain/` with appropriate tags (`/save`)
  - Cross-link related concepts using Obsidian `[[wikilinks]]`
  Synthesized pages carry `status: wiki-page` in frontmatter.

- **R5. Existing content migration**
  All files currently in `Factory/` and `Clippings/` are moved into `Build Chain/` and tagged according to the R2 taxonomy. Their `status:` is set to `raw` (raw clips) unless they are clearly synthesis-ready.

- **R6. Priority seed topics (NPI / Aerospace)**
  The first wave of Claude-synthesized wiki pages should cover the NPI / Product Transfer phase for aerospace/defense:
  - Aerospace NPI process overview (stage gates, build phases)
  - Design reviews: PDR / CDR / TRR
  - PPAP in aerospace context
  - First Article Inspection (FAI) — AS9102
  - PFMEA and DFMEA
  - Configuration management basics
  - AS9100 NPI-relevant clauses
  Existing ECO/ECR clips in Factory/ provide secondary context (engineering changes during NPI).

- **R7. Searchability**
  Any Build Chain concept should be findable via:
  - Obsidian full-text search
  - Tag-based filtering (tag pane / search query)
  - Obsidian graph view showing concept relationships via `[[wikilinks]]`

---

## Success Criteria

- Searching for any major Build Chain concept (e.g., "engineering change order", "MES", "digital twin") returns relevant notes in Obsidian
- Asking Claude to research a topic via `/autoresearch` produces a structured wiki page in `Build Chain/` with tags and cross-links within one command
- The Obsidian graph view shows a meaningful concept web connecting lifecycle phases to digital systems
- All existing Factory/ clips are tagged and browsable by phase or system

---

## Scope Boundaries

- Personal knowledge tool only — not a shared or public wiki
- No custom web app (wiki-os / static site generation excluded from scope)
- Not a replacement for or integration with actual PLM/ERP/MES systems — this is a knowledge wiki *about* those systems
- Content quality bar: depth over breadth — better to have 20 well-synthesized pages than 200 raw clips
- The `claude-obsidian` plugin is the primary Claude integration; MCP server setup is explicitly deferred

---

## Key Decisions

- **Flat structure over folders:** Chosen for flexibility — lifecycle phases and digital systems overlap (a digital twin spans engineering, manufacturing, and sustaining). Tags handle multi-dimensional classification better than folders.
- **claude-obsidian as primary integration:** Provides `/wiki`, `/save`, `/autoresearch` commands purpose-built for this workflow; lower setup overhead than configuring an MCP server.
- **Migrate existing Factory/ content:** The ~15 existing clips are good seed material and should become part of the wiki rather than a parallel raw dump.
- **Clip → Synthesize pipeline:** Raw clips get `status: raw`; Claude processes them into `status: wiki-page` entries with structure and cross-links. This preserves source fidelity while building a curated knowledge base.

---

## Dependencies / Assumptions

- `claude-obsidian` plugin is installable as a Claude Code plugin (requires Node.js, Obsidian running locally)
- The `last30days-skill` (mvanhorn) can be used as an additional capture source for recent social/web discussions about Build Chain topics
- Obsidian is the user's primary tool for reading and navigating the wiki (not a separate web interface)

---

## Outstanding Questions

### Resolve Before Planning
- *(none — all product decisions resolved)*

### Deferred to Planning
- `[Affects R3][Needs research]` What web clipper tool is the user currently using to capture articles as .md? (Obsidian Web Clipper, MarkDownload, Omnivore, etc.) — determines whether R3 requires any new tooling or just a folder/tag convention
- `[Affects R4][Needs research]` What is the exact installation path for claude-obsidian as a Claude Code plugin in this vault? Verify against current README.
- `[Affects R5][Technical]` Do any existing Factory/ files have naming conflicts or formatting issues that would complicate bulk migration?

---

## Next Steps

→ `/ce:plan` for structured implementation planning
