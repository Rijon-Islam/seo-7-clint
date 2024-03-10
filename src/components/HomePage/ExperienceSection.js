import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExperienceSection = () => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + " slick-arrow ripple-btn"}
        style={{ ...style, left: "-20px" }}
        onClick={onClick}
      >
        <i className="bi bi-arrow-left" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + " slick-arrow ripple-btn"}
        style={{ ...style, right: "-20px" }}
        onClick={onClick}
      >
        <i className="bi bi-arrow-right" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items at a time
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [exprience, setExperience] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:5000/experiences`)
          .then((res) => res.json())
          .then((info) => setExperience(info));
  }, []);


  return (
    <div className="case-study-one dark-bg">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xxl-5 col-xl-6 col-lg-5 col-md-7 col-sm-9">
            <div className="title-style-five white-vr text-center text-sm-start">
              <h2 className="title">Let’s check our case study.</h2>
            </div>
          </div>
          <div className="col-md-5 col-sm-3 d-flex justify-content-center justify-content-sm-end">
            <ul className="slider-arrows d-flex style-none xs-mt-30">
              <li className="prev_case1 slick-arrow ripple-btn" style={{}}><i className="bi bi-arrow-left" /></li>
              <li className="next_case1 slick-arrow ripple-btn" style={{}}><i className="bi bi-arrow-right" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="slider-wrapper">
        <Slider {...settings}>

          {
            exprience.map(e=><div className="item ">
            <div className="case-block-one position-relative">
              <img src={e.sliderImage} alt="" className="img-meta w-100" />
              <div className="hover-content">
                <div className="icon d-flex align-items-center justify-content-center"><img src={e.slidericon} alt="" /></div>
                <blockquote>
                {e.sliderHeading}
                </blockquote>
                <a href={e.websiteURL} className="w-100 d-flex align-items-center justify-content-between">
                  <span className="web">{e.websiteText}</span>
                  <span className="arrow"><i className="bi bi-chevron-right" /></span>
                </a>
              </div> 
            </div> 
          </div>)
          }
          
         
          
          
        </Slider>
      </div> 
      <img src="images/shape/shape_23.svg" alt="" className="shapes shape-one" />
    </div> 
  );
};

export default ExperienceSection;
