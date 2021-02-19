import React, { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mockupHome from '../images/movie-mockup-home.png';
import mockupSingle from '../images/movie-mockup-single.png';
import mockupFav from '../images/movie-mockup-favourites.png';

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
            <img className="single-main-img" src={mockupHome} alt="movie mockup home page"/>
          </div>
          <div>
           <img className="single-main-img" src={mockupSingle} alt="movie mockup single page"/>
          </div>
          <div>
            <img className="single-main-img" src={mockupFav} alt="movie mockup favourites page"/>
          </div>
        </Slider>
      </div>
    );
  }
}