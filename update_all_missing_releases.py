"""
Requirements:
pip3 install requests beautifulsoup4 markdownify
"""

import os
import requests
import sys
from bs4 import BeautifulSoup
from markdownify import markdownify as md
from datetime import datetime
import logging
import re

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def get_existing_versions():
    """Get list of existing release note versions from blog directory"""
    blog_dir = './blog'
    versions = []
    latest_date = None
    
    for folder in os.listdir(blog_dir):
        if os.path.isdir(os.path.join(blog_dir, folder)) and folder.count('-') >= 2:
            # Extract version from folder name (format: YYYY-MM-DD-vX.Y.Z)
            parts = folder.split('-')
            if len(parts) >= 4 and parts[3].startswith('v'):
                version = '-'.join(parts[3:])
                versions.append(version)
                # Track the latest date
                folder_date = '-'.join(parts[:3])
                if not latest_date or folder_date > latest_date:
                    latest_date = folder_date
    
    return versions, latest_date

def fetch_all_releases():
    """Fetch all releases from GitHub"""
    all_releases = []
    page = 1
    
    while True:
        url = f"https://api.github.com/repos/autobrr/autobrr/releases?page={page}&per_page=100"
        response = requests.get(url)
        response.raise_for_status()
        
        releases = response.json()
        if not releases:
            break
            
        all_releases.extend(releases)
        page += 1
        
    logging.info(f"Fetched {len(all_releases)} total releases from GitHub")
    return all_releases

def fetch_release_html(tag):
    """Fetch HTML content for a specific release"""
    url = f"https://github.com/autobrr/autobrr/releases/tag/{tag}"
    response = requests.get(url)
    response.raise_for_status()
    return response.text

def parse_release_data(html_content, tag_name):
    """Parse release data from HTML content"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    time_tag = soup.find('relative-time')
    release_date = time_tag['datetime'].split('T')[0] if time_tag else datetime.now().strftime('%Y-%m-%d')
    
    body_html = soup.find('div', class_="markdown-body")
    if body_html:
        markdown_content = md(str(body_html), heading_style="ATX")
        
        # remove commit hashes
        markdown_content = re.sub(r'\[[a-f0-9]{7}\]\(.*?\): ', '', markdown_content)
        
        return tag_name, release_date, markdown_content
    else:
        logging.warning(f"No release notes found for {tag_name}")
        return tag_name, release_date, f"# {tag_name}\n\nNo release notes available."

def create_release_notes_folder(version, release_date, markdown_content):
    """Create a folder with release notes"""
    folder_name = f"{release_date}-{version}"
    path = os.path.join('./blog', folder_name)
    os.makedirs(path, exist_ok=True)
    
    md_file_path = os.path.join(path, 'index.md')
    with open(md_file_path, 'w') as file:
        file.write("---\n")
        file.write(f"slug: {version}\n")
        file.write(f"title: {version}\n")
        file.write("authors: [rogerrabbit]\n")
        file.write("---\n")
        file.write(markdown_content)
    
    logging.info(f"Created release notes for {version} at {path}")
    return path

def main():
    # Get existing versions
    existing_versions, latest_date = get_existing_versions()
    logging.info(f"Found {len(existing_versions)} existing release notes")
    logging.info(f"Latest existing version: {sorted(existing_versions)[-1] if existing_versions else 'None'}")
    logging.info(f"Latest existing date: {latest_date}")
    
    # Fetch all releases from GitHub
    all_releases = fetch_all_releases()
    
    # Find missing releases (only those after the latest existing date)
    missing_releases = []
    for release in all_releases:
        tag_name = release['tag_name']
        release_date = release['published_at'].split('T')[0]
        
        # Only include releases after the latest existing release date
        if tag_name not in existing_versions and not release['prerelease'] and release_date > latest_date:
            missing_releases.append(release)
    
    if not missing_releases:
        logging.info("No missing release notes found!")
        return
    
    logging.info(f"Found {len(missing_releases)} missing release notes")
    
    # Process each missing release
    versions_added = []
    for release in reversed(missing_releases):  # Process in chronological order
        tag_name = release['tag_name']
        logging.info(f"Processing {tag_name}...")
        
        try:
            html_content = fetch_release_html(tag_name)
            version, release_date, markdown_content = parse_release_data(html_content, tag_name)
            create_release_notes_folder(version, release_date, markdown_content)
            versions_added.append(version)
        except Exception as e:
            logging.error(f"Failed to process {tag_name}: {e}")
            continue
    
    if not versions_added:
        logging.warning("No release notes were successfully added")
        return
    
    logging.info(f"Successfully processed {len(versions_added)} release notes: {', '.join(versions_added)}")
    logging.info("Files have been created locally. You can now commit and push these changes manually.")

if __name__ == "__main__":
    main()