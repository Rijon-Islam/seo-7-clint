import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EditFooterContact = () => {

    const [footerad, setAddressfooter] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/footer-address/${id}`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);


    const handlefooterAddress = (event) => {
        event.preventDefault();

        const Location = event.target.Location.value;
        const Phone = event.target.Phone.value;
        const footerEmail = event.target.footerEmail.value;




        const contactSection = {

            Location,
            Phone,
            footerEmail,




        };

        const url = `http://localhost:5000/footer-address/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Address is Updated');
            });
    };



    return (
        <div className='container vh-100 d-flex align-items-center justify-content-center mt-5 mb-5'>
            <section id="services" class="services-area pt-120 pb-90 fix mt-5 " >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row mt-5 mb-5">

                        <div class="col-lg-8 col-md-12 mt-5">


                            <h2 className='mt-5'> Update Footer Contact </h2>



                            <form class="contact-form " onSubmit={handlefooterAddress}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="Location" defaultValue={footerad.Location} placeholder="Your Location" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control"  name="Phone" defaultValue={footerad.Phone} placeholder="Your Phone" required />
                                        </div>
                                    </div>
                                
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="footerEmail" defaultValue={footerad.footerEmail} placeholder=" Your Email" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="theme-btn-one border0 ripple-btn" data-delay=".8s"> Update Address Details</button>
                                    </div>
                                </div>

                            </form>



                        </div>


                    </div>
                </div>


            </section>
        </div>
    );
};

export default EditFooterContact;