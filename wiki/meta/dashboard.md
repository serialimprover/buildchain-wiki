---
type: meta
title: "Dashboard"
updated: 2026-04-16
---

# Wiki Dashboard

## Recent Activity
```dataview
TABLE type, status, updated FROM "Build Chain" SORT updated DESC LIMIT 15
```

## All Raw Clips
```dataview
TABLE type, status, created FROM "Build Chain" WHERE status = "raw" SORT created DESC
```

## Clips With Wrong Tags (clippings tag)
```dataview
LIST FROM "Build Chain" WHERE contains(tags, "clippings")
```

## Clips Missing Type or Status
```dataview
LIST FROM "Build Chain" WHERE !type OR !status
```

## Synthesized Concepts
```dataview
TABLE status, updated, sources FROM "wiki/concepts" SORT updated DESC
```

## Seed Pages (Need Development)
```dataview
LIST FROM "wiki" WHERE status = "seed" SORT updated ASC
```

## Unverified AI Content
```dataview
LIST FROM "wiki/concepts" WHERE ai-reviewed = false SORT created DESC
```

## Verified Concept Pages
```dataview
LIST FROM "wiki/concepts" WHERE verified = true SORT updated DESC
```

## Open Lint Issues
```dataview
LIST FROM "wiki/meta" WHERE contains(tags, "lint") SORT created DESC
```
