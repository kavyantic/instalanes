import React, { Component } from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}
const offerLInk = [
  {link:"",backgroundUrl:"https://images.unsplash.com/photo-1610653216265-74079d187414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},
  {link:"",backgroundUrl:"https://images.unsplash.com/photo-1610653216265-74079d187414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},
  {link:"",backgroundUrl:"https://images.unsplash.com/photo-1610653216265-74079d187414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},
  {link:"",backgroundUrl:"https://images.unsplash.com/photo-1610653216265-74079d187414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},
  {link:"",backgroundUrl:"https://images.unsplash.com/photo-1610653216265-74079d187414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},
];
export default class MultiSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="container">
        <h2 className="slider_title mb-4">popular barand we <span>repair</span></h2>
        <Slider {...settings}>
        {offerLInk.map(({ backgroundUrl, link }) => {
            return (
              <div key={link} className="mb-2">
                  <a
                    rel="noopener noreferrer"
                    className=""
                    href={link}
                  >
                    <img src={backgroundUrl} alt={backgroundUrl} className="w-full p-2 rounded-2xl"></img>
                  </a>
              </div>
            );
         })}
        </Slider>
      </div>
    );
  }
}