import React from 'react';
import { navigate } from 'gatsby';

const ContactUs = () => {
  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value || "";
    const email = event.target.email.value || "";
    const number = event.target.number.value || "";
    const subject = event.target.subject.value || "";
    const message = event.target.message.value || "";
    const messageStatus = "UnRead";

    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,
    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate('/all-messages');
        alert('Message is Updated');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred, please try again later.');
      });
  };

  return (
    <div className="contact-section-five">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="address-block-one text-center mb-40">
              <div className="icon d-flex align-items-center justify-content-center m-auto">
                <img src="images/icon/icon_17.svg" alt="" />
              </div>
              <h5 className="title">Our Address</h5>
              <p>1012 Pebda Parkway, Mirpur 2 <br />Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="address-block-one text-center mb-40">
              <div className="icon d-flex align-items-center justify-content-center m-auto">
                <img src="images/icon/icon_18.svg" alt="" />
              </div>
              <h5 className="title">Contact Info</h5>
              <p>Open a chat or give us a call at <br /><a href="tel:310.841.5500" className="call">310.841.5500</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="address-block-one text-center mb-40">
              <div className="icon d-flex align-items-center justify-content-center m-auto">
                <img src="images/icon/icon_19.svg" alt="" />
              </div>
              <h5 className="title">Live Support</h5>
              <p>Live chat service <br /><a href="#" className="webaddress">www.vcamplivechat.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-meta mt-130 lg-mt-60">
        <div className="row gx-0">
          <div className="col-xl-6 order-xl-last d-flex">
            <div className="form-wrapper dark-bg w-100">
              <div className="form-style-three">
                <h3 className="form-title font-recoleta pb-30 lg-pb-20">Send Message</h3>
                <form onSubmit={handleMessage}>
                  <div className="messages" />
                  <div className="row controls">
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-25">
                        <label htmlFor="name">Name*</label>
                        <input type="text" id="name" placeholder="Your Name" name="name" required />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-25">
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" placeholder="Your Email" name="email" required />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-40">
                        <label htmlFor="category">Select Service*</label>
                        <select className="theme-select-menu" id="category" name="category" required>
                          <option value="">Choose a Service...</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Website Design">Website Design</option>
                          <option value="WordPress">WordPress</option>
                          <option value="Web Analytics">Web Analytics</option>
                          <option value="Web Programming">Web Programming</option>
                          <option value="Infographic Design">Infographic Design</option>
                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-35">
                        <label htmlFor="message">Message*</label>
                        <textarea id="message" placeholder="Your Message" name="message" required defaultValue="" />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="theme-btn-four ripple-btn w-100">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6 order-xl-first d-flex">
            <div className="map-area-two h-100 w-100">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe title="Google Map" className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka%20college&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
