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
  const brands = [
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",},
    {link:"kavya sharma",icon:"https://seeklogo.com/images/O/oneplus-logo-B6703954CF-seeklogo.com.png",},
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",},
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",},
    {link:"kavya sharma",icon:"https://seeklogo.com/images/O/oneplus-logo-B6703954CF-seeklogo.com.png",},
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",},
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",},
    {link:"kavya sharma",icon:"https://seeklogo.com/images/O/oneplus-logo-B6703954CF-seeklogo.com.png",},
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",},
  ];
export default function Brand() {
    const settings = {
        infinite: true,
        speed: 500,
        infinite: true,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
  return (
    <section className="brands py-8">
        <div className="container">
        <h2 className="slider_title mb-4">popular barand we <span>repair</span></h2>
            <Slider {...settings}>
            {brands.map(({icon, link}) => {
            return (
                <div>
                    <a href={link} className="">
                        <img src={icon} className="h-20 m-6"/>
                    </a>
                </div>
            )
             })}
            </Slider>
        </div>
    </section>
  );
}