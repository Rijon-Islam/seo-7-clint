import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddFAQs = () => {
    const [faq, setFAQsection] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/faq`)
            .then((res) => res.json())
            .then((info) => setFAQsection(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/faq-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);

    const handleFAQtext = (event) => {
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

        const url = `http://localhost:5000/add-faq`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(faqSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert(' FAQ is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        const accodingText = event.target.accodingText.value;
        const accodingTitle = event.target.accodingTitle.value;

        const faqitemSection = {
            accodingText,
            accodingTitle,
        };

        const url = `http://localhost:5000/add-faq-item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(faqitemSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert(' FAQ Item is Added');
            });
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div className='mt-5'>
                <section id='services' class='services-area pt-120 pb-90 fix'>
                    <div class='container'>
                        <div class='row'></div>
                        <div class='row'>
                            <div class='col-lg-8 col-md-12'>
                                <h3 className='mb-5' > Update Why Choose</h3>
                                {faq.length === 1 && (
                                    <>
                                        {faq.map((s) => (
                                            <Link
                                                className='theme-btn-one border0 ripple-btn'
                                                to={`/faqtext-edit/${s._id}`}
                                            >
                                                Update Why Choose
                                            </Link>
                                        ))}
                                    </>
                                )}
                                {faq.length === 0 && (
                                    <form
                                        class='contact-form '
                                        onSubmit={handleFAQtext}
                                    >
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="faqText" placeholder="Why Choose Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="faqHeading" placeholder="Why Choose Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="faqDetails" placeholder="Why Choose Details" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="faqImage" placeholder="Why Choose Image" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="theme-btn-one border0 ripple-btn" data-animation="fadeInRight" data-delay=".8s"> Add Why Choose Text </button>
                                        </div>
                                    </form>
                                )}

                                

                              
                            </div>
                           
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AddFAQs;