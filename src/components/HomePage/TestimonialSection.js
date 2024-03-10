import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  
  const [countersec, setCounter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/counters`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (
  



<>

<div className="feedback-section-seven mt-180 lg-mt-110">
  <div className="container">
    <div className="row">
      <div className="col-md-6 ms-auto">
        <div className="ps-xl-5">
          {
            testimonialtext.map(t=>  <div className="title-style-five">
            <div className="upper-title">{t.testimonialText}</div>
            <h2 className="title">{t.testimonialHeading}</h2>
          </div>)
          }
        
          <div className="feedback_slider_six mt-80 lg-mt-40">

            {
              testimonial.map(i=><div className="item">
              <div className="feedback-wrapper">
                <div className=" align-items-center justify-content-center"><img src={i.image} alt /></div>
                <blockquote>{i.desc}</blockquote>
                <h6 className="name">{i.personName}, <span>{i.personTitle}</span></h6>
              </div>
            </div>  )
            }
            
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {
    countersec.map(c=>   <div className="counter-section-two" data-aos="fade-right">
    <img src={c.counterImage} alt className="img-meta w-100" />
    <div className="counter-container">
      <div className="row g-0">
        <div className="col-6">
          <div className="counter-block-two text-center">
            <div className="main-count font-recoleta">{c.happyClientsNumber}K</div>
            <p>{c.happyClientsText}</p>
          </div> {/* /.counter-block-two */}
        </div>
        <div className="col-6">
          <div className="counter-block-two text-center bg-color">
            <div className="main-count font-recoleta">{c.projectCompleteNumber}K+</div>
            <p>{c.projectCompleteText}</p>
          </div> {/* /.counter-block-two */}
        </div>
      </div>
    </div> {/* /.counter-container */}
  </div> )
  }

</div> 



</>
  );
};

export default TestimonialSection;
