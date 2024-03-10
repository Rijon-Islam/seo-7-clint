import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const Counter = () => {

    const [countersec, setCounter] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/counters`)
            .then((res) => res.json())
            .then((info) => setCounter(info));
    }, []);


    const handleCounterSection = (event) => {
        event.preventDefault();
        const happyClientsNumber = event.target.happyClientsNumber.value;
        const happyClientsText = event.target.happyClientsText.value;
        const projectCompleteNumber = event.target.projectCompleteNumber.value;
        const projectCompleteText = event.target.projectCompleteText.value;
        const counterImage = event.target.counterImage.value;
       


        const counterSection = {
            happyClientsNumber,
            happyClientsText,
            projectCompleteNumber,
            projectCompleteText,
            counterImage,
            

        };

        const url = `http://localhost:5000/add-counter`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(counterSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Counter is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2>Update Counter</h2>

                            {
                                countersec.length === 1 &&
                                <>
                                    {
                                        countersec.map(c =>
                                            countersec.map(c=>
                                                <Link className='theme-btn-one border0 ripple-btn' to={`/counters/${c._id}`}> Update Counter</Link>)
                                        )
                                    }
                                </>
                            }
                            {
                                countersec.length === 0 &&

                                <form class="contact-form " onSubmit={handleCounterSection}>
                                    <div class="row">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="happyClientsNumber" placeholder="Happy Clients Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="happyClientsText" placeholder="happy Clients Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="projectCompleteNumber" placeholder="Project Complete Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="projectCompleteText" placeholder="Project Complete Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="counterImage" placeholder="Counter Image" required />
                                            </div>
                                        </div>
                                      
                                        
                                        <div class="slider-btn">
                                            <button class="theme-btn-one border0 ripple-btn" data-animation="fadeInRight" data-delay=".8s">Update Counter</button>
                                        </div>
                                    </div>

                                </form>
                            }


                        </div>


                    </div>
                </div>
            </section>
        </div>
        </>
        
    );
};

export default Counter;