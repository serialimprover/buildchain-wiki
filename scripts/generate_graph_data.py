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
    """Parse YAML frontmatter from markdown, including multi-line list fields."""
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
    current_key = None
    current_list = None

    for line in fm_lines:
        stripped = line.strip()
        if stripped.startswith('- ') and current_list is not None:
            fm[current_key].append(stripped[2:].strip().strip('"\''))
        elif ':' in stripped and not stripped.startswith('-'):
            current_key = None
            current_list = None
            key, val = stripped.split(':', 1)
            key = key.strip()
            val = val.strip().strip('"\'')
            if val == '':
                current_key = key
                current_list = []
                fm[key] = current_list
            elif val.startswith('['):
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


def extract_description(content: str) -> str:
    """Extract first paragraph after heading as description."""
    lines = content.split('\n')
    start_idx = 0
    heading_found = False

    # Skip frontmatter
    if content.startswith('---'):
        for i in range(1, len(lines)):
            if lines[i].strip() == '---':
                start_idx = i + 1
                break

    # Find heading
    for i in range(start_idx, len(lines)):
        if lines[i].strip().startswith('#'):
            heading_found = True
            start_idx = i + 1
            break

    if not heading_found:
        return ''

    # Extract first non-empty paragraph
    description = ''
    for i in range(start_idx, len(lines)):
        line = lines[i].strip()
        if not line:
            if description:
                break
        elif not line.startswith('#'):
            description += ' ' + line if description else line
            if len(description) > 150:
                break

    return description[:200].strip()


def infer_tags(page_id: str, title: str, content: str, linked_concepts: Set[str]) -> List[str]:
    """Auto-assign tags based on title, content keywords, and linked concepts."""
    tags = []
    title_lower = title.lower()
    content_lower = content.lower()

    # Phase/Lifecycle tags
    if any(word in title_lower for word in ['npi', 'new product', 'introduction']):
        tags.append('phase/NPI')
    if any(word in title_lower for word in ['design', 'review', 'pdr', 'cdr']):
        tags.append('phase/Design')
    if any(word in title_lower for word in ['manufacturing', 'production', 'assembly']):
        tags.append('phase/Manufacturing')

    # Standard tags
    if 'as9100' in title_lower or 'as9100d' in title_lower:
        tags.append('standard/AS9100D')
    if 'iso9001' in title_lower or 'iso 9001' in title_lower:
        tags.append('standard/ISO9001')
    if 'ppap' in title_lower or 'production part' in title_lower:
        tags.append('process/PPAP')
    if any(word in title_lower for word in ['fmea', 'failure mode']):
        tags.append('process/FMEA')
    if any(word in title_lower for word in ['fai', 'first article', 'inspection']):
        tags.append('process/FAI')

    # Domain tags
    if any(word in title_lower for word in ['aerospace', 'aircraft', 'aviation']):
        tags.append('domain/aerospace')
    if 'manufacturing' in title_lower or 'production' in title_lower:
        tags.append('domain/manufacturing')
    if any(word in title_lower for word in ['quality', 'qms', 'management']):
        tags.append('domain/quality')

    # System tags (based on linked concepts)
    if 'moc-' in page_id or 'moc-npi' in page_id:
        tags.append('system/MOC')
    if 'qms' in title_lower or 'quality management' in title_lower:
        tags.append('system/QMS')

    # Remove duplicates, return sorted
    return sorted(list(set(tags)))


def build_graph():
    """Build nodes and links graph."""
    docs_path = Path(__file__).parent.parent / 'docs'

    nodes = {}
    all_links = []
    page_titles = {}  # Map page_id -> original title
    page_wikilinks = {}  # Map page_id -> set of linked page_ids

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

            # Extract wikilinks and description
            wikilinks = extract_wikilinks(body)
            page_wikilinks[page_id] = wikilinks
            description = extract_description(content)

            # Auto-assign tags (use frontmatter tags if present, else infer)
            tags = fm.get('tags', [])
            if not tags:
                tags = infer_tags(page_id, title, body, wikilinks)

            # Create node with extended schema
            nodes[page_id] = {
                'id': page_id,
                'title': title,
                'type': 'concept',
                'description': description,
                'tags': tags,
                'status': fm.get('status', 'published'),
                'url': f'/concepts/{page_id}',
                'relatedConcepts': [],
                'supportingArticles': [],
            }

            # Edges from wikilinks in body
            for target_id in wikilinks:
                all_links.append({'source': page_id, 'target': target_id})

            # Edges from sources: frontmatter field (concept → supporting source)
            for raw_source in fm.get('sources', []):
                src_clean = re.sub(r'^\[\[|\]\]$', '', raw_source.strip())
                all_links.append({'source': page_id, 'target': slugify(src_clean)})

    # Process sources (articles)
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

            # Extract wikilinks and description
            wikilinks = extract_wikilinks(body)
            page_wikilinks[page_id] = wikilinks
            description = extract_description(content)

            # Auto-assign tags
            tags = fm.get('tags', [])
            if not tags:
                tags = infer_tags(page_id, title, body, wikilinks)

            # Create node with extended schema
            nodes[page_id] = {
                'id': page_id,
                'title': title,
                'type': 'source',
                'description': description,
                'tags': tags,
                'status': fm.get('status', 'published'),
                'url': f'/sources/{page_id}',
                'source': fm.get('source', ''),
                'relatedConcepts': [],
                'supportingArticles': [],
            }

            # Find references (article → concept links)
            for target_id in wikilinks:
                all_links.append({'source': page_id, 'target': target_id})

    # Deduplicate and filter links (only include links where source exists)
    links = []
    seen = set()
    for link in all_links:
        key = (link['source'], link['target'])
        if key not in seen and link['source'] in nodes:
            links.append(link)
            seen.add(key)

    # Build relationship maps (relatedConcepts, supportingArticles)
    for link in links:
        source_id = link['source']
        target_id = link['target']

        if source_id not in nodes or target_id not in nodes:
            continue

        source_node = nodes[source_id]
        target_node = nodes[target_id]

        # Concept → Concept: relatedConcepts
        if source_node['type'] == 'concept' and target_node['type'] == 'concept':
            if target_id not in source_node['relatedConcepts']:
                source_node['relatedConcepts'].append(target_id)

        # Article → Concept: supportingArticles on concept, relatedConcepts on article
        elif source_node['type'] == 'source' and target_node['type'] == 'concept':
            if source_id not in target_node['supportingArticles']:
                target_node['supportingArticles'].append(source_id)
            if target_id not in source_node['relatedConcepts']:
                source_node['relatedConcepts'].append(target_id)

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

    # Also write metadata.json for reference
    metadata_file = docs_path / 'metadata.json'
    metadata = {node['id']: node for node in nodes.values()}
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2)

    print(f'[OK] Generated graph with {len(nodes)} nodes and {len(links)} links')
    print(f'     Nodes by type: {sum(1 for n in nodes.values() if n["type"] == "concept")} concepts, {sum(1 for n in nodes.values() if n["type"] == "source")} articles')
    print(f'     Tags assigned: {sum(len(n["tags"]) for n in nodes.values())} total across {sum(1 for n in nodes.values() if n["tags"])} nodes')
    print(f'     Output: {output_file}')
    print(f'     Metadata: {metadata_file}')


if __name__ == '__main__':
    build_graph()
