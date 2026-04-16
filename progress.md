# BuildChain Wiki — Progress Log

_Last updated: 2026-04-16_

---

## What We've Accomplished

### Infrastructure
- **GitHub Actions pipeline** — auto-syncs from private vault repo daily at midnight UTC, regenerates graph, embeddings, and search index, commits back to master
- **GitHub Pages** — static site publishing live from `docs/` on push to master
- **Obsidian vault** set up with full conventions: folder structure, frontmatter schema, tag taxonomy, synthesis workflow (`_meta/CLAUDE.md`)
- **Obsidian MCP server** wired up (`npx mcp-obsidian`) — Claude can read/write vault directly

### Vault Structure
```
Build Chain/       ← your raw clip inbox (53 clips, ~20 new since last sync)
wiki/concepts/     ← synthesized concept pages (10 pages, created today)
wiki/sources/      ← promoted source summaries (not yet populated)
wiki/meta/         ← lint reports, dashboard
docs/              ← published website (auto-generated, don't touch)
_meta/             ← vault conventions, tag taxonomy
```

### Website (serialimprover.github.io/buildchain-wiki)
- D3 force graph with 56 nodes (19 concepts + 37 sources) and 130 links
- Industrial UI — dark theme, Barlow Condensed, amber/rust palette
- Click-to-expand node drawer showing **full concept content** (fixed today)
- Tag filtering sidebar
- Semantic search with embeddings (256-dim)
- SOURCE button on source nodes links to original URL

### Content Synthesized Today (wiki/concepts/)
1. PLM-ERP-MES Integration
2. Unified Namespace (UNS)
3. Engineering Change Management
4. Digital Twins in Manufacturing
5. IT-OT Convergence
6. Digital Thread in Manufacturing
7. ISA-95
8. PLC, HMI, and SCADA
9. Hardware-in-the-Loop (HIL) Testing
10. Inventory Management and Obsolescence

Pre-existing concepts (aerospace/NPI track, created Apr 13):
- Aerospace NPI Process Overview, AS9100D NPI Clauses, Configuration Management Basics, Design Reviews (PDR/CDR/TRR), FAI/FAIR AS9102B, PFMEA/DFMEA, PPAP in Aerospace AS9145, MOC pages

### Bugs Fixed Today
- `generate_graph_data.py`: broken links where target node didn't exist crashed D3 simulation → 0 nodes visible
- `generate_graph_data.py`: frontmatter parser couldn't read multi-line YAML lists (`sources:`, `tags:`)
- `generate_graph_data.py`: concept→source edges from `sources:` frontmatter now emitted correctly
- Drawer content cut off: was rendering `d.description` (200-char cap) — now renders `d.content` (full markdown body for concept nodes)

---

## Current State

### What's Working
- Push to master → GitHub Actions → live site update (full pipeline)
- Graph renders all 19 concepts linked to their source clips
- Drawer shows full synthesized content when clicking a concept node
- Obsidian vault conventions documented and enforced

### Known Gaps
- `wiki/sources/` is empty — source clips haven't been promoted post-synthesis
- 9 new clips in `Build Chain/` are missing `type: clip` and `status: raw` frontmatter
- 16 clips have wrong tag format (`"clippings"` instead of `phase/`, `system/`, `domain/` namespace tags)
- 1 exact duplicate clip: `How Can MES Integration Overcome Manufacturing Challenges 1.md`
- 1 stub file: `Untitled.md`
- Concept→source edges only appear for clips already in `docs/sources/`. New clips (not yet processed by `transform_vault.py`) don't show as graph nodes → their edges are silently dropped.
- `transform_vault.py` reads from the **private vault repo** on GitHub Actions. Concepts synthesized locally into `wiki/concepts/` only reach `docs/concepts/` because we copied them manually this session. Long-term, this copy step needs to be automated or the workflow updated.

### Pipeline Architecture Note
The GitHub Actions workflow pulls from `serialimprover/buildchain-private` (private vault) and transforms it. Your local `Build Chain/` clips and `wiki/concepts/` pages are in the **public repo**. Right now:
- `docs/sources/` comes from private vault's `Build Chain/` folder
- `docs/concepts/` comes from private vault's `wiki/concepts/` folder
- This means locally-synthesized concepts need to live in the **private vault** to flow through the pipeline automatically

---

## Next Steps (Priority Order)

### Immediate
1. **Fix duplicate/stub clips** — delete `How Can MES Integration Overcome Manufacturing Challenges 1.md` and `Untitled.md`
2. **Fix frontmatter on 9 new clips** — add `type: clip`, `status: raw`
3. **Re-tag 16 clips** — replace `"clippings"` with proper namespace tags per `_meta/_TAG-INDEX.md`

### Short Term
4. **Clarify vault architecture** — decide: should `wiki/concepts/` live in the public repo or private repo? Currently split across both which creates sync confusion.
5. **Promote source clips to `wiki/sources/`** — move synthesized clips from `Build Chain/` per the status lifecycle (`raw → synthesized`)
6. **Synthesize remaining clip clusters** not yet covered:
   - CAS Design / Class A Modeling (1 clip)
   - PCB Assembly DFM/DFA (1 clip)
   - Model-Based Definition (MBD) (1 clip)
   - Hardware Lifecycle Management (1 clip)
   - Elon Musk / First Principles (1 clip — may not fit the domain)
   - MBSE–PLM Integration (1 clip — could extend Digital Thread concept)

### Medium Term
7. **Wire `transform_vault.py` to read `wiki/concepts/` from the public repo** so locally-synthesized pages flow through the pipeline without manual copy
8. **Add MOC pages** for the new topic clusters (Digital Systems MOC exists; need UNS/IIoT MOC, Manufacturing Execution MOC)
9. **Human review pass** — flip `ai-reviewed: true` on concepts after spot-checking sources; flip `verified: true` after confirming against primary standards
10. **Resolve `%%VERIFY%%` flags** — search vault-wide and confirm uncertain claims

---

## Clip Inventory (Build Chain/)

| Topic Cluster | Clips | Concept Page |
|---------------|-------|-------------|
| PLM/ERP/MES Integration | 7 | ✅ Synthesized |
| Unified Namespace (UNS) | 6 | ✅ Synthesized |
| Engineering Change Management | 5 | ✅ Synthesized |
| Digital Twins | 4 | ✅ Synthesized |
| IT/OT Convergence | 3 | ✅ Synthesized |
| ISA-95 | 2 | ✅ Synthesized |
| PLC / HMI / SCADA | 3 | ✅ Synthesized |
| HIL Testing | 2 | ✅ Synthesized |
| Inventory / Obsolescence | 3 | ✅ Synthesized |
| Digital Thread | 2 | ✅ Synthesized |
| Aerospace NPI / AS9100 | many | ✅ Pre-existing (9 pages) |
| MBSE / MBD | 2 | ❌ Not yet |
| PCB DFM/DFA | 1 | ❌ Not yet |
| CAS Design | 1 | ❌ Not yet |
| Hardware Lifecycle | 1 | ❌ Not yet |
| First Principles (Musk) | 1 | ❌ Probably skip |
| Bill of Materials | 1 | ❌ Not yet |
| Generative Design | 1 | ❌ Not yet |
