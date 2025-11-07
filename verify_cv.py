
import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Get the absolute path to the HTML file
        html_file = os.path.abspath('index.html')

        # Load the local HTML file
        page.goto(f'file://{html_file}')

        # Take a screenshot
        page.screenshot(path='verification.png')

        browser.close()

if __name__ == "__main__":
    run()
