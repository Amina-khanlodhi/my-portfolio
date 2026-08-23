document.getElementById('about-mount').innerHTML = `
<section id="about" class="section">
  <div class="wrap">
    <p class="eyebrow" data-reveal>About</p>

    <div class="about-grid">
      <div class="avatar-frame" data-reveal>
        <div class="avatar-mono">
          <!--
            To use your real photo:
            1. Add the image file to assets/images/profile.jpg
            2. Uncomment the <img> line below and delete the <span> line
            3. In css/style.css, change ".avatar-mono img { display:none }" to "display:block"
          -->
          <span>AL</span>
          <!-- <img src="assets/images/profile.jpg" alt="Portrait of Amina Lodhi" style="display:block"> -->
        </div>
        <span class="avatar-tag font-mono">KARACHI, PAKISTAN</span>
      </div>

      <div class="about-copy">
        <p class="about-lead" data-reveal>
          "I care about the details most people scroll past."
        </p>

        <p class="about-body" data-reveal>
          My path into development started with tutoring: three years of
          breaking down complex ideas for an O-Level student taught me how to
          explain things clearly — a skill that now shapes how I write code
          and documentation alike.
        </p>
        <p class="about-body" data-reveal>
          Since then I've completed three remote internships and a structured
          web-development training, applying HTML, CSS, JavaScript, Tailwind
          CSS and Bootstrap to real briefs.
        </p>
        <p class="about-body" data-reveal>
          Right now I'm training in agentic AI workflows alongside my degree,
          aiming to bring that thinking into how I build and ship frontend
          products — faster iteration, cleaner components, fewer rewrites.
        </p>

        <div class="chip-row" data-reveal>
          <span class="chip">Problem Solving</span>
          <span class="chip">Teamwork</span>
          <span class="chip">Attention to Detail</span>
          <span class="chip">Time Management</span>
          <span class="chip">Interpersonal Skills</span>
        </div>

        <div class="lang-row" data-reveal>
          <div class="lang-item">
            <span class="lang-name">English</span>
            <div class="lang-bar"><span style="width:92%"></span></div>
          </div>
          <div class="lang-item">
            <span class="lang-name">Urdu</span>
            <div class="lang-bar"><span style="width:100%"></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;