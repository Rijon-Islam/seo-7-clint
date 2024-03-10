import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (


    <><div className="pricing-section-one dark-bg mt-100">
      <img src="images/shape/shape_33.svg" alt className="shapes shape-one" />
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-xl-10 col-lg-8 col-md-10 m-auto">
            <div className="title-style-one white-vr text-center">
              <h2 className="title"> Our Best Pricing  <span>Plan</span></h2>
            </div> {/* /.title-style-six */}
          </div>
        </div>

        <div className="pricing-table-area-one mt-100">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="month">
              <div className="row justify-content-center">

                {
                  pricing.map(b => b.packageName === 'Basic' && <div className="col-lg-4 col-md-6">
                    <div className="pr-table-wrapper">
                      <div className="pack-name">{b.packageName} Plan</div>
                      <div className="pack-details"></div>
                      <div className="top-banner d-md-flex">
                        <div className="price"><sup>$</sup>{b.packagePrice}</div>
                        <div>
                          <span></span>
                          <em></em>
                        </div>
                      </div> {/* /.top-banner */}
                      <ul className="pr-feature">
                        <li>{b.packagePointOne}</li>
                        <li>{b.packagePointTwo} </li>
                        <li>{b.packagePointThree}</li>
                        <li>{b.packagePointFour}</li>
                        <li>{b.packagePointFive}</li>
                        <li>{b.packagePointSix}</li>
                        <li>{b.packagePointSeven}</li>
                      </ul>

                      <Link to={`/order-now/${b._id}`} className="trial-button"> {b.packageButtonText} </Link>
                      <div className="trial-text"></div>
                    </div> {/* /.pr-table-wrapper */}
                  </div>)
                }


                {
                  pricing.map(s => s.packageName === 'Premium' && <div className="col-lg-4 col-md-6">
                    <div className="pr-table-wrapper active most-popular">
                      <div className="pack-name">{s.packageName} Plan</div>
                      <div className="pack-details"></div>
                      <div className="top-banner d-md-flex">
                        <div className="price"><sup>$</sup>{s.packagePrice}</div>
                        <div>
                          <span></span>
                          <em></em>
                        </div>
                      </div> {/* /.top-banner */}
                      <ul className="pr-feature">
                        <li> {s.packagePointOne}</li>
                        <li> {s.packagePointTwo}</li>
                        <li>{s.packagePointThree}</li>
                        <li> {s.packagePointFour}</li>
                        <li> {s.packagePointFive}</li>
                        <li> {s.packagePointSix}</li>
                        <li> {s.packagePointSeven}</li>
                        <li>{s.packagePointEight}</li>
                        <li>{s.packagePointNine}</li>
                        <li>{s.packagePointTen}</li>
                      </ul>
                      <Link to={`/order-now/${s._id}`} className="trial-button"> {s.packageButtonText} </Link>
                      <div className="trial-text"></div>
                    </div> {/* /.pr-table-wrapper */}
                  </div>)
                }



                {
                   pricing.map(p => p.packageName === 'Standard' &&<div className="col-lg-4 col-md-6">
                   <div className="pr-table-wrapper">
                     <div className="pack-name">{p.packageName} Plan</div>
                     <div className="pack-details"></div>
                     <div className="top-banner d-md-flex">
                       <div className="price"><sup>$</sup>{p.packagePrice}</div>
                       <div>
                         <span></span>
                         <em></em>
                       </div>
                     </div> {/* /.top-banner */}
                     <ul className="pr-feature">
                     <li> {p.packagePointOne}</li>
                            <li>  {p.packagePointTwo}</li>
                            <li> {p.packagePointThree}</li>
                            <li>  {p.packagePointFour}</li>
                            <li>  {p.packagePointFive}</li>
                            <li>  {p.packagePointSix}</li>
                            <li>  {p.packagePointSeven}</li>
                     </ul>
                    
                     <Link to={`/order-now/${p._id}`} className="trial-button"> {p.packageButtonText} </Link>
                     <div className="trial-text"></div>
                   </div> {/* /.pr-table-wrapper */}
                 </div>)
                }


                
              </div>
            </div>

          </div>
        </div> {/* /.pricing-table-area-one */}
      </div>
    </div> {/* /.pricing-section-one */}
    </>
  );
};

export default PricingSection;