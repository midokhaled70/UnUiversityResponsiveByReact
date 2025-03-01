import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/images/dark-arrow.png'
export const Hero = () => {
  return (
    <div className='hero '>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>
            Ensure better education for a better world
cutting-edge curriculum is designed to emp
e knowledge, skills, and experiences neede
            </p>
            <button className='btn2'>Explore More <img src={dark_arrow} alt=""/></button>
        </div>
    </div>
  )
}
