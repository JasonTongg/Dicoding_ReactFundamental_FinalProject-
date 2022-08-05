import React from 'react'
import Catatan from './catatan'
import './styles/note.css'

export default function note(props) {
  return (
    <div className='container'>
        <Catatan judul="Catatan Aktif" setAktif={props.setAktif} aktif={props.aktif} arsip={props.arsip} setArsip={props.setArsip} Aktif={props.Aktif} Arsip={props.Arsip} SetAktif={props.SetAktif} SetArsip={props.SetArsip}></Catatan>
        <Catatan judul="Catatan Arsip" setAktif={props.setAktif} aktif={props.aktif} arsip={props.arsip} setArsip={props.setArsip} Aktif={props.Aktif} Arsip={props.Arsip} SetAktif={props.SetAktif} SetArsip={props.SetArsip}></Catatan>
    </div>
  )
}