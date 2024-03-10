import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (






    <>
      <div className="vcamp-feature-section-three mt-200 lg-mt-120 mb-120">
        <div className="container">
          <div className="row align-items-center mb-50 md-mb-20">
            <div className="col-lg-5 col-md-6 col-sm-8" data-aos="fade-right">
              {
                service.map(s=> <div className="title-style-four">
                <h2 className="title">{s.serviceHeading}</h2>
                
                
              </div>)
              }
             
            </div>
            <div className="col-md-6 col-sm-4 me-auto text-sm-end text-start" data-aos="fade-left">
              <a href="serviceV1.html" className="theme-btn-five position-relative xs-mt-30"></a>
            </div>
          </div>
          <div className="row">

            {
              items.map(e => <div className="col-lg-3 col-sm-6" data-aos="fade-up">
                <div className="card-style-three mt-50">
                  <div className="icon d-flex align-items-center justify-content-center"><img src={e.serviceIcon} alt className="tran3s" /></div>
                  <h4 className="title">{e.serviceTitle}</h4>
                  <ul className="style-none">
                    <p>{e.serviceDetails}</p>
                  </ul>
                </div>
              </div>)
            }


          </div>
        </div>
      </div>



    </>


  );
};

export default ServicesSection;
