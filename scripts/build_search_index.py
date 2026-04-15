#!/usr/bin/env python3
"""
Build metadata index (metadata.json) with page titles, types, tags, dates.
"""

import json
import re
from pathlib import Path
from typing import Dict, Any, List
from datetime import datetime


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

            # Parse lists (tags)
            if key == 'tags' and val.startswith('['):
                fm[key] = json.loads(val)
            else:
                fm[key] = val

    return fm


def slugify(name: str) -> str:
    """Convert filename to page slug."""
    slug = name.lower().replace(' ', '-').replace('_', '-')
    slug = re.sub(r'[^a-z0-9-]', '', slug)
    return slug


def extract_heading(content: str) -> str:
    """Extract first heading from markdown as title."""
    lines = content.split('\n')

    # Skip frontmatter
    start_idx = 0
    if content.startswith('---'):
        for i in range(1, len(lines)):
            if lines[i].strip() == '---':
                start_idx = i + 1
                break

    # Find first heading
    for i in range(start_idx, len(lines)):
        line = lines[i].strip()
        if line.startswith('#'):
            # Remove markdown heading markers
            return re.sub(r'^#+\s+', '', line)

    # Fallback to filename
    return ''


def extract_sources_from_frontmatter(fm: Dict) -> List[str]:
    """Extract source references from frontmatter."""
    sources = []

    if 'source' in fm:
        source = fm['source']
        if isinstance(source, list):
            sources.extend(source)
        elif source:
            sources.append(source)

    if 'sources' in fm:
        src_list = fm['sources']
        if isinstance(src_list, list):
            sources.extend(src_list)

    return list(set(sources))  # Deduplicate


def main():
    """Generate metadata.json for all pages."""
    docs_path = Path(__file__).parent.parent / 'docs'

    metadata: Dict[str, Dict[str, Any]] = {}

    # Process concepts
    concepts_dir = docs_path / 'concepts'
    if concepts_dir.exists():
        for md_file in sorted(concepts_dir.glob('*.md')):
            content = md_file.read_text(encoding='utf-8', errors='ignore')
            fm = extract_frontmatter(content)

            page_id = slugify(md_file.stem)
            title = extract_heading(content) or md_file.stem

            metadata[page_id] = {
                'title': title,
                'type': 'concept',
                'tags': fm.get('tags', []),
                'status': fm.get('status', 'draft'),
                'created': fm.get('created', ''),
                'sources': extract_sources_from_frontmatter(fm),
            }

    # Process sources
    sources_dir = docs_path / 'sources'
    if sources_dir.exists():
        for md_file in sorted(sources_dir.glob('*.md')):
            content = md_file.read_text(encoding='utf-8', errors='ignore')
            fm = extract_frontmatter(content)

            page_id = slugify(md_file.stem)
            title = extract_heading(content) or md_file.stem

            metadata[page_id] = {
                'title': title,
                'type': 'source',
                'tags': fm.get('tags', []),
                'status': fm.get('status', 'published'),
                'created': fm.get('created', ''),
                'sources': extract_sources_from_frontmatter(fm),
            }

    # Save metadata
    output_file = docs_path / 'metadata.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2)

    print(f'[OK] Built metadata for {len(metadata)} pages -> {output_file}')


if __name__ == '__main__':
    main()
