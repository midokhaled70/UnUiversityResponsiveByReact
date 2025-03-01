import React,{useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/images/next-icon.png'
import back_icon from '../../Assets/images/back-icon.png'
import user_1 from '../../Assets/images/user-1.png'
import user_2 from '../../Assets/images/user-2.png'
import user_3 from '../../Assets/images/user-3.png'
import user_4 from '../../Assets/images/user-4.png'



const Testimonials = () => {
const slider=useRef();
let tx=0;

const slideForward =()=>{
    if(tx>-50){
        tx-=25
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}
const slideBackward =()=>{
    if(tx <0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;

}
  return (
   
    <div className='testimonials'>
  
<img src={next_icon} alt=''  className='naxt-btn' onClick={slideForward}  />
<img src={back_icon} alt=''  className='back-btn' onClick={slideBackward}  />

<div className='slider'>
    <ul ref={slider}>
        <li>
            <div className="slide">
                <div className='user-info'>

<img src={user_1} alt=""/>
<div>
    <h3>william Jackson</h3>
    <span>Edusity ,USA</span>
</div>
                </div>
                <p>
                Ing to pursue my degree at Edusity was one of
decisions I 've ever made. The supportive
y, state-of-the-art facilities, and commitment
mic excellence have truly exceeded my
                </p>
            </div>
        </li>

        <li>
            <div className='slide'>
                <div className='user-info'>

<img src={user_2} alt=""/>
<div>
    <h3>william Jackson</h3>
    <span>Edusity ,USA</span>
</div>
                </div>
                <p>
                Ing to pursue my degree at Edusity was one of
decisions I 've ever made. The supportive
y, state-of-the-art facilities, and commitment
mic excellence have truly exceeded my
                </p>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className='user-info'>

<img src={user_3} alt=""/>
<div>
    <h3>william Jackson</h3>
    <span>Edusity ,USA</span>
</div>
                </div>
                <p>
                Ing to pursue my degree at Edusity was one of
decisions I 've ever made. The supportive
y, state-of-the-art facilities, and commitment
mic excellence have truly exceeded my
                </p>
            </div>
        </li>

        <li>
            <div className='slide'>
                <div className='user-info'>

<img src={user_4} alt=""/>
<div>
    <h3>william Jackson</h3>
    <span>Edusity ,USA</span>
</div>
                </div>
                <p>
                Ing to pursue my degree at Edusity was one of
decisions I 've ever made. The supportive
y, state-of-the-art facilities, and commitment
mic excellence have truly exceeded my
                </p>
            </div>
        </li>
    </ul>

</div>
    </div>
  )
}

export default Testimonials