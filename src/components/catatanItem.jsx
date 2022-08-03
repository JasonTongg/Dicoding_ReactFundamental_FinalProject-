import React from 'react'
import './styles/catatanItem.css'

export default function catatanItem(props) {
    let date = new Date();
    let day = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Desember'];

    return (
        <div className="item">
            <div className="info">
                <h3>ini Judul</h3>
                <p>{day[date.getDay()]}, {date.getDay()} {month[date.getMonth()]} {date.getYear()}</p>
                <p>ini Catatan... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque temporibus debitis veniam a sunt libero fugit eos, culpa neque cumque!</p>
            </div>
            <div className="buttons">
                <button>Delete</button>
                <button>Arsipkan</button>
            </div>
        </div>
    //     <div className="item">
    //     <div className="info">
    //         <h3>{props.judul}</h3>
    //         <p>{props.judul}</p>
    //         <p>{props.catatan}</p>
    //     </div>
    //     <div className="buttons">
    //         <button>Delete</button>
    //         <button>{props.button}</button>
    //     </div>
    // </div>
    )
}
