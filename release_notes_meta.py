"""Shared helpers for release-note frontmatter.

Used by update_release_notes.py and update_all_missing_releases.py so both
generators emit the same meta description for a release.
"""

import re

MAX_DESCRIPTION = 160

_BULLET = re.compile(r"^[*-]\s+(?:\w+)(?:\([^)]*\))?!?:\s*(.+?)\s*(?:\(\[?\\?#\d+.*)?$")


def _bullets(section_text):
    """Return the change summaries in a changelog section, stripped of the
    conventional-commit prefix and the trailing PR and author links."""
    items = []
    for line in section_text.splitlines():
        m = _BULLET.match(line.strip())
        if m:
            items.append(m.group(1).replace("\\", "").rstrip(" ."))
    return items


def _sections(markdown):
    """Split the changelog body into {heading: text} by ### headings."""
    out = {}
    current = None
    for line in markdown.splitlines():
        if line.startswith("### "):
            current = line[4:].strip().lower()
            out[current] = ""
        elif current is not None:
            out[current] += line + "\n"
    return out


def _plural(n, word):
    if n == 1:
        return f"{n} {word}"
    return f"{n} {word}es" if word.endswith("x") else f"{n} {word}s"


def build_description(version, markdown):
    """Build a meta description for a release from its changelog body.

    Example: "autobrr v1.86.0 release notes: 6 new features and 5 bug fixes,
    including Sonarr and Radarr send IMDB and TMDB ids and add Test button
    to External filters."
    """
    sections = _sections(markdown)
    features = _bullets(sections.get("new features", ""))
    fixes = _bullets(sections.get("bug fixes", ""))

    counts = []
    if features:
        counts.append(_plural(len(features), "new feature"))
    if fixes:
        counts.append(_plural(len(fixes), "bug fix"))

    base = f"autobrr {version} release notes"
    if not counts:
        return f"{base}: changelog of features, fixes and other work in this release."

    desc = f"{base}: {' and '.join(counts)}"
    highlights = features[:2] or fixes[:2]
    if highlights:
        candidate = f"{desc}, including {' and '.join(highlights)}."
        if len(candidate) <= MAX_DESCRIPTION:
            return candidate
        candidate = f"{desc}, including {highlights[0]}."
        if len(candidate) <= MAX_DESCRIPTION:
            return candidate
    return desc + "."


def yaml_quote(text):
    """Quote a scalar for YAML frontmatter."""
    return '"' + text.replace("\\", "\\\\").replace('"', '\\"') + '"'
