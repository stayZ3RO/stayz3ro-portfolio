const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Christopher Austin Lorenzo home">
        <span className="brand-mark">Z3</span>
        <span>
          <strong>Christopher Austin Lorenzo</strong>
          <small>stayZ3RO</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="button resume-button" href={resumeHref} download>
        Download Resume
      </a>
    </header>
  );
}

export default Header;
