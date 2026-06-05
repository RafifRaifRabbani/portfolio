// src/components/ProjectCard.jsx
// Komponen kartu project individual, dirender via .map() di halaman Project

import React from 'react'

// CSS untuk ProjectCard sudah dimasukkan ke project.css via style global
const cardStyles = `
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--card-accent, linear-gradient(90deg, #6ee7b7, #818cf8));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.project-card:hover {
  border-color: rgba(110, 231, 183, 0.25);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  background: var(--bg-card-hover);
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}

.project-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  border: 1px solid var(--border-subtle);
}

.project-semester-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  font-weight: 700;
}

.semester-1 {
  background: rgba(251, 191, 36, 0.1);
  color: var(--accent-warm);
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.semester-2 {
  background: rgba(129, 140, 248, 0.1);
  color: var(--accent-secondary);
  border: 1px solid rgba(129, 140, 248, 0.2);
}

.project-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.project-description {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.75;
  flex: 1;
}

.project-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
}
`

/**
 * ProjectCard — menampilkan satu item project
 * @param {Object} project - objek project dari data/projects.js
 */
function ProjectCard({ project }) {
  const semesterClass = project.semester === 'Semester 1' ? 'semester-1' : 'semester-2'

  return (
    <>
      {/* Inject styles sekali */}
      {!document.getElementById('project-card-styles') && (
        <style id="project-card-styles">{cardStyles}</style>
      )}
      <article
        className="project-card"
        style={{ '--card-accent': `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
      >
        {/* Top: icon + semester badge */}
        <div className="project-card-top">
          <div
            className="project-icon-wrap"
            style={{ background: `${project.color}15`, borderColor: `${project.color}30` }}
          >
            <span role="img" aria-label={project.name}>{project.icon}</span>
          </div>
          <span className={`project-semester-badge ${semesterClass}`}>
            📅 {project.semester}
          </span>
        </div>

        {/* Project Name */}
        <h3 className="project-name">{project.name}</h3>

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Tech Stack Tags */}
        <div className="project-tech-list">
          {project.technologies.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </article>
    </>
  )
}

export default ProjectCard
