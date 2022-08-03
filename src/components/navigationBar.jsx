import React from 'react'
import './styles/navigationBar.css'

export default function navigationBar() {
  return (
    <nav>
        <h2>MyNote</h2>
        <input type="text" className='searchBar' placeholder='Search...'/>
    </nav>
  )
}
