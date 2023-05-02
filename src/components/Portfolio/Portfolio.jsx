import React from 'react'
import Container from '../../layout/Container'
import classes from './portfolio.module.css'
import movie from '../../assets/movie.png'
import movieSearch from '../../assets/movieSearch.png'
import floristman from '../../assets/floristman.png'
const Portfolio = () => {
  return (
    <Container>
        <p className={classes['project']} data-aos="fade-up" id='portfolio'>My projects</p>
        <h2 className={classes['portfolio']} data-aos="fade-down">Portfolio</h2>
        <div className={classes['portfolio__proekts']}>
          <div className={classes['portfolio__proekts__item']}>
           <div className={classes['portfolio__proekts-img']} data-aos="flip-left">
            <img src={movieSearch} alt="movie" />
            <img src={movie} alt="movie" />
           </div>
            <div className={classes['portfolio__proekts-info']}>
              <h2 className={classes['portfolio__proekts-info__title']} data-aos="fade-up">Movie App</h2>
              <p className={classes['portfolio__proekts-info__text']} data-aos="zoom-in">
              This is a movie site. You can search for movies and watch movie trailers on this site. I create websites using HTML, CSS, JavaScript.It is a adapted web site for mobile and tablet!
              </p>
              <div data-aos="fade-up">
               <a href="https://movie-api-search-j.netlify.app" className={classes['portfolio__proekts-info__link']}>Viev Page</a>
              </div>
             </div>
          </div>
    <div className={classes['portfolio__proekts__item']}>
       <div className={classes['portfolio__proekts-img-florist']}data-aos="flip-right">
            <img src={floristman} alt="floristman" />
       </div>
            <div className={classes['portfolio__proekts-info']}>
              <h2 className={classes['portfolio__proekts-info__title']} data-aos="fade-up">Floristman Internet Magazine</h2>
              <p className={classes['portfolio__proekts-info__text']} data-aos="zoom-in">
              This is an internet magazine, you can find what you need on this website. This website is connected to telegram bot, ordered products will go to telegram bot. The owner of the product sees these orders using Telegram bot. I create website using HTML, CSS, SCSS, JavaScript,React,redux-toolkit.It is a adapted web site for mobile and tablet!
              </p>
              <div data-aos="fade-up">
               <a href="https://floristman-app-121p.vercel.app/" className={classes['portfolio__proekts-info__link']}>Viev Page</a>
              </div>
             </div>
          </div>
        </div>

    </Container>
  )
}

export default Portfolio