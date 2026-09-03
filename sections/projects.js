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
          <h3>Web Development Module</h3>
          <p>A beginner-friendly web development project demonstrating the use of HTML and CSS to create a structured and styled webpage.</p>
          <div class="project-tags">
            <span class="project-tag">JavaScript</span>
            <span class="project-tag">CSS Grid</span>
            <span class="project-tag">LocalStorage</span>
          </div>
          <div class="project-links">
            <a href="#" https://amina-khanlodhi.github.io/Module-1/"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live demo</a>
            <a href="https://github.com/Amina-khanlodhi/Module-1" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fa-brands fa-github"></i> Code</a>
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
          <h3>COVID-19 Awareness Website</h3>
          <p>A responsive informational website designed to provide users with essential information and awareness about COVID-19. </p>
          <div class="project-tags">
            <span class="project-tag">REST API</span>
            <span class="project-tag">JavaScript</span>
            <span class="project-tag">Responsive UI</span>
          </div>
          <div class="project-links">
            <a href="#"https://amina-khanlodhi.github.io/Covid-19/ "><i class="fa-solid fa-arrow-up-right-from-square"></i> Live demo</a>
            <a href="https://github.com/Amina-khanlodhi/Covid-19" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fa-brands fa-github"></i> Code</a>
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
          <p class="project-role">Internship-project</p>
          <h3>CodeAlpha Front-End Project</h3>
          <p>A front-end development project created as part of the CodeAlpha internship, focusing on building a clean and user-friendly web interface.</p>
          <div class="project-tags">
            <span class="project-tag">HTML5</span>
            <span class="project-tag">Accessibility</span>
            <span class="project-tag">Bootstrap</span>
          </div>
          <div class="project-links">
            <a href="https://amina-khanlodhi.github.io/Nova/" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live demo</a>
            <a href="https://amina-khanlodhi.github.io/Nova/" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fa-brands fa-github"></i> Code</a>
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
