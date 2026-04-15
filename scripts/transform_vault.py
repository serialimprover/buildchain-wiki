#!/usr/bin/env python3
"""
Transform vault content: convert wikilinks, extract frontmatter, copy to docs/.
"""

import os
import re
import shutil
from pathlib import Path
from typing import Tuple, Dict
import sys

def extract_frontmatter(content: str) -> Tuple[Dict[str, str], str]:
    """Extract YAML frontmatter from markdown content.

    Returns:
        Tuple of (frontmatter_dict, body_content)
    """
    if not content.startswith('---'):
        return {}, content

    lines = content.split('\n')
    end_idx = None
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            end_idx = i
            break

    if end_idx is None:
        return {}, content

    fm_lines = lines[1:end_idx]
    body = '\n'.join(lines[end_idx + 1:]).lstrip('\n')

    # Parse simple YAML (tags, status, date, etc.)
    fm = {}
    for line in fm_lines:
        if ':' in line:
            key, val = line.split(':', 1)
            fm[key.strip()] = val.strip().strip('"\'')

    return fm, body


def convert_wikilinks(content: str, page_title: str) -> str:
    """Convert [[Page Name]] to [Page Name](./page-name.html).

    Handles both linked and unlinked references.
    """
    def wikilink_to_markdown(match):
        link_text = match.group(1)
        # Convert to lowercase with hyphens for URL
        slug = link_text.lower().replace(' ', '-').replace('_', '-')
        slug = re.sub(r'[^a-z0-9-]', '', slug)
        return f'[{link_text}](./{slug}.html)'

    # Match [[Page Name]] or [[Page Name|Display Text]]
    content = re.sub(r'\[\[([^\]|]+)(?:\|([^\]]+))?\]\]',
                     lambda m: wikilink_to_markdown(m),
                     content)
    return content


def slugify(name: str) -> str:
    """Convert 'Page Name' to 'page-name'."""
    slug = name.lower().replace(' ', '-').replace('_', '-')
    slug = re.sub(r'[^a-z0-9-]', '', slug)
    return slug


def transform_markdown_file(input_path: Path, output_path: Path) -> None:
    """Read markdown, convert wikilinks, write to output."""
    content = input_path.read_text(encoding='utf-8')
    frontmatter, body = extract_frontmatter(content)

    page_title = input_path.stem
    converted_body = convert_wikilinks(body, page_title)

    # Reconstruct with frontmatter
    if frontmatter:
        fm_lines = ['---']
        for key, val in frontmatter.items():
            fm_lines.append(f'{key}: {val}')
        fm_lines.append('---')
        output_content = '\n'.join(fm_lines) + '\n' + converted_body
    else:
        output_content = converted_body

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(output_content, encoding='utf-8')


def main(vault_root: str):
    """Transform vault structure to website docs/."""
    vault_path = Path(vault_root)
    docs_path = Path(__file__).parent.parent / 'docs'

    # Transform concepts
    concepts_src = vault_path / 'wiki' / 'concepts'
    concepts_dst = docs_path / 'concepts'

    if concepts_src.exists():
        # Clear and recreate
        if concepts_dst.exists():
            shutil.rmtree(concepts_dst)
        concepts_dst.mkdir(parents=True, exist_ok=True)

        for md_file in concepts_src.glob('*.md'):
            output_file = concepts_dst / md_file.name
            transform_markdown_file(md_file, output_file)
            print(f'Transformed: {md_file.name}')

    # Transform sources (BuildChain clips)
    sources_src = vault_path / 'Build Chain'
    sources_dst = docs_path / 'sources'

    if sources_src.exists():
        # Clear and recreate
        if sources_dst.exists():
            shutil.rmtree(sources_dst)
        sources_dst.mkdir(parents=True, exist_ok=True)

        for md_file in sources_src.glob('*.md'):
            output_file = sources_dst / md_file.name
            transform_markdown_file(md_file, output_file)
            print(f'Transformed source: {md_file.name}')

    print('[OK] Vault transformation complete')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(f'Usage: {sys.argv[0]} <vault_root>')
        sys.exit(1)
    main(sys.argv[1])
