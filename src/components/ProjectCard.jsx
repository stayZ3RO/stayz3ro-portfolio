import { useState } from 'react';

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-details`;

  return (
    <article className={`project-card tone-${project.statusTone}`}>
      <div className="project-meta">
        <span className={`status ${project.statusTone}`}>{project.status}</span>
        <span>{project.categories.join(' / ')}</span>
      </div>

      <h3>
        {project.links[0] ? (
          <a className="project-title-link" href={project.links[0].href} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>

      <p className="project-subtitle">{project.subtitle}</p>
      <p>{project.summary}</p>

      <div className="focus-line">
        <strong>Focus</strong>
        <span>{project.focus}</span>
      </div>

      <div className="proof-strip" aria-label={`${project.title} proof points`}>
        {project.proof.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="tool-list" aria-label={`${project.title} tools`}>
        {project.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>

      <button
        className="details-toggle"
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={() => setIsExpanded((current) => !current)}
      >
        {isExpanded ? 'Hide details' : 'View details'}
      </button>

      {isExpanded && (
        <div className="project-details" id={detailsId}>
          {project.details.map((detail) => (
            <div className="project-detail" key={detail.label}>
              <strong>{detail.label}</strong>
              <p>{detail.text}</p>
            </div>
          ))}
        </div>
      )}

      <div className="card-actions">
        {project.links.length > 0 ? (
          project.links.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))
        ) : (
          <span className="text-link">Private project</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
