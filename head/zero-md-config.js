// File: zero-md-config.js
import ZeroMd, { STYLES } from 'https://cdn.jsdelivr.net/npm/zero-md@3';

// Define ZeroMd with custom styling
customElements.define('zero-md', class extends ZeroMd {
  async load() {
    await super.load();
    this.template = STYLES.preset('light'); // or STYLES.preset('dark')
  }
});

// Base path for Markdown files
const basePath = "https://raw.githubusercontent.com/STAER-HPC/documentation/refs/heads/main/";

// Set the `src` attribute for each zero-md element dynamically
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('zero-md').forEach((element) => {
    const relativePath = element.getAttribute('data-src'); // Use a custom attribute
    if (relativePath) {
      element.src = basePath + relativePath; // Set the full path dynamically
    }
  });
});
