import React from 'react'
import Container from '../../layout/Container'
import classes from './resume.module.css'
import resume from '../../assets/resume.png'
const Resume = () => {
  return (
    <Container>
        <p className={classes['resume']} id='resume'data-aos="fade-up">
            My Resume
        </p>
        <h2 className={classes['resume__title']}data-aos="fade-down">Resume</h2>
        <div className={classes['resume__img']} data-aos="fade-up">
            <img src={resume} alt="resume" />
        </div>
    </Container>
  )
}

export default Resume