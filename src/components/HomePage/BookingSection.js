import React from 'react';

const BookingSection = () => {
    return (
        <>

<section className="consultation-section section-gap bg-cover-center triangle-pattern-left have-blob-image overflow-hidden" style={{backgroundImage: 'url(assets/img/consultation-bg.jpg)'}}>
  <div className="container">
    <div className="row justify-content-lg-between align-items-center justify-content-center">
      <div className="col-lg-5 col-md-10">
        <div className="consultation-form-area">
          <div className="consultation-form">
            <h3 className="title">Free Consultation</h3>
            <p className="subtitle">Get More SEO Updates</p>
            <form action="#">
              <div className="input-field">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="input-field">
                <select>
                  <option value={1} disabled selected>Subject</option>
                  <option value={2}>Subject One</option>
                  <option value={3}>Subject Two</option>
                  <option value={4}>Subject Three</option>
                </select>
              </div>
              <div className="input-field">
                <button type="submit" className="theme-btn-one border0 ripple-btn">Get Consultations <i className="far fa-long-arrow-right" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-10">
        <div className="fancy-image-gallery content-l-spacing content-mt-md-50">
          <div className="images-wrap">
            <div className="image-one wow fadeInUp" data-wow-delay="0.1s">
              <img src="assets/img/fancy-gallery/01.jpg" alt="Image" />
            </div>
            <div className="image-two wow fadeInUp" data-wow-delay="0.2s">
              <img src="assets/img/fancy-gallery/02.jpg" alt="Image" />
            </div>
            <div className="image-three wow fadeInUp" data-wow-delay="0.3s">
              <img src="assets/img/fancy-gallery/03.jpg" alt="Image" />
            </div>
            <div className="image-four wow fadeInUp" data-wow-delay="0.4s">
              <img src="assets/img/fancy-gallery/04.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="blob-image">
    <img src="assets/img/shape/blob-white.png" alt />
  </div>
</section>

        
        </>
            
        
    );
};

export default BookingSection;