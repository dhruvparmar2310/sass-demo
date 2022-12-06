/* eslint-disable react/prop-types */
import React from 'react'
import './style.scss'

export default function Intro ({ logo, title, desc }) {
  return (
    <>
        <div className='card'>
            <h1 className='card-logo'>{logo}</h1>
            <p className='card-title'>{title}</p>
            <p className='card-desc'>{desc}</p>
        </div>
    </>
  )
}
