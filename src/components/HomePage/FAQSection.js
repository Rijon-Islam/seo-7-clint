import React, { useEffect, useState } from 'react';

const FAQSection = () => {
  const [countersec, setCounter] = useState([]);
  const [items, setItems] = useState([]);
  const [faq, setFAQsection] = useState([]);

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

  useEffect(() => {
    fetch(`http://localhost:5000/counters`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);

  return (
    // <div>


    //     <section className="faq-section ptb-100 bg-thin">
    //         <div className="container">
    //             {faq.map((f) => (
    //                 <div className="section-title title-light" key={f.faqHeading}>
    //                     <h2>{f.faqHeading}</h2>
    //                     <p>{f.faqText}</p>
    //                 </div>
    //             ))}

    //             <div className="row">
    //                 <div className="col-lg-6 col-sm-12">
    //                     <div className="panel-group" id="accordion">
    //                         {items.map((e, index) => (
    //                             <div className="panel" key={index}>
    //                                 <div className="panel-heading">
    //                                     <h4 className="panel-title">
    //                                         <a
    //                                             data-bs-toggle="collapse"
    //                                             href={`#collapse${index}`}
    //                                         >
    //                                             {e.accodingTitle}
    //                                         </a>
    //                                     </h4>
    //                                 </div>
    //                                 <div
    //                                     id={`collapse${index}`}
    //                                     className="collapse"
    //                                     data-bs-parent="#accordion"
    //                                 >
    //                                     <div className="panel-body">
    //                                         <p>{e.accodingText}</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>

    //                 {countersec.map((e, index) => (
    //                     <div className="col-lg-6 col-sm-12" key={index}>
    //                         <div className="row">
    //                             <div className="col-lg-6 col-md-6 col-sm-6">
    //                                 <div className="single-feature">
    //                                     <div className="single-feature-content">
    //                                         <i className="envy envy-server" />
    //                                         <h2>{e.happyClientsNumber}+</h2>
    //                                         <h3>{e.happyClientsText}</h3>
    //                                     </div>
    //                                     <div className="hover-overlay" />
    //                                 </div>
    //                             </div>
    //                             <div className="col-lg-6 col-md-6 col-sm-6">
    //                                 <div className="single-feature">
    //                                     <div className="single-feature-content">
    //                                         <i className="envy envy-global2" />
    //                                         <h2>{e.projectCompleteNumber}+</h2>
    //                                         <h3>{e.projectCompleteText}</h3>
    //                                     </div>
    //                                     <div className="hover-overlay" />
    //                                 </div>
    //                             </div>
    //                             <div className="col-lg-6 col-md-6 col-sm-6">
    //                                 <div className="single-feature">
    //                                     <div className="single-feature-content">
    //                                         <i className="envy envy-star" />
    //                                         <h2>{e.yearofExperienceNumber}+</h2>
    //                                         <h3>{e.yearofExperienceText}</h3>
    //                                     </div>
    //                                     <div className="hover-overlay" />
    //                                 </div>
    //                             </div>
    //                             <div className="col-lg-6 col-md-6 col-sm-6">
    //                                 <div className="single-feature">
    //                                     <div className="single-feature-content">
    //                                         <i className="envy envy envy-code2" />
    //                                         <h2>{e.winingAwardNumber}+</h2>
    //                                         <h3>{e.winingAwardText}</h3>
    //                                     </div>
    //                                     <div className="hover-overlay" />
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </section>
    // </div>

    // <div>
    //   &lt;&gt; <section className="faq-section">
    //     <div className="container">
    //       <div className="content-boxed">
    //         <div className="content-left">
    //           <div className="tilke-video" style={{ backgroundImage: 'url(assets/img/faq-video.jpg)' }}>
    //             <a href="https://www.youtube.com/watch?v=XSGBVzeBUbk" className="video-popup" data-lity><i className="fas fa-play" /></a>
    //           </div>
    //         </div>
    //         <div className="content-right">
    //           <div className="section-heading mb-30">
    //             <h2 className="title">Freequently Asked Questions</h2>
    //             <span className="tagline">Best SEO Optimization Agency</span>
    //           </div>
    //           <div className="accordion" id="accordionFaqOne">
    //             <div className="accordion-item accordion-active">
    //               <h5 className="accordion-title collapsed" data-toggle="collapse" aria-expanded="true" data-target="#accordion-1">
    //                 How To Gain  Knowladge About SEO ?
    //               </h5>
    //               <div id="accordion-1" className="collapse show" data-parent="#accordionFaqOne">
    //                 <div className="accordion-content">
    //                   Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida commodo
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="accordion-item">
    //               <h5 className="accordion-title collapsed" data-toggle="collapse" aria-expanded="false" data-target="#accordion-2">
    //                 Benefit Of Digital Marketing ?
    //               </h5>
    //               <div id="accordion-2" className="collapse" data-parent="#accordionFaqOne">
    //                 <div className="accordion-content">
    //                   Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida commodo
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="accordion-item">
    //               <h5 className="accordion-title collapsed" data-toggle="collapse" aria-expanded="false" data-target="#accordion-3">
    //                 Business Development Most Reasons?
    //               </h5>
    //               <div id="accordion-3" className="collapse" data-parent="#accordionFaqOne">
    //                 <div className="accordion-content">
    //                   Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida commodo
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="accordion-item">
    //               <h5 className="accordion-title" data-toggle="collapse" aria-expanded="false" data-target="#accordion-4">
    //                 Improve Performance and Efficiency
    //               </h5>
    //               <div id="accordion-4" className="collapse" data-parent="#accordionFaqOne">
    //                 <div className="accordion-content">
    //                   Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida commodo
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <>
      <div className="vcamp-text-block-five mt-170 lg-mt-120">
        <div className="container">
          {
            faq.map(f=> <div className="row align-items-center">


            <div className="col-xxl-5 col-lg-6">
              <div className="text-wrapper">
                <div className="title-style-five">
                  <div className="upper-title">{f.faqText}</div>
                  <h2 className="title">{f.faqHeading}</h2>
                </div>
                <p className="text-lg">{f.faqDetails}</p>
              </div>
            </div>



            <div className="col-xl-5 col-lg-6 ms-auto">
              <div className="">
                <img src={f.faqImage} alt />
              </div>

            </div>
          </div>)
          }
         
        </div>
      </div>

    </>

  );
};

export default FAQSection;
