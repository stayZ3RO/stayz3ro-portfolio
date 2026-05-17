import { useMemo, useState } from 'react';
import { projectCategories, projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }

    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Featured Projects</p>
        <h2 id="projects-title">Projects that show how I build, troubleshoot, and document infrastructure.</h2>
        <p>
          Concise cards by default, with details available when you want the problem,
          implementation, validation, and outcome.
        </p>
      </div>

      <div className="filter-bar" aria-label="Project filters">
        {projectCategories.map((category) => (
          <button
            className={category === activeCategory ? 'filter-button active' : 'filter-button'}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
