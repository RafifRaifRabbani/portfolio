// src/pages/Home.jsx
// Halaman utama — Hero section dengan profil, bio, dan navigasi ke Project

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-inner">
          {/* ─── Teks Kiri ─── */}
          <div className="hero-text">
            <p className="hero-greeting">Halo, selamat datang</p>

            <h1 className="hero-name">
              Rafif<br />
              <span>Raif Rabbani</span>
            </h1>

            <p className="hero-role">
              <span className="hero-role-icon">⚛️</span>
              Front-End Developer & SMA Student
            </p>

            <p className="hero-bio">
              Haii saya Rafif, siswa kelas XI yang sedang belajar bahasa pemrograman, khususnya di bidang front-end development.
              Saya memiliki ketertarikan yang besar dalam dunia pengembangan web,
              dan saya selalu bersemangat untuk belajar hal-hal baru di bidang ini.
            </p>

            <div className="hero-cta">
              <Link to="/project" className="btn btn-primary">
                Lihat Projects →
              </Link>
              <Link to="/about" className="btn btn-outline">
                Tentang Saya
              </Link>
            </div>
          </div>

          {/* ─── Visual Kanan (Foto Profil Placeholder + Badges) ─── */}
          <div className="hero-visual">
            <div className="profile-frame">
              <div className="profile-img-placeholder">
                <span className="profile-avatar-icon">👨‍💻</span>
                <span>Foto Profil</span>
              </div>
            </div>

            <div className="profile-badges">
              <div className="profile-badge">
                <span className="badge-dot"></span>
                Kelas XI RPL — Aktif
              </div>
              <div className="profile-badge">
                <span className="badge-dot amber"></span>
                Open for Collaboration
              </div>
            </div>
          </div>
        </div>

        {/* ─── Stats Bar ─── */}
        <div className="hero-inner">
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Semester</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Teknologi</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Semangat Belajar</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
