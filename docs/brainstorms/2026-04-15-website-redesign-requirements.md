---
date: 2026-04-15
topic: website-ui-redesign
---

# BuildChain Wiki Website UI Redesign

## Problem Frame

The BuildChain Wiki's current UI makes it difficult for knowledge explorers to discover and navigate the aerospace concept network. Users report severe visual and usability issues: unreadable contrast (black dots on dark blue), scattered graph layout with disconnected nodes, poor information architecture, inadequate typography, and an overall aesthetic that feels unpolished. These problems prevent explorers from effectively following concept relationships, discovering supporting evidence, and refining their exploration through tags and categories.

The redesign must create a modern, exploratory aesthetic that guides users through the knowledge graph intuitively while maintaining visual clarity and hierarchy.

## Requirements

- **R1. Concept-Article Linking** - Articles in the vault must link to the concepts they provide evidence for, so the graph data reflects actual relationships instead of displaying isolated articles.

- **R2. Dynamic/Focused Graph Exploration** - Graph visualization starts with a single concept at center, showing only directly connected concepts and supporting articles. Users can expand by clicking nodes or filter by tags/categories to refine the view. The graph does not display all 46+ documents at once.

- **R3. Graph Visual Readability** - Nodes must be visually distinct and readable with sufficient contrast against backgrounds. Color palette must distinguish between concept nodes and article nodes. All text labels (concept titles, node metadata) must be legible at the graph scale.

- **R4. Modern Color Scheme** - Site-wide color palette must reflect modern design principles (clean, intentional, high contrast where needed) and support both the exploratory aesthetic and functional clarity. No unreadable color combinations (e.g., black on dark blue).

- **R5. Typography and Hierarchy** - Font sizes, weights, and spacing must establish clear visual hierarchy. Titles, labels, and body text must be legible. Text must scale appropriately for different screen sizes and graph scales.

- **R6. Information Architecture for Exploration** - The site layout, navigation, and graph legend must make the exploration workflow obvious: start with a concept, follow connections, filter by tags/categories. Visual cues must guide users on what is interactive.

- **R7. Modern UI Components** - All UI elements (buttons, inputs, cards, controls) must reflect a cohesive, modern design system. Components must be clean, spacious, and intentional.

- **R8. Tag and Category Filtering** - Filtering controls must be prominent and intuitive. Filtering should live-update the graph view to show only matching nodes and their connections.

## Success Criteria

- Explorers can start with a concept and intuitively follow connections to articles and related concepts
- Filtering by tags/categories visibly reduces graph clutter and supports discovery
- All nodes, titles, and labels are readable at graph scale without strain
- Site aesthetic is modern and inviting, reflecting care in design
- Navigation and interaction patterns are self-evident (users don't need instruction to explore)
- Graph layout remains focused and uncluttered (not all 46+ documents visible at once)

## Scope Boundaries

- Non-goal: Changing the underlying data model beyond article-concept linking
- Non-goal: Implementing new content types or features (redesign is UI + IA only)
- Non-goal: Mobile-specific redesign (responsive design applies, but not a separate mobile experience)
- Non-goal: Changing the vault structure or metadata schema

## Key Decisions

- **Dynamic/Focused Model**: Graph shows only active exploration context, not all documents. This keeps the interface clean and makes exploration tractable for 46+ documents.
- **Modern + Exploratory Aesthetic**: The design emphasizes knowledge discovery and clarity over minimalism or technical austerity. Color, spacing, and hierarchy work together to support the explorer's workflow.
- **Article-Concept Linking**: Articles must explicitly connect to concepts in metadata (or graph data structure) so relationships are real, not inferred by layout algorithm.

## Dependencies / Assumptions

- Metadata/graph data structure supports article→concept relationships (may require migration)
- D3.js force graph will be retained as the visualization library (can be tuned for focused exploration)
- Color palette changes do not require component library changes

## Outstanding Questions

### Resolve Before Planning

- **[Product]** What is the exact explorer workflow for tag/category filtering? Should filters narrow the graph in-place, or should they switch to a filtered view?

### Deferred to Planning

- **[Technical]** How should article-concept relationships be stored in metadata or graph JSON? (Affects data schema)
- **[Technical]** What graph layout algorithm changes are needed for dynamic/focused exploration? (Force-directed may need parameter tuning or algorithm swap)
- **[Research]** What modern color palettes work well for knowledge graphs with concepts + articles? (May require design research or reference gathering)
- **[Technical]** Should filtering happen client-side (current index.html) or require server changes?

## Next Steps

→ Answer the blocking question above, then `/ce:plan` for structured implementation planning.
