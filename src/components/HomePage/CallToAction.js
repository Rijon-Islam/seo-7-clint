import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CallToAction = () => {

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));


  }, []);



  

  return (
    

    <>

    {
      action.map(c=> <div className="fancy-banner-one mt-200 lg-mt-120">
      <div className="inner-content position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title-style-five white-vr">
                <h2 className="title">{c.heading}</h2>
              </div>
            </div>
            <div className="col-xl-5 col-md-6 ms-auto">
              <p className="sm-pt-20">{c.subHeading}</p>
              <a href={c.buttonLink} className="theme-btn-one ripple-btn">{c.buttonText} <img src="images/icon/icon_42.svg" alt /></a>
            </div>
          </div>
        </div>
      </div>
    </div> )
    }




    </>
  );
};

export default CallToAction;