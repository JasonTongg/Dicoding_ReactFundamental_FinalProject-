import React from 'react'
import './styles/form.css'

export default function form() {
  return (
    <form>
      <h2>Buat Catatan</h2>
      <p>Jumlah Karakter: 0/50</p>
      <input type="text" placeholder='Input Judul...'/>
      <textarea cols="30" rows="10" placeholder='Input Catatan...'></textarea>
      <button>Buat</button>
    </form>
  )
}
