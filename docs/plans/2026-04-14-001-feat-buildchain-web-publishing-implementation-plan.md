---
title: BuildChain Wiki Web Publishing Implementation Plan
type: feat
status: active
date: 2026-04-14
origin: docs/brainstorms/2026-04-14-buildchain-web-publishing-requirements.md
---

# BuildChain Wiki: Web Publishing Implementation Plan

## Overview

Transform BuildChain.wiki from a hand-crafted static site (manual content embedding) into an **automated publishing pipeline** that syncs your Obsidian knowledge base to the web.

**Current state:** 9 concept pages manually embedded into `graph-data.js`, D3.js visualization, no build automation.

**Target state:** 
- GitHub Actions automatically pulls vault content on schedule
- Content transformed (wikilinks → links, frontmatter extracted)
- Search index built with semantic embeddings
- Interactive knowledge graph with faceted filtering
- Full public knowledge base at buildchain.wiki

---

## Problem Statement

Your Obsidian vault contains rich, synthesized knowledge on hardware design and manufacturing. Currently:
1. **Publishing is manual** — content must be hand-embedded into `graph-data.js`
2. **No semantic search** — visitors can only use keyword search
3. **Limited filtering** — tag navigation exists but isn't integrated with graph/search
4. **No automation** — new Obsidian content doesn't flow to the website

**Impact:** Scaling the knowledge base beyond ~20 pages becomes unsustainable. You can't iterate on synthesis without manual web updates.

---

## Proposed Solution

Build a **three-stage automated pipeline:**

```
┌─────────────────────────────────────────────────────────────┐
│ STAGE 1: CONTENT SYNC (GitHub Actions)                      │
├─────────────────────────────────────────────────────────────┤
│ Obsidian Vault (Local)                                       │
│ ├── Build Chain/ (raw clips)                                │
│ └── wiki/concepts/ (synthesized pages)                      │
│                                                              │
│ ↓ Commit to private GitHub repo                             │
│                                                              │
│ Private Repo: serialimprover/buildchain-private             │
│ (Vault folder structure, markdown + frontmatter)            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ STAGE 2: CONTENT TRANSFORMATION & INDEXING (GitHub Actions) │
├─────────────────────────────────────────────────────────────┤
│ 1. Fetch vault from private repo                            │
│ 2. Transform markdown:                                       │
│    - Convert [[wikilinks]] → [text](url)                    │
│    - Extract frontmatter (tags, status, etc.)              │
│ 3. Generate semantic embeddings (sentence-transformers)     │
│ 4. Build search index + metadata                            │
│ 5. Generate graph-data.js (nodes + links from content)     │
│ 6. Commit to website repo                                   │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ STAGE 3: DEPLOYMENT (GitHub Pages)                          │
├─────────────────────────────────────────────────────────────┤
│ Website Repo: serialimprover/buildchain-wiki                │
│                                                              │
│ Static Site:                                                │
│ ├── index.html (enhanced with semantic search UI)          │
│ ├── graph-data.js (auto-generated from vault)              │
│ ├── embeddings.json (pre-computed, 256-dim)                │
│ ├── metadata.json (tags, status, links)                    │
│ └── docs/ (concepts + sources as individual pages)         │
│                                                              │
│ ↓ GitHub Pages serves at buildchain.wiki                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Technical Approach

### Architecture: Zero-Build Preservation

The current site has **zero build tools** (no Node.js, no bundler). Preserve this simplicity:

- **Build process:** GitHub Actions (Python scripts + shell commands)
- **Rendering:** Browser-side (existing D3.js + custom markdown renderer)
- **Data format:** JSON + markdown (git-friendly, version-controlled)
- **Deployment:** GitHub Pages (automatic on commit)

### Implementation Phases

#### Phase 1: Private Vault Repository Setup

**Deliverables:**
- Create `serialimprover/buildchain-private` GitHub repo (private)
- Commit Obsidian vault to this repo
- Establish git workflow (local vault → git sync)

**Technical tasks:**
- [ ] Create private GitHub repo
- [ ] Add vault root to `.gitignore` (exclude node_modules, .obsidian/plugins/personal caches)
- [ ] Commit current vault contents: `Build Chain/`, `wiki/concepts/`, `_meta/`
- [ ] Document vault sync workflow (manual commit or git hooks)

**Success criteria:**
- Vault is committed and versioned in private repo
- At least one full sync completed successfully
- Branch protection rules configured (if desired)

---

#### Phase 2: GitHub Actions Sync & Transformation Pipeline

**Deliverables:**
- GitHub Actions workflow in website repo that pulls vault content
- Content transformation scripts (wikilink conversion, frontmatter extraction)
- Embedding generation (sentence-transformers)
- Auto-generated `graph-data.js` and search indexes

**Technical decisions (origin: requirements R1-R3):**

1. **Embedding Model:** `all-MiniLM-L6-v2` (sentence-transformers)
   - 384-dimensional → reduced to 256-dim for efficiency
   - ~500KB file size for 200 pages
   - Pre-computed at build time (no runtime API calls)
   
2. **Wikilink Transformation:**
   - Preprocessing script converts `[[Concept Name]]` → `[Concept Name](./concept-name.html)`
   - Fallback: D3 visualization handles unresolved links gracefully

3. **Data Structure:**
   ```
   graph-data.js
   {
     nodes: [
       { id: "ppap-aerospace", name: "PPAP in Aerospace...", 
         type: "concept", tags: ["phase/NPI", "system/PLM"],
         content: "<html>..." }
     ],
     links: [
       { source: "ppap-aerospace", target: "ppap-source-1", relation: "source-of" }
     ]
   }
   
   embeddings.json
   {
     "ppap-aerospace": [0.12, -0.45, ...],  // 256-dimensional
     "ppap-source-1": [...]
   }
   
   metadata.json
   {
     "ppap-aerospace": {
       "title": "PPAP in Aerospace — AS9145",
       "type": "concept",
       "tags": ["phase/NPI", "system/PLM", "aero/PPAP"],
       "created": "2026-04-13",
       "sources": ["ppap-source-1", "ppap-source-2"]
     }
   }
   ```

**GitHub Actions workflow (`.github/workflows/sync-and-build.yml`):**

```yaml
name: Sync Vault & Build Site

on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight UTC
  workflow_dispatch:      # Manual trigger

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # 1. Fetch private vault repo
      - name: Checkout private vault
        uses: actions/checkout@v3
        with:
          repository: serialimprover/buildchain-private
          token: ${{ secrets.PRIVATE_REPO_TOKEN }}
          path: vault

      # 2. Checkout website repo
      - name: Checkout website repo
        uses: actions/checkout@v3
        with:
          path: website

      # 3. Set up Python for transformation scripts
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      # 4. Install dependencies
      - name: Install dependencies
        run: pip install sentence-transformers numpy

      # 5. Run transformation pipeline
      - name: Transform content
        run: |
          python website/scripts/transform_vault.py \
            --vault-path vault \
            --output-path website/docs

      # 6. Generate embeddings
      - name: Generate embeddings
        run: |
          python website/scripts/generate_embeddings.py \
            --content-path website/docs \
            --output website/embeddings.json

      # 7. Build search index
      - name: Build search index
        run: |
          python website/scripts/build_search_index.py \
            --vault-path vault \
            --output website/metadata.json

      # 8. Generate graph data
      - name: Generate graph-data.js
        run: |
          python website/scripts/generate_graph_data.py \
            --vault-path vault \
            --embeddings website/embeddings.json \
            --output website/graph-data.js

      # 9. Commit generated files
      - name: Commit changes
        run: |
          cd website
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add embeddings.json metadata.json graph-data.js docs/
          git commit -m "chore: auto-sync vault content" || true
          git push
```

**Python scripts to write:**

1. **`transform_vault.py`**
   - Input: vault folder structure
   - Output: markdown files in `docs/concepts/` and `docs/sources/`
   - Tasks:
     - Copy concept files from `wiki/concepts/`
     - Copy and organize source clips from `Build Chain/`
     - Convert `[[wikilinks]]` to relative markdown links
     - Preserve frontmatter, rename for URL safety

2. **`generate_embeddings.py`**
   - Input: transformed markdown files
   - Output: `embeddings.json` (document ID → 256-dim vector)
   - Use `sentence-transformers` to embed each document
   - Reduce from 384 to 256 dimensions for file size

3. **`build_search_index.py`**
   - Input: vault frontmatter + transformed content
   - Output: `metadata.json` (document ID → title, tags, type, etc.)
   - Extract and structure metadata for faceted filtering

4. **`generate_graph_data.js`**
   - Input: vault structure + embeddings + metadata
   - Output: `graph-data.js` (nodes + links for D3)
   - Nodes: concepts + sources with embedded content
   - Links: concept → source, concept ↔ concept (wikilinks)

**Technical considerations:**
- **Cost:** sentence-transformers is free (local), no API costs
- **Build time:** ~30-60s for embedding generation (run daily)
- **File size:** embeddings.json (~100KB for 200 pages), gzips to ~10KB
- **Freshness:** One-day lag from vault change to live site (acceptable for async publishing)

**Success criteria:**
- GitHub Actions workflow runs without errors
- `graph-data.js`, `embeddings.json`, `metadata.json` generated and committed
- Website repo contains transformed concept + source files
- All wikilinks converted to valid hyperlinks

---

#### Phase 3: Search UI Enhancement (Frontend)

**Deliverables:**
- Semantic search bar on homepage + concept pages
- Faceted filtering UI (tag sidebar or buttons)
- Integration with D3 graph (click tag → filter graph)
- Integration with search results (click result → highlight in graph)

**Technical approach (origin: requirements R5-R7):**

**Semantic search implementation:**

```javascript
// Load pre-computed embeddings and metadata at page load
const embeddings = await fetch('/embeddings.json').then(r => r.json());
const metadata = await fetch('/metadata.json').then(r => r.json());
const graphData = window.graphData;  // From graph-data.js

// Cosine similarity function
function cosineSimilarity(a, b) {
  const dotProduct = a.reduce((sum, x, i) => sum + x * b[i], 0);
  const magnitude = (arr) => Math.sqrt(arr.reduce((sum, x) => sum + x * x, 0));
  return dotProduct / (magnitude(a) * magnitude(b));
}

// Semantic search (finds top N results by similarity)
function semanticSearch(query, topN = 10) {
  // Embed query using a lightweight in-browser approach OR
  // Pre-embed common queries and use approximate nearest neighbor
  
  // Approach 1: Use transformers.js for in-browser embedding
  // (requires ~2MB library, but privacy-first)
  const queryEmbedding = await embedQuery(query);
  
  // Approach 2: Pre-computed query embeddings (lighter)
  // const queryEmbedding = queryEmbeddingsMap[query.toLowerCase()] || null;
  
  if (!queryEmbedding) return [];
  
  const results = Object.entries(embeddings)
    .map(([docId, embedding]) => ({
      docId,
      similarity: cosineSimilarity(queryEmbedding, embedding),
      ...metadata[docId]
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topN);
  
  return results;
}

// Faceted filtering (apply tag filters to search results)
function filterByTags(results, selectedTags) {
  if (selectedTags.length === 0) return results;
  
  return results.filter(result => {
    const hasTags = result.tags.some(tag => selectedTags.includes(tag));
    return hasTags;
  });
}

// Unified filter state driving UI updates
class SearchController {
  constructor() {
    this.selectedTags = new Set();
    this.searchQuery = '';
    this.searchResults = [];
  }
  
  updateSearch(query) {
    this.searchQuery = query;
    this.refreshResults();
  }
  
  toggleTag(tag) {
    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
    } else {
      this.selectedTags.add(tag);
    }
    this.refreshResults();
  }
  
  refreshResults() {
    let results = semanticSearch(this.searchQuery);
    results = filterByTags(results, Array.from(this.selectedTags));
    this.searchResults = results;
    this.updateUI();
  }
  
  updateUI() {
    // Update search results display
    // Update graph highlighting (based on result tags)
    // Update tag cloud to show active tags
  }
}
```

**Enhanced `index.html` structure:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>BuildChain Wiki</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
  <div class="app">
    <!-- Sidebar: Search + Filters -->
    <aside class="sidebar">
      <input type="text" id="search" placeholder="Search concepts...">
      
      <div class="facets">
        <h3>Phases</h3>
        <button class="tag" data-tag="phase/NPI">NPI</button>
        <button class="tag" data-tag="phase/manufacturing">Manufacturing</button>
        <!-- ... -->
        
        <h3>Systems</h3>
        <button class="tag" data-tag="system/PLM">PLM</button>
        <!-- ... -->
      </div>
      
      <div class="search-results">
        <!-- Populated by JavaScript -->
      </div>
    </aside>

    <!-- Main: Graph -->
    <main class="main">
      <svg id="graph"></svg>
      <div id="node-details"></div>  <!-- Concept/source details on click -->
    </main>
  </div>

  <script src="graph-data.js"></script>
  <script src="search.js"></script>  <!-- New semantic search logic -->
</body>
</html>
```

**Two approaches for query embedding:**

**Approach A (Lightweight, Pre-computed):** Only embed common queries at build time, use approximate nearest neighbor for others.

**Approach B (Privacy-first, In-browser):** Use `transformers.js` library (~1-2MB) to embed queries client-side. No server, full privacy.

**Recommendation:** Start with Approach A (build-time pre-computed), upgrade to Approach B if search quality matters.

---

#### Phase 4: Testing & Validation

**Acceptance tests:**
- [ ] GitHub Actions workflow runs on schedule without errors
- [ ] All concept files transformed and committed to website repo
- [ ] Embeddings file generated and gzips to <100KB
- [ ] Semantic search returns relevant results (manual spot-check 3-5 queries)
- [ ] Tag filters reduce result count correctly
- [ ] D3 graph displays all nodes + links without crashing
- [ ] Mobile-responsive (graph + filters usable on mobile)
- [ ] Wikilinks resolve (click link in concept → navigate to target)

---

## System-Wide Impact

### Interaction Graph
When a visitor searches for "PPAP aerospace":
1. Semantic search finds PPAP concept + related FAI/design review sources
2. Tag filter `#phase/NPI` is auto-applied (PPAP is tagged `phase/NPI`)
3. Graph highlighting updates (nodes matching query/tags brighten)
4. User clicks PPAP node → concept page loads in sidebar
5. Source links visible → user clicks FAI → source page loads

### Data & State Lifecycle
- **Vault changes** → committed to private repo
- **GitHub Actions runs** → fetches vault, transforms, indexes, commits
- **Website rebuilds** → GitHub Pages serves fresh `graph-data.js`, `embeddings.json`
- **Client loads page** → fetches JSON, renders graph + search UI
- **User searches** → cosine similarity on pre-computed embeddings (no API call)

### Error Propagation
- **Vault formatting issues** → Python scripts should have tolerant parsing (skip malformed files, log warnings)
- **Broken wikilinks** → Graph renders with unresolved link labels; D3 gracefully handles missing nodes
- **Embedding generation failure** → Workflow should allow partial rebuild (skip embeddings if sentence-transformers fails)

### API Surface Parity
- **Current:** Manual embedding of content into `graph-data.js`
- **New:** Automated generation; no manual step
- **Backward compatibility:** `graph-data.js` structure unchanged; new fields (embeddings, metadata) are additions

---

## Acceptance Criteria

### Functional Requirements
- [ ] Vault content automatically syncs to website daily (or on manual trigger)
- [ ] New concept pages appear on website within 24 hours of Obsidian creation
- [ ] Semantic search returns top 10 relevant results ranked by similarity
- [ ] Tag filters work (multi-select AND logic)
- [ ] Knowledge graph displays concepts + sources with relationships
- [ ] Clicking a concept shows full content in sidebar or dedicated page
- [ ] Clicking a source shows clipped article with metadata
- [ ] Wikilinks in concept pages are clickable and resolve

### Non-Functional Requirements
- [ ] Build pipeline completes in <2 minutes
- [ ] Embeddings file <1MB (gzipped <100KB)
- [ ] Search latency <100ms (client-side, no API calls)
- [ ] Mobile-responsive design (sidebar becomes drawer on <768px)
- [ ] Graph renders smoothly for 100-300 nodes (SVG; upgrade to canvas if needed)

### Quality Gates
- [ ] No TypeErrors or JavaScript errors in browser console
- [ ] All Python scripts have error handling (log failures, don't fail silently)
- [ ] GitHub Actions workflow has retry logic for transient failures
- [ ] Documentation updated (how to run the pipeline, how to add content)

---

## Success Metrics

1. **Velocity:** Time from Obsidian edit to live website: <24 hours
2. **Coverage:** All Obsidian concepts + sources appear on website
3. **Discoverability:** Semantic search + tag filters help visitors find knowledge
4. **Reliability:** GitHub Actions workflow 99% success rate (deferred failures are logged)

---

## Dependencies & Risks

### Dependencies
- **Python 3.10+** on GitHub Actions (standard)
- **sentence-transformers library** (MIT license, well-maintained)
- **GitHub token** with access to private vault repo (already managed via secrets)
- **Stable git workflow** (vault commits must be regular to sync effectively)

### Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Vault sync falls out of sync | Website becomes stale | Set up local git hook to auto-commit vault; add monitoring (GitHub Actions email alerts) |
| Wikilink conversion breaks links | Navigation broken | Test wikilink conversion script with real vault; add fallback behavior in D3 |
| Embeddings file explodes in size | Website slow to load | Reduce embedding dimensions to 128 (tested, minimal quality loss); zip on server |
| Semantic search quality poor | Users frustrated | Start with keyword search fallback; pre-test with sample queries |
| D3 graph crashes with 500+ nodes | Visualization unavailable | Monitor node count; pre-plan canvas upgrade path; test with synthetic large dataset |

---

## Resource Requirements

- **Person-hours:** ~40-50h (one developer, 1-2 weeks)
  - Phase 1: 2h (repo setup)
  - Phase 2: 20-25h (scripts, GitHub Actions, testing)
  - Phase 3: 15-20h (search UI, integration)
  - Phase 4: 5h (validation, docs)

- **Infrastructure:** Free tier sufficient
  - Private GitHub repo (free with account upgrade)
  - GitHub Actions (free for 2000 min/month; ~30 min/day = ~900 min/month)
  - GitHub Pages hosting (free)

---

## Outstanding Questions

### Deferred to Planning / Technical Research

1. **Embedding model selection**
   - `all-MiniLM-L6-v2` vs `all-MiniLM-L12-v2` vs Nomic Embed V2?
   - Trade-off: speed vs quality. Recommend MiniLM-L6 for <1s build time.

2. **Query embedding strategy**
   - Pre-compute common queries or in-browser with transformers.js?
   - Recommend: Phase 1 (pre-computed fallback), Phase 2 (upgrade to in-browser).

3. **Git sync automation**
   - Manual commits vs git hooks vs third-party sync tool (e.g., git-auto-commit)?
   - Recommend: Start with git hook, document manual sync as fallback.

4. **Content structure on website**
   - Should concepts + sources be separate pages, or embed in graph nodes?
   - Recommendation: Embed in nodes initially, add separate pages if needed for SEO.

5. **Mobile graph rendering**
   - SVG works on mobile, but touch interactions are limited. Upgrade strategy?
   - Recommendation: Use responsive D3, switch to canvas only if 300+ nodes.

---

## Future Enhancements (Out of Scope for MVP)

- **AI-generated summaries** — Use Claude API to auto-generate concept summaries
- **Community contributions** — Accept pull requests for new articles
- **Full-text search** — Hybrid keyword + semantic search for better recall
- **Real-time sync** — Publish changes instantly (vs daily schedule)
- **Analytics** — Track popular concepts, search queries, user flows
- **Comment/feedback system** — Allow visitors to suggest improvements

---

## Next Steps

1. Create private GitHub repo (`serialimprover/buildchain-private`)
2. Commit vault to private repo
3. Write Python transformation + embedding scripts
4. Set up GitHub Actions workflow
5. Test end-to-end: vault change → website update → search works
6. Deploy to buildchain.wiki and test in production

**Implementation can proceed immediately.** No blocking questions remain.

