import React from 'react'
import './styles/navigationBar.css'

export default function navigationBar(props) {
  let aktif = props.Aktif;
  let arsip = props.Arsip;
  let search = (e) => {
    let filterAktif = aktif.filter(item => item.title.includes(e.target.value));
    let filterArsip = arsip.filter(item => item.title.includes(e.target.value));

    props.setAktif(filterAktif);
    props.setArsip(filterArsip);
  }

  return (
    <nav>
        <h2>MyNote</h2>
        <input type="text" className='searchBar' placeholder='Search...' onChange={search}/>
    </nav>
  )
}
