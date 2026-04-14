---
date: 2026-04-14
topic: buildchain-web-publishing
---

# Build Chain Wiki: Web Publishing Layer

## Problem Frame

Your Obsidian vault (`homebase` at `G:\My Drive\homebase`) is a rich, AI-augmented knowledge base covering the hardware development lifecycle and its digital systems (PLM, ERP, MES, etc.). Content is organized by tag taxonomy, synthesized into concept pages, and backed by source clips.

**Current state:** Knowledge lives in Obsidian. You can search and navigate locally via tags and the graph view.

**Vision:** Make this knowledge discoverable to visitors on **buildchain.wiki**—a public-facing, interconnected knowledge base where anyone can:
- Navigate via visual knowledge graph + faceted tag filtering
- Read synthesized concept pages with supporting source evidence
- Search semantically (e.g., "How do I manage design changes?" finds relevant concepts across phases/systems)

**The gap:** Your existing brainstorm doc (2026-04-13) covers Obsidian authoring. This doc covers the publishing layer: how content flows from Obsidian → GitHub → website, and how visitors experience that knowledge.

---

## Requirements

### R1. Private Vault Repository
- Obsidian vault (`Build Chain/` + `wiki/concepts/` folders) is committed to a **private GitHub repo** (e.g., `serialimprover/buildchain-private`)
- Vault is versioned and synced with git (enables automated pull in CI/CD)

### R2. Automated Content Sync (GitHub Actions)
- A scheduled GitHub Actions workflow (e.g., daily or on-demand) pulls the latest vault content from the private repo
- Workflow exports:
  - All files from `Build Chain/` (raw source clips)
  - All files from `wiki/concepts/` (synthesized concept pages)
  - All frontmatter (title, tags, source URL, status, etc.)
- Content is available to the website build process

### R3. Content Transformation for Web
- **Wikilink conversion:** Obsidian wikilinks (`[[Concept Name]]`) are converted to web hyperlinks during build
  - Preprocessing script handles bulk conversions
  - SSG (GitHub Pages renderer) catches edge cases
- **Frontmatter preservation:** Tags, source metadata, and status are extracted and used for website features (not displayed as raw YAML)
- **Markdown → HTML:** All markdown is rendered to semantic HTML with support for emphasis, lists, code blocks, tables

### R4. Two Content Types on Website
- **Concept pages** (from `wiki/concepts/`)
  - Full synthesized content (AI-generated concept pages)
  - Display frontmatter: title, tags, created/updated dates
  - Links to supporting sources (see R5)
  - Links to related concepts via wikilinks
  
- **Source pages** (from `Build Chain/`)
  - Clipped articles with original metadata (source URL, author, published date)
  - Display frontmatter: title, source link, tags, description
  - Backlinks to concepts that cite them
  - Short excerpt or full clip content (configurable)

### R5. Knowledge Graph Visualization
- **Interactive visual graph** on website homepage and concept pages
  - Nodes: concepts and sources
  - Edges: concept → source (evidence), concept ↔ concept (wikilinks)
  - Clickable nodes navigate to pages
  - Filterable by tag (see R6)
  
- **Responsive on mobile:** Graph degrades gracefully; on small screens, tag filtering is primary

### R6. Faceted Tag Navigation
- **Sidebar or top navigation** displays all tag namespaces:
  - Lifecycle phases (`phase/NPI`, `phase/manufacturing`, etc.)
  - Digital systems (`system/PLM`, `system/ERP`, etc.)
  - Domains (`domain/aerospace-defense`, etc.)
  - Aerospace-specific (`aero/AS9100`, `aero/PPAP`, etc.)
  
- **Multi-select filtering:** Visitor can select multiple tags; results show concepts/sources matching ALL selected tags (AND logic)
- **Filter + search integration:** Tag filters refine semantic search results (see R7)

### R7. Semantic Search
- **Search bar** accepts natural language queries (e.g., "How do I manage design changes?")
- **Semantic matching:** Results are ranked by relevance to query intent, not just keyword match
  - Uses embeddings (Claude API, OpenAI, or similar) to find concepts/sources with similar meaning
  - Pre-computed embeddings stored with content (no real-time embedding cost)
  
- **Faceted refinement:** Search results can be filtered by tags (phase, system, domain)
- **Search UI:** Display top N results (e.g., 10) with:
  - Title
  - Content type (concept / source)
  - Tags
  - Snippet or preview
  - Relevance score (optional)

### R8. Content Type Indicators
- Concepts and sources are visually distinct on the website:
  - Concept pages: marked as "synthesized knowledge" (AI-generated)
  - Source pages: marked as "clipped source" (evidence)
- Concept pages link to their sources; sources show backlinks to concepts

### R9. Public Read-Only Access
- Website is fully public and read-only
- No authentication or login required for browsing
- Editing happens only in Obsidian (private)
- No direct "suggest edit" or pull request workflow (out of scope for MVP)

### R10. Deployment & Hosting
- Website is deployed via **GitHub Pages** (from `serialimprover/buildchain-wiki` repo)
- Build process:
  1. GitHub Actions pulls vault content from private repo
  2. Preprocessing transforms wikilinks and frontmatter
  3. Static HTML is generated
  4. GitHub Pages serves the static site at `buildchain.wiki`
- Rebuild frequency: on-demand or scheduled (e.g., daily)

---

## Success Criteria

- A visitor can land on buildchain.wiki and see a knowledge graph showing concept relationships
- Searching for "PPAP aerospace" returns the PPAP concept page and related FAI/design review sources
- Clicking a tag (e.g., `#phase/NPI`) filters the graph to show only NPI-related concepts and sources
- A concept page displays the full synthesized content with a sidebar listing source articles; visitor can click through to source pages
- Semantic search for "design review requirements" returns PDR/CDR/TRR and related concepts, even if those exact words don't appear in the query
- All existing Obsidian content (`wiki/concepts/`, `Build Chain/`) is on the website and browsable
- A visitor can navigate from concept → source → concept without friction

---

## Scope Boundaries

- **No user-generated content:** Visitors cannot submit articles, comments, or suggestions (read-only)
- **No authentication:** No login, user accounts, or access control (fully public)
- **No real-time updates:** Website rebuilds on a schedule or manual trigger, not on every vault change
- **No community features:** No forums, discussions, or collaborative editing (Obsidian is sole authoring tool)
- **Semantic search is MVP:** Uses pre-computed embeddings; no real-time embedding generation (future optimization)
- **No integration with actual PLM/ERP/MES systems:** Website is a knowledge wiki *about* those systems, not a replacement

---

## Key Decisions

- **Private vault repo + scheduled sync:** Keeps vault versioned and enables async CI/CD pull, rather than real-time sync or self-hosted runners
- **Visual graph + tag filters:** Visitors get both serendipitous discovery (graph) and targeted navigation (filters)
- **Semantic search over keyword search:** Supports exploratory queries like "How do I..." or "What's the difference between...", not just exact matches
- **Concepts and sources as separate pages:** Preserves source fidelity (original clips) while building curated synthesis; maintains transparent evidence chain
- **GitHub Pages static site:** Low-cost, no server maintenance, fast CDN delivery

---

## Dependencies / Assumptions

- Obsidian vault can be committed to a private GitHub repo without privacy/size issues (assume <500 MB)
- GitHub Actions has access to the private vault repo (standard GitHub permissions)
- Semantic embeddings can be pre-computed during build (doesn't require real-time API calls; embeddings API is available)
- Static site generator (current GitHub Pages setup) can be extended or replaced to support the new publishing features (wikilink conversion, graph rendering, search indexing)
- Visitor traffic is modest (no DDoS concerns; static HTML is efficient)

---

## Outstanding Questions

### Resolve Before Planning
- None — all product decisions resolved

### Deferred to Planning

- `[Affects R1][Technical]` What is the current GitHub Pages build process? (Is there a build script, a Jekyll config, or custom GitHub Actions workflow already in place?)

- `[Affects R2][Needs research]` What format should the private vault repo have? (Raw markdown in folder structure, or should the vault folder itself be the repo root?)

- `[Affects R3][Technical]` What wikilink conversion library should be used in preprocessing? (Obsidian-markdown-to-html, custom regex, or SSG's built-in support?)

- `[Affects R5][Needs research]` What JavaScript library should render the interactive knowledge graph? (D3.js, Cytoscape.js, Force-Graph, etc.)

- `[Affects R7][Needs research]` What embedding model should be used for semantic search? (OpenAI's `text-embedding-3-small`, Claude, or local embeddings?) What's the cost/performance trade-off?

- `[Affects R7][Technical]` How should embeddings be stored? (Embedded in JSON alongside content, external vector DB like Pinecone, or simple cosine similarity on static data?)

- `[Affects R10][Needs research]` Can the current GitHub Pages setup be extended with preprocessing and graph generation, or does the build process need a major refactor?

---

## Next Steps

→ `/ce:plan` for structured implementation planning

