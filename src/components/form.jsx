import React from 'react'
import './styles/form.css'
import {showFormattedDate} from '../Data'

export default function form(props) {
  let pushData = (e) => {
    e.preventDefault();
    let date = new Date();
    let formatDate = showFormattedDate(date);
    let title = document.querySelector(".form input").value;
    let catatan = document.querySelector(".form textarea").value;
    props.setAktif([...props.aktif, {id: props.aktif.length+1, title: title, body: catatan, archived: false, createdAt: formatDate}])
    props.SetAktif([...props.Aktif, {id: props.aktif.length+1, title: title, body: catatan, archived: false, createdAt: formatDate}])
    document.querySelector(".form input").value = "";
    document.querySelector(".form textarea").value = "";
  }

  let jumlah = (e) => {
    if(e.target.value.length > 50){
      e.target.value = e.target.value.slice(0,50);
      return;
    }
    let jumlahKarakter = document.querySelector(".form p");
    jumlahKarakter.innerText = `Sisa Karakter: ${50-e.target.value.length}`;
  }

  return (
    <form onSubmit={pushData} className="form">
      <h2>Buat Catatan</h2>
      <p>Sisa Karakter: 50</p>
      <input type="text" placeholder='Input Judul...' onChange={jumlah}/>
      <textarea cols="30" rows="10" placeholder='Input Catatan...'></textarea>
      <button>Buat</button>
    </form>
  )
}
