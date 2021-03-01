import React, { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cineflixImg from '../images/movie-app-home1200.jpg';
import cineflixHome from '../images/react-slideshow-home1200.jpg'
import cineflixAbout from '../images/react-slideshow-about1200.jpg';
import cineflixFav from '../images/react-slideshow-favourites1200.jpg'
import cineflixSingle from '../images/react-slideshow-individual1200.jpg';

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