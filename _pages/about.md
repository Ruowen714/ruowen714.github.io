---
layout: about
title: Home
permalink: /
nav: false
subtitle: University of Pennsylvania · M.S.Ed. Teaching English to Speakers of Other Languages (TESOL)

profile:
  align: left
  image: portrait-of-ruowen-sun.jpg
  image_alt: Portrait of Ruowen Sun
  image_circular: false

selected_papers: false
social: true
cv_pdf: /assets/pdf/Ruowen_Sun_CV.pdf
cv_format: rendercv

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<div class="portfolio-intro-copy" markdown="1">
I am an English educator with experience in adult ESL, K–12 literacy instruction, peer tutoring, and curriculum design. I am currently pursuing an M.S.Ed. in TESOL at the University of Pennsylvania. I also hold a B.A. in English from Wenzhou-Kean University and have studied at Columbia University as a visiting student.

My teaching focuses on helping students use English in real-life situations. At the Free Library of Philadelphia, I teach adult immigrants from different language backgrounds and proficiency levels. I design lessons around everyday topics, such as shopping, ordering food, visiting a doctor, and using public transportation. Through role-plays, group discussions, and authentic materials, I encourage students to practice English in situations they may encounter outside the classroom. I also have experience supporting young learners with reading and literacy skills through individualized instruction.

I believe that students learn best when they have opportunities to communicate, make mistakes, and receive meaningful feedback. Since students have different learning needs and goals, I try to adjust my teaching based on their participation, performance, and feedback. As an educator, my goal is not only to help students improve their English skills, but also to help them feel more confident using English in their daily lives.

</div>

<nav class="portfolio-cta" aria-label="Portfolio sections">
  <a href="#section-home">Home</a>
  <a href="#section-teaching-philosophy">Teaching Philosophy</a>
  <a href="#section-teaching-experience">Teaching Experience</a>
  <a href="#section-project">Project</a>
  <a href="#section-teaching-demo">Teaching Demo</a>
  <a href="#section-research">Research</a>
  <a href="#section-certificates">Certificates</a>
  <a href="#section-more-experience">More Experience</a>
  <a href="#section-cv">CV</a>
</nav>

<section class="portfolio-highlights" aria-labelledby="teaching-at-a-glance">
  <h2 id="teaching-at-a-glance">Teaching at a glance</h2>
  <ul class="portfolio-highlight-grid">
    <li>
      <a class="portfolio-highlight-link" href="#experience-us-adult-esl-education">
        <span class="portfolio-highlight-media">
          <img
            src="{{ '/assets/img/teaching-glance-adult-esl.jpg' | relative_url }}"
            alt="Ruowen Sun teaching an adult English class"
            loading="lazy"
            decoding="async"
          >
        </span>
        <span class="portfolio-highlight-copy">
          <strong>Adult ESL Teaching</strong>
          <span>Designing communicative lessons and role-plays based on real-life situations, including shopping, healthcare, transportation, and food ordering.</span>
        </span>
      </a>
    </li>
    <li>
      <a class="portfolio-highlight-link" href="#section-teaching-experience">
        <span class="portfolio-highlight-media portfolio-highlight-media--literacy">
          <img
            src="{{ '/assets/img/teaching-glance-literacy-support.jpg' | relative_url }}"
            alt="Ruowen Sun providing one-to-one literacy support"
            loading="lazy"
            decoding="async"
          >
        </span>
        <span class="portfolio-highlight-copy">
          <strong>Literacy &amp; Academic Support</strong>
          <span>Providing individualized reading, writing, and English language support for elementary and university students.</span>
        </span>
      </a>
    </li>
    <li>
      <a class="portfolio-highlight-link" href="#section-project">
        <span class="portfolio-highlight-media">
          <img
            src="{{ '/assets/img/teaching-glance-curriculum-resources.jpg' | relative_url }}"
            alt="Classroom reading materials and learning resources"
            loading="lazy"
            decoding="async"
          >
        </span>
        <span class="portfolio-highlight-copy">
          <strong>Curriculum &amp; Assessment</strong>
          <span>Developing lesson plans, adapting authentic materials, and using student performance and feedback to improve instruction.</span>
        </span>
      </a>
    </li>
    <li>
      <a class="portfolio-highlight-link" href="#section-more-experience">
        <span class="portfolio-highlight-media">
          <img
            src="{{ '/assets/img/teaching-glance-cross-cultural-materials.jpg' | relative_url }}"
            alt="Individualized classroom folders and learning materials"
            loading="lazy"
            decoding="async"
          >
        </span>
        <span class="portfolio-highlight-copy">
          <strong>Cross-Cultural Communication</strong>
          <span>Working with learners from diverse linguistic and cultural backgrounds through teaching, interpretation, and student leadership.</span>
        </span>
      </a>
    </li>
  </ul>
</section>

<div class="portfolio-one-page">
  <section id="section-teaching-philosophy" class="portfolio-scroll-section" aria-labelledby="teaching-philosophy-title">
    <header class="portfolio-section-heading">
      <p class="portfolio-section-kicker">My approach</p>
      <h2 id="teaching-philosophy-title">Teaching Philosophy</h2>
      <p>A learner-centered approach to meaningful, communicative English teaching.</p>
    </header>
    <div class="portfolio-prose">
      <p>I believe that language learning should be meaningful, communicative, and connected to students' real lives. My teaching focuses on creating a supportive and learner-centered classroom where students feel comfortable practicing English, making mistakes, and sharing their ideas. I use authentic materials, role-plays, and interactive activities to help students apply what they learn to real-life situations. I also recognize that every student has different needs and learning goals, so I adjust my teaching based on their progress and feedback. My goal is to help students become more confident, independent, and motivated English learners.</p>
    </div>
  </section>

  <section id="section-teaching-experience" class="portfolio-scroll-section" aria-labelledby="teaching-experience-title">
    <header class="portfolio-section-heading">
      <p class="portfolio-section-kicker">Classrooms and learners</p>
      <h2 id="teaching-experience-title">Teaching Experience</h2>
      <p>Learner-centered English teaching across adult ESL, K–12 literacy, and higher education in the United States and China.</p>
    </header>
    <div class="portfolio-experience-list">
      {% for experience in site.data.teaching_experience %}
        <article id="experience-{{ experience.title | slugify }}" class="portfolio-experience-card">
          <span class="portfolio-section-index" aria-hidden="true">0{{ forloop.index }}</span>
          <h3>{{ experience.title }}</h3>
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
  </section>

  <section id="section-project" class="portfolio-scroll-section" aria-labelledby="project-title">
    <header class="portfolio-section-heading">
      <p class="portfolio-section-kicker">Interactive learning design</p>
      <h2 id="project-title">Project</h2>
      <p>An interactive campus tour that connects place-based exploration with English listening, speaking, and comprehension practice.</p>
    </header>
    <article class="portfolio-project-card">
      <div class="portfolio-project-cover" aria-hidden="true">
        <i class="fa-solid fa-map-location-dot"></i>
        <span>45 campus scenes</span>
      </div>
      <div class="portfolio-project-copy">
        <p class="portfolio-project-eyebrow">Interactive H5P experience</p>
        <h3>Virtual Tour at Wenzhou-Kean University (2026)</h3>
        <p>This project guides visitors through campus spaces with scene-to-scene navigation, explanatory hotspots, and short comprehension checks. It brings language practice into authentic campus contexts while letting learners explore at their own pace.</p>
        <ul class="portfolio-project-features" aria-label="Virtual tour features">
          <li>45 campus scenes</li>
          <li>Interactive descriptions and navigation</li>
          <li>Five knowledge checks</li>
        </ul>
        <div class="portfolio-project-actions">
          <button
            class="portfolio-primary-action"
            type="button"
            data-h5p-launch
            data-h5p-src="{{ '/assets/html/virtual-tour/' | relative_url }}"
            aria-controls="home-virtual-tour"
            aria-expanded="false"
          >
            Launch Interactive Tour
          </button>
          <a class="portfolio-secondary-action" href="{{ '/assets/html/virtual-tour/' | relative_url }}" target="_blank" rel="noopener noreferrer">
            Open in a new tab
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div id="home-virtual-tour" class="portfolio-tour-frame" hidden></div>
    </article>
  </section>

  <section id="section-teaching-demo" class="portfolio-scroll-section" aria-labelledby="teaching-demo-title">
    <header class="portfolio-section-heading">
      <p class="portfolio-section-kicker">Lesson preview</p>
      <h2 id="teaching-demo-title">Teaching Demo</h2>
      <p>A classroom teaching demonstration will be added here soon.</p>
    </header>
    <div class="portfolio-demo-panel portfolio-demo-split">
      <img src="{{ '/assets/img/teaching-demo-placeholder.svg' | relative_url }}" alt="Teaching demo coming soon">
      <div>
        <h3>Video coming soon</h3>
        <p>A full teaching demonstration is being prepared for this portfolio. The final video will include a brief lesson context, learning objectives, classroom interaction, and a short reflection on instructional choices.</p>
        <p>In the meantime, explore my <a href="#section-teaching-experience">Teaching Experience</a> for examples of my work with adult ESL, literacy, and K–12 English learners.</p>
      </div>
    </div>
  </section>

  <section id="section-research" class="portfolio-scroll-section" aria-labelledby="research-title">
    <header class="portfolio-section-heading">
      <p class="portfolio-section-kicker">Inquiry and publication</p>
      <h2 id="research-title">Research</h2>
      <p>Research on communicative language teaching and AI literacy in teacher education, with links to the official publication records.</p>
    </header>
    <div class="portfolio-research-grid">
      {% for research in site.data.research %}
        <article id="research-{{ research.id }}" class="portfolio-research-card">
          <div class="portfolio-research-meta">
            <span>{{ research.context_label }}: {{ research.context }}</span>
            <span>Project period: {{ research.project_period }}</span>
          </div>
          <h3>
            <a href="{{ research.publication.page_url }}" target="_blank" rel="noopener noreferrer">
              {{ research.title }}
              <span class="sr-only"> (opens the official record in a new tab)</span>
            </a>
          </h3>
          <p class="portfolio-research-authors">{{ research.authors | join: ", " }}</p>
          <p class="portfolio-research-publication">
            <strong>{{ research.publication.status }}</strong><br>
            {{ research.publication.venue }}{% if research.publication.date %} · {{ research.publication.date }}{% endif %}
          </p>
          <p>{{ research.summary }}</p>
          <h4>My contributions</h4>
          <ul>
            {% for contribution in research.contributions %}
              <li>{{ contribution }}</li>
            {% endfor %}
          </ul>
          <div class="portfolio-research-links">
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
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section id="section-certificates" class="portfolio-scroll-section" aria-labelledby="certificates-title">
    <header class="portfolio-section-heading">
      <p class="portfolio-section-kicker">Qualifications</p>
      <h2 id="certificates-title">Certificates</h2>
      <p>Professional preparation and advanced English-language proficiency.</p>
    </header>
    <div class="certificate-grid">
      <article class="certificate-card">
        <h3>TESOL Advanced Certification</h3>
        <p><strong>The American TESOL Institute · Mar 2023</strong></p>
        <p>Advanced certification in Teaching English to Speakers of Other Languages, following 120 hours of professional training and 48 hours of classroom practice.</p>
        <img class="img-fluid rounded z-depth-1 credential-preview" src="{{ '/assets/img/credentials/tesol-advanced-certification.jpg' | relative_url }}" alt="Redacted TESOL Advanced Certification" data-zoomable>
      </article>
      <article class="certificate-card">
        <h3>Test for English Majors — Band 8 (TEM-8)</h3>
        <p><strong>National Advisory Committee for Foreign Language Teaching in Higher Education · May 2025</strong></p>
        <p>China’s advanced national English proficiency assessment for English majors.</p>
        <img class="img-fluid rounded z-depth-1 credential-preview" src="{{ '/assets/img/credentials/tem8-certificate.jpg' | relative_url }}" alt="Redacted TEM-8 certificate" data-zoomable>
      </article>
    </div>
  </section>

  <section id="section-more-experience" class="portfolio-scroll-section" aria-labelledby="more-experience-title">
    <header class="portfolio-section-heading">
      <p class="portfolio-section-kicker">Beyond the classroom</p>
      <h2 id="more-experience-title">More Experience</h2>
      <p>Academic projects, cross-cultural communication, leadership, and community service.</p>
    </header>
    <div class="portfolio-prose">
      <p>Beyond teaching, I have participated in various academic projects and campus activities at Wenzhou-Kean University. My interactive campus tour is available in the <a href="#section-project">Project section</a>. I also served as a student advisor and humanities assistant, supporting academic events, translation, and student communication. As a student representative on a faculty search committee, I had the opportunity to evaluate candidates' teaching approaches and provide feedback from a student's perspective.</p>
      <p>I have also gained experience in cross-cultural communication and student leadership. I worked as a Chinese-English simultaneous interpreter at an international sustainability forum and participated in the World Model United Nations Conference, where I represented Indonesia in discussions on global climate issues. As a member of my university's English Speech Team, I participated in public speaking competitions and mentored junior members. These experiences strengthened my communication and leadership skills and helped me work more effectively with people from diverse backgrounds.</p>
      <p>Community service has also been an important part of my personal and professional development. I helped organize animal rescue and adoption activities and volunteered in community public-health programs, where I supported local residents through communication, coordination, and home visits. These experiences helped me develop a stronger sense of responsibility, patience, and empathy, which I believe are equally important in my work as an educator.</p>
    </div>
  </section>

  <section id="section-cv" class="portfolio-scroll-section portfolio-cv-section" aria-labelledby="cv-title">
    <header class="portfolio-section-heading portfolio-section-heading-with-action">
      <div>
        <p class="portfolio-section-kicker">Full résumé</p>
        <h2 id="cv-title">CV</h2>
        <p>Education, teaching experience, certificates, leadership, and community service.</p>
      </div>
      <a class="portfolio-download-link" href="{{ page.cv_pdf | relative_url }}" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
        Download CV
        <span class="sr-only"> (opens in a new tab)</span>
      </a>
    </header>
    <div class="portfolio-cv-embedded">
      {% capture embedded_cv %}{% al_folio_cv_render %}{% endcapture %}
      {{ embedded_cv | replace: '<h1 class="post-title">', '<h2 class="post-title">' | replace: '</h1>', '</h2>' }}
    </div>
  </section>
</div>

<script defer src="{{ '/assets/js/h5p-launch.js' | relative_url }}"></script>
