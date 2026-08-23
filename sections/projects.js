document.getElementById('projects-mount').innerHTML = `
<section id="projects" class="section">
  <div class="wrap">
    <p class="eyebrow" data-reveal>Selected work</p>
    <h2 class="h2" data-reveal>A few things<br>I've <em>shipped.</em></h2>

    <div class="projects-grid">

      <article class="project-card" data-reveal data-tilt>
        <div class="project-thumb">
          <div class="panel-browser-dots"><span></span><span></span><span></span></div>
          <span class="project-status">Live</span>
          <i class="fa-solid fa-table-columns"></i>
        </div>
        <div class="project-body">
          <p class="project-role">Frontend Internship Project</p>
          <h3>TaskFlow — Kanban Board</h3>
          <p>A drag-and-drop task board with columns, cards and local persistence, built during my internship at CodeAlpha.</p>
          <div class="project-tags">
            <span class="project-tag">JavaScript</span>
            <span class="project-tag">CSS Grid</span>
            <span class="project-tag">LocalStorage</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live demo</a>
            <a href="https://github.com/amina-lodhi" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fa-brands fa-github"></i> Code</a>
          </div>
        </div>
      </article>

      <article class="project-card" data-reveal data-tilt>
        <div class="project-thumb">
          <div class="panel-browser-dots"><span></span><span></span><span></span></div>
          <span class="project-status">Live</span>
          <i class="fa-solid fa-cloud-sun"></i>
        </div>
        <div class="project-body">
          <p class="project-role">Web Development Internship Project</p>
          <h3>WeatherNow</h3>
          <p>A responsive weather app pulling live conditions from a public API, built at CodeClause with a focus on clean API handling.</p>
          <div class="project-tags">
            <span class="project-tag">REST API</span>
            <span class="project-tag">JavaScript</span>
            <span class="project-tag">Responsive UI</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live demo</a>
            <a href="https://github.com/amina-lodhi" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fa-brands fa-github"></i> Code</a>
          </div>
        </div>
      </article>

      <article class="project-card" data-reveal data-tilt>
        <div class="project-thumb">
          <div class="panel-browser-dots"><span></span><span></span><span></span></div>
          <span class="project-status">Live</span>
          <i class="fa-solid fa-people-group"></i>
        </div>
        <div class="project-body">
          <p class="project-role">Community Initiative</p>
          <h3>Digital Literacy Landing Pages</h3>
          <p>Accessible, mobile-first landing pages built for community digital-literacy programs at Digital Empowerment Pakistan.</p>
          <div class="project-tags">
            <span class="project-tag">HTML5</span>
            <span class="project-tag">Accessibility</span>
            <span class="project-tag">Bootstrap</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live demo</a>
            <a href="https://github.com/amina-lodhi" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fa-brands fa-github"></i> Code</a>
          </div>
        </div>
      </article>

    </div>

    <p class="projects-note" data-reveal>
      Placeholder links — swap the "Live demo" href in sections/projects.js for your deployed URLs once each project is hosted.
    </p>
  </div>
</section>
`;
