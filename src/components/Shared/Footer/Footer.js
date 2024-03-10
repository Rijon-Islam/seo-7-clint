import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        
        alert('Subscribers is Updated');
      });


  }










  return (

    <>
<footer className="vcamp-footer-two dark-footer pt-150 lg-pt-100">
  <div className="container">
    <div className="row">
      <div className="col-xl-3 col-lg-2 mb-40">
        {
          logo.map(l=> <div className="logo"><a href="index.html"><img src={l.logo} alt /></a></div>)
        }
        
        
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6 mb-40">
        <h5 className="title">Links</h5>
        <ul className="footer-list style-none">
          <li><a href="index.html">Home</a></li>
          <li><a href="pricingV1.html">Pricing</a></li>
          <li><a href="about-usV1.html">About us</a></li>
          <li><a href="serviceV2.html">Service</a></li>
          <li><a href="serviceV3.html">Features</a></li>
          <li><a href="blogV4.html">Blog</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 mb-40">
        <h5 className="title">Legal</h5>
        <ul className="footer-list style-none">
          <li><a href="faqV1.html">Terms of use</a></li>
          <li><a href="faqV1.html">Terms &amp; conditions</a></li>
          <li><a href="faqV1.html">Privacy policy</a></li>
          <li><a href="faqV1.html">Cookie policy</a></li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 mb-40">
        <div className="newsletter">
          <h5 className="title">Newslettert</h5>
          <p>Join over <span>1,000</span> people getting our emails</p>
          <form  onSubmit={handleSubscriber}>
            <input type="email" name="subemail" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="info">We only send interesting and relevant emails.</div>
        </div> {/* /.newsletter */}
      </div>
    </div>
  </div>
  <div className="container">
    <div className="bottom-footer">
      <div className="row">
        <div className="col-lg-4 order-lg-1 mb-15">
          <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
            
          </ul>
        </div>
        {
            footerSocial.map(s=><div className="col-lg-4 order-lg-3 mb-15">
          
            <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
              <li><a href={s.fblink}><i className="fab fa-facebook-f" /></a></li>
              <li><a href={s.inslink}><i className="fab fa-instagram" /></a></li>
             
            </ul>
          </div>)
          }
        
        <div className="col-lg-4 order-lg-2 mb-15">
          {
            footerCopyright.map(f=> <p className="copyright text-center">{f.copyrightText}</p>)
          }
          
        </div>
      </div>
    </div>
  </div>
</footer> {/* /.vcamp-footer-two */}


    
    </>
  );
};

export default Footer;
