import React from 'react'
import './Contacts.css'
import msg_icon from '../../Assets/images/msg-icon.png'
import mail_icon from '../../Assets/images/mail-icon.png'
import phone_icon from '../../Assets/images/phone-icon.png'
import location_icon from '../../Assets/images/location-icon.png'
import white_arrow from '../../Assets/images/white-arrow.png'

export const Contacts = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5988fc68-e35b-46f5-b5a6-6356736e04a9");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


  return (
    <div className='contact'>
    <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
        Feel free to reach out through contact form or find our contact
ormation below. Your feedback, questions, and suggestions are
ortant to us as we strive to provide exceptional service to our
        </p>
        <ul>
            <li><img src={mail_icon} alt=''/>ahmeddkhaled224@gmail.com</li>
            
            <li><img src={phone_icon} alt=''/>+20 103 048 00 83</li>

            <li><img src={location_icon} alt=''/>33 cairo Giza</li>

        </ul>
    </div>

    <div className='contact-col'>
<form onSubmit={onSubmit}>
    <label>your name</label>
    <input type="text" name="name" placeholder="your name" required/>
    <label>phone number</label>
    <input type="tel" name="phone" placeholder="your phone" required/>
<label>Write your messages</label>
<textarea name='message' rows="6" placeholder='Enter your message'required>

</textarea>
<button type='submit' className='btn2 dark-btn'>
submit now <img src={white_arrow} alt=''/>
</button>
</form>
<span>{result}</span>
    </div>

</div>
  )
}
