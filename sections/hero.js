document.getElementById('hero-mount').innerHTML = `
<section id="top" class="hero">
  <div class="wrap">
    <div class="hero-grid">

      <div class="hero-copy">
        <p class="hero-kicker" data-reveal>
          <span class="status-dot"></span>
          <span>OPEN TO INTERNSHIPS &amp; FREELANCE — KARACHI, PK</span>
        </p>

        <h1 class="hero-title" data-reveal>
          Hi, I'm<br>
          <span class="accent">Amina Lodhi.</span>
        </h1>

        <p class="hero-sub" data-reveal>
          An aspiring frontend developer based in Karachi, pursuing a BS in
          Computer Science at Ilma University. I care about the details most
          people scroll past — spacing, motion timing, the way a button feels
          when you press it.
        </p>

        <div class="hero-cta" data-reveal>
          <a href="#services" class="btn-primary magnetic">
            See how I can help <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contact" class="btn-ghost magnetic">Let's talk</a>
        </div>

        <div class="hero-stats" data-reveal>
          <div>
            <span class="hero-stat-num">3+</span>
            <span class="hero-stat-label">Internships completed</span>
          </div>
          <div>
            <span class="hero-stat-num">2+</span>
            <span class="hero-stat-label">Years of tutoring &amp; teamwork</span>
          </div>
        </div>
      </div>

      <div class="hero-stage" data-reveal>

        <!-- Ambient 3D wireframe object, rendered behind the card -->
        <div class="orb-wrap" id="orb-wrap" aria-hidden="true">
          <canvas id="hero-orb"></canvas>
        </div>

        <!-- Soft floating blur shapes for depth -->
        <div class="float-shape shape-a" aria-hidden="true"></div>
        <div class="float-shape shape-b" aria-hidden="true"></div>

        <span class="stage-tag stage-tag-a font-mono">state: hover</span>
        <span class="stage-tag stage-tag-b font-mono">◎ press to test</span>
        <span class="stage-tag stage-tag-c font-mono">⟡ webgl canvas</span>

        <div class="panel-frame">
          <div class="panel-glow" aria-hidden="true"></div>

          <div class="glass-panel" id="glass-panel">
            <div class="panel-browser-dots"><span></span><span></span><span></span></div>
            <p class="panel-caption">// tools I build with</p>

            <div class="tech-orbit">
              <div class="tech-ring" aria-hidden="true"></div>
              <div class="tech-core" aria-hidden="true"><i class="fa-solid fa-code"></i></div>

              <div class="tech-item" style="--angle:0deg" data-tool="HTML5 — semantic markup">
                <div class="tech-spin"><span class="tech-icon" tabindex="0"><i class="fa-brands fa-html5"></i></span></div>
              </div>
              <div class="tech-item" style="--angle:40deg" data-tool="CSS3 — layout &amp; motion">
                <div class="tech-spin"><span class="tech-icon" tabindex="0"><i class="fa-brands fa-css3-alt"></i></span></div>
              </div>
              <div class="tech-item" style="--angle:80deg" data-tool="JavaScript — interactivity">
                <div class="tech-spin"><span class="tech-icon" tabindex="0"><i class="fa-brands fa-square-js"></i></span></div>
              </div>
              <div class="tech-item" style="--angle:120deg" data-tool="Tailwind CSS — utility styling">
                <div class="tech-spin"><span class="tech-icon" tabindex="0"><i class="fa-solid fa-wind"></i></span></div>
              </div>
              <div class="tech-item" style="--angle:160deg" data-tool="Bootstrap — grid &amp; components">
                <div class="tech-spin"><span class="tech-icon" tabindex="0"><i class="fa-brands fa-bootstrap"></i></span></div>
              </div>
              <div class="tech-item" style="--angle:200deg" data-tool="React — component UIs">
                <div class="tech-spin"><span class="tech-icon" tabindex="0"><i class="fa-brands fa-react"></i></span></div>
              </div>
              <div class="tech-item" style="--angle:240deg" data-tool="Git — version control">
                <div class="tech-spin"><span class="tech-icon" tabindex="0"><i class="fa-brands fa-git-alt"></i></span></div>
              </div>
              <div class="tech-item" style="--angle:280deg" data-tool="GitHub — shipping &amp; review">
                <div class="tech-spin"><span class="tech-icon" tabindex="0"><i class="fa-brands fa-github"></i></span></div>
              </div>
              <div class="tech-item" style="--angle:320deg" data-tool="Figma — design handoff">
                <div class="tech-spin"><span class="tech-icon" tabindex="0"><i class="fa-brands fa-figma"></i></span></div>
              </div>
            </div>

            <p class="tech-label font-mono" id="tech-label">hover a tool</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
`;