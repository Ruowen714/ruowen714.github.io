---
layout: page
title: Teaching Experience
permalink: /teaching-experience/
description: Student-centered English teaching across adult ESL, K–12 literacy, and higher education.
nav: true
nav_order: 2
---

<div class="portfolio-experience-list">
  {% for experience in site.data.teaching_experience %}
    <article id="experience-{{ experience.title | slugify }}" class="portfolio-experience-card">
      <h2>{{ experience.title }}</h2>
      {% if experience.sites and experience.sites != empty %}
        <div class="portfolio-experience-sites">
          <strong>{{ experience.site_label }}:</strong>
          <ul>
            {% for site_name in experience.sites %}
              <li>{{ site_name }}</li>
            {% endfor %}
          </ul>
        </div>
      {% endif %}
      <p>{{ experience.body }}</p>
    </article>
  {% endfor %}
</div>
