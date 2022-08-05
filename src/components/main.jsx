import React from 'react'
import Form from './form'
import './styles/main.css'
import Note from './note'

export default function Main(props) {
  return (
    <main>
        <Form setAktif={props.setAktif} aktif={props.aktif} Aktif={props.Aktif} SetAktif={props.SetAktif}></Form>
        <Note setAktif={props.setAktif} aktif={props.aktif} arsip={props.arsip} setArsip={props.setArsip} Aktif={props.Aktif} Arsip={props.Arsip} SetAktif={props.SetAktif} SetArsip={props.SetArsip}></Note>
    </main>
  )
}
