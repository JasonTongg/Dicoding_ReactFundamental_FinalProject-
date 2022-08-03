import React from 'react'
import './styles/catatanAktif.css'
import CatatanItem from './catatanItem'

export default function catatan({judul}) {
  let date = new Date();
  let day = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Desember'];
  // {day[date.getDay()]}, {date.getDay()} {month[date.getMonth()]} {date.getYear()}

  return (
    <div className='containerCatatan'>
      <h2>{judul}</h2>
      <div className="containerCatatanItems">
        <CatatanItem></CatatanItem>
        <CatatanItem></CatatanItem>
        <CatatanItem></CatatanItem>
        <CatatanItem></CatatanItem>
      </div>
    </div>
  )
}
