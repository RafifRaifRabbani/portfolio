// src/components/Navbar.jsx
// Komponen navigasi sticky dengan hamburger menu untuk mobile

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const navItems = [
  { number: '01', label: 'Home', path: '/' },
  { number: '02', label: 'About', path: '/about' },
  { number: '03', label: 'Project', path: '/project' },
  { number: '04', label: 'Contact', path: '/contact' },
]

function Navbar() {
  // State untuk hamburger menu mobile
  const [menuOpen, setMenuOpen] = useState(false)
  // State untuk shadow saat scroll
  const [scrolled, setScrolled] = useState(false)

  // Deteksi scroll untuk menambah class 'scrolled'
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tutup menu saat window diresize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">Rafif.dev</span>
          <span className="logo-bracket">]</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={item.path === '/'}
              >
                <span className="nav-number">{item.number}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`} role="dialog">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMenu}
            end={item.path === '/'}
          >
            <span className="mobile-nav-number">{item.number}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}

export default Navbar
