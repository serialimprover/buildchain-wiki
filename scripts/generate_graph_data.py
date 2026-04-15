#!/usr/bin/env python3
"""
Generate graph-data.js from markdown files.
Creates nodes with content and links from wikilinks/references.
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Any, Set


def extract_frontmatter(content: str) -> Dict[str, Any]:
    """Parse YAML frontmatter from markdown."""
    if not content.startswith('---'):
        return {}

    lines = content.split('\n')
    end_idx = None
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            end_idx = i
            break

    if end_idx is None:
        return {}

    fm_lines = lines[1:end_idx]
    fm = {}

    for line in fm_lines:
        if ':' in line:
            key, val = line.split(':', 1)
            key = key.strip()
            val = val.strip().strip('"\'')

            if key == 'tags' and val.startswith('['):
                try:
                    fm[key] = json.loads(val)
                except:
                    fm[key] = [val]
            else:
                fm[key] = val

    return fm


def slugify(name: str) -> str:
    """Convert filename to page slug."""
    slug = name.lower().replace(' ', '-').replace('_', '-')
    slug = re.sub(r'[^a-z0-9-]', '', slug)
    return slug


def extract_heading(content: str) -> str:
    """Extract first heading as title."""
    lines = content.split('\n')
    start_idx = 0

    if content.startswith('---'):
        for i in range(1, len(lines)):
            if lines[i].strip() == '---':
                start_idx = i + 1
                break

    for i in range(start_idx, len(lines)):
        line = lines[i].strip()
        if line.startswith('#'):
            return re.sub(r'^#+\s+', '', line)

    return ''


def extract_wikilinks(content: str) -> Set[str]:
    """Extract all [[Page Name]] references from content."""
    matches = re.findall(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]', content)
    return set(slugify(m) for m in matches)


def build_graph():
    """Build nodes and links graph."""
    docs_path = Path(__file__).parent.parent / 'docs'

    nodes = {}
    all_links = []
    page_titles = {}  # Map page_id -> original title

    # Process concepts
    concepts_dir = docs_path / 'concepts'
    if concepts_dir.exists():
        for md_file in sorted(concepts_dir.glob('*.md')):
            content = md_file.read_text(encoding='utf-8', errors='ignore')
            fm = extract_frontmatter(content)

            page_id = slugify(md_file.stem)
            title = extract_heading(content) or md_file.stem
            page_titles[page_id] = title

            # Extract body (skip frontmatter)
            body = content
            if body.startswith('---'):
                parts = body.split('---', 2)
                if len(parts) >= 3:
                    body = parts[2]

            # Create node
            nodes[page_id] = {
                'id': page_id,
                'label': title,
                'type': 'concept',
                'content': body[:2000],  # Store first 2000 chars
                'tags': fm.get('tags', []),
                'status': fm.get('status', 'draft'),
            }

            # Find references
            wikilinks = extract_wikilinks(content)
            for target_id in wikilinks:
                all_links.append({'source': page_id, 'target': target_id})

    # Process sources
    sources_dir = docs_path / 'sources'
    if sources_dir.exists():
        for md_file in sorted(sources_dir.glob('*.md')):
            content = md_file.read_text(encoding='utf-8', errors='ignore')
            fm = extract_frontmatter(content)

            page_id = slugify(md_file.stem)
            title = extract_heading(content) or md_file.stem
            page_titles[page_id] = title

            # Extract body
            body = content
            if body.startswith('---'):
                parts = body.split('---', 2)
                if len(parts) >= 3:
                    body = parts[2]

            # Create node
            nodes[page_id] = {
                'id': page_id,
                'label': title,
                'type': 'source',
                'content': body[:2000],
                'tags': fm.get('tags', []),
                'status': fm.get('status', 'published'),
            }

            # Find references
            wikilinks = extract_wikilinks(content)
            for target_id in wikilinks:
                all_links.append({'source': page_id, 'target': target_id})

    # Deduplicate and filter links (only include links where both nodes exist)
    links = []
    seen = set()
    for link in all_links:
        key = (link['source'], link['target'])
        if key not in seen and link['source'] in nodes:
            # Only add if source exists; target can be unresolved
            links.append(link)
            seen.add(key)

    # Build output
    graph_data = {
        'nodes': list(nodes.values()),
        'links': links,
    }

    # Write graph-data.js
    output_file = docs_path / 'graph-data.js'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('const graphData = ')
        json.dump(graph_data, f, indent=2)
        f.write(';\n')

    print(f'[OK] Generated graph with {len(nodes)} nodes and {len(links)} links')
    print(f'     Output: {output_file}')


if __name__ == '__main__':
    build_graph()
