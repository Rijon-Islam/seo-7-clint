import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (




    <>

      {
        banners.map(b=>  <div className="box-layout">
        <div className="hero-banner-four">
          <div className="hero_slider_two">
            <div className="item">
              <div className="content-wrapper">
                <img src={b.bannerImage} alt className="hero-img" />
                <div className="slider-inner">
                  <div className="hero-content">
                    <a className="fancybox video-icon d-flex align-items-center justify-content-center" data-fancybox href={b.videoLink}>
                      <img src="images/icon/icon_41.svg" alt />
                    </a>
                    <h2 className="hero-heading position-relative">{b.bannerHeading}</h2>
                    <p className="hero-sub-heading position-relative">{b.bannerDetails}</p>
                    <a href={b.buttonOneLink} className="theme-btn-one border0 ripple-btn">{b.buttonOneText}</a>
                  </div> {/* /.hero-content */}
                </div> {/* /.slider-inner */}
              </div>
            </div>


          </div>
        </div>
      </div>)
      }

     


    </>
  );
};

export default Banner;
