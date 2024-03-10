import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditExperience = () => {

    const [exprience, setExperience] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/experiences/${id}`)
            .then((res) => res.json())
            .then((info) => setExperience(info));
    }, [id]);



    const handleExperienceSection = (event) => {
        event.preventDefault();

        const sliderImage = event.target.sliderImage.value;
        const slidericon = event.target.slidericon.value;
        const sliderHeading = event.target.sliderHeading.value;
        const websiteText = event.target.websiteText.value;
        const websiteURL = event.target.websiteURL.value;
       
       




        const experienceSection = {

            sliderImage,
            slidericon,
            sliderHeading,
            websiteText,
            websiteURL,
           


        };

        const url = `http://localhost:5000/update-experiences/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(experienceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Experience Section is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mb-4" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h3> Update Experience </h3>

                                <form class="contact-form " onSubmit={handleExperienceSection}>
                                    <div class="row">

                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="sliderImage" defaultValue={exprience.sliderImage} placeholder="Slider Image" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="slidericon" defaultValue={exprience.slidericon} placeholder="Slider Icon" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="sliderHeading" defaultValue={exprience.sliderHeading} placeholder="Slider Heading" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="websiteText"  defaultValue={exprience.websiteText} placeholder="Website Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="websiteURL"  defaultValue={exprience.websiteURL} placeholder="Website URL" required />
                                            </div>
                                        </div>
                                       
                                        <div class="slider-btn">
                                            <button class="theme-btn-one border0 ripple-btn" data-animation="fadeInRight" data-delay=".8s"> Update Experience </button>
                                        </div>
                                    </div>

                                </form>
                            



                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default EditExperience;