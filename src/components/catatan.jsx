import React from 'react'
import './styles/catatanAktif.css'
import CatatanItem from './catatanItem'
import {showFormattedDate} from '../Data'

export default function catatan(props) {
  let date = new Date();
  return (
    <div className='containerCatatan'>
      <h2>{props.judul}</h2>
      <div className="containerCatatanItems">
        {props.judul === "Catatan Aktif" ? props.aktif.map(item => (
          <CatatanItem judul={item.title} date={showFormattedDate(date)} catatan={item.body} button="Arsipkan" key={item.id} id={item.id} type="Aktif" setArsip={props.setArsip} arsip={props.arsip} setAktif={props.setAktif} aktif={props.aktif} Aktif={props.Aktif} Arsip={props.Arsip} SetAktif={props.SetAktif} SetArsip={props.SetArsip}></CatatanItem>
        )) : props.arsip.map(item => (
          <CatatanItem judul={item.title} date={showFormattedDate(date)} catatan={item.body} button="Pindahkan" key={item.id} id={item.id} type="Arsip" setArsip={props.setArsip} arsip={props.arsip} setAktif={props.setAktif} aktif={props.aktif} Aktif={props.Aktif} Arsip={props.Arsip} SetAktif={props.SetAktif} SetArsip={props.SetArsip}></CatatanItem>
        ))}
      </div>
    </div>
  )
}
