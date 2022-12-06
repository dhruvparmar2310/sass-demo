/* eslint-disable react/prop-types */
import React from 'react'
import './style.scss'

export default function ServiceCard ({ src, title, desc }) {
  return (
    <>
      <div className='service-card'>
        <img src={src} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <button>Read More</button>
      </div>
    </>
  )
}
