import React from 'react'
import './About.css'
import about_img from '../../Assets/images/about.png'
import play_icon from '../../Assets/images/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
<img src={about_img} alt='' className='about-img'/>
<img src={play_icon} alt='' className='play-icon' onClick={()=>{
  setPlayState(true)
}}/>

        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
            Our university is a place where students can grow and develop their skills, knowledge, and character.
            Our university is a place where students can grow and develop their skills, knowledge, and character.
            Our university is a place where students can grow and develop their skills, knowledge, and character.

            </p>
            <p>                Our university is a place where students can grow and develop their skills, knowledge, and character.
            Our university is a place where students can grow and develop their skills, knowledge, and character.

                Our university is a place where students can grow and develop their skills, knowledge, and character.
            </p>

            <p>                Our university is a place where students can grow and develop their skills, knowledge, and character.
            Our university is a place where students can grow and develop their skills, knowledge, and character.

                Our university is a place where students can grow and develop their skills, knowledge, and character.
            </p>
            </div>
    </div>
  )
}

export default About