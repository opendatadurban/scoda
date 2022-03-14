import React from 'react';

const Hero = ({ setIsOpen }) => {
    return (
        <div className="socr--hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 hero--image">
                        <img src="/static/dist/img/image_hero-banner.png" alt="" />
                    </div>
                    <div className="col-md-7 hero--content ">
                        <h5 className="hero--title">
                            State of Cities Report
                        </h5>
                        <p className="hero--p">
                            State of Cities Reports produce solid and up-to-date information that helps
                            inform and support the work of urban actors across different sectors of society, as well as research into how to make South
                            African cities functional.
                        </p>
                        <div className="hero--btn" onClick={(e)=>{setIsOpen(true)}}>
                            View Reports
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Hero;