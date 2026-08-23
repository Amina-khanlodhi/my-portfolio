document.getElementById('contact-mount').innerHTML = `
<section id="contact" class="section section-alt">
  <div class="contact-shape contact-shape-a" aria-hidden="true"></div>
  <div class="contact-shape contact-shape-b" aria-hidden="true"></div>

  <div class="wrap">
    <div class="about-grid">

      <div class="contact-intro">
        <p class="eyebrow" data-reveal>Contact</p>
        <h2 class="h2" data-reveal>Let's build<br>something <em>together.</em></h2>
        <p class="lede" data-reveal>
          Have a project in mind, an internship opening, or just want to say hi?
          My inbox is open.
        </p>

        <div class="contact-availability" data-reveal>
          <span class="status-dot"></span>
          <span>Currently open to internships &amp; freelance work</span>
        </div>

        <div class="contact-grid" data-reveal>
          <a href="mailto:aminakhanlodhi331@gmail.com" class="contact-card contact-card--primary" data-tilt>
            <span class="contact-card-note">Preferred</span>
            <span class="contact-icon"><i class="fa-solid fa-envelope"></i></span>
            <div>
              <p class="contact-label">Email</p>
              <p class="contact-value">aminakhanlodhi331@gmail.com</p>
            </div>
            <i class="fa-solid fa-arrow-up-right contact-arrow"></i>
          </a>

          <a href="tel:+923161074903" class="contact-card" data-tilt>
            <span class="contact-icon"><i class="fa-solid fa-phone"></i></span>
            <div>
              <p class="contact-label">Phone</p>
              <p class="contact-value">0316 1074903</p>
            </div>
            <i class="fa-solid fa-arrow-up-right contact-arrow"></i>
          </a>

          <a href="https://wa.me/923161074903" target="_blank" rel="noopener noreferrer" class="contact-card whatsapp" data-tilt>
            <span class="contact-icon"><i class="fa-brands fa-whatsapp"></i></span>
            <div>
              <p class="contact-label">WhatsApp</p>
              <p class="contact-value">Chat with me</p>
            </div>
            <i class="fa-solid fa-arrow-up-right contact-arrow"></i>
          </a>

          <a href="https://linkedin.com/in/amina-lodhi" target="_blank" rel="noopener noreferrer" class="contact-card" data-tilt>
            <span class="contact-icon"><i class="fa-brands fa-linkedin-in"></i></span>
            <div>
              <p class="contact-label">LinkedIn</p>
              <p class="contact-value">/in/amina-lodhi</p>
            </div>
            <i class="fa-solid fa-arrow-up-right contact-arrow"></i>
          </a>

          <a href="https://github.com/amina-lodhi" target="_blank" rel="noopener noreferrer" class="contact-card" data-tilt>
            <span class="contact-icon"><i class="fa-brands fa-github"></i></span>
            <div>
              <p class="contact-label">GitHub</p>
              <p class="contact-value">@amina-lodhi</p>
            </div>
            <i class="fa-solid fa-arrow-up-right contact-arrow"></i>
          </a>
        </div>

        <p class="contact-location" data-reveal>
          <i class="fa-solid fa-location-dot"></i> Based in Karachi, Pakistan
        </p>

        <div class="contact-response" data-reveal>
          <i class="fa-solid fa-circle-check"></i> Typically replies within two business days
        </div>
      </div>

      <form id="contact-form" class="contact-form" data-reveal novalidate>
        <div style="display:flex; flex-direction:column; gap:22px;">
          <div class="form-field">
            <label for="name">Name</label>
            <div class="input-wrap">
              <i class="fa-regular fa-user field-icon"></i>
              <input type="text" id="name" name="name" autocomplete="name" required>
            </div>
            <span class="field-error">Please enter your name.</span>
          </div>
          <div class="form-field">
            <label for="email">Email</label>
            <div class="input-wrap">
              <i class="fa-regular fa-envelope field-icon"></i>
              <input type="email" id="email" name="email" autocomplete="email" required>
            </div>
            <span class="field-error">Enter a valid email address.</span>
          </div>
          <div class="form-field">
            <label for="message">Message</label>
            <div class="input-wrap is-textarea">
              <i class="fa-regular fa-message field-icon"></i>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <span class="field-error">Tell me a little about the project.</span>
          </div>
          <div>
            <button type="submit" class="btn-primary magnetic" id="contact-submit" style="width:100%; justify-content:center;">
              <span class="btn-label">Send message</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
          </div>
        </div>
      </form>

    </div>
  </div>
</section>
`;