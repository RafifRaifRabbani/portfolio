// src/pages/Contact.jsx
// Halaman kontak dengan form Guest Book
// Menggunakan useState untuk form input dan localStorage untuk persistensi data

import React, { useState, useEffect } from 'react'
import '../styles/contact.css'

// Key untuk localStorage
const STORAGE_KEY = 'portfolio_guestbook'

// Helper: ambil data dari localStorage
function loadMessages() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

// Helper: simpan data ke localStorage
function saveMessages(messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
}

// Helper: format tanggal
function formatDate(isoString) {
  const date = new Date(isoString)
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Helper: inisial nama untuk avatar
function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase()
}

function Contact() {
  // ─── State Form ───
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // State validasi & feedback
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // ─── State Guest Book ───
  // Inisialisasi dari localStorage
  const [messages, setMessages] = useState(() => loadMessages())

  // Sync ke localStorage setiap kali messages berubah
  useEffect(() => {
    saveMessages(messages)
  }, [messages])

  // ─── Handler Input ───
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Hapus error saat user mulai mengetik
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // ─── Validasi Form ───
  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.'
    }
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi.'
    else if (formData.message.trim().length < 10) newErrors.message = 'Pesan minimal 10 karakter.'
    return newErrors
  }

  // ─── Submit Form ───
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Buat entry baru
    const newEntry = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      date: new Date().toISOString(),
    }

    // Tambahkan ke daftar (terbaru di atas)
    setMessages(prev => [newEntry, ...prev])

    // Reset form
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
    setSubmitted(true)

    // Sembunyikan pesan sukses setelah 4 detik
    setTimeout(() => setSubmitted(false), 4000)
  }

  // ─── Hapus Semua Pesan ───
  const handleClearAll = () => {
    if (window.confirm('Hapus semua pesan di Guest Book?')) {
      setMessages([])
    }
  }

  return (
    <div className="contact-page">
      {/* ─── Header ─── */}
      <div className="contact-header">
        <span className="section-label">// hubungi saya</span>
        <h1 className="section-title">Contact & Guest Book</h1>
        <div className="section-divider"></div>
      </div>

      {/* ─── Grid Kontak ─── */}
      <div className="contact-grid">
        {/* Kolom Kiri: Info Kontak */}
        <div className="contact-info">
          <p className="contact-intro">
            Punya pertanyaan, ide kolaborasi, atau sekadar ingin berkenalan?
            Jangan ragu untuk menghubungi saya atau tinggalkan pesan di Guest Book!
          </p>

          <div className="contact-links">
            <a
              href="mailto:rizky@example.com"
              className="contact-link-item"
            >
              <span className="contact-link-icon">📧</span>
              <div className="contact-link-text">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">rafifraifrabban@gmail.com</span>
              </div>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <span className="contact-link-icon">🐙</span>
              <div className="contact-link-text">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">github.com/rafifraifrabbani</span>
              </div>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <span className="contact-link-icon">💼</span>
              <div className="contact-link-text">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">linkedin.com/in/rafif</span>
              </div>
            </a>

            <div className="contact-link-item">
              <span className="contact-link-icon">📍</span>
              <div className="contact-link-text">
                <span className="contact-link-label">Lokasi</span>
                <span className="contact-link-value">Bekasi, Jawa Barat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Form Guest Book */}
        <div className="contact-form-wrapper">
          <div className="contact-form-card">
            <h2 className="form-card-title">Tinggalkan Pesan</h2>
            <p className="form-card-sub">
              Pesan kamu akan tersimpan di Guest Book halaman ini.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Nama */}
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Nama <span className="required">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Masukkan nama kamu"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.name && (
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#f87171',
                    marginTop: '0.35rem',
                    display: 'block'
                  }}>
                    ⚠ {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.email && (
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#f87171',
                    marginTop: '0.35rem',
                    display: 'block'
                  }}>
                    ⚠ {errors.email}
                  </span>
                )}
              </div>

              {/* Pesan */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Pesan <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tulis pesanmu di sini..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                />
                {errors.message && (
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#f87171',
                    marginTop: '0.35rem',
                    display: 'block'
                  }}>
                    ⚠ {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Kirim Pesan 🚀
              </button>

              {/* Pesan Sukses */}
              {submitted && (
                <div className="form-success-msg">
                  <span>✅</span>
                  Pesan berhasil dikirim! Terima kasih sudah mengunjungi portofolio saya.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* ─── Guest Book Section ─── */}
      <div className="guestbook-section">
        <div className="guestbook-header">
          <h2 className="guestbook-title">
            📬 Guest Book
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="guestbook-count">
              <span>{messages.length}</span> pesan tersimpan
            </span>
            {messages.length > 0 && (
              <button
                className="btn btn-outline btn-clear"
                onClick={handleClearAll}
              >
                🗑 Hapus Semua
              </button>
            )}
          </div>
        </div>

        {/* Daftar Pesan */}
        {messages.length === 0 ? (
          <div className="guestbook-empty">
            <span className="guestbook-empty-icon">📭</span>
            Belum ada pesan. Jadilah yang pertama!
          </div>
        ) : (
          <div className="guestbook-list">
            {messages.map(entry => (
              <article key={entry.id} className="guestbook-entry">
                <div className="entry-header">
                  <div className="entry-author">
                    <div className="entry-avatar">
                      {getInitials(entry.name)}
                    </div>
                    <div>
                      <p className="entry-name">{entry.name}</p>
                      <p className="entry-email">{entry.email}</p>
                    </div>
                  </div>
                  <span className="entry-date">
                    🕐 {formatDate(entry.date)}
                  </span>
                </div>
                <p className="entry-message">{entry.message}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
