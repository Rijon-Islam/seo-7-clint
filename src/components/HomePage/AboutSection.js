import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (



    <>

<div className="vcamp-text-block-three dark-bg">
  <div className="container">
    {
      about.map(a=><div className="row align-items-center">
      <div className="col-md-6 ms-auto order-md-last" data-aos="fade-left">
        <div className="text-wrapper">
          <h6>{a.aboutText}</h6>
          <p>{a.aboutHeading}</p>
          <div className="name position-relative">{a.aboutPointOne}</div>
        </div>
      </div>
      <div className="col-md-6 text-md-start text-center" data-aos="fade-right">
        <div className="img-container position-relative d-inline-block sm-mt-50">
          <img src={a.aboutImg} alt="about" />
        </div>
      </div>
    </div>)
    }
    
  </div>
  <img src="images/shape/shape_22.svg" alt="" className="shapes shape-one" />
</div>






    </>
  );
};

export default AboutSection;
