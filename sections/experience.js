document.getElementById('experience-mount').innerHTML = `
<section id="experience" class="section section-alt">
  <div class="wrap">
    <p class="eyebrow" data-reveal>Where I've worked &amp; studied</p>
    <h2 class="h2" data-reveal>A record of doing,<br>not just learning.</h2>

    <div class="exp-stats" data-reveal>
      <div>
        <span class="exp-stat-num">3+</span>
        <span class="exp-stat-label">Remote internships completed</span>
      </div>
      <div>
        <span class="exp-stat-num">3+</span>
        <span class="exp-stat-label">Years tutoring &amp; mentoring</span>
      </div>
      <div>
        <span class="exp-stat-num">6</span>
        <span class="exp-stat-label">Roles &amp; programs on record</span>
      </div>
    </div>

    <div class="tab-row" data-reveal>
      <button class="tab-btn is-active" data-tab="panel-experience">Experience</button>
      <button class="tab-btn" data-tab="panel-education">Education</button>
    </div>

    <div class="timeline" data-reveal>

      <div class="timeline-panel is-active" id="panel-experience">
        <ol class="timeline-line">
          <li class="t-item is-current">
            <span class="t-icon"><i class="fa-solid fa-robot"></i></span>
            <div class="t-card">
              <div class="t-date-row">
                <span class="t-date font-mono">PRESENT</span>
                <span class="t-current-pill">Ongoing</span>
              </div>
              <h4>Agentic AI Training</h4>
              <span class="t-org">Independent study</span>
              <p>Studying agentic AI workflows and applying them to faster, more autonomous frontend development.</p>
              <div class="t-skills">
                <span class="t-skill">Agentic workflows</span>
                <span class="t-skill">Prompt engineering</span>
              </div>
            </div>
          </li>
          <li class="t-item">
            <span class="t-icon"><i class="fa-solid fa-table-columns"></i></span>
            <div class="t-card">
              <div class="t-date-row">
                <span class="t-date font-mono">SEP – NOV 2024</span>
              </div>
              <h4>Frontend Intern</h4>
              <span class="t-org">CodeAlpha · Remote</span>
              <p>Built interactive JavaScript interfaces, including the TaskFlow kanban board.</p>
              <div class="t-skills">
                <span class="t-skill">JavaScript</span>
                <span class="t-skill">DOM manipulation</span>
                <span class="t-skill">CSS Grid</span>
              </div>
            </div>
          </li>
          <li class="t-item">
            <span class="t-icon"><i class="fa-solid fa-cloud-sun"></i></span>
            <div class="t-card">
              <div class="t-date-row">
                <span class="t-date font-mono">JUN – AUG 2024</span>
              </div>
              <h4>Web Development Intern</h4>
              <span class="t-org">CodeClause · Remote</span>
              <p>Focused on API integration and responsive UI, including the WeatherNow app.</p>
              <div class="t-skills">
                <span class="t-skill">REST APIs</span>
                <span class="t-skill">Responsive design</span>
              </div>
            </div>
          </li>
          <li class="t-item">
            <span class="t-icon"><i class="fa-solid fa-people-group"></i></span>
            <div class="t-card">
              <div class="t-date-row">
                <span class="t-date font-mono">FEB – APR 2024</span>
              </div>
              <h4>Web Development Intern</h4>
              <span class="t-org">Digital Empowerment Pakistan · Remote</span>
              <p>Built accessible landing pages for community digital-literacy initiatives.</p>
              <div class="t-skills">
                <span class="t-skill">Accessibility</span>
                <span class="t-skill">HTML5</span>
                <span class="t-skill">Bootstrap</span>
              </div>
            </div>
          </li>
          <li class="t-item">
            <span class="t-icon"><i class="fa-solid fa-code"></i></span>
            <div class="t-card">
              <div class="t-date-row">
                <span class="t-date font-mono">JUN – NOV 2023</span>
              </div>
              <h4>Website Development Training</h4>
              <span class="t-org">Squad Coders Dev</span>
              <p>Structured training covering HTML, CSS, JavaScript and responsive design fundamentals.</p>
              <div class="t-skills">
                <span class="t-skill">HTML/CSS</span>
                <span class="t-skill">JavaScript fundamentals</span>
              </div>
            </div>
          </li>
          <li class="t-item">
            <span class="t-icon"><i class="fa-solid fa-chalkboard-user"></i></span>
            <div class="t-card">
              <div class="t-date-row">
                <span class="t-date font-mono">2023 – PRESENT</span>
                <span class="t-current-pill">Ongoing</span>
              </div>
              <h4>Private O-Level Tutor</h4>
              <span class="t-org">Independent</span>
              <p>Delivering structured, one-to-one lessons aligned with the Cambridge O-Level curriculum for over three years.</p>
              <div class="t-skills">
                <span class="t-skill">Communication</span>
                <span class="t-skill">Curriculum planning</span>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div class="timeline-panel" id="panel-education">
        <ol class="timeline-line">
          <li class="t-item is-current">
            <span class="t-icon"><i class="fa-solid fa-graduation-cap"></i></span>
            <div class="t-card">
              <div class="t-date-row">
                <span class="t-date font-mono">PRESENT</span>
                <span class="t-current-pill">Ongoing</span>
              </div>
              <h4>BS — Computer Science</h4>
              <span class="t-org">Ilma University, Karachi</span>
              <p>Currently pursuing a Bachelor's degree in Computer Science.</p>
            </div>
          </li>
          <li class="t-item">
            <span class="t-icon"><i class="fa-solid fa-book"></i></span>
            <div class="t-card">
              <div class="t-date-row">
                <span class="t-date font-mono">2021 – 2023</span>
              </div>
              <h4>Intermediate, Pre-Engineering</h4>
              <span class="t-org">Govt. Degree Girls College, North Nazimabad</span>
              <p>Pre-engineering track at the intermediate level.</p>
            </div>
          </li>
          <li class="t-item">
            <span class="t-icon"><i class="fa-solid fa-school"></i></span>
            <div class="t-card">
              <div class="t-date-row">
                <span class="t-date font-mono">2019 – 2021</span>
              </div>
              <h4>Matriculation, Science</h4>
              <span class="t-org">Rose Petal School, Karachi</span>
              <p>Science group at the matriculation level.</p>
            </div>
          </li>
        </ol>
      </div>

    </div>
  </div>
</section>
`;
