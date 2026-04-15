#!/usr/bin/env python3
"""
Generate embeddings for all content using sentence-transformers.
Uses all-MiniLM-L6-v2 with dimensionality reduction to 256-dim.
"""

import json
import re
from pathlib import Path
from typing import Dict, List
import numpy as np

try:
    from sentence_transformers import SentenceTransformer
except ImportError:
    print('Error: sentence-transformers not installed. Run: pip install sentence-transformers')
    exit(1)


def extract_text_from_markdown(content: str) -> str:
    """Extract plain text from markdown, removing frontmatter and formatting."""
    # Remove frontmatter
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            content = parts[2]

    # Remove code blocks
    content = re.sub(r'```[\s\S]*?```', '', content)

    # Remove inline code
    content = re.sub(r'`[^`]+`', '', content)

    # Remove markdown links but keep text
    content = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', content)

    # Remove wikilinks but keep text
    content = re.sub(r'\[\[([^\]]+)\]\]', r'\1', content)

    # Remove headings markers
    content = re.sub(r'^#+\s+', '', content, flags=re.MULTILINE)

    # Remove bold/italic
    content = re.sub(r'[*_]{1,2}([^*_]+)[*_]{1,2}', r'\1', content)

    # Clean up extra whitespace
    content = ' '.join(content.split())

    return content[:1000]  # Use first 1000 chars for embedding


def slugify(name: str) -> str:
    """Convert filename to page slug."""
    slug = name.lower().replace(' ', '-').replace('_', '-')
    slug = re.sub(r'[^a-z0-9-]', '', slug)
    return slug


def reduce_embedding(embedding: np.ndarray, target_dim: int = 256) -> List[float]:
    """Reduce embedding from 384-dim to target_dim using PCA-like approach.

    For MVP, we use simple truncation + normalization.
    For production, consider proper PCA.
    """
    if len(embedding) <= target_dim:
        return embedding.tolist()

    # Simple truncation to target dimensions
    reduced = embedding[:target_dim]

    # Normalize to unit length
    norm = np.linalg.norm(reduced)
    if norm > 0:
        reduced = reduced / norm

    return reduced.tolist()


def main():
    """Generate embeddings for all markdown files."""
    docs_path = Path(__file__).parent.parent / 'docs'

    # Load model (will download on first run, ~400MB)
    print('Loading sentence-transformer model (all-MiniLM-L6-v2)...')
    model = SentenceTransformer('all-MiniLM-L6-v2')

    embeddings: Dict[str, List[float]] = {}
    file_count = 0

    # Process concepts
    concepts_dir = docs_path / 'concepts'
    if concepts_dir.exists():
        for md_file in sorted(concepts_dir.glob('*.md')):
            content = md_file.read_text(encoding='utf-8', errors='ignore')
            text = extract_text_from_markdown(content)

            if text.strip():
                embedding = model.encode(text, convert_to_numpy=True)
                reduced = reduce_embedding(embedding)

                page_id = slugify(md_file.stem)
                embeddings[page_id] = reduced
                file_count += 1
                print(f'  {md_file.name} -> {len(reduced)}-dim')

    # Process sources
    sources_dir = docs_path / 'sources'
    if sources_dir.exists():
        for md_file in sorted(sources_dir.glob('*.md')):
            content = md_file.read_text(encoding='utf-8', errors='ignore')
            text = extract_text_from_markdown(content)

            if text.strip():
                embedding = model.encode(text, convert_to_numpy=True)
                reduced = reduce_embedding(embedding)

                page_id = slugify(md_file.stem)
                embeddings[page_id] = reduced
                file_count += 1
                print(f'  {md_file.name} -> {len(reduced)}-dim')

    # Save embeddings
    output_file = docs_path / 'embeddings.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(embeddings, f)

    print(f'[OK] Generated {file_count} embeddings -> {output_file}')
    print(f'     File size: {output_file.stat().st_size / 1024:.1f} KB')


if __name__ == '__main__':
    main()
