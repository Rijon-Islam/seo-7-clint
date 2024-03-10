import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const FAQtextEdit = () => {

    const [faqtext, setService] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/faq/${id}`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);




    const handleFAQText = (event) => {
        event.preventDefault();
        const faqText = event.target.faqText.value;
        const faqHeading = event.target.faqHeading.value;
        const faqDetails = event.target.faqDetails.value;
        const faqImage = event.target.faqImage.value;
       


        const faqSection = {
            faqText,
            faqHeading,
            faqDetails,
            faqImage,
           

        };

        const url = `http://localhost:5000/faq/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(faqSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' FAQ Text is Updated');
            });
    };




    return (
        <>
        <HeaderBottom></HeaderBottom>
            {
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h3 className='mb-50'> Update Why Choose Text </h3>

                                <form class="contact-form " onSubmit={handleFAQText}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="faqText" defaultValue={faqtext.faqText} placeholder="Why Choose Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="faqHeading" defaultValue={faqtext.faqHeading} placeholder="Why Choose Heading" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="faqDetails" defaultValue={faqtext.faqDetails} placeholder="Why Choose Details" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="faqImage" defaultValue={faqtext.faqImage} placeholder="Why Choose Image" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button class="theme-btn-one border0 ripple-btn" data-animation="fadeInRight" data-delay=".8s"> Update Why Choose Text </button>
                                        </div>
                                    </div>

                                </form>



                            </div>



                        </div>
                    </div>

                </section>
            }
        </>
    );
};

export default FAQtextEdit;