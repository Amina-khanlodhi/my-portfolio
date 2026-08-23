document.getElementById('nav-mount').innerHTML = `
<header class="site-nav">
  <div class="nav-inner">
    <a href="#top" class="nav-brand">Amina<em>.</em></a>

    <nav class="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="nav-actions">
      <a href="assets/resume/Amina-Lodhi-Resume.pdf" download class="resume-btn magnetic">
        <i class="fa-solid fa-arrow-down-long"></i><span>Resume</span>
      </a>
      <button id="theme-toggle" class="theme-toggle" aria-label="Toggle light and dark mode">
        <i class="fa-solid fa-sun sun-icon"></i>
        <i class="fa-solid fa-moon moon-icon"></i>
      </button>
      <button id="nav-burger" class="burger-btn" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <div id="mobile-menu" class="mobile-menu">
    <a href="#about" class="mobile-link">About</a>
    <a href="#skills" class="mobile-link">Skills</a>
    <a href="#services" class="mobile-link">Services</a>
    <a href="#projects" class="mobile-link">Projects</a>
    <a href="#experience" class="mobile-link">Experience</a>
    <a href="#testimonials" class="mobile-link">Testimonials</a>
    <a href="#contact" class="mobile-link">Contact</a>
    <a href="assets/resume/Amina-Lodhi-Resume.pdf" download class="mobile-link" style="color:var(--coral)">Download résumé ↓</a>
  </div>
</header>
`;