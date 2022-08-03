import React from 'react'
import Catatan from './catatan'
import './styles/note.css'

export default function note() {
  return (
    <div className='container'>
        <Catatan judul="Catatan Aktif"></Catatan>
        <Catatan judul="Catatan Arsip"></Catatan>
    </div>
  )
}