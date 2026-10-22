import React from 'react'
import { MessageSquareText } from "lucide-react";
import { Phone } from "lucide-react";
import'./hero.css'
export const Hero = () => {
  return (
    <div>
       
     <div className="maincontainer">
            <div className="first_content">
            <h1 className='main_heading'> CONTACT US</h1>
            <p className='paragraph'> LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR <br /> JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR <br />SOCIAL MEDIA.</p>
            </div>
            </div>
 <div className='main'>
<div className="hero_button">
 <div className="button">
<button className='message'>
 <MessageSquareText
        size={22}
        color="#faf5f5"
        strokeWidth={2}
      /> 
    VIA SUPPORT CHAT
</button>
<button className='call'> 
    <Phone />
      VIA CALL 
</button>

   </div>
<div className=' email '> 
    <MessageSquareText
        size={22}
        color="#0a0a0a"
        strokeWidth={2}
      />
    VIA EMAIL FORM
    </div>
    <div className="input-box">
  <fieldset>
    <legend className='tag'>Name</legend>
    <input className='input-text' type="text" name="name" />
  </fieldset>
</div>
 <div className="input-box">
  <fieldset>
    <legend className='tag'>E-Mail</legend>
    <input className='input-text' type="text" name="email" />
  </fieldset>
</div>
 <div className="input-box2">
  <fieldset>
    <legend className='tag'>TEXT</legend>
    <input className='input-text' type="text" name="message" />
  </fieldset>
</div>
   <button className='submit'>SUBMIT</button>
        </div>
        
<div className="image">
    <img src="./public/images/contact.svg" alt="contact_image" />
</div>
</div>

</div>
   
  )
}
