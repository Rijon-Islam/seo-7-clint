import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddTeamMembers = () => {


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

    const handleTeamTextSection = (event) => {
        event.preventDefault();
        const teamHeading = event.target.teamHeading.value;
       


        const teamSection = {
            teamHeading,
            


        };

        const url = `http://localhost:5000/add-teammember-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(teamSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Team Members Text is Updated');
            });
    };





    const handleMembersItemSection = (event) => {
        event.preventDefault();
        const teamMemberImg = event.target.teamMemberImg.value;
        const teamMemberName = event.target.teamMemberName.value;
        const teamMemberTitle = event.target.teamMemberTitle.value;
        const fbLink = event.target.fbLink.value;
        const insLink = event.target.insLink.value;
        const liLink = event.target.liLink.value;




        const membersitemSection = {
            teamMemberImg,
            teamMemberName,
            teamMemberTitle,
            fbLink,
            insLink,
            liLink,


        };

        const url = `http://localhost:5000/add-team-Item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(membersitemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Features Services Section is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix ">
                <div className='mt-5'>
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">

                                <h3 className='mt-5'> Update Team Members Text </h3>
                                {
                                    teamtext.length === 1 &&
                                    <>
                                        {teamtext.map(text =>
                                            <Link className='theme-btn-one border0 ripple-btn' to={`/team-text-edit/${text._id}`}> Update Now</Link>
                                        )}
                                    </>
                                }

                                {teamtext.length === 0 &&
                                    <form class="contact-form " onSubmit={handleTeamTextSection}>
                                        <div class="row">
                                         

                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" name="teamHeading" placeholder="Team Heading" required />
                                                </div>
                                            </div>

                                            <div class="slider-btn">
                                                <button class="theme-btn-one border0 ripple-btn" data-animation="fadeInRight" data-delay=".8s"> Add Team Members Text </button>
                                            </div>
                                        </div>

                                    </form>
                                }




                                <h3 className='mt-100 mb-500'> Add Team Members Item </h3>

                                <form class="contact-form " onSubmit={handleMembersItemSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamMemberImg" placeholder="Member Image URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamMemberName" placeholder="Member Name" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamMemberTitle" placeholder="Member Title" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="fbLink" placeholder="Facebook URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="insLink" placeholder="Instagram URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="liLink" placeholder="Linkedin URL" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="theme-btn-one border0 ripple-btn" data-delay=".8s"> Add Member Item</button>
                                        </div>
                                    </div>

                                </form>

                            </div>


                        </div>
                    </div>
                    <div className="container">
                        


                        <div className="row gy-4 justify-content-center mb-5">




                        </div>

                        <section className="team-area bg-top-center overflow-hidden space mt-100">
                            <div className="container">
                                

                                <div className="row slider-shadow th-carousel teamSlide1" id="teamSlide1" data-slide-show={4} data-lg-slide-show={3} data-md-slide-show={2} data-sm-slide-show={2} data-xs-slide-show={1} data-arrows="true">
                                    {
                                        teamitems.map(m => <div className="col-sm-6 col-lg-4 col-xxl-3">
                                            <div className="th-team team-box wow fadeInUp">
                                                <div className="team-img">
                                                    <img src={m.teamMemberImg} alt="Team" />
                                                </div>
                                                <h3 className="box-title">{m.teamMemberName}</h3>
                                                <Link to={`/edit-team-items/${m._id}`}><h3 className="box-title" class="theme-btn-one border0 ripple-btn">Edit Now</h3></Link>


                                            </div>
                                        </div>)
                                    }






                                </div>
                            </div>
                        </section>

                    </div>




                </div>
            </section></>

    );
};

export default AddTeamMembers;







