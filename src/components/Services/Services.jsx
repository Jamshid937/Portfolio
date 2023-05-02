import React from 'react'
import Container from '../../layout/Container'
import classes from './services.module.css'
import code from '../../assets/code.svg'
import devises from '../../assets/devices.svg'
import student from '../../assets/student.svg'
const Services = () => {
  return (
    <Container>
       <h2 className={classes['services']} id='services' data-aos="fade-up">Services</h2>
       <div className={classes['services__cards']} data-aos="fade-down">
        <div className={classes['services__cards__item']}>
            <h2 className={classes['services__cards__item-title']}>Web Development</h2>
            <img src={code} alt="frontend" />
            <p className={classes['services__cards__item-text']}>
              I create websites using HTML, SCSS, CSS, JavaScript, React, redux-toolkit, Bootstrap, Tailwind css. I am a Web Developer and you can see what I have done from the Portfolio section. If you need a website, contact me via social media!
            </p>
        </div>
        <div className={classes['services__cards__item']}>
            <h2 className={classes['services__cards__item-title']}>RESPONSIVE DESIGN</h2>
            <img src={devises} alt="frontend" />
            <p className={classes['services__cards__item-text']}>
              I adapt websites for tablets and phones.Web developers make the site mobile-friendly as well.
            </p>
        </div>
        <div className={classes['services__cards__item']}>
            <h2 className={classes['services__cards__item-title']}>Student</h2>
            <img src={student} alt="frontend" />
            <p className={classes['services__cards__item-text']}>
            I am currently a student, learning new information in the field of IT and applying it in projects.
            </p>
        </div>
       </div>
    </Container>
  )
}

export default Services