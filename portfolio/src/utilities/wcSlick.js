import React, { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wcHome from "../images/wc-home1200.jpg";
import wcShop from "../images/wc-shop1200.jpg";
import wcContact from "../images/wc-contact1200.jpg";
import wcCatering from "../images/wc-catering1200.jpg";

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
            <img className="single-main-img" src={wcHome} alt="Bakery home page"/>
          </div>
          <div>
           <img className="single-main-img" src={wcShop} alt="Bakery shop page"/>
          </div>
          <div>
            <img className="single-main-img" src={wcContact} alt="Bakery contact page"/>
          </div>
          <div>
            <img className="single-main-img" src={wcCatering} alt="Bakery catering page"/>
          </div>
        </Slider>
      </div>
    );
  }
}