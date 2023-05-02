import React from 'react'
import 'aos/dist/aos.css';
import classes from './Header.module.css'

import NavBar from '../NavBar/NavBar';
const Header = () => {


  return (
  <div className={classes['back-img']} id='home'>
<NavBar />
     <div className={classes['heading']} id='x'>
        <div>
          <p className={classes['slide-up']}><span className={classes['green']}>Mira'zamov Jamshid</span>,</p>
        </div>
        <div>
          <p className={classes['slide-up']}>web developer</p>
        </div>
     </div>
     
  </div>
  )
}

export default Header