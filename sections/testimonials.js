document.getElementById('testimonials-mount').innerHTML = `
<section id="testimonials" class="section">
  <div class="wrap">
    <p class="eyebrow" data-reveal>Testimonials</p>
    <h2 class="h2" data-reveal>What it's like<br>to work with me.</h2>

    <div class="testi-carousel" data-reveal>
      <div class="testi-track" id="testi-track">

        <article class="testi-card is-active" data-tilt data-index="0">
          <div class="testi-stars" aria-hidden="true">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <span class="testi-mark">"</span>
          <p class="testi-quote">Amina picked up our codebase fast and asked the right questions before writing a line. The kanban board she shipped was cleaner than what we scoped.</p>
          <div class="testi-person">
            <span class="testi-avatar-ring"><span class="testi-avatar">TL</span></span>
            <div>
              <p class="testi-name">Team Lead</p>
              <p class="testi-role">CodeAlpha</p>
            </div>
          </div>
        </article>

        <article class="testi-card" data-tilt data-index="1">
          <div class="testi-stars" aria-hidden="true">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <span class="testi-mark">"</span>
          <p class="testi-quote">She's meticulous about the small stuff — loading states, empty states, error messages — the details that make an app feel finished instead of just functional.</p>
          <div class="testi-person">
            <span class="testi-avatar-ring"><span class="testi-avatar">PM</span></span>
            <div>
              <p class="testi-name">Project Mentor</p>
              <p class="testi-role">CodeClause</p>
            </div>
          </div>
        </article>

        <article class="testi-card" data-tilt data-index="2">
          <div class="testi-stars" aria-hidden="true">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <span class="testi-mark">"</span>
          <p class="testi-quote">What stood out was how she explained her decisions — a habit from her tutoring background, I think. Made reviewing her pull requests genuinely easy.</p>
          <div class="testi-person">
            <span class="testi-avatar-ring"><span class="testi-avatar">PC</span></span>
            <div>
              <p class="testi-name">Program Coordinator</p>
              <p class="testi-role">Digital Empowerment Pakistan</p>
            </div>
          </div>
        </article>

      </div>

      <div class="testi-dots" id="testi-dots">
        <button class="testi-dot is-active" data-goto="0" aria-label="Show testimonial 1"></button>
        <button class="testi-dot" data-goto="1" aria-label="Show testimonial 2"></button>
        <button class="testi-dot" data-goto="2" aria-label="Show testimonial 3"></button>
      </div>
    </div>

    <p class="testi-note" data-reveal>
      Placeholder quotes — swap these in sections/testimonials.js for real feedback from your supervisors or clients once you have it in writing.
    </p>
  </div>
</section>
`;
