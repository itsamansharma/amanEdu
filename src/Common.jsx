import React from 'react'
import { NavLink } from 'react-router-dom';
// import web from "../src/images/banner.jpg"


const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center mt-5">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">

                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {props.name} <br />
                                        <strong className='text-info'>Aman</strong>
                                    </h1>
                                    <h4 className="mb-3">{props.line}</h4>
                                    <div className="mt-3">
                                        <NavLink
                                            to={props.visit}
                                            className="btn btn-outline-info getstarted"
                                            href="">
                                            {props.btname}
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;