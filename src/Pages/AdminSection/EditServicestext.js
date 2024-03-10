import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditServicestext = () => {

    const [servicetext, setService] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);




    const handleServiceText = (event) => {
        event.preventDefault();
        
        const serviceHeading = event.target.serviceHeading.value;
      

        const serviceSection = {
            
            serviceHeading,
            

        };

        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service Text is Updated');
            });
    };




    return (
        <>
        <HeaderBottom></HeaderBottom>
            {
                <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h3> Update Service Text </h3>

                                <form class="contact-form " onSubmit={handleServiceText}>
                                    <div class="row">

                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="serviceHeading" defaultValue={servicetext.serviceHeading}  placeholder="Service Heading" required />
                                            </div>
                                        </div>
                                        
                                         <div class="slider-btn">
                                            <button class="theme-btn-one border0 ripple-btn" data-animation="fadeInRight" data-delay=".8s"> Update Services Text</button>
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

export default EditServicestext;