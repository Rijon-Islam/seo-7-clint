import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const ServicesSection = () => {

    const [service, setService] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleServiceSection = (event) => {
        event.preventDefault();

        const serviceHeading = event.target.serviceHeading.value;


        const serviceSection = {

            serviceHeading,


        };

        const url = `http://localhost:5000/add-Service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();

        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {

            serviceIcon,
            serviceTitle,
            serviceDetails,
        };

        const url = `http://localhost:5000/add-service-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Added');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>

            <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h3 className='mt-5'> Update Service </h3>
                            {
                                service.length === 1 &&
                                <> {
                                    service.map(s => <Link className='theme-btn-one border0 ripple-btn' to={`/servicetext-edit/${s._id}`}>Update Service</Link>)
                                }</>

                            }
                            {
                                service.length === 0 &&
                                <form class="contact-form " onSubmit={handleServiceSection}>
                                    <div class="row">



                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="serviceHeading" placeholder="Service Heading" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="theme-btn-one border0 ripple-btn" data-animation="fadeInRight" data-delay=".8s"> Update Services </button>
                                        </div>
                                    </div>

                                </form>
                            }

                            <h3 className='mt-5'>Add Service</h3>
                            <form class="contact-form" onSubmit={handleAddItem}>
                                <div class="row">



                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceIcon" placeholder="Service Icon" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceTitle" placeholder="Service Title" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceDetails" placeholder="Service Details" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="theme-btn-one border0 ripple-btn" data-animation="fadeInRight" data-delay=".8s"> Add Service </button>
                                    </div>
                                </div>

                            </form>



                        </div>





                        <div className="row">

                            {
                                items.map(e => <div className="col-lg-3 col-sm-6" data-aos="fade-up">
                                    <div className="card-style-three mt-50">
                                        <div className="icon d-flex align-items-center justify-content-center"><img src={e.serviceIcon} alt className="tran3s" /></div>
                                        <h4 className="title">{e.serviceTitle}</h4>
                                        <Link to={`/service-edit/${e._id}`} className='btn btn-primary'>Edit Services</Link>
                                        <ul className="style-none">
                                            <p>{e.serviceDetails}</p>
                                        </ul>
                                    </div>
                                </div>)
                            }


                        </div>





                    </div>
                </div>

            </section>

        </>
    );
};

export default ServicesSection;