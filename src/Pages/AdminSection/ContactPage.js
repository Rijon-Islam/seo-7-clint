import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ContactPage = () => {


    const [contactpage, setContactPage] = useState([]);
    const [contact, setcontactItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/contacts`)
            .then((res) => res.json())
            .then((info) => setContactPage(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/contacts`)
            .then((res) => res.json())
            .then((info) => setcontactItems(info));
    }, []);




    const handleContactSection = (event) => {
        event.preventDefault();
        const contactImg = event.target.contactImg.value;
        const contactTitle = event.target.contactTitle.value;
        const contactDetails = event.target.contactDetails.value;




        const contactSection = {
            contactImg,
            contactTitle,
            contactDetails,




        };

        const url = `http://localhost:5000/add-contact`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Contcat Section is Updated');
            });
    };



    return (
        // <div className='container d-flex align-items-center justify-content-center'>
        //     <section id="services" class="services-area pt-120 pb-90 fix" >



        //         <div class="container">
        //             <div class="row">

        //             </div>
        //             <div class="row">

        //                 <div class="col-lg-8 col-md-12">
        //                     <h2> Update Contact </h2>



        //                     <form class="contact-form " onSubmit={handleContactSection}>
        //                         <div class="row">
        //                             <div class="col-lg-12">
        //                                 <div class="contact-field p-relative c-name mb-20">

        //                                     <input type="text" id="firstn" name="contactImg" placeholder=" Image Url" required />
        //                                 </div>
        //                             </div>

        //                             <div class="col-lg-12">
        //                                 <div class="contact-field p-relative c-name mb-20">
        //                                     <input type="text" id="firstn" name="contactTitle" placeholder="contact Title" required />
        //                                 </div>
        //                             </div>
        //                             <div class="col-lg-12">
        //                                 <div class="contact-field p-relative c-name mb-20">
        //                                     <input type="text" id="firstn" name="contactDetails" placeholder=" Contact Details" required />
        //                                 </div>
        //                             </div>


        //                             <div class="slider-btn">
        //                                 <button class="theme-btn-one border0 ripple-btn" data-delay=".8s"> Add Contcat Details</button>
        //                             </div>
        //                         </div>

        //                     </form>


        //                 </div>




        //             </div>
        //         </div>
        //         <div className="container">


        //             <div className="row">
        //                 <div className="col-lg-12">
        //                     <div className="section-title center-align text-center mb-50">
        //                         <h5> Contact Section</h5>
        //                         <h2> Contact Details List</h2>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div class="col-lg-4 col-md-12">

        //                     {
        //                         contact.map(c => <div class="services-box mt-0 mb-30 text-center">
        //                             <div class="services-icon">
        //                                 <img src={c.contactImg} alt="icon01" />
        //                             </div>
        //                             <div class="services-content2">




        //                                 <Link to={`/edit-contact-page/${c._id}`} >
        //                                     <h5>{c.contactTitle}</h5>
        //                                 </Link>
        //                                 <p>{c.contactDetails} </p>

        //                             </div>
        //                         </div>)

        //                     }






        //                 </div>
        //             </div>

        //         </div>


        //     </section>
        // </div>

      <div>
  <div className="inside-hero-three">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <h2 className="page-title font-recoleta">Get In <span>touch</span> with us</h2>
        </div>
        <div className="col-xxl-5 col-md-6 ms-auto">
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for layouts and visual mockups</p>
        </div>
      </div>
    </div>
  </div> {/* /.inside-hero-three */}
  {/* 
			=============================================
				Contact Section Five
			============================================== 
			*/}
  <div className="contact-section-five">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="address-block-one text-center mb-40">
            <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_17.svg" alt /></div>
            <h5 className="title">Our Address</h5>
            <p>1012 Pebda Parkway, Mirpur 2 <br />Dhaka, Bangladesh</p>
          </div> {/* /.address-block-one */}
        </div>
        <div className="col-md-4">
          <div className="address-block-one text-center mb-40">
            <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_18.svg" alt /></div>
            <h5 className="title">Contact Info</h5>
            <p>Open a chat or give us call at <br /><a href="tel:310.841.5500" className="call">310.841.5500</a></p>
          </div> {/* /.address-block-one */}
        </div>
        <div className="col-md-4">
          <div className="address-block-one text-center mb-40">
            <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_19.svg" alt /></div>
            <h5 className="title">Live Support</h5>
            <p>live chat service <br /><a href="#" className="webaddress">www.vcamplivechat.com</a></p>
          </div> {/* /.address-block-one */}
        </div>
      </div>
    </div>
    <div className="contact-meta mt-130 lg-mt-60">
      <div className="row gx-0">
        <div className="col-xl-6 order-xl-last d-flex">
          <div className="form-wrapper dark-bg w-100">
            <div className="form-style-three">
              <h3 className="form-title font-recoleta pb-30 lg-pb-20">Send Message.</h3>
              <form action="inc/contact.php" id="contact-form" data-toggle="validator">
                <div className="messages" />
                <div className="row controls">
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-25">
                      <label>Name*</label>
                      <input type="text" placeholder="Rashed Kabir" name="name" required="required" data-error="Name is required." />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-25">
                      <label>Email*</label>
                      <input type="email" placeholder="rshdkabir@gmail.com" name="email" required="required" data-error="Valid email is required." />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-40">
                      <label>Select Service*</label>
                      <select className="theme-select-menu" placeholder="Choose a Service...." name="category" required="required">
                        <option value>Choose a Service....</option>
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
                      <textarea placeholder="Your message*" name="message" required="required" data-error="Please,leave us a message." defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12"><button className="theme-btn-four ripple-btn w-100">Send Message</button></div>
                </div>
              </form>
            </div> {/* /.form-style-three */}
          </div> {/* /.form-wrapper */}
        </div>
        <div className="col-xl-6 order-xl-first d-flex">
          <div className="map-area-two h-100 w-100">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe className="gmap_iframe" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=dhaka collage&t=&z=12&ie=UTF8&iwloc=B&output=embed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> {/* /.contact-meta */}
  </div> {/* /.contact-section-five */}
</div>

    );
};

export default ContactPage;