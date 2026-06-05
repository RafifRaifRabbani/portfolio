// src/components/Footer.jsx
// Komponen footer sederhana dengan navigasi dan copyright

import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div>
            <div className="footer-logo">
              <span>Rafif</span>.Rabbani
            </div>
            <div className="footer-tagline">SMAIT HSI Boarding School</div>
          </div>
        </div>

        <nav className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>

      <div className="footer-inner">
        <p className="footer-copy">
          © {year} <span>Rafif Raif Rabbani</span>. Built with ⚛️ ReactJS + Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer
