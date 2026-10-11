---
layout: page
title: Research
permalink: /research/
description: Research on communicative language teaching and artificial intelligence literacy in education.
nav: true
nav_order: 5
---

<div class="portfolio-research-grid">
  {% for research in site.data.research %}
    <article id="research-{{ research.id }}" class="portfolio-research-card">
      <div class="portfolio-research-meta">
        <span>{{ research.context_label }}: {{ research.context }}</span>
        <span>Project period: {{ research.project_period }}</span>
      </div>
      <h2>
        <a href="{{ research.publication.page_url }}" target="_blank" rel="noopener noreferrer">
          {{ research.title }}
          <span class="sr-only"> (opens the official record in a new tab)</span>
        </a>
      </h2>
      <p class="portfolio-research-authors">{{ research.authors | join: ", " }}</p>
      <p class="portfolio-research-publication">
        <strong>{{ research.publication.status }}</strong><br>
        {{ research.publication.venue }}{% if research.publication.date %} · {{ research.publication.date }}{% endif %}
        {% if research.publication.event_dates %}<br>{{ research.publication.event_dates }}{% endif %}
      </p>
      <p>{{ research.summary }}</p>
      <h3 class="portfolio-research-subheading">My contributions</h3>
      <ul>
        {% for contribution in research.contributions %}
          <li>{{ contribution }}</li>
        {% endfor %}
      </ul>
      <nav class="portfolio-research-links" aria-label="Resources for {{ research.title }}">
        <a href="{{ research.publication.page_url }}" target="_blank" rel="noopener noreferrer">
          Official record
          <span class="sr-only"> (opens in a new tab)</span>
        </a>
        {% if research.publication.video_url %}
          <a href="{{ research.publication.video_url }}" target="_blank" rel="noopener noreferrer">
            Watch presentation
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
        {% endif %}
        {% if research.publication.doi %}
          <a href="https://doi.org/{{ research.publication.doi }}" target="_blank" rel="noopener noreferrer">
            DOI
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
        {% endif %}
        {% if research.publication.pdf_url %}
          <a href="{{ research.publication.pdf_url }}" target="_blank" rel="noopener noreferrer">
            Read full paper
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
        {% endif %}
      </nav>
    </article>
  {% endfor %}
</div>
