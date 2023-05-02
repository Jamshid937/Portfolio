import React from 'react'
import classes from './About.module.css'
import Container from '../../layout/Container'
import AOS from 'aos';
import 'aos/dist/aos.css';
import about from '../../assets/about.jpg'
import user from '../../assets/user.svg'
import location from '../../assets/location.svg'
import education from '../../assets/education.svg'
import university from '../../assets/university.svg'
import email from '../../assets/email.svg'
const About = () => {
  return (
    <Container>
       <h2 id='about' className={classes['about']} data-aos="zoom-in-up">About Me</h2> 
       <div className={classes['about__text-box']} >
       <p className={classes['about__text']} data-aos="fade-up"> 
         Hi everyone! I am Mira'zamov Jamshid and I am a web developer. This is my portfolio website and you can see my web projects
        </p>
       </div>
       <div className={classes['about__hero']}>
        <div className={classes['about__hero__img']} data-aos="flip-up">
          <img src={about} alt="" />
        </div> 
        <div className={classes['about__info']} data-aos="fade-up"
         data-aos-duration="300">
          <p className={classes['about__info__text']}><span className={classes['about__info__icon']}><img src={user} alt="user"/>Name:</span>Mira'zamov Jamshid </p>
          <p className={classes['about__info__text']}><span className={classes['about__info__icon']}><img src={location} alt="location"/>Addres:</span>Tashkent, Uzbekistan</p>
          <p className={classes['about__info__text']}><span className={classes['about__info__icon']}><img src={education} alt="university"/>University:</span>Toshkent Amaliy Fanlar University,computer engineering</p>
          <p className={classes['about__info__text']}><span className={classes['about__info__icon']}><img src={university} alt="education"/>Education Center:</span>Najot Ta'lim</p>
          <p className={classes['about__info__text']}><span className={classes['about__info__icon']}><img src={email} alt="email"/>Gmail:</span>jamshidmirazamov@gmail.com</p>
        </div>
       </div> 
    </Container>
  )
}

export default About