import React, { useEffect, useState } from 'react';

const CounterSection = () => {

  const [countersec, setCounter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/counters`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);

  return (
    

    <>

    {
      countersec.map(e=><section className="counter-section counter-boxed">
      <div className="container bg-color-primary section-wave-bg">
        <div className="counter-items row justify-content-lg-between justify-content-center">
          <div className="col-xl-2 col-lg-3 col-sm-5">
            <div className="counter-item counter-white mt-40">
              <div className="counter-wrap">
                <span className="counter">{e.happyClientsNumber}</span>
                <span className="suffix">+</span>
              </div>
              <h6 className="title">{e.happyClientsText}</h6>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-5">
            <div className="counter-item counter-white mt-40">
              <div className="counter-wrap">
                <span className="counter">{e.projectCompleteNumber}</span>
                <span className="suffix">+</span>
              </div>
              <h6 className="title">{e.projectCompleteText}</h6>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-5">
            <div className="counter-item counter-white mt-40">
              <div className="counter-wrap">
                <span className="counter">{e.yearofExperienceNumber}</span>
                <span className="suffix">+</span>
              </div>
              <h6 className="title">{e.yearofExperienceText}</h6>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-5">
            <div className="counter-item counter-white mt-40">
              <div className="counter-wrap">
                <span className="counter">{e.winingAwardNumber}</span>
                <span className="suffix">+</span>
              </div>
              <h6 className="title">{e.winingAwardText}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>)
    }


    </>
  );
};

export default CounterSection;