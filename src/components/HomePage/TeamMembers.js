import React, { useEffect, useState } from 'react';

const TeamMembers = () => {

  const [teamtext, setTeamText] = useState([]);

  const [teamitems, setsetTeammember] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/teamstext`)
      .then((res) => res.json())
      .then((info) => setTeamText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/teamitems`)
      .then((res) => res.json())
      .then((info) => setsetTeammember(info));
  }, []);



  return (
    <>
      <div className="team-section-one mt-200 lg-mt-120">
        <div className="container">
          {/* Title and Navigation Arrows */}
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-sm-8">
              <div className="title-style-five text-center text-sm-start">
                {
                  teamtext.map(t=><h2 className="title">{t.teamHeading}</h2>)
                }
                
                
              </div>
            </div>
            <div className="col-md-6 col-sm-4 d-flex justify-content-center justify-content-sm-end">
              {/* Navigation Arrows */}
              <ul className="slider-arrows d-flex style-none xs-mt-30">
                <li className="prev_team1 slick-arrow ripple-btn"><i className="bi bi-arrow-left" /></li>
                <li className="next_team1 slick-arrow ripple-btn"><i className="bi bi-arrow-right" /></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Team Members */}


        <div className="d-flex flex-wrap justify-content-center mt-100">
          {
            teamitems.map(t => <div className="item col-lg-3 col-md-3 col-sm-6 col-6 m-2 p-3">



              <div className="team-block-one position-relative">
                <img src={t.teamMemberImg} alt="Team Member 1" className="team-img w-100" />
                <div className="overlay-bg d-flex align-items-end">
                  <div className="hover-content tran3s">
                    <h6 className="name">{t.teamMemberName}</h6>
                    <div className="position">{t.teamMemberTitle}</div>
                    {/* Social Media Links */}
                    <ul className="social-icon d-flex style-none">
                      <li><a href={t.fbLink}><i className="fab fa-facebook-f" /></a></li>
                      <li><a href={t.insLink}><i className="fab fa-instagram" /></a></li>
                      <li><a href={t.liLink}><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>)
          }








        </div>
      </div>











    </>
  );
};

export default TeamMembers;