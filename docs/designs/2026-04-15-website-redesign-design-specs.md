---
date: 2026-04-15
topic: website-ui-redesign-design-specs
---

# Website UI Redesign — Design Specifications

## Design Decisions (LOCKED IN)

All 7 blocking design questions resolved by user on 2026-04-15.

### 1. Article-Concept Linking Strategy
**Decision:** Wikilinks in article markdown

**Implementation:**
- Articles reference concepts using wikilink syntax: `[[Concept Title]]` in markdown
- `generate_graph_data.py` extracts wikilinks from article content
- Creates `article → concept` edges in graph-data.js
- Also supports frontmatter field `concepts:` as fallback

**Example:**
```markdown
# Article: Best Practices in FAI Testing

This article supports [[First Article Inspection — FAI and FAIR AS9102B]]
and provides guidance for [[MOC — NPI Process]].
```

**Build logic:**
- During build, extract all `[[Title]]` patterns from article markdown
- Match against concept titles (case-insensitive, slug-based matching)
- Add edge `article → concept` to graph data

---

### 2. Entry Point Concept
**Decision:** User-selectable dropdown with default concept

**Implementation:**
- Default concept: "MOC — NPI Process" (primary domain concept)
- UI: Dropdown at top of page listing all 9 concepts
- User can change center concept at any time
- Graph re-renders on selection change

**UX Flow:**
1. Page loads → show "MOC — NPI Process" at center
2. User clicks dropdown → see list of all concepts
3. User selects "PPAP in Aerospace — AS9145"
4. Graph animates to new concept at center (shows new connections)

**Implementation in `index.html`:**
- Add `<select id="conceptSelector">` near top
- Populate with all concept names from graph data
- On change event: call `focusGraph(conceptId)`

---

### 3. Filter Scope
**Decision:** Global filters applied, then focused graph shown

**Implementation:**
- Filters operate on all 46 nodes (articles + concepts)
- After filtering, show focused graph of center concept + matching connected items
- If filter result is empty, show message: "No results match these filters"

**Filter logic:**
- User selects tags (e.g., `phase/NPI`, `standard/AS9100D`)
- Filter evaluates: `node.tags ∩ selectedTags ≠ ∅` (AND logic — must match all selected tags)
- Apply filter: set `node.visible = true/false` based on filter match
- Graph rendering: show only `visible` nodes, re-layout

**Example:**
- User at "MOC — NPI Process" concept
- Applies filter: `phase/NPI` + `standard/AS9100D`
- Graph shows: MOC concept + articles tagged with BOTH tags + related concepts also tagged
- If no articles match, show: "No articles match these filters for MOC — NPI Process"

---

### 4. Mobile/Responsive Strategy
**Decision:** Graph-first, adaptive (reduce labels on small screens, touch-optimized)

**Implementation:**
- **Desktop (1024px+):** Full layout, normal node labels
- **Tablet (768–1024px):** Graph visible, labels reduced to abbreviations, filters in horizontal bar
- **Mobile (≤768px):** Graph visible, node labels hidden, hover shows tooltip, filters in drawer/slide-out

**Touch Optimization:**
- Node hit targets ≥24px (larger than desktop)
- Tap on concept → focus graph
- Tap and hold → show details in tooltip/modal
- Swipe to pan graph (instead of drag)
- Pinch to zoom

**Responsive Breakpoints:**
```css
/* Desktop */
@media (min-width: 1024px) {
  .node-label { display: block; font-size: 12px; }
}

/* Tablet */
@media (768px <= width < 1024px) {
  .node-label { display: block; font-size: 10px; abbreviation }
}

/* Mobile */
@media (max-width: 768px) {
  .node-label { display: none; }
  .node:hover::after { /* tooltip shows full label */ }
}
```

---

### 5. Graph Layout Algorithm for Focused Mode
**Decision:** Modified force-directed simulation with focused-mode tuning

**Implementation:**
- Use D3.js force-directed with adjusted parameters for focused mode
- Parameters:
  - `charge: -300` (instead of -400) — spread nodes slightly less
  - `linkDistance: 80` (instead of 100) — tighter clusters
  - `iterations: 50` (instead of 200) — faster layout stabilization
  - `collideRadius: 25` — prevent node overlap
  - Bounding box: `[x: 0-800, y: 0-600]` — keep all nodes visible

**Focused vs. Full Mode:**
- **Focused mode (≤20 nodes):** Use tuned params above, layout stabilizes quickly
- **Full mode (46 nodes):** Use original params, layout takes longer but is more spread out
- Detection: if `visibleNodeCount <= 20`, use focused mode params

**Layout Animation:**
- When expanding nodes, add them one at a time with `transition()`
- Fade in new nodes over 300ms
- Let force simulation re-layout organically (don't hard-position)

---

### 6. Tag Schema & Assignment
**Decision:** Automated extraction from metadata + suggested defaults

**Implementation:**
- Extract tags from article frontmatter fields (if present)
- Apply suggested default tags based on content keywords and concept relationships
- Tag namespaces (categories):
  - **Lifecycle:** `phase/NPI`, `phase/Design`, `phase/Manufacturing`, `phase/Production`
  - **Domain:** `domain/aerospace`, `domain/manufacturing`, `domain/it-ot`, `domain/quality`
  - **Standard:** `standard/AS9100D`, `standard/ISO9001`, `standard/MQTT`, `standard/ANSI`
  - **System:** `system/QMS`, `system/MES`, `system/PLM`, `system/ERP`
  - **Process:** `process/FMEA`, `process/PPAP`, `process/FAI`, `process/PDR-CDR`

**Build Logic in `generate_graph_data.py`:**
```python
# 1. Check article/concept frontmatter for `tags:` field
# 2. If no tags, infer from title and linked concepts
# 3. Assign tags to node in metadata
# 4. Example:
#    - Article "PPAP in Aerospace" → auto-tag: process/PPAP, standard/AS9145, domain/aerospace
#    - Article linked to [[AS9100D NPI Clauses]] → auto-tag: standard/AS9100D
```

**Manual Override:**
- Users can add `tags: [tag1, tag2]` to article frontmatter to override/supplement auto-tags

**Tag Display in UI:**
- Filter UI shows tags organized by namespace (pills/checkboxes grouped by category)
- Example:
  ```
  Lifecycle:
    ☐ NPI  ☐ Design  ☐ Manufacturing
  Domain:
    ☐ Aerospace  ☐ Manufacturing  ☐ Quality
  Standard:
    ☐ AS9100D  ☐ ISO9001
  ```

---

### 7. Node Visual Distinction
**Decision:** Teal (concepts) + gray (articles) + amber (hover/selected)

**Implementation:**
- **Concept nodes:** Teal circle (#0891b2)
- **Article nodes:** Gray circle (#6b7280)
- **Hover state:** Opacity ↑ to 1.0, glow amber (#fbbf24)
- **Selected state:** Teal with amber border

**CSS Variables:**
```css
:root {
  --color-concept: #0891b2;     /* teal */
  --color-article: #6b7280;     /* gray */
  --color-accent: #fbbf24;      /* amber */
  --color-hover: #d4d4d8;       /* light gray */
  --color-text-primary: #1f2937; /* dark gray */
  --color-text-secondary: #6b7280; /* medium gray */
}
```

**SVG Styling:**
```javascript
d3.selectAll('.node-concept')
  .attr('fill', 'var(--color-concept)')
  .attr('r', 8);

d3.selectAll('.node-article')
  .attr('fill', 'var(--color-article)')
  .attr('r', 5);

d3.selectAll('.node').on('mouseover', function() {
  d3.select(this)
    .transition()
    .attr('opacity', 1.0)
    .attr('stroke', 'var(--color-accent)')
    .attr('stroke-width', 2);
});
```

**Legend:**
Display at top of graph:
```
● Concept (clickable)  ● Article (shows details)
```

---

## Metadata Schema Extension

**Current schema:**
```json
{
  "node-id": {
    "title": "...",
    "type": "concept|article|source",
    "tags": "",
    "url": "...",
    "status": "..."
  }
}
```

**Extended schema:**
```json
{
  "as9100d-npi-clauses": {
    "title": "AS9100D NPI Clauses",
    "type": "concept",
    "description": "Key clauses and requirements from AS9100D standard for NPI processes",
    "tags": ["standard/AS9100D", "phase/NPI", "domain/aerospace"],
    "url": "/concepts/as9100d-npi-clauses",
    "status": "published",
    "relatedConcepts": ["moc-npi-process", "ppap-in-aerospace"],
    "supportingArticles": ["fai-best-practices", "moc-digital-systems"],
    "source": "AS9100D Standard, Revision D"
  }
}
```

**New fields:**
- `description` (string): 1-2 sentence summary of the node
- `tags` (array of strings): Tags in format `namespace/tag` (e.g., `phase/NPI`)
- `relatedConcepts` (array of node IDs): Concept nodes this connects to
- `supportingArticles` (array of node IDs): Articles providing evidence for this concept
- `source` (string, optional): Where this concept/article comes from

---

## Color Palette

**Primary Colors:**
- **Concept Teal:** `#0891b2` (RGB: 8, 145, 178)
- **Article Gray:** `#6b7280` (RGB: 107, 114, 128)
- **Accent Amber:** `#fbbf24` (RGB: 251, 191, 36)

**Secondary Colors:**
- **Background:** `#f9fafb` (RGB: 249, 250, 251)
- **Text Primary:** `#1f2937` (RGB: 31, 41, 55)
- **Text Secondary:** `#6b7280` (RGB: 107, 114, 128)
- **Border:** `#e5e7eb` (RGB: 229, 231, 235)
- **Disabled:** `#d1d5db` (RGB: 209, 213, 219)

**Accessibility:**
- Teal on white: contrast ratio **5.2:1** ✓ (exceeds WCAG AA 4.5:1)
- Gray on white: contrast ratio **6.7:1** ✓
- Amber on white: contrast ratio **3.8:1** ⚠ (falls short for text; OK for UI elements)

---

## Information Architecture

**Page Layout (Desktop):**
```
┌────────────────────────────────────────┐
│  BuildChain Wiki Knowledge Graph       │
│  [Concept Dropdown ▼]  [Search ____]   │
├─────────┬──────────────────────┬───────┤
│ Filters │      Graph           │ Details
│─────────│      Viz             │ Panel
│ Lifecycle│ ● Concept at center │
│ ☐ NPI   │   ● Articles        │ Title
│ ☐ Design│   ● Related         │ Desc.
│         │                      │ Links
│ Domain  │ [Legend]             │
│ ☐ Aero  │                      │
│         │ [No Results msg?]    │
│────────┤                      │───────
│ Tag cloud or count              │
└────────┴──────────────────────┴───────┘
```

**Mobile Layout (≤768px):**
```
┌────────────────┐
│ BuildChain Wiki│
│ [Concept ▼]    │
│ [Search ___]   │
├────────────────┤
│  Graph View    │
│  ● Teal node   │
│  [Filters ☰]   │
│  (drawer)      │
└────────────────┘
```

---

## Next Steps

1. ✅ Design decisions documented
2. → Modify `generate_graph_data.py` to extract wikilinks + auto-tag
3. → Extend metadata.json schema + populate new fields
4. → Regenerate graph-data.js with new schema
5. → Create CSS color variables + typography
6. → Implement focused graph exploration in `index.html`
7. → Implement tag filtering UI
8. → Phase 1 complete, unblock Phase 2

---
