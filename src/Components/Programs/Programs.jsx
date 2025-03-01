import React from 'react'
import './Programs.css'
import program_1 from '../../Assets/images/program-1.png'
import program_2 from '../../Assets/images/program-2.png'
import program_3 from '../../Assets/images/program-3.png'
import program_icon_1 from '../../Assets/images/program-icon-1.png'
import program_icon_2 from '../../Assets/images/program-icon-2.png'
import program_icon_3 from  '../../Assets/images/program-icon-3.png'
const Programs = () => {
  return (
    <div className='Programs'>
<div className='Program'>
<img src={program_1} alt=""/>
<div className='caption'>
<img src={program_icon_1} alt=""/>
<p>Graduation Degree</p>
</div>
</div>
<div className='Program'>
<img src={program_2} alt=""/>
<div className='caption'>
<img src={program_icon_2} alt=""/>
<p>master Degree</p>
</div>
</div>
<div className='Program'>
<img src={program_3} alt=""/>
<div className='caption'>
<img src={program_icon_3} alt=""/>
<p>postGrad Degree</p>
</div>
</div>
    </div>
  )
}

export default Programs