---
title: "feat: Comprehensive Website UI Redesign — Modern + Exploratory"
type: feat
status: active
date: 2026-04-15
origin: docs/brainstorms/2026-04-15-website-redesign-requirements.md
---

# Website UI Redesign — Modern + Exploratory Knowledge Graph

## Executive Summary

The BuildChain Wiki currently has a functional knowledge graph but suffers from severe visual and usability problems: unreadable contrast (black dots on dark blue), scattered graph layout with disconnected nodes, poor information architecture, and weak typography. This plan redesigns the entire website UI to create a modern, exploratory aesthetic that guides users through the aerospace concept network intuitively.

The redesign is comprehensive: color scheme, typography, component system, graph visualization, information architecture, and interaction patterns. Implementation is phased to resolve blocking design decisions, rebuild the data structure for article-concept linking, redesign the graph visualization for focused exploration, and polish the overall aesthetic.

**Key constraint:** Zero-build architecture (no Node.js, no bundler). All changes must work with existing Python build pipeline and browser-side vanilla JavaScript rendering.

---

## Problem Statement

**Current state:** 
- 46 nodes (9 concepts + 37 articles/sources)
- 63 links (all concept-to-concept; **zero article-to-concept relationships**)
- D3.js force-directed graph rendering all nodes at once
- Color contrast issues (black on dark blue)
- No tag/category filtering UI
- No focused exploration pattern
- Typography and spacing are unpolished

**Impact on users:**
Knowledge explorers cannot effectively:
- Navigate the concept network (layout is chaotic)
- Follow concept → supporting articles relationships (articles are disconnected)
- Refine discovery via tags/categories (no filtering)
- Distinguish concept types visually (poor hierarchy)

**Why it matters:**
Without this redesign, users abandon the site because they cannot discover value. The graph promises knowledge exploration but delivers visual chaos.

**Aesthetic goal:** Modern + Exploratory
- Modern: clean, intentional, high-contrast, spacious, polished
- Exploratory: emphasis on discovery, clear relationships, intuitive navigation, visual hierarchy that guides exploration

---

## Proposed Solution

Comprehensive redesign in three implementation phases:

1. **Phase 1: Design Decisions & Data Structure** — Resolve blocking design questions, extend metadata schema for article-concept linking
2. **Phase 2: Core Visualization & Interaction** — Redesign graph visualization for focused exploration, implement tag filtering, modernize color scheme and typography
3. **Phase 3: Polish & Optimization** — Responsive design, performance tuning, accessibility audit, final visual polish

---

## Technical Approach

### Architecture

**Constraints (from origin document and learnings):**
- Zero-build: no Node.js, no bundler, no complex tooling
- Build process: GitHub Actions + Python scripts only
- Frontend: vanilla JavaScript + D3.js + custom CSS
- Data: JSON + markdown (git-friendly)
- Rendering: browser-side (no server-side templates)

**Key design decisions carried forward (from origin):**
1. **Dynamic/Focused Graph Model** — Graph starts with a single concept at center, showing only directly connected items. Users can expand or filter. Not all 46 nodes visible at once.
2. **Modern + Exploratory Aesthetic** — Color, spacing, and hierarchy work together to support the explorer's workflow.
3. **Article-Concept Linking** — Articles explicitly link to concepts they provide evidence for (see Phase 1 for schema).
4. **Filters Narrow In-Place** — Filtering reduces the focused graph view in place, not switching to a separate filtered view.

**Technical dependencies:**
- Modify `generate_graph_data.py` to extract article-concept relationships
- Extend metadata schema (add `relatedConcepts`, `supportingArticles`, `tags`)
- Redesign `index.html` graph rendering and UI layout
- Create or update `styles.css` for modern color scheme, typography, spacing

---

## Implementation Phases

### Phase 1: Design Decisions & Data Structure (Blocking)

**Goal:** Resolve 12 design gaps identified in SpecFlow analysis. Extend metadata schema to support article-concept linking.

**Tasks:**

1. **Resolve Article-Concept Linking Strategy**
   - Decision: How are article→concept relationships encoded?
     - Option A: Wikilinks in article markdown (e.g., `[[AS9100D NPI Clauses]]`)
     - Option B: Frontmatter field (e.g., `concepts: [as9100d-npi-clauses]`)
     - Option C: Automated tagging scheme (articles tagged with concept slugs)
   - Recommended: **Option A + B** — Support both wikilinks and frontmatter for flexibility
   - Update `generate_graph_data.py` to extract relationships from both sources
   - Deliverable: Extended schema with `relatedConcepts` in articles, `supportingArticles` in concepts

2. **Resolve Entry Point Concept for Focused Graph**
   - Decision: Is there a default starting concept, or can users select freely?
   - Recommended: **Designate a default concept** (e.g., "MOC — NPI Process" or first alphabetically) + allow user selection via dropdown
   - Deliverable: Design spec for concept selector UI (mockup/wireframe)

3. **Resolve Filter Behavior**
   - Decision: Global filters (all 46 nodes) or focused graph only?
   - Recommended: **Focused graph only** — Cleaner, more relevant results
   - Decision: Multiple filter combinations (AND/OR)?
   - Recommended: **AND logic** — More intuitive for discovery (show items matching ALL tags)
   - Decision: What exactly to filter on? (tags, concept type, source type, etc.)
   - Recommended: **Tags + node type** (concept vs. article)
   - Deliverable: Filter interaction spec (how filters work, AND/OR logic, zero-result state)

4. **Resolve Mobile/Responsive Strategy**
   - Decision: Graph-first (adapt with reduced labels) or text-first (hide graph on small screens)?
   - Recommended: **Hybrid** — Graph visible on tablet+, hidden on mobile (text-based breadcrumb/outline instead)
   - Breakpoint: Hide graph ≤768px width; show graph ≥768px
   - Deliverable: Responsive design spec (desktop, tablet, mobile layouts)

5. **Resolve Graph Layout Algorithm for Focused Mode**
   - Decision: Modify force-directed simulation or use hierarchical layout?
   - Recommended: **Modify force-directed** with focused-mode tuning (fewer iterations, higher charge, bounding box)
   - Deliverable: D3 simulation parameters for focused mode (charge, link distance, iterations, collision radius)

6. **Define Tag Schema**
   - Extract tags from article metadata and concept frontmatter
   - Suggested tag namespaces (from learnings):
     - Lifecycle: `phase/NPI`, `phase/Design`, `phase/Manufacturing`
     - Domain: `domain/aerospace`, `domain/manufacturing`, `domain/it-ot`
     - Standard: `standard/AS9100D`, `standard/ISO9001`, `standard/MQTT`
     - System: `system/QMS`, `system/MES`, `system/PLC`
   - Deliverable: Tag extraction logic in `generate_graph_data.py`, populated tags in metadata.json

7. **Define Node Visual Distinction**
   - Decision: Color palette for concept vs. article nodes
   - Recommended: **Modern palette**
     - Concept nodes: teal/primary (e.g., `#0891b2` or `#06b6d4`)
     - Article nodes: gray/secondary (e.g., `#6b7280` or `#9ca3af`)
     - Hover/selected: bright accent (e.g., `#fbbf24` or `#f97316`)
   - Affordances: cursor pointer on hover, opacity increase, tooltip with title
   - Deliverable: CSS color variables, hover effects spec

8. **Address Edge Cases**
   - Isolated concepts (0 connections) — Show with "No connected articles" badge
   - Large article groups (20+) — Show top 5, "Show N more" pagination button
   - Articles with 0 concept connections — Hide from graph (they're orphaned)
   - Zero filter results — Show inline message: "No results match these filters. Try removing a filter or expanding the graph."
   - Deliverable: UX spec for edge cases, error messages

9. **Extend Metadata Schema**
   - Current metadata.json structure:
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
   - Extended schema:
     ```json
     {
       "node-id": {
         "title": "...",
         "type": "concept|article|source",
         "tags": ["phase/NPI", "standard/AS9100D"],
         "url": "...",
         "status": "...",
         "relatedConcepts": ["concept-id-1", "concept-id-2"],
         "supportingArticles": ["article-id-1"],
         "description": "..."
       }
     }
     ```
   - Deliverable: Updated metadata.json with new fields, schema spec

**Success Criteria:**
- All 12 SpecFlow gaps resolved with documented decisions
- Design decisions captured in design specs (mockups, wireframes, interaction patterns)
- Extended metadata schema validated against real data
- Tag schema applied to all 46 nodes
- Article-concept relationships extracted from markdown/metadata

**Effort:** 1-2 days (design decisions, schema extension, tag population)

---

### Phase 2: Core Visualization & Interaction Redesign

**Goal:** Implement focused graph exploration, tag filtering, modern color scheme, and improved typography.

**Tasks:**

1. **Implement Focused Graph Exploration**
   - Add concept selector UI (dropdown or legend picker) to let users choose/change the center concept
   - Modify D3 graph rendering to:
     - Start with selected concept at center
     - Show only directly connected concepts and supporting articles
     - Add "Expand" button/interaction to show secondary connections
     - Animate node entry/exit when expanding/filtering
   - Use focused-mode D3 parameters from Phase 1
   - Deliverable: Updated `index.html` graph renderer with focused mode logic

2. **Implement Tag/Category Filtering**
   - Add filter UI: tag checkboxes or pill buttons, organized by namespace (phase, domain, standard, system)
   - Implement AND logic: show only nodes matching ALL selected tags
   - Live-update graph opacity (non-matching nodes fade to 0.15 opacity)
   - Show zero-result state with helpful message
   - Integrate with existing search feature (search + filters are ANDed together)
   - Deliverable: Filter UI component, filtering logic in graph renderer

3. **Modernize Color Scheme**
   - Define color variables in CSS:
     - Primary (concepts): teal `#0891b2`
     - Secondary (articles): gray `#6b7280`
     - Accent (hover/selected): amber `#fbbf24`
     - Background: light neutral `#f9fafb` or `#ffffff`
     - Text: dark neutral `#1f2937`
     - Borders: light gray `#e5e7eb`
   - Apply to:
     - Node colors (concept circles, article circles)
     - Background colors (page, panels, cards)
     - Text colors (headings, body, metadata)
     - Interactive states (hover, active, disabled)
   - Ensure WCAG AA contrast compliance (4.5:1 for text, 3:1 for UI)
   - Deliverable: CSS color variables, color system spec

4. **Improve Typography & Hierarchy**
   - Font stack: Modern sans-serif (e.g., `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`)
   - Hierarchy:
     - Page title (h1): 32px bold
     - Section heading (h2): 24px bold
     - Subsection (h3): 18px semi-bold
     - Node label: 14px semi-bold (concepts), 12px regular (articles)
     - Body text: 16px regular, line-height 1.5
     - Metadata/small text: 12px regular, color gray
   - Spacing:
     - Section padding: 24px
     - Card padding: 16px
     - Element spacing (margin): 8px, 12px, 16px, 24px (consistent scale)
   - Deliverable: CSS typography variables, spacing scale

5. **Redesign Information Architecture**
   - Add legend explaining node types and interaction affordances:
     - "Concept: Click to focus. Articles: Click to expand details."
     - Visual legend showing concept circle vs. article circle with colors
   - Reorganize UI layout:
     - Top: Search bar + concept selector
     - Left sidebar: Tag filters (organized by namespace)
     - Center: Graph visualization
     - Right sidebar: Node details (title, description, links)
   - Ensure layout is clean and spacious (not cramped)
   - Deliverable: Layout redesign, wireframes, HTML structure

6. **Improve Interactive Affordances**
   - Node hover: cursor → pointer, opacity ↑, tooltip with title
   - Node click: focus graph on that node (if concept), or show details (if article)
   - Filter interaction: immediate visual feedback (nodes fade in/out)
   - Search interaction: nodes matching query glow or highlight
   - Deliverable: CSS hover/active states, JavaScript event handlers

7. **Update Build Pipeline**
   - Modify `generate_graph_data.py` to extract article-concept relationships
   - Populate new metadata fields (`relatedConcepts`, `supportingArticles`, `tags`, `description`)
   - Output updated `graph-data.js` with new schema
   - Deliverable: Updated `generate_graph_data.py` script

**Success Criteria:**
- Users can select a concept and see only related articles + secondary concepts
- Filtering by tags/categories live-updates the graph in-place
- Color scheme is modern, readable, and WCAG AA compliant
- Typography clearly establishes hierarchy
- Information architecture guides exploration (legend, clear layout)
- All interactive elements provide visual feedback
- Build pipeline correctly extracts and populates new metadata

**Effort:** 3-4 days (graph redesign, filtering logic, styling, testing)

---

### Phase 3: Polish & Optimization

**Goal:** Responsive design for mobile, accessibility audit, performance tuning, final visual polish.

**Tasks:**

1. **Implement Responsive Design**
   - Mobile layout (≤768px): Hide graph, show text-based breadcrumb/concept outline
   - Tablet layout (768px–1024px): Show graph with reduced labels, adapt filter UI
   - Desktop layout (1024px+): Full layout with legend, sidebars, graph
   - Touch-friendly: Larger hit targets (nodes ≥20px), touch-optimized filters
   - Test on real devices (iPhone, iPad, desktop)
   - Deliverable: Responsive CSS, tested on multiple breakpoints

2. **Accessibility Audit**
   - WCAG 2.1 AA compliance:
     - Color contrast: 4.5:1 for text, 3:1 for UI elements
     - Focus management: keyboard navigation for filters, search, node selection
     - Semantic HTML: proper heading hierarchy, ARIA labels for dynamic content
     - Readability: font sizes ≥14px body text, line-height ≥1.5
   - Test with screen reader (NVDA, JAWS) and keyboard-only navigation
   - Deliverable: Accessibility report, CSS/HTML fixes

3. **Performance Optimization**
   - Profile D3 graph rendering (especially with 46 nodes)
   - Debounce filter updates (batch opacity changes, avoid excessive redraws)
   - Lazy-load articles when expanding node groups (paginate if >20 articles)
   - Minimize graph simulation iterations in focused mode
   - Test on low-end devices (throttled CPU/network)
   - Deliverable: Performance report, optimization changes

4. **Final Visual Polish**
   - Add icons for concept/article types
   - Refine padding, margins, border-radius for cohesive aesthetic
   - Add subtle shadows or borders to create depth
   - Polish button styles, input styles, dropdown styles
   - Test UI consistency across browser (Chrome, Firefox, Safari)
   - Deliverable: Final UI screenshots, visual polish checklist

5. **Documentation**
   - Document design decisions in a design guide or README
   - Document D3 graph interaction patterns
   - Document color palette, typography, spacing grid
   - Document tag schema and metadata structure
   - Deliverable: Design documentation, color palette guide

6. **Testing**
   - Manual testing: all interaction patterns (focus, expand, filter, search)
   - Responsive testing: mobile, tablet, desktop layouts
   - Browser compatibility: Chrome, Firefox, Safari, Edge
   - Edge cases: isolated concepts, large article groups, zero filter results
   - Deliverable: Test report

**Success Criteria:**
- Responsive layout works on mobile (≤768px), tablet (768–1024px), desktop (1024px+)
- WCAG 2.1 AA compliance verified
- Performance is acceptable on low-end devices
- Visual design is polished and cohesive
- All interaction patterns tested and working

**Effort:** 2-3 days (responsive design, accessibility fixes, testing, documentation)

---

## System-Wide Impact

### Interaction Graph

When a user interacts with the graph:
1. User selects a concept (concept selector dropdown or legend click)
2. Graph re-renders: `d3SelectionUpdate()` removes non-relevant nodes, centers selected concept
3. D3 force simulation runs focused-mode algorithm: nodes arrange around center
4. Render completes: user sees concept + connected articles + secondary concepts
5. User applies tag filter: filtering handler updates node visibility
6. Graph re-renders: D3 updates opacity for non-matching nodes
7. User clicks article node: detail panel opens (or node highlights)
8. User expands secondary connections: `d3ExpandNode()` fetches and adds secondary nodes to graph

**Key flows:**
- Selection → re-render → layout
- Filter → visibility update → opacity change
- Expand → node addition → re-layout

### Error & Failure Propagation

**Failure scenarios:**
- Missing metadata for a node (title, type) — Gracefully render with placeholder text
- Broken wikilink (concept doesn't exist) — Skip the relationship during build
- Zero filter results — Show "No results match these filters" message
- Graph rendering fails (D3 error) — Show error message, fall back to text list

**Error handling:**
- Build time: Log warnings for broken links, continue build
- Runtime: User sees graceful degradation (placeholder text, helpful messages)

### State Lifecycle Risks

**Stateful elements:**
- Selected concept (global state in graph renderer)
- Filter selections (tag state)
- Search query (search state)
- Expanded nodes (tracking which nodes are expanded)

**Risks:**
- User applies filter that hides all visible nodes (including selected concept) → concept selection is invalidated
- Solution: Reset filters when selecting a new concept, or keep selected concept visible even if filtered

**Data consistency:**
- Article-concept relationships: built during `generate_graph_data.py`, immutable at runtime
- Tags: assigned during build, immutable at runtime
- No updates at runtime, so no inconsistency risk

### API Surface Parity

**Affected components:**
- Graph renderer: `renderGraph(concept, filters, searchQuery)`
- Filter handler: `applyFilters(selectedTags)`
- Search handler: `applySearch(query)`
- Node interaction: `selectConcept(conceptId)`, `expandNode(nodeId)`

**All components must handle:**
- Empty results (zero matching nodes)
- Large result sets (20+ matching nodes)
- Invalid inputs (concept doesn't exist)

### Integration Test Scenarios

1. **Happy path: Concept selection → expand → filter**
   - Select "AS9100D NPI Clauses" → see 3 related articles
   - Click "Show 5 more" → see 8 articles total
   - Filter by `phase/NPI` → see only 5 articles
   - Unfilter → see all 8 again

2. **Edge case: Isolated concept**
   - Select "Orphaned Concept" with 0 connections
   - See message: "No connected articles. This concept is isolated."

3. **Edge case: Large article group**
   - Select concept with 25 related articles
   - See top 5 + "Show 20 more" button
   - Click button → all 25 articles visible
   - Apply filter → matching subset shown

4. **Search + filter interaction**
   - Search for "FMEA" (matches 3 articles across 2 concepts)
   - Filter by `standard/AS9100D` (narrows to 2 articles in 1 concept)
   - Result: only articles matching BOTH search AND filter visible

5. **Mobile responsive**
   - Open on iPhone: graph hidden, concept breadcrumb shown
   - Tap concept: breadcrumb updates, related concepts listed below
   - Scroll to filters: filters work as on desktop

---

## Acceptance Criteria

### Functional Requirements

- [ ] R1. Articles link to supporting concepts via wikilinks or metadata
- [ ] R2. Graph starts with a single concept at center, showing only connected items
- [ ] R3. Graph nodes are visually readable with high contrast
- [ ] R4. Modern color scheme applied site-wide (teal/gray/amber palette)
- [ ] R5. Typography establishes clear hierarchy (h1–h3, body, metadata sizes)
- [ ] R6. Information architecture guides exploration (legend, filter layout, breadcrumb)
- [ ] R7. UI components (buttons, inputs, filters) are cohesive and modern
- [ ] R8. Filtering by tags/categories live-updates the graph in-place
- [ ] Concept selector allows users to change the center concept
- [ ] Expand interaction shows secondary connections (articles, related concepts)
- [ ] Filter UI shows zero-result state with helpful message
- [ ] Search + filters work together (AND logic)

### Non-Functional Requirements

- [ ] WCAG 2.1 AA accessibility compliance (contrast, keyboard navigation, semantic HTML)
- [ ] Responsive: mobile ≤768px (text-based), tablet 768–1024px (adapted graph), desktop 1024px+ (full layout)
- [ ] Performance: graph renders 46 nodes in <500ms, filter update in <100ms
- [ ] Browser compatibility: Chrome, Firefox, Safari, Edge (latest versions)
- [ ] No build tooling required (vanilla JavaScript, Python build scripts only)

### Quality Gates

- [ ] All design decisions from Phase 1 documented with rationale
- [ ] Metadata schema extended and populated for all 46 nodes
- [ ] Article-concept relationships extracted and validated
- [ ] Tags assigned to all nodes and organized by namespace
- [ ] Graph rendering code reviewed for performance and maintainability
- [ ] Accessibility audit completed, WCAG AA compliance verified
- [ ] Responsive design tested on real devices (mobile, tablet, desktop)
- [ ] All interaction patterns tested (focus, expand, filter, search)
- [ ] Visual design polish completed and reviewed
- [ ] Documentation complete (design guide, API, interaction patterns)

---

## Success Metrics

**User-facing:**
- Explorers can start with a concept and intuitively follow connections to articles and related concepts
- Filtering by tags/categories visibly reduces clutter and supports discovery
- All nodes, titles, and labels are readable without strain
- Site aesthetic is modern and inviting
- Navigation and interaction patterns are self-evident

**Technical:**
- Build pipeline correctly extracts article-concept relationships
- Metadata schema supports new fields without breaking existing code
- D3 graph renders focused view (≤20 nodes visible) in <500ms
- Filter updates are smooth (no jank, <100ms per update)
- Zero accessibility violations (WCAG 2.1 AA)
- Mobile responsive design works on ≤768px screens

**Business:**
- Reduced bounce rate (users stay longer)
- Increased discovery (users explore more concepts/articles)
- Positive user feedback on visual design and usability

---

## Dependencies & Prerequisites

### Data Dependencies

- Article frontmatter/metadata must contain concept references (wikilinks or `concepts` field)
- All articles must be present in the vault before build
- Tags must be extracted from metadata or assigned systematically

### Technical Prerequisites

- D3.js library loaded and functional (already in place)
- GitHub Actions workflow can run Python scripts (already in place)
- `generate_graph_data.py` script is modifiable (already in place)
- `index.html` is modifiable (already in place)

### Design Dependencies

- Design decisions from Phase 1 completed before Phase 2 starts
- Color palette finalized and validated for accessibility before implementing
- Typography scale finalized before applying to HTML

---

## Risk Analysis & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|-----------|
| Article-concept relationships missing/incomplete | Phase 2 cannot proceed | Medium | In Phase 1, systematically review all articles and create relationships |
| D3 force-directed layout doesn't work well for focused mode | Focused graph looks bad | Medium | Test layout params early; fall back to hierarchical layout if needed |
| Mobile responsive design is complex | Mobile users have poor experience | Low | Test early on real devices; simplify to text-based on mobile if needed |
| Accessibility audit finds major issues | Site not accessible | Low | Early audit in Phase 3; plan fixes before launch |
| Performance bottleneck with 46 nodes | Rendering is slow/laggy | Low | Profile early; optimize D3 simulation params and DOM updates |
| Color palette doesn't meet accessibility standards | WCAG compliance fails | Low | Validate contrast early using tools (WebAIM, Lighthouse) |

---

## Resource Requirements

**Team:**
- 1 Frontend/UI engineer (primary implementation)
- 1 Designer or product person (design decisions, visual polish)
- 1 QA/tester (responsive testing, accessibility audit)

**Time estimate:**
- Phase 1: 1–2 days (design decisions, schema extension)
- Phase 2: 3–4 days (graph redesign, filtering, styling)
- Phase 3: 2–3 days (responsive design, accessibility, polish)
- **Total: 6–9 days of effort**

**Tools:**
- D3.js (already in use)
- Accessibility checker (Lighthouse, WebAIM)
- Responsive design tester (Chrome DevTools, real devices)
- Color contrast validator (WebAIM Contrast Checker)

---

## Future Considerations

### Extensibility

- **Theme support:** Extract color variables so users can switch themes (dark mode) later
- **Custom filters:** Tag schema is extensible; new tag namespaces can be added without code changes
- **Graph layout algorithms:** Pluggable layout system (force-directed, hierarchical, radial) for different use cases
- **Mobile-first redesign:** If mobile traffic grows, consider mobile-primary layout instead of tablet-first

### Scalability

- **More concepts/articles:** Current graph handles 46 nodes; D3 can handle 100–200 nodes comfortably. For >200 nodes, consider:
  - Pagination of articles (show top N, "show more" button)
  - Virtualization (render only visible nodes)
  - Server-side rendering instead of browser-side
- **Larger browser bundles:** If JavaScript/CSS grow significantly, consider minification or code splitting

### Integration Opportunities

- **Export graph:** Add "Export as SVG/PNG" button for presentations
- **Embed graph:** Allow embedding the graph in external docs
- **API for external tools:** Expose graph data as JSON endpoint
- **Semantic search integration:** Upgrade from pre-computed embeddings to in-browser transformers.js for richer search

---

## Documentation Plan

**Documents to create/update:**
1. **Design Guide** — Color palette, typography scale, spacing grid, component styles
2. **Graph Interaction Spec** — How focused graph, expand, filter, and search work
3. **Metadata Schema** — New fields, examples, validation
4. **Tag Schema** — Tag namespaces, taxonomy, tagging guidelines
5. **Build Pipeline Docs** — Changes to `generate_graph_data.py`, new fields in output
6. **API Documentation** — Graph renderer functions, filter logic, interaction handlers

---

## Sources & References

### Origin

- **Origin document:** [docs/brainstorms/2026-04-15-website-redesign-requirements.md](docs/brainstorms/2026-04-15-website-redesign-requirements.md)
  
  **Key decisions carried forward:**
  - Dynamic/Focused Graph Model — Users start with one concept at center, expand as needed
  - Modern + Exploratory Aesthetic — Design emphasizes discovery and clarity
  - Article-Concept Linking — Articles explicitly connect to concepts they evidence
  - Filters Narrow In-Place — Filtering reduces the focused graph view, not switching views

### Internal References

- **Current graph implementation:** [docs/index.html](docs/index.html) — D3 graph renderer
- **Build script:** [scripts/generate_graph_data.py](scripts/generate_graph_data.py) — Builds graph-data.js from metadata
- **Metadata structure:** [docs/metadata.json](docs/metadata.json) — Node data (needs schema extension)
- **Related plan:** [docs/plans/2026-04-14-001-feat-buildchain-web-publishing-implementation-plan.md](docs/plans/2026-04-14-001-feat-buildchain-web-publishing-implementation-plan.md) — Previous phase of BuildChain (context on existing architecture)

### External References

- **D3.js Documentation:** https://d3js.org/
- **WCAG 2.1 Accessibility Guide:** https://www.w3.org/WAI/WCAG21/quickref/
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Modern CSS Patterns:** https://web.dev/patterns/ (responsive design, accessibility)

### Related Work

- **Previous BuildChain plan:** [docs/plans/2026-04-14-001-feat-buildchain-web-publishing-implementation-plan.md](docs/plans/2026-04-14-001-feat-buildchain-web-publishing-implementation-plan.md) — Established zero-build architecture, D3 graph, semantic search, tag system
- **BuildChain requirements:** [docs/brainstorms/2026-04-14-buildchain-web-publishing-requirements.md](docs/brainstorms/2026-04-14-buildchain-web-publishing-requirements.md) — Foundation for graph visualization and tag filtering

---

## Implementation Notes

### Phase 1 Blocking Questions (to resolve before Phase 2)

The following 7 design decisions must be finalized during Phase 1; Phase 2 cannot proceed without them:

1. **Article-Concept Linking Strategy** — Wikilinks, metadata field, or automated tagging?
2. **Entry Point Concept** — Default concept, or free user selection?
3. **Filter Scope** — Global (all 46 nodes) or focused graph only?
4. **Mobile Strategy** — Graph-first (adapt) or text-first (hide)?
5. **Graph Layout Algorithm** — Modified force-directed or hierarchical?
6. **Tag Schema** — Which namespaces and how assigned?
7. **Node Visual Distinction** — Specific color palette for concept vs. article?

Answers to these questions will be documented in design specs (wireframes, interaction specs, color palette, tag taxonomy) that guide Phase 2 implementation.

### Phase 2 Implementation Order

Recommended order to minimize rework:

1. Extend metadata schema and update build pipeline (foundational)
2. Implement focused graph interaction (core feature)
3. Implement tag filtering (closely related to focused graph)
4. Apply modern color scheme (visual change, can be done in parallel)
5. Improve typography and spacing (visual polish)
6. Add interactive affordances (hover effects, feedback)
7. Refactor information architecture (layout, legend, breadcrumb)

### Code Quality

- **D3 graph rendering:** Use consistent variable naming, document force simulation parameters
- **Filter logic:** Keep filter state management simple (array of selected tags, AND logic)
- **CSS:** Use CSS variables for colors, typography, spacing; avoid hardcoded values
- **Build pipeline:** Add error handling and logging to `generate_graph_data.py`

---

## Next Steps

**→ Proceed with Phase 1: Design Decisions & Data Structure**

Before implementation begins, resolve the 7 blocking design questions above through collaboration with the user, then document answers in design specs. Once Phase 1 is complete, Phase 2 and Phase 3 can proceed in parallel or sequentially as capacity allows.

**Milestone checkpoints:**
- End of Phase 1: Design specs complete, metadata schema extended, tag schema populated
- End of Phase 2: Graph exploration and filtering working, modern visual design applied
- End of Phase 3: Responsive design, accessibility, polish, and testing complete
