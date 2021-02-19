import React, { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cineflixImg from '../images/movie-app-home.png';
import cineflixHome from '../images/react-slideshow-home.png'
import cineflixAbout from '../images/react-slideshow-about.png';
import cineflixFav from '../images/react-slideshow-favourites.png'
import cineflixSingle from '../images/react-slideshow-individual.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      cssEase: 'linear'
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="single-main-img" src={cineflixImg} alt="React movie app home page"/>
          </div>
          <div>
           <img className="single-main-img" src={cineflixHome} alt="React movie app home page"/>
          </div>
          <div>
            <img className="single-main-img" src={cineflixAbout} alt="React movie app home page"/>
          </div>
          <div>
            <img className="single-main-img" src={cineflixFav} alt="React movie app home page"/>
          </div>
          <div>
            <img className="single-main-img" src={cineflixSingle} alt="React movie app home page"/>
          </div>
        </Slider>
      </div>
    );
  }
}