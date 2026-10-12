---
layout: page
title: Project
permalink: /project/
description: An interactive English-learning virtual tour of Wenzhou-Kean University.
nav: true
nav_order: 3
---

<article class="portfolio-project-card" aria-labelledby="virtual-tour-title" data-h5p-card>
  <div class="portfolio-project-stage" data-h5p-stage>
    <img
      class="portfolio-project-preview"
      src="{{ '/assets/img/project-virtual-tour-start.jpg' | relative_url }}"
      alt="Illustrated map of the Wenzhou-Kean University campus, the starting scene of the interactive tour"
      loading="eager"
      decoding="async"
    >
    <div id="project-virtual-tour-frame" class="portfolio-tour-frame" hidden></div>
  </div>
  <div class="portfolio-project-copy">
    <p class="portfolio-project-eyebrow">Interactive H5P experience</p>
    <h2 id="virtual-tour-title">Virtual Tour at Wenzhou-Kean University (2026)</h2>
    <p>I co-designed this English-language campus tour to connect listening, reading, and comprehension activities with places students encounter at Wenzhou-Kean University. The experience combines scene-to-scene navigation, explanatory hotspots, and short knowledge checks.</p>
    <ul class="portfolio-project-features" aria-label="Virtual tour features">
      <li>45 campus scenes</li>
      <li>Interactive descriptions and navigation</li>
      <li>Five knowledge checks</li>
    </ul>
    <p id="virtual-tour-help">The interactive experience loads only after you activate the button.</p>
    <div class="portfolio-project-actions">
      <button
        class="portfolio-primary-action"
        type="button"
        data-h5p-launch
        data-h5p-src="{{ '/assets/html/virtual-tour/index.html' | relative_url }}"
        aria-controls="project-virtual-tour-frame"
        aria-describedby="virtual-tour-help"
        aria-expanded="false"
      >
        Launch Interactive Tour
      </button>
    </div>
  </div>
</article>

<script defer src="{{ '/assets/js/h5p-launch.js' | relative_url }}"></script>
