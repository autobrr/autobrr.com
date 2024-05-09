"""
Requirements:
pip3 install requests beautifulsoup4 GitPython markdownify
"""

import os
import requests
from bs4 import BeautifulSoup
from git import Repo, GitCommandError
from markdownify import markdownify as md
from datetime import datetime
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def fetch_latest_release():
    url = "https://github.com/autobrr/autobrr/releases/latest"
    response = requests.get(url)
    response.raise_for_status()
    logging.info(f"Successfully fetched data from {url}")
    return response.text, response.url

def parse_release_data(html_content, url):
    soup = BeautifulSoup(html_content, 'html.parser')
    version = url.split('/')[-1]

    time_tag = soup.find('relative-time')
    release_date = time_tag['datetime'].split('T')[0] if time_tag else datetime.now().strftime('%Y-%m-%d')

    body_html = soup.find('div', class_="markdown-body")
    if body_html:
        markdown_content = md(str(body_html), heading_style="ATX")
        return version, release_date, markdown_content
    else:
        raise Exception("Failed to parse release notes from HTML")

def create_release_notes_folder(version, release_date, markdown_content):
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
    
    logging.info(f"Release notes folder created at {path}")
    return path

def git_operations():
    repo = Repo('.')
    origin = repo.remotes.origin
    repo.git.checkout('main')
    origin.pull()

    branch_name = "chore/docs/update-release-notes-{}".format(datetime.now().strftime('%Y%m%d-%H%M%S'))
    if branch_name in repo.heads:
        branch = repo.heads[branch_name]
        logging.info("Branch already exists, checking out and merging from main.")
        repo.git.checkout(branch_name)
        repo.git.merge('main')
    else:
        logging.info("Creating new branch.")
        branch = repo.create_head(branch_name)
        repo.git.checkout(branch_name)

    print(f"::set-output name=branch::{branch_name}")
    return branch

def main():
    git_operations()
    html_content, url = fetch_latest_release()
    version, release_date, markdown_content = parse_release_data(html_content, url)
    path = create_release_notes_folder(version, release_date, markdown_content)

if __name__ == "__main__":
    main()
