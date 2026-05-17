function About() {
  return (
    <section className="section about-section" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h2 id="about-title">Support experience turned into infrastructure practice.</h2>
      </div>

      <div className="about-card">
        <p>
          I work in IT support and use my homelab and cloud labs to build deeper experience
          in networking, infrastructure, cloud hosting, and self-hosted systems.
        </p>
        <p>
          My projects focus on real operational skills: troubleshooting, documentation,
          DNS control, monitoring, service availability, remote access, managed network design,
          and deployment workflows.
        </p>
        <p>
          This portfolio is a public record of what I have built, what I have documented, and
          how I am growing from service desk support into cloud and network engineering.
        </p>
      </div>
    </section>
  );
}

export default About;
