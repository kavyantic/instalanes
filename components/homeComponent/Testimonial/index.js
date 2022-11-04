import React from 'react'
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
  const userdate = [
    {name:"kavya sharma",backgroundUrl:"https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80", details: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."},
    {name:"kavya sharma",backgroundUrl:"https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80", details: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."},
    {name:"kavya sharma",backgroundUrl:"https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80", details: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."},
    {name:"kavya sharma",backgroundUrl:"https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80", details: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."},
    {name:"kavya sharma",backgroundUrl:"https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80", details: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."},
  ];
export default function Testimonial() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
  return (
    <section className="textimonial py-8 mt-4 lg:mt-8">
        <div className="container">
        <h2 className="slider_title mb-4">popular barand we</h2>
            <Slider {...settings}>
            {userdate.map(({ backgroundUrl, name, details }) => {
            return (
                <div className="px-2">
                    <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <img className="object-cover w-full h-96 grayscale hover:grayscale-0 duration-300" src={backgroundUrl} alt="Flower and sky"/>
                        <div className="absolute bottom-0 left-0 px-6 py-4">
                            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">{name}</h4>
                            <p className="leading-normal text-gray-100">{details}</p>
                        </div>
                    </div>
                </div>
            )
             })}
            </Slider>
        </div>
    </section>
  );
}