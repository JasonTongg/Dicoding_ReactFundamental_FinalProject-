import React from 'react'
import './styles/catatanItem.css'

export default function catatanItem(props) {

    let pindah = (e) => {
        if(props.type === "Aktif"){
            let newAktif = props.aktif.filter(item => item.id !== props.id);
            props.setArsip([...props.arsip, {id: props.id, title: props.judul, body: props.catatan, archived: false, createdAt: props.date}])
            props.setAktif(newAktif);
            let Aktif = props.Aktif.filter(item => item.id !== props.id);
            props.SetArsip([...props.Arsip, {id: props.id, title: props.judul, body: props.catatan, archived: false, createdAt: props.date}])
            props.SetAktif(Aktif);

        }
        else{
            let newArsip = props.arsip.filter(item => item.id !== props.id);
            props.setAktif([...props.aktif, {id: props.id, title: props.judul, body: props.catatan, archived: false, createdAt: props.date}])
            props.setArsip(newArsip);
            let Arsip = props.Arsip.filter(item => item.id !== props.id);
            props.SetAktif([...props.Aktif, {id: props.id, title: props.judul, body: props.catatan, archived: false, createdAt: props.date}])
            props.SetArsip(Arsip);
        }
    }

    let hapus = () => {
        if(props.type === "Aktif"){
            let newAktif = props.aktif.filter(item => item.id !== props.id);
            props.setAktif(newAktif);
            let Aktif = props.Aktif.filter(item => item.id !== props.id);
            props.SetAktif(Aktif);
        }
        else{
            let newArsip = props.arsip.filter(item => item.id !== props.id);
            props.setArsip(newArsip);
            let Arsip = props.Arsip.filter(item => item.id !== props.id);
            props.SetArsip(Arsip);
        }
    }

    return (
    <div className="item">
        <div className="info">
            <h3>{props.judul}</h3>
            <p>{props.date}</p>
            <p>{props.catatan}</p>
        </div>
        <div className="buttons">
            <button onClick={hapus}>Delete</button>
            <button onClick={pindah}>{props.button}</button>
        </div>
    </div>
    )
}
