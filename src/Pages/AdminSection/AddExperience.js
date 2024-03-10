import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddExperience = () => {

    const [exprience, setExperience] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/experiences`)
            .then((res) => res.json())
            .then((info) => setExperience(info));
    }, []);



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

        const url = `http://localhost:5000/add-experience`;
        fetch(url, {
            method: "POST",
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
                            <h3> Add Update Experience </h3>

                            


                                <form class="contact-form " onSubmit={handleExperienceSection}>
                                    <div class="row">

                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="sliderImage" placeholder="Image URL" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="slidericon" placeholder="Icon URL" required />
                                            </div>
                                        </div>
                                       

                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="sliderHeading" placeholder="Slider Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="websiteText" placeholder="Website Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="websiteURL" placeholder="Website URL" required />
                                            </div>
                                        </div>
                                       
                                       
                                        
                                        
                                        <div class="slider-btn">
                                            <button class="theme-btn-one border0 ripple-btn" data-animation="fadeInRight" data-delay=".8s"> Update Experience </button>
                                        </div>
                                    </div>

                                </form>
                            



                        </div>

                        <section className="service-section section-gap mt-100" id="service-sec">
                            <div className="container">
                                

                                <div className="row justify-content-center">

                                    {
                                        exprience.map(s => <div className="col-lg-4 col-sm-6 wow fadeInUp">
                                            <div className="iconic-box icon-left mt-30">
                                                <div className="icon">
                                                    <img src={s.sliderImage} alt="Icon" />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">
                                                        <p >{s.sliderHeading}</p>
                                                        <Link to={`/edit-experience/${s._id}`} className='btn btn-primary'>Edit Experience</Link>
                                                    </h5>
                                                    <p>{s.serviceDetails}</p>
                                                </div>
                                            </div>
                                        </div>)
                                    }





                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </section>
        </>
    );
};

export default AddExperience;