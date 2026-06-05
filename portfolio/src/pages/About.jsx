// src/pages/About.jsx
// Halaman tentang diri — profil, pendidikan, pengalaman belajar, dan skill

import React from 'react'
import skills from '../data/skills'
import '../styles/about.css'

// Data pendidikan
const education = [
  {
    year: '2023 — Sekarang',
    school: 'SMAIT HSI Boarding School',
    detail: 'Jurusan Rekayasa Perangkat Lunak (RPL)',
  },
  {
    year: '2020 — 2023',
    school: 'SMPIT Baitul Ilmi',
    detail: 'Lulus dengan nilai baik',
  },
  {
    year: '2014 — 2020',
    school: 'SDIT Baitul Ilmi',
    detail: 'Lulus dengan baik',
  },
]

// Pengalaman belajar selama SMK
const experiences = [
  {
    icon: '💻',
    title: 'Praktik Pemrograman Web',
    desc: 'Mempelajari HTML, CSS, dan JavaScript dari dasar, membuat berbagai project website dari landing page hingga aplikasi interaktif.',
  },
  {
    icon: '⚛️',
    title: 'Belajar Framework ReactJS',
    desc: 'Mempelajari konsep komponen, state management dengan useState, routing dengan React Router DOM, dan penggunaan Vite sebagai build tool.',
  },
  {
    icon: '🗄️',
    title: 'Dasar-Dasar Database',
    desc: 'Belajar konsep basis data relasional, pembuatan tabel, query SQL dasar, dan penggunaan localStorage untuk penyimpanan data di browser.',
  },
  {
    icon: '🎨',
    title: 'Desain UI/UX',
    desc: 'Mempelajari prinsip-prinsip desain antarmuka pengguna menggunakan Figma, termasuk wireframing dan prototyping.',
  },
  {
    icon: '🐙',
    title: 'Version Control Git',
    desc: 'Mengenal penggunaan Git dan GitHub untuk version control, commit, push, dan kolaborasi antar developer.',
  },
]

function About() {
  return (
    <div className="about-page">
      {/* ─── Header ─── */}
      <div className="about-header">
        <span className="section-label">// tentang saya</span>
        <h1 className="section-title">Profil Lengkap</h1>
        <div className="section-divider"></div>
      </div>

      {/* ─── Grid: Kartu Profil + Konten ─── */}
      <div className="about-grid">
        {/* Kartu Profil Singkat */}
        <aside className="about-profile-card">
          <div className="about-avatar">👨‍💻</div>

          <div>
            <h2 className="about-profile-name">Rafif Raif Rabbani</h2>
            <p className="about-profile-role">Front-End Developer · SMA HSI</p>

            <div className="about-profile-info">
              <div className="info-row">
                <span className="info-icon">📍</span>
                <div>
                  <span className="info-label">Lokasi</span>
                  <span className="info-value">Bekasi, Jawa Barat</span>
                </div>
              </div>
              <div className="info-row">
                <span className="info-icon">🏫</span>
                <div>
                  <span className="info-label">Sekolah</span>
                  <span className="info-value">SMAIT HSI Boarding School</span>
                </div>
              </div>
              <div className="info-row">
                <span className="info-icon">📚</span>
                <div>
                  <span className="info-label">Jurusan</span>
                  <span className="info-value">Front-End Development</span>
                </div>
              </div>
              <div className="info-row">
                <span className="info-icon">🎓</span>
                <div>
                  <span className="info-label">Kelas</span>
                  <span className="info-value">XI </span>
                </div>
              </div>
              <div className="info-row">
                <span className="info-icon">⭐</span>
                <div>
                  <span className="info-label">Status</span>
                  <span className="info-value">Aktif Belajar</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Konten Detail */}
        <div className="about-content">
          {/* Bio */}
          <div className="about-section-block">
            <h3 className="block-title">
              <span className="block-title-icon">📖</span>
              Tentang Saya
            </h3>
            <div className="about-bio-text">
              <p>
                Halo! Saya Rafif Raif Rabbani, siswa kelas XI SMAIT HSI Boarding School.
                Saya memiliki ketertarikan yang besar dalam dunia
                pengembangan web, khususnya pada sisi front-end.
              </p>
              <p>
                Perjalanan coding saya dimulai dari belajar HTML dan CSS sederhana,
                hingga kini saya sudah mampu membangun aplikasi web interaktif menggunakan
                ReactJS. Setiap hari saya berusaha belajar konsep baru dan mempraktikkannya
                melalui berbagai project nyata.
              </p>
              <p>
                Tujuan saya adalah menjadi seorang Full-Stack Developer profesional yang
                dapat menciptakan produk digital yang bermanfaat bagi banyak orang.
              </p>
            </div>
          </div>

          {/* Riwayat Pendidikan */}
          <div className="about-section-block">
            <h3 className="block-title">
              <span className="block-title-icon">🎓</span>
              Riwayat Pendidikan
            </h3>
            <div className="education-list">
              {education.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <div className="edu-dot-line">
                    <span className="edu-dot"></span>
                    <span className="edu-line"></span>
                  </div>
                  <div className="edu-details">
                    <p className="edu-year">{edu.year}</p>
                    <p className="edu-school">{edu.school}</p>
                    <p className="edu-detail">{edu.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pengalaman Belajar SMK */}
          <div className="about-section-block">
            <h3 className="block-title">
              <span className="block-title-icon">🚀</span>
              Pengalaman Belajar di SMA
            </h3>
            <div className="experience-list">
              {experiences.map((exp, idx) => (
                <div key={idx} className="exp-item">
                  <span className="exp-icon">{exp.icon}</span>
                  <div>
                    <p className="exp-title">{exp.title}</p>
                    <p className="exp-desc">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Skills Section ─── */}
      {/* Dirender menggunakan .map() dari data/skills.js */}
      <div className="skills-section">
        <div className="skills-header">
          <span className="section-label">// keahlian teknis</span>
          <h2 className="section-title">Tech Stack & Skills</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skills.map(skill => (
            <div
              key={skill.id}
              className="skill-card"
              style={{ '--skill-level': `${skill.level}%` }}
            >
              <div className="skill-top">
                <div className="skill-icon-name">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>

              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <span className="skill-category-tag">{skill.category}</span>
              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
