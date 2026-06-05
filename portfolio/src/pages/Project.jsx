// src/pages/Project.jsx
// Halaman project — menampilkan semua project dengan filter semester
// Data diambil dari data/projects.js dan dirender dengan .map()

import React, { useState } from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import '../styles/project.css'

// Daftar opsi filter
const FILTER_OPTIONS = ['Semua', 'Semester 1', 'Semester 2']

function Project() {
  // State untuk filter aktif
  const [activeFilter, setActiveFilter] = useState('Semua')

  // Filter projects berdasarkan semester yang dipilih
  const filteredProjects =
    activeFilter === 'Semua'
      ? projects
      : projects.filter(p => p.semester === activeFilter)

  return (
    <div className="project-page">
      {/* ─── Header ─── */}
      <div className="project-header">
        <span className="section-label">// karya saya</span>
        <h1 className="section-title">Projects</h1>
        <div className="section-divider"></div>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          maxWidth: '540px',
          lineHeight: '1.8'
        }}>
          Kumpulan project yang dikerjakan selama kelas XI Semester 1 dan 2.
          Setiap project merupakan hasil belajar dan praktik langsung di sekolah.
        </p>
      </div>

      {/* ─── Filter Tabs ─── */}
      <div className="project-filters">
        {FILTER_OPTIONS.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
            {filter !== 'Semua' && (
              <span style={{ marginLeft: '0.4rem', opacity: 0.6 }}>
                ({projects.filter(p => p.semester === filter).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ─── Project Count ─── */}
      <div className="project-count">
        Menampilkan <span>{filteredProjects.length}</span> dari{' '}
        <span>{projects.length}</span> project
      </div>

      {/* ─── Project Grid — dirender dengan .map() ─── */}
      {filteredProjects.length > 0 ? (
        <div className="project-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="project-empty">
          <span className="project-empty-icon">🔍</span>
          Tidak ada project untuk filter ini.
        </div>
      )}
    </div>
  )
}

export default Project
