import React from 'react'
import { useState } from 'react'
import Container from '../../layout/Container'
import classes from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faTelegram} from "@fortawesome/free-brands-svg-icons"
import {  faUser,faEnvelope,faComment,faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'


const Contact = () => { 
  const emailto = "jamshidmirazamov@gmail.com";


  const [user, setuser] = useState('')    
  const [email, setemail] = useState('')
  const [massage, setmassage] = useState('')


  let telegram_bot_id = "6044421804:AAHHoJoX1szgVpwZBVxVxiAH6YKtBHzlL2M";
  let chat_id = 602198486; 
  let u_name, u_email, message;
  let ready = function() {
      u_name = user;
      u_email = email;
      message = massage;
      message = "Ismi: " + u_name + "\nEmail: " + u_email + "\nIzoh: " + message;
  };

  let sendtelegram = function(e)  {
    ready();
    
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
    });

    e.preventDefault()
    setemail('')
    setmassage('')
    setuser('')
};

  return (
<div className={classes['contact']}>
    <Container>
       <section className={classes['contact-container']}>

         <form className={classes["contact-form"]} onClick={sendtelegram} data-aos="flip-right" >
           <div className={classes["heading"]} >
             <h2 id='contact'>CONTACT US</h2>
             <p>feel free to reach out to us, we'd love to hear from you!</p>
           </div>
           <div className={classes["input"]}>
             <i><FontAwesomeIcon icon={faUser} /></i> 
             <input name="username" type="text" placeholder="Username" onChange={(e)=>setuser(e.target.value)} value={user} required/>
           </div>
           <div className={classes["input"]}>
             <i><FontAwesomeIcon icon={faEnvelope} /></i>
             <input name="email" type="email" required placeholder="Email" onChange={(e)=>setemail(e.target.value)} value={email} />
           </div>
           <div className={classes["input"]}>
             <i><FontAwesomeIcon icon={faComment} /></i>
             <textarea name="message" cols="30" rows="10" placeholder="Message" onChange={(e)=>setmassage(e.target.value)} value={massage}re></textarea>
           </div>
           <button className={classes["button"]}>SEND</button>
         </form>

         <div className={classes["contact-info"]} data-aos="fade-up">
           <h3 className={classes["heading"]}>OUR INFORMATIONS</h3>
           <ul className={classes["contacts"]}>
             <li>
               <i class="fa-solid fa-location-dot"><FontAwesomeIcon icon={faLocationDot} /></i>
               Tashkent, Uzbekistan
             </li>
             <li>
             <i><FontAwesomeIcon icon={faEnvelope} /></i>
               <a href = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/jamshidmirazamov%40gmail.com'>jamshidmirazamov@gmail.com</a>
             </li>
             <li>
               <i><FontAwesomeIcon icon={faPhone} /></i>
              998 90 937-86-98
             </li>
             <li className={classes['social-media__list']}>
                 <div className={classes['social-media']}>
                    <a href="https://github.com/Jamshid937"><FontAwesomeIcon icon={faGithub} /></a>
                 </div>
                 <div className={classes['social-media']}>
                    <a href="https://t.me/jamshid_937"><FontAwesomeIcon icon={faTelegram} /></a>
                 </div>
                 <div className={classes['social-media']}>
                    <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/jamshidmirazamov%40gmail.com'><FontAwesomeIcon icon={faEnvelope} /></a>
                 </div>
             </li>
           </ul>            
           </div>
       </section>
   </Container>
 </div>
  )
}

export default Contact